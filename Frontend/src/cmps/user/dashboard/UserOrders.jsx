import React from 'react';
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { EmptyState } from '../../util/EmptyState';


export function UserOrders({ arts }) {
  console.log('arts', arts)


  return (
    <section className='user-orders'>
      <div>
        <h3>Orders</h3>
      </div>

      {arts.length ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colspan="2">Title</TableCell>
              <TableCell>Material</TableCell>
              <TableCell>Price</TableCell>
            {/*  <TableCell>Size</TableCell>*/}
            </TableRow>
          </TableHead>
          <TableBody>
            {arts.map((art) => (
              <TableRow key={art._id}>
                <TableCell>
                  <img src={art.imgUrl} alt={art.imgUrl} className="order-item-img" />
                </TableCell>
                <TableCell>{art.title} </TableCell>
                <TableCell>{art.material} </TableCell>
                <TableCell>{art.price} </TableCell>
               {/* <TableCell>{art.size.height}x{art.size.width} </TableCell>*/}
              </TableRow>
      ))}
          </TableBody>
        </Table>
      ) : (
        <EmptyState txt="You don't have any orders yet." />
      )}
    </section>
  );
}
