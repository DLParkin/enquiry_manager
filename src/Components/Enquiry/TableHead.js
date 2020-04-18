import React from 'react'
import { Table } from 'semantic-ui-react';

export const TableHead = () => {
  return (
    <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Id</Table.HeaderCell>
      <Table.HeaderCell>Type</Table.HeaderCell>
      <Table.HeaderCell>Enq Date</Table.HeaderCell>
      <Table.HeaderCell>Due Date</Table.HeaderCell>
      <Table.HeaderCell>Brief</Table.HeaderCell>
      <Table.HeaderCell>Action</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  )
}
