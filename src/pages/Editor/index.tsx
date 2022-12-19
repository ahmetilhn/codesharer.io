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
  const { id } = useParams()
  const setWorkspace = editorStore((state) => state.setWorkspace)
  // eslint-disable-next-line camelcase
  const viewCount = editorStore((state) => state.workspace.view_count)
  const getData = async () => {
    if (!id) {
      return
    }
    try {
      const workspace: IWorkspace = await WorkspaceService.getWorkspace(id)
      if (workspace) {
        setWorkspace(workspace)
        incrementViewCount(workspace.view_count + 1)
        return
      }
      toast.error('Workspace not found 😞')
    } catch (error) {
      toast.error('Error while fetching workspace')
    }
  }
  const incrementViewCount = async (count: number) => {
    if (!id) return
    type Payload = {
      id: string
      view_count: number
    }
    try {
      await WorkspaceService.updateWorkspace<Payload>({
        id,
        // eslint-disable-next-line camelcase
        view_count: count,
      })
    } catch (error) {
      console.error(error)
    }
  }
  const init = async () => {
    await getData()
  }
  useEffect(() => {
    init()
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
