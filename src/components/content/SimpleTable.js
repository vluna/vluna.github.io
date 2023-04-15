import React from 'react'
import styled from 'styled-components';
import Badge from './Badge';

const Table = styled.table`
  width: 100%;
  border: .1em solid;
  margin: 0 auto;
  border-collapse: collapse;
`

const Tr = styled.tr`
  width: 100%;
`

const Th = styled.th`
  padding: .75em;
  border: .1em solid;
`
const Td = styled.td`
  padding: .75em;
  border: .1em solid;
`

const BadgeContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const SimpleTable = ({ id, headers, data }) => {
  const hedersRender = headers.map((header, idx) =>
    <Th key={`${id}-header-${idx}`}>{header}</Th>
  )
  
  const dataRender = data.map((el, idx) =>
    <Tr key={`${id}-body-${idx}`}>
      <Td>{el.title}</Td>
      <Td style={{textAlign: "center"}}>{el.yrs_experience}</Td>
      <Td>
        <BadgeContainer>{el.frameworks.map((item, jdx) =>
        <Badge
        key={`${id}-badge-${jdx}`}
        content={item}
        />
      )}</BadgeContainer></Td>
    </Tr>
  )

  return (
    <Table>
      <thead>
        <tr>
          {hedersRender}
        </tr>
      </thead>
      <tbody>
        {dataRender}
      </tbody>
    </Table>
  )
}

export { SimpleTable }
