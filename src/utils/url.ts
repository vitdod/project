export const getHostName = (url: string) => {
    const domain = new URL(url)
    return domain.hostname
}