import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineDelete } from 'react-icons/md';
function DeleteOfAnimal({itemDelete}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const headers = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
        const Checkdelete = async () => {
            try{
                await axios.delete(`https://wlp.howizbiz.com/api/species/${itemDelete.id}`,headers).then(response =>{
                    console.log(response);    
                if (response.status === 200) {
                        handleClose();
                }
                });
            }catch{
                console.log("error");
        }
    }; 
    return(
        <>
            <MdOutlineDelete className='text-danger' style={{ cursor: 'pointer' }} onClick={handleShow}/>
            
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton style={{ backgroundColor: 'red' }}>
                    <Modal.Title className='text-white'>Bạn có chác chắn không !</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-muted'> Bạn có chắc muốn xóa <b className='text-danger'>{itemDelete.ten}</b>? Điều này hoàn toàn không thế hoàn tác</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Không
                    </Button>
                    <Button variant="danger" onClick={Checkdelete}>Áp dụng</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteOfAnimal