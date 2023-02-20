export const copyToClipboard = (val: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    try {
      const tempInput = document.createElement('input')
      tempInput.value = val
      document.body.appendChild(tempInput)
      tempInput.select()
      document.execCommand('copy')
      document.body.removeChild(tempInput)
      resolve(true)
    } catch (error) {
      reject(false)
      throw new Error('Copy not supported!')
    }
  })
}
