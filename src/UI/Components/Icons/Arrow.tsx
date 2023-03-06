import { memo, SVGProps } from 'react'

const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.40015 7.9996L2.00014 15.3996L0.600116 13.9996L6.60013 7.9996L0.600141 1.99961L2.00014 0.599609L9.40015 7.9996Z"
      fill="white"
      fillOpacity="0.7"
    />
  </svg>
)

const Memo = memo(Arrow)
export { Memo as Arrow }
