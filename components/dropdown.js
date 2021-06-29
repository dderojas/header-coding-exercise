import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const DropdownContainer = styled("div")``;

const DropdownList = styled("ul")`
  display: ${props => props.hideDropdown ? 'none': 'inline-flex'};
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  top: 107px;
  z-index: 1200;
  position: absolute;
  padding: 30px 0 0 30px;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  @media (max-width: 480px) {
    display: none;
  } 
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 1.5em;
  width: 100%;
`;

const Dropdown = ({ options }) => {
    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);

    return (
        <DropdownContainer onClick={handleClick}>
            {click ? 
                <DropdownList>
                    {options.map(option => {
                        return (
                            <ListItem key={Math.random()}>
                                <Link to={option.path} onClick={() => setClick(false)}>
                                    {option.name}
                                </Link>
                            </ListItem>
                        )
                    })}
                </DropdownList>
            : <DropdownList hideDropdown/>
            }
        </DropdownContainer>
    )
  }

export default Dropdown;