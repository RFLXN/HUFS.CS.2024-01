import { BASE64_TABLE } from "./table";

// convert string to bits
const toBits = (s: string): number[] => {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(s);
    const bits: number[] = [];

    for (const byte of bytes) {
        for (let i = 7; i >= 0; i--) {
            bits.push((byte >> i) & 1);
        }
    }
    return bits;
}

// slice to 6-bits and convert it to decimal
const to64digits = (bits: number[]): number[] => {
    const bitGroups: number[][] = [];
    for (let i = 0; i < bits.length; i += 6) {
        const group = bits.slice(i, i + 6);
        // If the last group has fewer than 6 bits, pad it with zeros
        while (group.length < 6) {
            group.push(0);
        }
        bitGroups.push(group);
    }

    return bitGroups.map(group => {
        let value = 0;
        for (let i = 0; i < 6; i++) {
            value = (value << 1) | group[i];
        }
        return value;
    });
}

// convert decimal to base64 by base64 table
const valuesToBase64 = (values: number[]): string => {
    let result = values.map(v => BASE64_TABLE[v]).join("");

    // add padding (=) for 8-byte matching
    const paddingLength = (4 - (result.length % 4)) % 4;
    result += "=".repeat(paddingLength);

    return result;
};

/**
 * function for encoding a string to base64 by self-implemented algorithm
 */
export const toBase64 = (s: string): string => {
    const bits = toBits(s);
    const values = to64digits(bits);
    return valuesToBase64(values);
};