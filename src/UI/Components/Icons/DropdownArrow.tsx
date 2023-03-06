import { memo, SVGProps } from 'react'

const DropdownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.0003 9.40002L0.600391 2.00003L2.0003 0.600028L8.0003 6.60003L14.0003 0.600028L15.4004 2.00003L8.0003 9.40002Z"
      fill="white"
      fillOpacity="0.7"
    />
  </svg>
)

const Memo = memo(DropdownArrow)
export { Memo as DropdownArrow }
