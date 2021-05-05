function generateString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const charactersLength = characters.length
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

function encodeImageName(fullName) {
  var splittedName = fullName.split('.')
  var extension = splittedName[splittedName.length - 1]
  var name = fullName.replace(`.${extension}`, '')
  return `${name}-${generateString(10)}.${extension}`
}

export {
  encodeImageName
}
