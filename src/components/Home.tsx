import * as React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
      return (
            <React.Fragment>
                  <div>This is Home</div>
                  <ul>
                        <li><Link to='/test'>1. test</Link></li>
                  </ul>
            </React.Fragment>
      )
}

export default Home