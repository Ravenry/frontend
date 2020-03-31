import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Table } from "./shared/Atoms";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          <Button primary>Learn React </Button>
        </a>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>Email</Table.Cell>
              <Table.Cell>Status</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Rian</Table.Cell>
              <Table.Cell>rian@theravenry.com</Table.Cell>
              <Table.Cell>active</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Rian</Table.Cell>
              <Table.Cell>rian@theravenry.com</Table.Cell>
              <Table.Cell>active</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Rian</Table.Cell>
              <Table.Cell>rian@theravenry.com</Table.Cell>
              <Table.Cell>active</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </header>
    </div>
  );
}

export default App;
