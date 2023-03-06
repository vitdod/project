import { memo, SVGProps } from 'react'


const YoutubeLogo = (props: SVGProps<SVGSVGElement>) => (
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M29.1433 14.2238C28.0567 13 25.5917 13 20 13C14.4083 13 11.9433 13 10.8567 14.2238C10 15.1887 10 16.9142 10 20C10 23.0858 10 24.8113 10.8567 25.7762C11.9433 27 14.4083 27 20 27C25.5917 27 28.0567 27 29.1433 25.7762C30 24.8113 30 23.0858 30 20C30 16.9142 30 15.1887 29.1433 14.2238ZM24 20L18 16.5V23.5L24 20Z" fill="white" fillOpacity="0.7"/>
</svg>
)

const Memo = memo(YoutubeLogo)
export { Memo as YoutubeLogo }
