import create from 'zustand'
import IWorkspace from '../types/workspace.interface'
type StoreType = {
  workspace: IWorkspace
  setWorkspace: (workspace: IWorkspace) => void
  setFileName: (fileName: string) => void
  setCode: (code: string) => void
}
const initialState = {
  workspace: {
    code: '',
    // eslint-disable-next-line camelcase
    file_name: '',
    language: {
      name: '',
      value: '',
      extension: '',
    },
  } as IWorkspace,
}
const store = create<StoreType>((set) => ({
  ...initialState,
  setWorkspace: (workspace: IWorkspace) => set({ workspace }),
  setFileName: (fileName: string) => {
    set((state) => {
      // eslint-disable-next-line camelcase
      state.workspace.file_name = fileName
      return state
    })
  },
  setCode: (code: string) => {
    set((state) => {
      state.workspace.code = code
      return state
    })
  },
}))

export default store
