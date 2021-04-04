// import * as React from 'react' //이건 typescript 문법!!
import React, { useRef, Fragment, useState, FormEvent } from 'react'

const GUGU = () => {
	let inputEl = useRef<HTMLInputElement>(null)
	const [first, setFirst] = useState(Math.ceil(Math.random() * 9))
	const [second, setSecond] = useState(Math.ceil(Math.random() * 9))
	const [value, setValue] = useState('')
	const [result, setResult] = useState('')

	const onSubmitForm = (e: FormEvent<HTMLFormElement>): void => { //HTML 부분은 생략하기도함
		e.preventDefault()
		const input = inputEl.current
		if (parseInt(value) === first * second) {
			setResult('correct')
			setFirst(Math.ceil(Math.random() * 9))
			setSecond(Math.ceil(Math.random() * 9))
			setValue('')
			if(input)
				input!.focus()
		} else {
			setResult('wrong')
			setValue('')
			if(input)
				input!.focus()
		}
	}

	return (
		<Fragment>
			<div>{first} 곱하기 {second}는?</div>
			<form onSubmit={onSubmitForm}>
				<input
					ref={inputEl} //등록
					type='number'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</form>
			<div>{result}</div>
		</Fragment>
	)
}

export default GUGU;