import EditorContainer from '../../containers/Editor'
import { StyledWrapper } from './styles'
import Editor from '../../components/Editor'
const EditorPage: React.FC = () => {
  return (
    <EditorContainer>
      <StyledWrapper>
        <Editor />
      </StyledWrapper>
    </EditorContainer>
  )
}

export default EditorPage
