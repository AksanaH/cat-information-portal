import { useState, useEffect } from 'react';

import styled from "styled-components";
import CardGroup from 'react-bootstrap/CardGroup';
import CatItem from './CatItem';
import catService from '../services/CatService';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';


const CatBreeds = () => {

    const [catList, setCatList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [offset, setOffset] = useState(1);

    const [catPages, setCatPages] = useState([]); // Array of catLists
    const [pageIndex, setPageIndex] = useState(0);


    useEffect(() => {
        onRequest(offset);
    }, [])

    const onCatListLoaded = (newCats, newOffset) => {
        setCatList(newCats || []);
        setLoading(false);
        setOffset(newOffset);
    };

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const onRequest = (newPageIndex) => {
        setLoading(true);

        // If we've already fetched this page, just use it
        if (catPages[newPageIndex]) {
            setCatList(catPages[newPageIndex]);
            setPageIndex(newPageIndex);
            setLoading(false);
            return;
        }

        // Otherwise fetch new data
        catService.getAllCats()
            .then((cats) => {
                const updatedPages = [...catPages];
                updatedPages[newPageIndex] = cats;
                setCatPages(updatedPages);
                setCatList(cats);
                setPageIndex(newPageIndex);
                setLoading(false);
            })
            .catch(onError);
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    if (error) {
        return <div>Error loading cats</div>; // Show error state
    }

    return (
        <>
            <StyledAboutCatsSection>
                {catList.map((cat, index) => (
                    <CatItem key={index} cat={cat} /> // Map through catList to render CatItem for each cat
                ))}
            </StyledAboutCatsSection>
            <BackButton onClick={() => onRequest(pageIndex - 1)} />
            <NextButton onClick={() => onRequest(pageIndex + 1)} />
        </>

    );
}

const StyledAboutCatsSection = styled(CardGroup)`
  max-width: 50%;
  display: flex;
  flex-wrap: wrap;
`;

export default CatBreeds;