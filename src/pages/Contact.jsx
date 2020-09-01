import React, { useState } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link, Redirect } from "react-router-dom"
import styled from 'styled-components'
import imgOffice from '../assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg'
import Navbar from '../components/layout/Header/Navbar'
import { faAddressCard, faPhone, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
  margin-top: -20px;
`
const TextPara = styled.p`
  font-size: 1.2rem;
  color: #003468;
`
const Response = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-top: 20px;
  font-weight: bold;
`
const TopPara = styled.p`
  color: #9aa8bd;
  font-size: 14px;
  letter-spacing: 1.2px;
`
const ResHeader = styled.ul`
  margin-top: 20px;
  color: #fff;
`
const ResParagraph = styled.p`
  margin-top: 20px;
  color: #fff;
`
const ParagraphSt = styled.p`
  font-size: 1.2rem;
  color: #003468;
`
const TextColor = styled.p`
  color: #003468;
`
const TextTitleColor = styled.p`
  color: #003468;
  font-size: 1.4rem;
  font-weight: bold;
`

const Contact = ({ history }) => {
  const [values, setValues] = useState({
    fullname: '',
    phonenumber: '',
    email: '',
    message: '',
    buttonText: 'Submit'
  });

  const { fullname, phonenumber, email, message, buttonText } = values;

  const handleChange = (name) => (event) => {
    console.log(event.target.value)
    setValues({...values, [name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    setValues({...values, buttonText: 'Submitting'})
    // const baseURL = `${process.env.SERVER_APP_API}`
    axios({
      method: 'POST',
      url: 'http://localhost:7000/api/v1/contacts',
      data: {fullname, phonenumber, email, message}
    })
    .then(response => {
      console.log('EMAIL SENT SUCCESSFULLY', response);
      setValues({...values, fullname: '', phonenumber: '', email: '', message: '', buttonText: 'Submitted'});
      toast.success(response.data.message);
      history.push('/')
    })
    .catch(error => {
      console.log('CONTACT US ERROR', error.response.data);
      setValues({...values, buttonText: 'Submit'});
      toast.error(error.response.data.error);
    })
  }

  const contactUsForm = () => (
    <form>
      <div className="field">
        <div className="control">
          <input className="input is-info" 
          type="text" 
          value={fullname} 
          onChange={handleChange('fullname')} 
          placeholder="First & Last Name*" 
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input is-info" 
          type="text" 
          value={phonenumber} 
          onChange={handleChange('phonenumber')} 
          placeholder="Phone Number*" 
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input is-info" 
          type="email" 
          value={email} 
          onChange={handleChange('email')} 
          placeholder="Email" 
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
            <textarea className="textarea is-info" 
            type="text" 
            value={message} 
            onChange={handleChange('message')} 
            placeholder="message*" 
            />
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
            <div className="firstsectionS">
              <div className="content">
                <div className="columns">
                  <div className="column">
                    <div className="content">
                      <TopPara className="subtitle is-6 has-text-left is-uppercase">Ways to reach us</TopPara>
                      <HeaderTitle className="subtitle has-text-left is-2">Contact Us – at Seth Resources Petroluem</HeaderTitle>
                      <MainPara className="has-text-left">
                        Our world class team of dedicated support will get back to within the next 2 hours upon receiving your inquiry.
                      </MainPara>
                    </div>
                  </div>
                  <div className="column is-half">
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
                <TextColor className="subtitle is-2">Our dedicated team will respond within the next 24hours</TextColor>
              </div>
              <div className="content">
                <div className="columns">
                  <div className="column">
                    <div className="content">
                      <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle"></h3>
                      <ParagraphSt className="has-text-left">
                        Reach our team via phone: 
                      </ParagraphSt>
                      <TextPara className="has-text-left">
                        +267 71572088  or  +267 75034118   &   +267 74237959
                      </TextPara>
                      
                    </div>
                  </div>
                </div>
                <div className="content">
                  <TextTitleColor className="is-2">Fill all Details (email)</TextTitleColor>
                </div>
                <div className="columns">
                  <div className="column is-half">
                    {contactUsForm()}
                  </div>
                  <div className="column is-one-third">
                    <div className="card" style={bkStyle}>
                      <div className="card-content">
                        <div className="content is-medium">
                          <ResHeader className="menu-list">
                            <li>
                              <Response className="has-text-left">{' '} Our Response Process</Response>
                              <ResHeader>
                                  <li><ResParagraph>Fill in the form </ResParagraph></li>
                                  <li><ResParagraph>Email/Phone conversation </ResParagraph></li>
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
      </section>
    </>
  );
}

const bkStyle = {
  background: '#003468',
  color: 'white'
}

export default Contact;
