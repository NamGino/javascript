import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Add() {
    const navigate = useNavigate();
    const [listRank, setListRank] = useState([]);
    const [listKingdom, setListKingdom] = useState([]);
    const [listPhylum, setListPhylum] = useState([]);
    const [listClass, setListClass] = useState([]);
    const [listOrder, setListOrder] = useState([]);
    const [listFamily, setListFamily] = useState([]);
    const [listGenus, setListGenus] = useState([]);
    const [kingdom_id, setKingdomId] = useState(null);
    const [phylum_id, setPhylumId] = useState(null);
    const [class_id, setClassId] = useState(null);
    const [order_id, setOrderId] = useState(null);
    const [family_id, setFamilyId] = useState(null);

    const headers = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get('https://wlp.howizbiz.com/api/phanloaihoc?ranks[]=Kingdom&ranks[]=Phylum&ranks[]=Class&ranks[]=Order&ranks[]=Family&ranks[]=Genus', headers).then(response => {
                if (response.status === 200) {
                    setListRank(response.data);
                }
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])

    const SelectRanks = (arr) => {
        const filterRanks = [[], [], [], [], [], []];
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i].rank) {
                case 'Kingdom':
                    filterRanks[0].push({
                        value: arr[i].uuid,
                        label: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                        uuid: arr[i].uuid,
                        type: arr[i].type
                    });

                    break;
                case 'Phylum':
                    if (arr[i].ten) {
                        filterRanks[1].push({
                            value: arr[i].uuid,
                            label: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                            parent_id: arr[i].parent_id,
                            uuid: arr[i].uuid,
                            type: arr[i].type
                        });
                    } else {
                        filterRanks[1].push({
                            value: arr[i].uuid,
                            label: arr[i].ten_khoa_hoc,
                            parent_id: arr[i].parent_id,
                            uuid: arr[i].uuid,
                            type: arr[i].type
                        });
                    }
                    break;
                case 'Class':
                    if (arr[i].ten) {
                        filterRanks[2].push({
                            value: arr[i].uuid,
                            label: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                            parent_id: arr[i].parent_id,
                            uuid: arr[i].uuid,
                            type: arr[i].type
                        });
                    } else {
                        filterRanks[2].push({
                            value: arr[i].uuid,
                            label: arr[i].ten_khoa_hoc,
                            parent_id: arr[i].parent_id,
                            uuid: arr[i].uuid,
                            type: arr[i].type
                        });
                    }
                    break;
                case 'Order':
                    if (arr[i].ten) {
                        filterRanks[3].push({
                            value: arr[i].uuid,
                            label: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                            parent_id: arr[i].parent_id,
                            uuid: arr[i].uuid,
                            type: arr[i].type
                        });
                    } else {
                        filterRanks[3].push({
                            value: arr[i].uuid,
                            label: arr[i].ten_khoa_hoc,
                            parent_id: arr[i].parent_id,
                            uuid: arr[i].uuid,
                            type: arr[i].type
                        });
                    }
                    break;
                case 'Family':
                    if (arr[i].ten) {
                        filterRanks[4].push({
                            value:arr[i].uuid,
                            label: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                            parent_id: arr[i].parent_id,
                            uuid: arr[i].uuid,
                            type: arr[i].type
                        });
                    } else {
                        filterRanks[4].push({
                            value:arr[i].uuid,
                            label: arr[i].ten_khoa_hoc,
                            parent_id: arr[i].parent_id,
                            uuid: arr[i].uuid,
                            type: arr[i].type
                        });
                    }
                    break;
                case 'Genus':
                    
                    if (arr[i].ten) {
                        filterRanks[5].push({
                            value: arr[i].uuid,
                            label: `${arr[i].ten_khoa_hoc}-${arr[i].ten}`,
                            parent_id: arr[i].parent_id,
                            uuid: arr[i].uuid,
                            type: arr[i].type
                        });
                    } else {
                        filterRanks[5].push({
                            value: arr[i].uuid,
                            label: arr[i].ten_khoa_hoc,
                            parent_id: arr[i].parent_id,
                            uuid: arr[i].uuid,
                            type: arr[i].type
                        });
                    }
                    break;
            }

        }
        return filterRanks;

    }

    const changekingdom = (value) =>{
        setKingdomId(value);
    }

    useEffect(() => {
        if (listRank) {
            let selectRank = SelectRanks(listRank);
            setListClass(selectRank[2]);
            setListKingdom(selectRank[0]);
            setListPhylum(selectRank[1]);
            setListOrder(selectRank[3]);
            setListFamily(selectRank[4]);
            setListGenus(selectRank[5]);
        }
        if (kingdom_id) {
            setListPhylum(listPhylum.filter((data) => data.parent_id === kingdom_id));
        }
        if (phylum_id) {
            setListClass(listClass.filter((data) => data.parent_id === phylum_id));
        }
        if (class_id) {
            setListOrder(listOrder.filter((data) => data.parent_id === class_id));
        }
        if (order_id) {
            setListFamily(listFamily.filter((data) => data.parent_id === order_id));
        }
        if (family_id) {
            setListGenus(listGenus.filter((data) => data.parent_id === family_id));
        }
    },[listRank])

    
    return (
        <>
            <Formik
                initialValues={{
                    attachments: [],
                    class_id: '',
                    cong_bo: true,
                    dac_diem_loai: null,
                    dac_diem_sinh_thai:null,
                    family_id: '',
                    genus_id: '',
                    gia_tri_loai: null,
                    isTrusted: true,
                    is_loai_dac_huu: null,
                    iucns: [],
                    kingdom_id: '',
                    loai_noi_bat: false,
                    minh_hoa_attachments: null,
                    nghi_dinhs: [],
                    nguon_du_lieu:  null,
                    order_id: '',
                    phylum_id: '',
                    qrcode_color: "#fff",
                    sach_dos: [],
                    show_qrcode: true,
                    sinh_canh_bi_chia_cat_suy_giam: {
                        mo_ta_chi_tiet: "",
                        noi_cu_tru_hoac_phan_bo: "Không xác định",
                        su_suy_giam_lien_tuc_khu_vuc_phan_bo: "Không xác định",
                        thong_tin_khac: "",
                    },
                    su_suy_giam_quan_the: {
                        mo_ta_chi_tiet: "",
                        suy_giam_quan_the_theo_quan_sat: "Không xác định",
                        suy_giam_quan_the_theo_thoi_diem_danh_gia: "Không xác định",
                        thong_tin_khac: "",
                    },
                    ten_dia_phuong:  null,
                    ten:'',
                    ten_khoa_hoc: '',
                    ten_tac_gia: null,
                    toa_dos: [],
                }}
                onSubmit={(values) => {
                    console.log(values);
                        axios.post('https://wlp.howizbiz.com/api/species',headers,values).then(response => {
                                if(response.status === 200){
                                    navigate('/User');
                                }
                        })
                }}
            >
                {(values) => (
                <Form>
                    <div className='row col-lg-12'>
                        <div className='d-flex align-items-center'>
                            <h1 className='me-3'><Link className='text-decoration-none' to={'/User'}>+</Link></h1>
                            <div className='title_user mt-1 d-flex justify-content-center'> THÔNG TIN VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM CẦN ĐƯỢC ƯU TIÊN BẢO VỆ</div>
                        </div>
                        <div className='col-lg-9'>
                            <div>
                                <b>I. Thông tin chung về loài</b><br />
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
                                        component="select"
                                        style={{ width: '300px' }}
                                        type="text"
                                        id="kingdom"
                                        name="kingdom_id"
                                        placeholder='Giới'
                                        onChange={(e) => {
                                            const selectedValue = e.target.value;
                                            setKingdomId(selectedValue); 
                                        }}
                                        value={values.kingdom_id}

                                    >
                                        <option value="" style={{display: 'none'}}></option>
                                        {listKingdom.length > 0 && listKingdom.map(item=>(
                                            <option value={item.value}>{item.label}</option>
                                        ))}
                                    </Field>
                                            
                                </div>
                            </div>
                            <div className='col-lg-4' style={{ marginLeft: '15px' }}>
                                <div>
                                    <span>Ngành  <span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div>
                                    <Field
                                    as="select"
                                        style={{
                                            width: '300px'
                                        }}
                                        type="text"
                                        id="phylum"
                                        name="phylum_id"
                                        placeholder='Ngành'
                                        onChange={(e) => {
                                            const selectedValue = e.target.value;
                                            setPhylumId(selectedValue); 
                                          }}
                                          value={values.phylum_id}
                                    >
                                        <option value="" style={{display: 'none'}}></option>
                                    {listPhylum.length > 0 && listPhylum.map(item =>(
                                        <option value={item.value}>{item.label}</option>
                                    ))}
                                    </Field>
                                </div>
                            </div>
                            <div className='col-lg-4' style={{ marginLeft: '15px' }}>
                                <div>
                                    <span>Lớp  <span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div>
                                    <Field
                                    component='select'
                                        style={{ width: '300px' }}
                                        type="text"
                                        id="class"
                                        name="class_id"
                                        placeholder='Lớp '
                                        onChange={(e) => {
                                            const selectedValue = e.target.value;
                                            setPhylumId(selectedValue); 
                                          }}
                                        value={values.class_id}
                                    >
                                         <option value="" style={{display: 'none'}}></option>
                                         {listClass.length > 0 && listClass.map(item => (
                                            <option value={item.value}>{item.label}</option>
                                         ))}
                                    </Field>

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
                                    component='select'
                                        style={{ width: '300px' }}
                                        type="text"
                                        id="order"
                                        name="order_id"
                                        placeholder='Bộ '
                                        onChange={(e) => {
                                            const selectedValue = e.target.value;
                                            setPhylumId(selectedValue); 
                                          }}
                                          value={values.order_id}
                                    >
                                         <option value="" style={{display: 'none'}}></option>
                                         {listOrder.length > 0 && listOrder.map(item => (
                                            <option value={item.value}>{item.label}</option>
                                         ))}
                                    </Field>
                                </div>
                            </div>
                            <div className='col-lg-4' style={{ marginLeft: '15px' }}>
                                <div>
                                    <span>Họ <span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div>
                                    <Field
                                    component='select'
                                        style={{
                                            width: '300px'
                                        }}
                                        type="text"
                                        id="family"
                                        name="family_id"
                                        placeholder='Họ'
                                        onChange={(e) => {
                                            const selectedValue = e.target.value;
                                            setPhylumId(selectedValue); 
                                          }}
                                          value={values.family_id}
                                    >
                                         <option value="" style={{display: 'none'}}></option>
                                        {listFamily.length > 0 && listFamily.map(item => (
                                            <option value={item.value}>{item.label}</option>
                                            ))}
                                    </Field>
                                </div>
                            </div>
                            <div className='col-lg-4' style={{ marginLeft: '15px' }}>
                                <div>
                                    <span>Chi  <span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div>
                                    <Field
                                    component='select'
                                        style={{ width: '300px' }}
                                        type="text"
                                        id="genus"
                                        name="genus_id"
                                        placeholder='Chi '
                                        onChange={(e) => {
                                            const selectedValue = e.target.value;
                                            setPhylumId(selectedValue); 
                                          }}
                                          value={values.genus_id}
                                    >
                                         <option value="" style={{display: 'none'}}></option>
                                        {listGenus.length > 0 && listGenus.map(item => (
                                            <option value={item.value}>{item.label}</option>
                                            ))}
                                    </Field>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button type="submit">Thêm mới</button>
                </Form>
)}
            </Formik >
        </>
    )
}

export default Add