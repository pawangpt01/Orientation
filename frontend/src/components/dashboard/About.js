import React, { Component } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Buch from '../../img/previous_director/bunch.jpeg';
import OmPrakash from '../../img/previous_director/mathur.jpeg';
import VinodTewari from '../../img/previous_director/vinod_K_tewari.jpeg';
import DevaRaj from '../../img/previous_director/deva_raj.jpeg';
import AmitabhKundu from '../../img/previous_director/amitabh_kundu.jpeg';
import DineshMehta from '../../img/previous_director/dinesh_b_mehta.jpeg';
import ChetanVaidya from '../../img/previous_director/chetan_vaidya.jpeg';
import Hitesh from '../../img/previous_director/hitesh.jpeg';
import ShreekantGupta from '../../img/previous_director/shreekant_gupta.jpeg';
import JaganShah from '../../img/previous_director/Jagan_a_shah.jpeg';
import OurApproch from '../../img/our_approach.png';
import Collaborations from '../../img/Hnet_com-image.png';
import "./dash.css";

import { Link, Navigate } from "react-router-dom";
const axios = require("axios").default;

export default class about extends Component {
  constructor(props) {
    super(props)
    this.state = {
      about: {
        process: "0",
        save: false
      },
      languageEng: true
      ,
      isError: {
        message: ''
      }
    }
    this.pressContinue = this.pressContinue.bind(this);
    this.handleChangeChk = this.handleChangeChk.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  handleChangeChk(e) {
    var about = this.state.about;
    const isChecked = e.target.checked;
    about[e.target.name] = isChecked ? "1" : "0";
    this.setState({ about: about });
  }


  toggle() {
    this.setState({
      languageEng: !this.state.languageEng
    })
  }
  pressContinue() {
    var thizz = this;
    // Send login to update staus
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/dashboard/about",
      headers: {
        AUTH_TOKEN: localStorage.getItem('AUTH_TOKEN')
      },
      data: thizz.state.about
    }).then(function (response) {
      //handle success
      var data = response?.data
      if (data.status === true && data) {
        let about = thizz.state.about;
        about["process"] = "1"
        about["save"] = true
        thizz.setState({ about: about });

      }
    })
      .catch(function (error) {
        //handle error
        console.log(error);

      });
  }

  render() {
    if (this.state.about.save === true) {
      return <Navigate to='/dashboard' />;
    }
    const imgDirector = {
      width: "70%",
      // height: "20vw",
      // "object-fit": "cover"
    }
    const previewsDir = {
      width: "40%",
    }
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            {/* ENGLISH CONTENT */}
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 maindash px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom bg-cyan dash1">
                <h5>Dashboard/About</h5>
                <div className="btn-toolbar mb-2 mb-md-0 mr-3">
                  <Link to={"../dashboard/about"} className="btn btn-sm bord text-bold text-white btn-primary " onClick={this.toggle}> {this.state.languageEng === true ? 'हिन्दी' : 'ENGLISH'} </Link>

                </div>
              </div>
              {/* Main Content */}

              <div style={{ display: this.state.languageEng ? "" : "none" }}>
                <div className="card">
                  <div className="card-header bg-dark text-white">About NIUA</div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">
                      Established in 1976, National Institute of Urban Affairs
                      (NIUA) is India’s leading national think tank on urban
                      planning and development. As a hub for generation and
                      dissemination of cutting-edge research in the urban sector,
                      NIUA seeks to provide innovative solutions to address the
                      challenges of a fast urbanising India, and pave the way for
                      more inclusive and sustainable cities of the future. For
                      more than 40 years now, NIUA has been the vanguard for
                      contributing to, and at times, building the urban narrative
                      for a fast evolving Urban India. The Institution has been
                      actively working on bringing forth key areas of concern for
                      urban India in order to build the urban discourse at various
                      urban scales.
                    </p>
                    <p>
                      It has utilized its competencies in research, knowledge
                      management, policy advocacy and capacity building to address
                      urban challenges and continuously striving to develop
                      sustainable, inclusive, and productive urban ecosystems in
                      the country. It has emerged as a thought leader and
                      knowledge hub for urban development in India and is sought
                      out by both Indian and International organizations for
                      collaborations and partnerships in India’s urban
                      transforming journey. NIUA is committed towards aligning its
                      efforts towards achieving Sustainable Development Goals
                      (SDGs) through all its initiatives and programs.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header bg-dark text-white">Vision</div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">
                      Promoting integrated solutions for urban India.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header bg-dark text-white">Mission</div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">
                      To develop new research and expertise for supporting
                      effective innovations in the urban sector and their
                      dissemination through knowledge exchange, training and
                      capacity development.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header bg-dark text-white">
                    Director’s Message
                    {/* <a
                    className="btn btn-info sm"
                    style={{ float: "right" }}
                    href="https://niua.in/About_NIUA#directormessage)"
                    target="_blank"
                  >
                    More Information
                  </a> */}
                  </div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <div className="row">
                      <div className="col-md-7">
                        <p className="card-text">
                          “NIUA already finds itself treading into new domains, with
                          the development of smart city technologies, digital
                          governance, decentralised knowledge systems, mainstreaming
                          of gender and disabilities in policy framework, as well as a
                          greater commitment to fighting the effects of climate change
                          on the local and national scale. Building on its vast
                          experience, we look forward for cooperation from all
                          stakeholders to steer NIUA towards pioneering innovative
                          approaches, that will not only allow Indian cities to meet
                          the challenges of the future, but also thrive through
                          sustainable and inclusive development.”
                        </p>
                      </div>
                      <div className="col-md-5">

                        <img src={Hitesh} className="img-fluid mx-auto d-block card" style={{
                          "width": "40%", "height": "180px"
                        }} alt="directorimg"></img>
                      </div>
                    </div>

                  </div>
                </div>
                  <div className="card-header bg-dark text-white">Previous Director’s of NIUA</div>
                  <div className="card-body">
                    <div className="row images-wrapper">
                      <div className="col-md-4 col-sm-4 row card">
                        <img alt="" src={DevaRaj} style={previewsDir} className="col-md-6 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                          Deva Raj
                          <div className="small"> (1976-1979) </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 card row">
                        <img alt="" src={Buch} style={previewsDir} className="col-md-6 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                          M.N.Buch
                          <div className="small"> (1979-1983) </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 card row">
                        <img alt="" src={AmitabhKundu} style={previewsDir} className="col-md-8 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                          Amitabh Kundu
                          <div className="small"> (1983-1984) </div>
                        </div>

                      </div>
                      <div className="col-md-4 col-sm-4 card row">
                        <img alt="" src={OmPrakash} style={previewsDir} className="col-md-8 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                          Om Prakash Mathur
                          <div className="small"> (1984-1992) </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 card row">
                        <img alt="" src={DineshMehta} style={previewsDir} className="col-md-8 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                          Dinesh B. Mehta
                          <div className="small"> (1992-1997)</div>
                        </div>
                      </div>
                      <div className="col-md-4 row card">
                        <img alt="" src={VinodTewari} style={previewsDir} className="col-md-8 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                          Vinod K. Tewari
                          <div className="small"> (1997-2004)</div>
                        </div>
                      </div>
                      <div className="col-md-4 row card">
                        <img alt="" src={ShreekantGupta} style={previewsDir} className="col-md-8 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                          Shreekant Gupta
                          <div className="small"> (2006-2007) </div>
                        </div>
                      </div>
                      <div className="col-md-4 row card">
                        <img alt="" src={ChetanVaidya} style={previewsDir} className="col-md-8 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                          Chetan Vaidya
                          <div className="small"> (2008-2012) </div>
                        </div>
                      </div>
                      <div className="col-md-4 row card">
                        <img alt="" src={JaganShah} style={previewsDir} className="col-md-8 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                          Jagan A. Shah
                          <div className="small">(2013-2019) </div>
                        </div>
                      </div>


                    </div>

                  </div>

                <div className="card">
                  <div className="card-header bg-dark text-white">Our Approach</div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <div className="row">
                      <div className="col-md-6 col-xm-6 mt-4 lead">
                        NIUA follows the fundamentals of 5 T Approach, comprising
                        Tools, Templates, Technology, Training and Capacity
                        Development, and Transfer of knowledge. This approach helps
                        strengthen the operations and move towards an equitable,
                        inclusive and sustainable future.
                      </div>
                      <div className="col-md-6 col-xm-6 mt-4 ">
                        <img alt="our approch" src={OurApproch}  style={imgDirector} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header bg-dark text-white">Our Process</div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">
                      The multiple projects of NIUA are clubbed under six Theme Areas or Knowledge Domains, and the
                      interventions are classified into five types of instruments.</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header bg-dark text-white">
                        INSTRUMENTS
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Policy & Planning</li>
                        <li className="list-group-item">Action Research &amp; Advocacy</li>
                        <li className="list-group-item">Technology, Data solutions &amp; Innovations</li>
                        <li className="list-group-item"> Knowledge Management &amp; Capacity Building </li>
                        <li className="list-group-item"> Partnerships </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card" >
                      <div className="card-header bg-dark text-white">
                        THEMES
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Urbanization and Economic Growth</li>
                        <li className="list-group-item">Urban Governance and finance </li>
                        <li className="list-group-item"> Urban Infrastructure and Build Environment </li>
                        <li className="list-group-item"> Environment, Climate change and resilience </li>
                        <li className="list-group-item"> Social Development </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header bg-dark text-white"> Our Presence </div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">
                      Research projects include topics such as spatial growth, demographic trends, development of toolkits and frameworks, municipal finance, climate change, water, sanitation, hygiene, preparing city master plans, conservation plans. NIUA also conducts customized training programmes to support and assist Government of India’s flagship campaigns and policies. </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header bg-dark text-white"> Collaborations </div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <div className="row">
                      <div className="col-md-6 col-xm-6 lead mt-4">
                        We work with a number of partners, nationally and globally to enable peer learning through proliferation of ideas to strengthen our urban initiatives. Their expertise and support is instrumental in delivering the outcome of our work to the stakeholders. Total partners: <span className="text-bold">140</span><br />
                        National Partners – 78, Knowledge Partners – 68, NGOs – 36, ULBs - 29
                      </div>
                      <div className="col-md-6 col-xm-6">
                        <img alt="" src={Collaborations} style={imgDirector} />
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              <div style={{ display: this.state.languageEng ? "none" : "" }}>
                <div className="card">
                  <div className="card-header bg-dark text-white"> रा.न.का.सं. के बारे में </div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text"> 1976 में स्थापित, राष्ट्रीय नगर कार्य संस्थान (रा.न.का.सं.) शहरी नियोजन और विकास विषय पर भारत का प्रमुख राष्ट्रीय थिंक टैंक है। शहरी क्षेत्र में अत्याधुनिक अनुसंधान के सृजन और प्रसार के केंद्र के रूप में, रा.न.का.सं. तेजी से बढ रहे शहरीकरण वाले भारत की चुनौतियों का समाधान करने के लिए अभिनव समाधान प्रदान करना चाहता है, और  भावी समावेशी और सतत शहरों के लिए मार्ग प्रशस्त करना चाहता है। रा.न.का.सं. 40 वर्षों से अधिक समय से, तेजी से विकसित हो रहे शहरी भारत के लिए शहरी संवाद के निर्माण में और कई बार योगदान देने में अग्रणी रहा है। विभिन्न शहरी पैमानों पर शहरी विमर्श का निर्माण करने के लिए संस्थान शहरी भारत के लिए प्रमुख मुद्दों को सामने लाने पर सक्रिय रूप से काम कर रही है। </p>
                    <p> इसने शहरी चुनौतियों का समाधान करने के लिए अनुसंधान, ज्ञान प्रबंधन, नीति समर्थन और क्षमता निर्माण में अपनी दक्षताओं का उपयोग किया है और देश में स्थायी, समावेशी और उत्पादक शहरी पारिस्थितिकी तंत्र विकसित करने के लिए लगातार प्रयास कर रहा है। यह भारत में शहरी विकास के लिए एक विचारशील नेता और ज्ञान केंद्र के रूप में उभरा है और भारत की शहरी परिवर्तन यात्रा में सहयोग और भागीदारी के लिए भारतीय और अंतर्राष्ट्रीय दोनों संगठनों द्वारा इसकी मांग की जाती है। रा.न.का.सं. अपनी सभी पहलों और कार्यक्रमों के माध्यम से सतत विकास लक्ष्यों (एसडीजी) को प्राप्त करने की दिशा में अपने प्रयासों को संरेखित करने के लिए प्रतिबद्ध है। </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header bg-dark text-white"> विजन </div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">
                      शहरी भारत के लिए एकीकृत समाधानों को बढ़ावा देना।
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header bg-dark text-white"> उद्देश्य </div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text"> शहरी क्षेत्र में प्रभावी नवाचारों को समर्थन देने और ज्ञान के आदान-प्रदान, प्रशिक्षण और क्षमता विकास के माध्यम से उनके प्रसार के लिए नए अनुसंधान और विशेषज्ञता विकसित करना। </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header bg-dark text-white">
                  निदेशक का संदेश
                  </div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <div className="row">
                      <div className="col-md-7">
                        <p className="card-text"> "रा.न.का.सं. पहले से ही स्मार्ट सिटी प्रौद्योगिकियों के विकास, डिजिटल शासन, विकेन्द्रीकृत ज्ञान प्रणाली, नीतिगत ढांचे में लिंग और अक्षमताओं को मुख्यधारा में लाने के साथ-साथ स्थानीय पर जलवायु परिवर्तन के प्रभावों से लड़ने के लिए एक बड़ी प्रतिबद्धता के साथ  नए  डोमेन में कदम रख रहा है। राष्ट्रीय पैमाने और अपने विशाल अनुभव के आधार पर, हम रा.न.का.सं. को अग्रणी नवोन्मेषी दृष्टिकोणों की ओर ले जाने के लिए सभी हितधारकों से सहयोग की आशा करते हैं, जो न केवल भारतीय शहरों को भविष्य की चुनौतियों का सामना करने की अनुमति देगा, बल्कि सतत और समावेशी विकास के माध्यम से भी पनपेगा। ” </p>
                      </div>
                      <div className="col-md-5">
                        <img src={Hitesh} className="img-fluid mx-auto d-block card" style={{
                          "width": "40%", "height": "180px"
                        }} alt="diretImg"></img>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="card-header bg-dark text-white"> रा.न.का.सं. के पूर्व निदेशक</div>
                  <div className="card-body">
                    <div className="row images-wrapper">
                      <div className="col-md-4 col-sm-4 row card">
                        <img src={DevaRaj} style={previewsDir} alt="DevaRaj" className="col-md-6 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                        देवा राज
                          <div className="small"> (1976-1979) </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 card row">
                        <img src={Buch} style={previewsDir} alt="preDir" className="col-md-6 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                        एम.एन.बुच
                          <div className="small"> (1979-1983) </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 card row">
                        <img src={AmitabhKundu} alt="AmitabhKundu" style={previewsDir} className="col-md-8 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                        अमिताभ कुंडू
                          <div className="small"> (1983-1984) </div>
                        </div>

                      </div>
                      <div className="col-md-4 col-sm-4 card row">
                        <img src={OmPrakash} alt="OmPrakash" style={previewsDir} className="col-md-8 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                        ओम प्रकाश माथूर
                          <div className="small"> (1984-1992) </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 card row">
                        <img alt="DineshMehta" src={DineshMehta} style={previewsDir} className="col-md-8 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                        दिनेश बी. मेहता
                          <div className="small"> (1992-1997)</div>
                        </div>
                      </div>
                      <div className="col-md-4 row card">
                        <img src={VinodTewari} style={previewsDir} className="col-md-8 col-xm-12 mt-3" alt="VinodTewari"/>
                        <div className="col-md-6 col-xm-12 text-bold" >
                        विनोद के. तिवारी
                          <div className="small"> (1997-2004)</div>
                        </div>
                      </div>
                      <div className="col-md-4 row card">
                        <img src={ShreekantGupta} alt="ShreekantGupta" style={previewsDir} className="col-md-8 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                        श्रीकांत गुप्ता
                          <div className="small"> (2006-2007) </div>
                        </div>
                      </div>
                      <div className="col-md-4 row card">
                        <img src={ChetanVaidya} alt="ChetanVaidya" style={previewsDir} className="col-md-8 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                        चेतन वैद्य:
                          <div className="small"> (2008-2012) </div>
                        </div>
                      </div>
                      <div className="col-md-4 row card">
                        <img alt="Jagan Shah" src={JaganShah} style={previewsDir} className="col-md-8 col-xm-12 mt-3" />
                        <div className="col-md-6 col-xm-12 text-bold" >
                        जगन ए. शाही
                          <div className="small">(2013-2019) </div>
                        </div>
                      </div>


                    </div>

                  </div>

                <div className="card">
                  <div className="card-header bg-dark text-white"> हमारा दृष्टिकोण </div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <div className="row">
                      <div className="col-md-6 col-xm-6 mt-4 lead">
                      रा.न.का.सं. 5 टी दृष्टिकोण के मूल सिद्धांतों का पालन करता है, जिसमें उपकरण, टेम्पलेट, प्रौद्योगिकी, प्रशिक्षण और क्षमता विकास, और ज्ञान का हस्तांतरण शामिल है। यह दृष्टिकोण संचालन को मजबूत करने और एक समान, समावेशी और सतत भविष्य की ओर बढ़ने में मदद करता है।
                      </div>
                      <div className="col-md-6 col-xm-6 mt-4 ">
                        <img  src={OurApproch} alt="our approch" style={imgDirector} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header bg-dark text-white"> हमारी प्रक्रिया </div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">
                    रा.न.का.सं. की कई परियोजनाओं को छह थीम क्षेत्रों या ज्ञान डोमेन के अंतर्गत रखा गया है, और हस्तक्षेपों को पांच प्रकार के उपकरणों में वर्गीकृत किया गया है।
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header bg-dark text-white">
                      उपकरण
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"> नीति और योजना </li>
                        <li className="list-group-item"> कार्रवाई अनुसंधान और प्रचार-प्रसार </li>
                        <li className="list-group-item"> प्रौद्योगिकी, डेटा समाधान और नवाचार </li>
                        <li className="list-group-item"> ज्ञान प्रबंधन और क्षमता निर्माण </li>
                        <li className="list-group-item"> साझेदारी </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card" >
                      <div className="card-header bg-dark text-white">
                      विषय 
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"> शहरीकरण और आर्थिक विकास </li>
                        <li className="list-group-item"> शहरी शासन और वित्त </li>
                        <li className="list-group-item"> शहरी बुनियादी ढाँचा और पर्यावरण का निर्माण </li>
                        <li className="list-group-item"> पर्यावरण, जलवायु परिवर्तन और लचीलापन </li>
                        <li className="list-group-item"> सामाजिक विकास </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header bg-dark text-white"> हमारी उपस्थिति </div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">
                    अनुसंधान परियोजनाओं में स्थानिक विकास, जनसांख्यिकीय रुझान, टूलकिट और ढांचे का विकास, नगरपालिका वित्त, जलवायु परिवर्तन, जल, स्वच्छता, स्वास्थ्य-रक्षा, शहर का मास्टर प्लान तैयार करना, संरक्षण योजना जैसे विषय शामिल हैं। रा.न.का.सं. भारत सरकार के प्रमुख अभियानों और नीतियों का समर्थन और सहायता करने के लिए अनुकूलित प्रशिक्षण कार्यक्रम भी आयोजित करता है। </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header bg-dark text-white"> Collaborations </div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <div className="row">
                      <div className="col-md-6 col-xm-6 lead mt-4">
                      हम अपनी शहरी पहलों को मजबूत करने के लिए विचारों के प्रसार के माध्यम से पीयर लर्निंग को सक्षम करने के लिए राष्ट्रीय और वैश्विक स्तर पर कई साझेदारों के साथ काम करते हैं। उनकी विशेषज्ञता और समर्थन हमारे काम के परिणाम को हितधारकों तक पहुँचाने में महत्वपूर्ण भूमिका निभाते हैं। कुल भागीदार: <span className="text-bold">140</span><br />
                      राष्ट्रीय भागीदार – 78, ज्ञान भागीदार – 68, गैर सरकारी संगठनों – 36, शहरी स्थानीय निकायों - 29
                      </div>
                      <div className="col-md-6 col-xm-6">
                        <img alt="" src={Collaborations} style={imgDirector} />
                      </div>
                    </div>
                  </div>


                </div>
                
              </div>
              <form>
                <div className="card">
                  <div className="card-body">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <div className="input-group-text">

                          <input type="checkbox" checked={this.state.about.process === "1"} name="process" value={this.state.about.process} onChange={this.handleChangeChk}  />
                        </div>
                      </div>
                      <p className="form-control">I have read the company profile thoroughly</p>
                    </div>
                  </div>

                  <div className="card-footer">
                    <Link to="/" className="btn btn-dark text-white"> Back </Link>
                    <input type="button" value="Continue" className="btn btn-primary ml-2" onClick={this.pressContinue} />
                  </div>
                </div>

              </form>
              {/* End Main Content */}
            </main>
            {/* END ENGLISH CONTENT */}


          </div>
        </div>
      </>
    );
  }
}
