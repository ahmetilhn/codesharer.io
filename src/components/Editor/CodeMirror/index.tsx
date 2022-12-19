import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { StyledProvider } from './styles'
import { editorStore } from '../../../store'
import { useParams } from 'react-router-dom'
import workspaceService from '../../../services/workspace.service'
import { toast } from 'react-hot-toast'
let fetchTimeout: ReturnType<typeof setTimeout>
const CodeEditor: React.FC = () => {
  const { id } = useParams()
  const { code } = editorStore((state) => state.workspace)
  const setCode = editorStore((state) => state.setCode)
  const updateCode = async (code: string) => {
    if (!id) return
    type Payload = {
      id: string
      code: string
    }
    try {
      const res = await workspaceService.updateWorkspace<Payload>({
        id,
        code,
      })
      if (res) {
        toast.success('Code updated!')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const codeChangeHandler = (val: string) => {
    if (val === code) return
    clearTimeout(fetchTimeout)
    setCode(val)
    fetchTimeout = setTimeout(async () => {
      await updateCode(val)
    }, 4000)
  }
  return (
    <StyledProvider>
      <CodeMirror
        value={code}
        maxHeight='100%'
        height='100%'
        theme={dracula}
        extensions={[javascript({ jsx: true })]}
        onChange={(e) => codeChangeHandler(e)}
      />
    </StyledProvider>
  )
}

export default CodeEditor
