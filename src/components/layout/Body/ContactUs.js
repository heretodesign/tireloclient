import React from 'react'
import { Link } from "react-router-dom"
// import { Button, Columns} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

const ContactUs = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal">
        <div className="container grid is-large">
            <div className="firstsection">
              <div class="columns">
                    <div class="column">
                        <div className="content" id="contentSide">
                            <p className="subtitle has-text-centered is-2" style={colorStyle}>Make an inquiry</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="content">
                  <div className="columns">
                    <div className="column is-one-quarter">
                      {/* <div className="field">
                        <div className="control">
                          <Link to="/" className="button is-info is-outlined is-fullwidth" id="noticeList">List of Shipments</Link>
                        </div>
                      </div> */}
                    </div>
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <Link to="/contact-us" style={outlinedStyle} className="button is-outlined is-medium is-fullwidth" id="noticeList">Send us an email</Link>
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <Link to="/contact-us" className="button is-info is-medium is-fullwidth" style={bkStyle}>Talk to sales</Link>
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-quarter">
                      {/* <div className="field">
                        <div className="control">
                        <Link to="/pages/detailpage" className="button is-info is-fullwidth" id="noticeList">Detail of Shipments</Link>
                        </div>
                      </div> */}
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
  color: 'white'
}

const outlinedStyle = {
  borderColor: '#003468',
  color: '#003468'
}

export default ContactUs;
