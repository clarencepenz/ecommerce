import React from 'react';
import Product from './components/Product';

const data = {
  products: [
    {
      _id: 1,
      image: 'https://lh3.googleusercontent.com/proxy/u8mUM3031LmZANQbr4G2oEq6afBFeScKL-nkDeIkZ2-rCW2LM6_cNZYxpLdAWjaA29dooeMOofL0KO8I0HOo7X6Vix2Cj1LEcDOJQ9DH3bxfo5NgBFdek5hiu_Y',
      name: 'Shirts',
      price: '$4000',
      ratings: 2.5,
      numReviews: 1
    }, 
    {
      _id: 2,
      image: 'https://i.pinimg.com/originals/f3/0e/8b/f30e8b236fff35e4e71e4428d808324c.png',
      name: 'Shirts',
      price: '$2000',
      ratings: 4.5,
      numReviews: 9
    },
    {
      _id: 3,
      image: 'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png',
      name: 'Polo',
      price: '$1500',
      ratings: 1,
      numReviews: 13
    }
  ]
}

      
      const productItem = data.products.map(item => <Product key={item._id} image={item.image} name={item.name} price={item.price} ratings={item.ratings} reviews={item.numReviews} />)

function App() {
  return (
    <div style={styles.container}>
      {productItem}
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};
