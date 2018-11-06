import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
  render() {

    let mapMarkerSource = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.4027803904423!2d73.15331901495468!3d22.300601885323445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9d1cb3f509b%3A0x209a7a7a21b64661!2sPhysiotherapist+-+Drushti+Sheth!5e0!3m2!1sen!2sid!4v1541508287977`
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <p>Drushti is someone who loves helping and taking care of people a lot. Being always passionate about physiotherapy, she uses a wide range of ‘hands on’ treatment techniques in combination with personalised exercises to help patients return to doing what they love as quickly as possible. She believes in providing each patient with the individual attention and care they deserve.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <p>- At present working part time with Arham Physiotherapy Clinic, Vasna Road, Vadodara as Consultant Physiotherapist since August 2018. Also treating 4-5 needy patients everyday by Home visits.</p>
          <p>- 2 years of extensive clinical experience at Shree B.G. Patel College of Physiotherapy, S.P. University, Anand as a part of curriculum for Masters programme with specialization in Orthopaedics & Sports Physiotherapy.</p>
          <p>- Worked as Principal consultant physiotherapist at Maa Physiotherapy Clinic & Magic touch Physiotherapy clinic, Vadodara for two months, after completion of internship & before commencement of Master Degree programme.</p>
          <p>- 3.5 years of clinical experience inclusive of offering service at New Life Hospital, Narhari General Hospital, Yogini Vasantidevi Orthopaedic Hospital, Yogini Vasantidevi General Hospital, Kashiba Children’s Hospital, Vadodara Institute of Neurological Sciences, Baroda Heart Institute & Research Center - all at Vadodara and Jaya Rehabilitation Center, Bidada (Kutch) as a part of curriculum & rotatory internship at Pioneer Physiotherapy College.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <p>- PG dissertation titled 'A comparative study of knee mechanical traction along with conventional therapy v/s conventional therapy alone in knee OA' completed successfully under the guidance of Dr. Dipti Padole (PT).</p>
          <p>- Certification in Kinesio taping (Module-Basic) 2 day workshop by Dr. Saiyad Rizvi. (2018)</p>
          <p>- Certification in Neurodevelopmental Therapy, 2 day workshop by Dr. Harpreet Singh. (2017)</p>
          <p>- Attended a CPD on ‘Quantification of balance & the effect of training on balance & mobility - A rehabilitative perspective’ & ‘Teaching technology for class room management in Physiotherapy education’, at ARIP Changa.</p>
          <p>- Completed Yoga certification course (YCC) at Yog Niketan, Vadodara. (2016)</p>
          <p>- Attended '11th Gujstate Conphycs 2017' – 2 days state level conference of Physiotherapists at Ahmedabad.</p>
          <p>- Attended CHAPCON-2015 'Physiotherapy in Public health' - An International Physiotherapy Conference.</p>
          <p>- Attended '8th Gujstate Conphycs 2014' – 2 days state level conference of Physiotherapists at Ahmedabad.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>Get in touch me via the following mediums :</p>
          <ul className="icons">
            <li><a href="https://www.facebook.com/drushtisheth" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://goo.gl/maps/i4d1ihJ9khp" target="_blank" className="icon fa-map-marker"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main