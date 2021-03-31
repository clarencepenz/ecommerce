import React from 'react';
import Ratings from '../Ratings';

export default function Product({image, name, price, ratings, reviews, rest}) {
  return (
    <div style={styles.card} {...rest}>
      <img style={styles.img} src={image} alt="product" />
      <h3 style={styles.texts}>{name}</h3>
      <div style={styles.texts}>
        <Ratings rating={ratings} numReviews={reviews} />
      </div>
      <p style={styles.texts}>{price}</p>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '400px',
    width: '250px',
    backgroundColor: '#f4f4f4',
    border: '1px solid #c4c4c4',
    borderRadius: '5px',
    margin: '10px',
  },
  img: {
    height: '250px',
    width: 'auto',
    marginTop: '10px',
  },
  texts: {
    paddingLeft: '20px',
    alignSelf: 'flex-start',
  },
};
