import { headerMenuOption, menuOptionsWrapper } from '../Header/Header.css'
import { MenuOption } from '../Menu/MenuOption'
import { activeOption } from '../Menu/MenuOption.css'

export const menuOptions = ['join', 'help', 'blog', 'about']
const Navbar = () => {
  return (
    <div className={menuOptionsWrapper}>
      {menuOptions.map((option, index) => {
        return (
          <MenuOption
            key={`${index}-navbar_option`}
            className={headerMenuOption}
            activeClassName={activeOption}
            text={option}
          />
        )
      })}
    </div>
  )
}

export default Navbar
