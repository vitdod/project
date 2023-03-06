import { memo, SVGProps } from 'react'

const Open = (props: SVGProps<SVGSVGElement>) => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1023_9724)">
      <path
        d="M8.49634 0V1.14124H1.64784V14.85H15.3539V8.00545H16.5C16.5 8.04366 16.5 8.07848 16.5 8.1133C16.5 10.5297 16.5 12.9461 16.5 15.3627C16.5 15.7713 16.2723 15.9998 15.8657 16C10.9526 16 6.03922 16 1.12606 16C0.733569 16 0.500179 15.7659 0.500179 15.372C0.5 10.4527 0.5 5.53369 0.5 0.614457C0.5 0.239283 0.738569 0 1.11267 0C3.54104 0 5.9694 0 8.39777 0C8.42741 0 8.4567 0 8.49634 0Z"
        fill="white"
      />
      <path
        d="M14.522 1.14052H10.7899V0.0064285H16.4943V5.7094H15.3614V1.96659C13.2075 4.12049 11.0636 6.26439 8.92312 8.40491C8.64437 8.12455 8.38063 7.8592 8.11563 7.59277C10.2515 5.4569 12.3958 3.31264 14.5398 1.16856L14.522 1.14052Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1023_9724">
        <rect width="16" height="16" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
)

const Memo = memo(Open)
export { Memo as Open }
