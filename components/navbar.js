import react from 'react';
import Image from 'next/image'
import { Box, Flex, Grid } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faJediOrder } from '@fortawesome/free-brands-svg-icons'

/*
// after mvp
  - typescript ???
  - maybe try to get a PNG generated
// code clean up
  - delete search png
  - commented out code
hover,active,etc. THESE ARE CALLED SELECTORS
&:hover:{
  //style
}
// use font awesome icons for the other stuff
*/


const Navbar = () => {
    return (
      <Grid sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'Noto Sans, sans-serif',
        fontWeight: 'bold',
        width: '100%',
        color: '#181818',
        backgroundColor: 'white',
        boxShadow: '0 3px 1px -1px grey',
        borderTop: '40px solid black',
      }}>
        <Grid sx={{ display: 'flex', aligntItems: 'center', marginBottom: '10px', marginTop: '10px' }}>
        <FontAwesomeIcon icon={faJediOrder} size="2x"/>
          <Box sx={{
            marginBottom: '-10px',
            '&:hover': {
              color: '#B81830',
              borderBottom: '3px solid #B81830'
            }
          }}>
            <h3>
              <a href="#">SOLUTIONS</a>
            </h3>
          </Box>
          <Box sx={{
            marginBottom: '-10px',
            '&:hover': {
              color: '#B81830',
              borderBottom: '3px solid #B81830'
            }
          }}>
            <h3>
              <a href="#">PRODUCTS</a>
            </h3>
          </Box>
          <Box sx={{
            marginBottom: '-10px',
            '&:hover': {
              color: '#B81830',
              borderBottom: '3px solid #B81830'
            }
          }}>
            <h3>
              <a href="#">AUTOMATION</a>
            </h3>
          </Box>
          <Box sx={{
            marginBottom: '-10px',
            '&:hover': {
              color: '#B81830',
              borderBottom: '3px solid #B81830'
            }
          }}>
            <h3>
              <a href="#">EDUCATION</a>
            </h3>
          </Box>
          <Box sx={{
            marginBottom: '-10px',
            '&:hover': {
              color: '#B81830',
              borderBottom: '3px solid #B81830'
            }
          }}>
            <h3>
              <a href="#">RESOURCES</a>
            </h3>
          </Box>
        </Grid>
        <Grid sx={{ display: 'flex', alignItems: 'center'}}>
          Search
          <FontAwesomeIcon icon={faSearch} />
          {/* <Image src="/flag-logo.png" alt="flag logo" width={50} height={50}/> */}
        </Grid >
      </Grid>
    )
}

export default Navbar