import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fefefe;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const ItemTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`

export const ItemNote = styled.p`
  font-size: 1rem;
  color: #666;
`
