import React from "react";

// import css
import './styles.css'
// import icons
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


function Footer () {

  return (
    <footer className="footer">
      <div className="footer_social">
        <a href="https://www.instagram.com/diogo_rochaaa/?hl=pt-br">
          <FaInstagram size="40"  color="#fff"/>
        </a>
        <a href="https://twitter.com/Diogo99R">
          <FaTwitter size="40"  color="#fff"/>
        </a>  
        <a href="https://www.facebook.com/diogo.rocha.1042">
          <FaFacebook size="40"  color="#fff"/>
        </a>  
      </div>
      <p className="footer_copyright">Desenvolvido por Diogo Rocha e Denilson Junior 
       Emails: 1116186@imed.edu.br/ 1113575@imed.edu.br RAs: 1116186 / 1113575 </p>
    </footer>
  )
}

export default Footer;