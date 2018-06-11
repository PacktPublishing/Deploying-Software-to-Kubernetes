import { Config } from './config';
import * as PluginTypes from './plugin-types';
export { Config, PluginTypes };
/**
 * Start the Trace agent that will make your application available for
 * tracing with Stackdriver Trace.
 *
 * @param config - Trace configuration
 *
 * @resource [Introductory video]{@link
 * https://www.youtube.com/watch?v=NCFDqeo7AeY}
 *
 * @example
 * trace.start();
 */
export declare function start(projectConfig?: Config): PluginTypes.TraceAgent;
export declare function get(): PluginTypes.TraceAgent;
