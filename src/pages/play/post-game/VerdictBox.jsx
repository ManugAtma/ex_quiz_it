import { Card, Button, Container } from "react-bootstrap";
import Verdict from "./Verdict";
import { NavLink } from "react-router-dom";
import { StatsContext } from "../game/Game";
import { useContext } from "react";
import calcVerdict from "../util/calcVerdict";

function VerdictBox({ dispatch, setData }) {

    const [stats] = useContext(StatsContext);

    function startNewGame() {
        dispatch({ type: "NEW_GAME" });
        setData(null);
        stats.current = "";
    }

    let [verdict, icon, color] = calcVerdict(stats.current.questions.length, stats.current.correctAnswers);


    return (
        <Container className="mt-4">
            <Card className={`border border-${color} border-3`}>
                <Card.Body>
                    <Verdict
                        verdict={verdict}
                        icon={icon}
                        color={color} 
                    />
                    <Button className="me-2" onClick={startNewGame}>new game</Button>
                    <Button as={NavLink} to="/settings">settings</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default VerdictBox;