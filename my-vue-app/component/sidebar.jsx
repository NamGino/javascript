import { useState } from 'react'
import { useEffect } from 'react'
import { useFilter } from './filter';
export function Sidebar(){

    const [menu, setMenuVisible] = useState(false);
    const [dataOfProvince, setdataOfProvince] = useState([]);
    const [dataOfEcosystem,setdataOfEcosystem] = useState([]);
    const [menuOfProvince, setMenuPRrVisible] = useState(false);
    const [menuOfEcosystem, setMenuESrVisible] = useState(false);
    const { 
        selectEcosystem,
        setSelectEcosystem,
        selectProvinces,
        setSelectProvinces } = useFilter();
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('https://wlp.howizbiz.com/api/provinces');
              const dataOfProvince = await response.json();
              setdataOfProvince(dataOfProvince);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('http://wlp.howizbiz.com/api/hesinhthais');
              const dataOfEcosystem = await response.json();
              setdataOfEcosystem(dataOfEcosystem);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };

          fetchData();
    }, [])

    const handleListClick = (index) => {
    setActiveLists((prevActiveLists) => ({
        ...prevActiveLists,
        [index]: !prevActiveLists[index],
        }));
    };

    const toggleMenuLDH = () => {
        setMenuVisible(!menu);
    };

    const toggleMenuPR = () => {
        setMenuPRrVisible(!menuOfProvince);
    }

    const toggleMenuES = () => {
        setMenuESrVisible(!menuOfEcosystem);
    }
    return(
        <>
        <div className="Sidebar col-lg-3 ps-2 pt-2 pb-2 pe-2">
                        <div>
                            <div className="type d-flex align-items-center w-100">
                                <span className="type_title d-flex align-items-center">LOẠI<span
                                    className="ms-2 material-symbols-outlined">help</span></span>
                            </div>
                            <div className="break_line"></div>
                            <div className="mt-3">
                                <div className="d-inline-flex flex-column w-100">
                                    <div className="w-100 d-flex align-items-center mb-2 option_type "><input className="me-2 option_type"
                                        type="radio" name="gender" id="option1" /><label htmlFor="option1"
                                            className="w-100 option_type ">Loài</label>
                                    </div>
                                    <div className="w-100 d-flex align-items-center mb-4 option_type "><input className="me-2 option_type"
                                        type="radio" name="gender" id="option2" /><label htmlFor="option2" className="w-100 option_type ">Văn
                                            bản tài
                                            liệu</label></div>
                                </div>
                            </div>
                            <div className="type d-flex align-items-center w-100">
                                <span className="type_title d-flex align-items-center">BỘ LỌC<span
                                    className="ms-2 material-symbols-outlined">help</span></span>
                            </div>
                            <div className="break_line"></div>
                            <div className="Sidebar_items d-flex align-items-center"><span
                                className="material-symbols-outlined">arrow_right</span> <b>Phân loại học</b></div>
                            <div className="Sidebar_items d-flex align-items-center"><span
                                className="material-symbols-outlined">arrow_right</span> <b>Hiện trạng loài</b></div>
                            <div className={`d-flex align-items-center ${menuOfProvince ? 'Sidebar_items_click' : 'Sidebar_items'}`} onClick={toggleMenuPR}><span
                                className="material-symbols-outlined">arrow_right</span> <b>Địa giới hành chính</b></div>
                            {menuOfProvince && (
                                <div className=" d-flex align-items-center">
                                    <div className="w-100">
                                        {dataOfProvince.map((item) => (
                                            <div className="Sidebar_items d-flex align-items-center mt-2">
                                                <input type="checkbox" id={item.id} className="ms-2 check_option" />
                                                <label htmlFor={item.id} className="w-100 ms-2 check_option"><b>{item.name}</b> </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className={`d-flex align-items-center ${menuOfEcosystem ? 'Sidebar_items_click' : 'Sidebar_items'}`} onClick={toggleMenuES}><span
                                className="material-symbols-outlined">arrow_right</span><b>Hệ sinh thái</b></div>
                            {menuOfEcosystem && (
                                                                <div className=" d-flex align-items-center">
                                                                <div className="w-100">
                                                                    {dataOfEcosystem.map((item) => (
                                                                        <div className="Sidebar_items d-flex align-items-center mt-2">
                                                                            <input type="checkbox" id={item.id}  className="ms-2 check_option" />
                                                                            <label htmlFor={item.id} className="w-100 ms-2 check_option"><b>{item.ten}</b> </label>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                            )}
                            <div className="Sidebar_items d-flex align-items-center"><span
                                className="material-symbols-outlined">arrow_right</span> <b>Giá trị loài</b></div>
                            <div className="Sidebar_items d-flex align-items-center"><span
                                className="material-symbols-outlined">arrow_right</span> <b>Sách đỏ</b></div>
                            <div className="Sidebar_items d-flex align-items-center"><span
                                className="material-symbols-outlined">arrow_right</span> <b>IUCN</b></div>
                            <div className="Sidebar_items d-flex align-items-center"><span
                                className="material-symbols-outlined">arrow_right</span> <b>NGhị định & Cites</b></div>
                            <div className="Sidebar_items d-flex align-items-center"><span
                                className="material-symbols-outlined">arrow_right</span> <b>Phụ lục Cites</b></div>
                            <div className="Sidebar_items d-flex align-items-center"><span
                                className="material-symbols-outlined">arrow_right</span> <b>Chế độ quản lý</b></div>
                            <div className={`d-flex align-items-center ${menu ? 'Sidebar_items_click' : 'Sidebar_items'}`} onClick={toggleMenuLDH}><span
                                className="material-symbols-outlined">arrow_right</span> <b>Loại đặc hữu</b></div>
                            {menu && (
                                <div className=" mt-1 d-flex align-items-center">
                                    <div className="w-100">
                                        <div className="Sidebar_items d-flex align-items-center">
                                            <input type="checkbox" id="checkbox1" className="ms-2 check_option" />
                                            <label htmlFor="checkbox1" className="w-100 ms-2 check_option"><b>Loài đặc hữu</b> </label>
                                        </div>
                                        <div className="Sidebar_items d-flex align-items-center mt-2">
                                            <input type="checkbox" id="checkbox2" className="ms-2 check_option" />
                                            <label htmlFor="checkbox2" className="w-100 ms-2 check_option"><b>không đặc hữu</b> </label>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
        </>
    )
}