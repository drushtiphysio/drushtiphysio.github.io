import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-user-md"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Drushti Sheth</h1>
                <p>Physical Therapist (PT) offering exceptional patient-service skills and a demonstrated history of clinical excellence.<br /><br />Credentials include Kinesio taping (Module-Basic) and Neurodevelopmental Therapy certifications; and a post gradudate degree in Musculoskeletal disorders and sports science from Sardar Patel University. Experience working with pediatric, adolescent, adult and geriatric patients. Registered with <a href="http://www.physiotherapyindia.org/" target="_blank">The Indian Association Physiotherapists</a>.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
