import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faShieldAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import MobileDropdown from './mobile-dropdown'

const BurgerLines = styled("div")`
  width: 25px;
  height: 4px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
`
const BurgerWrapper = styled("div")`
  display: inline-block;
  cursor: pointer;
  padding: 0 0 0 15px;
`

const mobileNavItems = [
  { name: 'MENU' },
  { name: 'SOLUTIONS' },
  { name: 'PRODUCTS' },
  { name: 'AUTOMATION' },
  { name: 'EDUCATION' },
  { name: 'RESOURCES' },
  { name: (<FontAwesomeIcon icon={faQuestionCircle} />), type: 'icon', desc: 'Help'},
  { name: (<FontAwesomeIcon icon={faMapMarkerAlt} />), type: 'icon', desc: 'Where to Buy/Rent'},
  { name: (<FontAwesomeIcon icon={faShieldAlt} />), type: 'icon', desc: 'Safety'},
  { name: (<Image src="/flag-logo.png" alt="flag logo" width={20} height={20}/>), type: 'icon', desc: 'EN'},
]

const Burger = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);

    return(
        <div>
            { click ? <MobileDropdown options={mobileNavItems}/> : 
                <BurgerWrapper onClick={handleClick}>
                    <BurgerLines></BurgerLines>
                    <BurgerLines></BurgerLines>
                    <BurgerLines></BurgerLines>
                </BurgerWrapper>
            }
    </div>
    )
}

export default Burger;