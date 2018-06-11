/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Constant values. */
export declare const Constants: {
    TRACE_CONTEXT_HEADER_NAME: string;
    TRACE_AGENT_REQUEST_HEADER: string;
    TRACE_OPTIONS_TRACE_ENABLED: number;
    TRACE_SERVICE_SPAN_NAME_LIMIT: number;
    TRACE_SERVICE_LABEL_KEY_LIMIT: number;
    TRACE_SERVICE_LABEL_VALUE_LIMIT: number;
};
/**
 * An enumeration of the possible "types" of spans.
 */
export declare enum SpanDataType {
    /**
     * This span object was created in circumstances where it is impossible to
     * determine the associated request, and does not represent a real trace span.
     * Getting a span object of this type should be considered an error.
     */
    UNCORRELATED = "UNCORRELATED",
    /**
     * This span object was created in circumstances where a trace span could not
     * be created for one of the following reasons:
     * (1) The Trace Agent is disabled, either explicitly or because a project ID
     *     couldn't be determined.
     * (2) The configured tracing policy disallows tracing for this request
     *     (due to sampling restrictions, ignored URLs, etc.)
     * (3) The current incoming request contains trace context headers that
     *     explicitly disable local tracing for the request.
     * Getting a span object of this type should not be considered an error.
     */
    UNTRACED = "UNTRACED",
    /**
     * This span object was created by TraceAgent#runInRootSpan, and represents
     * an incoming request.
     */
    ROOT = "ROOT",
    /**
     * This span object was created by TraceAgent#createChildSpan, and represents
     * an outgoing RPC on behalf of an incoming request.
     */
    CHILD = "CHILD",
}
