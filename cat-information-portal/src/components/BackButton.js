import Button from 'react-bootstrap/Button';

function BackButton({ onClick }) {
    return (
        <>
            <Button variant="outline-info" onClick={onClick}>Back</Button>
        </>
    );
}

export default BackButton;