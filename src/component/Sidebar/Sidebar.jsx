import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const propTypes = {
  Open: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const SwipeableTemporaryDrawer = ({ Open, toggleSidebar }) => {
  const list = (
    <Box
      sx={{ width: 'auto', backgroundColor:"rgb(47, 47, 47);", color:"wheat" }}
      role="presentation"
      onClick={() => toggleSidebar('right', false)}
      onKeyDown={() => toggleSidebar('right', false)}
    >
      <List >
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List >
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key='right'>
        <SwipeableDrawer
          anchor='right'
          open={Open}
          onClose={() => toggleSidebar('right', false)}
          onOpen={() => toggleSidebar('right', true)}
        >
          {list}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

SwipeableTemporaryDrawer.propTypes = propTypes;

export default SwipeableTemporaryDrawer;
