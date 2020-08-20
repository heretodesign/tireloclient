import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import imgOffice from '../../../assets/josue-isai-ramos-figueroa-n2NBgIx3A28-unsplash.jpg'
import newD from '../../../assets/jay-skyler-4vkqO73C7O8-unsplash.jpg'
import mine from '../../../assets/juniperphoton-KKFKrOu3BVc-unsplash.png'
import buyer from '../../../assets/sippakorn-yamkasikorn-0aJOTBQfEFE-unsplash.jpg'


const ColorStyle = styled.p`
  color: #003468;
`
const TextSpan = styled.span`
  color: #fba502;
`
const ColorPara = styled.p`
  color: #fff;
  font-size: 2.8rem;
  font-weight: bolder;
`

const ParagraphStyle = styled.p`
  font-size: 1.2rem;
  color: #003468;
  margin-bottom: 100px;
`


const Testimonials = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal" id="market-clients">
        <div className="container grid is-large">
            <div className="firstsection">
                <div className="content">
                <div class="columns">
                        <div class="column">
                            <div className="content" id="contentSide">
                                <ColorStyle className="subtitle has-text-centered is-2">Markets</ColorStyle>
                            </div>
                        </div>
                    </div>
                    <br />
                    <ParagraphStyle className="has-text-left">
                      As we continue to evolve and widen our reach within the southern hemisphere, our partnerships and valued customers have increased exponentially. Our growing clients base are in these following industry sectors. 
                    </ParagraphStyle>
                </div>
                <div className="content">
                  <div class="columns">
                    <div class="column is-one-quarter">
                      <div class="card card-shadow">
                        <div class="card-image">
                            <img src={imgOffice} alt="Placeholder image" />
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-content">
                              <ColorStyle class="title is-5 has-text-centered">Governments</ColorStyle>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <div class="card">
                        <div class="card-image">
                            <img src={mine} alt="Placeholder image" />
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-content">
                              <ColorStyle class="title is-5 has-text-centered">Mining</ColorStyle>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <div class="card">
                        <div class="card-image">
                            <img src={newD} alt="Placeholder image" />
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-content">
                              <ColorStyle class="title is-5 has-text-centered">Commercial</ColorStyle>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <div class="card">
                        <div class="card-image">
                            <img src={buyer} alt="Placeholder image" />
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-content">
                              <ColorStyle class="title is-5 has-text-centered">Wholesale Buyers</ColorStyle>
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
    </>
  );
}


export default Testimonials;
