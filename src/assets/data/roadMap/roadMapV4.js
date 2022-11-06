import { FiCheck, FiMinus } from "react-icons/fi";
import thumb1 from "assets/images/nft/card.png";
import thumb2 from "assets/images/nft/card2.png";
import thumb3 from "assets/images/nft/card.png";
import thumb4 from "assets/images/nft/card2.png"; 

const data = [
  {
    title: "Phase 01",
    thumb: thumb1,
    features: [
      {
        icon: <FiCheck />,
        text: "Développement de la Dapp",
      },
      {
        icon: <FiCheck />,
        text: "Création du White-paper",
      },
      {
        icon: <FiCheck />,
        text: "Lancement de la plateforme Nova Bridge",
      },
    
    ],
  },

  {
    title: "Phase 02",
    thumb: thumb2,
    features: [
      {
        
        text: "Lancement des Bridges (levées de fonds)",
      },{
        
        text: "Développement de la Markeplace Nova",
      },
      
    ],
  },

  {
    title: "Phase 03",
    thumb: thumb3,
    features: [
      {
        
        text: "Lancement de la Marketplace.",
      },
      {
        
        text: "Expension sur de nouveaux marchés",
      },
      
    ],
  },

  {
    title: "Phase 04",
    thumb: thumb4,
    features: [
      {
        
        text: "Élargissement des opportunités d'investissements",
      },
      
    ],
  },
];

export default data;
