import CountdownTimer from "react-component-countdown-timer";
import Counter from "common/counter";
import Button from "common/button"; 
import MintStyleWrapper from "./Mint.style";

import checkIcon from "assets/images/icon/mint-right-text-icon.svg";
import data from "assets/data/mintItems";


const Mint = () => {
  const counterSettings = {
    count: 5432560,
    showTitle: true,
    size: 40,
    labelSize: 24,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "D",
    hourTitle: "H",
    minuteTitle: "M",
    secondTitle: "S",
    id: "countdownwrap",
  };
  return (
    <MintStyleWrapper> 
      <div className="container">
        <div className="mint_header">
          <div className="row align-items-end mint_header_row">
            <div className="col-md-4">
              
              <CountdownTimer {...counterSettings} />
            </div>
            <div className="col-md-4 text-center">
              
            </div>
            <div className="col-md-4">
              <h4 className="sale_status text-right">
                NFT NOVA BRIDGE
                <span>
                  <img src={checkIcon.src} alt="icon" />
                </span>
              </h4>
            </div>
          </div>
        </div>



        <div className="mint_items">
        <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="row mint_items_row">
            {data?.map((item, idx) => (
              <div key={idx} className="col-md-4">
                <div className="mint_item_card">
                  <span className="mint_offer_tag"> {item.featuredText} </span>
                  <div className="mint_thumb">
                    <img src={item.thumb.src} alt="mint thumb" />
                  </div>
                 

                  <div className="item_content">
                    <h4>{item.title}</h4>
                    <span className="access_text">{item.accessText}</span>
                    <p>Yuka est une application qui permet de scanner les produits alimentaires {item.unitPrice}</p>
                    <br></br>
                    <span>Objectif : Financer sa campagne de développement</span>
                   <br></br>
                    <span>Dividendes : 10% / an {item.unitPrice}</span>
                    
                    <span>Chance d'obtention: {item.totalPrice}</span>
                  </div>

                 
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        </div>
      </div>
    </MintStyleWrapper>
  );
};

export default Mint;
