import React from "react";
import "./NewsifyPage.css";
import introimage from "./intro-section.png";
import linkedin from "./linkedin.png";
import samsung from "./samsung.png";
import google from "./google.png";
import zoom from "./zoom.png";
import stripe from "./stripe.png";
import spotify from "./spotify.png";
import visa from "./visa.png";
import dashboard from "./dasboard.png";
import FeatureList from "../../components/ui/newsify/featureList/featureList";
import Services from "../../components/ui/newsify/Services/Services";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";
import Accordion from "../../components/ui/newsify/Accordion/Accordion";
import carose from "./carose.png";
import profile from "./profile.png";
import star from "./star.png";
import design from "./design.png";
import comma from "./comma.png";
import social from "./social.png";

const NewsifyPage = () => {
  const featureLists = [
    {
      title: "Direct Connections",
      description:
        "No logins or anything is needed. Directly connect with everyone with only one permission. Let us control your business world for you. Easy, customizable and quick way of connecting with others",
    },
    {
      title: "Don`t let the team stagenate",
      description:
        "Don`t let the team get board by unnecessary messages. Let your team stay connected in the way they should- only important things. Rest could stay in other apps, we take the important part.",
    },
    {
      title: "Complete Automated",
      description:
        "Your members need to stay active? You can craete polls, feedback papers and a lot more stuff our widgets to keep them connected and everything with one click",
    },
  ];

  const accordionData = [
    {
      title: "What is Team Newsify?",
      content: `It is alomost completely automated as a system . You can schedule plan and create
    calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
    a smooth business plan for your and your teamateswith one click!`,
    },
    {
      title: "How is the team Newsify",
      content: `It is alomost completely automated as a system . You can schedule plan and create
      calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
      a smooth business plan for your and your teamateswith one click!`,
    },
    {
      title: "What does the technology work?",
      content: `It is alomost completely automated as a system . You can schedule plan and create
        calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
        a smooth business plan for your and your teamateswith one click!`,
    },
    {
      title: "How often will i get team Newsify?",
      content: `It is alomost completely automated as a system . You can schedule plan and create
          calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
          a smooth business plan for your and your teamateswith one click!`,
    },
    {
      title: "How automated is this?",
      content: `It is alomost completely automated as a system . You can schedule plan and create
            calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
            a smooth business plan for your and your teamateswith one click!`,
    },
    {
      title: "It is close to news letter regular?",
      content: `It is alomost completely automated as a system . You can schedule plan and create
            calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
            a smooth business plan for your and your teamateswith one click!`,
    },
    {
      title: "Can i get a live demo of Newsify in action?",
      content: `It is alomost completely automated as a system . You can schedule plan and create
            calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
            a smooth business plan for your and your teamateswith one click!`,
    },
  ];

  return (
    <div className="Application-newsify">
      <div className="newsify-intro-section">
        <div className="announcement">
          <button className="announcement-btn">New</button>
          Using Teamly is a manifesto in itself. It is simply the best choice
          for your email marketing
        </div>
        <div className="nav-bar">
          <div className="logo">Newsify</div>
          <div className="nav-bar-content">
            <div className="nav-bar-menus">
              <a>Home</a>
              <a>About Us</a>
              <a>Pricing</a>
              <a>Demo</a>
            </div>
            <div className="nav-bar-search">
              <input
                className="search-box"
                type="text"
                placeholder="Search"
              ></input>
              <button className="nav-bar-btn-1">Register</button>
            </div>
          </div>
        </div>
        <div className="newsify-intro-section-content">
          <div className="newsify-intro-section-left">
            <div className="newsify-intro-section-greeting">
              Hey,Everyone &#128075;
            </div>
            <div className="newsify-intro-section-title">
              Newsify is the email newsletter that works completely automated
            </div>
            <div className="newsify-intro-section-detail">
              Track connections in real time. See who your community being lead
              by and find the most active
            </div>
            <div className="newsify-intro-section-form">
              <input
                type="text"
                placeholder="Your email address"
                className="newsify-intro-section-box"
              ></input>
              <button className="nav-bar-btn-1">Register</button>
            </div>
          </div>
          <div className="newsify-intro-section-right">
            <img src={introimage} className="newsify-intro-section-image"></img>
          </div>
        </div>
      </div>
      <div className="newsify-partner-section">
        <img src={stripe}></img>
        <img src={google}></img>
        <img src={samsung}></img>
        <img src={visa}></img>
        <img src={spotify}></img>
        <img src={linkedin}></img>
        <img src={zoom}></img>
      </div>

      <div className="newsify-features-section">
        <div className="newsify-features-section-content">
          <div className="newsify-features-section-title">
            Let Your Newsletter Do the talk
          </div>
          <div className="newsify-features-section-desc">
            Let`s clam it , today we don`t the time to talk or time to scroll
            over groups or other plateforms . So it is better for your automated
            newsletter to do the tlk. What cloud be done better? Stay connected
            to your community.
          </div>
          <img src={dashboard}></img>
          <div className="newsify-features-list">
            {featureLists.map((val, index) => {
              return (
                <FeatureList {...val} key={index} index={index}></FeatureList>
              );
            })}
          </div>
        </div>
      </div>

      <div className="newsify-services-section">
        <div className="newsify-services-section-title">
          More than a Newsletter
        </div>
        <div className="newsify-services-section-desc">
          Unlock the automated quality experience for everyone in the team.
        </div>
        <div className="newsify-services">
          <Services
            image={image1}
            title="Collect the needed information and see the result easily"
            desc="Help your members find wjat matters to them Collect informations and creates graphics for them to understand their values. To have a smooth experience all members need a bit of guidence."
          ></Services>
          <Services
            image={image2}
            title="Use the analyzer AI to track your reports"
            desc="A strong community could be lead by a strong guidence only. The guide in this tour may be automized already. Our analyzier Ai will track the parameters and will come real life reports."
          ></Services>
          <Services
            image={image3}
            title="Publish in one touch"
            desc="Everything is under you control you can schedule your announcement plan your feeds and create posts with one click Being the right thing in the right time."
          ></Services>
          <Services
            image={image4}
            title="Connection is the key"
            desc="When a member replied to another, they get the connection flow. This way we improve general efficeny of the team."
          ></Services>
        </div>
      </div>

      <div className="newsify-feedback-section">
        <div className="feedback-section-content">
          <div className="feedback-section-header">
            <div className="feedback-section-title">
              The <span style={{ color: "blue" }}>Cutomer is Hero </span>of Our
              Business
            </div>
            <img src={carose}></img>
          </div>
          <div className="feedback-section-desc">
            Newsify is your Email newsletter Webflow template we can build
            anything your dream.
          </div>
        </div>
        <div className="feedback-container">
          <div className="feedback-content">
            I cant describe how great we feel using Newsify. It completely
            changed our workflow and the face we waste on truying to connect
            each other.Top Newsify!”
          </div>
          <img src={design} className="design"></img>
          <img src={comma} className="comma"></img>
          <div className="feedback-person">
            <img src={profile}></img>
            <div className="person-info">
              <div className="person-name">Esther Jackson</div>
              <img src={star} className="star"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="newsify-accordion-section">
        <div className="newsify-accordion-title">Freequently asked questions</div>
        <div className="newsify-accordion-info">We`re happy to answer your questions</div>
        {accordionData.map((val, index) => {
          return <Accordion {...val} key={index} index={index}></Accordion>;
        })}
      </div>

      <div className="free-trial-section">
        <div className="free-trial-newsify">
          <div className="free-trial-section-title">
            Let`s Start Something Great
          </div>
          <div className="free-trial-section-details">
            Sign up with your email adress to be informed about discounts and
            new recruits from all campaigns!
          </div>
          <div className="free-trial-form">
            <input
              type="text"
              placeholder="Enter your email"
              className="free-trial-email"
            ></input>
            <button className="free-trial-btn">Free Trial</button>
          </div>
        </div>
      </div>

      <div className="newsify-footer-section">
        <div className="footer-container">
          <div className="footer-grid">
            <div style={{"font-size":"32px", "font-weight":"600"}}>Newsify</div>
            <div style={{"font-size":"12px", "font-weight":"200", "width":"15vw", "line-height" : "18px"}}>
              Newsify is your Email newsletter Webflow template we can build
              anything your dream.
            </div>
            <button className="try-btn">Try for free</button>
          </div>
          <div className="footer-grid">
            <a className="header-menu">Company</a>
            <a>About us</a>
            <a>Home</a>
            <a>Pricing</a>
            <a>Demo</a>
            <a>Contact us</a>
          </div>
          <div className="footer-grid">
            <a className="header-menu">Support Us</a>
            <a>Blog</a>
            <a>Help center</a>
            <a>FAQ`s</a>
            <a>Product Updates</a>
          </div>
          <div className="footer-grid">
            <a className="header-menu">Resources</a>
            <a>Community</a>
            <a>Contact</a>
            <a>Terms of service</a>
          </div>
          <div className="footer-grid">
            <div className="header-menu">Address</div>
            <div style={{"font-size":"12px", "font-weight":"200", "width":"15vw", "line-height" : "18px"}}>
              101 Marlow Street. #12-05 Clife Parkview. Singapore 059020. <br></br>
             <span style={{"color":"#A3DC2F", "font-weight":"200"}}>View on Maps</span> 
            </div>
            <div>Inquiries</div>
            <div>+65 6156 5519 hello@Newsify.com</div>
            <img src={social}></img>
          </div>
        </div>
        <div className="line-newsify">
        <div className="copyright-content-newsify">© 2023 Newsify. All rights reserved     |     Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice and Responsible Disclosure</div>
        </div>
      </div>
    </div>
  );
};

export default NewsifyPage;
