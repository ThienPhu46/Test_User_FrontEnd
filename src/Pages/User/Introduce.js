import { useState } from "react";
import "../../Design_Css/User/Introduce.css";
import HeaderUser from "../../Components/User/Components_Js/HeaderUser";
import FooterUser from "../../Components/User/Components_Js/FooterUser";


const Introduce = () => {

return (
<>
      <HeaderUser />


      <div className="hotel-container">
      <h1 className="hotel-title">GIỚI THIỆU VỀ DEBUG HOTEL</h1>
      <div className="underline1"></div>
      <section className="section">
        <h2 className="section-title">Về chúng tôi</h2>
        <p>
          Tọa lạc ngay trung tâm thành phố biển Bà Rịa – Vũng Tàu, Debug Hotel là điểm dừng chân lý tưởng dành cho du khách đang tìm kiếm sự thoải mái, hiện đại và đậm chất nghỉ dưỡng.<br/><br/> Với lối kiến trúc tối giản nhưng tinh tế, cùng hệ thống phòng nghỉ tiện nghi và đội ngũ nhân viên thân thiện, chúng tôi cam kết mang đến cho bạn những trải nghiệm lưu trú trọn vẹn – từ kỳ nghỉ cuối tuần nhẹ nhàng đến chuyến công tác chuyên nghiệp.
        </p>
      </section>
        <div className="underline2"></div>
      <section className="section">
        <h2 className="section-title">Sứ mệnh</h2>
        <p className="quote">
          "Mang đến những trải nghiệm lưu trú chất lượng cao với dịch vụ chu đáo, không ngừng đổi mới và sự hài lòng của khách hàng luôn trung tâm."
        </p>
      </section>
      <div className="underline2"></div>

      <section className="section">
        <h2 className="section-title">Tầm nhìn</h2>
        <p>
          Debug Hotel hướng đến trở thành một trong những khách sạn được yêu thích nhất tại khu vực Bà Rịa – Vũng Tàu, nơi hội tụ:
        </p>
        <p>   - Chất lượng dịch vụ đẳng cấp
        <br />- Không gian nghỉ dưỡng thân thiện
        <br />- Ứng dụng công nghệ trong quản lý và chăm sóc khách hàng
        </p>
      </section>
      <div className="underline2"></div>

      <section className="section">
        <h2 className="section-title">Giá trị cốt lõi</h2>
        <ol className="list">
          <li>Tận tâm – Phục vụ bằng sự chu đáo và lắng nghe</li>
          <li>Chuyên nghiệp – Quy trình rõ ràng, đội ngũ được đào tạo bài bản</li>
          <li>Sáng tạo – Không ngừng cải tiến để đem lại trải nghiệm mới mẻ</li>
          <li>Minh bạch – Cam kết thông tin rõ ràng, chính sách linh hoạt</li>
        </ol>
      </section>
      <div className="underline2"></div>

      <section className="section">
        <h2 className="section-title">Đội ngũ của chúng tôi</h2>
        <p>
Debug Hotel sở hữu một đội ngũ quản lý và nhân viên giàu kinh nghiệm trong ngành dịch vụ – khách sạn, luôn đặt sự thoải mái của khách hàng lên hàng đầu. Từ bộ phận lễ tân, buồng phòng đến nhà hàng và chăm sóc khách, mỗi thành viên đều mang đến cảm giác thân thiện như người nhà, nhưng chuyên nghiệp như tiêu chuẩn quốc tế.        </p>
      </section>
      <div className="underline2"></div>

      <section className="section">
        <h2 className="section-title">Vị trí đắc địa</h2>
        <ul className="list">
          <p>Khách sạn nằm gần các tuyến giao thông chính, chỉ:</p>
          <li>10 phút đến biển Long Hải</li>
          <li>5 phút đến trung tâm mua sắm CoopMart Bà Rịa</li>
          <li>7 phút đến công viên Bà Rịa</li>
          <li>Gần các nhà hàng, quán ăn địa phương nổi tiếng</li>
        </ul>
      </section>
      <div className="underline2"></div>

      <section className="section">
        <h2 className="section-title">Sẵn sàng đón bạn</h2>
        <p>
          Dù bạn là khách du lịch, người đi công tác hay đơn giản chỉ muốn tìm một nơi bình yên để nghỉ ngơi, Debug Hotel luôn sẵn sàng đồng hành và phục vụ bằng tất cả sự hiếu khách của mình.  
        </p>
      </section>
      <div className="underline2"></div>

      <footer className="footer">
        <p>Đặt phòng ngay hôm nay để trải nghiệm sự khác biệt tại Debug Hotel – Bà Rịa Vũng Tàu!</p>
      </footer>
    </div>
    <FooterUser />
      </>
  );
};
  
export default Introduce;