import React from 'react';
import { TextField, MenuItem, Button } from '@material-ui/core';

export class ArtForm extends React.Component {
  state = {
    isEditMode: this.props.art ? true : false,
    title: this.props.art ? this.props.art.title : '',
    description: this.props.art ? this.props.art.description : '',
    category: this.props.art ? this.props.art.category : 'Painting',
    material: this.props.art ? this.props.art.material : 'Canvas',
    technique: this.props.art ? this.props.art.technique : 'Oil',
    style: this.props.art ? this.props.art.style : 'Abstract',
    color: this.props.art ? this.props.art.color : 'Black',
    size: this.props.art
      ? this.props.art.size
      : {
          height: 0,
          width: 0,
        },
    price: this.props.art ? this.props.art.price : 0,
    imgUrl: this.props.art ? this.props.art.imgUrl : null,
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
    material: ['Canvas', 'Wood', 'Paper', 'Other'],
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState({ [field]: value });
  };

  handleSubmit = () => {
    console.log('Submit clicked');
    // check if edit or add by this.state.isEditMode
    // if edit => const artData = editable details from state && uneditable details from props
    // if add => const artData = new details from state && artist from user && empty arr for reviews
    // call action saveArt with artData
    // go to details route with the same art id
  };

  handleImgUpload = () => {
    //get img (file)
    // update the state with correct imgURL 
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
      material,
      imgUrl,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
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
          value={material}
          name='material'
          select
          label='Material'
          variant='outlined'
          onChange={this.handleChange}
        >
          {this.selectOptions.material.map((item, idx) => (
            <MenuItem key={`m${idx}`} value={item}>
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
          <span>cm</span>
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
        <section>
          {imgUrl ? (
            <img src={imgUrl} alt='' />
          ) : (
            <div className='empty-img'>Upload an Image</div>
          )}
          <Button>Upload</Button>
        </section>
        <Button variant='outlined' type='submit'>
          Submit
        </Button>
      </form>
    );
  }
}
