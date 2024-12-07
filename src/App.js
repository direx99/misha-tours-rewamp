import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { analytics } from "./firebase-config.js";
import { logEvent } from "firebase/analytics";
import ReviewsSection from "./components/ReviewsSection.jsx";
import { FaWhatsapp, FaFacebookMessenger, FaFacebook } from "react-icons/fa";

function App() {
  useEffect(() => {
    // Log a page view
    logEvent(analytics, "page_view");

    // Custom log event example
    logEvent(analytics, "screen_view", {
      screen_name: "HomePage",
    });
  }, []);

  return (
    <div>
      <Header />
      <HomeSection />
      <AboutSection />
      <GallerySection />
      <ReviewsSection />
      <MapSection />
      <ContactSection />
    </div>
  );
}

function Header() {
  return (
    <header className="top-bar navbar navbar-expand-lg navbar-custom sticky-top">
      <a className="navbar-brand font-weight-bold" href="#">
        Misha Tours
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#gallery">
              Gallery
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#reviews">
              Reviews
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function HomeSection() {
  return (
    <section
      id="home"
      className="cover-section text-center text-white d-flex align-items-center justify-content-center"
    >
      <div className="container">
        <h1>Misha Tours</h1>
        <p>Your trusted travel guide to explore the beauty of Sri Lanka</p>
        <button className="btn btn-warning" onClick={scrollToAbout}>
          Plan Your Trip
        </button>
      </div>
    </section>
  );
}

function AboutSection() {
  logEvent(analytics, "section_scroll", {
    section_name: "About",
  });
  return (
    <section id="about" className="about-section py-5 text-center">
      <div className="container">
        <h2>About the Business</h2>
        <p>
          Misha Tours offers immersive and personalized travel experiences
          across the breathtaking landscapes of Sri Lanka. Guided by local
          experts, our tours showcase the island's rich culture, vibrant
          heritage, and hidden gems, ensuring every traveler uncovers the true
          beauty of this tropical paradise. Whether you're exploring ancient
          temples, relaxing on golden beaches, or trekking through lush tea
          plantations, we craft every journey to be unique, memorable, and
          deeply connected to Sri Lanka’s essence.
        </p>
      </div>
    </section>
  );
}

function GallerySection() {
  logEvent(analytics, "section_scroll", {
    section_name: "Gallery",
  });
  const galleryImages = [
    "https://github.com/user-attachments/assets/f417a043-4dd9-4841-ae6d-cd0f2d0e6bfb",
    "https://github.com/user-attachments/assets/b3a578da-a484-46d8-aadd-503b8d7ed6f0",
    "https://github.com/user-attachments/assets/e786a897-7e0a-486d-a2d5-1806c043205b",
    "https://github.com/user-attachments/assets/9a1dfb90-99e8-4776-b6b8-87a1be6ef97e",
    "https://github.com/user-attachments/assets/dde843a5-ad71-45ce-b87f-26f78a520963",
    "https://github.com/user-attachments/assets/65f77b68-fa5e-4959-a8b2-61bf84df66a9",
    "https://github.com/user-attachments/assets/576584ae-5d8d-424c-a4c2-64f13a85c8a5",
    "https://github.com/user-attachments/assets/77841e84-698d-41fd-a614-5eed5d5245f2",
    "https://github.com/user-attachments/assets/6dccf930-bae6-4f2f-827f-05c4c6a749e6",
    "https://github.com/user-attachments/assets/e2a7b14b-8d86-4d7a-af3f-41762dcfc765",
    "https://github.com/user-attachments/assets/fcc0e8c5-ecb4-45e0-b4c6-b653c5d14181",
    "https://github.com/user-attachments/assets/5388fd45-405b-4741-8afb-1da7ad50bf52",
  ];

  return (
    <section id="gallery" className="gallery-section py-3 text-center">
      <div className="container">
        <h2>Gallery</h2>
        <div className="row">
          {galleryImages.map((url, index) => (
            <div className="col-sm-6 col-md-4 mb-4" key={index}>
              <img src={url} className="img-fluid rounded" alt="Gallery" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  logEvent(analytics, "section_scroll", {
    section_name: "Map",
  });
  return (
    <section className="map-section">
      <div className="container">
        <h2 className="text-center my-4">Our Location</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.70353880791373!2d79.94705631931319!3d6.615005839503517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae237a355aeb8e5%3A0xc2eeac3dfec2365b!2sRestaurant%20Weranda!5e0!3m2!1sen!2slk!4v1733583693015!5m2!1sen!2slk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  logEvent(analytics, "section_scroll", {
    section_name: "Contact",
  });
  return (
    <section id="contact" className="contact-section py-5 text-center">
      <div className="container">
        <h2 className="text-white">Contact Us</h2>
        <p className="text-light mb-4">
          Reach out to us through any of the following channels.
        </p>
        <div className="contact-details mb-4">
          <p className="text-white">
            Address: No.301 Mahawaskaduwa Waskaduwa 12580 , Sri Lanka
          </p>
          <p className="text-white">Phone: +94 71 342 3976</p>
          <p className="text-white">Email: info@mishatours.lk</p>
        </div>
        <div className="contact-icons d-flex justify-content-center mb-4">
          <a
            href="https://www.facebook.com/share/14evuptpF6/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "30px", margin: "0 10px", color: "#0078ff" }}
          >
            <FaFacebook />
          </a>
          <a
            href="https://m.me/geethanga.silva.3"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "30px", margin: "0 10px", color: "#0078ff" }}
          >
            <FaFacebookMessenger />
          </a>
          <a
            href="https://wa.me/+94713423976"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "30px", margin: "0 10px", color: "#25D366" }}
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}

// Placeholder functions
function scrollToContact() {
  logEvent(analytics, "button_click", {
    button_name: "Learn More",
  });
  console.log("Button clicked!");

  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

export default App;
