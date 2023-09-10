import { Sidebar } from './sidebar'
import { Products } from './product'
import { FilterProvider } from './filter'
function Main() {
    return (
        <>
            <main>
                <div className="fisrt_main d-flex align-items-center">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-9">
                        <div className="d-flex">
                            <div className="net text-white d-flex align-items-center ps-2 pe-2">
                                <span className="material-symbols-outlined me-2">apps</span>
                                <span className="text">LƯỚI</span>
                            </div>
                            <div className="board text-white d-flex align-items-center ps-2 pe-2">
                                <span className="material-symbols-outlined me-2">menu</span>
                                <span className="text">BẢNG</span>
                            </div>
                            <div className="board text-white d-flex align-items-center ps-2 pe-2">
                                <span className="material-symbols-outlined me-2">map</span>
                                <span className="text">BẢN ĐỒ</span>
                            </div>
                            <div className="board text-white d-flex align-items-center ps-2 pe-2">
                                <span className="material-symbols-outlined me-2">bar_chart</span>
                                <span className="text">THỐNG KÊ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second_main d-flex">
                <FilterProvider>
                    <Sidebar></Sidebar>
                    <Products></Products>
                </FilterProvider>
                </div>
                <div className="third_main">
                    <div className="third_main_content p-3">
                        <p className="">TRANG LIÊN QUAN</p>
                        <div className="related d-flex">
                            <div className="related_items d-flex justify-content-center align-items-center">
                                <a href="#" className="text-decoration-none">
                                    <img src="/rd1.jpg" className="d-block" alt="" />
                                </a>
                            </div>
                            <div className="related_items d-flex justify-content-center align-items-center">
                                <a href="#" className="text-decoration-none">
                                    <img src="/rd2.png" className="d-block" alt="" />
                                </a>
                            </div>
                            <div className="related_items d-flex justify-content-center align-items-center">
                                <a href="#" className="text-decoration-none">
                                    <img src="/rd3.png" className="d-block" alt="" />
                                </a>
                            </div>
                            <div className="related_items d-flex justify-content-center align-items-center">
                                <a href="#" className="text-decoration-none">
                                    <img src="/rd4.png" className="d-block" alt="" />
                                </a>
                            </div>
                            <div className="related_items d-flex justify-content-center align-items-center">
                                <a href="#" className="text-decoration-none">
                                    <img src="/rd5.png" className="d-block" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="related d-flex">
                            <div className="related_items d-flex justify-content-center align-items-center">
                                <a href="#" className="text-decoration-none">
                                    <img src="/rd2.png" className="d-block" alt="" />
                                </a>
                            </div>
                            <div className="related_items d-flex justify-content-center align-items-center">
                                <a href="#" className="text-decoration-none">
                                    <img src="/rd6.png" className="d-block" alt="" />
                                </a>
                            </div>
                            <div className="related_items d-flex justify-content-center align-items-center">
                                <a href="#" className="text-decoration-none">
                                    <img src="/rd7.png" className="d-block" alt="" />
                                </a>
                            </div>
                            <div className="related_items d-flex justify-content-center align-items-center">
                                <a href="#" className="text-decoration-none">
                                    <img src="/rd8.png" className="d-block" alt="" />
                                </a>
                            </div>
                            <div className="related_items d-flex justify-content-center align-items-center">
                                <a href="#" className="text-decoration-none">
                                    <img src="/rd9.png" className="d-block" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="related d-flex">
                            <div className="related_items_last col-lg-3 d-flex justify-content-center align-items-center">
                                <a href="#" className="text-decoration-none">
                                    <img src="/rd10.png" className="d-block" alt="" />
                                </a>
                            </div>
                            <div className="related_items_last col-lg-3 d-flex justify-content-center align-items-center">
                                <a href="#" className="text-decoration-none">
                                    <img src="/rd7.png" className="d-block" alt="" />
                                </a>
                            </div>
                            <div className="related_items_last col-lg-3 d-flex justify-content-center align-items-center">
                                <a href="#" className="text-decoration-none">
                                    <img src="/rd11.png" className="d-block" alt="" />
                                </a>
                            </div>
                            <div className="related_items_last col-lg-3 d-flex justify-content-center align-items-center">
                                <a href="#" className="text-decoration-none">
                                    <img src="/rd12.png" className="d-block" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main