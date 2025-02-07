import Nav from 'react-bootstrap/Nav';

function NavBar() {
    return (
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/breeds">Cat Breeds</Nav.Link>
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