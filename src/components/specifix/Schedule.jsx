import React from 'react';

export const Schedule = () => {
    return (
        <div className="schedule container">
            <h1 className="heading">Lịch trình</h1>
            <div className="wrapper">
                <div className="paradigm">
                    <div className="child">
                        <div className="date make-space">
                            <span>Ngày</span>
                            <span>Ngày</span>
                            <span>Ngày</span>
                        </div>
                        <div className="date-icon make-space">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                        <div className="destination make-space">
                            <p>Hà Nội - Mộc Châu</p>
                            <p>Mộc Châu - Sơn La</p>
                            <p>TP.Sơn La - Quỳnh Nhai - Hà Nội</p>
                        </div>
                    </div>
                </div>
                <div className="detail">
                    <div className="item">
                        <h3>Ngày 1: Hà Nội - Mộc Châu</h3>
                        <p>Xe đón khách tại điểm khởi hành đi Mộc Châu. Khách ăn tối và giao lưu văn nghệ
                            tại Mộc Châu</p>
                    </div>
                    <div className="item">
                        <h3>Ngày 2: Mộc Châu - Sơn La</h3>
                        <p>Sau bữa sáng, Khách thăm quan đồi chè hình vân tay, (hoặc rừng thông bản Áng) thăm Thác dải yếm,
                            khu vui chơi Happy land. Ăn trưa tại Mộc Châu
                            <br />
                            <br />
                            Buổi chiều di chuyển từ thị trấn Mộc Châu đến Thành phố Sơn La thăm quan di tích quốc gia đặc
                            biệt Nhà tù Sơn La. Trải nghiệm tắm suối khoáng bản Mòong, khách tự do thăm quan, ngắm Tp Sơn La
                            và nghỉ đêm tại thành phố.
                        </p>
                    </div>
                    <div className="item">
                        <h3>Ngày 3: TP Sơn La - Quỳnh Nhai - Hà Nội</h3>
                        <p> Sau bữa sáng, ăn sáng, đoàn di chuyển tham quan Lòng hồ thủy điện Sơn La. Qua cầu Pá Uôn – cây
                            cầu cao nhất Đông Nam Á với trụ cầu cao nhất 97m.
                            <br />
                            <br />
                            Khách thăm quan, vui chơi tại khu dịch vụ giải trí lòng hồ thủy điện (Phao kéo, mô tô nước, lướt
                            ván, thuyền kayat), trải nghiệm bắt cá, thăm quan, vãn cảnh lòng hồ, thăm cột mốc thị trấn Quỳnh
                            Nhai cũ ngập trong nước.
                            <br />
                            <br />
                            Buổi chiều, Đoàn quay trở lại Thành phố và thưởng thức ẩm thực dân tộc. Sau bữa tối, xe đưa đoàn
                            quay trở về
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};
