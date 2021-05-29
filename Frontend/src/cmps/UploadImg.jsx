import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export function UploadImg({ handleImgChange }) {
  const classes = useStyles();

  const handleImgUpload = ({ target }) => {
    const file = target.files[0];
    if (file) {
      handleImgChange(URL.createObjectURL(file));
    }
  };

  return (
    <div className={classes.root}>
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
        onChange={handleImgUpload}
      />
      <label htmlFor='contained-button-file'>
        <Button variant='contained' color='primary' component='span'>
          Upload
        </Button>
      </label>
      <input
        accept='image/*'
        className={classes.input}
        id='icon-button-file'
        type='file'
        onChange={handleImgUpload}
      />
      <label htmlFor='icon-button-file'>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='span'
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}
