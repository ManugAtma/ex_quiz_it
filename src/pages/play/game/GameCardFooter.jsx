
function GameCardFooter({ difficulty, children }) {

    let capitalized = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

    return (
        <div className="d-flex w-100">
            <div className="d-flex align-items-center">{capitalized}</div>
            <div className="flex-grow-1 d-flex justify-content-end ">
                {children}
            </div>
        </div>
    );

}

export default GameCardFooter;