import React from 'react'
import { Link } from 'wouter'

export default function Header() {
	return (
		<header>
			<Link to="/">
				<figure className="App-logo">
					<img alt="Giffy logo" src="/logo.png" />
				</figure>
			</Link>
		</header>
	)
}