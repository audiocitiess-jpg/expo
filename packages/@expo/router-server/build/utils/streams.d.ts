/**
 * Buffers HTML output until `</head>` is found, injects the provided content, then switches to
 * passthrough mode for the rest of the stream.
 */
export declare function createHeadInjectionTransform(injectionParts: string[]): TransformStream<Uint8Array, Uint8Array>;
//# sourceMappingURL=streams.d.ts.map