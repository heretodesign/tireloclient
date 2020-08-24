import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Navbar from '../components/layout/Header/Navbar'
import imgOffice from '../assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg'
import newD from '../assets/christina-wocintechchat-o-Q8IgAlmHAUA-unsplash.png'
import mine from '../assets/christina-wocintechchat-com-4PU-OC8sW98-unsplash.png'
import kaelo from '../assets/christina-wocintechchat-com-1Ym8pU4gewk-unsplash.png'

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

const Careers = () => {
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
                      <HeaderTitle className="has-text-left is-uppercase">Opportunities – at Seth Resources Petroluem</HeaderTitle>
                      <MainPara className="has-text-left">
                        In a dynamic atmosphere, diverse teams collaborate on projects, taking ideas from the drawing board to implementation. We're all curious, and everyone is hungry for a challenge.
                        <br />
                        <br />
                        "Move more than just petroleum oil resources. With us you move an intire industry
                        and with it your career to the next level." a statement we say often at SRP.
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
              </div>
            </div>
        </div>
      </section>
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
                    <p className="has-text-left" style={jobTitle}>
                      Business Administrator
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={jobTitle}>
                      Sales & Client Contact
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={jobTitle}>
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
                    <p className="has-text-left" style={jobTitle}>
                      Fleet Truck Drivers
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={jobTitle}>
                      Fleet Operations Intern
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={jobTitle}>
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
                    <p className="has-text-left" style={jobTitle}>
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
                    <p className="has-text-left" style={jobTitle}>
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
  color: '#fff'
}
const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#fff'
}
const jobTitle = {
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
