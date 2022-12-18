import LanguageType from './language.type'

interface IWorkspace {
  code: string
  file_name: string
  language: LanguageType
  view_count?: number
}
export default IWorkspace
