const BASE64_TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

const BASE64_TABLE_REVERSE: Record<string, number> = (() => {
    const table: Record<string, number> = {};
    for (let i = 0; i < BASE64_TABLE.length; i++) {
        table[BASE64_TABLE[i]] = i;
    }
    return table;
})();

export { BASE64_TABLE, BASE64_TABLE_REVERSE };