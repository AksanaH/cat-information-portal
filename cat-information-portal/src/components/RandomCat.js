import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import catService from '../services/CatService';
import SpinnerLoading from './Spinner';
import ErrorMessage from './ErrorMessage';
import styled from "styled-components";

const RandomCat = () => {

    const [cat, setCat] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        updateCat();
    }, []);

    const onCatLoaded = (cat) => {
        setCat(cat);  // Always set the cat
        setLoading(false);
        setError(false);
    };


    const onError = () => {
        console.error("Error fetching cat!");
        setLoading(false)
        setError(true)

    };

    const updateCat = () => {
        setLoading(true)
        catService
            .getRandomCat()
            .then((cat) => {
                console.log("Cat loaded successfully:", cat);
                onCatLoaded(cat);
            })
            .catch((error) => {
                console.error("Fetching error:", error);
                onError();
            });
    };
    const { image, breed, temperament, wiki } = cat
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <SpinnerLoading /> : null;
    const content = !(loading || error) ? (
        <>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{breed}</Card.Title>
                <Card.Text>
                    Temperament: {temperament}
                </Card.Text>
                <Button variant="primary" href={wiki} target="_blank" rel="noopener noreferrer">Wikipedia</Button>
            </Card.Body>
        </>
    ) : null;


    return (

        <StyledCatCard >
            {errorMessage && <ErrorMessage />}
            {spinner}
            {content}
        </StyledCatCard>
    );
}


const StyledCatCard = styled(Card)`
  width: 18rem;
  margin:20px;
`;

export default RandomCat;