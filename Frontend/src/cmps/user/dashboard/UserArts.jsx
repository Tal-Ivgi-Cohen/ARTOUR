import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { EmptyState } from '../../util/EmptyState';

export function UserArts({ arts, removeArt }) {
  return (
    <section className='user-artworks'>
      <h3>Artworks</h3>
      <Link to={'/art/add'}>
        <Button className='art-add-btn'>Add</Button>
      </Link>
      {arts.length ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Material</TableCell>
              <TableCell>Style</TableCell>
              <TableCell>Technique</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arts.map((art, idx) => (
              <TableRow key={`a${idx}`}>
                <TableCell>{art.title} </TableCell>
                <TableCell>{art.description} </TableCell>
                <TableCell>{art.category} </TableCell>
                <TableCell>{art.material} </TableCell>
                <TableCell>{art.style} </TableCell>
                <TableCell>{art.technique} </TableCell>
                <TableCell>{art.price} </TableCell>
                <TableCell>{`${art.size.height}x${art.size.width}`} </TableCell>
                <TableCell>
                  <Link to={`/art/edit/${art._id}`}>
                    <EditIcon />
                  </Link>
                </TableCell>
                <TableCell>
                  <Button onClick={() => removeArt(art._id)}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <EmptyState txt="You don't have any artworks yet. You can add through the 'Add' button above." />
      )}
    </section>
  );
}
