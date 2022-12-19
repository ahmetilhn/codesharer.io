import LanguageType from './language.type'

interface IWorkspace {
  _id: string
  code: string
  file_name: string
  language: LanguageType
  view_count: number
  created_at: string
  updated_at: string
}
export default IWorkspace
