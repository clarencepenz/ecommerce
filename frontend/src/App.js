import React from 'react';

function App() {
  return (
      <div style={styles.container}>
          <h1>Ecommerce</h1>
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