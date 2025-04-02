import { useState, useEffect } from 'react';

import styled from "styled-components";
import CardGroup from 'react-bootstrap/CardGroup';
import CatItem from './CatItem';
import catService from '../services/CatService';

const CatBreeds = () => {

    const [catList, setCatList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        updateCatList();
    }, []);

    const onCatListLoaded = (catList) => {
        setCatList(catList || []); // Ensure it's always an array
        setLoading(false);
    };

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const updateCatList = () => {
        setLoading(true);
        catService
            .getAllCats()
            .then((catList) => {
                console.log("Cat breeds loaded successfully:", catList);
                onCatListLoaded(catList);
            })
            .catch((error) => {
                console.error("Fetching error:", error);
                onError();
            });
    };

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

const StyledAboutCatsSection = styled(CardGroup)`
  max-width: 50%;
  display: flex;
  flex-wrap: wrap;
`;

export default CatBreeds;