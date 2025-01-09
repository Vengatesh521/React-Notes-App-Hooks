import {useState} from 'react'
import NoteItem from '../NoteItem'
import {
  Container,
  Title,
  Head,
  Box,
  Note,
  Button,
  NoteList,
  EmptyImage,
  EmptyStateHeading,
  EmptyStateParagraph,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  const handleTitle = event => setTitle(event.target.value)
  const handleNote = event => setText(event.target.value)

  const handleAddNote = event => {
    event.preventDefault()
    if (title && text) {
      setList(prevList => {
        return [...prevList, {title, text}]
      })
      setTitle('')
      setText('')
    }
  }

  return (
    <Container>
      <Head>Notes</Head>
      <Box>
        <form>
          <Title
            value={title}
            onChange={handleTitle}
            placeholder="Title"
            type="text"
          />
          <Note
            value={text}
            onChange={handleNote}
            placeholder="Take a Note..."
            type="text"
          />
          <Button onClick={handleAddNote} type="submit">
            Add
          </Button>
        </form>
      </Box>
      {list.length === 0 ? (
        <>
          <EmptyImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
            role="img"
          />
          <EmptyStateHeading>No Notes Yet</EmptyStateHeading>
          <EmptyStateParagraph>
            Notes you add will appear here
          </EmptyStateParagraph>
        </>
      ) : (
        <NoteList role="list">
          {list.map(e => (
            <li role="listitem" key={e.title}>
              <NoteItem item={e} />
            </li>
          ))}
        </NoteList>
      )}
    </Container>
  )
}

export default Notes
