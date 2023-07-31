import React , { useState } from 'react';
import Logo from '../../../Assets/images/logo/FullLogo.png'
import { Button } from 'react-bootstrap';

const Footer = () => {

  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Make sure the email is not empty
    if (email.trim() === '') {
      alert('Please enter your email.');
      return;
    }

    // Send the email to the backend API
    fetch('http://localhost:3030/api/PostStudentSubscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to subscribe. Please try again later.');
        }
        alert('Successfully subscribed!');
        setEmail('');
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to subscribe. Please try again later.');
      });
  };

  return (
    <div className="footer">
      <section className="deneb_cta">
        <div className="container pt-4">
          <div className="cta_wrapper">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="cta_content">
                  <h3>Have Any Project in Mind ?</h3>
                  <p>
                  &quot;Collaborate with the Best: Hire Us to Turn Your Project Vision into Reality!&quot;
                  </p>
                </div>
              </div>
              <div className="col-md-6 mx-auto">
                <div className="button_box">
                  <Button className='btn btn-warning' href='/Hire'>Hire Us</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="deneb_footer">
        <div className="widget_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="widget widegt_about">
                  <div className="widget_title col-lg-4">
                    <div className="align-items-center">
                      <img className="p-0 m-0" src={Logo} alt="##"
                        style={{ filter: 'invert(1)', height: 'auto', width: '200px' }} />
                    </div>
                  </div>

                  <p>
                    TekSyntax Inc. takes pride in spearheading cutting-edge initiatives in education and professional growth,
                    specializing in high-demand skill sets. As the leading destination for comprehensive training, talent
                    acquisition, and career transitions, we foster an inclusive community of ambitious professionals who
                    are actively shaping their career paths. Our commitment is to facilitate individuals in pursuing rewarding
                    careers that align with their passions and ambitions, enabling them to flourish and make a meaningful
                    impact in their chosen industries.
                  </p>

                  <div className="mx-5">
                    <div className="input-group mb-1 mt-1">
                    <div className="input-group mb-1 mt-1">
        <p className="p-2" style={{ fontWeight: 700 }}>
          Subscribe to Newsletter
        </p>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="btn btn-warning btn-sm mx-2"
          type="button"
          id="button-addon2"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div></div>
                    <span className="text-center">
                      <p>By sharing your email, you acknowledge our <a href="https://www.termsfeed.com/live/885853a7-633b-4aa6-8759-ba647a08d9f8">Privacy Policy</a> and <a href="https://www.termsfeed.com/live/885853a7-633b-4aa6-8759-ba647a08d9f8">Terms
                          of Service</a>.</p>
                    </span>
                  </div>
                
                </div>
              </div>
              <div className="col-lg-2">
                <div className="widget widget_link">
                  <div className="widget_title" style={{ marginTop: '20px' }}>
                    <h4>Company</h4>
                  </div>
                  <ul>
                    <li><a href="http://teksyntaxinc.com/">About</a></li>
                    <li><a href="http://teksyntaxinc.com/">Services</a></li>
                    <li><a href="http://teksyntaxinc.com/">Careers</a></li>
                    <li><a href="http://teksyntaxinc.com/">Blog</a></li>
                    <li><a href="/FAQ">FAQ&apos;s</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget widget_contact">
                  <div className="widget_title" style={{ marginTop: '20px' }}>
                    <h4>Contact Us</h4>
                  </div>
                  <div className="contact_info">
                    <div className="single_info">
                      <div className="icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="info">
                        <p><a href="tel:+919246147999">(703)-734-6021</a></p>
                      </div>
                    </div>
                    <div className="single_info">
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="info">
                        <p>
                          <a href="mailto:information@teksyntaxinc.com.com">info@TekSyntaxinc.com</a>
                        </p>
                       
                      </div>
                    </div>
                    <div className="single_info">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="info text-secondary">
                        <p>
                          1760 Reston prkwy,<br />Suite 511 B, Reston<span>Virginia.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="social-links d-none d-md-flex align-items-center justify-content-center socialIcons">
            <ul className="socialIcons">
              <li className="facebook">
                <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i>Facebook</a>
              </li>
              <li className="twitter">
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den"><i className="fa-brands fa-square-twitter"></i>Twitter</a>
              </li>
              <li className="instagram">
                <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i>Instagram</a>
              </li>
              <li className="linkedin">
                <a href="https://www.linkedin.com/company/collaborait/mycompany/"><i className="fa-brands fa-linkedin"></i>Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* End Footer */}
     
      <div className="copyright_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright_text text-center">
                <p> &copy; 2023 TekSyntax Inc. All rights reserved.</p>
              </div>
            </div>
            <div className="row">
              <hr />
              <div className="RegulatoryInfo" style={{ display: 'flex' }}>
                <a href="http://teksyntaxinc.com/">
                  Regulatory Information
                </a>
                <a href="https://www.termsfeed.com/live/885853a7-633b-4aa6-8759-ba647a08d9f8"> Terms & Privacy</a>
                <a href="https://www.termsfeed.com/live/885853a7-633b-4aa6-8759-ba647a08d9f8"> EEO Statement and Legal Notices</a>
                <p> Made with <i className="fa-solid fa-heart"></i> in Virginia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
