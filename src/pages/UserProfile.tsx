import * as React from 'react';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

interface UserProfileState {
  isOpen: boolean,
  anchorElement?: HTMLElement
};

class UserProfile extends React.Component<{}, UserProfileState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
      anchorElement: undefined
    };
  }

  public render: () => JSX.Element = () => {
    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
      this.setState({
        ...this.state,
        isOpen: true,
        anchorElement: event.currentTarget
      });
    };

    const handleCloseMenu = () => {
      this.setState({
        ...this.state,
        isOpen: false,
        anchorElement: undefined
      });
    }

    return (
      <div style={{ display: 'inline-flex' }}>
        <Typography variant="h6">
          Hello, John
        </Typography>
        <Avatar alt="Remy Sharp" src="" />
        <IconButton onClick={handleOpenMenu}>
          <ArrowDropDownIcon />
        </IconButton>
        
        <Menu
          anchorEl={this.state.anchorElement}
          keepMounted
          open={this.state.isOpen}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
};

export default UserProfile;