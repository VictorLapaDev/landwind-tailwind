import CTA from "./component/CTA"
import CostumerLogos from "./component/customLogo"
import FAQ from "./component/FAQ"
import Feature from "./component/feature"
import Footer from "./component/footer"
import { Header } from "./component/header"
import Hero from "./component/hero"
import Pricing from "./component/pricing"
import SocialProof from "./component/socialProof"
import Testimonial from "./component/testimonial"


function App() {

  return (
    <div className="w-full">
        <Header/>
        <Hero/>
        <CostumerLogos/>
        <Feature/>  
        <SocialProof/>
        <Testimonial/>
        <Pricing/>
        <FAQ/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default App
