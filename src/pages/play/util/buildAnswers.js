/**
 * 
 * Prepares answers for display by shuffling them randomly 
 * and merging one correct and three incorrect answers into a single array. 
 *
 * @param {{correct_answer: string, incorrect_answers: Array<String>}} result - An object of the specified type.  
 * 
 * @returns {Array<Object>} - An Array containg object with the props:
 * - text (string): The actual answer to a trivia question.
 * - correct (boolean): Indicates if the answer is correct or incorrect.
 * 
 */
function buildAnswers(result) {
    let incorrectAns = result.incorrect_answers;
    let answers = [
        { text: result.correct_answer, correct: true },
        { text: incorrectAns[0], correct: false },
        { text: incorrectAns[1], correct: false },
        { text: incorrectAns[2], correct: false },
    ]
    let random = Math.floor(Math.random() * answers.length);
    let tmp = answers[random];
    answers[random] = answers[0];
    answers[0] = tmp;

    return answers;
}

export default buildAnswers;