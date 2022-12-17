import create from 'zustand'
import { jsDummy } from '../data/dummy-code'
type StoreType = {
  code: string
  fileName: string
  setCode: (code: string) => void
  setFileName: (fileName: string) => void
}
const store = create<StoreType>((set) => ({
  code: jsDummy.code,
  fileName: jsDummy.fileName,
  setCode: (code: string) => set({ code }),
  setFileName: (fileName: string) => set({ fileName }),
}))

export default store
