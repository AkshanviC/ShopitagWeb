import useInterSection from "../../hooks/useInterSection";
import "./home.css";
import React, { useEffect, useState } from "react";
import imgOne from "../../assets/ss1.jpg";
import imgTwo from "../../assets/ss2.jpg";
import imgThree from "../../assets/ss3.jpg";
import imgFour from "../../assets/ss4.jpg";
// import { Navigation } from "../../components/navigation";
import { useLocation } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";
import cart from "../../assets/cart.jpeg";
import qrsample from "../../assets/qrsample.jpeg";
import billing from "../../assets/billing.jpeg";
import { IoCaretBackOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
import { GrHomeOption } from "react-icons/gr";
import { FaRegCircle } from "react-icons/fa";
import notify from "../../assets/notification.jpeg";
import { FaCloudDownloadAlt } from "react-icons/fa";
function Home() {
  const [visible, setVisible] = useState(false);
  const [visbleObj, setVisibleObj] = useState({
    key1: false,
    key2: false,
    key3: false,
    key4: false,
  });
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);
  const [sec2v, sectionTwoRef] = useInterSection({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const [sec3v, sectionThreeRef] = useInterSection({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const [sec4v, sectionFourRef] = useInterSection({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const location = useLocation();

  useEffect(() => {
    // console.log("triggered", sec4v);
    if (sec4v) {
      setTimeout(
        () =>
          setVisibleObj((value) => {
            return { ...value, key1: true };
          }),
        1000
      );
      setTimeout(
        () =>
          setVisibleObj((value) => {
            return { ...value, key2: true };
          }),
        1500
      );
      setTimeout(
        () =>
          setVisibleObj((value) => {
            return { ...value, key3: true };
          }),
        2000
      );
      setTimeout(
        () =>
          setVisibleObj((value) => {
            return { ...value, key4: true };
          }),
        2500
      );
    } else {
      setVisibleObj({
        key1: false,
        key2: false,
        key3: false,
        key4: false,
      });
    }
  }, [sec4v]);
  // useEffect(() => console.log(visbleObj), [visbleObj]);
  return (
    <div className="HomeDiv">
      <div className="sectionGrad1" id="home">
        <Navigation paths={location.pathname} />
        <div className=" flex-row justify-sb wrap">
          <div className={`fade-in-div ${visible ? "visible" : ""}`}>
            <h1>
              Your Shopping <br />
              Experience made simple
            </h1>
            <p className="sub-text">
              Simple, reliable, available for <br /> customers, retailers and
              shopkeepers
              <br />
              in all over world.
            </p>
            <button className="btn btn-success flex-row gapFive ">
              <a href="../../assets/shoplink.apk" download>
                Download
              </a>
              <FaCloudDownloadAlt />
            </button>
          </div>
          <div className="fade-in">
            <img src="https://i.ibb.co/XDPwD46/Screenshot-2023-04-08-123655-removebg-preview.png" />
          </div>
        </div>
      </div>
      <div ref={sectionTwoRef} id="details" className="sectionWhite">
        <div className="flex-row justify-even billingScan">
          <div className={`fade-top-div ${sec2v ? "visible2" : ""} sec-1a`}>
            <div className="flex-row">
              <div>
                <h3>Billing Made Simple!</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  in mattis ipsum. Sed faucibus posuere orci, eu scelerisque
                  erat pulvinar vel. Sed commodo eget massa eu auctor.
                  Suspendisse aliquam pellentesque pulvinar. Nullam efficitur
                  vitae nunc ac scelerisque. Vivamus imperdiet massa eu purus
                  tempus vestibulum. Donec ut lorem ac risus feugiat aliquet
                  eget nec diam. Suspendisse eu tellus rhoncus, dictum magna
                  nec, maximus est. Pellentesque egestas pellentesque dignissim.
                </p>
              </div>
              <img src={qrsample} className="cardImg" />
            </div>
          </div>
          <div className={`fade-top-div ${sec2v ? "visible2" : ""} sec-1b`}>
            <div className="flex-row">
              <img src={billing} className="cardImg2" />
              <div>
                <h3>Just Scan and Voila!</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  in mattis ipsum. Sed faucibus posuere orci, eu scelerisque
                  erat pulvinar vel. Sed commodo eget massa eu auctor.
                  Suspendisse aliquam pellentesque pulvinar. Nullam efficitur
                  vitae nunc ac scelerisque. Vivamus imperdiet massa eu purus
                  tempus vestibulum. Donec ut lorem ac risus feugiat aliquet
                  eget nec diam. Suspendisse eu tellus rhoncus, dictum magna
                  nec, maximus est. Pellentesque egestas pellentesque dignissim.
                </p>
              </div>
            </div>
          </div>
          <div className={`fade-top-div ${sec2v ? "visible2" : ""} sec-2a`}>
            <div className="flex-row">
              <div>
                <h3>Efficient Management</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  in mattis ipsum. Sed faucibus posuere orci, eu scelerisque
                  erat pulvinar vel. Sed commodo eget massa eu auctor.
                  Suspendisse aliquam pellentesque pulvinar. Nullam efficitur
                  vitae nunc ac scelerisque. Vivamus imperdiet massa eu purus
                  tempus vestibulum. Donec ut lorem ac risus feugiat aliquet
                  eget nec diam. Suspendisse eu tellus rhoncus, dictum magna
                  nec, maximus est. Pellentesque egestas pellentesque dignissim.
                </p>
              </div>
              <img src={cart} className="cardImg" />
            </div>
          </div>
          <div className={`fade-top-div ${sec2v ? "visible2" : ""} sec-2b`}>
            <div className="flex-row">
              <img src={notify} className="cardImg2" />
              <div>
                <h3>Stay updated for everything</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  in mattis ipsum. Sed faucibus posuere orci, eu scelerisque
                  erat pulvinar vel. Sed commodo eget massa eu auctor.
                  Suspendisse aliquam pellentesque pulvinar. Nullam efficitur
                  vitae nunc ac scelerisque. Vivamus imperdiet massa eu purus
                  tempus vestibulum. Donec ut lorem ac risus feugiat aliquet
                  eget nec diam. Suspendisse eu tellus rhoncus, dictum magna
                  nec, maximus est. Pellentesque egestas pellentesque dignissim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionGrad flex-clmn" id="experience">
        <h3>Crystal clear UI with easy to use functionality</h3>
        <div
          className=" flex-row justify-even align-cen wrap"
          ref={sectionFourRef}
        >
          <div className="ssimg border">
            <div className="camera"></div>
            <img
              src={imgOne}
              className={`${visbleObj.key4 ? "ssimg fade-in-3 " : "visib-h "}`}
            />
            <div
              className={`${
                visbleObj.key4 ? "flex-row justify-even align-cen" : "visib-h "
              }`}
            >
              <GrHomeOption />
              <FaRegCircle />
              <MdArrowBackIosNew />
            </div>
          </div>
          <div className="ssimg border">
            <div className="camera"></div>
            <img
              src={imgTwo}
              className={`${visbleObj.key2 ? "ssimg fade-in-3" : "visib-h"}`}
            />
            <div
              className={`${
                visbleObj.key2 ? "flex-row justify-even align-cen" : "visib-h "
              }`}
            >
              <GrHomeOption />
              <FaRegCircle />
              <MdArrowBackIosNew />
            </div>
          </div>
          <div className="ssimg border">
            <div className="camera"></div>
            <img
              src={imgThree}
              className={`${visbleObj.key1 ? "ssimg fade-in-3" : "visib-h"}`}
            />
            <div
              className={`${
                visbleObj.key1 ? "flex-row justify-even align-cen" : "visib-h "
              }`}
            >
              <GrHomeOption />
              <FaRegCircle />
              <MdArrowBackIosNew />
            </div>
          </div>
          <div className="ssimg border">
            <div className="camera"></div>
            <img
              src={imgFour}
              className={`${visbleObj.key3 ? "ssimg fade-in-3 " : "visib-h "}`}
            />
            <div
              className={`${
                visbleObj.key3 ? "flex-row justify-even align-cen" : "visib-h "
              }`}
            >
              <GrHomeOption />
              <FaRegCircle />
              <MdArrowBackIosNew />
            </div>
          </div>
        </div>
      </div>
      <div className="sectionWhite hidden" id="services">
        <h3>Features</h3>
        <div className="flex-row justify-even" ref={sectionThreeRef}>
          <div
            className={`flex-row featureDiv leftDiv ${sec3v ? "visible3" : ""}`}
          >
            <div className="flex-row h-100">
              <div className="flex-row align-cen h-100">
                <div className="flex-row align-cen">
                  <div className="circles mts-1"></div>
                  <h4 className="mts-1 mts-round">Product details</h4>
                </div>
              </div>
              <div className="flex-row align-end h-100">
                <div className="flex-row align-cen">
                  <div className="circles mts-2"></div>
                  <h4 className="mts-2 mts-round">Product category</h4>
                </div>
              </div>
              <div className="flex-row align-start h-100">
                <div className="flex-row">
                  <div className="circles mts-3"></div>
                  <h4 className="mts-3 mts-round">Billing</h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex-row featureDiv rightDiv ${
              sec3v ? "visible4" : ""
            }`}
          >
            <div className="flex-row h-100">
              <div className="flex-row align-cen h-100">
                <div className="flex-row align-cen">
                  <div className="circles mts-4"></div>
                  <h4 className="mts-4 mts-round">Expiry management</h4>
                </div>
              </div>
              <div className="flex-row align-end h-100">
                <div className="flex-row align-cen">
                  <div className="circles mts-5"></div>
                  <h4 className="mts-5 mts-round">Price management</h4>
                </div>
              </div>
              <div className="flex-row align-start h-100">
                <div className="flex-row align-cen">
                  <div className="circles mts-1"></div>
                  <h4 className="mts-1 mts-round">Bar code generation</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionGrad" id="contact">
        <h3>About us</h3>
      </div>
      <div className="sectionBlack">
        <h2 className="navbar-logo">
          Shopitag
          <sup>®</sup>
        </h2>
        <div>
          <h4>Copyright © 2023. LLC</h4>
          <h4>Terms of Service</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
