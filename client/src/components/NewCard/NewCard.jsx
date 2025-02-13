/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from './NewCard.module.css';
import Button from 'react-bootstrap/Button';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const  deployLink = process.env.REACT_APP_REST_API

const NewCard = ({
  id,
  image,
  title,
  createdAt,
  category,
  provinceOrLocation,
}) => {
  return (
    <div className='col-12 col-md-6 col-lg-6 '>
      <div className='card h-100'>
        <img src={image} alt={title} className={`card-img-top ${style.img}`} />
        <div className='card-body'>
          <div className={style.titleContainer}>
            <h5 className={`card-title ${style.title}`}>{title}</h5>
          </div>
          <div className={style.information}>
            <p className='card-subtitle mb-2 text-muted'>
              Categorias:
              {category.map((cat) => {
                return (
                  <span className='card-subtitle mb-2 text-muted'>
                    |{cat}|{' '}
                  </span>
                );
              })}
            </p>
            <p className='card-subtitle mb-2 text-muted'>
              Provincia: {provinceOrLocation}
            </p>
            <p className='card-subtitle mb-2 text-muted'>
              Publicado:{' '}
              {new Date(createdAt).toLocaleString('es-US', {
                timeZone: 'America/Argentina/Buenos_Aires',
              })}
            </p>
          </div>
          <div className='card-body'>
            <div className={style.moreButton}>
              <FacebookShareButton
                url={`${deployLink}/noticias/${id}`}
                quote={title}
              >
                <FacebookIcon size={40} round={true} />
              </FacebookShareButton>
              <LinkedinShareButton
                url={`${deployLink}/noticias/${id}`}
                title={title}
              >
                <LinkedinIcon size={40} round={true} />
              </LinkedinShareButton>
              <TelegramShareButton
                url={`${deployLink}/noticias/${id}`}
                title={title}
              >
                <TelegramIcon size={40} round={true} />
              </TelegramShareButton>
              <TwitterShareButton
                url={`${deployLink}/noticias/${id}`}
                title={title}
              >
                <TwitterIcon size={40} round={true} />
              </TwitterShareButton>
              <WhatsappShareButton
                url={`${deployLink}/noticias/${id}`}
                title={title}
              >
                <WhatsappIcon size={40} round={true} />
              </WhatsappShareButton>
              <br />
              <Button
                href={`/noticias/${id}`}
                variant='primary'
                style={{ marginTop: '15px' }}
              >
                Leer más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
