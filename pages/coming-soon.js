import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v2";
import Upcoming from "section/upcoming";
import MintNowModal from "common/modal/mintNowModal";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";
import Popup from "section/popup";
import WalletModal from "common/modal/walletModal/WalletModal";

export default function ComingSoon() {
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
      <Upcoming />
    </Layout>
  );
}
