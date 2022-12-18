import axiosInstance from '../api/axios-instance'
import IWorkspace from '../types/workspace.interface'

class WorkspaceService {
  public async getWorkspace(): Promise<Array<IWorkspace>> {
    try {
      const workspaces: Array<IWorkspace> = await axiosInstance.get('/workspaces')
      return workspaces
    } catch (error) {
      throw new Error(error as string)
    }
  }
}

export default new WorkspaceService()
