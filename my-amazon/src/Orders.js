import React, {useState} from 'react';
import './Orders.css';



function Orders() {

  const [orders, setOrders] = useState([]);



  return (
    <div className='orders'>
      <h1>Yours Orders</h1>
    </div>
  )
}

export default Orders;
