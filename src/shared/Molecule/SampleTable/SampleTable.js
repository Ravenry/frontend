import React from "react";
import { Button, Table } from "../../Atoms";

export default function SampleTable() {
  return (
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
  );
}
