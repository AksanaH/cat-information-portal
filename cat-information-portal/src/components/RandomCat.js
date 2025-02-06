import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CatService from '../services/CatService';

class RandomCat extends Component {
    constructor(props) {
        super(props);
        this.updateCat();
    }

    state = {
        cat: {}
    }
    catService = new CatService();

    onCatLoaded = (cat) => {
        this.setState({ cat });
    }

    updateCat = (id) => {

        this.catService
            .getRandomCat(id)
            .then(this.onCatLoaded)
            .catch(error => {
                console.error("Error fetching cat data:", error);
            });
    };

    render() {
        const { cat: { breed, temperament, wiki, image } } = this.state
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{breed}</Card.Title>
                    <Card.Text>
                        Temperament: {temperament}
                    </Card.Text>
                    <Button variant="primary" href={wiki} target="_blank" rel="noopener noreferrer">Wikipedia</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default RandomCat;