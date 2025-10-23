import BrandSlider1 from "@/components/shared/brands/BrandSlider1";
import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";

const Footer = ({ footerType }) => {
  return (
    <footer className="tj-footer-area footer-1">
      {/* <!-- start: Brand Section --> */}
      {/* {footerType === "inner" ? (
        ""
      ) : (
        <section className="tj-brand-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <BrandSlider1 />
              </div>
            </div>
          </div>
        </section>
      )} */}
      {/* <!-- end: Brand Section --> */}

      <div className="footer-top-area fix">
        <div className="container">
          <div className="row rg-50 line">
            {/* Col 1: Offices (unchanged) */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget footer1-col-1 footer-contact-infos">
                <div className="footer-title">
                  <h4 className="title">Our offices</h4>
                </div>
                <div className="infos-item">
                  <span>Lagos - Nigeria</span>
                  <p>7 th Street, Osborne Foreshore, Victoria Place, Ikoyi. Lagos.</p>
                  <li><Link href="tel:+2349033399999">+234 903 339 9999</Link></li>
                  <li><Link href="tel:+2348093333110">+234 809 333 3110</Link></li>
                  <li><Link href="tel:+9613286616">+961 3 286 616</Link></li>

                </div>
                {/* <div className="infos-item">
                  <span>Operations - Canada</span>
                  <p>Suite 452 8082 Boner Parge, Elviraton, CA 48998</p>
                </div> */}
                <div className="infos-item">
  <span>Email</span>
  <p>
    <Link href="mailto:randatakashelite@eliteconsultants.cc">
      randatakashelite@eliteconsultants.cc
    </Link>
  </p>
</div>
              </div>
            </div>

            {/* Col 2: Quick Links to match navbar */}
            <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget footer1-col-2 widget_nav_menu">
                <div className="footer-title">
                  <h4 className="title">Resources</h4>
                </div>
                <div className="widget-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>

                    {/* --- kept old items as comments (not deleted) --- */}
                    {/*
                    <li><Link href="/contact">Contact us</Link></li>
                    <li><Link href="/contact">Privacy policy</Link></li>
                    <li><Link href="/about">Recognitions</Link></li>
                    <li>
                      <Link href="/careers">
                        Careers <span>New</span>
                      </Link>
                    </li>
                    <li><Link href="/blogs">Blog</Link></li>
                    <li><Link href="/team">Feedback</Link></li>
                    <li><Link href="/contact">Error 404</Link></li>
                    */}
                  </ul>
                </div>
              </div>
            </div>

            {/* Col 3: Services — top-level only to match navbar; details kept commented */}
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget footer1-col-3 widget_nav_menu">
                <div className="footer-title">
                  <h4 className="title">Services</h4>
                </div>
                <div className="widget-menu">
                  <ul>
                    <li>
                      <Link href="/services">All Services</Link>
                    </li>

                    {/* --- original detailed service links kept as comments --- */}
                    {/*
                    <li><Link href="/services/1">Strategic planning</Link></li>
                    <li><Link href="/services/2">Market research</Link></li>
                    <li><Link href="/services/3">Business process</Link></li>
                    <li><Link href="/services/4">Financial management</Link></li>
                    <li><Link href="/services/5">Change management</Link></li>
                    <li><Link href="/services/6">IT consulting</Link></li>
                    <li><Link href="/services/1">Leadership</Link></li>
                    */}
                  </ul>
                </div>
              </div>
            </div>

            {/* Col 4: Newsletter (unchanged) */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget footer1-col-4 footer-newsletter-form">
                <div className="newsletter-title">
                  <h3 className="title">Subscribe to our newsletter</h3>
                </div>
                <div className="newsletter-form">
                  <form>
                    <div className="form-input">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        required=""
                      />
                      <button className="tj-footer-input-btn" aria-label="Subscribe">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom copyright & menus */}
      <div className="footer-copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-content-area">
                <div className="copyright-text">
                  <p>
                    © 2025{" "}
                    <Link href="/" target="_blank">
                      {" "}
                      EliteMovers{" "}
                    </Link>{" "}
                    All right reserved.
                  </p>
                </div>

                {/* <div className="copyright-socails">
                  <ul>
                    <li>
                      <Link href="https://www.facebook.com/" aria-label="Facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/" aria-label="Instagram">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://x.com/" aria-label="X (Twitter)">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div> */}

                <div className="copyright-menu">
                  <ul>
                    {/* <li>
                      <Link href="/privacy-policy">Policy & privacy</Link>
                    </li>
                    <li>
                      <Link href="/terms">Terms & conditions</Link>
                    </li> */}

                    {/* previously pointed to /contact; kept as comment */}
                    {/*
                    <li><Link href="contact">Policy & privacy</Link></li>
                    <li><Link href="contact">Terms & conditions</Link></li>
                    */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- start: back to top --> */}
      <BackToTop />
      {/* <!-- end: back to top --> */}
    </footer>
  );
};

export default Footer;
