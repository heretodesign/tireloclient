import React from 'react'
// import imgOffice from '../../../assets/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg'
import imgOffice from '../../../assets/sippakorn-yamkasikorn-0aJOTBQfEFE-unsplash.jpg'
// import imgOffice from '../../../assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg'
import 'react-bulma-components/dist/react-bulma-components.min.css'

const Founder = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal" style={founderStyle}>
        <div className="grid is-large" id="founderWords">
          <div className="firstsection">
              <div className="content">
                  <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">
                  </p>
              </div>
              <div className="content">
                <div class="columns" style={innerStyle}>
                  <div class="column is-two-thrids">
                    <div className="content" id="contentSide" style={parentDiv}>
                      <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Our Pioneer</h3>
                      <p className="has-text-left" style={paragraphStyle}>
                        Our vision to resource and supply sufficient petroluem resource in the Southern hemisphere
                        Our vision to resource and supply sufficient petroluem resource in the Southern hemisphere
                        Our vision to resource and supply sufficient petroluem resource in the Southern hemisphere
                        Our vision to resource and supply sufficient petroluem resource in the Southern hemisphere
                      </p>
                      <br />
                      <p className="has-text-left" style={paragraphStyle}>
                        Brian, Tirelo && Keabetswe
                      </p>
                      <h4 className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold" style={marginS}>
                        The Founding Team
                      </h4>
                    </div>
                  </div>
                  <div class="column is-one-third" id="founderImg">
                    {/* <img className="content" src={imgOffice} height="100%" width="100%" id="imgCover" alt="office" /> */}
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
  color: '#011240'
}

const marginS = {
  marginTop: '10px'
}

const parentDiv = {
  marginTop: '80px',
  marginLeft: '70px',
  marginRight: '50px'
}

const founderStyle = {
  padding: '0px 0px',
  // background: '#005fbf',
  // background: '#084a8c',
  background: '#003468',
  // background: '#F6F9FF',
  color: '#011240'
}

const innerStyle = {
  height: '500px'
}

export default Founder;
