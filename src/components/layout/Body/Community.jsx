import React from 'react';
import styled from 'styled-components'
import imgOffice from '../../../assets/elderly.jpg'

const ParagraphSty = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  color: #003468;

  @media (max-width: 768px) { 
    text-align: center;
    color: #003468;
	}
`
const AboutTitle = styled.p`
  font-size: 2.6rem;
  color: #003468;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 768px) { 
    color: #003468;
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    text-align: center;
	}
`
const AboutGet = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #011240;
  font-family: 'Open Sans', sans-serif;
`
const FBKLink = styled.a`
  text-decoration: underline;
  text-align: center;
  font-size: 1.2rem;
  color: #003468;
  font-family: 'Open Sans', sans-serif;
  &:hover {
    color: #003468;
    // color: #fba502;
    font-weight: bolder;
  };
`

const Community = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal" id="servicesPage">
        <div className="container grid is-large" id="contAboutPage">
          <div className="firstssection">
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content">
                      <AboutGet className="subtitle has-text-left is-uppercase" id="headTitle">COMMUNITY PARTNERSHIP</AboutGet>
                      <AboutTitle className="subtitle has-text-left is-2">Philanthropic Endeavor</AboutTitle>
                      <ParagraphSty className="has-text-left">
                        We’re deeply invested in leaving our communities better, we have adopted Theopathy Elderly Care Association which is an NGO that aims at improving the well-being 
                        of frail elderlies affected by among other diseases: Diabetes, High Blood Pressure, Kidney Diseases, Stroke disease etc.
                        <br /><br />The aim is to relieve the care giver by providing around the clock day care and transitional care for those discharged from hospitals whom the care giver is still adjusting to caring for.
                        <br /><br /> They do wellness activities including health screening for diabetes and hypertension nationwide.
                        <br /><br />Building stronger community together.
                        <br /><br />
                        <FBKLink 
                          href="https://www.facebook.com/Theopathy-Elderly-Care-Association-2254158004833728/" 
                          class="title is-underlined has-text-centered" 
                          target="_blank"
                          >
                            Read more about the NGO
                        </FBKLink>
                      </ParagraphSty>
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
    </>
  );
}

export default Community;
