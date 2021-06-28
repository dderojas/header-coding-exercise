import Navbar from '../components/navbar'
import Home from './home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

const Page = styled('div')`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const App = () => {
  return (
    <Router>
      <Page>
        <Navbar />
        <Switch>
          {/*routing example */}
          <Route path="/home" exact component={Home}/>
        </Switch>
      </Page>
    </Router>
  )
}

export default App