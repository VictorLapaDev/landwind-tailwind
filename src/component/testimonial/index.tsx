import avatar from '../../assets/images/avatar.svg'
import aspas from '../../assets/images/opening-double-quotation-marks.svg'

const Testimonial = () => {
  return (
    <div className=" flex flex-col justify-center items-center py-24 bg-gray-50 text-center">

        <img className='py-2' src={aspas} alt="" />
        <p className="leading-relaxed text-2xl font-semibold text-gray-900 py-3 w-2/4 ">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>

        <div className="flex justify-center py-3">
            <img className='px-2' src={avatar} alt=""/>
            <p className='px-1.5'>Michael Gough</p>
            <p className='px-1.5'>/</p>
            <p className='px-1.5'>CEO at Google</p>
        </div>

    </div>
  )
}

export default Testimonial
