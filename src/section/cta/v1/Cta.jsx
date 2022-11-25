import { FaDiscord } from "react-icons/fa";
import SectionTitle from "common/sectionTitle";
import Button from "common/button";
import data from "assets/data/socialProfile";

import hoverShape from "assets/images/icon/hov_shape_s.svg";
import particleShape1 from "assets/images/icon/star_1.svg";
import particleShape2 from "assets/images/icon/star_2.svg";
import particleShape3 from "assets/images/icon/star_3.svg";
import particleShape4 from "assets/images/icon/star_4.svg";
import particleShape5 from "assets/images/icon/star_5.svg";
import particleShape6 from "assets/images/icon/star_6.svg";
import particleShape7 from "assets/images/icon/star_7.svg";

import CTAStyleWrapper from "./Cta.style";
import Link from "next/link";

const CTA = () => {
  const particleShapes = [
    
  ];
  return (
    <CTAStyleWrapper className="cta_wrapper_v1">
      <div className="container">
        <SectionTitle
          className="bithu_title_section text-center"
          title="Rejoins la Communauté Nova Bridge"
        />
        <div className="title-emo">🚀</div>
        <div className="bithu_v1_cta_content">
          <div className="join_comunity_btns">
            <Button lg variant="mint" className="wishlist_btn">
              Twitter
            </Button>
            <Button lg variant="blue" className="join_discord_btn">
              {" "}
              <FaDiscord />Discord
            </Button>
          </div>
          <div className="cta_social_links">
            <ul>
              {data?.map((item, i) => (
                <li key={i}>
                  <Link href={item.url}>
                    <a>
                      {item.thumb ? (
                        <img src={item.thumb.src} alt="bithu nft profiles" />
                      ) : (
                        item.icon
                      )}
                    </a>
                  </Link>
                  <img
                    className="social_hover_shape"
                    src={hoverShape.src}
                    alt="bithu nft hover"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="footer_stras_sect">
            <div className="footer_stars">
              {particleShapes?.map((shape, i) => (
                <span key={i} className={`star_${i + 1}`}>
                  <img src={shape.src} alt="bithu nft background particle" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CTAStyleWrapper>
  );
};

export default CTA;
