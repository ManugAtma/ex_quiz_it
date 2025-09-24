import { StatsContext } from "../game/Game";
import { useContext, useRef } from "react";
import VerdictBox from "./VerdictBox";
import SummaryBox from "./SummaryBox";
import calcCorrectAnswers from "../util/calcCorrectAnswers";

function PostGameScreen({ setData, dispatch }) {

    const [stats] = useContext(StatsContext);
    const correctAnswers = useRef(calcCorrectAnswers(stats.current.questions));
    stats.current.correctAnswers = correctAnswers.current;

    return (
        <>
            <VerdictBox dispatch={dispatch} setData={setData} />
            <SummaryBox />
        </>
    )
}

export default PostGameScreen;