import React from 'react'

export default function Product() {
  return (
    <div style={styles.card}>
       <img style={styles.img} src='https://lh3.googleusercontent.com/proxy/u8mUM3031LmZANQbr4G2oEq6afBFeScKL-nkDeIkZ2-rCW2LM6_cNZYxpLdAWjaA29dooeMOofL0KO8I0HOo7X6Vix2Cj1LEcDOJQ9DH3bxfo5NgBFdek5hiu_Y' alt='product'/>
       <h3 style={styles.texts}>Ball</h3>
       <p style={styles.texts}>$3000</p>
    </div>
  )
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '300px',
    width: '250px',
    backgroundColor: '#f4f4f4',
    border: '1px solid #c4c4c4',
    borderRadius: '5px'
  },
  img: {
    height: 'auto',
    width: '200px',
    marginTop: '10px'
  },
  texts: {
    paddingLeft: '20px',
    alignSelf: 'flex-start'

  }
}