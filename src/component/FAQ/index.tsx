import { useState } from "react"
import chevronUp from '../../assets/images/chevron-up.svg'
import chevronDown from '../../assets/images/chevron-down.svg'

const FAQ = () => {

    const [firstModal, setFirstModal] = useState(false);
    const [secondModal, setSecondModal] = useState(false);
    const [thirdModal, setThirdModal] = useState(false);
    const [fourthtModal, setFourthModal] = useState(false);
  return (
    <div className="w-full flex flex-col items-center gap-8 px-20 pb-24">
      <h1 className="leading-tight font-extrabold text-4xl">Frequently asked questions</h1>

        <div className="w-[695px] p-4 bg-white">
            <div>
                <button className="flex justify-between w-full leading-none text-lg font-medium text-gray-500 py-6 border-b border-gray-200" onClick={() => setFirstModal(prevState => !prevState)}>
                        <p>Can I use FlowBite in open-source projects?</p>
                        <img src={firstModal ? chevronUp : chevronDown} alt="seta para abrir section" />
                </button>

                {firstModal && 
                    <div className="flex flex-col text-base font-normal text-gray-500 py-5 gap-2">
                        <p>Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
                        <p>With that being said, feel free to use this design kit for your open-source projects.</p>
                        <p>Find out more information by 
                            <a className="text-base font-medium text-purple-600" href=""> reading the license.</a>
                        </p>
                    </div>
                }
            </div>

            <div>
                <button className="flex justify-between w-full leading-none text-lg font-medium text-gray-500 py-6 border-b border-gray-200" onClick={() => setSecondModal(prevState => !prevState)}>
                        <p>Where can I access my download files?</p>
                        <img src={secondModal ? chevronUp : chevronDown} alt="seta para abrir section" />
                </button>

                {secondModal && 
                    <div className="flex flex-col text-base font-normal text-gray-500 py-5 gap-2">
                        <p>Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
                        <p>With that being said, feel free to use this design kit for your open-source projects.</p>
                        <p>Find out more information by 
                            <a className="text-base font-medium text-purple-600" href=""> reading the license.</a>
                        </p>
                    </div>
                }
            </div>


            <div>
                <button className="flex justify-between w-full leading-none text-lg font-medium text-gray-500 py-6 border-b border-gray-200" onClick={() => setThirdModal(prevState => !prevState)}>
                        <p>Can I use FlowBite for commercial purposes?</p>
                        <img src={thirdModal ? chevronUp : chevronDown} alt="seta para abrir section" />
                </button>

                {thirdModal && 
                    <div className="flex flex-col text-base font-normal text-gray-500 py-5 gap-2">
                        <p>Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
                        <p>With that being said, feel free to use this design kit for your open-source projects.</p>
                        <p>Find out more information by 
                            <a className="text-base font-medium text-purple-600" href=""> reading the license.</a>
                        </p>
                    </div>
                }
            </div>


            
            <div>
                <button className="flex justify-between w-full leading-none text-lg font-medium text-gray-500 py-6 border-b border-gray-200" onClick={() => setFourthModal(prevState => !prevState)}>
                        <p>What about browser support?</p>
                        <img src={fourthtModal ? chevronUp : chevronDown} alt="seta para abrir section" />
                </button>

                {fourthtModal && 
                    <div className="flex flex-col text-base font-normal text-gray-500 py-5 gap-2">
                        <p>Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
                        <p>With that being said, feel free to use this design kit for your open-source projects.</p>
                        <p>Find out more information by 
                            <a className="text-base font-medium text-purple-600" href=""> reading the license.</a>
                        </p>
                    </div>
                }
            </div>


        </div>
    </div>
  )
}

export default FAQ
