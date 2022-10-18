import React from 'react'
import styled from 'styled-components';
import Badge from './Badge';

const Table = styled.table`
  width: 100%;
`
const Tr = styled.tr``
const Th = styled.th`
  text-align: left;
  padding: 15px;
`
const Td = styled.td`
  padding: 15px;
`


const SimpleTable = ({ headers, data }) => {
  const hedersRender = headers.map((header) =>
    <Th>{header}</Th>
  )
  
  const dataRender = data.map((el) =>
    <Tr>
      <Td>{el.title}</Td>
      <Td>{el.yrs_experience}</Td>
      <Td>{el.frameworks.map((item) =>
        <Badge
          content={item}
        />
      )}</Td>
    </Tr>
  )

  return (
    <Table>
      <thead>
        {hedersRender}
      </thead>
      <tbody>
        {dataRender}
      </tbody>
    </Table>
  )
}

export { SimpleTable }
