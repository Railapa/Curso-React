import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
        <div>
            <ul  className={styles.socialList}>
                <li><FaFacebook></FaFacebook></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            
        </div>
    )
}

export default Footer