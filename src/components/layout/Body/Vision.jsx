import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import imgOffice from '../../../assets/emily-rusch-6dCicDMhMjk-unsplash.png'
import styled from 'styled-components'

const VisionParagraph = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  @media (max-width: 768px) { 
    text-align: center;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
	}
`
const VisionTitle = styled.p`
  font-size: 2.6rem;
  color: #fff;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 768px) { 
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    text-align: center;
	}
`
const VisionGet = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #011240;
  font-family: 'Open Sans', sans-serif;
`

const Vision = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal" id="aboutPage">
        <div className="container grid is-large" id="contAboutPage">
            <div className="firstssection">
                <div className="content">
                  <div class="columns">
                    <div class="column is-half">
                      <img className="content" id="imgCover" src={imgOffice} alt="office" />
                    </div>
                    <div class="column">
                      <div className="content">
                        <VisionGet className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Why we exist</VisionGet>
                        <VisionTitle className="subtitle has-text-left is-2">Our Vision & Mandate</VisionTitle>
                        <VisionParagraph className="has-text-left">
                            Our endevour is to establish and entrench Seth Energy Resources as a leading force in the "mid"
                            and "down-stream" sector of the Oil and Gas industry. <br /><br />Our success has been based on uncompromising honesty, integrity, reliability, flexibility
                            , customer orientation, quality, value and timing and we will continue to base our business on these principals going forward. 
                        </VisionParagraph>
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

export default Vision;
