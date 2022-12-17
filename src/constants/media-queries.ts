const mediaQueries = {
  MOBILE: 576,
  TABLET: 768,
  LAPTOP: 992,
  DESKTOP: 1200,
}
export const devices = {
  MOBILE: `(max-width: ${mediaQueries.MOBILE}px)`,
  TABLET: `(max-width: ${mediaQueries.TABLET}px)`,
  LAPTOP: `(min-width: ${mediaQueries.LAPTOP}px and max-width: ${mediaQueries.DESKTOP}px)`,
  DESKTOP: `(min-width: ${mediaQueries.DESKTOP}px)`,
}
