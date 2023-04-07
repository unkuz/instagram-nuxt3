/**
 * The function determines whether a given file is an image or a video based on its file type.
 * @param {File} file - A File object representing a file selected by the user through an input element
 * of type file.
 * @returns The function `isImageOrVideo` takes a `File` object as input and returns a string
 * indicating whether the file is an image or a video. If the file type is one of the image types in
 * the `imageTypes` array, the function returns the string `'image'`. If the file type is one of the
 * video types in the `videoTypes` array, the function returns the
 */
export const isImageOrVideo = (file: File) => {
  const imageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml']
  const videoTypes = ['video/mp4', 'video/ogg', 'video/webm']
  const fileType = file.type

  if (imageTypes.includes(fileType)) {
    return 'image'
  } else if (videoTypes.includes(fileType)) {
    return 'video'
  }
  return ''
}

/**
 * The function formats a given number of bytes into a human-readable string with appropriate units.
 * @param {number} bytes - The number of bytes to be formatted into a human-readable string.
 * @param [decimals=2] - The number of decimal places to include in the formatted output. It defaults
 * to 2 if not provided.
 * @returns The function `formatBytes` takes in a number of bytes and an optional number of decimals to
 * round to, and returns a string that represents the bytes in a human-readable format with the
 * appropriate unit (e.g. KB, MB, GB, etc.). If the input is not a number, it returns the string '0
 * Bytes'.
 */
export const formatBytes = (bytes: number, decimals = 2) => {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

const VIDEO_EXTENTIONS = ['.mpg', '.mp2', '.mpeg', '.mpe', '.mpv', '.mp4']
const IMAGE_EXTENTIONS = ['.gif', '.jpg', '.jpeg', '.png']

/**
 * The function checks if a given string contains any of the image extensions defined in a constant
 * array.
 * @param {string} src - src is a string parameter that represents the source of an image. It is used
 * as an input to the isImage function to determine whether the source is an image or not.
 */
export const isImage = (src: string) => IMAGE_EXTENTIONS.some((e) => src.includes(e))

/**
 * The function checks if a given string contains any of the video file extensions defined in a
 * constant array.
 * @param {string} src - src is a string parameter that represents the source of a file. In this case,
 * it is used to check if the file is a video by checking if it has any of the video extensions listed
 * in the VIDEO_EXTENTIONS array.
 */
export const isVideo = (src: string) => VIDEO_EXTENTIONS.some((e) => src.includes(e))
