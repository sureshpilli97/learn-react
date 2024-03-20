import React from 'react';
import { Button, Card, CardMeta, Image } from 'semantic-ui-react';
import './Card.css';
import { Link } from 'react-router-dom';

const CardExampleCard = (props) => (
  <Card id="AppCard" onClick={props.showModal}>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>{props.props.name}</Card.Header>
      <Card.Description>
        <p>Email: {props.props.email}</p>
        <p>Phone: {props.props.phone}</p>
        <p>Company: {props.props.company.name}</p>
      </Card.Description>
      <CardMeta>
        <Button
          style={{margin:10}}
          onClick={(e) => {
            e.stopPropagation();
            props.onClick();
          }}
        >
          user comments
        </Button>

        <Link to={`${props.props.id}`} >
        <Button
          style={{margin:10}}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          User
        </Button>
        </Link>

      </CardMeta>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
