import { useModal } from "utils/ModalContext";
import { Slider, SliderItem } from "common/slider/Slider";
import Button from "common/button";
import BannerV1Wrapper from "./Banner.style";
import imgFrameShape from "assets/images/nft/nft-img-shape.png";

import catThumb1 from "assets/images/nft/NOVAFOND.png";
import catThumb2 from "assets/images/nft/NOVAFOND.png";
import catThumb3 from "assets/images/nft/NOVAFOND.png";
import catThumb4 from "assets/images/nft/NOVAFOND.png";
import catThumb5 from "assets/images/nft/NOVAFOND.png";
import catThumb6 from "assets/images/nft/NOVAFOND.png";
import catThumb7 from "assets/images/nft/NOVAFOND.png";
import catThumb8 from "assets/images/nft/NOVAFOND.png";
import overlayImg from "assets/images/nft/v4_baner_mesh-grad.png"


import Particle from "./Particles"

const Banner = () => {
  const { mintModalHandle } = useModal();

  //

  const slideImages = [catThumb1, catThumb2, catThumb3, catThumb4, catThumb5, catThumb6, catThumb7]
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 500,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  



  return (
    <BannerV1Wrapper id="home">
      <Particle />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="bithu_v1_baner_left">
              <div className="banner_title">
                <h2 className="circle_cat_foot">NOVA
                  
                </h2>
                <h2>BRIDGE</h2>
              </div>

              <div className="coin_info">
                <h4>Stage 1, Public Sale</h4>
                <h4>JANUARY 14TH 2023: 12:00PM EST</h4>
              </div>

              <div className="banner_buttons">
                <Button lg variant="mint" onClick={() => mintModalHandle()}>
                  {" "}
                  Mint now
                </Button>
                
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <div className="bithu_v4_baner_right">
              <div className="banner_card banner_card_angle">
                <img src={catThumb8.src} className="banner_img" alt="thumb" />
                <div className="banner_card_shapes">
                  <img src={imgFrameShape.src} alt="shape" />
                </div>
              </div>
              <div className="banner_card">
                <Slider {...settings}>
                  {slideImages?.map((thumb, idx) => (
                    <SliderItem key={idx}>
                      <img src={thumb.src} alt="thumb" />
                    </SliderItem>
                  ))}
                </Slider>
                <div className="banner_card_shapes">
                  <img src={imgFrameShape.src} alt="shape" />
                </div>
              </div>

              
              {/* bg overlay */}
              <span className="bg_overlay">
                <img src={overlayImg.src} alt="thumb" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
