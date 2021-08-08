import * as React from 'react'
import * as ReactDom from 'react-dom'
import { hot } from 'react-hot-loader/root'
import Main from './Main'

const Hot = hot(Main) // HOC

ReactDom.render(<Hot />, document.querySelector('#root'))
