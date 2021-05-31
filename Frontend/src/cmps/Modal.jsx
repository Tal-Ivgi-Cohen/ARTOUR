import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom';


function getModalStyle() {

    return {
        top: 0,
        right: 0,
        //transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: '10px',
    },
}));

export function PurchaseModal({ selectedArt }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">JUST ADDED TO YOUR CART</h2>
            <p id="simple-modal-description">
                Added to cart successfully</p>
            <img src={selectedArt.imgUrl}  alt={selectedArt.imgUrl}/>
            <h2>{selectedArt.title}</h2>
            <p>Artist: {selectedArt.artist?.fullname || ''}</p>
            <p>Price: {selectedArt.price}</p>

            <button ><Link to={`/art`}> Continue Shopping</Link></button>
            <Modal />
        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Purchase
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