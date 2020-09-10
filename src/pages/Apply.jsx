import React, { useState, useEffect } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import imgOffice from '../assets/christina-wocintechchat-com-1Ym8pU4gewk-unsplash.png'
import Navbar from '../components/layout/Header/Navbar'
import { faAddressCard, faCloud, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Section = styled.section`
  background: #003468;
  color: white;
`
const BtmSection = styled.section`
  background: #f1f6fe;
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
  margin-top: -20px;
`
const TopPara = styled.p`
  color: #9aa8bd;
  font-size: 14px;
  letter-spacing: 1.2px;
`
const Paragraph = styled.p`
  color: #003468;
  font-size: 1.2rem;
`
const Span = styled.span`
  color: #003468;
`
const ColorStyle = styled.p`
  color: #003468;
  font-size: 1.4rem;
  font-weight: bolder;
`
const ColorHeader = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #003468;
`
const ResHeader = styled.ul`
  margin-top: 20px;
  color: #fff;
`
const ResParagraph = styled.p`
  margin-top: 20px;
  color: #fff;
`
const Response = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-top: 20px;
  font-weight: bold;
`


const Apply = ({ history }) => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    phonenumber: '',
    location: '',
    profile: '',
    motivation: '',
    startdate: '',
    error: '',
    resume: '',
    formData: '',
    buttonText: 'Submit'
  });

  const { fullname, email, phonenumber, location, profile, motivation, 
    startdate, resume, formData, error, buttonText } = values;

  const handleChange = (name) => (event) => {
    // console.log(event.target.value)
    // setValues({...values, [name]: event.target.value})
    // setValues({...values, [name]: event.target.files[0]})

    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault()
    setValues({ ...values, error: '' });

    // setValues({...values, buttonText: 'Submitting'})
    // const baseURL = `${process.env.SERVER_APP_API}`
    // let formData = new FormData();
    // let fileData = event.target.files[0]
    // formData.append("values", values);
    axios({
      method: 'POST',
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      url: 'http://localhost:7000/api/v1/applications',
      data: {fullname, email, phonenumber, location, profile, motivation, startdate, resume}
    })
    .then(response => {
      if (response.error) {
        setValues({ ...values, error: response.error })
      } else {
        console.log('APPLICATION SENT SUCCESSFULLY', response);
        setValues({...values, fullname: '', phonenumber: '', email: '', location: '', profile: '', motivation: '', startdate: '', resume: '', buttonText: 'Submitted'});
        toast.success(response.data.message);
        history.push('/')
      }
    })
    .catch(error => {
      console.log('APPLICATION ERROR', error.response.data);
      setValues({...values, buttonText: 'Submit'});
      toast.error(error.response.data.error);
    })
  }


  const applyForRole = () => (
    <form>
      <div class="field">
        <div class="control">
          <input class="input is-info" 
            type="text" 
            value={fullname} 
            onChange={handleChange('fullname')} 
            placeholder="First & Last Name*" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input is-info" 
            type="email" 
            value={email} 
            onChange={handleChange('email')} 
            placeholder="Email*" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input is-info" 
            type="text" 
            value={phonenumber} 
            onChange={handleChange('phonenumber')} 
            placeholder="Phone*" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input is-info" 
            type="text" 
            value={location} 
            onChange={handleChange('location')} 
            placeholder="Location" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input is-info" 
            type="text" 
            value={profile} 
            onChange={handleChange('profile')} 
            placeholder="LinkedIn Profile" />
        </div>
      </div>
      <div class="field">
      <div class="control">
        <textarea class="textarea is-info" 
          type="text" 
          value={motivation} 
          onChange={handleChange('motivation')} 
          placeholder="What made you decide to apply for this position?" />
      </div>
      </div>
      <div class="field">
      <div class="control">
        <input class="input is-info" 
          type="text" 
          value={startdate} 
          onChange={handleChange('startdate')} 
          placeholder="possible start date" />
      </div>
        <br />
      <div class="file">
        <label class="file-label">
            <input class="file-input is-info" 
              type="file" 
              value={resume} 
              onChange={handleChange('resume')} 
              accept=".docx, .pdf, .doc, .png"
              useRef={resume}
              name="resume" />
            <span class="file-cta">
            <Span class="file-label">
            <span><FontAwesomeIcon icon={faCloud} size="l" />{' '}</span>{' '}{' '} Upload Resume or CV
            </Span>
            </span>
        </label>
      </div>
      <br />
      <button className="button is-large is-fullwidth" style={bkStyle} onClick={handleSubmit}>{buttonText}</button>
      </div>
    </form>
  )

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
                      <TopPara className="subtitle is-6 has-text-left is-uppercase">Apply for role</TopPara>
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
                    <img className="content" src={imgOffice} id="imgCover" alt="office" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Section>
      <section className="section is-paddingless-horizontal">
        <div className="container grid is-large">
          <div className="firstsections">
              <div className="content">
                <div class="columns">
                  <div class="column is-three-quarters">
                    <div className="content" id="contentSide">
                      <ColorHeader className="subtitle is-2">Experienced Operations Manager</ColorHeader>
                      <div className="content">
                        <ColorStyle>Where you fit in</ColorStyle>
                      </div>
                      <Paragraph className="has-text-left">
                        SRP is constantly growing. As one of our Operations Managers, you are the link between SRP and our partners. With negotiation and personal skills, you initiate new relations and work collaboratively on innovative projects. Using your genuine passion for food and an awareness for what consumers want, you expand our assortment with great products.
                        <br />
                        <br />
                        We’re a data-driven company. With an understanding of the type of data you need, you work alongside analysts to glean insights from large data-sets. You use business intelligence and data-backed ideas to present our vision of e-commerce to suppliers. By playing with the gross margin, you bring out opportunity and use analytical thinking to optimize our profits.
                        <br />
                        <br />
                        There’s no box that can keep your ideas contained. You establish original and engaging initiatives that expand our assortment and benefit our customers. With the freedom to experiment, test, and analyze results, you take ownership of projects and oversee their evolution throughout the entire pipeline.  
                      </Paragraph>
                      <div className="content">
                        <ColorStyle>What you do</ColorStyle>
                      </div>
                      <Paragraph className="has-text-left">
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
                      </Paragraph>
                      <div className="content">
                        <ColorStyle>What you need</ColorStyle>
                      </div>
                      <Paragraph className="has-text-left">
                        The success of our customers is our success. Our solution is to supply oil and petroleum to enable our customers to achieve their intended business.
                      </Paragraph>
                      <div className="content">
                        <ColorStyle>What are the SRP Perks</ColorStyle>
                      </div>
                      <Paragraph className="has-text-left">
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
                      </Paragraph>
                      <Paragraph>Up for the challenge? Then join us and be part of the SRP team!</Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>   
      <BtmSection className="section is-paddingless-horizontal" id="foundersSection">
        <div className="container grid is-large" id="founderWords">
          <div className="firstsection">
              <div className="content">
                <ColorHeader className="subtitle">Apply for the role</ColorHeader>
              </div>
              <div className="content">
                <div className="content">
                  <ColorStyle>Fill all Details</ColorStyle>
                </div>
                <div class="columns">
                  <div class="column is-half">
                   {applyForRole()}
                  </div>
                  <div class="column is-one-third">
                  <div class="card" style={bkStyle}>
                    <div class="card-content">
                        <div class="content is-medium">
                            <ResHeader class="menu-list">
                              <li>
                                <Response className="has-text-left">{' '} The Hiring Process</Response>
                                <ResHeader>
                                    <li><ResParagraph>CV screening </ResParagraph></li>
                                    <li><ResParagraph>Phone conversation </ResParagraph></li>
                                    <li><ResParagraph>Interviews</ResParagraph></li>
                                    <li><ResParagraph>On-site day*</ResParagraph></li>
                                    <li><ResParagraph>Hired</ResParagraph></li>
                                    <li><ResParagraph>First day of work</ResParagraph></li>
                                </ResHeader>
                              </li>
                            </ResHeader>
                            <br />
                        </div>
                    </div>
                    </div>
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

export default Apply;
