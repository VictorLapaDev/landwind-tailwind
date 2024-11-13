import server from '../../assets/images/server.svg'
import shopping from '../../assets/images/shopping-cart.svg'
import user from '../../assets/images/users.svg'
import globe from '../../assets/images/globe.svg'
import arrow from '../../assets/images/arrow-right.svg'

const SocialProof = () => {
  return (

    <div className='w-full flex justify-center py-24 gap-24'>

        <div className='w-2/5'>
            <p className='text-purple-600 leading-none text-lg font-medium py-1'>Trusted Worldwide</p>
            <h1 className='text-gray-900 leading-tight text-4xl font-extrabold py-2'>Trusted by over 600 million users and 10,000 teams</h1>
            <p className='text-xl font-light text-gray-500 py-2'>Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>

            <div className='bg-gray-200 h-[1px] w-full mt-4 mb-4'/>

            <ul className='py-2'>
                <li className='flex leading-none text-base font-medium text-purple-600 gap-2 py-2'><span>Explore Legality Guide</span> <img src={arrow}/></li>
                <li className='flex leading-none text-base font-medium text-purple-600 gap-2 py-2'><span>Visit the Trust Center</span><img src={arrow}/></li>
            </ul>
        </div>

        <div className=''>

            <div className='flex gap-8'>
            
                <div className='text-left w-56'>
                    <img className=' py-2' src={server} alt="" />
                    <h1 className='text-gray-900 leading-tight text-2xl font-bold py-2'>99.99% uptime</h1>
                    <p className='text-gray-500 text-base font-light'>for Flowbite, with zero maintenance downtime</p>
                </div>

                <div className='text-left w-56'>
                    <img className=' py-2' src={user} alt="" />
                    <h1 className='text-gray-900 leading-tight text-2xl font-bold py-2'>600M+ Users</h1>
                    <p className='text-gray-500 text-base font-light'>trusted by over 600 milion users around the world</p>
                </div>

            </div>

            <div className='flex gap-8'>

                <div className='text-left w-56'>
                    <img className=' py-2' src={shopping} alt="" />
                    <h1 className='text-gray-900 leading-tight text-2xl font-bold py-2'>Millions</h1>
                    <p className='text-gray-500 text-base font-light'>of transactions per day</p>
                </div>

                <div className='text-left w-56'>
                    <img className=' py-2' src={globe} alt="" />
                    <h1 className='text-gray-900 leading-tight text-2xl font-bold py-2'>100+ countries</h1>
                    <p className='text-gray-500 text-base font-light'>have used Flowbite to create functional websites</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default SocialProof
