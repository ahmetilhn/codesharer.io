/* eslint-disable camelcase */
import Logo from '../../Icons/Logo'
import { StyledButtonsArea, StyledLogoAndTitle, StyledWrapper } from './styles'
import IconButton from '../../Buttons/IconButton'
import EyeIcon from '../../Icons/EyeIcon'
import CopyIcon from '../../Icons/CopyIcon'
import { toast } from 'react-hot-toast'
import FullscreenIcon from '../../Icons/FullscreenIcon'
import { closeFullScreen, elementToFullscreen } from '../../../utils/full-screen.util'
import Input from '../../Input'
import DownloadIcon from '../../Icons/DownloadIcon'
import { downloadFile } from '../../../utils/file-downloader.util'
import { editorStore } from '../../../store'
import workspaceService from '../../../services/workspace.service'
import { useParams } from 'react-router-dom'
import { copyToClipboard } from '../../../utils/copy.util'
import { useState } from 'react'
let fetchTimeout: ReturnType<typeof setTimeout>
const Header: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const { id } = useParams()
  const { file_name, code, language, view_count } = editorStore((state) => state.workspace)
  const setFileName = editorStore((state) => state.setFileName)
  const copyHandler = async () => {
    const isCopied = await copyToClipboard(code)
    if (!isCopied) {
      toast.error('Copy not supported!')
      return
    }
    toast.success('Copied to clipboard!')
  }
  const eyeHandler = () => {
    toast('2 people are looking at these codes right now')
  }
  const fullscreenHandler = () => {
    const elem = document.getElementById('editor')
    if (!elem) return
    if (!isFullScreen) {
      elementToFullscreen(elem)
      setIsFullScreen(true)
    } else {
      setIsFullScreen(false)
      closeFullScreen()
    }
  }
  const downloadHandler = () => {
    const isDownloaded = downloadFile(file_name + '.' + language.extension, code)
    if (!isDownloaded) {
      toast.error('Download is not supported!')
    }
    toast.success(`${file_name} is downloaded!`)
  }
  const updateFileName = async (name: string) => {
    if (!id) return
    type Payload = {
      id: string
      file_name: string
    }
    try {
      const res = await workspaceService.updateWorkspace<Payload>({
        id,
        file_name: name,
      })
      if (res) {
        toast.success('File name updated!')
      }
    } catch (error) {
      console.error(error)
    }
  }
  const fileNameChangeHandler = async (name: string) => {
    clearTimeout(fetchTimeout)
    setFileName(name)
    fetchTimeout = setTimeout(async () => {
      await updateFileName(name)
    }, 2000)
  }
  return (
    <StyledWrapper>
      <StyledLogoAndTitle>
        <Logo />
        <Input
          value={file_name}
          onChange={(e) => fileNameChangeHandler(e.target.value)}
          customStyle='margin-left: 10px; border:none!important; font-size: 24px; font-weight: 700; color: inherit;'
        />
      </StyledLogoAndTitle>
      <StyledButtonsArea>
        <IconButton btnType='PRIMARY' onClick={eyeHandler}>
          <EyeIcon /> <span className='text'>{view_count}</span>
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
