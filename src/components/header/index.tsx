import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './index.module.css'
import { Button } from 'react-bootstrap';


export function Header() {
    return (
        <Navbar expand="lg" style={{ padding: 0, margin: 0 }} className="bg-body-tertiary back">
            <Container style={{ background: "#295E65", padding: 4, paddingRight:"3.5rem"}} fluid>
                <Nav.Link href={"/home"}>
                <Image
                    src={'/images/my_logo.png'}
                    alt={'Logo teste'}
                    width={100}
                    height={100}
                    className={styles.logo}
                    quality={100}
                    priority={true}
                />
                </Nav.Link>
               
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/home" style={{color:"#fff"}}>Home</Nav.Link>
                        <Nav.Link href="/characters" style={{color:"#fff"}}>Fichas</Nav.Link>
                    </Nav>
                    <Button href='/history'>Criar Historia</Button>
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            style={{background:  "#fff"}}
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}