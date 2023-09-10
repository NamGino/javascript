import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiAccountCircleFill } from 'react-icons/ri';
import { GoSearch } from 'react-icons/go';
import { BiPlus } from 'react-icons/bi';
import { FormText } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import TableUser from './TableUser';
function MainUser() {
    return (
        <main className='main_user w-100' style={{ padding: '10px 10px 0px 20px' }}>
            <TableUser></TableUser>
        </main>
    )
}
export default MainUser