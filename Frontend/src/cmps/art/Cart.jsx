import React from 'react';

export function Cart({ item }) {

        return (
            <tr>
                <td>
                {item.title}
                </td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price}*{item.quantity}</td>
            </tr >

        )
    }
//Size: {item.size.height}x{item.size.width}
//{item.imgUrl}