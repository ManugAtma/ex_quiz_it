import { useReducer, useContext, createContext, useRef } from 'react';
import { GameCardWrapper } from './GameCardWrapper';
import PostGameScreen from '../post-game/PostGameScreen';
import useFetch from '../../../util/useFetch';
import { SettingsContext } from '../../../App';
import buildQuery from '../util/buildQuery';
import LoadingHandler from '../../../components/LoadingHandler';
import test from './testObject';
import prepareStats from '../util/prepareStats';

const StatsContext = createContext();

function Game() {

    const stats = useRef("");

    const initialState = {
        gameId: 0,
        gameFinished: false,
    };

    function gameReducer(state, action) {
        switch (action.type) {
            case "FINISH":
                return { ...state, gameFinished: true };
            case "NEW_GAME":
                return { gameId: state.gameId + 1, gameFinished: false };
            default:
                return state;
        }
    }

    const [gameState, dispatch] = useReducer(gameReducer, initialState);

    const [settings, token, tokenError] = useContext(SettingsContext);

    const query = buildQuery(settings.current, token);

    // fetch questions

    // const [data, error, setData] = useFetch(query, [gameState.gameId]);
    // if (data && !stats.current) stats.current = prepareStats(data);

    const data = test;
    const error = "";
    const setData = () => { };
    if (data && !stats.current) stats.current = prepareStats(test);

    return (
        <StatsContext.Provider value={[stats]}>
            <LoadingHandler data={token} error={tokenError}>
                <LoadingHandler data={data} error={error}>
                    {
                        gameState.gameFinished
                            ? <PostGameScreen setStats={setData} dispatch={dispatch} />
                            : <GameCardWrapper data={data} dispatch={dispatch} />
                    }
                </LoadingHandler>
            </LoadingHandler>
        </StatsContext.Provider>
    );
}

export { Game, StatsContext };