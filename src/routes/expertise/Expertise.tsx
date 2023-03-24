import CardExpertise from '~/components/CardExpertise/CardExpertise'
import LayoutDefault from '~/components/LayoutDefault/LayoutDefault'
import './Expertise.scss'

export default function Expertise() {
  return (
    <LayoutDefault>
      <div className="expertise-page">
        <CardExpertise title="Senior Vue.js / Nuxt.js" duration="2.5 Years" />
        <CardExpertise
          title="Junior Node.js / Express.js"
          duration="3 Months"
        />
        <CardExpertise title="Junior React.js / Next.js" duration="1 Months" />
      </div>
    </LayoutDefault>
  )
}
