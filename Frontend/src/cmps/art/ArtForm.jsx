import React from 'react';
import { TextField, MenuItem, Button } from '@material-ui/core';
import { ImgUploadPreview } from '../util/ImgUploadPreview.jsx';
import { Loader } from '../util/Loader';
import { Link } from 'react-router-dom';

export class ArtForm extends React.Component {
  state = {
    isEditMode: false,
    art: {
      title: '',
      price: 0,
      imgUrl: '',
      material: 'Canvas',
      technique: 'Oil',
      category: 'Painting',
      style: 'Abstract',
      color: 'Black',
      artist: '',
      reviews: [],
      description: '',
      size: { height: 0, width: 0 },
    },
  };

  componentDidMount() {
    const { user, history, selectedArt } = this.props;
    if (selectedArt) {
      // Edit mode - check if curr user is the artist
      if (user && selectedArt.artist._id === user._id) {
        this.setState({ art: selectedArt });
        this.setState({ isEditMode: true });
      } else history.push('/account');
    } else {
      // Add mode - check if a user is logged in
      if (user) {
        const { _id, fullName, imgUrl } = user;
        const currUserArtist = { _id, fullName, imgUrl };
        this.setState((prevState) => {
          return {
            art: {
              ...prevState.art,
              artist: currUserArtist,
            },
          };
        });
      } else history.push('/account');
    }
  }

  selectOptions = {
    category: ['Painting', 'Photograph', 'Digital art', 'Other'],
    technique: ['Oil', 'Acrylics', 'Watercolors', 'Chalk', 'Pencil', 'Other'],
    style: [
      'Abstract',
      'Classic',
      'Figure',
      'Portrait',
      'Urban',
      'Realistic',
      'Pop art',
      'Street art',
      'Graffiti',
      'Other',
    ],
    color: [
      'Black',
      'White',
      'Gray',
      'Yellow',
      'Orange',
      'Red',
      'Pink',
      'Blue',
      'Cyan',
      'Green',
      'Purple',
      'Brown',
      'Beige',
    ],
    material: ['Canvas', 'Wood', 'Paper', 'Other'],
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    if (field === 'height' || field === 'width') {
      this.setState((prevState) => {
        return {
          art: {
            ...prevState.art,
            size: { ...prevState.art.size, [field]: value },
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          art: {
            ...prevState.art,
            [field]: value,
          },
        };
      });
    }
  };

  onImgChange = (url) => {
    this.setState((prevState) => {
      return {
        art: {
          ...prevState.art,
          imgUrl: url,
        },
      };
    });
  };

  onSubmit = async (ev) => {
    ev.preventDefault();
    const { art } = this.state;
    await this.props.saveArt(art);
    // go to explore page
    this.props.history.push(`/account`);
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
    const { isEditMode } = this.state;
    return (
      <>
        <span className='page-hierarchy-links'>
          <Link to='/account'>/ Account</Link>
          <span>{isEditMode ? ' / Edit' : ' / Add'}</span>
        </span>
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
              name='height'
              type='number'
              label='Height'
              variant='outlined'
              onChange={this.handleChange}
            />
            <TextField
              required
              inputProps={{ min: 0 }}
              value={size.width}
              name='width'
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
      </>
    );
  }
}
