import { memo, SVGProps } from 'react'

const Logo = ({ fillOpacity }: SVGProps<SVGSVGElement>) => (
  <svg width="280" height="64" viewBox="0 0 280 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M45.04 28V16.8H49.6C50.272 16.8 50.832 17.0187 51.28 17.456C51.7387 17.8933 51.968 18.448 51.968 19.12V21.2C51.968 21.872 51.7387 22.4267 51.28 22.864C50.832 23.3013 50.272 23.52 49.6 23.52H47.408V28H45.04ZM49.424 21.28C49.5093 21.28 49.5787 21.2533 49.632 21.2C49.696 21.1467 49.728 21.072 49.728 20.976V19.344C49.728 19.248 49.696 19.1733 49.632 19.12C49.5787 19.0667 49.5093 19.04 49.424 19.04H47.328V21.28H49.424ZM57.9571 16.8H60.1971V25.76C60.1971 26.432 59.9731 26.9867 59.5251 27.424C59.0771 27.8613 58.5171 28.08 57.8451 28.08H55.7011C55.0291 28.08 54.4691 27.8613 54.0211 27.424C53.5731 26.9867 53.3491 26.432 53.3491 25.76V24.912H55.6211V25.52C55.6211 25.616 55.6478 25.696 55.7011 25.76C55.7651 25.8133 55.8398 25.84 55.9251 25.84H57.6531C57.8558 25.84 57.9571 25.7333 57.9571 25.52V23.52H55.6851C55.0131 23.52 54.4531 23.3013 54.0051 22.864C53.5571 22.416 53.3331 21.856 53.3331 21.184V16.8H55.7011V20.976C55.7011 21.072 55.7278 21.1467 55.7811 21.2C55.8345 21.2533 55.9038 21.28 55.9891 21.28H57.9571V16.8ZM64.4043 28.08C63.7216 28.08 63.1563 27.8613 62.7083 27.424C62.2603 26.9867 62.0363 26.432 62.0363 25.76V19.04C62.0363 18.368 62.2603 17.8133 62.7083 17.376C63.1563 16.9387 63.7216 16.72 64.4043 16.72H66.5963C67.2789 16.72 67.8389 16.9387 68.2763 17.376C68.7243 17.8133 68.9483 18.368 68.9483 19.04V19.888H66.6603V19.264C66.6603 19.168 66.6283 19.0933 66.5643 19.04C66.5109 18.9867 66.4363 18.96 66.3403 18.96H64.6443C64.4416 18.96 64.3403 19.0613 64.3403 19.264V25.536C64.3403 25.7387 64.4416 25.84 64.6443 25.84H66.3403C66.4363 25.84 66.5109 25.8133 66.5643 25.76C66.6283 25.7067 66.6603 25.632 66.6603 25.536V24.912H68.9483V25.76C68.9483 26.432 68.7243 26.9867 68.2763 27.424C67.8389 27.8613 67.2789 28.08 66.5963 28.08H64.4043ZM72.9199 28.08C72.2372 28.08 71.6719 27.8613 71.2239 27.424C70.7759 26.9867 70.5519 26.432 70.5519 25.76V19.04C70.5519 18.368 70.7759 17.8133 71.2239 17.376C71.6719 16.9387 72.2372 16.72 72.9199 16.72H75.1119C75.7945 16.72 76.3545 16.9387 76.7919 17.376C77.2399 17.8133 77.4639 18.368 77.4639 19.04V19.888H75.1759V19.264C75.1759 19.168 75.1439 19.0933 75.0799 19.04C75.0265 18.9867 74.9519 18.96 74.8559 18.96H73.1599C72.9572 18.96 72.8559 19.0613 72.8559 19.264V25.536C72.8559 25.7387 72.9572 25.84 73.1599 25.84H74.8559C74.9519 25.84 75.0265 25.8133 75.0799 25.76C75.1439 25.7067 75.1759 25.632 75.1759 25.536V24.912H77.4639V25.76C77.4639 26.432 77.2399 26.9867 76.7919 27.424C76.3545 27.8613 75.7945 28.08 75.1119 28.08H72.9199ZM86.6355 16.784L84.8915 22.384L86.6515 28.016H84.1875L82.8275 23.584H81.5955V28H79.2275V16.8H81.5955V21.216H82.8115L84.1875 16.784H86.6355ZM94.9208 16.8V28H92.7128V22.096H92.5848L90.3288 28H88.0088V16.8H90.2168V22.736H90.3448L92.6008 16.8H94.9208ZM103.905 16.8V28H101.697V22.096H101.569L99.3131 28H96.9931V16.8H99.2011V22.736H99.3291L101.585 16.8H103.905ZM103.121 15.488H97.7771V13.472H103.121V15.488ZM52.08 45.76H53.296L53.28 48H44.24V45.76H44.96L46.256 36.8H52.08V45.76ZM48.32 39.04L47.36 45.76H49.696V39.04H48.32ZM56.8414 48.08C56.1694 48.08 55.6094 47.8613 55.1614 47.424C54.7134 46.9867 54.4894 46.432 54.4894 45.76V39.04C54.4894 38.368 54.7134 37.8133 55.1614 37.376C55.6094 36.9387 56.1694 36.72 56.8414 36.72H59.0334C59.7054 36.72 60.2654 36.9387 60.7134 37.376C61.1614 37.8133 61.3854 38.368 61.3854 39.04V45.76C61.3854 46.432 61.1614 46.9867 60.7134 47.424C60.2654 47.8613 59.7054 48.08 59.0334 48.08H56.8414ZM58.7934 45.84C58.996 45.84 59.0974 45.7387 59.0974 45.536V39.264C59.0974 39.0613 58.996 38.96 58.7934 38.96H57.0814C56.996 38.96 56.9267 38.9867 56.8734 39.04C56.82 39.0933 56.7934 39.168 56.7934 39.264V45.536C56.7934 45.632 56.82 45.7067 56.8734 45.76C56.9267 45.8133 56.996 45.84 57.0814 45.84H58.7934ZM63.3056 48V36.8H69.8336V39.04H65.5456V41.28H67.9296C68.335 41.28 68.7083 41.3813 69.0496 41.584C69.391 41.7867 69.663 42.0587 69.8656 42.4C70.0683 42.7413 70.1696 43.1147 70.1696 43.52V45.76C70.1696 46.1653 70.0683 46.5387 69.8656 46.88C69.663 47.2213 69.3803 47.4933 69.0176 47.696C68.6656 47.8987 68.271 48 67.8336 48H63.3056ZM67.6256 45.76C67.8283 45.76 67.9296 45.6587 67.9296 45.456V43.824C67.9296 43.6213 67.8283 43.52 67.6256 43.52H65.5456V45.76H67.6256ZM72.0869 48V36.8H76.6469C77.3189 36.8 77.8789 37.0187 78.3269 37.456C78.7855 37.8933 79.0149 38.448 79.0149 39.12V41.2C79.0149 41.872 78.7855 42.4267 78.3269 42.864C77.8789 43.3013 77.3189 43.52 76.6469 43.52H74.4549V48H72.0869ZM76.4709 41.28C76.5562 41.28 76.6255 41.2533 76.6789 41.2C76.7429 41.1467 76.7749 41.072 76.7749 40.976V39.344C76.7749 39.248 76.7429 39.1733 76.6789 39.12C76.6255 39.0667 76.5562 39.04 76.4709 39.04H74.3749V41.28H76.4709ZM82.732 48.08C82.06 48.08 81.5 47.8613 81.052 47.424C80.604 46.9867 80.38 46.432 80.38 45.76V39.04C80.38 38.368 80.604 37.8133 81.052 37.376C81.5 36.9387 82.06 36.72 82.732 36.72H84.924C85.596 36.72 86.156 36.9387 86.604 37.376C87.052 37.8133 87.276 38.368 87.276 39.04V45.76C87.276 46.432 87.052 46.9867 86.604 47.424C86.156 47.8613 85.596 48.08 84.924 48.08H82.732ZM84.684 45.84C84.8867 45.84 84.988 45.7387 84.988 45.536V39.264C84.988 39.0613 84.8867 38.96 84.684 38.96H82.972C82.8867 38.96 82.8173 38.9867 82.764 39.04C82.7107 39.0933 82.684 39.168 82.684 39.264V45.536C82.684 45.632 82.7107 45.7067 82.764 45.76C82.8173 45.8133 82.8867 45.84 82.972 45.84H84.684ZM89.1963 48V36.8H93.7083C94.1456 36.8 94.5403 36.9013 94.8923 37.104C95.2549 37.296 95.5376 37.5733 95.7403 37.936C95.9536 38.288 96.0603 38.6827 96.0603 39.12V40.528C96.0603 40.912 95.9696 41.264 95.7883 41.584C95.6176 41.904 95.3829 42.1493 95.0843 42.32V42.48C95.3829 42.6507 95.6176 42.896 95.7883 43.216C95.9696 43.536 96.0603 43.888 96.0603 44.272V45.68C96.0603 46.352 95.8309 46.9067 95.3723 47.344C94.9243 47.7813 94.3643 48 93.6923 48H89.1963ZM93.5163 41.28C93.6016 41.28 93.6709 41.2533 93.7243 41.2C93.7883 41.1467 93.8203 41.072 93.8203 40.976V39.344C93.8203 39.248 93.7883 39.1733 93.7243 39.12C93.6709 39.0667 93.6016 39.04 93.5163 39.04H91.4363V41.28H93.5163ZM93.5163 45.76C93.6016 45.76 93.6709 45.7333 93.7243 45.68C93.7883 45.6267 93.8203 45.552 93.8203 45.456V43.824C93.8203 43.728 93.7883 43.6533 93.7243 43.6C93.6709 43.5467 93.6016 43.52 93.5163 43.52H91.4363V45.76H93.5163ZM100.17 48.08C99.4975 48.08 98.9375 47.8613 98.4895 47.424C98.0415 46.9867 97.8175 46.432 97.8175 45.76V39.04C97.8175 38.368 98.0415 37.8133 98.4895 37.376C98.9375 36.9387 99.4975 36.72 100.17 36.72H102.362C103.034 36.72 103.594 36.9387 104.042 37.376C104.49 37.8133 104.714 38.368 104.714 39.04V45.76C104.714 46.432 104.49 46.9867 104.042 47.424C103.594 47.8613 103.034 48.08 102.362 48.08H100.17ZM102.122 45.84C102.324 45.84 102.426 45.7387 102.426 45.536V39.264C102.426 39.0613 102.324 38.96 102.122 38.96H100.41C100.324 38.96 100.255 38.9867 100.202 39.04C100.148 39.0933 100.122 39.168 100.122 39.264V45.536C100.122 45.632 100.148 45.7067 100.202 45.76C100.255 45.8133 100.324 45.84 100.41 45.84H102.122ZM113.517 36.8V48H111.134V39.04H109.758L108.478 48H106.078L107.694 36.8H113.517ZM115.603 36.8H117.971V41.28H120.163C120.835 41.28 121.395 41.4987 121.843 41.936C122.301 42.3733 122.531 42.928 122.531 43.6V45.68C122.531 46.352 122.301 46.9067 121.843 47.344C121.395 47.7813 120.835 48 120.163 48H115.603V36.8ZM117.891 43.52V45.76H119.987C120.072 45.76 120.141 45.7333 120.195 45.68C120.259 45.6267 120.291 45.552 120.291 45.456V43.824C120.291 43.728 120.259 43.6533 120.195 43.6C120.141 43.5467 120.072 43.52 119.987 43.52H117.891ZM127.835 36.8H130.203V48H127.835V43.52H125.691C125.019 43.52 124.459 43.3013 124.011 42.864C123.563 42.416 123.339 41.856 123.339 41.184V36.8H125.707V40.976C125.707 41.072 125.734 41.1467 125.787 41.2C125.841 41.2533 125.91 41.28 125.995 41.28H127.835V36.8ZM139.17 36.8V39.04H134.53V41.28H138.898V43.52H134.53V45.76H139.17V48H132.29V36.8H139.17ZM143.451 48.08C142.768 48.08 142.203 47.8613 141.755 47.424C141.307 46.9867 141.083 46.432 141.083 45.76V39.04C141.083 38.368 141.307 37.8133 141.755 37.376C142.203 36.9387 142.768 36.72 143.451 36.72H145.643C146.326 36.72 146.886 36.9387 147.323 37.376C147.771 37.8133 147.995 38.368 147.995 39.04V39.888H145.707V39.264C145.707 39.168 145.675 39.0933 145.611 39.04C145.558 38.9867 145.483 38.96 145.387 38.96H143.691C143.488 38.96 143.387 39.0613 143.387 39.264V45.536C143.387 45.7387 143.488 45.84 143.691 45.84H145.387C145.483 45.84 145.558 45.8133 145.611 45.76C145.675 45.7067 145.707 45.632 145.707 45.536V44.912H147.995V45.76C147.995 46.432 147.771 46.9867 147.323 47.424C146.886 47.8613 146.326 48.08 145.643 48.08H143.451ZM157.167 36.784L155.423 42.384L157.183 48.016H154.719L153.359 43.584H152.127V48H149.759V36.8H152.127V41.216H153.343L154.719 36.784H157.167ZM165.452 36.8V48H163.244V42.096H163.116L160.86 48H158.54V36.8H160.748V42.736H160.876L163.132 36.8H165.452ZM174.436 36.8V48H172.228V42.096H172.1L169.844 48H167.524V36.8H169.732V42.736H169.86L172.116 36.8H174.436ZM173.652 35.488H168.308V33.472H173.652V35.488ZM188.401 36.784L186.657 42.384L188.417 48.016H185.953L184.593 43.584H183.361V48H180.993V36.8H183.361V41.216H184.577L185.953 36.784H188.401ZM191.966 48.08C191.294 48.08 190.734 47.8613 190.286 47.424C189.838 46.9867 189.614 46.432 189.614 45.76V39.04C189.614 38.368 189.838 37.8133 190.286 37.376C190.734 36.9387 191.294 36.72 191.966 36.72H194.158C194.83 36.72 195.39 36.9387 195.838 37.376C196.286 37.8133 196.51 38.368 196.51 39.04V45.76C196.51 46.432 196.286 46.9867 195.838 47.424C195.39 47.8613 194.83 48.08 194.158 48.08H191.966ZM193.918 45.84C194.121 45.84 194.222 45.7387 194.222 45.536V39.264C194.222 39.0613 194.121 38.96 193.918 38.96H192.206C192.121 38.96 192.052 38.9867 191.998 39.04C191.945 39.0933 191.918 39.168 191.918 39.264V45.536C191.918 45.632 191.945 45.7067 191.998 45.76C192.052 45.8133 192.121 45.84 192.206 45.84H193.918ZM198.431 48V36.8H202.991C203.663 36.8 204.223 37.0187 204.671 37.456C205.129 37.8933 205.359 38.448 205.359 39.12V41.2C205.359 41.872 205.129 42.4267 204.671 42.864C204.223 43.3013 203.663 43.52 202.991 43.52H200.799V48H198.431ZM202.815 41.28C202.9 41.28 202.969 41.2533 203.023 41.2C203.087 41.1467 203.119 41.072 203.119 40.976V39.344C203.119 39.248 203.087 39.1733 203.023 39.12C202.969 39.0667 202.9 39.04 202.815 39.04H200.719V41.28H202.815ZM213.764 36.8V48H211.396V39.04H209.252V48H206.884V36.8H213.764ZM220.301 36.8H222.541V45.76C222.541 46.432 222.317 46.9867 221.869 47.424C221.421 47.8613 220.861 48.08 220.189 48.08H218.045C217.373 48.08 216.813 47.8613 216.365 47.424C215.917 46.9867 215.693 46.432 215.693 45.76V44.912H217.965V45.52C217.965 45.616 217.992 45.696 218.045 45.76C218.109 45.8133 218.184 45.84 218.269 45.84H219.997C220.2 45.84 220.301 45.7333 220.301 45.52V43.52H218.029C217.357 43.52 216.797 43.3013 216.349 42.864C215.901 42.416 215.677 41.856 215.677 41.184V36.8H218.045V40.976C218.045 41.072 218.072 41.1467 218.125 41.2C218.178 41.2533 218.248 41.28 218.333 41.28H220.301V36.8ZM226.748 48.08C226.065 48.08 225.5 47.8613 225.052 47.424C224.604 46.9867 224.38 46.432 224.38 45.76V39.04C224.38 38.368 224.604 37.8133 225.052 37.376C225.5 36.9387 226.065 36.72 226.748 36.72H228.94C229.623 36.72 230.183 36.9387 230.62 37.376C231.068 37.8133 231.292 38.368 231.292 39.04V39.888H229.004V39.264C229.004 39.168 228.972 39.0933 228.908 39.04C228.855 38.9867 228.78 38.96 228.684 38.96H226.988C226.785 38.96 226.684 39.0613 226.684 39.264V45.536C226.684 45.7387 226.785 45.84 226.988 45.84H228.684C228.78 45.84 228.855 45.8133 228.908 45.76C228.972 45.7067 229.004 45.632 229.004 45.536V44.912H231.292V45.76C231.292 46.432 231.068 46.9867 230.62 47.424C230.183 47.8613 229.623 48.08 228.94 48.08H226.748Z"
      fill="white"
      fillOpacity={fillOpacity}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9998 56.1111L15.2998 50.7778L15.2999 49C7.19992 45.4444 4.00002 40.3381 4.00002 33L4.00002 19.0047H13V21.9381H7.15002V26L15.2998 31.8444V18H13V15H16L16 8.54975L17.9999 6.54975L20 8.54975L20 15H23V18H20.6998V31.8444L28.85 26V21.9381H23V19.0047H32V33C32 40.3381 28.7999 45.4444 20.6999 49L20.6998 50.7778L17.9998 56.1111ZM15.2999 45.4444L15.2998 35.6667L7.15002 29.8222V33.2269C7.15002 39.4492 9.89992 42.7778 15.2999 45.4444ZM20.6999 45.4444L20.6998 35.6667L28.85 29.8222V33.2269C28.85 39.4492 26.0999 42.7778 20.6999 45.4444Z"
      fill="white"
      fillOpacity={fillOpacity}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9999 2.5L23 7.5L23 12.1118L26 12.1111V16.1103H35V32.7722C35 40.8516 30.9599 46.8659 23.7599 50.4222L17.9999 61.4452L12.2399 50.4229C5.03992 46.8666 1.00012 40.8523 1.00012 32.773V16.111H10V12.1118L13 12.1111V7.5L17.9999 2.5ZM23.0399 49.8881L17.9999 59.4575L12.9599 49.8888C5.93992 46.4221 1.90012 40.3062 1.90012 32.773V16.9999H10.9V13.0007L13.9 13V7.86819L17.9999 3.75708L22.1 7.86819L22.1 13.0007L25.1 13V16.9992H34.1V32.7722C34.1 40.3054 30.0599 46.4214 23.0399 49.8881Z"
      fill="white"
      fillOpacity={fillOpacity}
    />
  </svg>
)

const Memo = memo(Logo)
export { Memo as Logo }