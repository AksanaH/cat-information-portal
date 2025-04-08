import Button from 'react-bootstrap/Button';

function NextButton({ onClick }) {
    return (
        <>
            <Button variant="outline-info" onClick={onClick}>Next</Button>
        </>
    );
}

export default NextButton;