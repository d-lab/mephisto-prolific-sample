export const frameToMs = (frame, fps) => (frame * 1000) / fps;

export const msToFrame = (ms, fps) => (ms * fps) / 1000;