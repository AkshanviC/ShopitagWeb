import useInterSection from "../../hooks/useInterSection";
import "./updatedhome.css";
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
import shoplink4 from "../../assets/shoplink 4.png";
import shoplink1 from "../../assets/shoplink1e.jpg";
import shoplink3 from "../../assets/shoplink3e.jpg";
import shoplink2 from "../../assets/shoplink2e.jpg";
import gplay from "../../assets/gplay.png";
import appstore from "../../assets/apple.png";
import warning from "../../assets/red-alert-icon.svg";
function UpdatedHome() {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
    address: "",
    description: "",
  });
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
  const handleSend = () => {};
  useEffect(() => {
    // console.log("triggered", sec4v);
    // if (sec4v) {
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
    // } else {
    //   setVisibleObj({
    //     key1: false,
    //     key2: false,
    //     key3: false,
    //     key4: false,
    //   });
    // }
  }, []);
  // useEffect(() => console.log(visbleObj), [visbleObj]);
  return (
    <div className="HomeDiv">
      <div className="header">
        <h2 className="navbar-logo" style={{ marginLeft: "50px" }}>
          Shopitag
          <sup>®</sup>
        </h2>
      </div>
      <div className="sectionGrad1" id="home">
        <Navigation paths={location.pathname} />
        <div className=" flex-clmn justify-center wrap">
          <div className="flex-row justify-sb">
            <div className={`fade-in-div ${visible ? "visible" : ""}`}>
              <h4>
                Reducing the{" "}
                <span style={{ color: "#34abeb" }}>waste of your money</span> on
                expired products
              </h4>
            </div>
            <div>
              <img src={shoplink4} className="imageHead" />
            </div>
            <div>
              <h2 className={`${visbleObj.key1 ? "fade-in-3" : "visib-h"}`}>
                Monitor your product expiry dates
              </h2>
              <span className={`${visbleObj.key2 ? "fade-in-3" : "visib-h"}`}>
                simple reilable and accessible on both android and IOs
              </span>
              <div className={`${visbleObj.key3 ? "fade-in-3" : "visib-h"}`}>
                <img
                  src={gplay}
                  style={{ marginRight: "20px" }}
                  alt="play store"
                  className="imageD"
                />
                <img src={appstore} alt="app store" className="imageD" />
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span>
              say goodbye to manual tracking, manage all your expiration date in
              one place with shoplink
            </span>
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
      <div ref={sectionTwoRef} id="details" className="sectionWhite">
        <div className="flex-row">
          <div>
            <h2>Save time, reduce waste</h2>
          </div>
          <div>
            <img src={shoplink1} className="image1" />
          </div>
          <div>
            <h2>and minimize money and stress.</h2>
          </div>
        </div>
        <div style={{ textAlign: "end" }}>
          <h2>Photo-Based Expiration Tracking</h2>
        </div>
        <div className="flex-row justify-even billingScan">
          {/* <div
            className={`fade-top-div ${sec2v ? "visible2" : ""} sec-1a`}
          ></div> */}
          {/* <div className={`fade-top-div ${sec2v ? "visible2" : ""} sec-1b`}>
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
          </div> */}
        </div>
      </div>
      <div className="sectionWhite" id="experience">
        <div className="flex-row" style={{ justifyContent: "center" }}>
          <div>
            <h2>Once you update, the shop shelf</h2>
          </div>
          <div>
            <img src={shoplink2} className="image1" />
          </div>
          <div>
            <h2>is in your hands.</h2>
          </div>
        </div>
        <div style={{ textAlign: "end" }}>
          <h2>Just scan the barcode simply edit.</h2>
        </div>
      </div>
      <div className="sectionWhite" id="functions">
        <div className="flex-row">
          <div>
            <h2>Easy to print your shelf labels.</h2>
          </div>
          <div>
            <img src={shoplink3} className="image1" />
          </div>
          <div>
            <h2>from your mobile.</h2>
          </div>
        </div>
        <div style={{ textAlign: "end" }}>
          <h2>Just scan & print.</h2>
        </div>
      </div>

      <div className="sectionGrad flex-clmn" id="footer">
        <div className="flex-row justify-sb">
          <div
            className="flex-clmn justify-center"
            style={{ textAlign: "center", gap: "10px" }}
          >
            <img src={warning} alt="warning" />
            <span
              style={{ color: "yellow", fontWeight: 700, fontSize: "20px" }}
            >
              Expire Alert
            </span>
            <span>Shoplink</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <div>
              <h2>Have questions or need support? Contact our team today</h2>
            </div>
            <div>
              <label>Full name:</label>
              <input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="inputTag"
                style={{ marginTop: "10px", marginLeft: "10px" }}
              />
            </div>
            <div>
              <label>Company name:</label>
              <input
                value={data.company}
                onChange={(e) => setData({ ...data, company: e.target.value })}
                className="inputTag"
                style={{ marginTop: "10px", marginLeft: "10px" }}
              />
            </div>
            <div>
              <label>Address:</label>
              <input
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
                className="inputTag"
                style={{ marginTop: "10px", marginLeft: "10px" }}
              />
            </div>
            <div>
              <label>Conact number:</label>
              <input
                value={data.contact}
                onChange={(e) => setData({ ...data, contact: e.target.value })}
                className="inputTag"
                style={{ marginTop: "10px", marginLeft: "10px" }}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="inputTag"
                style={{ marginTop: "10px", marginLeft: "10px" }}
              />
            </div>
            <div>
              <label>message:</label>
              <textarea
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                className="inputTag"
                style={{ marginTop: "10px", marginLeft: "10px" }}
              />
            </div>
            <div>
              <button onClick={handleSend} style={{ marginTop: "15px" }}>
                Share
              </button>
            </div>
          </div>
        </div>
        <div>
          <span>All rights reserved. </span>
          <span>Copyright © 2025. LLC </span>
        </div>
      </div>
      {/* <div className="sectionGrad" id="contact">
        <h3>About us</h3>
      </div> */}
      {/* <div className="sectionBlack">
        <h2 className="navbar-logo">
          Shopitag
          <sup>®</sup>
        </h2>
        <div>
          <h4>Copyright © 2023. LLC</h4>
          <h4>Terms of Service</h4>
        </div>
      </div> */}
    </div>
  );
}

export default UpdatedHome;
