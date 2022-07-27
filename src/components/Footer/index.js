import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-rodape">
            <div className='social-medias'>
                <img src="/images/fb.png" alt="Facebook" />
                <img className='tw' src="/images/tw.png" alt="Twitter" />
                <img src="/images/ig.png" alt="Instagram" />
            </div>
            <div className='logo'>
                <img src="/images/logo.png" alt="Logo" />
            </div>
            <div className='footer-text'>
                <p>Desenvolvido por Pedro Prado</p>
            </div>
        </footer>
    );
}

export default Footer;