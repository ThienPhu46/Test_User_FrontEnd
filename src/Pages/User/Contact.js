import { useState } from "react";
import "../../Design_Css/User/Contact.css";
import HeaderUser from "../../Components/User/Components_Js/HeaderUser";
import FooterUser from "../../Components/User/Components_Js/FooterUser";

const Contact = () => {
    return (
        <>
            <HeaderUser />
            <section className="section-contact">
                <h1 className="section-title">LIÊN HỆ VỚI DEBUG HOTEL</h1>
                <div className="underline_room"></div>
                <div className="contact-container">
                    <h2 className="contact-heading">Chúng tôi luôn sẵn sàng hỗ trợ bạn!</h2>

                    <p className="contact-description">
                        Để tìm hiểu thêm về các dịch vụ tại Debug Hotel hoặc cần hỗ trợ đặt phòng, hủy phòng, điều chỉnh lịch trình lưu
                        trú... cách nhanh chóng và tiện lợi nhất là liên hệ với chúng tôi thông qua mẫu liên hệ bên dưới.
                    </p>

                    <p className="contact-guarantee">
                        Đội ngũ hỗ trợ khách hàng của chúng tôi cam kết phản hồi trong vòng 24
                        giờ làm việc (trong thời gian hoạt động của khách sạn).
                    </p>

                    <p className="contact-alternative">
                        Ngoài ra, vui lòng gửi email cho chúng tôi theo địa chỉ rexhotel@rex.com.vn hoặc bạn có thể trực tiếp liên hệ
                        qua điện thoại:
                    </p>

                    <div className="contact-details">
                        <p>
                            <strong>Hotline:</strong> 0911 111 367
                        </p>
                        <p>
                            <strong>Điện thoại:</strong> (+84) 911 111 367 – (+84) 1113060704
                        </p>
                        <p>
                            <strong>Email:</strong> <a href="mailto:debughotel@debug.com.vn">debughotel@debug.com.vn</a>
                        </p>
                        <p>
                            <strong>Trang web:</strong>{" "}
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                www.debughotel.com
                            </a>
                        </p>
                        <p>
                            <strong>Fanpage:</strong>{" "}
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                www.facebook.com/DebugHotel
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <FooterUser />
        </>
    );
};

export default Contact;