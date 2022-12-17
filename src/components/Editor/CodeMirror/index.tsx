import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { StyledProvider } from './styles'
import { editorStore } from '../../../store'
const CodeEditor: React.FC = () => {
  const code = editorStore((state) => state.code)
  const setCode = editorStore((state) => state.setCode)
  return (
    <StyledProvider>
      <CodeMirror
        value={code}
        maxHeight='100%'
        height='100%'
        theme={dracula}
        extensions={[javascript({ jsx: true })]}
        onChange={(e) => setCode(e)}
      />
    </StyledProvider>
  )
}

export default CodeEditor
