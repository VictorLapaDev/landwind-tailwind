import CostumerLogos from "./component/customLogo"
import Feature from "./component/feature"
import { Header } from "./component/header"
import Hero from "./component/hero"


function App() {

  return (
    <div className="w-[100%]">
        <Header/>
        <Hero/>
        <CostumerLogos/>
        <Feature/>  
    </div>
  )
}

export default App
