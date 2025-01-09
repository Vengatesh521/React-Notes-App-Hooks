import {ItemContainer, ItemTitle, ItemNote} from './styledComponents'

const NoteItem = ({item}) => (
  <ItemContainer>
    <ItemTitle>{item.title}</ItemTitle>
    <ItemNote>{item.text}</ItemNote>
  </ItemContainer>
)

export default NoteItem
