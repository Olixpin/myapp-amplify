
import './App.css'
import CTASection from './ui-components/CTASection'
import Features2x2 from './ui-components/Features2x2'
import HeroLayout1 from './ui-components/HeroLayout1'
import MarketingFooter from './ui-components/MarketingFooter'
import MarketingPricing from './ui-components/MarketingPricing'
import NavBarHeader2 from './ui-components/NavBarHeader2'

function App() {

  return (
    <>
        <NavBarHeader2/>
        <HeroLayout1/>
        <MarketingPricing/>
        <Features2x2/>
        <CTASection/>
        <MarketingFooter/>
    </>
  )
}

export default App
