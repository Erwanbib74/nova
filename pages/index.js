import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v1/Header";
import Banner from "section/banner/v4";
import CoinInfoSlider from "section/coinInfoSlider";
import About from "section/about/v4";
import Mint from "section/mint/v3/Mint";
import RoadMap from "section/roadMap/v4";
import Footer from "section/footer/v4";
import Popup from "section/popup";
import MintNowModal from "common/modal/mintNowModal";
import WalletModal from "common/modal/walletModal/WalletModal";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";

export default function HomeV4() {
  const {
    visibility,
    metamaskModal,
    walletModalvisibility,
    isPopup,
    popupHandle,
  } = useModal();

  return (
    <Layout>
      {isPopup && <Popup popupHandle={popupHandle} />}
      {metamaskModal && <MetamaskModal />}
      {visibility && <MintNowModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />
      <Banner />
      <CoinInfoSlider />
      <About />
      <CoinInfoSlider />
      <Mint />
      <RoadMap />
      <CoinInfoSlider />
      <Footer />
    </Layout>
  );
}