const copy = async (text: string) => {
  if (navigator.clipboard) {
    return navigator.clipboard
      .writeText(text)
      .then(() => true)
      .catch(() => false)
  }

  return fallbackCopy(text)
}

/**
 * @deprecated Не похоже, что эта функция работает. Нужно перепроверить
 */
const fallbackCopy = (text: string) => {
  let result: boolean

  const textArea = document.createElement('textarea')
  textArea.value = text

  textArea.style.position = 'fixed'
  textArea.style.top = '0'
  textArea.style.left = '0'
  textArea.style.width = '0'
  textArea.style.height = '0'
  textArea.style.fontSize = '0'
  textArea.style.visibility = 'hidden'

  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    result = document.execCommand('copy')
  } catch (err) {
    result = false
  }

  document.body.removeChild(textArea)

  return result
}

export default copy
