import React from 'react'
import { Link } from "react-router-dom"
import 'react-bulma-components/dist/react-bulma-components.min.css'

const Cards = () => {
  return (
    <>
     <section className="section is-paddingless-horizontal" id="icard">
        <div className="container grid is-large">
            <div className="firstsection">
                <div className="content">
                <div className="columns">
                <div className="column is-one-third">
                  <h3 className="has-text-white has-text-centered is-4" id="marketTitle">15%</h3>
                  <p className="has-text-white has-text-centered" id="marktPara">
                    higher on-time performance
                  </p>
                </div>
                <div className="column is-one-third">
                  <h3 className="has-text-white has-text-centered" id="marketTitle">5%</h3>
                  <p className="has-text-white has-text-centered" id="markePara">
                    total transportation cost save
                  </p>
                </div>
                <div className="column is-one-third">
                  <h3 className="has-text-white has-text-centered" id="marketTitle">10%</h3>
                  <p className="has-text-white has-text-centered" id="maretPara">
                  total transportation cost save
                  </p>
                </div>
              </div>

              </div>    
             </div>
        </div>
     </section>
    </>
  );
}

export default Cards;
