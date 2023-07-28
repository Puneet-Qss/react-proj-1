import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const propTypes = {
    Open: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
  };
// eslint-disable-next-line react/prop-types
const User = ({ Open, toggleUserModal }) => {
    const handleOpen = () => {
    toggleUserModal(true); // Change prop name here
  };

  const handleClose = () => {
    toggleUserModal(false); // Change prop name here
  };

  return (
    <div>
      <Modal
        open={Open} // Use the prop Open to control the modal visibility
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );

}

User.propTypes = propTypes;

export default User;