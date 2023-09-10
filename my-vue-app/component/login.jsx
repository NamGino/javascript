import logo from '/logoColor.png'
import footerLogin from '/footerLogin.svg'
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const navigate = useNavigate();
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const [errorUserName,setErrorUserName] = useState('');
    const [errorPassword,setErrorPassWord] = useState('');
    const handleClick = async (e) =>{

        e.preventDefault();

        if (!validateInputs()) {
            return;
          }

        try {
            const response = await fetch('https://wlp.howizbiz.com/api/web-authenticate', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: username,
                password: password,
              }),
            });
            console.log(response);
            if (!response.ok) {
                throw new Error('Lỗi khi gọi API');
            }
            if (response.status === 200) {
                localStorage.setItem('token', response.access_token);
                navigate("/User"); 
            }
          } catch (error) {
            console.error('Lỗi xác thực:', error);
          }
    } 

    const validateInputs = () => {
        setErrorUserName("");
        setErrorPassWord("");
    
        let isValid = true;
    
        if (!username) {
            setErrorUserName("Trường tên đăng nhập không được bỏ trống");
            isValid = false;
        }
    
        if (!password) {
            setErrorPassWord("Trường mật khẩu không được bỏ trống");
          isValid = false;
        }
    
        return isValid;
      };

    const onChangeUser = (e) => {
        setusername(e.target.value)
    }

    const onChangePass = (e) => {
        setpassword(e.target.value)
    }
    return (
        <>
            <div className="containerAll">
                <div className="borderAll">
                    <div className="header">
                        <div className="login_header d-flex align-items-center">
                            <div className=" layout d-flex ps-4 align-items-center col-lg-1">
                                <img className="logo" src={logo} alt="" />
                            </div>
                            <div className="d-flex justify-content-center col-lg-11 text-white header_content ">
                                HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM ĐƯỢC ƯU TIÊN BẢO VỆ
                            </div>
                        </div>
                    </div>
                    <form className="d-flex" style={{ backgroundImage: `url(${footerLogin})` }}>
                        <div className="position-absolute top-50 start-50 translate-middle ">
                            <div className="login_container login_form p-4">
                                <div className=" d-flex justify-content-center logo_login">
                                    <img className="" src={logo} alt=""/>
                                </div>
                                <b className="d-flex justify-content-center mt-3">Đăng nhập</b>
                                <div className="d-flex justify-content-center align-items-center login_input mt-3 ps-2 pe-2 ">
                                    <div className="w-100">
                                        <input id='username' className="login_input w-100" value={username}  onChange={onChangeUser} placeholder="Tên đăng nhập" type="text" /></div>
                                </div>
                                {errorUserName && (
                                    <div style={{color: 'red'}}>{errorUserName}</div>
                                )}
                                <div className="d-flex justify-content-center align-items-center login_input mt-4 ps-2 pe-2">
                                    <div className="w-100">
                                        <input id='password' className="login_input w-100" value={password} onChange={onChangePass} placeholder="Mật khẩu" type="password" /></div>
                                </div>
                                {errorPassword && (
                                    <div style={{color: 'red',
                                    fontSize: '18px'
                                   }}>{errorPassword}</div>
                                )}
                                <div className="d-flex justify-content-center">
                                    <button className="button_login mt-3 pt-2 pb-2 w-100" onClick={handleClick}><p className="mb-0 text-white">Đăng nhập</p></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}