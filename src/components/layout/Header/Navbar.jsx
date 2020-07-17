import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" style={bkStyle}>
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://sethresourcespetroleum.com"  style={fullStyle}>
                        <strong className="has-text-white is-2">SRP</strong>
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-end">
                            <div className="navbar-item">
                            <a className="navbar-item" style={pStyle}>
                                <strong>Home</strong>
                            </a>
                            <a className="navbar-item" style={pStyle}>
                                Solutions
                            </a>
                            <a className="navbar-item" style={pStyle}>
                                About Us
                            </a>
                            <a className="navbar-item" style={pStyle}>
                                Logistics Knowledge
                            </a>

                            <div className="buttons">
                                <a className="button is-outlined" style={fullStyle}>
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

const pStyle = {
    color: '#fff'
}

const bkStyle = {
    background: '#011240',
    color: 'white'
}

const fullStyle = {
    background: '#white',
    color: '#011240'
}
export default Navbar;
