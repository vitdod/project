import clsx from 'clsx'
import * as styles from './Icon.css'

export type SvgIcon = React.MemoExoticComponent<(props: React.SVGProps<SVGSVGElement>) => JSX.Element>
export type SvgIconProps = Parameters<SvgIcon>[0]

export type IconProps = SvgIconProps & { Icon: SvgIcon}
export const Icon = ({ className, Icon, ...iconProps }: IconProps) => {
  return <Icon className={clsx(styles.fixedRatio, className)} {...iconProps} />
}

Icon.displayName = 'Icon'