import check from '../../assets/images/check.svg'

const Pricing = () => {
  return (
    <div className="flex flex-col items-center text-center py-24">
        <h1 className="text-gray-900 leading-tight text-4xl font-extrabold pb-4">Pay as you grow</h1>
        <p className="text-gray-500 text-xl font-normal w-[48%] pb-12">Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

        <div className="flex align-middle gap-10">

                <div className="flex flex-col items-center rounded-lg border shadow-lg w-[400px]">
                    <h1 className='text-2xl font-semibold pt-8 pb-2'>Starter</h1>
                    <p className='pt-2 pb-4 text-gray-500 text-lg font-normal w-3/4'>Great for personal use and for your side projects.</p>

                    <div className="flex gap-2.5 py-4 items-end mb-4">
                        <h1 className='text-gray-900 leading-none text-5xl font-extrabold'>$48</h1>
                        <p className='text-gray-500 text-lg font-medium'>/month</p>
                    </div>

                    <ul>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>Individual configuration</span></li>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>No setup, monthly, or hidden fees</span></li>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>Team size: <span className='font-semibold'>1 developer</span></span></li>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>Premium support: <span className='font-semibold'>6 months</span></span></li>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>Free updates: <span className='font-semibold'>6 months</span></span></li>
                    </ul>

                    <button className='bg-purple-600 py-2.5 w-[84%] rounded-lg text-white mb-8 mt-8'>Get started</button>
                </div>

                <div className="flex flex-col items-center rounded-lg border shadow-lg w-[400px]">
                    <h1 className='text-2xl font-semibold pt-8 pb-2'>Company</h1>
                    <p className='pt-2 pb-4 text-gray-500 text-lg font-normal w-3/4'>Best for large scale uses and extended redistribution rights.</p>

                    <div className="flex gap-2.5 py-4 items-end mb-4">
                        <h1 className='text-gray-900 leading-none text-5xl font-extrabold'>$99</h1>
                        <p className='text-gray-500 text-lg font-medium'>/month</p>
                    </div>

                    <ul>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>Individual configuration</span></li>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>No setup, monthly, or hidden fees</span></li>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>Team size: <span className='font-semibold'>10 developer</span></span></li>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>Premium support: <span className='font-semibold'>24 months</span></span></li>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>Free updates: <span className='font-semibold'>24 months</span></span></li>
                    </ul>

                    <button className='bg-purple-600 py-2.5 w-[84%] rounded-lg text-white mb-8 mt-8'>Get started</button>
                </div>

                <div className="flex flex-col items-center rounded-lg border shadow-lg w-[400px]">
                    <h1 className='text-2xl font-semibold pt-8 pb-2'>Enterprise</h1>
                    <p className='pt-2 pb-4 text-gray-500 text-lg font-normal w-3/4'>Best for large scale uses and extended redistribution rights.</p>

                    <div className="flex gap-2.5 py-4 items-end mb-4">
                        <h1 className='text-gray-900 leading-none text-5xl font-extrabold'>$499</h1>
                        <p className='text-gray-500 text-lg font-medium'>/month</p>
                    </div>

                    <ul>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>Individual configuration</span></li>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>No setup, monthly, or hidden fees</span></li>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>Team size: <span className='font-semibold'>100+ developer</span></span></li>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>Premium support: <span className='font-semibold'>36 months</span></span></li>
                        <li className='flex gap-2.5 text-base font-normal text-gray-900 py-2'><img src={check} alt="" /><span>Free updates: <span className='font-semibold'>36 months</span></span></li>
                    </ul>

                    <button className='bg-purple-600 py-2.5 w-[84%] rounded-lg text-white mb-8 mt-8'>Get started</button>
                </div>
        </div>

    </div>
  )
}

export default Pricing;
