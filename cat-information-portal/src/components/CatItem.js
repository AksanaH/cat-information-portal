import Card from 'react-bootstrap/Card';
import styled from "styled-components";


const CatItem = () => {
    return (
        <StyledCatItem>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </StyledCatItem>
    )
}


const StyledCatItem = styled(Card)`
  width: 100px !important;
  margin:10px;
  max-height:25rem;
  display: inline-block;
`;
export default CatItem;