export const getCleanText = (html, limit) => {
    const plainText = html.replace(/<[^>]*>?/gm, '');

    if (plainText.length <= limit) return plainText;
    return plainText.slice(0, limit).trim() + "...";
};