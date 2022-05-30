import './App.css';
import Product from './Product';

function App() {
  return (
    <div>
      <h1>Hello World</h1>

      <Product
        name='Amazon Echo'
        description='AI assistant'
        price={59.99}
      />

      <Product
        name='Galaxy S20'
        description='Smartphone that is not by apple'
        price={199.99}
      />

      <Product
        name='Macbook Pro'
        description='Ultimate laptop'
        price={1400.00}
      />



    </div>
  );
}

export default App;
