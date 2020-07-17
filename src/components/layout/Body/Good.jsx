import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAddressCard, faPhone, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
const Good = () => {
    return (
        <>
        <section className="section is-paddingless-horizontal" id="foundersSection">
            <div className="container grid is-large" id="founderWords">
            <div className="firstsection">
                <div className="content">
                    <div class="columns">
                        <div class="column">
                            <div className="content" id="contentSide">
                                <p className="subtitle has-text-centered is-2" style={colorStyle}>You're in good hands</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="content">
                    <div class="columns">
                        <div class="column is-one-third" style={cardStyle}>
                            <p className="has-text-left" style={paragraphStyle}>
                                <span><FontAwesomeIcon icon={faShieldAlt} /></span>{' '} <strong>Secure by design</strong>
                            </p>
                            <p className="has-text-left" style={paragraphStyle}>
                                The company, was conceived and born in the hearts of these 3 pioneers.
                            </p>
                        </div>
                        <div class="column is-one-third" style={cardStyle}>
                            <p className="has-text-left" style={paragraphStyle}>
                                <span><FontAwesomeIcon icon={faPhone} /></span>{' '}<strong>World Class Support</strong>
                            </p>
                            <p className="has-text-left" style={paragraphStyle}>
                                The company, was conceived and born in the hearts of these 3 pioneers.
                            </p>
                        </div>
                        <div class="column is-one-third" style={cardStyle}>
                            <p className="has-text-left" style={paragraphStyle}>
                                <span><FontAwesomeIcon icon={faAddressCard} /></span>{' '}<strong>Exceptional Logistics</strong>
                            </p>
                            <p className="has-text-left" style={paragraphStyle}>
                                The company, was conceived and born in the hearts of these 3 pioneers.
                            </p>
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

const headerStyle = {
    fontSize: '2.6rem',
    marginTop: '80px',
    color: '#011240'
}

const paragraphStyle = {
    fontSize: '1.2rem',
    color: '#011240'
}

const colorStyle = {
    color: '#011240'
}

const cardStyle = {
    borderStyle: 'outset',
    borderBottomColor: '#041B61'
}


export default Good;
