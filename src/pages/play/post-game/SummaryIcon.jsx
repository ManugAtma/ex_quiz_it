import { useContext } from "react";
import { StatsContext } from "../game/Game";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquareXmark, faHourglass } from '@fortawesome/free-solid-svg-icons';
import FaSquaredHourglass from "../components/FaSquaredHourglass";

function SummaryIcon({ i }) {

    const [stats] = useContext(StatsContext);
    let icon, color;
    let size = "3x";
    if (stats.current.questions[i].correctlyAnswered) {
        icon = faSquareCheck;
        color = "success";
    } else {
        color = "danger";
        if (stats.current.questions[i].timeout) {
            return (
                <FaSquaredHourglass
                    size="3x"
                    colorGlass={"light"}
                    colorSquare={"danger"}
                />
            );
        } else {
            icon = faSquareXmark;
        }
    }

    return (
        <FontAwesomeIcon
            icon={icon}
            size={size}
            className={`text-${color} fa-fw fa-icon-no-margin`}
        />
    );
}

export default SummaryIcon;