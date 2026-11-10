import SectionHeading from './SectionHeading'

export default function ProfileSection() {
  return (
    <section id="resume-profile" className="resume-section">
      <SectionHeading>Profile</SectionHeading>
      <p className="resume-profile__text">
        Seven years of building software, both before and after AI became a
        thing. I've contributed to 20+ digital projects for clients including TD
        Bank, CBC, Mercedes-Benz, and Meta, working across frontend, backend,
        and infrastructure. I enjoy taking a project from an initial idea to a
        production-ready product, whether that means building the interface,
        designing the database, or figuring out why production is on fire.
      </p>
    </section>
  )
}
