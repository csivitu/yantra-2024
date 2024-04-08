export function convertGoogleDriveUrl(url: string) {
    const parsedUrl = new URL(url);
    const id = parsedUrl.searchParams.get('id');
    return `https://drive.usercontent.google.com/download?id=${id}`;
}

