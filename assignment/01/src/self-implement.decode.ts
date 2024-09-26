import { BASE64_TABLE_REVERSE } from "./table";

// make base64 string to 64-digits number array
const to64digits = (b64string: string): number[] => {
    const decimals: number[] = [];

    for (const char of b64string) {
        if (char === "=") {
            break;
        }
        decimals.push(BASE64_TABLE_REVERSE[char]);
    }

    return decimals;
}

// make 64-digits number array to bits
const toBits = (decimals: number[]): number[] => {
    const digitBits: number[][] = decimals.map(d => {
        const s = d.toString(2).padStart(6, '0');
        return s.split("").map(b => Number(b));
    })
    return digitBits.flat();
}

// make bits to utf-8 string
const toUtf8 = (bits: number[]): string => {
    const bytes: number[] = [];

    // slice bits to bytes (8 bits)
    for (let i = 0; i < bits.length; i += 8) {
        const byteBits = bits.slice(i, i + 8);
        const byteValue = parseInt(byteBits.join(""), 2);
        bytes.push(byteValue);
    }

    // convert bytes to utf-8 string
    return Buffer.from(bytes).toString("utf8");
}

/**
 * function for decoding base64 to string by self-implemented algorithm
 */
export const toString = (b64: string): string => {
    const values = to64digits(b64);
    const bits = toBits(values);

    return toUtf8(bits);
}