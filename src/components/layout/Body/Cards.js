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
                  <h3 className="has-text-centered is-4" id="marketTitle" style={colStyle}>15%</h3>
                  <p className="has-text-centered" id="marktPara">
                    higher on-time performance
                  </p>
                </div>
                <div className="column is-one-third">
                  <h3 className="has-text-centered" id="marketTitle" style={colStyle}>18%</h3>
                  <p className="has-text-centered" id="markePara">
                    lower administrative work
                  </p>
                </div>
                <div className="column is-one-third">
                  <h3 className="has-text-centered" id="marketTitle" style={colStyle}>10%</h3>
                  <p className="has-text-centered" id="maretPara">
                  total transportation cost saved
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

const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#011240'
}

const colStyle = {
  color: '#003468',
  fontSize: '2.4rem',
  fontWeight: 'bolder'
}

const colorStyle = {
  color: '#011240'
}

export default Cards;
