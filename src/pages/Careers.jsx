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
const MidSection = styled.section`
  background: #fff;
  color: #003468;
  font-size: 1.2rem;
`
const BtmSection = styled.section`
  background: #f1f6fe;
  color: #003468;
  font-size: 1.2rem;
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
const TopPara = styled.p`
  color: #9aa8bd;
  font-size: 14px;
  letter-spacing: 1.2px;
`
const JobTitle = styled.p`
  color: #003468;
  font-size: 1.2rem;
`
const ColorText = styled.p`
  color: #003468;
`
const CardParagraph = styled.p`
  color: #003468;
  text-align: left;
  font-size: 1.1rem;
  margin-top: 15px;
`
const Paragraph = styled.p`
  color: #fff;
  font-size: 1.2rem;
`
const ColorStyle = styled.p`
  color: #003468;
  font-size: 1.4rem;
  font-weight: bolder;
`
const cardTitle = {
  color: '#003468',
  textDecoration: 'underline',
  textAlign: 'center',
  marginBottom: '10px'
}


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
                      <TopPara className="subtitle is-6 has-text-left is-uppercase">Join our team</TopPara>
                      <HeaderTitle className="subtitle has-text-left is-2">Opportunities – at Seth Resources Petroluem</HeaderTitle>
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
      <MidSection className="section is-paddingless-horizontal">
        <div className="container grid is-large">
          <div className="firstsections">
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content" >
                      <ColorText className="subtitle is-2 has-text-centered">Inside About Us</ColorText>
                      {/* <p className="has-text-left">
                        At Seth Resource Petroleum, the world's best talent and experts move mountains and shape the future of the oil and gas industry.
                      </p> */}
                      <p className="has-text-left">
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
                              <CardParagraph className="has-text-left">
                                Find out about our company, our business, our team at Seth Resource Petroleum, and how we are working to power progress together with more and cleaner energy solutions.
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
              </div>
            </div>
        </div>
      </MidSection>
      <BtmSection className="section is-paddingless-horizontal">
        <div className="container grid is-large">
          <div className="firstsections">
              <div className="content">
                <ColorText className="subtitle is-2">Our Open Positions</ColorText>
              </div>
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content" id="contentSide">
                      <Paragraph className="has-text-left">
                      </Paragraph>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <ColorStyle>Commercial</ColorStyle>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <JobTitle className="has-text-left">
                      Business Administrator
                    </JobTitle>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" 
                      className="button is-small has-text-small is-fullwidth is-uppercase" 
                      style={bkStyle}>
                      <strong>APPLY</strong>
                    </Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <JobTitle className="has-text-left">
                      Sales & Client Contact
                    </JobTitle>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" 
                      className="button is-small has-text-small is-fullwidth is-uppercase" 
                      style={bkStyle}>
                      <strong>APPLY</strong>
                    </Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <JobTitle className="has-text-left">
                      Inhouse Manager
                    </JobTitle>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" 
                      className="button is-small has-text-small is-fullwidth is-uppercase" 
                      style={bkStyle}>
                      <strong>APPLY</strong>
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <ColorStyle>Fleet & Operations</ColorStyle>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <JobTitle className="has-text-left">
                      Fleet Truck Drivers
                    </JobTitle>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" 
                      className="button is-small has-text-small is-fullwidth is-uppercase" 
                      style={bkStyle}>
                      <strong>APPLY</strong>
                    </Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <JobTitle className="has-text-left">
                      Fleet OJobTitleerations Intern
                    </JobTitle>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job"
                      className="button is-small has-text-small is-fullwidth is-uppercase"
                      style={bkStyle}>
                      <strong>APPLY</strong>
                    </Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <JobTitle className="has-text-left">
                      Driver Coordinator
                    </JobTitle>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job"
                      className="button is-small has-text-small is-fullwidth is-uppercase"
                      style={bkStyle}>
                      <strong>APPLY</strong>
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <ColorStyle>Operations & Supply</ColorStyle>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <JobTitle className="has-text-left">
                      Operations & Supply
                    </JobTitle>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job"
                      className="button is-small has-text-small is-fullwidth is-uppercase"
                      style={bkStyle}>
                      <strong>APPLY</strong>
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <ColorStyle>Customer Assistance</ColorStyle>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <JobTitle className="has-text-left">
                      Regional Customer Support
                    </JobTitle>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job"
                      className="button is-small has-text-small is-fullwidth is-uppercase"
                      style={bkStyle}>
                      <strong>APPLY</strong>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </BtmSection>
    </>
  );
}

const bkStyle = {
  background: '#003468',
  // background: '#1167bf',
  color: 'white'
}



export default Careers;
