import { useContext, useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

import { SettingsContext } from "@/App";
import useFetch from '@/util/useFetch';
import LoadingHandler from '@/components/LoadingHandler';

import Categories from './Categories';
import SavedAlert from './SavedAlert';


/**
 * @component
 * Top level component of the settings page of the website.
 * 
 * @param {Object} data a promise object that may resolves to an object containing data fetched from the api
 * @param {Object} error a promise object that may resolves to an object containing the error returned by the server
 * @returns {JSX.Element} A form for the user to change the game settings: amount of questions, category, difficulty. Or a loading animation if data is not fetched yet.
 */

function Settings({ data, error }) {

    //const categories = data?.trivia_categories;

    const categories = [{ "id": 9, "name": "General Knowledge" }, { "id": 10, "name": "Entertainment: Books" }, { "id": 11, "name": "Entertainment: Film" }, { "id": 12, "name": "Entertainment: Music" }, { "id": 13, "name": "Entertainment: Musicals & Theatres" }, { "id": 14, "name": "Entertainment: Television" }, { "id": 15, "name": "Entertainment: Video Games" }, { "id": 16, "name": "Entertainment: Board Games" }, { "id": 17, "name": "Science & Nature" }, { "id": 18, "name": "Science: Computers" }, { "id": 19, "name": "Science: Mathematics" }, { "id": 20, "name": "Mythology" }, { "id": 21, "name": "Sports" }, { "id": 22, "name": "Geography" }, { "id": 23, "name": "History" }, { "id": 24, "name": "Politics" }, { "id": 25, "name": "Art" }, { "id": 26, "name": "Celebrities" }, { "id": 27, "name": "Animals" }, { "id": 28, "name": "Vehicles" }, { "id": 29, "name": "Entertainment: Comics" }, { "id": 30, "name": "Science: Gadgets" }, { "id": 31, "name": "Entertainment: Japanese Anime & Manga" }, { "id": 32, "name": "Entertainment: Cartoon & Animations" }];

    const [settings] = useContext(SettingsContext);

    const [amount, setAmount] = useState(settings.current.amount);
    const [category, setCategory] = useState(settings.current.category);
    const [difficulty, setDifficulty] = useState(settings.current.difficulty);

    const [showAlert, setShowAlert] = useState(false);

    function saveSettings(e) {
        e.preventDefault();
        settings.current = {
            amount,
            category,
            difficulty
        };
        setShowAlert(true);
    }

    return (
        <LoadingHandler data={data} error={error}>
            <Container className='mt-2'>
                <h2 className='borsok-font'>Settings</h2>
                <Form onSubmit={saveSettings}>
                    <Form.Group className="mb-3 mt-4">
                        <Form.Label>Amount of Questions per Game</Form.Label>
                        <Form.Select value={amount} onChange={e => setAmount(e.target.value)}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select value={category} onChange={e => setCategory(e.target.value)}>
                            <option value="" key="mix">Mixed</option>
                            <Categories categories={categories} />
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Difficulty</Form.Label>
                        <Form.Select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                            <option value="">Mixed</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Save
                    </Button>

                    {
                        showAlert
                            ? <SavedAlert setShowAlert={setShowAlert} delay={2000} />
                            : ""
                    }

                </Form>
            </Container>
        </LoadingHandler>
    )
}

export default Settings;