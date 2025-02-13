import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import s from './Footerx.module.css'

const  WhatsAppNumber = process.env.REACT_APP_WHATSAPP_NUMBER
const  EmailContact = process.env.REACT_APP_CONTACT_EMAIL

const Footerx = () => {


  return (
    <footer className={s.footer}>

      <Container>
        <Row className='px-5 d-flex-colum '>
          <Col className='md-6 lg-3 mt-5  '>
            <h2 className={s.h2_ft}>Grooming</h2>
            <p className={s.textFt}>Grooming Argentina nació Institucionalmente en el año 2014 y se convirtió en la primera Organización global creada para combatir el delito de «grooming o child grooming».</p>
            <nav className='d-flex justify-content-evenly mx-5 mt-1 ms-0'>
              <a href="https://twitter.com/GroomingArg/" target="_blank" rel="noopener noreferrer" className={s.a_social}><i className="bi bi-twitter"></i></a>
              <a href="https://www.facebook.com/groomingargentina/" target="_blank" rel="noopener noreferrer" className={s.a_social}><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/groomingargentina/?igshid=YmMyMTA2M2Y%3D/" target="_blank" rel="noopener noreferrer" className={s.a_social}><i className="bi bi-instagram"></i></a>
              <a href="https://www.youtube.com/@GroomingArgentina/" target="_blank" rel="noopener noreferrer" className={s.a_social}><i className="bi bi-youtube"></i></a>
            </nav>
          </Col>
          <Col className='md-6 lg-3  mt-5'>
            <h2 className={s.h2_ft}>Enlaces</h2>
            <ul className={s.ul_ft_social}>
              <li><Link as={Link} to='/home' className={s.lashes}>Inicio</Link></li>
              <li><Link as={Link} to='/nosotros' className={s.lashes}>Nosotros</Link></li>
              <li><Link as={Link} to='/noticias' className={s.lashes}>Noticias</Link></li>
              <li><Link as={Link} to='/contactanos' className={s.lashes}>Contáctanos</Link></li>
            </ul>
          </Col>
          <Col className='md-6 lg-3 md-mt-3 mt-5'>
            <h2 className={s.h2_ft}>¿Tienes Preguntas?</h2>
            <div className="block-23 mb-3">
              <p className={s.data_Contact}><span className='me-4'><i className="bi bi-house-door-fill"></i></span>Venezuela 110 1°, C1095 AAD Buenos Aires, Argentina</p>
              <p className={s.data_Contact}><span className='me-4'><i className="bi bi-telephone-fill"></i></span>{WhatsAppNumber}</p>
              <p className={s.data_Contact}><span className='me-4'><i className="bi bi-envelope-at"></i></span>{EmailContact}</p>
            </div>
          </Col>
        </Row >
        <div className={s.copy} >
          <p className={s.copy}> Copyright ©2023 All rights reserved | This project was made by <a className='text-decoration-underline' target='blank' href='https://github.com/SourceSquack'>SourceSquack</a></p>
        </div>
      </Container >
    </footer >


  )
}

export default Footerx