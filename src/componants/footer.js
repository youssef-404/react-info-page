import '../style/footer.css'

import  {ReactComponent as Insagram}  from '../images/instagram.svg'
import   {ReactComponent as Twitter}  from '../images/twitter.svg'
import   {ReactComponent as Github}  from '../images/github.svg'
import  {ReactComponent as Facebook}  from '../images/facebook.svg'

function Footer(){
    return (
        <div className="footerContainer">
            <Twitter/>
            <Facebook/>
            <Insagram/>
            <Github/>

        </div>
    );
}


export default Footer;