import React from 'react';
import styled from 'styled-components'
import img from '../../../assets/ban.png'

const Section = styled.section`
	background-image: url(${img});
	background-position: center center;
	background-repeat:  no-repeat;
	background-size: 100% 100%;
	position: relative;
	height: 100vh;
`

const Banner = () => {
  return (
    <div>
      <Section className="section is-paddingless-horizontal">
        <div className="container grid is-large" id="contAboutPage">
          <div className="firstsection">
              <div className="content">
                  <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">
                  
                  </p>
              </div>
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content" id="contentSide">
                      {/* <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Introduction to the Company</h3>
                      <ColorPara className="subtitle has-text-left is-2">Competitive Advantages</ColorPara> */}
                    </div>
                  </div>
                  {/* <div class="column is-half">
                    <img className="content" src={imgOffice} id="imgCover" alt="office" />
                  </div> */}
                </div>
              </div>
            </div>
        </div>
      </Section>
    </div>
  );
}

export default Banner;
