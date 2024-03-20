import React, { useState } from 'react';
import axios from 'axios';
import {
  Modal,
  Button,
  Header,
  Image,
} from 'semantic-ui-react';
import CardExampleCard from './CardExampleCard';
import CommentExampleMetadata from './CommentExampleMetadata';

function ModalExampleModal(props) {
  const [state, setState] = useState({
    openCard:false,
    openModal:false
  });

  const deleteUser = (key) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${key}`)
      .then(response => {
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const { openCard ,openModal} = state

  return (
    <>
      <Modal style={{marginTop:50}}
        onClose={() =>  setState((prev)=>({
          ...prev,
          openModal:false
        }))
      }
        onOpen={() =>  setState((prev)=>({
          ...prev,
          openModal:true
        }))
      }
        open={openModal}
      >
        <Modal.Header>{props.user.name}</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>{props.user.username}</Header>
            <p>Email: {props.user.email}</p>
            <h3>Comments:</h3>
            {
              props.user.comments.map(i=>(
                <CommentExampleMetadata key={i.id} comment={i} />
              ))
            }
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() =>  setState((prev)=>({
              ...prev,
              openModal:false
            }))
          }>Close</Button>
        </Modal.Actions>
      </Modal>

      <Modal
        onClose={() =>  setState((prev)=>({
          ...prev,
          openCard:false
        }))
      }
        onOpen={() =>  setState((prev)=>({
          ...prev,
          openCard: true
        }))
      }
        open={openCard}
      >
        <Modal.Header>{props.user.name}</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped />
          <Modal.Description>
            <Header>{props.user.username}</Header>
            <p>Email: {props.user.email}</p>
            <p>Phone: {props.user.phone}</p>
            <p>Website: {props.user.website}</p>
            <p>Company: {props.user.company.name}</p>
            <p>Address: {props.user.address.street}, {props.user.address.city}, {props.user.address.zipcode}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() =>  setState((prev)=>({
              ...prev,
              openCard:false
            }))
          }>Cancel</Button>
          <Button
            content="Delete User"
            labelPosition='right'
            icon='checkmark'
            onClick={() => {
              deleteUser(props.identity);
            }}
            positive
          />
        </Modal.Actions>
      </Modal>

      <CardExampleCard props={props.user} showModal={() =>  setState((prev)=>({
             ...prev,
              openCard:true
            }))
          } onClick={() =>  setState((prev)=>({
            ...prev,
            openModal:true
          }))
        } />
    </>
  );
}

export default ModalExampleModal;
