import create from 'zustand'
import { jsDummy } from '../data/dummy-code'
type StoreType = {
  code: string
  setCode: (code: string) => void
}
const store = create<StoreType>((set) => ({
  code: jsDummy,
  setCode: (code: string) => set({ code }),
}))

export default store
