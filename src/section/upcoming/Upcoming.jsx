import CountdownTimer from "react-component-countdown-timer";
import {
  FaDiscord,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";
import Button from "common/button";

import msgIcon from "assets/images/icon/message-favorite.svg";
import openseaIcon from "assets/images/icon/opensea.svg";
import mediumIcon from "assets/images/icon/med.svg";
import hoverShape from "assets/images/icon/hov_shape_s.svg";
import Particle from "./Particles";
import UpcomingStyleWrapper from "./Upcoming.style";
import Link from "next/link";

const Upcoming = () => {
  const settings = {
    count: 5432560,
    showTitle: true,
    size: 60,
    labelSize: 14,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "Days",
    hourTitle: "Hours",
    minuteTitle: "Minutes",
    secondTitle: "Second",
    id: "countdownwrap",
  };
  return (
    <UpcomingStyleWrapper>
      <Particle />
      <div className="container-fluid">
        <div className="upcoming_content">
          <h2 className="title">MINT COMING SOON</h2>
          <div className="time_count">
            <CountdownTimer {...settings} />

            <div className="note">
              <h5>
                Leave Your Email to Be Notified About Presales & Whitelist
              </h5>
            </div>
          </div>

          <div className="input_box">
            <input type="email" placeholder="Email Address" />
            <button>
              {" "}
              Notify Me <img src={msgIcon.src} alt="icon" />
            </button>
          </div>

          <div className="cta_btns">
            <Button lg variant="outline">
              {" "}
              <FaDiscord /> Join Discord{" "}
            </Button>
            <Button lg variant="outline">
              {" "}
              <FaTwitter /> Join Twitter{" "}
            </Button>
          </div>
        </div>
        <div className="social_links">
          <Link href="#">
            <a>
              <img src={openseaIcon.src} alt="icon" />
              <span className="hover_shape">
                <img src={hoverShape.src} alt="shape" />
              </span>
            </a>
          </Link>

          

          <Link href="#">
            <a>
              <FaInstagram />
              <span className="hover_shape">
                <img src={hoverShape.src} alt="shape" />
              </span>
            </a>
          </Link>
          <Link href="#">
            <a>
              <FaTelegramPlane />
              <span className="hover_shape">
                <img src={hoverShape.src} alt="shape" />
              </span>
            </a>
          </Link>
          <Link href="#">
            <a>
              <FaFacebook />
              <span className="hover_shape">
                <img src={hoverShape.src} alt="shape" />
              </span>
            </a>
          </Link>
          <Link href="#">
            <a>
              <img src={mediumIcon.src} alt="icon" />
              <span className="hover_shape">
                <img src={hoverShape.src} alt="shape" />
              </span>
            </a>
          </Link>
        </div>
      </div>
    </UpcomingStyleWrapper>
  );
};

export default Upcoming;
