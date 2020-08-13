import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link } from "react-router-dom"
import Navbar from '../components/layout/Header/Navbar'
import imgOffice from '../assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg'
import newD from '../assets/christina-wocintechchat-o-Q8IgAlmHAUA-unsplash.png'
import mine from '../assets/christina-wocintechchat-com-4PU-OC8sW98-unsplash.png'
import kaelo from '../assets/christina-wocintechchat-com-1Ym8pU4gewk-unsplash.png'

const Careers = () => {
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
                      <h2 className="has-text-left is-uppercase" style={headerStyle}>Opportunities – at Seth Resources Petroluem</h2>
                      <p className="has-text-left" style={paragraphStyle}>
                        In a dynamic atmosphere, diverse teams collaborate on projects, taking ideas from the drawing board to implementation. We're all curious, and everyone is hungry for a challenge.
                        <br />
                        <br />
                        "Move more than just petroleum oil resources. With us you move an intire industry
                        and with it your career to the next level." a statement we say often at SRP.
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
                    {/* <div className="content">
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
                    </div> */}
                  </div>
                </div>
            </div>
          </section>
      {/* <section className="section is-paddingless-horizontal" id="foundersSection">
        <div className="container grid is-large" id="founderWords">
          <div className="firstsection">
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content" id="contentSide">
                      <p className="subtitle is-2" style={colorStyle}>Our Culture & Values</p>
                      <div className="content">
                        <h3 style={colorStyle}>Bongwe || We work as a unit</h3>
                      </div>
                      <p className="has-text-left" style={paragraphStyle}>
                        No matter the task, we collaborate and join hands to achieve a common goal. Together we will go further.
                      </p>
                      <div className="content">
                        <h3 style={colorStyle}>Botshwerere || We love what we do</h3>
                      </div>
                      <p className="has-text-left" style={paragraphStyle}>
                        Our work converged with our passion. We give everything and infect others with our enthusiasm.
                      </p>
                      <div className="content">
                        <h3 style={colorStyle}>Bonatla || We think customer & act owner</h3>
                      </div>
                      <p className="has-text-left" style={paragraphStyle}>
                        The success of our customers is our success. Our solution is to supply oil and petroleum to enable our customers to achieve their intended business.
                      </p>
                      <div className="content">
                        <h3 style={colorStyle}>Bopelotelele || We nail & scale it</h3>
                      </div>
                      <p className="has-text-left" style={paragraphStyle}>
                        We have a "YES" spirit in our language. We think big, reach for our goals and master them.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section> */}
      <section className="section is-paddingless-horizontal" id="openSection" style={bckColor}>
        <div className="container grid is-large" id="founderWords">
          <div className="firstsection">
              <div className="content">
                <p className="subtitle is-2" style={colorStyle}>Our Open Positions</p>
              </div>
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content" id="contentSide">
                      <p className="has-text-left" style={paragraphStyle}>
                        Move more than just petroleum oil resources. With us you move an entire industry
                        and with it your career to the next level.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3 style={colorStyle}>Commercial</h3>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={paragraphStyle}>
                      Business Administrator
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={paragraphStyle}>
                      Sales & Client Contact
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={paragraphStyle}>
                      Inhouse Manager
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div className="content">
                  <h3 style={colorStyle}>Fleet & Operations</h3>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={paragraphStyle}>
                      Fleet Truck Drivers
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={paragraphStyle}>
                      Fleet Operations Intern
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={paragraphStyle}>
                      Driver Coordinator
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div className="content">
                  <h3 style={colorStyle}>Operations & Supply</h3>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={paragraphStyle}>
                      Operations & Supply
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div className="content">
                  <h3 style={colorStyle}>Customer Assistance</h3>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={paragraphStyle}>
                      Regional Customer Support
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
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
  color: '#003468'
}

const bkStyle = {
  background: '#003468',
  // background: '#1167bf',
  color: 'white'
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

const bckColor = {
  background: '#f1f6fe'
}

export default Careers;
