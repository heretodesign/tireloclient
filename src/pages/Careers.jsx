import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link } from "react-router-dom"
import Navbar from '../components/layout/Header/Navbar'
import imgOffice from '../assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg'
import newD from '../assets/jay-skyler-4vkqO73C7O8-unsplash.jpg'
import mine from '../assets/robin-sommer-wnOJ83k8r4w-unsplash.jpg'

const Careers = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <section className="section is-paddingless-horizontal" id="foundersSection">
        <div className="container grid is-large" id="founderWords">
          <div className="firstsection">
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content" id="contentSide">
                      <h2 className="has-text-left is-uppercase" style={headerStyle}>Opportunities – at Seth Resources Petroluem</h2>
                      <p className="has-text-left" style={paragraphStyle}>
                        Move more than just petroleum oil resources. With us you move an intire industry
                        and with it your career to the next level.
                      </p>
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
      <section className="section is-paddingless-horizontal" id="foundersSection">
        <div className="container grid is-large" id="founderWords">
          <div className="firstsection">
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content" id="contentSide">
                      <p className="subtitle is-2" style={colorStyle}>Meet Our Team</p>
                      <p className="has-text-left" style={paragraphStyle}>
                        At Seth Resource Petroleum, the world's best talent and experts move mountains and shape the future of the oil and gas industry.
                      </p>
                      <p className="has-text-left" style={paragraphStyle}>
                        The company, was conceived and born in the hearts of these 3 pioneers.
                      </p>
                    </div>
                  </div>
                </div>
                <br />
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
                              <p class="title is-5 has-text-centered">Meet Brian</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column is-one-quarter">
                      <div class="card">
                        <div class="card-image">
                            <img src={mine} alt="Placeholder image" />
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-content">
                              <p class="title is-5 has-text-centered">Meet Tirelo</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column is-one-quarter">
                      <div class="card">
                        <div class="card-image">
                            <img src={newD} alt="Placeholder image" />
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-content">
                              <p class="title is-5 has-text-centered">Meet Keabetswe</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div class="column is-one-quarter">
                      <div class="card">
                        <div class="card-image">
                            <img src={buyer} alt="Placeholder image" />
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-content">
                              <p class="title is-5 has-text-centered">Buyers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
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
                <div class="columns">
                  <div class="column">
                    <div className="content" id="contentSide">
                      <p className="subtitle is-2" style={colorStyle}>Our Culture & Values</p>
                      <div className="content">
                        <h3 style={colorStyle}>Bongwe || We work as a unit</h3>
                      </div>
                      <p className="has-text-left" style={paragraphStyle}>
                        No matter the task, we collaborate and join hands to achieve a common goal. Together we will go further.
                      </p>
                      <div className="content">
                        <h3 style={colorStyle}>Botshwerere || We love what we do</h3>
                      </div>
                      <p className="has-text-left" style={paragraphStyle}>
                        Our work converged with our passion. We give everything and infect others with our enthusiasm.
                      </p>
                      <div className="content">
                        <h3 style={colorStyle}>Bonatla || We think customer & act owner</h3>
                      </div>
                      <p className="has-text-left" style={paragraphStyle}>
                        The success of our customers is our success. Our solution is to supply oil and petroleum to enable our customers to achieve their intended business.
                      </p>
                      <div className="content">
                        <h3 style={colorStyle}>Bopelotelele || We nail & scale it</h3>
                      </div>
                      <p className="has-text-left" style={paragraphStyle}>
                        We have a "YES" spirit in our language. We think big, reach for our goals and master them.
                      </p>
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
                <p className="subtitle is-2" style={colorStyle}>Our Open Positions</p>
              </div>
              <div className="content">
                <div class="columns">
                  <div class="column">
                    <div className="content" id="contentSide">
                      <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Our Pioneer</h3>
                      <p className="has-text-left" style={paragraphStyle}>
                        Move more than just petroleum oil resources. With us you move an entire industry
                        and with it your career to the next level.
                      </p>
                      <p className="subtitle is-6 has-text-left has-text-weight-semibold" id="headPara">
                        Our vision to resource and supply sufficient petroluem resource in the Southern hemisphere
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3 style={colorStyle}>Commercial</h3>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={paragraphStyle}>
                      Business Administrator
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={paragraphStyle}>
                      Sales & Client Contact
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={paragraphStyle}>
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
                    <p className="has-text-left" style={paragraphStyle}>
                      Fleet Truck Drivers
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={paragraphStyle}>
                      Fleet Operations Intern
                    </p>
                  </div>
                  <div class="column is-one-fifth">
                    <Link to="/apply-for-this-job" className="button is-small has-text-small is-fullwidth is-uppercase" style={bkStyle}><strong>APPLY</strong></Link>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-four-fifths">
                    <p className="has-text-left" style={paragraphStyle}>
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
                    <p className="has-text-left" style={paragraphStyle}>
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
                    <p className="has-text-left" style={paragraphStyle}>
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
  marginTop: '80px',
  color: '#003468'
}
const paragraphStyle = {
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

export default Careers;
