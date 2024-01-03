import "../app/style.css"
import {CSSProperties} from 'react'
const titleStyles: CSSProperties = {
  fontSize: '2.5rem',  
  fontWeight: 'bold',  
  textAlign: 'center',  
  marginBottom: '40px', 
};
const CallToAction = () => {

    return (
      <section className="section-cta">
        <h1 style={titleStyles}>Share Your Experience</h1>
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">Share Your Classic Car Journey with Us!</h2>
              <p className="cta-text">
              Rev up your nostalgia and become a part of our classic car community! Share your most cherished moments with vintage automobiles, from thrilling drives to fond memories.
              </p>
  
              <form className="cta-form" action="#">
                <div>
                  <label htmlFor="full-name">Full Name</label>
                  <input id="full-name" type="text" placeholder="NAME" required />
                </div>
  
                <div>
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    required
                  />
                </div>
                      <button className="btn btn--form">Share your experience</button>
              </form>
            </div>
            <div
              className="cta-img-box"
              role="img"
              aria-label="Woman enjoying food"></div>
          </div>
        </div>
      </section>
    );
  };
  export default CallToAction;