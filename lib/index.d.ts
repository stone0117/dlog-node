/**
 *
 * @return
 */
declare function isSafari(): boolean;

/**
 *
 * @return
 */
declare function isEdge(): boolean;

/**
 *
 * @return
 */
declare function isIE(): boolean;

/**
 *
 * @return
 */
declare function isChrome(): boolean;

/**
 *
 * @param obj
 * @param variableName
 * @param trace
 */
declare function dlog(obj: any, variableName?: string | IArguments, trace?: boolean): void;

/**
 *
 * @param obj
 * @param variableName
 * @param stack
 */
declare function logFunction(obj: any, variableName: string | IArguments, stack: any): void;

/**
 *
 */
declare function getStack(): any;

/**
 * function getStackTrace() {
 *   var obj = {}
 *   Error.captureStackTrace(obj, getStackTrace)
 *   return obj.stack
 * }
 * @return
 */
declare function now_time(): string;

/**
 *
 * @param obj
 * @param variableName
 * @param typeStringValue
 * @param stack
 */
declare function finalPrint(obj: string, variableName: string | IArguments, typeStringValue: string, stack: any): void;

/**
 *
 * @param obj
 * @return
 */
declare function getAllInformation(obj: any): any;

/**
 *
 * @param obj
 * @return
 */
declare function getMethods(obj: any): any;

