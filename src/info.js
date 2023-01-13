import email from './email.png'
import LinkedIn from './linkedin.png'


function Info() {
    return (
     <div className='infoContainer'>
        <div className='profileImg'></div>
        <h1>El-othmani Youssef</h1>
        <h3>Computer science student</h3>
        <p>Youssef.website</p>
        <div className='bottons'>
            <div>
                <img src={email}/>
                <p>Email</p>
            </div>
            <div>
                <img src={LinkedIn}/>
                <p>LinkedIn</p>
            </div>
        </div>
     </div>
    );
  }
  
  export default Info;
  