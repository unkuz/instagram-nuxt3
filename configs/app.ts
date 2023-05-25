/* The code defines a constant object `APP_CONFIGS` with various configuration properties for an
application. The object is made immutable using `Object.freeze()` to prevent any modifications to
its properties. The properties include image quality settings, maximum number of suggested people to
follow, links to the author's GitHub profile, time durations, blur settings, carousel settings, and
default avatar and image error URLs. These configurations can be used throughout the application to
maintain consistency and ease of maintenance. */
export const APP_CONFIGS = Object.freeze({
  QUALITY_IMAGE: {
    AVATAR: 30,
    EXPLORE: 30,
  },
  MAX_SUGGESTION_PEOPLE_FOLLOW: 7,
  GITHUB_AUTHOR_LINK: 'https://github.com/cuzknothz',
  TIME_DURATION_SLASH: 3_000,
  TIME_DELAY_START_APPARENT_TOOLTIP: 2_500,
  TIME_IDLE_REELS: 5 * 60 * 1_000, // 5 minutes
  BACK_DROP_BLUR: true,
  HEADER_BLUR: true,
  MAX_DOT_CAROUSEL: 9,
  STYLE_SNAP_CHAT: true,
  AUTHOR: 'cuzknothz',
  DEFAULT_AVATAR: 'https://gextoneducation.com/wp-content/uploads/2015/06/no-avatar-female.png',
  DEFAULT_IMAGE_ERROR:
    'https://gextoneducation.com/wp-content/uploads/2015/06/no-avatar-female.png',
})
