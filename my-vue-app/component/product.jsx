import { useState } from 'react'
import { useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useFilter } from './filter';
export function Products() {
    const {filter,setFilter} = useFilter();
    const [dataOfProduct, setDataOfProduct] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://wlp.howizbiz.com/api/loaicongbo?paginate=true&page=1&perpage=18');
                const dataOfProduct = await response.json();
                setDataOfProduct(dataOfProduct.list);
                setTotal(dataOfProduct.pagination.total);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])
    //filter
    const filterProduct = dataOfProduct
    //page
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;
    const totalItems = 180;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = filterProduct.slice(startIndex, endIndex);

    const customArrowIcon = (direction) => {
        return direction === 'prev' ? (
            <i className="fa fa-arrow-left"></i>
        ) : (
            <i className="fa fa-arrow-right"></i>
        );
    };

    return (
        <>
            <div className="products col-lg-9">
                <div className="result ps-3 pt-2 pe-2">
                    <b>Kết quả {'(' + total + ')'}</b>
                </div>
                <div className="p-3">
                    <div className="row">
                        {displayedData.map((item,index) => (
                            <div key={index} className="products_items col-lg-4 p-3">
                                <div className="border_OfProduct">
                                    <div className="img_bag position-relative d-flex">
                                        {!item.attachments.path && (
                                            <div className="img_ofProduct position-absolute"
                                                style={{ backgroundImage: `url(${'http://wlp.howizbiz.com' + item.attachments[0].path})` }}>
                                            </div>
                                        )}
                                    </div>
                                    <div className="products_OfContent">
                                        <div className="classNameification ps-3 pt-2">
                                            {item.kingdom.ten + ' - ' + item.phylumn.ten}
                                        </div>
                                        <div className="name ps-3 pt-1 col-lg-10">
                                            <b>{item.ten}</b>
                                        </div>
                                        <div className="subtitle ps-3 pt-1">
                                            <i>{item.ten_khoa_hoc}</i>
                                        </div>
                                        <div className="p-3 d-flex align-items-center">
                                            <span className="material-symbols-outlined label_ofProduct">help</span>
                                            <span className="ms-2">Chưa xác định</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='d-flex justify-content-center'>
                            <ReactPaginate
                                previousLabel={customArrowIcon('prev')}
                                nextLabel={customArrowIcon('next')}
                                breakLabel="..."
                                pageCount={totalPages}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageChange}
                                containerClassName="pagination"
                                pageClassName={`page-item`}
                                pageLinkClassName={`page-link`}
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                activeClassName="active"
                            />
                        </div>

                    </div>
                    <div className="break_line"></div>
                    <div className="row">
                        <div className="result ps-3 pt-2 pe-2">
                            <b>Kết quả khác</b>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div className="products_OfContent_other">
                                <div className="classNameification ps-3 pt-2">
                                    Động vật - Ngành dây sống
                                </div>
                                <div className="name ps-3 pt-1 col-lg-10">
                                    <b>Niệc mỏ vằn2</b>
                                </div>
                                <div className="subtitle ps-3 pt-1">
                                    <i>Aceros undulatus</i>
                                </div>
                                <div className="p-3 d-flex align-items-center">
                                    <span className="material-symbols-outlined label_ofProduct">help</span>
                                    <span className="ms-2">Chưa xác định</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div className="products_OfContent_other">
                                <div className="classNameification ps-3 pt-2">
                                    Động vật - Ngành dây sống
                                </div>
                                <div className="name ps-3 pt-1 col-lg-10">
                                    <b>Niệc mỏ vằn2</b>
                                </div>
                                <div className="subtitle ps-3 pt-1">
                                    <i>Aceros undulatus</i>
                                </div>
                                <div className="p-3 d-flex align-items-center">
                                    <span className="material-symbols-outlined label_ofProduct">help</span>
                                    <span className="ms-2">Chưa xác định</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div className="products_OfContent_other">
                                <div className="classNameification ps-3 pt-2">
                                    Động vật - Ngành dây sống
                                </div>
                                <div className="name ps-3 pt-1 col-lg-10">
                                    <b>Niệc mỏ vằn2</b>
                                </div>
                                <div className="subtitle ps-3 pt-1">
                                    <i>Aceros undulatus</i>
                                </div>
                                <div className="p-3 d-flex align-items-center">
                                    <span className="material-symbols-outlined label_ofProduct">help</span>
                                    <span className="ms-2">Chưa xác định</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div className="products_OfContent_other">
                                <div className="classNameification ps-3 pt-2">
                                    Động vật - Ngành dây sống
                                </div>
                                <div className="name ps-3 pt-1 col-lg-10">
                                    <b>Niệc mỏ vằn2</b>
                                </div>
                                <div className="subtitle ps-3 pt-1">
                                    <i>Aceros undulatus</i>
                                </div>
                                <div className="p-3 d-flex align-items-center">
                                    <span className="material-symbols-outlined label_ofProduct">help</span>
                                    <span className="ms-2">Chưa xác định</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div className="products_OfContent_other">
                                <div className="classNameification ps-3 pt-2">
                                    Động vật - Ngành dây sống
                                </div>
                                <div className="name ps-3 pt-1 col-lg-10">
                                    <b>Niệc mỏ vằn2</b>
                                </div>
                                <div className="subtitle ps-3 pt-1">
                                    <i>Aceros undulatus</i>
                                </div>
                                <div className="p-3 d-flex align-items-center">
                                    <span className="material-symbols-outlined label_ofProduct">help</span>
                                    <span className="ms-2">Chưa xác định</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div className="products_OfContent_other">
                                <div className="classNameification ps-3 pt-2">
                                    Động vật - Ngành dây sống
                                </div>
                                <div className="name ps-3 pt-1 col-lg-10">
                                    <b>Niệc mỏ vằn2</b>
                                </div>
                                <div className="subtitle ps-3 pt-1">
                                    <i>Aceros undulatus</i>
                                </div>
                                <div className="p-3 d-flex align-items-center">
                                    <span className="material-symbols-outlined label_ofProduct">help</span>
                                    <span className="ms-2">Chưa xác định</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div className="products_OfContent_other">
                                <div className="classNameification ps-3 pt-2">
                                    Động vật - Ngành dây sống
                                </div>
                                <div className="name ps-3 pt-1 col-lg-10">
                                    <b>Niệc mỏ vằn2</b>
                                </div>
                                <div className="subtitle ps-3 pt-1">
                                    <i>Aceros undulatus</i>
                                </div>
                                <div className="p-3 d-flex align-items-center">
                                    <span className="material-symbols-outlined label_ofProduct">help</span>
                                    <span className="ms-2">Chưa xác định</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div className="products_OfContent_other">
                                <div className="classNameification ps-3 pt-2">
                                    Động vật - Ngành dây sống
                                </div>
                                <div className="name ps-3 pt-1 col-lg-10">
                                    <b>Niệc mỏ vằn2</b>
                                </div>
                                <div className="subtitle ps-3 pt-1">
                                    <i>Aceros undulatus</i>
                                </div>
                                <div className="p-3 d-flex align-items-center">
                                    <span className="material-symbols-outlined label_ofProduct">help</span>
                                    <span className="ms-2">Chưa xác định</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div className="products_OfContent_other">
                                <div className="classNameification ps-3 pt-2">
                                    Động vật - Ngành dây sống
                                </div>
                                <div className="name ps-3 pt-1 col-lg-10">
                                    <b>Niệc mỏ vằn2</b>
                                </div>
                                <div className="subtitle ps-3 pt-1">
                                    <i>Aceros undulatus</i>
                                </div>
                                <div className="p-3 d-flex align-items-center">
                                    <span className="material-symbols-outlined label_ofProduct">help</span>
                                    <span className="ms-2">Chưa xác định</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div className="products_OfContent_other">
                                <div className="classNameification ps-3 pt-2">
                                    Động vật - Ngành dây sống
                                </div>
                                <div className="name ps-3 pt-1 col-lg-10">
                                    <b>Niệc mỏ vằn2</b>
                                </div>
                                <div className="subtitle ps-3 pt-1">
                                    <i>Aceros undulatus</i>
                                </div>
                                <div className="p-3 d-flex align-items-center">
                                    <span className="material-symbols-outlined label_ofProduct">help</span>
                                    <span className="ms-2">Chưa xác định</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div className="products_OfContent_other">
                                <div className="classNameification ps-3 pt-2">
                                    Động vật - Ngành dây sống
                                </div>
                                <div className="name ps-3 pt-1 col-lg-10">
                                    <b>Niệc mỏ vằn2</b>
                                </div>
                                <div className="subtitle ps-3 pt-1">
                                    <i>Aceros undulatus</i>
                                </div>
                                <div className="p-3 d-flex align-items-center">
                                    <span className="material-symbols-outlined label_ofProduct">help</span>
                                    <span className="ms-2">Chưa xác định</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div className="products_OfContent_other">
                                <div className="classNameification ps-3 pt-2">
                                    Động vật - Ngành dây sống
                                </div>
                                <div className="name ps-3 pt-1 col-lg-10">
                                    <b>Niệc mỏ vằn2</b>
                                </div>
                                <div className="subtitle ps-3 pt-1">
                                    <i>Aceros undulatus</i>
                                </div>
                                <div className="p-3 d-flex align-items-center">
                                    <span className="material-symbols-outlined label_ofProduct">help</span>
                                    <span className="ms-2">Chưa xác định</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more text-center">
                        <span>Tải thêm</span>
                    </div>
                </div>
            </div>
        </>
    )
}