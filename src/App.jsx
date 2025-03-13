import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='title text-5xl font-bold'>Collect Your Coupons</h1>
      <p className='my-4 text-gray-400 max-w-2xl'>
        You can collect your coupons here by clicking the button below. The
        rules are simple. You can only collect one coupon per hour. If you try
        to collect more than one coupon, it will not work.
      </p>
      <button className='btn btn-primary my-4'>Get Your Coupon</button>
    </>
  );
}

export default App;
