import React from 'react';

export function UserOrders({ orders }) {
  return (
    <section className='user=orders'>
      <h3>Orders</h3>
      <ul>
        {orders.map((order) => (
          <li key={`${order.buyerId}${order.artId}`}>{order.artId}</li>
        ))}
      </ul>
    </section>
  );
}
