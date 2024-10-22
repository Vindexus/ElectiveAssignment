import {useEffect, useRef, useState} from 'react'
import {getSINError} from "./lib/sin-validation.ts";
import Alert from "./components/Alert.tsx";

function App() {
  const [sin, setSIN] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)
	const [error, setError] = useState<string|null>(null)
	const errDebounceRef = useRef<number>(0)

	useEffect(() => {
		return () => {
			clearTimeout(errDebounceRef.current)
		}
	}, [])

	function onChangeSIN (e: React.ChangeEvent<HTMLInputElement>) {
		setSIN(e.target.value)
		setError(null)
		setIsValid(false)
		clearTimeout(errDebounceRef.current)

		if (!e.target.value.length) {
			return
		}

		// Debounce is so that you don't get "TOO SHORT!" messages as you're still typing
		errDebounceRef.current = setTimeout(() => {
			const err = getSINError(e.target.value)
			setError(err)
			if (!err) {
				setIsValid(true)
			}
		}, 250)
	}

  return (
    <div className={'w-96 mx-auto mt-4 rounded p-4 bg-gray-50 border-2 border-gray-200 shadow'}>
      <h1 className={'text-3xl font-bold mb-1'}>SIN Validator</h1>
			<form onSubmit={(e) => {
				e.preventDefault()
			}}>
				<input
					className={'block outline-none w-full p-2 bg-gray-50 border-2 border-gray-200 focus:border-gray-500 rounded ' +
						(error ? ' border-red-500 focus:border-red-500' : '') +
						(isValid ? ' border-green-500 focus:border-green-500' : '')
					}
					placeholder={"Enter a SIN"}
					name={"sin"}
					formNoValidate
					autoComplete={"off"}
					type={"text"}
					value={sin}
					onChange={onChangeSIN}
				/>
			</form>
			<div className={'p-0.5 mt-1 min-h-6'}>
				{error && <Alert type={'error'}>{error}</Alert>}
				{isValid && <Alert type={'success'}>That SIN is valid! Yay!</Alert>}
			</div>
		</div>
	)
}

export default App
