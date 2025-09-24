import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { GameContext } from './GameCardWrapper';
import useTimedAnimation from '../util/useTimedAnimation';
import { StatsContext } from './Game';
import FaSquaredHourglass from '../components/FaSquaredHourglass';


function AnswerIcon({ correct, selected, questionNum }) {

    const [stats] = useContext(StatsContext);
    const [animation] = useTimedAnimation(2500);

    if (correct && !selected && stats.current.questions[questionNum].timeout) {
        return (
            // <FontAwesomeIcon
            //     icon={faHourglass}
            //     size="x"
            //     className='text-white'
            //     beat={animation}
            // />
            <FaSquaredHourglass
                size="2x"
                colorGlass={"light"}
                colorSquare={"danger"}
                // timeout={3000}
                classProps="mt-1 me-1"
            />
        );
    }
}

export default AnswerIcon;