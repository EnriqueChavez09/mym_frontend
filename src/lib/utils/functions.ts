export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const getDataModify = <T extends object>(
  properties: (keyof T)[],
  body: Partial<T>,
  initialContact: T
): void => {
  properties.forEach((property) => {
    if (body[property] === initialContact[property]) {
      delete body[property]
    }
  })
}
