import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Burger from './burger'
import { Box } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons'

const MobileDropDownListContainer = styled("div")``;

const MobileDropDownList = styled("ul")`
	// display: ${props => props.hideDropdown ? 'none': 'inline-flex'};
	display: 'inline-flex';
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  top: 120px;
  z-index: 1200;
  position: absolute;
  padding: 0;
  margin: 0;
  // padding-left: 1em;
  background-color: #f4f4f4;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  // color: #3faffa;
  // font-size: 1.3rem;
  // font-weight: 500;
  @media (max-width: 480px) {
		top: 0px;
	} 
`;

const ListItem = styled("li")`
	display: flex;
	justify-content: flex-start;
	padding: 10px 20px 20PX 20px;
  list-style: none;
  // margin-bottom: 1.8em;
  width: 100%;
	color: ${props => props.whiteFont ? 'white' : ''};
	background-color: ${props => props.whiteBackground ? '#ffff' : props.black ? 'black' : ''};
	border-style: ${props => props.icon ? 'none' : 'solid'};
	border-width: ${props => props.icon ? 'none' : '0.1px'};
	border-color: ${props => props.icon ? 'none' : '#d0d0d0'};
`;

const FaChevContainerRight = styled("div")`
	margin-left: auto;
`
const FaChevContainerLeft = styled("div")`
	padding: 0 10px 0 0;
`

const secondMobileNavItems = [
	{	name: 'MENU', path: '/'},
	{ name: 'GO BACK', path: '/' },
	{ name: 'SOLUTIONS BY INDUSTRY', path: 'home' },
	{ name: 'SOLUTIONS BY PROCESS', path: 'cabin' },
	{ name: 'SOFTWARE SOLUTIONS', path: 'mansion' },
	{ name: 'SERVICES', path: '/' },
]

const MobileDropdown = ({ options }) => {
	const [click, setClick] = useState(true);
	const [secondDropDown, setSecondDropDown] = useState(false)

	if (secondDropDown) {
		return (
				<MobileDropDownListContainer>
					{click ? 
						<MobileDropDownList>
							{secondMobileNavItems.map(option => {
								if (option.name === 'GO BACK') {
									return (
											<ListItem whiteBackground onClick={() => setSecondDropDown(false)} key={Math.random()}>
													<FaChevContainerLeft>
														<FontAwesomeIcon icon={faChevronLeft} />
													</FaChevContainerLeft>
															{option.name}
											</ListItem>
									)
							}

							if (option.name === 'MENU') {
								return (
										<ListItem whiteFont black key={Math.random()}>
														{option.name}
												<FaChevContainerRight onClick={() => setClick(false)}>
													<FontAwesomeIcon icon={faTimes}/>
												</FaChevContainerRight>
										</ListItem>
								)
							}	
							return (
								<ListItem offWhite key={Math.random()}>
										<Link to={option.path} onClick={() => setClick(false)}>
												{option.name}
										</Link>
										<FaChevContainerRight>
											<FontAwesomeIcon icon={faChevronRight} />
										</FaChevContainerRight>
								</ListItem>
							)})}
					</MobileDropDownList>
				: <Burger />}
			</MobileDropDownListContainer>
		)
	}

	return (
			<MobileDropDownListContainer>
				{click ? 
					<MobileDropDownList>
						{options.map(option => {
							if (option.name === 'SOLUTIONS') {
								return (
									<ListItem whiteBackground onClick={() => setSecondDropDown(true)} key={Math.random()}>
										{option.name}
										<FaChevContainerRight>
											<FontAwesomeIcon icon={faChevronRight} />
										</FaChevContainerRight>
									</ListItem>
								)
							}

							if (option.name === 'MENU') {
								return (
										<ListItem whiteFont black key={Math.random()}>
														{option.name}
												<FaChevContainerRight onClick={() => setClick(false)}>
													<FontAwesomeIcon icon={faTimes}/>
												</FaChevContainerRight>
										</ListItem>
								)
							}	

							if (option.type === 'icon') {
								return (
									<ListItem icon key={Math.random()}>
										{option.name}
										<Box sx={{padding: '0 0 0 10px'}}>{option.desc}</Box>
									</ListItem>
								)
							}

							return (
								<ListItem whiteBackground onClick={() => setClick(false)} key={Math.random()}>
									{option.name}
									<FaChevContainerRight>
										<FontAwesomeIcon icon={faChevronRight} />
									</FaChevContainerRight>
								</ListItem>
							)})}
					</MobileDropDownList>
				: <Burger />}
			</MobileDropDownListContainer>
	)
}

  export default MobileDropdown;