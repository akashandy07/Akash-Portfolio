import { useEffect, useState } from 'react'

const TextType = ({ texts = [], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000, cursorCharacter = '|' }) => {
  const [display, setDisplay] = useState('')
  const [index, setIndex] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = texts[index]
    let timeout

    if (typing) {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typingSpeed)
      } else {
        timeout = setTimeout(() => setTyping(false), pauseDuration)
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), deletingSpeed)
      } else {
        setIndex((index + 1) % texts.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [display, typing, index])

  return (
    <span>{display}<span>{cursorCharacter}</span></span>
  )
}

export default TextType