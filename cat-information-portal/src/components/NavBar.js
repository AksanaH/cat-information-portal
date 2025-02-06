import Nav from 'react-bootstrap/Nav';

function NavBar() {
    return (
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Cat Food</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Cat Toys</Nav.Link>
                </Nav.Item>
            </Nav.Item>
        </Nav>
    );
}

export default NavBar;