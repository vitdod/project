import { memo, SVGProps } from 'react'


const TelegramLogo = (props: SVGProps<SVGSVGElement>) => (
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3793 19.4344C9.9043 19.3077 9.86475 18.649 10.3212 18.4664L28.8319 11.0621C29.4358 10.8205 30.0767 11.3179 29.9925 11.9629L27.8421 28.4498C27.7521 29.1398 26.9172 29.4364 26.4121 28.9578L20.1221 22.9989C19.7936 22.6877 19.7659 22.174 20.0589 21.8292L25.4867 15.4437C25.6807 15.2153 25.391 14.8971 25.1455 15.0689L16.8808 20.8542C16.6749 20.9984 16.4159 21.0442 16.1731 20.9794L10.3793 19.4344Z" fill="white" fillOpacity="0.7"/>
</svg>


)

const Memo = memo(TelegramLogo)
export { Memo as TelegramLogo }
