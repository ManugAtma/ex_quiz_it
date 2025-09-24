import { StatsContext } from "../game/Game";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTimedAnimation from "../util/useTimedAnimation";


function Verdict({ verdict, icon, color }) {

    const [stats] = useContext(StatsContext);
    const [animation] = useTimedAnimation(2000);


    return (
        <>
            <div className=" d-flex justify-content">
                <FontAwesomeIcon
                    icon={icon} size="2x"
                    beat={animation}
                    className={`text-${color} me-2 fa-icon-no-margin`}
                />
                <h3>{verdict}</h3>
            </div>

            <p>You got {stats.current.correctAnswers} of {stats.current.questions.length} right.</p>
        </>
    );
}

export default Verdict;