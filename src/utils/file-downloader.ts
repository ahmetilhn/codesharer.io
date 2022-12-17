import { saveAs } from 'file-saver'
export const downloadFile = (fileName: string, content: string): boolean => {
  try {
    const isFileSaverSupported = !!new Blob()
    if (!isFileSaverSupported) {
      return false
    }
    const blob = new Blob([JSON.stringify(content)], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, fileName)
    return true
  } catch (e) {
    throw new Error('something went wrong')
  }
}
