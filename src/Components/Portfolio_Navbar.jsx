import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';


export default function Portfolio_Navbar() {
  
  return (
    <>
    <Navbar fixed='top' bg="dark" data-bs-theme="dark" expand="lg" className="bg-body">
      <Container fluid>
        <Navbar.Brand href="#"><span className=' text-blue-400 animate-pulse font-semibold uppercase '>Bharat</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 mx-auto my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#home"  >Home</Nav.Link> */}
          
           <li className='my-nav-item w-20 text-center rounded-xl'><Link  duration={200} spy={true} offset={-200} smooth={true}   to="home" activeClass='active'  >  Home  </Link></li>
           <li className='my-nav-item w-20 text-center rounded-xl '><Link  duration={200} spy={true} offset={-150} smooth={true}   to="about" activeClass='active '   >About</Link></li>
  
           <li className='my-nav-item w-24 text-center rounded-xl'> <Link duration={200} spy={true} offset={-150} smooth={true}  to="experience"activeClass='active'>Experience</Link></li>
           <li className='my-nav-item w-20 text-center rounded-xl'> <Link duration={200} spy={true} offset={-150} smooth={true}  to="skills"activeClass='active' >Skills</Link></li>
           <li className='my-nav-item w-20 text-center rounded-xl'> <Link duration={200} spy={true} offset={-150} smooth={true}  to="projects"activeClass='active' >Projects</Link></li>
           
          </Nav>
          <Form className="d-flex">
           
            <Button href='#contact' variant="primary">Contact Me</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    // <div className='navbar flex flex-row m-0 p-0 w-screen'>
    //   <div className="logo  bg-blue-700 w-1/4">
    //   <span className=' text-yellow-500 font-bold text-lg mx-3'>Bharat</span>  
    //   </div>
    //   <div className="flex flex-row justify-end bg-red-700 w-3/4">
    //     <li className=' list-none mx-10 text-lg'><a href="#">Home</a></li>
    //     <li className=' list-none mx-10 text-lg'><a href="#">About</a></li>
    //     <li className=' list-none mx-10 text-lg'><a href="#">Skills</a></li>
    //     <li className=' list-none mx-10 text-lg'><a href="#">Projects</a></li>
    //   </div>
    // </div>
  )
}
