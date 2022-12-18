import { useEffect } from 'react'
import EditorContainer from '../../containers/Editor'
import { StyledWrapper } from './styles'
import Editor from '../../components/Editor'
import { editorStore } from '../../store'
const EditorPage: React.FC = () => {
  const code = editorStore((state) => state.code)
  useEffect(() => {
    console.log('asd')
  }, [])

  return (
    <EditorContainer>
      <StyledWrapper>
        <Editor />
      </StyledWrapper>
    </EditorContainer>
  )
}

export default EditorPage
