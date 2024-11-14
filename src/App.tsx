import CostumerLogos from "./component/customLogo"
import Feature from "./component/feature"
import { Header } from "./component/header"
import Hero from "./component/hero"
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
    </div>
  )
}

export default App
