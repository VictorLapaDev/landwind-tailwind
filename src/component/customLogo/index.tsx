import google from '../../assets/images/google.svg'
import microsoft from '../../assets/images/microsoft.svg'
import spotfy from '../../assets/images/spotify.svg'
import mailchimp from '../../assets/images/mailchimp.svg'
import airbnb from '../../assets/images/airbnb.svg'
import uber from '../../assets/images/uber.svg'


const CostumerLogos = () => {
  return (
    <div className='flex justify-around bg-white mb-24'>
            <img src={google}/>
            <img src={microsoft}/>
            <img src={spotfy}/>
            <img src={mailchimp}/>
            <img src={airbnb}/>
            <img src={uber}/>
    </div>
  )
}

export default CostumerLogos
