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
