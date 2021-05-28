import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';

export class ArtForm extends React.Component {
  state = {
    title: this.props.art ? this.props.art.title : '',
    description: '',
    category: '',
    technique: '',
    style: '',
    color: '',
    size: {
      height: 0,
      width: 0,
    },
    price: 0,
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState({ [field]: value });
  };

  selectOptions = {
    category: ['Painting', 'Photograph', 'Digital art', 'Other'],
    technique: ['Oil', 'Acrylics', 'Water colors', 'Chalk', 'Pencil', 'Other'],
    style: [
      'Abstract',
      'Figure',
      'Portrait',
      'Urban',
      'Realistic',
      'Pop art',
      'Street art',
      'Other',
    ],
    color: [
      'Black',
      'White',
      'Grey',
      'Yellow',
      'Orange',
      'Red',
      'Pink',
      'Blue',
      'Cyan',
      'Green',
      'Purple',
      'Brown',
    ],
  };

  render() {
    const {
      title,
      description,
      category,
      technique,
      style,
      color,
      size,
      price,
    } = this.state;
    return (
      <form>
        <TextField
          required
          value={title}
          name='title'
          label='Title'
          variant='outlined'
          onChange={this.handleChange}
        />
        <TextField
          multiline
          value={description}
          name='description'
          rowsMax='2'
          label='Description'
          variant='outlined'
          onChange={this.handleChange}
        />
        <TextField
          required
          value={category}
          name='category'
          select
          label='Category'
          variant='outlined'
          onChange={this.handleChange}
        >
          {this.selectOptions.category.map((item, idx) => (
            <MenuItem key={`c${idx}`} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          value={technique}
          name='technique'
          select
          label='Technique'
          variant='outlined'
          onChange={this.handleChange}
        >
          {this.selectOptions.technique.map((item, idx) => (
            <MenuItem key={`t${idx}`} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          value={style}
          name='style'
          select
          label='Style'
          variant='outlined'
          onChange={this.handleChange}
        >
          {this.selectOptions.style.map((item, idx) => (
            <MenuItem key={`s${idx}`} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          value={color}
          name='color'
          select
          label='Color'
          variant='outlined'
          onChange={this.handleChange}
        >
          {this.selectOptions.color.map((item, idx) => (
            <MenuItem key={`clr${idx}`} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
        <section className='art-size'>
          <TextField
            required
            inputProps={{ min: 0 }}
            value={size.height}
            name='size'
            type='number'
            label='Height'
            variant='outlined'
            onChange={this.handleChange}
          />
          <TextField
            required
            inputProps={{ min: 0 }}
            value={size.width}
            name='size'
            type='number'
            label='Width'
            variant='outlined'
            onChange={this.handleChange}
          />
        </section>
        <TextField
          value={price}
          required
          inputProps={{ min: 0 }}
          name='price'
          type='number'
          label='Price'
          variant='outlined'
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
