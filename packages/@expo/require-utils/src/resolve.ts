import fs from 'node:fs';
import Module from 'node:module';
import path from 'node:path';

declare module 'node:module' {
  export function _nodeModulePaths(base: string): readonly string[];
  export function _resolveFilename(mod: string, parent?: Partial<Module>): string;
  export const _extensions: Record<string, unknown>;
}

export interface ResolveFromParams {
  followSymlinks?: boolean;
  extensions?: readonly string[];
}

export function resolveFrom(
  fromDirectory: string,
  moduleId: string,
  params?: ResolveFromParams
): string | null {
  const resolved = path.resolve(fromDirectory, moduleId);
  if (fs.existsSync(resolved)) {
    return resolved;
  }

  if (params?.extensions) {
    for (let ext of params.extensions) {
      ext = ext[0] !== '.' ? `.${ext}` : ext;
      const withExt = resolved + ext;
      if (fs.existsSync(withExt)) {
        return withExt;
      }
    }
  }

  if (!params?.followSymlinks) {
    const resolvedDir = path.resolve(fromDirectory);
    const exts = params?.extensions ?? Object.keys(Module._extensions);
    const moduleDirs = Module._nodeModulePaths(resolvedDir);
    for (const modulesDir of moduleDirs) {
      const candidate = path.join(modulesDir, moduleId);
      if (fs.existsSync(candidate)) {
        return candidate;
      }
      for (const ext in exts) {
        const candidateWithExt = candidate + ext;
        if (fs.existsSync(candidateWithExt)) {
          return candidateWithExt;
        }
      }
    }
  }

  if (params?.extensions) {
    for (let ext of params?.extensions) {
      ext = ext[0] !== '.' ? `.${ext}` : ext;
      const withExt = moduleId + ext;
      const resolved = path.join(fromDirectory, withExt);
      if (fs.existsSync(resolved)) {
        return resolved;
      }
    }
  }

  return nativeResolveFrom(fromDirectory, moduleId);
}

function nativeResolveFrom(fromDirectory: string, moduleId: string): string | null {
  try {
    const resolvedDir = maybeResolve(fromDirectory);
    const fromFile = path.join(resolvedDir, 'index.js');
    return Module._resolveFilename(moduleId, {
      id: fromFile,
      filename: fromFile,
      paths: [...Module._nodeModulePaths(resolvedDir)],
    });
  } catch {
    return null;
  }
}

function maybeResolve(target: string): string {
  target = path.resolve(process.cwd(), target);
  try {
    return fs.realpathSync(target);
  } catch {
    return target;
  }
}
