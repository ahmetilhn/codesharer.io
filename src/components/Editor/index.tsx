import CodeEditor from './CodeMirror'
import Header from './Header'
import { StyledWrapper } from './styles'

const Editor: React.FC = () => {
  return (
    <StyledWrapper id='editor'>
      <Header />
      <CodeEditor />
    </StyledWrapper>
  )
}

export default Editor
