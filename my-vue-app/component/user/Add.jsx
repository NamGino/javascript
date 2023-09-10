import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'
function Add() {
    const [data,setData] = useState([]);
    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch('https://wlp.howizbiz.com/api/phanloaihoc?ranks[]=Kingdom&ranks[]=Phylum&ranks[]=Class&ranks[]=Order&ranks[]=Family&ranks[]=Genus',{
                    method: 'GET',
                    headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    }
                });
                const data = await response.json();
                setData(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])
    return (
        <>
            <Formik
                initialValues={{
                    attachments:[],
                    class_id:14,
                    cong_bo:true,
                    dac_diem_loai:"",
                    dac_diem_sinh_thai:"",
                    family_id:1067,
                    genus_id:19317,
                    gia_tri_loai:"",
                    isTrusted:true,
                    is_loai_dac_huu:null,
                    iucns:[],
                    kingdom_id:1,
                    loai_noi_bat:false,
                    minh_hoa_attachments:[],
                    nghi_dinhs:[],
                    nguon_du_lieu:null,
                    order_id:161,
                    phylum_id:9,
                    qrcode_color:"#fff",
                    sach_dos:[],
                    show_qrcode:true,
                    sinh_canh_bi_chia_cat_suy_giam:
                    { 
                        mo_ta_chi_tiet: "",
                        noi_cu_tru_hoac_phan_bo: "Không xác định",
                        su_suy_giam_lien_tuc_khu_vuc_phan_bo: "Không xác định",
                        thong_tin_khac: ""
                    },
                    su_suy_giam_quan_the:
                    {
                        mo_ta_chi_tiet: "",
                        suy_giam_quan_the_theo_quan_sat: "Không xác định",
                        suy_giam_quan_the_theo_thoi_diem_danh_gia: "Không xác định",
                        thong_tin_khac: ""
                    },
                    ten:"Nam",
                    ten_khoa_hoc:"yasuo",
                    ten_tac_gia:null,
                    toa_dos:[],
                }}
            onSubmit={(values) => {
                console.log('Form submitted with values:', values);
            }}
            >
            <Form>
                <div className='row col-lg-12'>
                    <div className='d-flex align-items-center'>
                        <h1 className='me-3'><Link className='text-decoration-none' to={'/TableUser'}></Link></h1>
                        <div className='title_user mt-1 d-flex justify-content-center'> THÔNG TIN VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM CẦN ĐƯỢC ƯU TIÊN BẢO VỆ</div>
                    </div>
                    <div className='col-lg-9'>
                        <div>
                            <b>I. Thông tin chung về loài</b><br/>
                            <span>Tên <span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className='mb-3'>
                            <Field
                                className="w-100"
                                type="text"
                                id="ten"
                                name="ten"
                                placeholder='Tên'
                            />
                        </div>

                        <div className='d-flex justify-content-between mb-3'>
                            <div className='col-lg-5'>
                                <div>
                                    <span>Tên khoa học  <span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <Field
                                    className="w-100"
                                    type="text"
                                    id="ten_khoa_hoc"
                                    name="ten_khoa_hoc"
                                    placeholder='Tên khoa học '
                                />
                            </div>

                            <div className='col-lg-5'>
                                <div>
                                    <span>Tên Tác Giả</span>
                                </div>
                                <Field
                                    className="w-100"
                                    type="text"
                                    id="ten_tac_gia"
                                    name="ten_tac_gia"
                                    placeholder='Tên Tác Giả'
                                />
                            </div>
                        </div>

                        <div>
                            <span>Tên Địa Phương</span>
                        </div>
                        <div>
                            <Field
                                className="w-100 mb-3"
                                type="text"
                                id="Name"
                                name="Name"
                                placeholder='Tên Địa Phương'
                            />
                        </div>
                        <div>
                            <span>Nguồn Dữ Liệu</span>
                        </div>
                        <div>
                            <Field
                                className="w-100 mb-3"
                                type="text"
                                id="nguon_du_lieu"
                                name="nguon_du_lieu"
                                placeholder='Nguồn Dữ Liệu'
                            />
                        </div>


                    </div>

                    <b>II. Thông tin chung về loài</b><br />
                    <div className='d-flex mb-3'>
                        <div className='col-lg-4'>
                            <div>
                                <span>Giới  <span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div>
                                <Field
                                    style={{ width: '300px' }}
                                    type="text"
                                    id="kingdom"
                                    name="kingdom_id"
                                    placeholder='Giới '
                                />
                                <div>{
                                        // data.map((index)=>{
                                        //     <ul>
                                        //         <li>{index.rank}</li>
                                        //     </ul>
                                        // })
                                    }</div>
                            </div>
                        </div>
                        <div className='col-lg-4' style={{ marginLeft: '15px' }}>
                            <div>
                                <span>Ngành  <span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div>
                                <Field
                                    style={{
                                        width: '300px'
                                    }}
                                    type="text"
                                    id="Name"
                                    name="Name"
                                    placeholder='Ngành '
                                />
                            </div>
                        </div>
                        <div className='col-lg-4' style={{ marginLeft: '15px' }}>
                            <div>
                                <span>Lớp  <span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div>
                                <Field
                                    style={{ width: '300px' }}
                                    type="text"
                                    id="Name"
                                    name="Name"
                                    placeholder='Lớp '
                                />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='col-lg-4'>
                            <div>
                                <span>Bộ  <span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div>
                                <Field
                                    style={{ width: '300px' }}
                                    type="text"
                                    id="Name"
                                    name="Name"
                                    placeholder='Bộ '
                                />
                            </div>
                        </div>
                        <div className='col-lg-4' style={{ marginLeft: '15px' }}>
                            <div>
                                <span>Họ  <span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div>
                                <Field
                                    style={{
                                        width: '300px'
                                    }}
                                    type="text"
                                    id="Name"
                                    name="Name"
                                    placeholder='Họ '
                                />
                            </div>
                        </div>
                        <div className='col-lg-4' style={{ marginLeft: '15px' }}>
                            <div>
                                <span>Chi  <span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div>
                                <Field
                                    style={{ width: '300px' }}
                                    type="text"
                                    id="Name"
                                    name="Name"
                                    placeholder='Chi '
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <button type="submit">Thêm mới</button>
            </Form>
        </Formik >
        </>
    )
}

export default Add