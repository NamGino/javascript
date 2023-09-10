import {Link} from 'react-router-dom'
import logo from '/logoColor.png'
function Header() {
    return (
        <>
            <div className="header">
                <div className="fisrt_header d-flex align-items-center justify-content-end">
                    <div className=" text-white me-5 d-flex align-items-center">
                        <Link to="/Login" className="login d-flex align-items-center text-decoration-none text-white"> Đăng nhập </Link>
                    </div>
                </div>
                <div className="second_header d-flex align-items-center">
                    <div className=" layout d-flex ps-4 align-items-center col-lg-7">
                        <img className="logo col-lg-1" src={logo} alt="" />
                        <div className="search col-lg-11 d-flex justify-content-center">
                            <div className="search_input">
                                <input className="ps-2 pe-2" type="text" placeholder="Tìm Kiếm" />
                            </div>
                            <div className="search_icon d-flex align-items-center justify-content-center">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className="d-flex align-items-center ps-4">
                                <span className="search_text text-white">Nâng Cao</span>
                            </div>
                        </div>
                    </div>
                    <div className="about col-lg-5 d-flex justify-content-end align-items-center">
                        <a href="#" className="about_ofPage ps-3 pe-3 text-decoration-none text-white d-flex justify-content-center align-items-center"><span>Bản tin</span> </a>
                        <a href="#" className="about_ofPage ps-3 pe-3 text-decoration-none text-white d-flex justify-content-center align-items-center"><span>Giới thiệu</span> </a>
                        <a href="#" className="about_ofPage ps-3 pe-3 text-decoration-none text-white d-flex justify-content-center align-items-center"><span>Tài liệu</span> </a>
                        <a href="#" className="about_ofUser ps-3 pe-3 me-4 text-decoration-none text-dark d-flex justify-content-center align-items-center"><span>Liên hệ</span> </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header