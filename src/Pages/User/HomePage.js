import { useState } from "react";
import "../../Design_Css/User/HomePage.css";
import HeaderUser from "../../Components/User/Components_Js/HeaderUser";
import FooterUser from "../../Components/User/Components_Js/FooterUser";


const HomePage = () => {
  const services = [
    {
      id: 1,
      image: "./Img_User/Img_List_Page_1.png",
      alt: "Gastronomic Adventure",
    },
    {
      id: 2,
      image: "./Img_User/Img_List_Page_2.png",
      alt: "FREE HOTEL STAY",
    },
    {
      id: 3,
      image: "./Img_User/Img_List_Page_3.png",
      alt: "BIRTHDAY OFFERS",
    },
    {
      id: 4,
      image: "./Img_User/Img_List_Page_4.png",
      alt: "Points for Redemption",
    },
    {
      id: 5,
      image: "./Img_User/Img_List_Page_5.png",
      alt: "Soothing Experience",
    },
    {
      id: 6,
      image: "./Img_User/Img_List_Page_6.png",
      alt: "MEMBER-EXCLUSIVE RATES",
    },
  ];

  return (
    <> 
      <HeaderUser />
      <section className="hotel-services-container">
        <h1 className="hotel-services-title">DỊCH VỤ KHÁCH SẠN</h1>


        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.alt}
                className="service-image"
              />
            </div>
          ))}
        </div>
           <div className="membership-content">
          <div className="membership-description">
            <p>
             DEBUG HOTEL IS A FREQUENT PATRONAGE PROGRAMME DESIGNED TO REWARD GUESTS FOR STAYING AT DEBUG HOTEL.<br/>
            AS A DEBUG MEMBER, YOU WILL ENJOY SPECIAL PRIVILEGES AS BELOW, GOOD ROOM RATE, DISCOUNT ON FOOD & BEVERAGE (APPLY ON A-LA-CARTE MENU ONLY), LATE CHECK-OUT (*) AND MANY MORE...<br/>
            MOREOVER, EVERY DOLLAR SPENT ON ACCOMMODATION AT REX HOTEL EARNS POINTS TO REDEEM FANTASTIC REWARDS AND MORE!
            </p>
          </div>
        </div>
        <div className="map-wrapper">
          <img
            src="./Img_User/Map_home_page.png"
            alt="Hotel Location Map"
            className="map-image"
          />

        </div>
      </section>
      <>
          <FooterUser />
      </>

    </>
  );
};

export default HomePage;