import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link } from "react-router-dom"
import Navbar from '../components/layout/Header/Navbar'
import imgOffice from '../assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg'
import newD from '../assets/christina-wocintechchat-o-Q8IgAlmHAUA-unsplash.png'
import mine from '../assets/christina-wocintechchat-com-4PU-OC8sW98-unsplash.png'
import kaelo from '../assets/christina-wocintechchat-com-1Ym8pU4gewk-unsplash.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAddressCard, faPhone, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <>
          <Navbar />
          <br />
          <br />
          <section className="section is-paddingless-horizontal" id="foundersSection">
            <div className="container grid is-large" id="founderWords">
              <div className="firstsection">
                  <div className="content">
                    <div class="columns">
                      <div class="column">
                        <div className="content" id="contentSide">
                          <h2 className="has-text-left is-uppercase" style={headerStyle}>About Us</h2>
                          <p className="has-text-left" style={paragraphStyle}>
                            Move more than just petroleum oil resources. With us you move an intire industry
                            and with it your career to the next level.
                          </p>
                        </div>
                      </div>
                      <div class="column is-half">
                        <img className="content" src={kaelo} id="imgCover" alt="office" />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </section>
          <br />
          <br />
          <section className="section is-paddingless-horizontal" id="icard">
            <div className="container grid is-large">
                <div className="firstsection">
                  <div className="content">
                    <div className="columns">
                    <div className="column is-one-third">
                      <h3 className="has-text-centered" style={colStyle}>10+</h3>
                      <p className="has-text-centered">
                        Employees
                      </p>
                    </div>
                    <div className="column is-one-third">
                      <h3 className="has-text-centered" id="marketTitle" style={colStyle}>1</h3>
                      <p className="has-text-centered" id="markePara">
                        Locations
                      </p>
                    </div>
                    <div className="column is-one-third">
                      <h3 className="has-text-centered" id="marketTitle" style={colStyle}>10+</h3>
                      <p className="has-text-centered" id="maretPara">
                        Customers
                      </p>
                    </div>
                  </div>

                  </div>    
                </div>
            </div>
          </section>
          <section className="section is-paddingless-horizontal" id="foundersSection">
            <div className="container grid is-large" id="founderWords">
              <div className="firstsection">
                  <div className="content">
                    <div class="columns">
                      <div class="column">
                        <div className="content" id="contentSide">
                          <p className="subtitle is-2 has-text-centered" style={colorStyle}>Inside About Us</p>
                          {/* <p className="has-text-left" style={paragraphStyle}>
                            At Seth Resource Petroleum, the world's best talent and experts move mountains and shape the future of the oil and gas industry.
                          </p> */}
                          <p className="has-text-left" style={paragraphStyle}>
                            {/* The company, was conceived and born in the hearts of these 3 pioneers. */}
                          </p>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="content">
                      <div class="columns">
                        <div class="column is-one-third">
                          <div class="card card-shadow">
                            <div class="card-image">
                                <img src={imgOffice} alt="Placeholder image" />
                            </div>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-content">
                                  <Link class="title is-4 is-underlined has-text-centered" style={cardTitle}>Who we are</Link>
                                  <p className="has-text-left" style={cardParagraph}>
                                    Find out about our company, our business, our team at Seth Resource Petroleum, and how we are working to power progress together with more and cleaner energy solutions.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="column is-one-third">
                          <div class="card">
                            <div class="card-image">
                                <img src={mine} alt="Placeholder image" />
                            </div>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-content">
                                  <Link class="title is-4 is-underlined has-text-centered" style={cardTitle}>What we do</Link>
                                  <p className="has-text-left" style={cardParagraph}>
                                    From our very embryonic inception, our primary aim has been to meet the world's growing demand for more and cleaner energy solutions in ways that are eco-friendly, financially and 
                                    socially responsible.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="column is-one-third">
                          <div class="card">
                            <div class="card-image">
                                <img src={newD} alt="Placeholder image" />
                            </div>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-content">
                                  <Link class="title is-4 is-underlined has-text-centered" style={cardTitle}>Our Values</Link>
                                  <p className="has-text-left" style={cardParagraph}>
                                    Our ideas, visions, and technologies are driven and powered by our unique company culture, set of core values - 
                                    honesty, integrity, inclusive and respecting of all people.  
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <div class="columns">
                        <div class="column is-one-third">
                          <div class="card card-shadow">
                            <div class="card-image">
                                <img src={imgOffice} alt="Placeholder image" />
                            </div>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-content">
                                  <Link class="title is-4 is-underlined has-text-centered" style={cardTitle}>Leadership</Link>
                                  <p className="has-text-left" style={cardParagraph}>
                                    Every day, our team of leaders are making countless decisions and facing problems they’ve never encountered before. 
                                    What worked yesterday can change overnight. The speed is relentless, the stakes are high, but the rewards are great for those who can lead a team to consistently achieve extraordinary results.
                                    Read about our co-founders, our Executive committee, and Board of Directors.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="column is-one-third">
                          <div class="card">
                            <div class="card-image">
                                <img src={mine} alt="Placeholder image" />
                            </div>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-content">
                                  <Link class="title is-4 is-underlined has-text-centered" style={cardTitle}>Our major projects</Link>
                                  <p className="has-text-left" style={cardParagraph}>
                                    Our client partnership continues to grow in the region and beyond. 
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="column is-one-third">
                          <div class="card">
                            <div class="card-image">
                                <img src={newD} alt="Placeholder image" />
                            </div>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-content">
                                  <Link class="title is-4 is-underlined has-text-centered" style={cardTitle}>Events</Link>
                                  <p className="has-text-left" style={cardParagraph}>
                                    Our current and upcoming events brings together deverse teams from the government, business,
                                    academia and other industry to discuss eco-friendly energy future.   
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </section>
          <section className="section is-paddingless-horizontal" id="foundersSection">
            <div className="container grid is-large" id="founderWords">
              <div className="firstsection">
                  <div className="content">
                    <div class="columns">
                      <div class="column">
                        <div className="content" id="contentSide">
                          <p className="subtitle is-2 has-text-centered" style={colorStyle}>Featured Content</p>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="content">
                      <div class="columns">
                        <div class="column is-one-third">
                          <div class="card card-shadow">
                            <div class="card-image">
                                <img src={imgOffice} alt="Placeholder image" />
                            </div>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-content">
                                  <Link to="/careers-at-srp" class="title is-4 is-underlined has-text-centered" style={cardTitle}>Careers</Link>
                                  <p className="has-text-left" style={cardParagraph}>
                                    Discover the impact you can make with a career at Seth Resources Petroleum.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="column is-one-third">
                          <div class="card">
                            <div class="card-image">
                                <img src={mine} alt="Placeholder image" />
                            </div>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-content">
                                  <Link class="title is-4 is-underlined has-text-centered" style={cardTitle}>Media</Link>
                                  <p className="has-text-left" style={cardParagraph}>
                                    Discover our public content releases or find media relations teams contact details. 
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="column is-one-third">
                          <div class="card">
                            <div class="card-image">
                                <img src={newD} alt="Placeholder image" />
                            </div>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-content">
                                  <Link class="title is-4 is-underlined has-text-centered" style={cardTitle}>Sustainability</Link>
                                  <p className="has-text-left" style={cardParagraph}>
                                    Discover our passion to be an eco-friendly driven company and our awareness to make a positive contribution towards climate change. 
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </section>
          <section className="section is-paddingless-horizontal" id="foundersSection">
            <div className="container grid is-large" id="founderWords">
            <div className="firstsection">
                <div className="content">
                    {/* <div class="columns">
                        <div class="column">
                            <div className="content" id="contentSide">
                                <p className="subtitle has-text-centered is-2" style={colorStyle}>You're in good hands</p>
                            </div>
                        </div>
                    </div> */}
                    <br />
                    <br />
                    <div className="content">
                    <div class="columns">
                        <div class="column is-one-third" style={cardStyle}>
                            <p className="has-text-centered" style={paragraphStyle}>
                                <span><FontAwesomeIcon icon={faShieldAlt} size="5x" /></span>{' '}
                            </p>
                            <p className="has-text-centered" style={paragraphStyle}>
                                <strong style={paragraphStyle}>Precise & reliably</strong>
                            </p>
                            <p className="has-text-centered" style={paragraphStyle}>
                                Enterprise-grade security is built into our products by default.
                            </p>
                        </div>
                        <div class="column is-one-third" style={cardStyle}>
                            <p className="has-text-centered" style={paragraphStyle}>
                              <span><FontAwesomeIcon icon={faPhone} size="5x" /></span>{' '}
                            </p>
                            <p className="has-text-centered" style={paragraphStyle}>
                              <strong style={paragraphStyle}>Efficient & proactive</strong>
                            </p>
                            <p className="has-text-centered" style={paragraphStyle}>
                                24/7 support for you and your team, with dedicated support teams on standby to attend to your inquiry.
                            </p>
                        </div>
                        <div class="column is-one-third" style={cardStyle}>
                            <p className="has-text-centered" style={paragraphStyle}>
                                <span><FontAwesomeIcon icon={faAddressCard} size="5x" /></span>{' '}
                            </p>
                            <p className="has-text-centered" style={paragraphStyle}>
                              <strong style={paragraphStyle}>Digital & easy</strong>
                            </p>
                            <p className="has-text-centered" style={paragraphStyle}>
                                Excellent structured & detailed systems, as well as engagement teams to ease the logistic process.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    );
}
const cardStyle = {
  borderStyle: 'outset',
  borderBottomColor: '#041B61'
}

const colStyle = {
  color: '#003468',
  fontSize: '2.4rem',
  fontWeight: 'bolder',
  marginBottom: '0px'
}

const headerStyle = {
  fontSize: '2.6rem',
  marginTop: '80px',
  color: '#003468'
}
const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#003468'
}
const colorStyle = {
  color: '#003468',
}

const cardTitle = {
  color: '#003468',
  textDecoration: 'underline',
  textAlign: 'center',
  marginBottom: '10px'
}

const cardParagraph = {
  color: '#003468',
  textAlign: 'left',
  fontSize: '1rem',
  marginTop: '15px'
}

const bkStyle = {
  background: '#003468',
  // background: '#1167bf',
  color: 'white'
}

const bckColor = {
  background: '#f1f6fe'
}

export default About;
