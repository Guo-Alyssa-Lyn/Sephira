import { NetworkNode, Connection } from './types';

export const initWebGL = (canvas: HTMLCanvasElement) => {
  const gl = canvas.getContext('webgl');
  if (!gl) {
    throw new Error('WebGL not supported');
  }

  // Set up WebGL context
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  return gl;
};

export const renderFrame = (gl: WebGLRenderingContext, nodes: NetworkNode[], connections: Connection[]) => {
  // Clear the canvas
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Render nodes and connections
  // This is a placeholder - actual WebGL rendering code would go here
}; 