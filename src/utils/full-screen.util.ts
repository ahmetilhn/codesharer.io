export const elementToFullscreen = (element: HTMLElement) => {
  if (!element.requestFullscreen) {
    return false
  }
  element.requestFullscreen()
}

export const closeFullScreen = (): void => {
  document.exitFullscreen()
}
