import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={styles.container}>
      <div style={styles.brand}>
        <h1>CART SHOPS</h1>
      </div>
      <div style={styles.link}>
        <div >
          <Link style={styles.links} to='#'>
            cart
          </Link>
        </div>
        <div className='dropdown'>
          <Link style={styles.links} to='#'>
            Def in{' '}
            <i className="fa fa-caret-down"></i>
          </Link>
          <ul className='dropdown-content'>
            <Link onClick={() => alert('😆😆😆😆😆')} style={styles.links} to='#'>
              haha
            </Link>
            <Link style={styles.links} to='#'>
              love
            </Link>
          </ul>
        </div>
        <div className='dropdown'>
          <Link style={styles.links} to='#'>
            Sign in{' '}
            <i className="fa fa-caret-down"></i>
          </Link>
          <ul className='dropdown-content'>
            <Link style={styles.links} to='#'>
              haha
            </Link>
            <Link style={styles.links} to='#'>
              love
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#2e2e2e',
    height: '8vh',
    flexWrap: 'wrap',
    paddingLeft: '40px',
    paddingRight: '40px',
    color: '#fff'
  },
  brand: {
    marginRight: 'auto',
    fontSize: '12px'
  },
  links: {
    fontSize: '20px',
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
    padding: '0 10px'
  },
  link: {
    marginTop: '10px',
    display: 'flex',
  },
};