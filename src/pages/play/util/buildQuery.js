const baseURL = "https://opentdb.com/api.php?";
const type = "&type=multiple";


/**
 * 
 * Builds the full API URL for fetching trivia questions based on settings and token data.
 *
 * @param {{category:number, difficulty:string, amount: number}} - An object with these props
 * - category: defining the category of the questions to be fetched.
 * - difficulty: difficulty level of the questions: easy, medium, hard, mixed.
 * @param {{token:string}} - An Object with a session token as prop.

 * @returns {string} - The full URL. 
 * 
 */

function buildQuery(settings, tokenData) {

    let category = settings.category ? `&category=${settings.category}` : "";
    let difficulty = settings.difficulty ? `&difficulty=${settings.difficulty}` : "";
    let token = `&token=${tokenData.token}`;

    return `${baseURL}amount=${settings.amount}${category}${difficulty}${type}${token}`;
}

export default buildQuery;