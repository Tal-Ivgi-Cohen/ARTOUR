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

export function PurchaseModal({ selectedArt, saveCartItem }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

   /* const handleOpen = () => {
        setOpen(true);

    };*/

    const handleClose = () => {
        setOpen(false);
    };

    const handlePurchase = () => {
        setOpen(true)
        saveCartItem(selectedArt)
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">JUST ADDED TO YOUR CART</h2>
            <p id="simple-modal-description">
                Added to cart successfully</p>
            <img src={selectedArt.imgUrl} alt={selectedArt.imgUrl} className="purchase-modal-img"/>
            <h2>{selectedArt.title}</h2>
            <p>Artist: {selectedArt.artist?.fullname || ''}</p>
            <p>Price: {selectedArt.price}</p>

            <button><Link to={`/cart`}>VIEW CART</Link></button>
            <Link to={`/art`}> continue shopping</Link>
            <Modal />
        </div>
    );

    return (
        <div>
            <button className="btn-add-to-bag" type="button" onClick={handlePurchase}>
                Add To Bag
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

export function WishListModal({ selectedArt }) {
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
            <div id="simple-modal-title-wish">This item has been added to youre Wishlist</div>
            <div id="simple-modal-description flex">
                <img className="img-wish" src={selectedArt.imgUrl} alt={selectedArt.imgUrl} />
                <p className="flex column">
                    <span>{selectedArt.title}</span>
                    <span>${selectedArt.price} </span>
                </p>
            </div>
            {/* <button ><Link to={`/art/${selectedArt._id}`}> Continue Shopping</Link></button> */}
            <Modal />
        </div>
    );

    return (
        <div>
            <a className="btn-wish-list" type="button" onClick={handleOpen}>
                ♡ WISHLIST
            </a>
            <Modal
                open={open}
                onClick={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export function ArtistInfoModal({ artistInfo }) {
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
            <div id="simple-modal-title"><h2>ARTIST STATEMENT</h2></div>
            <div id="simple-modal-description flex">
            <p>{artistInfo}</p>
           </div>
            <Modal />
        </div>
    );

    return (
        <div>
            <a className="btn-wish-list"  onClick={handleOpen}>
                View More
            </a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}