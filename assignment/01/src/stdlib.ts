/**
 * function for encode string to base64 by node.js standard library
 */
export const toBase64 = (s: string): string => Buffer.from(s).toString("base64");

// this is same with this:
function __toBase64(s: string): string {
    return Buffer.from(s).toString("base64");
}


/**
 * function for decode base64 to string by node.js standard library
 */
export const toString = (b64: string): string => Buffer.from(b64, "base64").toString();

// this is same with this:
function __toString(b64: string): string {
    return Buffer.from(b64, "base64").toString();
}