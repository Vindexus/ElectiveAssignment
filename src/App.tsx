import {useEffect, useRef, useState} from 'react'
import './App.css'
import {getSINError} from "./lib/sin-validation.ts";

function App() {
  const [sin, setSIN] = useState<string>('')
	const [error, setError] = useState<string|null>(null)
	const errDebounceRef = useRef<number>(0)

	useEffect(() => {
		return () => {
			clearTimeout(errDebounceRef.current)
		}
	}, [])

	function onChangeSIN (e: React.ChangeEvent<HTMLInputElement>) {
		setSIN(e.target.value)
		clearTimeout(errDebounceRef.current)
		setError(null)
		errDebounceRef.current = setTimeout(() => {
			console.log('OH YEAH', e.target.value)
			const err = getSINError(e.target.value)
			console.log('err', err)
			setError(err)
		}, 500)
	}

  return (
    <>
      <h1>SIN Validator</h1>
      <input type={"text"} value={sin} onChange={onChangeSIN} />
			{error && <div className={"error"}>{error}</div>}
    </>
  )
}

export default App
