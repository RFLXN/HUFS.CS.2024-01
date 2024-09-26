import { toBase64 as stdlibToBase64, toString as stdlibToString } from "./stdlib";
import { toBase64 as algorithmToBase64 } from "./self-implement.encode";
import { toString as algorithmToString } from "./self-implement.decode";

const asciiOnlyOriginal = "ASCII only string 0123456789";               // ASCII only string
const nonAsciiOriginal = "UTF-8 기반 유니코드 문자열 コンピューター保安";         // Non-ASCII (UTF-8) string 

// Base64 encoded string (ASCII only)
const stdlibAsciiBase64 = stdlibToBase64(asciiOnlyOriginal);            // by stdlib
const algorithmAsciiBase64 = algorithmToBase64(asciiOnlyOriginal);      // by self-implemented algorithm

// decoded string (ASCII only)
const stdlibAsciiDecoded = stdlibToString(stdlibAsciiBase64);           // by stdlib
const algorithmAsciiDecoded = algorithmToString(algorithmAsciiBase64);  // by self-implemented algorithm

// Base64 encoded string (Non-ASCII)
const stdlibNonAsciiBase64 = stdlibToBase64(nonAsciiOriginal);          // by stdlib
const algorithmNonAsciiBase64 = algorithmToBase64(nonAsciiOriginal);    // by self-implemented algorithm

// decoded string (Non-ASCII)
const stdlibNonAsciiDecoded = stdlibToString(stdlibNonAsciiBase64);     // by stdlib
const algorithmNonAsciiDecoded = algorithmToString(algorithmNonAsciiBase64);  // by self-implemented algorithm


console.log(`---------- ASCII only string "${asciiOnlyOriginal}" ----------`);
console.log(`Base64 encoded by stdlib:\t\t\t\t${stdlibAsciiBase64}`);
console.log(`Base64 encoded by self-implemented algorithm:\t${algorithmAsciiBase64}`);
console.log(`Decoded by stdlib:\t\t\t\t\t${stdlibAsciiDecoded}`);
console.log(`Decoded by self-implemented algorithm:\t\t\t${algorithmAsciiDecoded}`);

console.log();

console.log(`---------- Non-ASCII string "${nonAsciiOriginal}" ----------`);
console.log(`Base64 encoded by stdlib:\t\t\t\t${stdlibNonAsciiBase64}`);
console.log(`Base64 encoded by self-implemented algorithm:\t${algorithmNonAsciiBase64}`);
console.log(`Decoded by stdlib:\t\t\t\t\t${stdlibNonAsciiDecoded}`);
console.log(`Decoded by self-implemented algorithm:\t\t\t${algorithmNonAsciiDecoded}`);

