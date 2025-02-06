import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

function Search() {
    return (
        <StyledSearchPanel>
            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="start typing here..."
                            className=" mr-sm-2"
                        />
                    </Col>
                </Row>
            </Form>
        </StyledSearchPanel>
    );
}
const StyledSearchPanel = styled.div`
    margin: 30px;
`;
export default Search;