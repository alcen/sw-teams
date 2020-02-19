import * as React from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';

import Team from '../util/Team';
import defaultFont from '../util/Font';
import * as Classes from '../Classes';

interface CreateTeamMenuProps {
  handleCloseMenu: () => void,
  handleCreateTeam: (team: Team) => void,
  hidden: boolean,
  numberOfTeams: number
}

interface CreateTeamMenuState {
  createdAt: string,
  description: string,
  iconSource: string,
  isFavourite: boolean,
  isArchived: boolean,
  name: string,
  numberOfCampaigns: number,
  numberOfLeads: number,
  hasTriedToSubmit: boolean
}

class CreateTeamMenu extends React.Component<CreateTeamMenuProps, CreateTeamMenuState> {
  private clearState: CreateTeamMenuState = {
    createdAt: "",
    description: "",
    iconSource: "",
    isFavourite: false,
    isArchived: false,
    name: "",
    numberOfCampaigns: 0,
    numberOfLeads: 0,
    hasTriedToSubmit: false
  };

  constructor(props: CreateTeamMenuProps) {
    super(props);
    this.state = Object.assign({}, this.clearState);
  }

  private handleSubmit = () => {
    if (this.state.description && this.state.iconSource && this.state.name) {
      const newTeam: Team = {
        createdAt: this.state.createdAt || undefined,
        description: this.state.description,
        iconSource: this.state.iconSource,
        id: this.props.numberOfTeams + 1,
        isFavourite: this.state.isFavourite,
        isArchived: this.state.isArchived,
        name: this.state.name,
        numberOfCampaigns: this.state.numberOfCampaigns,
        numberOfLeads: this.state.numberOfLeads
      };
      this.props.handleCreateTeam(newTeam);
      // clear all fields
      this.setState(Object.assign({}, this.clearState));
    } else {
      this.setState((prevState : CreateTeamMenuState) => ({
        ...prevState,
        hasTriedToSubmit: true
      }));
    }
  };

  private handleChangeText = (name: string) =>
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue: string = event.target.value;
      this.setState((prevState : CreateTeamMenuState) => ({
        ...prevState,
        [name]: newValue
      }));
    };
  
  private handleChangeBoolean = (name: string) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue: boolean = event.target.checked;
      this.setState((prevState : CreateTeamMenuState) => ({
        ...prevState,
        [name]: newValue
      }));
    };
  
  private handleChangeNumber = (name: string) =>
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue: number = parseInt(event.target.value);
      this.setState((prevState : CreateTeamMenuState) => ({
        ...prevState,
        [name]: isNaN(newValue)
          ? 0
          : newValue
      }));
    };

  public render() {
    return (
      <Backdrop
        open={!this.props.hidden}
        style={{
          zIndex: 6000
        }}
      >
        <div
          className={Classes.createTeamMenu}
          style={{
            backgroundColor: '#ffffff'
          }}
        >
          <table
            style={{
              borderSpacing: '20px',
              marginLeft: '-20px',
              marginTop: '-20px',
              marginRight: '-10px'
            }}
          >
            <tbody>
              <tr>
                <td>
                  <IconButton onClick={this.props.handleCloseMenu}>
                    <CloseIcon />
                  </IconButton>
                </td>
                <td colSpan={2}>
                  <span
                    style={{
                      fontFamily: defaultFont,
                      fontSize: '18px',
                      color: '#565656'
                    }}
                  >
                    <b>Create A Team</b>
                  </span>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <TextField
                    label='Name'
                    value={this.state.name}
                    onChange={this.handleChangeText('name')}
                    error={this.state.hasTriedToSubmit && !this.state.name}
                  />
                </td>
                <td>
                  <TextField
                    label='Description'
                    value={this.state.description}
                    onChange={this.handleChangeText('description')}
                    error={this.state.hasTriedToSubmit && !this.state.description}
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <TextField
                    label='Icon URL'
                    value={this.state.iconSource}
                    onChange={this.handleChangeText('iconSource')}
                    error={this.state.hasTriedToSubmit && !this.state.iconSource}
                  />
                </td>
                <td>
                  <TextField
                    label='Created at (optional)'
                    value={this.state.createdAt}
                    onChange={this.handleChangeText('createdAt')}
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox
                        checked={this.state.isFavourite}
                        onChange={this.handleChangeBoolean('isFavourite')}
                      />}
                      label='Favourite'
                    />
                    <FormControlLabel
                      control={<Checkbox
                        checked={this.state.isArchived}
                        onChange={this.handleChangeBoolean('isArchived')}
                      />}
                      label='Archived'
                    />
                  </FormGroup>
                </td>
                <td>
                  <TextField
                    label='Number of campaigns'
                    type='number'
                    value={this.state.numberOfCampaigns}
                    onChange={this.handleChangeNumber('numberOfCampaigns')}
                  />
                  <br />
                  <TextField
                    label='Number of leads'
                    type='number'
                    value={this.state.numberOfLeads}
                    onChange={this.handleChangeNumber("numberOfLeads")}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={{ textAlign: 'right' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleSubmit}
                    style={{
                      fontFamily: defaultFont,
                      backgroundColor: '#40d2bf',
                      boxShadow: 'unset'
                    }}
                  >
                    <b>Submit</b>
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Backdrop>
    );
  }
}

export default CreateTeamMenu;