import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import { StatsContext } from './Game';
import Answer from './Answer';


function Answers({ clicked, setClicked, questionNum }) {

    const [stats] = useContext(StatsContext);

    return (
        <Row className="g-0 text-center">
            {
                stats.current.questions[questionNum].answers.map(function (answer, i) {
                    return (
                        <Answer
                            answer={answer}
                            i={i}
                            clicked={clicked}
                            setClicked={setClicked}
                            key={i}
                            questionNum={questionNum}
                        />
                    );
                })
            }
        </Row>
    );
}

export default Answers;