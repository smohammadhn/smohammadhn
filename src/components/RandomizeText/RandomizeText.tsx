import { useEffect, useState } from 'react'

interface Props {
  className?: string
  text: string
  tagName?: 'p' | 'h1' | 'h2' | 'h3' | 'div'
  callOnMounted?: boolean | undefined
  intervalDuration?: number
}

export function RandomizeText(props: Props) {
  let [isMorphing, setIsMorphing] = useState(false)

  let fixedTitle = props.text
  let [dynamicTitle, setDynamicTitle] = useState(fixedTitle)

  const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  const generateRandomLetter = () =>
    letters[Math.floor(Math.random() * letters.length)]

  const morph = (iterations: number) => {
    const result: string = dynamicTitle
      .split('')
      .map((_, index) => {
        if (index < iterations) return fixedTitle[index]
        return generateRandomLetter()
      })
      .join('')

    setDynamicTitle(result)
  }

  const randomize = () => {
    let iterations = 0

    if (isMorphing) return
    setIsMorphing(true)

    const interval = setInterval(() => {
      morph(iterations)

      if (iterations >= fixedTitle.length) {
        clearInterval(interval)
        setIsMorphing(false)
      }

      iterations += 1 / 3
    }, props.intervalDuration || 50)
  }

  if (props.callOnMounted) {
    useEffect(() => {
      randomize()
    }, [])
  }

  const CutsomTag = props.tagName || 'p'

  return (
    <CutsomTag className={props.className} onMouseOver={randomize}>
      {dynamicTitle}
    </CutsomTag>
  )
}
