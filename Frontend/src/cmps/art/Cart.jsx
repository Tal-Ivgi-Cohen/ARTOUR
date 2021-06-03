import React from 'react';

export function Cart({ item, removeCartItem }) {

    return (
        <tr>
            <td colspan="3">
                {item.title}
            </td>
            <td>{item.price}</td>
            <td>{item.price}*{item.quantity}</td>
            <td><button onClick={() => {
                removeCartItem(item._id)
            }}>remove</button></td>
        </tr>


    )
}
//Size: {item.size.height}x{item.size.width}
//{item.imgUrl}