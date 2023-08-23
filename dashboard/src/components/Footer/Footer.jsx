import React from "react";
import { Container } from "react-bootstrap";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.copy}>
        <p className={s.copy}> Copyright ©2023 All rights reserved | This project was made by <a className='text-decoration-underline' target='blank' href='https://github.com/SourceSquack'>SourceSquack</a></p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
