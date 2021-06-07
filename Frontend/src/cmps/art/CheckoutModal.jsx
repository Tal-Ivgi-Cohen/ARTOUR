import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom';


function getModalStyle() {

    return {
        top: 50,
        right: 50,


        //transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        height:200,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: '10px',
    },
}));

export function CheckoutModal({ onCheckOut }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleCheckout = () => {
        setOpen(true)
        onCheckOut()
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h3 id="simple-modal-description">
                Your order has been sent to the artist</h3>
        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleCheckout}>
            Check out
      </button>
            <Modal
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                onClick={handleClose}>

                {body}
            </Modal>
        </div>
    );
}