import { useContext, useEffect, useRef } from 'react';
import { ProgressBar, Container } from 'react-bootstrap';
import { StatsContext } from './Game';

function Timer({ timeout, delay, setClicked, clicked, remaining, setRemaining, questionNum }) {

    const [stats] = useContext(StatsContext);

    // (100 * delay) / timeout = delta
    // with delta being the amount subtracted from remaining every delay ms
    // and timeout being the total duration for the time to run out  
    function calcDelta() {
        return (100 * delay) / timeout;
    }

    const delta = useRef(calcDelta());

    useEffect(() => {
        if (clicked) return;
        let interval = setInterval(() => {
            if (remaining > 0) {
                setRemaining(prev => {
                    // values < 0 for the now prop of ProgressBar are ignored
                    // and the previously assigned value is taken.
                    // to prevent that check and set it to 0
                    if (prev - delta.current < 0) return 0
                    else return prev - delta.current;
                })
            } else {
                stats.current.questions[questionNum].timeout = true;
                setClicked(true);
            }
            clearInterval(interval);
        }, delay);
    }, [remaining]);

    const variant = (remaining > 50) ? "success" : ((remaining > 25) ? "warning" : "danger");

    return (
        <Container className={"p-3"}>
            <ProgressBar now={remaining} variant={variant} key={questionNum} />
        </Container>
    );
}

export default Timer;