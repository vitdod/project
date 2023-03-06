import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { buttonWrapper, headerButton } from '../../Blocks/HeaderBlock/HeaderBlock.css'
import { DropdownArrow } from '../../Icons/DropdownArrow'
import { TelegramLogo } from '../../Icons/TelegramLogo'
import Button from './Button'

type ButtonWrapperProps = {
  children: ReactNode
}

export const ButtonController = () => {
  const router = useRouter()
  const path = router.asPath
  const { t } = useTranslation(['common'], { useSuspense: false })
  const handleClickScroll = () => {
    const element = document.getElementById('requisiteBlock')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  if (path === '/')
    return (
      <>
        <ButtonWrapper>
          <Link className={headerButton({})} href="/join">
            <Button className={headerButton({})} tone="red" text={t('join')} />
          </Link>
          <Link className={headerButton({})} href="/help">
            <Button className={headerButton({})} tone="ordinary" text={t('donate')} />
          </Link>
        </ButtonWrapper>
      </>
    )
  if (path === '/join')
    return (
      <Link className={headerButton({ type: 'single' })} href="https://t.me/rusvolcorps" target="_blank">
        <Button
          Icon={<TelegramLogo />}
          className={headerButton({ type: 'single' })}
          tone="red"
          text={t('join_block.send')}
        />
      </Link>
    )
  if (path === '/help')
    return (
      <Button
        Icon={<DropdownArrow />}
        className={headerButton({ type: 'single' })}
        tone="red"
        text={t('help_block.to_reqs')}
        onClick={handleClickScroll}
      />
    )
  else {
    return null
  }
}
const ButtonWrapper = ({ children }: ButtonWrapperProps) => {
  return <div className={buttonWrapper}>{children}</div>
}
