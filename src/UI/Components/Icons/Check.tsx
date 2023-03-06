import { memo, SVGProps } from 'react'

const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.9996 19.3999L19.4995 5.99989L17.7995 4.8999L10.5995 16.1999L5.99961 11.5999L4.59961 12.9999L10.9996 19.3999Z"
      fill="#B72E2E"
    />
  </svg>
)

const Memo = memo(Check)
export { Memo as Check }
