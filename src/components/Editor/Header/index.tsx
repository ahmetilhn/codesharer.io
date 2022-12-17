import Logo from '../../Icons/Logo'
import { StyledButtonsArea, StyledLogoAndTitle, StyledWrapper } from './styles'
import IconButton from '../../Buttons/IconButton'
import UserIcon from '../../Icons/UserIcon'
import CopyIcon from '../../Icons/CopyIcon'
import { toast } from 'react-hot-toast'
import FullscreenIcon from '../../Icons/FullscreenIcon'
import { elementToFullscreen } from '../../../utils/element-fullscreen'
import Input from '../../Input'
import DownloadIcon from '../../Icons/DownloadIcon'
import { downloadFile } from '../../../utils/file-downloader'
import { editorStore } from '../../../store'
const Header: React.FC = () => {
  const fileName = editorStore((state) => state.fileName)
  const setFileName = editorStore((state) => state.setFileName)
  const code = editorStore((state) => state.code)
  const copyHandler = () => {
    toast.success('Copied to clipboard!')
  }
  const userHandler = () => {
    toast('2 people are looking at these codes right now')
  }
  const fullscreenHandler = () => {
    const elem = document.getElementById('editor')
    if (!elem) return
    const isFullscreen = elementToFullscreen(elem)
    if (!isFullscreen) {
      toast.error('Fullscreen is not supported!')
    }
  }
  const downloadHandler = () => {
    const isDownloaded = downloadFile(fileName, code)
    if (!isDownloaded) {
      toast.error('Download is not supported!')
    }
    toast.success(`${fileName} is downloaded!`)
  }
  return (
    <StyledWrapper>
      <StyledLogoAndTitle>
        <Logo />
        <Input
          value={fileName}
          onChange={(e) => {
            setFileName(e.target.value)
          }}
          customStyle='margin-left: 10px; border:none!important; font-size: 24px; font-weight: 700; color: inherit;'
        />
      </StyledLogoAndTitle>
      <StyledButtonsArea>
        <IconButton btnType='PRIMARY' onClick={userHandler}>
          <UserIcon /> <span className='text'>2</span>
        </IconButton>
        <IconButton btnType='PRIMARY' onClick={copyHandler}>
          <CopyIcon />
        </IconButton>
        <IconButton btnType='SECONDARY' onClick={downloadHandler}>
          <DownloadIcon />
        </IconButton>
        <IconButton btnType='PRIMARY' onClick={fullscreenHandler}>
          <FullscreenIcon />
        </IconButton>
      </StyledButtonsArea>
    </StyledWrapper>
  )
}
export default Header
