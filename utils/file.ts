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

export const formatBytes = (bytes: number, decimals = 2) => {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
