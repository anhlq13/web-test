/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../ultis/checkUser';

export const UserInfo = () => {
    const user = User.getUser()
    return (
        <div className="user-file">
            <div className="avatar-wrapper">
                <img src="./assets/images/specific-tour/user-avatar.png" />
                <div>
                    <h3 className="name">{user.user_name}</h3>
                    <div className="custom">
                        <span>Chỉnh sửa</span>
                        <span><img src="./assets/images/booking-step/file-icon.png" /></span>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="input-wrapper">
                            <h3 className="input-name">Địa chỉ</h3>
                            <input type="text" defaultValue={user.address} name="birth-date" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-wrapper">
                            <h3 className="input-name">Quốc tịch</h3>
                            <input type="text" defaultValue={user.nationality} name="gender" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-wrapper">
                            <h3 className="input-name">Số điện thoại</h3>
                            <input type="text" defaultValue={user.phone} name="phone" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-wrapper">
                            <h3 className="input-name">Email</h3>
                            <input type="email" defaultValue={user.email} name="email" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-wrapper">
                            <h3 className="input-name">Mật khẩu</h3>
                            <input type="password" name="pwd" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-wrapper">
                            <Link to="/" onClick={()=> User.logOut()}><h3 className="input-name">Đăng xuất</h3></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
