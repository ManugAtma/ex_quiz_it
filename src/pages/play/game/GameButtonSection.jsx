import { Container, Button } from "react-bootstrap";

function GameButtonSection({ questionNum, numOfQuestions, dispatch, nextQuestion, clicked }) {
    return (
        <Container
            id="next-section"
            className=" text-center d-flex justify-content-center align-items-start p-1"
            style={{ minHeight: '4em' }}
        >
            {
                function () {
                    if (clicked && questionNum < numOfQuestions - 1) {
                        return <Button onClick={nextQuestion} variant="success">next</Button>;
                    }

                    if (clicked && !(questionNum < numOfQuestions - 1)) {
                        return <Button onClick={() => dispatch({ type: "FINISH" })} variant="primary">finish</Button>;
                    }

                    return "";
                }()
            }
        </Container>
    );
}

export default GameButtonSection;