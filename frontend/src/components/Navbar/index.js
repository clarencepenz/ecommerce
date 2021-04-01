import React from 'react'

export default function Navbar() {
  return (
    <div style={styles.container}>
      <div style={styles.brand}>
        <h1>CART SHOPS</h1>
      </div>
      <div style={styles.links}>
        <a>cart</a> { ' ' }
        <a>sign in</a>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#2e2e2e',
    flexWrap: 'wrap',
    paddingLeft: '40px',
    paddingRight: '40px',
    color: '#fff'
  },
  brand: {
    marginRight: 'auto',
    fontSize: '14px'
  },
  links: {
    fontSize: '24px',
    marginTop: '20px',
  },
};