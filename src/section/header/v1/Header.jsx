import Link from "next/link";
import { useModal } from "utils/ModalContext";
import { useEffect, useState } from "react";
import { FaDiscord, FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "assets/images/bon.png";

const Header = () => {
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };
  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  return (
    <>
      <NavWrapper className="bithu_header" id="navbar">
        <div className="container">
          {/* Main Menu Start */}
          <div className="bithu_menu_sect">
            <div className="bithu_menu_left_sect">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src={logo.src} alt="bithu nft logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="bithu_menu_right_sect bithu_v1_menu_right_sect">
              <div className="bithu_menu_list">
                <ul>
                  <li>
                    <Link href="#home">
                      <a>Accueil</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#about">
                      <a>À propos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#roadmap">
                      <a>Feuille de route</a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/blogs">
                    <a>Levée de fond</a>
                  </Link>
                </li>

                <li>
                  <Link href="/coming-soon">
                    <a>Marketplace</a>
                  </Link>
                </li>
                 
                  <li>
                    <Link href="#">
                      <a>Blog</a>
                    </Link>
                   
                   
                      

                        
                 </li>
                </ul>
              </div>
              <div className="bithu_menu_btns">
                <button className="menu_btn" onClick={() => handleMobileMenu()}>
                  <MdNotes />
                </button>
                <Button sm variant="outline" className="join_btn">
                  <FaDiscord /> Discord
                </Button>
                <Button
                  sm
                  variant="hovered"
                  className="connect_btn"
                  onClick={() => walletModalHandle()}
                >
                  <FaWallet /> Connection
                </Button>
              </div>
            </div>
          </div>
          {/* <!-- Main Menu END --> */}
        </div>
      </NavWrapper>
      {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
