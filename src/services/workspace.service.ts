import axiosInstance from '../api/axios-instance'
import IWorkspace from '../types/workspace.interface'

class WorkspaceService {
  public async getWorkspace(id: string): Promise<IWorkspace> {
    try {
      const workspace: IWorkspace = await axiosInstance.get(`/workspaces/${id}`)
      return workspace
    } catch (error) {
      throw new Error(error as string)
    }
  }
  public async updateWorkspace<T>(payload: T & { id: string }): Promise<IWorkspace> {
    try {
      const updatedWorkspace: IWorkspace = await axiosInstance.put(
        `/workspaces/${payload.id}`,
        payload,
      )
      return updatedWorkspace
    } catch (error) {
      throw new Error(error as string)
    }
  }
}

export default new WorkspaceService()
