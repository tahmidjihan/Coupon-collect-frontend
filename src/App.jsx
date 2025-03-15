import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  const [coupon, setCoupon] = useState(null);
  useEffect(() => {
    axios.post('http://localhost:3000/getCoupon').then((res) => {
      console.log(res.data);
      // setCoupon(res.data);
    });
  }, []);

  return (
    <>
      <h1 className='title text-5xl font-bold'>Collect Your Coupons</h1>
      <p className='my-4 text-gray-400 max-w-2xl'>
        You can collect your coupons here by clicking the button below. The
        rules are simple. You can only collect one coupon per hour. If you try
        to collect more than one coupon, it will not work.
      </p>
      <div
        className={`card w-full border border-primary card-xs shadow-sm ${
          coupon ? '' : 'hidden'
        }`}>
        <div className='card-body text-start'>
          <h2 className='card-title'>{coupon?.title}</h2>
          <p>{coupon?.time}</p>
          <p>{coupon?.id}</p>
          <p className='text-gray-400'>{coupon?.description}</p>
          <div className='justify-end card-actions'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>

      <button
        disabled={coupon ? true : false}
        onClick={() => {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Collect it!',
          }).then((result) => {
            if (result.isConfirmed) {
              const newCoupon = {
                time: new Date().toLocaleString(),
                id: Math.random().toString(36).slice(2),
                title: 'None of your business',
                description:
                  'You can only collect one coupon per hour. If you try to collect more than one coupon, it will not work.',
              };
              setCoupon(newCoupon);
              Swal.fire({
                title: 'Collected!',
                text: 'Your coupon has been collected. You can use it now. Have a nice day! (you can only collect one coupon per hour)',
                icon: 'success',
              });
            }
          });
        }}
        className='btn btn-primary my-4'>
        Get Your Coupon
      </button>
      <p className={coupon ? '' : 'hidden'}>Try again in 1 hour</p>
    </>
  );
}

export default App;
