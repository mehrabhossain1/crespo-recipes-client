import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className='footer p-10 bg-base-200 text-base-content'>
        <div>
          <img src={logo} alt='logo' />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div className='border-l border-2 border-[#e80000] h-32'></div>
        <div>
          <span className='footer-title'>Get in touch</span>
          <a className='link link-hover'>+1 234 567 89</a>
          <a className='link link-hover'>ex@domain.com</a>
          <a className='link link-hover'>
            633, Northwest, Apartment 11, Ecuador
          </a>
        </div>
        <div>
          <span className='footer-title'>Follow us</span>
          <a className='link link-hover'>Facebook</a>
          <a className='link link-hover'>Twitter</a>
          <a className='link link-hover'>Instagram</a>
          <a className='link link-hover'>Youtube</a>
        </div>
        <div>
          <span className='footer-title'>Open Hours</span>
          <a className='link link-hover'>Monday-Friday: 07-00</a>
          <a className='link link-hover'>Saturday-Sunday: 24 Hours</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
