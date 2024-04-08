export function convertToLocaleString(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleString();
}