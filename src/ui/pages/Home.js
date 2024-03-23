import "../styles/pages/home.styles.css"
import { BannerSection } from '../sections/BannerSection'
import { ContentHero } from "../sections/ContentHero"
import { OurServices } from "../sections/OurServices"
export function Home() {
  return (
    <div className="App">
      <BannerSection />
      <ContentHero />
      <OurServices />
    </div>
  )
}