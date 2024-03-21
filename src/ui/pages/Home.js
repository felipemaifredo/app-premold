import "../styles/pages/home.styles.css"
import { BannerSection } from '../sections/BannerSection'
import { ContentHero } from "../sections/ContentHero"

export function Home() {
  return (
    <div className="App">
      <BannerSection />
      <ContentHero />
    </div>
  )
}