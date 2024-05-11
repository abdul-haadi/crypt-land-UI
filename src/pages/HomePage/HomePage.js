import React from "react";
import "./HomePage.css";
import logo from "./logo.png";
import dashboard from "./dashboard.png";
import partner_1 from "./partner_1.png";
import partner_2 from "./partner_2.png";
import partner_3 from "./partner_3.png";
import partner_4 from "./partner_4.png";
import partner_5 from "./partner_5.png";
import partner_6 from "./partner_6.png";
import left_side from "./left-side.png";
import right_side from "./right-side.png";
import cust_1 from "./cus_1.png";
import cust_2 from "./cus_2.png";
import cust_3 from "./cus_3.png";
import PricingCard from "../../components/ui/crypt-land/PricingCard/PricingCard";
import demo from "./demo-image.png";
import FooterMenu from "../../components/ui/crypt-land/FooterMenu/FooterMenu";
import Testimonials from "../../components/ui/crypt-land/Testimonials/Testimonials";
import person1 from './person1.png'
import star from './star.png'
import social from './social-icon.png'

const HomePage = () => {
    
    const pricingData = [
        {
            name: "Basic",
            price: "$0",
            detail: "Get a professional website designed according to your needs.",
            featureList: [
                "Get a fully designed Website",
                "Webflow Development",
                "Limited Support",
            ],
        },
    {
      name: "Pro",
      price: "$499",
      detail: "Get a professional website designed according to your needs.",
      featureList: [
        "Get a fully designed Website",
        "Webflow Development",
        "Limited Support",
        "Get a fully designed Website",
        "Webflow Development",
        "24/7 Support system",
      ],
    },
    {
      name: "Enterprise",
      price: "$999",
      detail: "Get a professional website designed according to your needs.",
      featureList: [
        "Get a fully designed Website.",
        "Webflow Development",
        "Limited Support",
        "Get a fully designed Website",
        "Webflow Development",
        "Get a fully designed Website",
        "Limited Support",
        "Get a fully designed Website",
        "24/7 Support system",
      ],
    },
  ];


  const footer = [
    {
      title: "Platform",
      menus: [
        "Why Cloudwise",
        "Expense management",
        "Automatic bookkeeping",
        "Integeration",
      ],
    },
    {
      title: "Company",
      menus: [
        "Why Cloudwise",
        "Expense management",
        "Automatic bookkeeping",
        "Integeration",
      ],
    },
    {
      title: "Resources",
      menus: [
        "Why Cloudwise",
        "Expense management",
        "Automatic bookkeeping",
        "Integeration",
      ],
    },
    {
      title: "Solutions",
      menus: [
        "Why Cloudwise",
        "Expense management",
        "Automatic bookkeeping",
        "Integeration",
      ],
    },
  ];

  return (
    <div className="Application">
      <div className="Intro-Section">
        <div className="box-layout">
          <nav className="nav-bar">
            <div className="nav-bar-1">
            <a>About us</a>
            <a>PlatForm</a>
            <a>Solution</a>
            <a>Customer</a>
            </div>
            <img src={logo} className="logo" />
            <div className="nav-bar-2">
            <a>Price</a>
            <a>Contact</a>
            <a>Login</a>
            <button className="btn">Sign Up</button>
            </div>
          </nav>
          <div className="intro-section-content">
            <div className="intro-section-title">
              The Finance Solutions For Your Business
            </div>
            <div className="intro-section-detail">
              Empower your finance team. The onestop plateform for all financial
              management of small and medium-sized business.
            </div>
            <div className="intro-section-form">
              <input type="text" placeholder="Enter your email address" />
              <button>Book a Demo</button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <img src={dashboard} className="intro-section-image"></img>
        </div>
      </div>
      <div className="partners-section">
        <div className="partner-content">
          Working with world class partners. We`re partner first!
        </div>
        <div className="partner-logo">
          <img src={partner_1}></img>
          <img src={partner_2}></img>
          <img src={partner_3}></img>
          <img src={partner_4}></img>
          <img src={partner_5}></img>
          <img src={partner_6}></img>
        </div>
      </div>
      <div className="feature-section">
        <div className="feature-section-content">
          <div className="feature-title">
            Boosting Business. Today and Tomorrow.
          </div>
          <div className="feature-section-1">
            <div className="feature-section-1-image">
              <img src={left_side}></img>
            </div>
            <div className="feature-section-1-text">
              <div className="feature-section-1-text-title">
                Optimise expense Management as a team
              </div>
              <div className="feature-section-1-text-desc">
                Bring harmony to team expenses with budget limits and real-time
                monitiring Freedom for your staff. Peace of mind for you.
              </div>
              <button className="btn">Explore more</button>
            </div>
            <div></div>
          </div>
          <div className="feature-section-1">
            <div className="feature-section-1-text">
              <div className="feature-section-1-text-title">
                Real-time accounting at your fingertips.
              </div>
              <div className="feature-section-1-text-desc">
                Take the pain out of book keeping! Wave goodbye to mountains of
                paperwork and endless email reminders. There`s now a new way of
                accounting.
              </div>
              <button className="btn">Explore more</button>
            </div>
            <div className="feature-section-1-image">
              <img src={right_side}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="customer-section">
        <div className="customer-section-content">
          <div className="customer-section-title">
            Modern Companies are built on Capital.
          </div>
          <div className="customer-section-detail">
            we provide software for the financial and operational needs of
            today`s founders so they can get back to doing what they do
            best-building
          </div>
          <div className="customer-section-image">
            <div className="founder-detail">
              <img src={cust_1} className="founder-image"></img>
              <div>Benjamin McDonald</div>
              <div>Founder, CEO</div>
            </div>
            <div className="founder-detail">
              <img src={cust_2} className="founder-image"></img>
              <div>Jett Yagan</div>
              <div>Founder, CEO</div>
            </div>
            <div className="founder-detail">
              <img src={cust_3} className="founder-image"></img>
              <div>Layla Cramp</div>
              <div>Founder, CEO</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-section">
        <div className="pricing-section-title">Find the right plan</div>
        <div className="pricing-section-detail">
          "Invest in your company's future with our comprehensive financial
          solution. Contact us for pricing details and see how we can help you
          streamline your finances and reach your business goals.
        </div>
        <div className="pricing-card">
          {pricingData.map((data, index) => (
            <PricingCard {...data} key={index} index={index} />
          ))}
        </div>
      </div>

      {/* Testimonial section */}
      <div className="testimonials-section">
        <div className="testimonials-title">What our customers say</div>
        <div className="testimonials-desc">"Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/services offered]. Read what our clients have to say about their experience with us.</div>
        <div className="reviews">
            <div>
            <Testimonials review="Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable." image={person1} person="Ashley Cooper" star={star}/>
            </div>
            <div>
            <Testimonials review="Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. " image={person1} person="Ashley Cooper" star={star}/>
            </div>
            <div>
            <Testimonials review="Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable." image={person1} person="Ashley Cooper" star={star}/>
            </div>
            <div>
            <Testimonials review="Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable." image={person1} person="Ashley Cooper" star={star}/>
            </div>
            <div className="review-5">
            <Testimonials review="Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. " image={person1} person="Ashley Cooper" star={star}/>
            </div>
            <div>
            <Testimonials review="Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable." image={person1} person="Ashley Cooper" star={star}/>
            </div>
        </div>

      </div>

      <div className="demo-section">
        <div className="demo-section-content">
          <div className="demo-section-left">
            <div className="demo-section-title">
              Let`s Upgrade your finances experience by using Cryptland
            </div>
            <div className="demo-section-btn">
              <button className="btn">Request Demo</button>
              <button>Watch Video</button>
            </div>
          </div>
          <div className="demo-section-right">
            <img src={demo}></img>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className="footer-section">
        <div className="footer-column-1">
          <img src={logo} className="footer-logo"></img>
          <div className="footer-content">
            Empower your finance team. The onestop plateform for all financial
            management of small and medium- sized business.
          </div>
          <div className="footer-socials">
            <img src={social}></img>
          </div>
        </div>
        <div className="footer-columns">
          {footer.map((val, index) => {
            return <FooterMenu {...val} key={index} />;
          })}
        </div>
      </div>
        <div className="line">
        <div className="copyright-content">© 2023 Crypt Land. All rights reserved     |     Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice and Responsible Disclosure</div>
        </div>
    </div>
  );
};

export default HomePage;
