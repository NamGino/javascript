import { LuMenu } from 'react-icons/lu';



function HeaderUser(){
    return (
        <div className='w-100 header_user d-flex'>
                    <div className='d-flex'>
                        <button type='button' className='button_icon ms-3 d-none'>
                            <LuMenu />
                        </button>
                        
                        <img src="http://wlp.howizbiz.com/static/img/logo.png" alt="" className='logo_head mt-1 me-3 ms-3'/>
                        
                        <div className='ms-4 mt-3'>
                            <h3  style={{fontSize:'20px'}}> HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM ĐƯỢC ƯU TIÊN BẢO VỆ  </h3>
                        </div>
                        
                    </div>
                    <div className='space flex-grow-1'></div>
                    <button type='button' className='tk_user mt-2'>
                        <div className='button_content d-flex'>
                            <div className='avata me-2'>
                                <img src="http://wlp.howizbiz.com/storage/images/avatar/default/89-avatar.png" alt="" className='avarta_img w-100 '/>
                            </div>
                            <div className='avatar_text'>NamGino </div>
                        </div>
                    </button>
        </div>
    )
}

export default HeaderUser