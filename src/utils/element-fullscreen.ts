export const elementToFullscreen = (element: HTMLElement): boolean => {
  if (!element.requestFullscreen) {
    return false
  }
  element.requestFullscreen()
  return true
}
