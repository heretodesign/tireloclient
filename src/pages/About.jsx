import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Navbar from '../components/layout/Header/Navbar'
import imgOffice from '../assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg'
import newD from '../assets/christina-wocintechchat-o-Q8IgAlmHAUA-unsplash.png'
import mine from '../assets/christina-wocintechchat-com-4PU-OC8sW98-unsplash.png'
import kaelo from '../assets/christina-wocintechchat-com-1Ym8pU4gewk-unsplash.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faIndustry, faChalkboardTeacher, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const Section = styled.section`
  background: #003468;
  color: white;
`

const HeaderTitle = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #fff;
`
const MainPara = styled.p`
  font-size: 1.2rem;
  color: #fff;
`

const About = () => {
    return (
        <>
          <Navbar />
          <Section className="section is-paddingless-horizontal">
            <br />
            <br />
            <div className="container grid is-large">
              <div className="firstsections">
                  <div className="content">
                    <div class="columns">
                      <div class="column">
                        <div className="content">
                          <HeaderTitle className="has-text-left is-uppercase">About Us</HeaderTitle>
                          <MainPara className="has-text-left">
                            Seth Energy Resources is a privately held Energy Company and division of Seth Resources (Pty) Ltd established in 2015, whose core business is to Supply and Transport Gas and Liquid Fuels thoughout Africa and the rest of the world.
                            <br />
                            <br />
                            The company has associate offices in Africa, Middle East and Europe which together offer a unique blend of trading, international banking, structured finances, and marketing experience to the benefit of our client base.
                          </MainPara>
                        </div>
                      </div>
                      <div class="column is-half">
                        <img className="content" src={kaelo} id="imgCover" alt="office" />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </Section>
          
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
                                    As we continue to evolve, our client partnership across various industries, government and mining continues to grow in the region and beyond. 
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
                                <span><FontAwesomeIcon icon={faIndustry} size="5x" /></span>{' '}
                            </p>
                            <p className="has-text-centered" style={paragraphStyle}>
                                <strong style={paragraphStyle}>Precise & reliably</strong>
                            </p>
                            <p className="has-text-centered" style={paragraphStyle}>
                                We combine accurate and transparent data with reliable, human operations for your business success.
                            </p>
                        </div>
                        <div class="column is-one-third" style={cardStyle}>
                            <p className="has-text-centered" style={paragraphStyle}>
                              <span><FontAwesomeIcon icon={faChalkboardTeacher} size="5x" /></span>{' '}
                            </p>
                            <p className="has-text-centered" style={paragraphStyle}>
                              <strong style={paragraphStyle}>Efficient & proactive</strong>
                            </p>
                            <p className="has-text-centered" style={paragraphStyle}>
                                Being proactive instead or just reactive is our motto. We show what happens where, when, and why.
                            </p>
                        </div>
                        <div class="column is-one-third" style={cardStyle}>
                            <p className="has-text-centered" style={paragraphStyle}>
                                <span><FontAwesomeIcon icon={faDesktop} size="5x" /></span>{' '}
                            </p>
                            <p className="has-text-centered" style={paragraphStyle}>
                              <strong style={paragraphStyle}>Digital & easy</strong>
                            </p>
                            <p className="has-text-centered" style={paragraphStyle}>
                                Digitization is a must nowadays. Coupled with intuitive operations.
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
  marginTop: '30px',
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
