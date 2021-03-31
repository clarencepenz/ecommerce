import React from 'react';
import Product from './components/Product';

function App() {
  return (
      <div style={styles.container}>
         <Product/>
      </div>
  );
}

export default App;


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }
}