import { useEffect, useState } from 'react'

function useDebounce (value: string, delay: number){
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		return() => clearInterval(timeoutId )
	},[value, delay])

	return debouncedValue
}

export { useDebounce }