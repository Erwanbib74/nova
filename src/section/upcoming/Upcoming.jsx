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
    dayTitle: "Jours",
    hourTitle: "Heures",
    minuteTitle: "Minutes",
    secondTitle: "Secondes",
    id: "countdownwrap",
  };
  return (
    
    <UpcomingStyleWrapper>
      <Particle />
      <div className="container-fluid">
        <div className="upcoming_content">
          <h2 className="title">MARKETPLACE EN COURS DE CONSTRUCTION ⏳</h2>
          <div className="time_count">
            <CountdownTimer {...settings} />

            <div className="note">
            
            </div>
          </div>

         

          <div className="cta_btns">
            <Button lg variant="outline">
              {" "}
              <FaDiscord />Discord{" "}
            </Button>
            <Button lg variant="outline">
              {" "}
              <FaTwitter />Twitter{" "}
            </Button>
          </div>
        </div>
        <div className="social_links">
          

          

        
          
        </div>
      </div>
    </UpcomingStyleWrapper>
  );
};

export default Upcoming;
