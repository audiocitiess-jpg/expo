"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveFrom = resolveFrom;
function _nodeFs() {
  const data = _interopRequireDefault(require("node:fs"));
  _nodeFs = function () {
    return data;
  };
  return data;
}
function _nodeModule() {
  const data = _interopRequireDefault(require("node:module"));
  _nodeModule = function () {
    return data;
  };
  return data;
}
function _nodePath() {
  const data = _interopRequireDefault(require("node:path"));
  _nodePath = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function resolveFrom(fromDirectory, moduleId, params) {
  const resolved = _nodePath().default.resolve(fromDirectory, moduleId);
  if (_nodeFs().default.existsSync(resolved)) {
    return resolved;
  }
  if (params?.extensions) {
    for (let ext of params.extensions) {
      ext = ext[0] !== '.' ? `.${ext}` : ext;
      const withExt = resolved + ext;
      if (_nodeFs().default.existsSync(withExt)) {
        return withExt;
      }
    }
  }
  if (!params?.followSymlinks) {
    const resolvedDir = _nodePath().default.resolve(fromDirectory);
    const exts = params?.extensions ?? Object.keys(_nodeModule().default._extensions);
    const moduleDirs = _nodeModule().default._nodeModulePaths(resolvedDir);
    for (const modulesDir of moduleDirs) {
      const candidate = _nodePath().default.join(modulesDir, moduleId);
      if (_nodeFs().default.existsSync(candidate)) {
        return candidate;
      }
      for (const ext in exts) {
        const candidateWithExt = candidate + ext;
        if (_nodeFs().default.existsSync(candidateWithExt)) {
          return candidateWithExt;
        }
      }
    }
  }
  if (params?.extensions) {
    for (let ext of params?.extensions) {
      ext = ext[0] !== '.' ? `.${ext}` : ext;
      const withExt = moduleId + ext;
      const resolved = _nodePath().default.join(fromDirectory, withExt);
      if (_nodeFs().default.existsSync(resolved)) {
        return resolved;
      }
    }
  }
  return nativeResolveFrom(fromDirectory, moduleId);
}
function nativeResolveFrom(fromDirectory, moduleId) {
  try {
    const resolvedDir = maybeResolve(fromDirectory);
    const fromFile = _nodePath().default.join(resolvedDir, 'index.js');
    return _nodeModule().default._resolveFilename(moduleId, {
      id: fromFile,
      filename: fromFile,
      paths: [..._nodeModule().default._nodeModulePaths(resolvedDir)]
    });
  } catch {
    return null;
  }
}
function maybeResolve(target) {
  target = _nodePath().default.resolve(process.cwd(), target);
  try {
    return _nodeFs().default.realpathSync(target);
  } catch {
    return target;
  }
}
//# sourceMappingURL=resolve.js.map