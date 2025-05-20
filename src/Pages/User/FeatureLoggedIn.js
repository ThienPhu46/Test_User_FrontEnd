import { useState } from "react";
import "../../Design_Css/User/FeatureLoggedIn.css";
import HeaderUserLogin from "../../Components/User/Components_Js/HeaderUserLogin";
import FooterUser from "../../Components/User/Components_Js/FooterUser";


const FeatureLoggedIn = () => {
    const amenities = [
        {
            id: 1,
            image: "./Img_User/Img_feature_1.png",
            title: "HỒ BƠI NGOÀI TRỜI / VÔ CỰC",
        },
        {
            id: 2,
            image: "./Img_User/Img_feature_2.png",
            title: "SPA CHĂM SÓC SỨC KHỎE & TRỊ LIỆU",
        },
        {
            id: 3,
            image: "./Img_User/Img_feature_3.png",
            title: "PHÒNG GYM",
        },
        {
            id: 4,
            image: "./Img_User/Img_feature_4.png",
            title: "NHÀ HÀNG",
        },
        {
            id: 5,
            image: "./Img_User/Img_feature_5.png",
            title: "QUẦY BAR & LOUNGE",
        },
        {
            id: 6,
            image: "./Img_User/Img_feature_6.png",
            title: "PHÒNG HỘI NGHỊ/SỰ KIỆN",
        },
    ]
    return (
        <>
            <HeaderUserLogin />
            <div className="section-feature-loggedin">
            <section className="section-feature">
                <h1 className="section-title">TIỆN ÍCH</h1>
                <div className="underline_room"></div>
            </section>

            <div className="amenities-container">
                {amenities.map((amenity) => (
                    <div key={amenity.id} className="amenity-card">
                        <div className="amenity-image">
                            <img src={amenity.image || "/placeholder.svg"} alt={amenity.title} />
                        </div>
                        <div className="amenity-title">
                            <h3>{amenity.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            <FooterUser />
        </>
    );
};

export default FeatureLoggedIn;