import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function BasicExample() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            IEEE Concordia
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
