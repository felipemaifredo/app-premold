import "../styles/pages/home.styles.css"
import { BannerSection } from '../sections/BannerSection'
import { ContentHero } from "../sections/ContentHero"
import { OurServices } from "../sections/OurServices"
import { OurTecnology } from "../sections/OurTecnology"
import { OurComp } from "../sections/OurComp"
import { OurProjects } from "../sections/OurProjects"
import { ContactSection } from "../sections/ContactSection"

export function Home() {
  return (
    <div className="App">
      <BannerSection />
      <ContentHero />
      <OurServices />
      <OurTecnology />
      <OurComp />
      <OurProjects />
      <ContactSection />
    </div>
  )
}