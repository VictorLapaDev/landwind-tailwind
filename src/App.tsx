import CostumerLogos from "./component/customLogo"
import Feature from "./component/feature"
import { Header } from "./component/header"
import Hero from "./component/hero"
import SocialProof from "./component/socialProof"


function App() {

  return (
    <div className="w-full">
        <Header/>
        <Hero/>
        <CostumerLogos/>
        <Feature/>  
        <SocialProof/>
    </div>
  )
}

export default App
