import React from 'react';
import { useTranslation } from 'react-i18next';
// import PropTypes from 'prop-types';
import s from './card.module.scss';

const Card = ({ children, title = 'test', reward = 0, imageUrl, id }) => {
    const { t, i18n } = useTranslation();
    return (
        <div id={id} className={s.card}>
            <div className={s.imgWrapper}>
                <img className={s.img} src={imageUrl} alt="#" />
            </div>
            <div className={s.footer}>
                <div>
                    <p className={s.title}>{title}</p>
                    <span className={s.reward}>{`${reward} ${t(
                        'points'
                    )}`}</span>
                </div>
                <div className={s.btn}>{children}</div>
            </div>
        </div>
    );
};

export default Card;

// Card.propTypes = {
//     title: PropTypes.string,
//     reward: PropTypes.number,
//     imageUrl: PropTypes.string,
//     id: PropTypes.string,
//     children: PropTypes.node,
// };
