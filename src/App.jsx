import { createContext, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Play from './pages/play/Play';
import Settings from "./pages/settings/Settings";
import About from './pages/about/About';
import useFetch from "./util/useFetch";


const SettingsContext = createContext();

// to fetch available categories from the API
const settingsQuery = "https://opentdb.com/api_category.php";

// to fetch a session token from the API
const tokenQuery = "https://opentdb.com/api_token.php?command=request";

const githubURL = "https://github.com/";

/**
 * @component
 * Top level component of the website.
 * Fetches available categories from the API to pass it to Settings.
 * Fetches a session token from the API to pass it to Play. 
 * 
 * @returns {JSX.Element} The React element tree containing the Settings context provider 
 * and the router with all the pages of the app surrounded by the layout.
 */

function App() {

    const settings = useRef({
        amount: 10,
        category: "",
        difficulty: "",
    });

    // const [data, settingsError] = useFetch(settingsQuery);
    // const [token, tokenError] = useFetch(tokenQuery);
    // console.log(token);

    const data = "x";
    const settingsError = "";

    const token = "y";
    const tokenError = "";

    return (
        <SettingsContext.Provider value={[settings, token, tokenError]}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Play />} />
                        <Route
                            path="settings"
                            element={<Settings data={data} error={settingsError} />}
                        />
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </SettingsContext.Provider>
    );
}

export { App, SettingsContext, githubURL };
