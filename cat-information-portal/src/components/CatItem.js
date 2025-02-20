import Card from 'react-bootstrap/Card';
import styled from "styled-components";


const CatItem = ({ cat }) => {
    return (
        <div>
            <StyledCatItem>
                <ImageWrapper>
                    <StyledImage variant="top" src={cat.image} />
                </ImageWrapper>
                <Card.Body>
                    <Card.Title>{cat.breed}</Card.Title>
                    <Card.Text>
                        {cat.temperament}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </StyledCatItem>
        </div>
    )
}


const StyledCatItem = styled(Card)`
  min-width: 15rem;
  width: 15rem;
  margin:10px;
`;

const ImageWrapper = styled.div`
  height: 17rem;
  
`;

const StyledImage = styled(Card.Img)`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export default CatItem;