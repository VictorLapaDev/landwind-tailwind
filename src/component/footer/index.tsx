import logo from '../../assets/images/landwind-logo.svg'
import git from '../../assets/images/github.svg'
import twitter from '../../assets/images/twitter.svg'
import drible from '../../assets/images/dribbble.svg'
import face from '../../assets/images/facebook.svg'


const Footer = () => {
  return (
    <div className='flex flex-col w-full py-16'>
        <div className='flex justify-evenly uppercase text-sm font-semibold text-gray-900'>

            <div>
                <h1 className='pb-4'>COMPANY</h1>
                <nav className='flex flex-col text-base font-normal text-gray-500 capitalize gap-4'>
                    <a href="">About</a>
                    <a href="">Premium</a>
                    <a href="">Blog</a>
                    <a href="">Affiliate Program</a>
                    <a href="">Get Coupon</a>
                </nav>
            </div>

            <div>
                <h1 className='pb-4'>Help and support</h1>
                <nav className='flex flex-col text-base font-normal text-gray-500 capitalize gap-4'>
                    <a href="">Contact Us</a>
                    <a href="">Knowledge Center</a>
                    <a href="">Premium Support</a>
                    <a href="">Sponsorships</a>
                </nav>
            </div>

            <div>
                <h1 className='pb-4'>Learning</h1>
                <nav className='flex flex-col text-base font-normal text-gray-500 capitalize gap-4'>
                    <a href="">Learn Hub</a>
                    <a href="">Manuals</a>
                    <a href="">Tutorials</a>
                    <a href="">Communities</a>
                </nav>
            </div>

            <div>
                <h1 className='pb-4'>RESOURCES</h1>
                <nav className='flex flex-col text-base font-normal text-gray-500 capitalize gap-4'>
                    <a href="">Third-Party Tools</a>
                    <a href="">Illustrations</a>
                    <a href="">Themesberg</a>
                    <a href="">Bluehost</a>
                    <a href="">Stock Photos</a>
                </nav>
            </div>

            <div>
                <h1 className='pb-4'>LEGAL</h1>
                <nav className='flex flex-col text-base font-normal text-gray-500 capitalize gap-4'>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">EULA</a>
                </nav>
            </div>            
        </div>

        <div className='flex flex-col w-full items-center gap-5 pt-16'>
            <a className='flex items-center gap-3' href=''>
                <img src={logo} alt="Logo do projeto" />
                <h1 className='text-gray-900 text-2xl font-semibold'>Landwind</h1>
            </a>
            <p className='text-gray-500 text-base font-normal'>© 2022 Flowbite, Inc. All rights reserved.</p>

            <div className='flex gap-5'>
                <a href=""> <img src={git} alt="github" /> </a>
                <a href=""> <img src={twitter} alt="twitter" /> </a>
                <a href=""> <img src={drible} alt="drible" /> </a>
                <a href=""> <img src={face} alt="face" /> </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
