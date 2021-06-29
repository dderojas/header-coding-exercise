import { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faQuestionCircle, faShieldAlt, faUser, faMapMarkerAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './dropdown';
import Burger from './burger';
import styled from 'styled-components'

const ParentDiv = styled("nav")`
  overflow: hidden;
  font-family: Noto Sans, sans-serif;
  font-weight: bold;
  width: 100%;
  color: #181818;
  background-color: white;
  box-shadow: 0 3px 1px -1px grey;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const TopRowDiv = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
  color: white;
  background-color: black;
  font-size: small;
  @media (max-width: 480px) {
    display: none;
  }
`
const BottomRowDiv = styled("div")`
  display: flex; 
  justify-content: flex-start; 
  align-items: center; 
  padding-left: 10px;
  padding-right: 15px;
  @media (max-width: 480px) {
    display: none;
  }
`
const NavbarItems = styled("h3")`
  padding: 10px 10px 25px 10px;
  margin-bottom: 0px;
  :hover {
    color: #B81830;
    border-bottom: 3px solid #B81830;
  };
`
const FlagDiv = styled("div")`
  display: inline-flex; 
  padding-right: 5px;
`
const IconDiv = styled("div")`
  display: inline-flex; 
  align-item: center;
  margin-left: auto;
`
const FaContainer = styled("div")`
  padding: 0 7px 0 7px;
`

const MobileDiv = styled("div")`
  display: none; 
  @media (max-width: 480px) {
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    padding-right: 20px;
  } 
`
const MobileLogoDiv = styled("div")`
  display: none; 
  @media (max-width: 480px) {
    display: inline-flex;
    justify-content: flex-start; 
    align-items: center;
    margin-left: 10px;
    padding: 10px;
} 
`
const browserDropdownItems = [
  { name: 'Solutions by Industry', path: 'home' },
  { name: 'Solutions by Process', path: 'cabin' },
  { name: 'Software Solutions', path: 'mansion' },
  { name: 'Services', path: 'home' },
]


const Navbar = () => {
    const [openDrop, setOpenDrop] = useState(false)
    const toggle = () => setOpenDrop(!openDrop);

    return (
      <ParentDiv id="test">
        <TopRowDiv>
          <FlagDiv sx={{ display: 'inline-flex', paddingRight: '5px'}}>
            <Image src="/flag-logo.png" alt="flag logo" width={20} height={20}/>
          </FlagDiv>
          EN
          <IconDiv>
            <FaContainer>
              <FontAwesomeIcon icon={faShieldAlt} />
            </FaContainer>
            <FaContainer>
              <FontAwesomeIcon icon={faQuestionCircle} />
            </FaContainer>
            <FaContainer>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </FaContainer>
            <FaContainer>
              <FontAwesomeIcon icon={faUser} />
            </FaContainer>
            <FaContainer>
              <FontAwesomeIcon icon={faShoppingCart} />
            </FaContainer>
            3
          </IconDiv>
        </TopRowDiv>
        <BottomRowDiv>
          <Image src="/lincoln-electric-logo.png" alt="flag logo" width={120} height={50}/>
          <NavbarItems onClick={toggle}>
              SOLUTIONS
          </NavbarItems>
          <NavbarItems>
              PRODUCTS
          </NavbarItems>
          <NavbarItems>
              AUTOMATION
          </NavbarItems>
          <NavbarItems>
              EDUCATION
          </NavbarItems>
          <NavbarItems>
              RESOURCES
          </NavbarItems>
          <IconDiv>
            Search
          <FaContainer>
              <FontAwesomeIcon icon={faSearch} />
          </FaContainer>
          </IconDiv >
        </BottomRowDiv>
        {openDrop && <Dropdown options={browserDropdownItems}/>}
        <MobileDiv>
          <Burger />
          <MobileLogoDiv>
            <Image src="/lincoln-electric-logo.png" alt="flag logo" width={100} height={50}/>
          </MobileLogoDiv>
          <IconDiv>
            <FaContainer>
              <FontAwesomeIcon size="lg" icon={faSearch} />
            </FaContainer>
            <FaContainer>
              <FontAwesomeIcon size="lg" icon={faUser} />
            </FaContainer>
            <FaContainer>
              <FontAwesomeIcon size="lg" icon={faShoppingCart} />
            </FaContainer>
            3
          </IconDiv>
        </MobileDiv>
      </ParentDiv>
    )
  }

  export default Navbar