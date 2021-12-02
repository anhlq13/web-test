/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';
import { User } from '../ultis/checkUser';
import { useHistory } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [nationality, setNationality] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confimPassword, setConfimPassword] = useState('')

    const [viewPass, setViewPass] = useState(false)
    const history = useHistory()
    const user = User.getUser()
    useEffect(()=>{
        if (user) {
            return history.push('/')
        }
    }, [history, user])
    const submit = () => {
        const data = {
            username,
            nationality,
            phone,
            address,
            city,
            email,
            password,
            confimPassword
        }
        if (password !== confimPassword) {
            return alert('password is wrong!')
        }
        if (username === ''||nationality === ''||phone === ''||address === ''||city === ''||email === ''||password === ''||confimPassword === '') {
            return alert('input is not empty!')
        }
        if (email.indexOf('@')<0) {
            return alert('Email invalidate')
        }
        service.register(data).then(()=>{
            alert('đăng ký thành công')
            return history.push('/login')
        }).catch((er)=>{
            return alert('user already exists')
        })
    }
    return (
        <ClienLayout>
            <div>
                <div className="padding" style={{ position: 'relative' }} />
                <div className="sign-up-form">
                    <h4>
                        Chào mừng bạn đến với
                    </h4>
                    <h3>Vitra</h3>
                    <div className="form-container">
                        <div className="button-wrapper">
                            <Link to="/login"><div className="valid-btn active">Đăng nhập</div></Link>
                            <Link to="/signup"><div className="valid-btn">Đăng ký</div></Link>

                        </div>
                        <div className="input-wrapper">
                            <div className="item">
                                <div className="input-name">Tên đăng nhập</div>
                                <div>
                                    <input onChange={(event) => setUsername(event.target.value)} type="text" placeholder="Tên đăng nhập" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">Quốc tịch</div>
                                <div>
                                    <input onChange={(event) => setNationality(event.target.value)} type="text" placeholder="Việt Nam" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">Địa chỉ</div>
                                <div>
                                    <input onChange={(event) => setAddress(event.target.value)} type="text" placeholder="..." />
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">Thành Phố</div>
                                <div>
                                    <input onChange={(event) => setCity(event.target.value)} type="text" placeholder="Hà Nội" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">Số điện thoại</div>
                                <div>
                                    <input onChange={(event) => setPhone(event.target.value)} type="text" placeholder="Số điện thoại" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">Email</div>
                                <div>
                                    <input onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">Mật khẩu</div>
                                <div>
                                    <input onChange={(event) => setPassword(event.target.value)} type={viewPass ? 'text' : 'password'} placeholder="Mật khẩu" className="no-radius-right" />
                                    <div className="display-pwd" onClick={() => setViewPass(!viewPass)}>
                                        <i className="far fa-eye-slash"  />
                                        {/* <i className="far fa-eye"></i> */}
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">Nhắc lại mật khẩu</div>
                                <div>
                                    <input onChange={(event) => setConfimPassword(event.target.value)} type={viewPass ? 'text' : 'password'} placeholder="Mật khẩu" className="no-radius-right" />
                                    <div className="display-pwd" onClick={() => setViewPass(!viewPass)}>
                                        <i className="far fa-eye-slash"  />
                                        {/* <i className="far fa-eye"></i> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button style={{border:'none'}} onClick={submit} className="valid-btn active">Đăng ký
                            <img src="./assets/images/booking-step/arrow-right-icon.png" />
                        </button>
                    </div>
                </div>
            </div>

        </ClienLayout>
    );
};

export default SignUp;