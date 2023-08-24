export const deleteLSKey = (key: string) => {
    if (!key) return null;

    return localStorage.removeItem(key);
}

export const getLSItem = (key: string): string | null => {
    if (!key) return null;

    return localStorage.getItem(key);

}

export const storeLSItem = (key: string, value: string): boolean => {
    if (!key || !value) return false;

    try {
        localStorage.setItem(key, value);
        return true;
    } catch(error) {
        console.log(`[HOZON error] Storing LS item with key ${key} and ${value}: ${error}`);
        return false;
    }
}

