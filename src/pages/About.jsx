import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Navbar from '../components/layout/Header/Navbar'
import imgOffice from '../assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg'
import newD from '../assets/christina-wocintechchat-o-Q8IgAlmHAUA-unsplash.png'
import mine from '../assets/christina-wocintechchat-com-4PU-OC8sW98-unsplash.png'
import kaelo from '../assets/christina-wocintechchat-com-1Ym8pU4gewk-unsplash.png'
import coo from '../assets/coo.jpeg'
import ceo from '../assets/ce.jpeg'
import finance from '../assets/ti.jpeg'
import marketing from '../assets/marketing.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faIndustry, faChalkboardTeacher, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const Section = styled.section`
  background: #003468;
  color: white;
`
const CardSection = styled.section`
  // background-color: #f1f6fe;
  background-color: #e3f4fc;
  card-color: transparent;
  color: #003468;
`

const HeaderTitle = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #fff;
`
const MainPara = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-top: -20px;
`
const AboutPara = styled.p`
  font-size: 1.2rem;
  color: #003468;
`
const TopPara = styled.p`
  color: #9aa8bd;
  font-size: 14px;
  letter-spacing: 1.2px;
`
const CardParagraph = styled.p`
  color: #003468;
  text-align: left;
  font-size: 1.1rem;
  margin-top: 15px;
`
const CardDiv = styled.div`
  border-style: outset;
  border-bottom-color: #041B61;
`
const ParagraphSty = styled.p`
  color: #003468;
  font-size: 1.2rem;
  margin-top: 10px;
`
const CardParagraphs = styled.p`
  color: #003468;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) { 
    color: #003468;
    font-size: 1rem;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
	}
`
const ColStyle = styled.p`
  color: #003468;
  font-size: 2.4rem;
  font-weight: bolder;
  margin-bottom: 0px;
`
const Inside = styled.p`
  color: #003468;
`
const CardTit = styled.p`
  color: #003468;
  font-weight: bold;
`
const AboutGet = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #003468;
`
const AboutRole = styled.p`
  font-size: 2.6rem;
  margin-bottom: 10px;
  color: #003468;
  text-align: center;
  text-decoration: underline;
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
                          <TopPara className="subtitle is-6 has-text-left is-uppercase">Why we exist</TopPara>
                          <HeaderTitle className="subtitle has-text-left is-2">About Us</HeaderTitle>
                          <MainPara className="has-text-left">
                            Seth Resources (Pty) Ltd, is a Botswana company founded in 2015; The company is incorporated under Botswana Law (100% citizen owned), to offer customers the widest range of services 
                            in respect of Procurement and Logistics of Oil & gas Derivatives including the storage, 
                            handling and distribution (Transportation) of various products according to the needs of the users and also expands the activities out of Botswana boundaries. 
                            <br />
                            <br />
                              {/* The company has found it suitable to adhere calling by the Government of Botswana to perform different levels of investment, Product and service availability,
                              right quantity, good quality and meet standards of service, fair pricing and reasonable cost of products and services.                          
                             */}
                          </MainPara>
                          {/* <MainPara className="has-text-left">
                            Seth Energy Resources is a privately held Energy Company and division of Seth Resources (Pty) Ltd established in 2015, whose core business is to Supply and Transport Gas and Liquid Fuels thoughout Africa and the rest of the world.
                            <br />
                            <br />
                            The company has associate offices in Africa, Middle East and Europe which together offer a unique blend of trading, international banking, structured finances, and marketing experience to the benefit of our client base.
                          </MainPara> */}
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
          <CardSection className="section is-paddingless-horizontal">
            <div className="container grid is-large">
                <div className="firstsection">
                  <div className="content">
                    <div className="columns">
                    <div className="column is-one-third">
                      <ParagraphSty className="has-text-centered">
                        <ColStyle className="has-text-centered is-1">10+</ColStyle> Employees
                      </ParagraphSty>
                    </div>
                    <div className="column is-one-third">
                      <ParagraphSty className="has-text-centered">
                        <ColStyle className="has-text-centered">1</ColStyle> Locations
                      </ParagraphSty>
                    </div>
                    <div className="column is-one-third">
                      
                      <ParagraphSty className="has-text-centered">
                        <ColStyle className="has-text-centered">10+</ColStyle> Customers
                      </ParagraphSty>
                    </div>
                  </div>
                  </div>    
                </div>
            </div>
          </CardSection>
          <section className="section is-paddingless-horizontal" id="foundersSection">
            <div className="container grid is-large" id="founderWords">
              <div className="firstsections">
                <div className="content">
                  <div class="columns">
                    <div class="column">
                      <div className="content" id="contentSide">
                        <TopPara className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Team</TopPara>
                        <AboutGet className="subtitle has-text-left">Meet the Team</AboutGet>
                      </div>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column">
                    <div className="content">
                    <div class="columns">
                      <div class="column is-one-quarter">
                        <div class="card">
                          <div class="card-image">
                              <img src={coo} alt="Placeholder image" />
                          </div>
                          <div class="card-content">
                            <div class="media">
                              <div class="media-content">
                                <Link class="title is-6 is-underlined has-text-centered" style={AboutRoles}>Chief Operations Officer</Link>
                                <CardParagraph className="has-text-left">
                                  Meet Keabetswe T. Rannowane
                                </CardParagraph>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="column is-one-quarter">
                        <div class="card">
                          <div class="card-image">
                              <img src={ceo} alt="Placeholder image" />
                          </div>
                          <div class="card-content">
                            <div class="media">
                              <div class="media-content">
                                <Link class="title is-6 is-underlined has-text-centered" style={AboutRoles}>Chief Executive Officer (C.E.O)</Link>
                                <CardParagraph className="has-text-left">
                                  Meet Brian Mmusi
                                </CardParagraph>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="column is-one-quarter">
                        <div class="card card-shadow">
                          <div class="card-image">
                            <img src={finance} alt="Placeholder image" />
                          </div>
                          <div class="card-content">
                            <div class="media">
                              <div class="media-content">
                                <Link class="title is-6 is-underlined has-text-centered" style={AboutRoles}>Executive Director of Finance</Link>
                                <CardParagraph className="has-text-left">
                                  Meet Tirelo
                                </CardParagraph>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="column is-one-quarter">
                        <div class="card">
                          <div class="card-image">
                              <img src={marketing} alt="Placeholder image" />
                          </div>
                          <div class="card-content">
                            <div class="media">
                              <div class="media-content">
                                <Link class="title is-6 is-underlined has-text-centered" style={AboutRoles}>Marketing Executive</Link>
                                <CardParagraph className="has-text-left">
                                  Meet Same Thamage
                                </CardParagraph>
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
              </div>
            </div>
          </section>
          <section className="section is-paddingless-horizontal" id="foundersSection">
            <div className="container grid is-large" id="founderWords">
              <div className="firstsections">
                  <div className="content">
                    <div class="columns">
                      <div class="column">
                        <div className="content" id="contentSide">
                          <Inside className="subtitle is-2 has-text-centered">Inside About Us</Inside>
                        </div>
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column">
                        <div className="content">
                          <AboutPara className="subtitle has-text-left">
                            <br />Seth Resources (Pty) Ltd, has found it suitable to adhere calling by the Government of Botswana to perform different levels of investment, 
                            Product and service availability, right quantity, good quality and meet standards of service, fair pricing and reasonable cost 
                            of products and services. <br /><br />The Company intends to set up an autonomous business unit whose focus is to position Seth Resources 
                            (Pty) Ltd as a major player in the international market for petroleum (Oil) trading. This unit intends to operate profitably 
                            from day one as this will increase profitably and maintain company growth which will return finance the Petroleum purchasing 
                            and Transportations of Petroleum products operation of the company. <br /><br />Hence turning Botswana into energy hub in the region.
                            Botswana opens the door to a massive market in SADC, provides access to South Africa, Zambia, Namibia, Lesotho and Swaziland. 
                            Botswana is committed to sound fiscal policy, economic freedom and has a steady and dramatic growth rate. Seth Resources is 
                            strategically positioned to meet the supply demand of petroleum products in the SADC region, through Botswana Offices and Ghanzi
                            Logistics Base which will be located in Western part of the country and cover Botswana Zambia, Malawi, Tanzania and Palapye 
                            Logistics Base will be located in Central part of Botswana to cover Zimbabwe, Zambia, Swaziland and Lesotho petroleum products 
                            markets. With the compilation of Kazungula Bridge project under way, the project is set to open up the transport corridor between
                            Zambia and Botswana. <br /><br />This North-South corridor is the busiest of all regional corridors in the SADC region, linking landlocked 
                            countries to the port of Durban, and Walvis Bay the regional hub for export and import. It will mostly benefit businesses engaged
                            in the mining, agriculture and service sectors. It will also boost economies of SADC countries by linking South Africa's port city
                            of Durban and Namibia’s port Walvis Bay to landlocked Botswana, Zambia, Malawi, DRC and Tanzania. The handover of the project to
                            the two governments is expected in March 2021.
                            <br /><br />The company further intends to spread its services to the rest of southern Africa as this will be ground breaking business move that
                            will change the history of southern Africa completely: it will bring international sales/trading, aggregation, supply chain functions and many other things to Botswana. It is therefore our belief that Batswana should be ready for this move and make efforts to contribute to its sustainability.
                          </AboutPara>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </section>
          <section className="section is-paddingless-horizontal" id="foundersSection">
            <div className="container grid is-large" id="founderWords">
              <div className="firstsections">
                  <div className="content">
                    {/* <div class="columns">
                      <div class="column">
                        <div className="content" id="contentSide">
                          <Inside className="subtitle is-2 has-text-centered">Inside About Us</Inside>
                        </div>
                      </div>
                    </div> */}
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
                                  <CardParagraph className="has-text-left">
                                    Find out about our company, our business, our team at Seth Resources, and how we are working to power progress together with more and cleaner energy solutions.
                                  </CardParagraph>
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
                                  <CardParagraph className="has-text-left">
                                    From our very embryonic inception, our primary aim has been to meet the world's growing demand for more and cleaner energy solutions in ways that are eco-friendly, financially and 
                                    socially responsible.
                                  </CardParagraph>
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
                                  <CardParagraph className="has-text-left">
                                    Our ideas, visions, and technologies are driven and powered by our unique company culture, set of core values - 
                                    honesty, integrity, inclusive and respecting of all people.  
                                  </CardParagraph>
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
                                  <CardParagraph className="has-text-left">
                                    Every day, our team of leaders are making countless decisions and facing problems they’ve never encountered before. 
                                    What worked yesterday can change overnight. The speed is relentless, the stakes are high, but the rewards are great for those who can lead a team to consistently achieve extraordinary results.
                                    Read about our co-founders, our Executive committee, and Board of Directors.
                                  </CardParagraph>
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
                                  <CardParagraph className="has-text-left">
                                    As we continue to evolve, our client partnership across various industries, government and mining continues to grow in the region and beyond. 
                                  </CardParagraph>
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
                                  <CardParagraph className="has-text-left">
                                    Our current and upcoming events brings together deverse teams from the government, business,
                                    academia and other industry to discuss eco-friendly energy future.   
                                  </CardParagraph>
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
          <section className="section is-paddingless-horizontal">
            <div className="container grid is-large">
              <div className="firstsections">
                  <div className="content">
                    <div class="columns">
                      <div class="column">
                        <div className="content" id="contentSide">
                          <Inside className="subtitle is-2 has-text-centered">Featured Content</Inside>
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
                                  <CardParagraph className="has-text-left">
                                    Discover the impact you can make with a career at Seth Resources.
                                  </CardParagraph>
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
                                  <CardParagraph className="has-text-left">
                                    Discover our public content releases or find media relations teams contact details. 
                                  </CardParagraph>
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
                                  <CardParagraph className="has-text-left">
                                    Discover our passion to be an eco-friendly driven company and our awareness to make a positive contribution towards climate change. 
                                  </CardParagraph>
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
                        <CardDiv class="column is-one-third">
                            <ParagraphSty className="has-text-centered">
                                <span><FontAwesomeIcon icon={faIndustry} size="5x" /></span>{' '}
                            </ParagraphSty>
                            <ParagraphSty className="has-text-centered">
                                <CardTit>Precise & reliably</CardTit>
                            </ParagraphSty>
                            <CardParagraphs className="has-text">
                                We combine accurate and transparent data with reliable, human operations for your business success.
                            </CardParagraphs>
                        </CardDiv>
                        <CardDiv class="column is-one-third">
                            <ParagraphSty className="has-text-centered">
                              <span><FontAwesomeIcon icon={faChalkboardTeacher} size="5x" /></span>{' '}
                            </ParagraphSty>
                            <ParagraphSty className="has-text-centered">
                              <CardTit>Efficient & proactive</CardTit>
                            </ParagraphSty>
                            <CardParagraphs className="has-text">
                                Being proactive instead or just reactive is our motto. We show what happens where, when, and why.
                            </CardParagraphs>
                        </CardDiv>
                        <CardDiv class="column is-one-third">
                            <ParagraphSty className="has-text-centered">
                                <span><FontAwesomeIcon icon={faDesktop} size="5x" /></span>{' '}
                            </ParagraphSty>
                            <ParagraphSty className="has-text-centered">
                              <CardTit>Digital & easy</CardTit>
                            </ParagraphSty>
                            <CardParagraphs className="has-text">
                                Digitization is a must nowadays. Coupled with intuitive operations.
                            </CardParagraphs>
                        </CardDiv>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    );
}

const cardTitle = {
  color: '#003468',
  textDecoration: 'underline',
  textAlign: 'center',
  marginBottom: '10px'
}
const AboutRoles = {
  color: '#003468',
  fontSize: '1rem',
  textAlign: 'center',
  marginBottom: '10px'
}


export default About;
