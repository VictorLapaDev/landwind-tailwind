import feature1 from '../../assets/images/features-one.svg'
import feature2 from '../../assets/images/features-two.svg'
import checkcircle from '../../assets/images/check-circle.svg'

const Feature = () => {
  return (
    <div className="bg-gray-50 py-20">

        <div className='flex justify-center gap-16 py-10'>
            <div className='w-[38%]'>
                <h1 className='text-gray-900 leading-tight text-4xl font-extrabold py-2'>Work with tools you already use</h1>
                <p className='text-gray-500 text-xl font-normal py-2'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                
                <div className='bg-gray-200 h-[1px] w-[100%] mt-4 mb-4'/>

                <ul className='py-2'>
                    <li className='flex gap-2  text-gray-900 text-base font-medium py-2 '> <img src={checkcircle} /><span>Continuous integration and deployment</span></li>
                    <li className='flex gap-2  text-gray-900 text-base font-medium py-2'> <img src={checkcircle} /><span>Development workflow</span></li>
                    <li className='flex gap-2  text-gray-900 text-base font-medium py-2'> <img src={checkcircle} /><span>Knowledge management</span></li>
                </ul>
                <p className='text-gray-500 text-xl font-normal py-4'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
            </div>
            <img src={feature1}/>
        </div>


        <div className='flex justify-center gap-16'>
            <img src={feature2}/>
            
            <div className='w-[40%]'>
                <h1 className='text-gray-900 leading-tight text-4xl font-extrabold py-2'>We invest in the world’s potential</h1>
                <p className='text-gray-500 text-xl font-normal py-2'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                
                <div className='bg-gray-200 h-[1px] w-[100%] mt-4 mb-4'/>

                <ul className='py-2'>
                    <li className='flex gap-2  text-gray-900 text-base font-medium py-2 '> <img src={checkcircle} /><span>Dynamic reports and dashboards</span></li>
                    <li className='flex gap-2  text-gray-900 text-base font-medium py-2'> <img src={checkcircle} /><span>Templates for everyone</span></li>
                    <li className='flex gap-2  text-gray-900 text-base font-medium py-2'> <img src={checkcircle} /><span>Development workflow</span></li>
                    <li className='flex gap-2  text-gray-900 text-base font-medium py-2'> <img src={checkcircle} /><span>Limitless business automation</span></li>
                    <li className='flex gap-2  text-gray-900 text-base font-medium py-2'> <img src={checkcircle} /><span>Knowledge management</span></li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Feature
