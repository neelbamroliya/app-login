// image to base64
export const convertToBase64 = (file) => {
  return new Promise(async (resolve, reject) => {

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)

    fileReader.onload = () => resolve(fileReader.result)
    fileReader.onerror = (err) => reject(err)
  })
}