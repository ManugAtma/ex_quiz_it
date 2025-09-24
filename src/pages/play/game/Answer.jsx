import { Col, Stack } from "react-bootstrap";
import decodeHTML from "../util/decodeHTML";
import AnswerIcon from "./AnswerIcon";

function Answer({ answer, i, clicked, setClicked, questionNum }) {

    let borders = addBorders(i);

    let clickable = "clickable";
    let bgColor = "bg-primary";
    if (clicked) {
        clickable = "";
        if (answer.correct) bgColor = "correct-answer"
        else if (answer.selected) bgColor = "incorrect-answer";
    }

    function addBorders(i) {
        switch (i) {
            case 0:
                return "border-bottom border-end";
            case 1:
                return "border-bottom";
            case 2:
                return "border-end";
            default:
                return "";
        }
    }

    function handleClick(answer, i) {
        if (!clicked) {
            answer.selected = true;
            setClicked(true);
        }
    }


    return (
        <Col xs={6}
            key={i}
            className={`${borders} ${bgColor} ${clickable} d-flex align-items-center justify-content-center`}
            onClick={() => handleClick(answer, i)}
            style={{ minHeight: 6 + 'em' }}
        >
            <Stack className="h-100 justify-content-between">
                <div className="answer-top-bottom">

                    {
                        clicked
                            ? <AnswerIcon
                                selected={answer.selected}
                                correct={answer.correct}
                                questionNum={questionNum}
                            />
                            : ""
                    }
                </div>
                <div> {decodeHTML(answer.text)}</div>
                <div className="answer-top-bottom"></div>
            </Stack>
        </Col>
    );
}

export default Answer;