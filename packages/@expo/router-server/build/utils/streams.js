"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHeadInjectionTransform = createHeadInjectionTransform;
const HEAD_CLOSE_TAG = '</head>';
/**
 * Buffers HTML output until `</head>` is found, injects the provided content, then switches to
 * passthrough mode for the rest of the stream.
 */
function createHeadInjectionTransform(injectionParts) {
    let buffer = '';
    let injected = false;
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    const injection = injectionParts.join('');
    return new TransformStream({
        transform(chunk, controller) {
            const decodedChunk = decoder.decode(chunk, { stream: true });
            if (injected) {
                controller.enqueue(encoder.encode(decodedChunk));
                return;
            }
            buffer += decodedChunk;
            const headCloseIdx = buffer.indexOf(HEAD_CLOSE_TAG);
            if (headCloseIdx !== -1) {
                const before = buffer.slice(0, headCloseIdx);
                const after = buffer.slice(headCloseIdx);
                injected = true;
                buffer = '';
                controller.enqueue(encoder.encode(before + injection + after));
                return;
            }
        },
        flush(controller) {
            const trailing = decoder.decode();
            if (trailing) {
                if (injected) {
                    controller.enqueue(encoder.encode(trailing));
                    return;
                }
                buffer += trailing;
            }
            if (!injected) {
                controller.error(new Error(`Streaming SSR head injection failed: missing ${HEAD_CLOSE_TAG} in HTML output.`));
            }
        },
    });
}
//# sourceMappingURL=streams.js.map