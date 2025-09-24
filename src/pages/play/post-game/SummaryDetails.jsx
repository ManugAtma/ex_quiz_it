import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
import Answers from "../game/Answers";
import decodeHTML from '../util/decodeHTML';
import GameCardFooter from '../game/GameCardFooter';



function SummaryDetails({ currentStat, questionNum }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className={"fs-6"}>{decodeHTML(currentStat.category)}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    <Container className={"p-3 fs-5"}>
                        {decodeHTML(currentStat.question)}
                    </Container>
                    <Answers
                        answers={currentStat.answers}
                        clicked={true}
                        questionNum={questionNum}
                    />
                    <div style={{ minHeight: '2.5em' }}></div>
                </Modal.Body>
                <Modal.Footer className="justify-content-start">
                    <GameCardFooter difficulty={currentStat.difficulty}>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </GameCardFooter>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SummaryDetails;