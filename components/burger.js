import Image from 'next/image'
import { Link } from 'react-router-dom'
import { slide as Menu} from 'react-burger-menu'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faShieldAlt, faUser, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const BurgerWrapper = styled('div')`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  display: none;
  @media (max-width: 480px) {
    display: inline-flex;
  }
`
const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const styles = {
  bmBurgerButton: {
    display: 'inline-flex',
    position: 'relative',
    marginLeft: '20px',
    width: '36px',
    height: '30px',
    // left: '36px',
    // top: '36px'
  },
  bmBurgerBars: {
    // display: 'inline-flex',
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: { // be careful when changing
    position: 'fixed',
    height: '100%',
    width: '100%'
  },
  bmMenu: {
    background: '#FFFFFF',
    // padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    height: '100%'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column',
    color: '#181818',
    padding: '0.8em',
    position: 'fixed'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    height: '100%',
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const options = [
    'Menu','Solutions by Industry', 
    'Solutions by Process', 
    'Software Solutions', 
    'Services', 
    (<FontAwesomeIcon icon={faQuestionCircle} />),
    (<FontAwesomeIcon icon={faMapMarkerAlt} />),
    (<FontAwesomeIcon icon={faShieldAlt} />),
    (<Image src="/flag-logo.png" alt="flag logo" width={20} height={20}/>),
];

const Burger = () => {
    return(
        <BurgerWrapper>
            <Menu styles={styles}>
            {options.map(option => (
                  <ListItem key={Math.random()}>
                    <Link to="/">{option}</Link>
                  </ListItem>
            ))}
            </Menu>
        </BurgerWrapper>
    )
}

export default Burger;