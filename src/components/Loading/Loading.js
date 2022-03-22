import React from 'react'
import './Loading.css'

export default function Loading() {
	return (
		<div className="text-center">
			<div className="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
		// <h1>Loading...</h1>
	)
}
