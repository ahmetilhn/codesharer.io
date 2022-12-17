import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { CodeMirrorStyles, StyledProvider } from './styles'
import { jsVal } from '../../../data/dummy-code'

const CodeEditor: React.FC = () => {
  return (
    <StyledProvider>
      <CodeMirror
        value={jsVal}
        maxHeight='90vh'
        minHeight='90vh'
        style={CodeMirrorStyles}
        theme={dracula}
        extensions={[javascript({ jsx: true })]}
        onChange={(e) => console.log(e)}
      />
    </StyledProvider>
  )
}

export default CodeEditor
