import { Component } from 'react';

import styled from "styled-components";
import CardGroup from 'react-bootstrap/CardGroup';
import CatItem from './CatItem';
import catService from '../services/CatService';

class CatBreeds extends Component {
    state = {
        catList: [],
        loading: true,
        error: false
    }

    componentDidMount() {
        catService.getAllCats()
            .then(this.onCatListLoaded)
            .catch(this.onError)
    }

    onCatListLoaded = (catList) => {
        this.setState({
            catList,
            loading: false
        })
    }
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {
        const { catList, loading, error } = this.state;

        if (loading) {
            return <div>Loading...</div>; // Show loading state
        }

        if (error) {
            return <div>Error loading cats</div>; // Show error state
        }

        return (
            <StyledAboutCatsSection>
                {catList.map((cat, index) => (
                    <CatItem key={index} cat={cat} /> // Map through catList to render CatItem for each cat
                ))}
            </StyledAboutCatsSection>

        );
    }
}

const StyledAboutCatsSection = styled(CardGroup)`
  max-width: 50%;
  display: flex;
  flex-wrap: wrap;
`;

export default CatBreeds;