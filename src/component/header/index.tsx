import  logo  from '../../assets/images/landwind-logo.svg'


export function Header() {


  return (
    <div className=" w-100% flex bg-white justify-between px-10 py-5 items-center">

      <div className='flex gap-4 items-center'>
        <div className='flex items-center gap-2'>
          <img src={logo}/>
          <p className='text-gray-900 text-2xl font-bold'>Landwind</p>
        </div>

        <nav className='flex'>
          <ul className='flex gap-8 items-center text-gray-900'>
            <li><a>Company</a></li>
            <li><a>Marketplace</a></li>
            <li><a>Features</a></li>
            <li><a>Team</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className='flex gap-2 text-gray-900'>
          <button>
              Log In
          </button>
          <button className='bg-[#7e3af2] rounded-[8px] text-white px-3 py-2'>
            Get Started
          </button>
      </div>

    </div>
  )
}
