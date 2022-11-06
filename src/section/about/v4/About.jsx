import SectionTitle from "common/sectionTitle";

import AboutInfoCardList from "../aboutInfoCardList";

import data from "assets/data/about/aboutv1";
import aboutThumb1 from "assets/images/NFT3.png";

import AboutStyleWrapper from "./About.style";

const About = () => {
  const { aboutDescription1, aboutDescription2 } = data;
  return (
    <AboutStyleWrapper id="about">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-md-6">
            <div className="v1_about_us_right_sect">
              <SectionTitle title="À propos de nous" subtitle="Nos Promesses" />
              <div className="v1_about_us_right_text">
              <p>Avec l’équipe NOVA BRIDGE, nous sommes prêt à vous livrer une nouvelle façon d’investir, dès 2023. Nos prédécesseurs ont digitalisé la finance... et ensemble nous allons la décentraliser. Soyez-prêt à participer à un évènement majeur qui va apporter une solide valeur ajoutée à la finance moderne.
Nous construisons le pont qui relie la finance traditionnel à la finance décentralisée. Nous vous apportons le meilleur de la technologie blockchain pour rendre la finance plus vertueuse et plus sécurisée. Pour jouir d'une spéculation durable et contrôlée, sans sacrifier le rendement des investisseurs !</p>
                <p>Aujourd’hui nous avons la possibilité de choisir de vivre dans un monde plus juste et de proposer une place de marché pour les entreprises en croissance.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="v1_about_us_left_sect sm-mt-60">
              <div className="v1_about_us_img_card v1_about_us_img_card1">
                <div className="v1_about_us_img v1_about_us_img1">
                  <img src={aboutThumb1.src} alt="img" />
                </div>
                <div className="v1_about_us_img1_shapes">
                  <div className="v1_about_us_img1_shapes_left">
                    <div className="shape_1"></div>
                    <div className="shape_2"></div>
                  </div>
                  <div className="v1_about_us_img1_shapes_right">
                    <div className="shape_3"></div>
                  </div>
                </div>
              </div>
              <div className="v1_about_us_img_card v1_about_us_img_card2">
                <div className="v1_about_us_img v1_about_us_img2">
                  
                </div>
                <div className="v1_about_us_img2_shapes">
                  <div className="v1_about_us_img2_shapes_left">
                    <div className="shape_1"></div>
                    <div className="shape_2"></div>
                  </div>
                  <div className="v1_about_us_img2_shapes_right">
                    <div className="shape_3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about card  */}
        <AboutInfoCardList />
      </div>
    </AboutStyleWrapper>
  );
};

export default About;

