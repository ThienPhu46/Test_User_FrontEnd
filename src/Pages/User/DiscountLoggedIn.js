import { useState } from "react";
import "../../Design_Css/User/DiscountLoggedIn.css";
import HeaderUserLogin from "../../Components/User/Components_Js/HeaderUserLogin";
import FooterUser from "../../Components/User/Components_Js/FooterUser";



const DiscountLoggedIn = () => {
    
    return (
        <>
            <HeaderUserLogin />
                <section className="section-discount-loggedin">
                <h1 className="section-title">KHUYẾN MÃI</h1>
                <div className="underline_room"></div>
                <div className="voucher">KHÔNG CÓ KHUYẾN MÃI</div>
                </section>
            <FooterUser />
        </>
    );
};

export default DiscountLoggedIn;