import React from "react";

// import css
import './styles.css'
// import icons
import { FaHeart, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


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
      <p className="footer_copyright">Desenvolvido por Diogo Rocha <FaHeart color="white"/> Email: 1116186@imed.edu.br RA: 1116186 </p>
    </footer>
  )
}

export default Footer;