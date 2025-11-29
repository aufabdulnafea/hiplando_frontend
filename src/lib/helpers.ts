
export function ageFromBirthYear(birthYear: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

export function extractYouTubeVideoId(url: string | undefined | null): string | undefined {
    if (!url) return undefined;
    try {
        // Normalize URL
        const u = new URL(url);

        // Handle standard YouTube URL: https://www.youtube.com/watch?v=VIDEO_ID
        if (u.hostname.includes("youtube.com")) {
            return u.searchParams.get("v") || undefined;
        }

        // Handle short URL: https://youtu.be/VIDEO_ID
        if (u.hostname === "youtu.be") {
            return u.pathname.slice(1); // remove leading '/'
        }

        // Handle embed URL: https://www.youtube.com/embed/VIDEO_ID
        if (u.pathname.startsWith("/embed/")) {
            return u.pathname.split("/embed/")[1];
        }

        return undefined; // not a recognized format
    } catch {
        return undefined; // invalid URL
    }
}

/**
 * Converts a YouTube video ID into an embed URL
 * @param videoId YouTube video ID
 * @returns Embed URL string or null if empty
 */
export function toYouTubeEmbed(videoId: string | null | undefined): string | undefined {
    if (!videoId) return undefined
    return `https://www.youtube.com/embed/${videoId}`
}