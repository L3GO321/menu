import { NavLink } from 'react-router-dom';

const menu = [
  {
    path: '/',
    name: 'Главная'
  },
  {
    path: '/drift',
    name: 'Дрифт-такси'
  },
  {
    path: '/timeattack',
    name: 'Time Attack'
  },
  {
    path: '/forza',
    name: 'Forza Karting'
  }
]

export const Menu = () => {

  return (
    <nav class="menu">
      {menu.map(item => (
        <NavLink
          key={item.path}
          className={({ isActive }) => isActive ? 'menu__item menu__item-active' : 'menu__item '}
          to={item.path}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}