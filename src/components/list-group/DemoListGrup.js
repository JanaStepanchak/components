import React from 'react';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';

const DemoListGrup = () => (
  <>
    <h2><span>list active and disabled</span></h2>
    <ListGroup>
      <ListGroupItem active>List item 1</ListGroupItem>
      <ListGroupItem>List item 2</ListGroupItem>
      <ListGroupItem disabled>List item 3</ListGroupItem>
      <ListGroupItem>List item 4</ListGroupItem>
    </ListGroup>
  </>
);

export default DemoListGrup;