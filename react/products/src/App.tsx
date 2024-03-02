import React from 'react';
import Product from './components/Product/Product';
import redPlus from './img/65bd2da5bb732f889502137b80b0a73f.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product
          img={redPlus}
          discont={25}
          text={'Портативная медицинская аптечка'}
          rating={'4.7'}
          sales={123}
          price={1450}
          last_price={1645}
        />
      </header>
    </div>
  );
}

export default App;
