import React from 'react'
import {Container, Col, Row } from 'reactstrap'
import {Link} from 'react-router-dom'
import App from '../App.css'

function Footer(){
    return(
        <Container fluid className="footer"> 
                <ul>
                    <li><Link to="/connect">Connect</Link></li> |
                    <li><Link to="/donate">Donate</Link></li> |
                    <li><Link to="/volunteer">Volunteer</Link></li> |
                    <li><Link to="/faq">FAQs</Link></li> 
                </ul>
                
           {/* <br />
                <h5>Contact:</h5>
                    <p>Address: 5453 Block Towers Miami, FL 33897</p>
                    <p>Phone: 786-475-0843</p>
           <p>Email: LostCreatues@gmail.com</p>*/}
        </Container>
     )
}

export default Footer