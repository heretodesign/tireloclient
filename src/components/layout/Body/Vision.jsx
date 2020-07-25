import React from 'react'
import { Link } from "react-router-dom"
// import { Button, Columns} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import imgOffice from '../../../assets/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg'

const Vision = () => {
  return (
    <>
     <section className="section is-paddingless-horizontal" id="aboutPage">
        <div className="container grid is-large" id="contAboutPage">
            <div className="firstsection">
                <div className="content">
                    {/* <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">Your sgdfgsdf logistics solution</p> */}
                </div>
                <div className="content">
                  <div class="columns">
                    <div class="column is-half">
                      <img className="content" id="imgCover" src={imgOffice} alt="office" />
                    </div>
                    <div class="column">
                      <div className="content" id="contentSide">
                        <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Why we exist</h3>
                        <p className="subtitle has-text-left is-2" style={colorStyle}>Our Vision & Mandate</p>

                        <p className="has-text-left" style={paragraphStyle}>
                            Our endevour is to establish and entrench Seth Energy Resources as a leading force in the "mid"
                             and "down-stream" sector of the Oil and Gas industry. Our success has been based on uncompromising honesty, integrity, reliability, flexibility
                             , customer orientation, quality, value and timing and we will continue to base our business on these principals going forward. 
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

const headerStyle = {
  fontSize: '2.6rem',
  marginTop: '80px',
  color: '#011240'
}
const paragraphStyle = {
  fontSize: '1.2rem',
  marginBottom: '0px',
  color: '#fff'
}
const colorStyle = {
  color: '#fff'
}

const parentDiv = {
  marginTop: '80px',
  marginLeft: '70px',
  marginRight: '50px'
}

const founderStyle = {
  padding: '0px 0px',
  background: '#001240',
  // background: '#F6F9FF',
  color: '#011240'
}

const innerStyle = {
  height: '500px'
}

export default Vision;
