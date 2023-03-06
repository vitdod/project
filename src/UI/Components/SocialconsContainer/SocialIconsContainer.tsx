import { InstagramLogo } from '../Icons/InstagramLogo'
import { TelegramLogo } from '../Icons/TelegramLogo'
import { YoutubeLogo } from '../Icons/YoutubeLogo'
import { Icon } from '../Reusable/Icon/Icon'

type SocialIconsWrapperType = {
  className: string
}
export const SocialIconsWrapper = ({ className }: SocialIconsWrapperType) => {
  return (
    <div className={className}>
      <Icon Icon={YoutubeLogo} />
      <Icon Icon={InstagramLogo} />
      <Icon Icon={TelegramLogo} />
    </div>
  )
}
