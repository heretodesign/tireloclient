import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link } from "react-router-dom"
import imgOffice from '../assets/christina-wocintechchat-com-1Ym8pU4gewk-unsplash.png'
import Navbar from '../components/layout/Header/Navbar'
import { faAddressCard, faPhone, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Apply = () => {
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
                    <img className="content" src={imgOffice} id="imgCover" alt="office" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="section is-paddingless-horizontal">
        <div className="container grid is-large" id="founderWords">
          <div className="firstsection">
              <div className="content">
                <div class="columns">
                  <div class="column is-three-quarters">
                    <div className="content" id="contentSide">
                      <p className="subtitle is-2" style={colorStyle}>Experienced Operations Manager</p>
                      <div className="content">
                        <h3 style={colorStyle}>Where you fit in</h3>
                      </div>
                      <p className="has-text-left" style={paragraphStyle}>
                        SRP is constantly growing. As one of our Operations Managers, you are the link between SRP and our partners. With negotiation and personal skills, you initiate new relations and work collaboratively on innovative projects. Using your genuine passion for food and an awareness for what consumers want, you expand our assortment with great products.
                        <br />
                        <br />
                        We’re a data-driven company. With an understanding of the type of data you need, you work alongside analysts to glean insights from large data-sets. You use business intelligence and data-backed ideas to present our vision of e-commerce to suppliers. By playing with the gross margin, you bring out opportunity and use analytical thinking to optimize our profits.
                        <br />
                        <br />
                        There’s no box that can keep your ideas contained. You establish original and engaging initiatives that expand our assortment and benefit our customers. With the freedom to experiment, test, and analyze results, you take ownership of projects and oversee their evolution throughout the entire pipeline.  
                      </p>
                      <div className="content">
                        <h3 style={colorStyle}>What you do</h3>
                      </div>
                      <p className="has-text-left" style={paragraphStyle}>
                          <ul>
                              <li>
                                Take full responsibility for multiple categories, maintain our assortment, and fulfill all the day-to-day problem solving and communication 
                              </li>
                              <li>
                                Use a data-first approach to build relationships with suppliers and expand our mobile-store assortment
                              </li>
                              <li>
                                Establish a category strategy and promotional road map
                              </li>
                              <li>
                                Ensure that our customers find products at the most competitive price
                              </li>
                          </ul>
                      </p>
                      <div className="content">
                        <h3 style={colorStyle}>What you need</h3>
                      </div>
                      <p className="has-text-left" style={paragraphStyle}>
                        The success of our customers is our success. Our solution is to supply oil and petroleum to enable our customers to achieve their intended business.
                      </p>
                      <div className="content">
                        <h3 style={colorStyle}>What are the SRP Perks</h3>
                      </div>
                      <p className="has-text-left" style={paragraphStyle}>
                        <ul>
                          <li>
                              Steep learning curve by taking on responsibility from day one                            
                          </li>
                          <li>
                              Freedom to realize own projects and implement your ideas                            
                          </li>
                          <li>
                              Be part of a team with ground-breaking entrepreneurs, creative minds, and out-of-the-box-thinking colleagues
                          </li>
                          <li>
                              No hierarchical thinking: Be your own leader!
                          </li>
                          <li>
                              Participate in team events, Christmas or summer parties, and cozy barbecues
                          </li>
                        </ul>
                      </p>
                      <p style={paragraphStyle}>Up for the challenge? Then join us and be part of the SRP team!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>   
      <section className="section is-paddingless-horizontal" id="foundersSection" style={bckColor}>
        <div className="container grid is-large" id="founderWords">
          <div className="firstsection">
              <div className="content">
                <p className="subtitle is-2" style={colorStyle}>Apply for the role</p>
              </div>
              <div className="content">
                {/* <div class="columns">
                  <div class="column">
                    <div className="content" id="contentSide">
                      <p className="has-text-left" style={ppStyle}>
                        Move more than just petroleum oil resources. With us you move an entire industry
                        and with it your career to the next level.
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="content">
                  <h3 style={colorStyle}>Fill all Details</h3>
                </div>
                <div class="columns">
                  <div class="column is-half">
                    <form>
                      <div class="field">
                        <div class="control">
                          <input class="input is-info" type="text" placeholder="First & Last Name*" />
                        </div>
                      </div>
                      <div class="field">
                        <div class="control">
                          <input class="input is-info" type="text" placeholder="Email*" />
                        </div>
                      </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-info" type="text" placeholder="Phone*" />
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-info" type="text" placeholder="Location" />
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-info" type="text" placeholder="LinkedIn Profile" />
                                </div>
                            </div>
                            <div class="field">
                            <div class="control">
                                <textarea class="textarea is-info" type="text" placeholder="What made you decide to apply for this position?" />
                            </div>
                            </div>
                            <div class="field">
                            <div class="control">
                                <input class="input is-info" type="text" placeholder="possible start date" />
                            </div>
                            <br />
                            <div class="file">
                            <label class="file-label">
                                <input class="file-input is-info" type="file" name="resume" />
                                <span class="file-cta">
                                <span class="file-label">
                                    Upload Resume or CV
                                </span>
                                </span>
                            </label>
                            </div>
                            <br />
                            <a className="button is-large is-fullwidth" style={bkStyle}>Submit Application</a>
                        </div>
                    </form>
                  </div>
                  <div class="column is-one-third">
                  <div class="card" style={bkStyle}>
                    <div class="card-content">
                        <div class="content is-medium">
                            
                            <ul class="menu-list" style={pStyle}>
                                <li>
                                <h3 className="has-text-left" style={pStyle}>{' '} The Hiring Process</h3>
                                <ul style={pStyle}>
                                    <li><p style={pStyle}>CV screening </p></li>
                                    <li><p style={pStyle}>Phone conversation </p></li>
                                    <li><p style={pStyle}>Interviews</p></li>
                                    <li><p style={pStyle}>On-site day*</p></li>
                                    <li><p style={pStyle}>Hired</p></li>
                                    <li><p style={pStyle}>First day of work</p></li>
                                </ul>
                                </li>
                            </ul>
                            <br />
                        </div>
                    </div>
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

const headerStyle = {
  fontSize: '2.6rem',
  marginTop: '30px',
  color: '#003468'
}
const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#003468'
}
const ppStyle = {
  fontSize: '1.2rem',
  color: '#fff'
}

const colorStyle = {
  color: '#003468'
}
const pStyle = {
  color: '#fff',
  marginTop: '20px'
}
const bkStyle = {
  background: '#003468',
  // background: '#1167bf',
  color: 'white'
}

const bckColor = {
  background: '#f1f6fe'
}
export default Apply;
