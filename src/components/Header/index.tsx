import { Scroll, Timer } from 'phosphor-react';
import Logo from '../../assets/Logo';
import { HeaderContainer } from './styles';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <nav>
        <NavLink to='/' title='timer'>
          <Timer size={24} />
        </NavLink>
        <NavLink to='/history' title='histórico'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
