import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v1/Header";
import PageHeader from "common/pageHeader/v1";
import BlogDetails from "section/blog/blogDetails/BlogDetails";
import CTA from "section/cta/v2";
import Footer from "section/footer/v3";
import Popup from "section/popup";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";
import WalletModal from "common/modal/walletModal/WalletModal";

export default function Post() {
  const { metamaskModal, walletModalvisibility, isPopup, popupHandle } =
    useModal();
  return (
    <Layout>
      {isPopup && <Popup popupHandle={popupHandle} />}
      {metamaskModal && <MetamaskModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />
      <PageHeader />
      <BlogDetails />
      <CTA />
      <Footer />
    </Layout>
  );
}
