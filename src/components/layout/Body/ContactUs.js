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
                <div className="content">
                    <p className="subtitle is-6 has-text-centered has-text-grey has-text-weight-semibold is-uppercase">erer</p>
                </div>
                <div className="content">
                  <div className="columns">
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <Link to="/" className="button is-info is-outlined is-fullwidth" id="noticeList">List of Shipments</Link>
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <Link to="/pages/detailpage" className="button is-outlined has-text-link-dark is-info is-fullwidth" id="noticeList">Detail of Shipments</Link>
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <Link to="/pages/detailpage" className="button is-info is-fullwidth" id="noticeList">Detail of Shipments</Link>
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                        <Link to="/pages/detailpage" className="button is-info is-fullwidth" id="noticeList">Detail of Shipments</Link>
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

export default ContactUs;
