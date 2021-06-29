import Navbar from '../components/navbar'
import Home from './home'
import Cabin from './cabin'
import Mansion from './mansion'
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
          {/*routing examples */}
          <Route path="/home" exact component={Home}/>
          <Route path="/cabin" exact component={Cabin}/>
          <Route path="/mansion" exact component={Mansion}/>
        </Switch>
      </Page>
    </Router>
  )
}

export default App