export function getViewUrl(id: string) {
    return `https://drive.google.com/file/d/${id}/view`
}

export function getPreviewUrl(id: string) {
    return `https://drive.google.com/file/d/${id}/preview`
}

export function getDownloadUrl(id: string) {
    return `https://drive.google.com/uc?export=download&id=${id}`
}
