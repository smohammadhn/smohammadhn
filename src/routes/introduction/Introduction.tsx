import './Introduction.scss'

import LayoutDefault from '~/components/LayoutDefault/LayoutDefault'
import Button from '~/components/Button/Button'
import { useEffect, useState } from 'react'
import { RandomizeText } from '~/components/RandomizeText/RandomizeText'

export default function Introduction() {
  let fixedTitle = 'S.MOHAMMAD HOSSEININEJAD'
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

    const interval = setInterval(() => {
      morph(iterations)

      if (iterations >= fixedTitle.length) clearInterval(interval)
      iterations += 1 / 3
    }, 30)
  }

  // useEffect(() => {

  // }, [])

  return (
    <LayoutDefault>
      <div className="introduction-page">
        <img className="avatar" src="profile-square@500px.jpg" alt="avatar" />

        <div className="main-title-container">
          <RandomizeText
            text="s.mohammad"
            className="main-title"
            callOnMounted
          ></RandomizeText>
          <RandomizeText
            text="Hosseininejad"
            className="main-title"
            tagName="h1"
            callOnMounted
          ></RandomizeText>
        </div>

        <p className="about-me">
          Result-oriented full-stack developer with 2.5+ years of professional
          experience with Vue.js / React.js / Node.js / Typescript and
          frameworks on top, such as Nuxt.js, Next.js and Express.js.
          Collaborated in and designed 15+ feature-rich admin panels, websites
          and services used by wide range of customers in the country. Skilled
          in front-end best-practices and concepts including SSR, SEO
          techniques, UI/UX, and performance optimizations.
        </p>

        <Button to="/expertise">What can I contribute to your company?</Button>
      </div>
    </LayoutDefault>
  )
}
