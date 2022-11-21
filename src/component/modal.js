import Modal from 'react-bootstrap/Modal';
import Button from './button';
import appStore from '../images/img3.JPG'
import styled from 'styled-components';

const OrganizationDiv = styled.div`
background-color:#E0FFFF;
`;

const WorkerDiv = styled.div`
background-color:#F0FFFF;
`;

export default function PageModal(props) {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='rounded-top' />
            <Modal.Body>
                <h3 className='text-center fw-bolder'>Start using Asiiko for your</h3>
                <h3 className='text-center fw-bolder'>team today!</h3>
                <div className='d-flex justify-content-between container p-5'>
                    <div className='mx-4 w-50'>
                        <h5 className='text-light text-center bg-dark p-4 mb-0 rounded-top'>For Organizations</h5>
                        <OrganizationDiv className='d-flex justify-content-center py-5'>
                            <Button
                                text="LOG IN"
                                buttonClass="btn-primary btn-sm"
                                textColor="light"
                            />
                            <Button
                                text="SIGN UP"
                                buttonClass="btn-light btn-sm"
                                textColor="dark"
                            />
                        </OrganizationDiv>
                    </div>
                    <div className='rounded mx-4 w-50'>
                        <h5 className='text-light text-center bg-success p-4 mb-0 rounded-top'>For Workers</h5>
                        <WorkerDiv className='d-flex justify-content-center py-5'>
                            <img src={appStore} alt="appstore" width="200px" />
                        </WorkerDiv>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}