import React from "react";
import "./Footer.css";

function Footer() {
  const FooterData = [
    { category1: "About Us" },
    { category1: "Infomation" },
    { category1: "Privacy Policy" },
    { category1: "Terms & Conditions" },
    { category2: "About Us" },
    { category2: "Infomation" },
    { category2: "Privacy Policy" },
    { category2: "Terms & Conditions" },
    { category3: "About Us" },
    { category3: "Infomation" },
    { category3: "Privacy Policy" },
    { category3: "Terms & Conditions" },
    { category4: "About Us" },
    { category4: "Infomation" },
    { category4: "Privacy Policy" },
    { category4: "Terms & Conditions" },
    { category5: "About Us" },
    { category5: "Infomation" },
    { category5: "Privacy Policy" },
    { category5: "Terms & Conditions" },
    { category6: "About Us" },
    { category6: "Infomation" },
    { category6: "Privacy Policy" },
    { category6: "Terms & Conditions" },
  ];
  return (
    <>
      <hr className="footerhr"></hr>
      <div className="footerdiv">
        <div className="footeritem">
          <div className="footerlogo"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>
        <div className="footeritem">
          <h2>Follow Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
          <div className="footersocialfb"></div>
          <div className="footersocialtw"></div>
        </div>
        <div className="footeritem">
          <h2 className="">Contact Us</h2>
          <p>
            iShop: address @building 124 Call us now: 0123-456-789 Email:
            support@whatever.com
          </p>
        </div>
      </div>
      <hr className="footerhr"></hr>

      <div className="footerdatadiv">
        <div className="footerdataitem">
          <h3>Information</h3>
          {FooterData.map((item) => (
            <p> {item.category1}</p>
          ))}
        </div>
        <div className="footerdataitem">
          <h3>Service</h3>
          {FooterData.map((item) => (
            <p> {item.category2}</p>
          ))}
        </div>
        <div className="footerdataitem">
          <h3>Extra</h3>

          {FooterData.map((item) => (
            <p> {item.category3}</p>
          ))}
        </div>
        <div className="footerdataitem">
          <h3>My Account</h3>

          {FooterData.map((item) => (
            <p> {item.category4}</p>
          ))}
        </div>
        <div className="footerdataitem">
          <h3>Useful Links</h3>

          {FooterData.map((item) => (
            <p> {item.category5}</p>
          ))}
        </div>
        <div className="footerdataitem">
          <h3>Our Offers</h3>

          {FooterData.map((item) => (
            <p> {item.category6}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Footer;
