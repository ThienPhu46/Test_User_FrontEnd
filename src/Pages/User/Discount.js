import { useState } from "react";
import "../../Design_Css/User/Discount.css";
import HeaderUser from "../../Components/User/Components_Js/HeaderUser";
import FooterUser from "../../Components/User/Components_Js/FooterUser";



const Discount = () => {
    
    return (
        <>
            <HeaderUser />
                <section className="section-discount">
                <h1 className="section-title">KHUYẾN MÃI</h1>
                <div className="underline_room"></div>
                <div className="voucher">KHÔNG CÓ KHUYẾN MÃI</div>
                </section>
            <FooterUser />
        </>
    );
};

export default Discount;