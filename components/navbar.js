import { useState } from 'react'
import Image from 'next/image'
import { Link } from 'react-router-dom'
import { Box } from 'theme-ui'
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
const NavbarItems = styled("div")`
  padding: 10px;
  margin-bottom: -1px;
  &:focus {
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
const FaAwesomeDiv = styled("div")`
  padding: 0 7px 0 7px;
`

const MobileDiv = styled("div")`
  display: none; 
  @media (max-width: 480px) {
    display: flex;
    justify-content: flex-start; 
    align-items: center;
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

const Navbar = () => {
    const [openDrop, handleOpenDrop] = useState(false)
    const toggle = () => handleOpenDrop(!openDrop);

    return (
      <ParentDiv id="test">
        <TopRowDiv>
          <FlagDiv sx={{ display: 'inline-flex', paddingRight: '5px'}}>
            <Image src="/flag-logo.png" alt="flag logo" width={20} height={20}/>
          </FlagDiv>
          EN
          <IconDiv>
            <FaAwesomeDiv sx={{ padding: '0 7px 0 7px'}}>
              <FontAwesomeIcon icon={faShieldAlt} />
            </FaAwesomeDiv>
            <FaAwesomeDiv sx={{ padding: '0 7px 0 7px'}}>
              <FontAwesomeIcon icon={faQuestionCircle} />
            </FaAwesomeDiv>
            <FaAwesomeDiv sx={{ padding: '0 7px 0 7px'}}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </FaAwesomeDiv>
            <FaAwesomeDiv sx={{ padding: '0 7px 0 7px'}}>
              <FontAwesomeIcon icon={faUser} />
            </FaAwesomeDiv>
            <FaAwesomeDiv sx={{ padding: '0 7px 0 7px'}}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </FaAwesomeDiv>
          </IconDiv>
        </TopRowDiv>
        <BottomRowDiv>
          <Image src="/lincoln-electric-logo.png" alt="flag logo" width={120} height={50}/>
          <NavbarItems onClick={toggle}>
            <h3>
              SOLUTIONS
            </h3>
          </NavbarItems>
          <NavbarItems>
            <h3>
              PRODUCTS
            </h3>
          </NavbarItems>
          <NavbarItems>
            <h3>
              AUTOMATION
            </h3>
          </NavbarItems>
          <NavbarItems>
            <h3>
              EDUCATION
            </h3>
          </NavbarItems>
          <NavbarItems>
            <h3>
              RESOURCES
            </h3>
          </NavbarItems>
          <IconDiv>
            Search
              <Box sx={{paddingLeft: '10px'}}>
                <FontAwesomeIcon icon={faSearch} />
              </Box>
          </IconDiv >
        </BottomRowDiv>
        <Dropdown isOpen={openDrop}/>
        <MobileDiv>
          <Burger />
          <MobileLogoDiv>
            <Image src="/lincoln-electric-logo.png" alt="flag logo" width={100} height={50}/>
          </MobileLogoDiv>
          <Box sx={{ display: 'inline-flex', marginLeft: 'auto'}}>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Box>
        </MobileDiv>
      </ParentDiv>
    )
  }

  export default Navbar