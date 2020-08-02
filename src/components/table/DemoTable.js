import React from 'react';
import Table from './Table';
import Row from './Row';
import Cell from './Cell';

class DemoTable extends React.Component {

  state = {
    rows: []
  };

  componentDidMount = () => {
    fetch('http://www.json-generator.com/api/json/get/ceBGLbXRrC?indent=2')
    .then( row => row.json() )
    .then( row => {
        this.setState({
          rows: row
        })
    })
  };

  render() {
 
    const { rows } = this.state;

  return(
    <>
    <Table>
    <Row head="head">
      <Cell head type="index" background="red">index</Cell>
      <Cell head  headtype="company">company</Cell>
      <Cell head type="balance">balance</Cell>      
      <Cell head type="money" currency="$">money</Cell>
    </Row>
    {rows.map(row => (
      <Row key={row.index}>
        <Cell>{row.index}</Cell>
        <Cell>{row.company}</Cell>
        <Cell>{row.balance}</Cell>
        <Cell>"$"</Cell>
      </Row>
      ))}
    </Table>
    </>
  )
}
};

export default DemoTable;