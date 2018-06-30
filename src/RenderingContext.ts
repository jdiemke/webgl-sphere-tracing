/**
 * Stores the currently active rendering context in a global variable.
 */

export let context: WebGLRenderingContext = null;

export function setCurrentContext(currentContext: WebGLRenderingContext): void {
    context = currentContext;
}
