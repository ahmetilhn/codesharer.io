import Logo from '../../Icons/Logo'
import { StyledButtonsArea, StyledWrapper } from './styles'
import IconButton from '../../Buttons/IconButton'
import UserIcon from '../../Icons/UserIcon'
import CopyIcon from '../../Icons/CopyIcon'
import { toast } from 'react-hot-toast'
const Header: React.FC = () => {
  const copyHandler = () => {
    toast('Copied to clipboard!')
  }
  return (
    <StyledWrapper>
      <Logo />
      <StyledButtonsArea>
        <IconButton btnType='PRIMARY'>
          <UserIcon /> <span className='text'>2</span>
        </IconButton>
        <IconButton btnType='PRIMARY' onClick={copyHandler}>
          <CopyIcon />
        </IconButton>
      </StyledButtonsArea>
    </StyledWrapper>
  )
}
export default Header
