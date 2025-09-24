import { Container } from "react-bootstrap";
import SummaryDetails from "./SummaryDetails";
import SummaryIcon from "./SummaryIcon";
import { StatsContext } from "../game/Game";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';


function SummaryResult({ i }) {

    const [stats] = useContext(StatsContext);

    let answer;
    for (let item of stats.current.questions[i].answers) {
        if (item.selected) answer = item.text;
    }
    if (!answer) answer = "Timeout";

    return (
        <Container fluid className="px-0">
            <div className="d-flex align-items-center w-100">
                <div className="d-flex align-items-center">
                    <SummaryIcon i={i} />
                    <div className="ms-2 d-flex align-items-center">
                        <span>{answer}</span>
                    </div>
                </div>

                <div className="ms-auto">
                    <SummaryDetails questionNum={i} currentStat={stats.current.questions[i]} />
                </div>
            </div>
        </Container>
    );
}

export default SummaryResult;