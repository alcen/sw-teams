import * as React from 'react';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import defaultFont from '../util/Font';
import Person from '../util/Person';

interface UserProfileProps {
  userToDisplay: Person
}

interface UserProfileState {
  isOpen: boolean,
  anchorElement?: HTMLElement
};

class UserProfile extends React.Component<UserProfileProps, UserProfileState> {
  constructor(props: UserProfileProps) {
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
      <div
        style={{
          display: 'inline-flex',
          paddingRight: '20px'
        }}
      >
        <Typography
          variant="h6"
          style={{
            fontFamily: defaultFont,
            fontSize: '14px',
            lineHeight: '36px',
            color: '#000000',
            mixBlendMode: 'normal',
            opacity: 0.5,
            paddingLeft: '22px'
          }}
        >
          <b>Hello, {this.props.userToDisplay.name}</b>
        </Typography>
        <Avatar
          alt={this.props.userToDisplay.name}
          src={this.props.userToDisplay.avatar}
          style={{
            width: '36px',
            height: '36px',
            paddingLeft: '8px'
          }}
        />
        <div
          style={{
            width: '36px',
            height: '36px'
          }}
        >
          <IconButton
            onClick={handleOpenMenu}
            style={{
              width: '36px',
              height: '36px'
            }}
          >
            <ArrowDropDownIcon />
          </IconButton>
        </div>
        
        <Menu
          anchorEl={this.state.anchorElement}
          keepMounted={true}
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