import * as React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
      return (
            <React.Fragment>
                  <div>
                        <h2>This is Home</h2>
                        <div>
                              <ul className='left-layout' style={{ width: '20%', borderRight: '1px solid #ccc' , float: 'left'}}>
                                    <li>
                                          <Link to='/test'>test</Link>
                                    </li>
                                    <li>
                                          <Link to='/baeck'>백준 알고리즘</Link>
                                    </li>
                                    <li>
                                          <Link to='/hacker-rank'>HackerRank</Link>
                                    </li>
                                    <li>
                                          <Link to='/memo'>개인 메모</Link>
                                    </li>
                              </ul>
                              <div style={{ width: '80%', float: 'left'}}>
                                    <span>이 페이지는 홈페이지 입니다.</span>
                              </div>
                        </div>
                  </div>
                  {/* <div>This is Home</div>
                  <ul>
                        <li><Link to='/test'>1. test</Link></li>
                  </ul> */}
            </React.Fragment>
      )
}

export default Home