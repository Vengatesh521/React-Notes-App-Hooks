import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`

export const Head = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Bree Serif', serif;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 500px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
`

export const Title = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  font-size: 1rem;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #007bff;
  }
`

export const Note = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: none;
  font-size: 1rem;
  outline: none;
  resize: none;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #007bff;
  }
`

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

export const NoteList = styled.ul`
  width: 80%;
  max-width: 500px;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const EmptyImage = styled.img`
  width: 150px;
  margin-bottom: 10px;
`

export const EmptyStateHeading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`

export const EmptyStateParagraph = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 5px;
`
