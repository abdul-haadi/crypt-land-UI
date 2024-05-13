import React, { useState } from "react";
import start from "./start.png";
import "./StartPage.css";
import menubar from "./menubar.png";
import Group from "./Group.png";
import google from "./google_1.png";
import microsoft from "./microsoft.png";
import airbnb from "./airbnb.png";
import spotify from "./spotify_1.png";
import facebook from "./facebook.png";
import service_1 from "./service_1.png";
import service_2 from "./service_2.png";
import member_1 from "./member_1.png";
import member_2 from "./member_2.png";
import member_3 from "./member_3.png";
import member_4 from "./member_4.png";
import socials from "./socials.png";

const StartPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="start-Application">
      <div className="start-intro-section">
        <div className="start-navbar">
          <div className="start-logo">
            <img src={start}></img>
          </div>
          <div className={`start-menu ${showMenu ? "show" : ""}`}>
            <a>Home</a>
            <a>Portfolio</a>
            <a>Services</a>
            <a>Contact</a>
          </div>
          <div
            className="hamburger-menu "
            onClick={() => setShowMenu(!showMenu)}
          >
            <img src={menubar}></img>
          </div>
        </div>
        <div className="start-intro-section-container">
          <div className="start-intro-content">
            <div className="start-intro-welcome">WELCOME</div>
            <div className="start-intro-title">
              Lorem ipsum dolor sit amet consectetur{" "}
            </div>
            <div className="start-intro-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </div>
            <button className="start-explore-btn">Explore</button>
          </div>
          <div>
            <img src={Group} className="start-intro-image"></img>
          </div>
        </div>
      </div>
      <div className="start-partners-section">
        <div className="start-partners-container">
          <div className="start-partners">partners</div>
          <div className="start-partners-title">Lorem Ipsum Dolor</div>
          <div className="start-partners-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="start-partners-logo">
            <img src={google}></img>
            <img src={microsoft}></img>
            <img src={airbnb}></img>
            <img src={facebook}></img>
            <img src={spotify}></img>
          </div>
          <div>
            <button className="partner-button">Learn More</button>
          </div>
        </div>
      </div>

      <div className="start-services-section">
        <div className="start-service-container">
          <div className="start-service-1">
            <div className="service-image">
              <img src={service_1}></img>
            </div>
            <div className="service-content">
              <div className="start-service-title">
                Lorem ipsum dolor sit amet consectetur{" "}
              </div>
              <div className="start-service-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                error ipsum, voluptate culpa nesciunt delectus iste?
              </div>
              <div>
                <button className="partner-button">Learn More</button>
              </div>
            </div>
          </div>
          <div className="start-service-2">
            <div className="service-content">
              <div className="start-service-title">
                Lorem ipsum dolor sit amet consectetur{" "}
              </div>
              <div className="start-service-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                error ipsum, voluptate culpa nesciunt delectus iste?
              </div>
              <div>
                <button className="partner-button">Learn More</button>
              </div>
            </div>
            <div className="service-image">
              <img src={service_2}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="start-team-section">
        <div className="start-team-container">
          <div className="start-team">team</div>
          <div className="start-team-title">Our Talents</div>
          <div className="start-team-desc">
            Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,
          </div>
          <div className="start-team-detail">
            <div className="start-team-member">
              <div className="start-member">
                <img src={member_1}></img>
              </div>
              <div>Peg Legge</div>
              <div>CEO</div>
            </div>
            <div className="start-team-member">
              <div className="start-member">
                <img src={member_2}></img>
              </div>
              <div>Richard Guerra</div>
              <div>CTO</div>
            </div>
            <div className="start-team-member">
              <div className="start-member">
                <img src={member_3}></img>
              </div>
              <div>Alexandra Stolz</div>
              <div>DESIGNER</div>
            </div>
            <div className="start-team-member">
              <div className="start-member">
                <img src={member_4}></img>
              </div>
              <div>Janet Bray</div>
              <div>DEVELOPER</div>
            </div>
          </div>
          <div>
            <button className="partner-button">View Team</button>
          </div>
        </div>
      </div>
      <div className="start-footer-section">
        <div className="start-footer-container">
            <div><img src={socials}></img></div>
            <div>© Start, 2022. All rights reserved.</div>
        </div>

      </div>
    </div>
  );
};

export default StartPage;
