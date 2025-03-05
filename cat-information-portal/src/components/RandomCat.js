import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import catService from '../services/CatService';
import SpinnerLoading from './Spinner';
import ErrorMessage from './ErrorMessage';
import styled from "styled-components";

class RandomCat extends Component {
    state = {
        cat: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateCat();
    }

    onCatLoaded = (cat) => {
        if (!cat) {
            this.setState({ loading: false, error: true });
            return;
        }
        this.setState({ cat, loading: false, error: false });
    };


    onError = () => {
        console.error("Error fetching cat!");
        this.setState({ loading: false, error: true }, () => {
            console.log("Updated state:", this.state); // Check if the state actually changes
        });
    };

    updateCat = () => {
        this.setState({ loading: true });
        catService
            .getRandomCat()
            .then((cat) => {
                console.log("Cat loaded successfully:", cat);
                this.onCatLoaded(cat);
            })
            .catch((error) => {
                console.error("Fetching error:", error);
                this.onError();
            });
    };

    render() {
        const { cat: { breed, temperament, wiki, image }, loading, error } = this.state;
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
}

const StyledCatCard = styled(Card)`
  width: 18rem;
  margin:20px;
`;

export default RandomCat;