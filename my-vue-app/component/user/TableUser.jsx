import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Pagination } from 'antd';
import { HiPencil } from 'react-icons/hi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiAccountCircleFill } from 'react-icons/ri';
import { GoSearch } from 'react-icons/go';
import './user.css'
import { Link } from 'react-router-dom';
import DeleteOfAnimal from "./deleteAnimal";
function TableUser() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerpage = 10;
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://wlp.howizbiz.com/api/species?paginate=true&page=${currentPage}&perpage=${itemPerpage}&with=roles,createdBy&search=&inactive=-1`);
        const data = await response.json();
        setData(data.list);
        setTotal(data.pagination.total)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },);
  const onPageChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <>

      <div className='d-flex pb-4'>
        <RiAccountCircleFill style={{ width: '35px', height: '35px' }} className='me-2' />
        <div className='title_user mt-1'> Loài nguy cấp quý hiếm</div>
      </div>
      <div className='search_form row pb-3 '  >
        <div className=' input_group ' style={{ maxWidth: '800px', height: '30px' }}>
          <GoSearch className=' icon_search' />
          <input type="text" placeholder='Tìm kiếm theo tên hoặc số điện thoại' className='ps-4 form-control' />
        </div>
        <button className='btn-danger rounded-1' style={{ height: '37px', width: '120px' }}>
          <span style={{ fontSize: '15px' }}> <Link className='text-decoration-none' to={'/User/Add'}>Thêm mới</Link> </span>
        </button>
      </div>

      <div>
        <table >
          <Table responsive="sm">
            <thead>
              <tr>
                <th className='col'>Tên</th>
                <th className='col'>Tên khoa học</th>
                <th className='col'>Giới</th>
                <th className='col'>Ngành</th>
                <th className='col'>Lớp</th>
                <th className='col'>Bộ</th>
                <th className='col'>Họ</th>
                <th className='col'>Chi</th>
                <th className='col'>Hành động</th>
              </tr>
            </thead>
            <tbody >
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.ten}</td>
                  <td>{item.ten_khoa_hoc}</td>
                  <td>{item.kingdom.ten}</td>
                  <td>{item.phylumn.ten}</td>
                  <td>{item.class.ten}</td>
                  <td>{item.order.ten_khoa_hoc}</td>
                  <td>{item.family.ten_khoa_hoc}</td>
                  <td>{item.genus.ten_khoa_hoc}</td>
                  <td>
                    <div className='d-flex'>
                      <HiPencil className='text-danger mx-2' style={{ cursor: 'pointer' }} />
                      <DeleteOfAnimal itemDelete={item}/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className='d-flex justify-content-center'>
            <Pagination
              current={currentPage}
              onChange={onPageChange}
              pageSize={itemPerpage}
              total={total}
            />
          </div>

        </table>
      </div>
    </>

  )
}
export default TableUser