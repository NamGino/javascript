import { LuSquareEqual } from 'react-icons/lu';
import { RiDashboardFill } from 'react-icons/ri';
import { FaUser, FaPencilAlt, FaBookmark } from 'react-icons/fa';
import { PiSortAscendingLight } from 'react-icons/pi';
import { GiSheep } from 'react-icons/gi';
import './user/user.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderUser from './user/header';
import MainUser from './user/MainUser';
import { Outlet } from 'react-router-dom';
function User() {
    return (
        <>
            <HeaderUser />
            <div className='d-flex'>
                <nav className='sidebar'>
                    <div className='sidebar_content ps-2 pe-2 '>
                        <a href="/bangdieukhien" className='sidebar_item mb-2 d-flex'>
                            <RiDashboardFill className='item_icon me-3 mt-1 mb-1' />
                            <div className='item_title'>Bảng điều khiển</div>
                        </a>
                        <a href="/bangdieukhien" className='sidebar_item mb-2 d-flex content_active'>
                            <FaUser className='item_icon me-3 mt-1 mb-1' />
                            <div className='item_title'> Quản lý người dùng </div>
                        </a>
                        <a href="/bangdieukhien" className='sidebar_item mb-2 d-flex'>
                            <PiSortAscendingLight className='item_icon me-3 mt-1 mb-1' />
                            <div className='item_title'>Phân loại học </div>
                        </a>
                        <a href="/bangdieukhien" className='sidebar_item mb-2 d-flex'>
                            <GiSheep className='item_icon me-3 mt-1 mb-1' />
                            <div className='item_title'>Loài nguy cấp quý hiếm </div>
                        </a>
                        <a href="/bangdieukhien" className='sidebar_item mb-2 d-flex'>
                            <FaPencilAlt className='item_icon me-3 mt-1 mb-1' />
                            <div className='item_title'>Bài viết</div>
                        </a>
                        <a href="/bangdieukhien" className='sidebar_item mb-2 d-flex'>
                            <LuSquareEqual className='item_icon me-3 mt-1 mb-1' />
                            <div className='item_title'>Phiếu điều xuất</div>
                        </a>
                        <a href="/bangdieukhien" className='sidebar_item mb-2 d-flex'>
                            <FaBookmark className='item_icon me-3 mt-1 mb-1' />
                            <div className='item_title'>Danh mục</div>
                        </a>
                    </div>
                </nav>
                <MainUser />
            </div>


        </>

    )
}

export default User