import { Card } from 'react-bootstrap';
import Answers from "./Answers";
import decodeHTML from '../util/decodeHTML';
import { useContext } from 'react';
import { StatsContext } from './Game';

function GameCard({ showCategory, questionText, children, answers, clicked, setClicked, questionNum }) {

    const [stats] = useContext(StatsContext);

    return (
        <Card className='border border-2 border-primary'>
            {
                showCategory
                    ? <Card.Header>
                        {decodeHTML(stats.current.questions[questionNum].category)}
                    </Card.Header>
                    : ""
            }
            <Card.Body className="p-0">
                <Card.Text className="p-3">
                    {
                        decodeHTML(stats.current.questions[questionNum].question)
                    }
                </Card.Text>
            </Card.Body>
            <Answers answers={answers} clicked={clicked} setClicked={setClicked} questionNum={questionNum} />
            {children}
        </Card>
    );
}

export default GameCard;