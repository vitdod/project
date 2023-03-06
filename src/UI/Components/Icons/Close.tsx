import { memo, SVGProps } from 'react'

const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.59963 8.00009L0.599609 14.0001L1.99963 15.4001L7.99963 9.40009L13.9996 15.4001L15.3997 14.0001L9.39964 8.00009L15.3996 2.00009L13.9996 0.600098L7.99963 6.60009L1.99963 0.600098L0.599634 2.00009L6.59963 8.00009Z"
      fill="white"
      fillOpacity="0.7"
    />
  </svg>
)

const Memo = memo(Close)
export { Memo as Close }
