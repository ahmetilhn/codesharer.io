import { useEffect } from 'react'
import EditorContainer from '../../containers/Editor'
import { StyledWrapper } from './styles'
import Editor from '../../components/Editor'
import { editorStore } from '../../store'
import WorkspaceService from '../../services/workspace.service'
import { useParams } from 'react-router-dom'
import IWorkspace from '../../types/workspace.interface'
import { toast } from 'react-hot-toast'
const EditorPage: React.FC = () => {
  const setWorkspace = editorStore((state) => state.setWorkspace)
  const { id } = useParams()
  const getData = async () => {
    if (!id) {
      return
    }
    try {
      const workspace: IWorkspace = await WorkspaceService.getWorkspace(id)
      setWorkspace(workspace)
    } catch (error) {
      toast.error('Error while fetching workspace')
    }
  }
  useEffect(() => {
    getData()
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
