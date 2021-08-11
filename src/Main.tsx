import React, { FC, Fragment } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './components/Home'

const Main: React.FC = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/home" component={Home} />
			<Route path="/test" render={() => <h3>teststesters</h3>} />
			<Route path="/baeck" render={() => <h3>백준 알고리즘</h3>} />
			<Route path="//hacker-rank" render={() => <h3>해커랭크</h3>} />
			<Route path="/memo" render={() => <h3>memo</h3>} />
			<Redirect path="*" to="/home" />
		</Switch>
	</BrowserRouter>
)


export default Main