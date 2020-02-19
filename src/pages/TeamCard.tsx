import * as React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import PeopleIcon from '@material-ui/icons/People';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';

import * as Classes from '../Classes';
import Team from '../util/Team';
import defaultFont from '../util/Font';

export interface TeamCardProps {
  displayedTeam: Team,
  handleFavourite: () => void,
  key: number,
}

const TeamCard: React.FunctionComponent<TeamCardProps> = (props: TeamCardProps) => {
  const team: Team = props.displayedTeam;
  return (
    <Card
      style={{
        marginLeft: '6px',
        marginRight: '6px',
        marginTop: '8px',
        width: '307px',
        height: '181px',
        border: '1.5px solid #e4e7ec',
        boxShadow: 'unset'
      }}
      className={
        team.isArchived
          ? Classes.archivedTeam
          : Classes.normalTeam
      }
    >
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '100%'
        }}
      >
        <div
          style={{
            float: 'left',
            width: '75%',
            marginTop: '16px',
            marginLeft: '16px',
            marginRight: '16px'
          }}
        >
          <Avatar
            alt={props.displayedTeam.name}
            variant="rounded"
            src={props.displayedTeam.iconSource}
            style={{
              float: 'left',
              marginTop: '5px',
              marginRight: '9px'
            }}
          />
          <div>
            <span
              style={{
                fontFamily: defaultFont,
                fontSize: '16px',
                lineHeight: '19px',
                color: '#444444'
              }}
            >
              {team.name}
            </span>
            <br />
            <span
              style={{
                fontFamily: defaultFont,
                fontSize: '13px',
                color: '#565656',
                opacity: 0.5,
                mixBlendMode: 'normal'
              }}
            >
              {team.createdAt ? 'Created ' + team.createdAt : undefined}
            </span>
          </div>
        </div>
        <div style={{ float:'right', margin: '5px' }} onClick={props.handleFavourite}>
          {team.isArchived
            ? undefined
            : (team.isFavourite
              ? <StarRoundedIcon style={{ color:'#f8ce43' }} />
              : <StarBorderRoundedIcon style={{ color:'#c7c7c7' }} />)
          }
        </div>
      </div>
      <br />
      <div
        style={{
          marginLeft: '16px',
          marginRight: '16px',
          marginBottom: '8px'
        }}
      >
        <span
          style={{
            wordWrap: 'break-word',
            fontFamily: defaultFont,
            fontSize: '14px',
            color: '#565656',
            display: '-webkit-box',
            // truncate text to ellipsis after 3 lines
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflowY: 'hidden'
          }}
        >
          {team.description}
        </span>
      </div>
      <Divider />
      <span style={{ display: 'inline-flex' }}>
        <QuestionAnswerIcon style={{ margin: '3px' }} />
        <span style={{ alignSelf: 'center' }}>
          {team.numberOfCampaigns}
          {' Campaigns'}
        </span>
      </span>
      <span style={{ display: 'inline-flex' }}>
        <PeopleIcon style={{ margin: '3px' }} />
        <span style={{ alignSelf: 'center' }}>
          {team.numberOfLeads}
          {' Leads'}
        </span>
      </span>
    </Card>
  );
};

export default TeamCard;
