/**
 * Get the video id for any youtube video
 * @param url-youtube link
 * @returns youtube video id
 */
export function extractYouTubeVideoId(url: string): string | null {
  const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.*\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

/**
 * Get the embed url for any youtube video
 * @param url-youtube link
 * @returns embed youtube url
 */
export function getYouTubeEmbedUrl(url: string): string | null {
  // Regular expression to match YouTube video URLs (both standard and shortened)
  const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.*\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  
  // Attempt to match the provided URL
  const match = url.match(regExp);
  
  if (match && match[1]) {
    // If a valid video ID is found, return the embed URL
    return `https://www.youtube.com/embed/${match[1]}`;
  } else {
    // Return null if the URL is invalid
    return null;
  }
}