import styled from "styled-components";
import Search from './Search'
import RandomCat from './RandomCat';

function AboutCats() {
    return (
        <>
            <StyledAboutCatsSection>
                <h1>Cats</h1>
                <p>Cats are fascinating and beloved companions known for their playful personalities, graceful movements, and independent nature. With a wide variety of breeds, each cat has its own unique traits, from fluffy coats and striking eye colors to distinctive behaviors. Whether they're curling up in cozy spots, chasing after toys, or showing affection in their own special way, cats bring joy and warmth to countless homes. Explore our app to discover adorable cat pictures, learn about different breeds, and find interesting facts about these amazing creatures.</p>
                <Search />
                <RandomCat />
            </StyledAboutCatsSection>
        </>
    );
}

const StyledAboutCatsSection = styled.div`
  max-width: 40%;
`;

export default AboutCats;