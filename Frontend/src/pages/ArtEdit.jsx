import React from 'react';
import { TextField } from '@material-ui/core';

export class ArtEdit extends React.Component {
  state = {
    emptySizeObj: {
      height: null,
      width: null,
    },
    sizes: [this.state.emptySizeObj],
  };

  addSizeRow = () => {
    const updatedSizes = [...this.state.sizes];
    updatedSizes.push(this.state.emptySizeObj);
    this.setState({ sizes: updatedSizes });
  };

  render() {
    const { sizes } = this.state;
    return (
      <form>
        <TextField label='Title' variant='outlined' />
        <TextField label='Description' variant='outlined' />
        <TextField label='Category' variant='outlined' />
        <TextField label='Technique' variant='outlined' />
        <TextField label='Style' variant='outlined' />
        <TextField label='Color' variant='outlined' />
        <section className='art-size'>
          <ul>
            {sizes.map((size, idx) => (
              <li key={idx}>
                <input placeholder='Height' /> <input placeholder='Width' />
              </li>
            ))}
            <li onClick={this.addSizeRow}> + </li>
          </ul>
        </section>
        <TextField label='Price' variant='outlined' />
      </form>
    );
  }
}
