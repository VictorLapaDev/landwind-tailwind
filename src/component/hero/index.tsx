import marketing from '../../assets/images/marketing-strategy.svg'

const Hero = () => {
  return (
    <div className='bg-white flex items-center w-[100%] px-20 py-32 gap-44'>
        
        <div className='text-left w-[50%]'>
            <p className='leading-none text-6xl font-black py-3'>Building digital products & brands.</p>
            <p className='text-xl font-normal text-gray-500 py-3'>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <div className='flex gap-2 py-7'>
                <button className='text-white bg-purple-600 rounded-lg py-3 px-5'>
                Start 30 day free trial
                </button>
                <button className='rounded-lg border-gray-200 border py-3 px-5 text-gray-800'>
                Pricing & FAQ
                </button>
            </div>
        </div>

        <div>
            <img src={marketing}/>
        </div>

    </div>
  )
}

export default Hero
