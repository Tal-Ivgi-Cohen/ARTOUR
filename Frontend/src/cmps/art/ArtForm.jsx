import React from 'react';
import { TextField, MenuItem, Button } from '@material-ui/core';
import { ImgUploadPreview } from './ImgUploadPreview';
import { Loader } from '../util/Loader';

export class ArtForm extends React.Component {
  state = {
    art: {
      title: '',
      price: 0,
      imgUrl: '',
      material: '',
      technique: '',
      category: '',
      style: '',
      color: '',
      artist: '',
      reviews: [],
      description: '',
      size: { height: 0, width: 0 },
    },
  };

  componentDidMount() {
    const { art } = this.state;
    if (this.props.selectedArt) {
      this.setState({ art: this.props.selectedArt }, () => {
        console.log('art in form', this.state.art);
        const currUserArtist = {
          id: '_u101',
          fullname: 'Tair Bitan',
          imgUrl: '/img/img2.jpg',
        };
        if (!art.artist)
          this.setState((prevState) => {
            return {
              art: {
                ...prevState.art,
                artist: currUserArtist,
              },
            };
          });
      });
    }
  }

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
    if (field === 'height' || field === 'width') {
      this.setState(
        (prevState) => {
          return {
            art: {
              ...prevState.art,
              size: { ...prevState.art.size, [field]: value },
            },
          };
        },
        () => console.log('updated art', this.state.art)
      );
    } else {
      this.setState(
        (prevState) => {
          return {
            art: {
              ...prevState.art,
              [field]: value,
            },
          };
        },
        () => console.log('updated art', this.state.art)
      );
    }
  };

  onImgChange = (url) => {
    this.setState(
      (prevState) => {
        return {
          art: {
            ...prevState.art,
            imgUrl: url,
          },
        };
      },
      () => console.log('updated art', this.state.art)
    );
  };

  onSubmit = (ev) => {
    ev.preventDefault();
    const { art } = this.state;
    this.props.saveArt(art);
    // go to explore page
    this.props.history.push(`/art`);
  };

  render() {
    const { art } = this.state;
    if (!art) return <Loader />;
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
    } = this.state.art;
    return (
      <form onSubmit={this.onSubmit}>
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
        <ImgUploadPreview imgUrl={imgUrl} onImgChange={this.onImgChange} />
        <Button variant='outlined' type='submit'>
          Submit
        </Button>
      </form>
    );
  }
}
