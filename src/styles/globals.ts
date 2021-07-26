import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		border-width: 0;
		padding: 0;
		margin: 0;
		outline: none;
	}

	html,
	body {
		line-height: 1.15;
		-webkit-text-size-adjust: 100%;
		font-family: 'Poppins', sans-serif;
	}

	a {
		cursor: pointer;
		color: inherit;
		text-decoration: inherit;
	}

	a:hover {
		text-decoration: underline;
	}

	video {
		max-width: 100%;
		height: auto;
	}

	img {
		max-width: 100%;
		max-height: 100%;
	}

	img,
	svg {
		vertical-align: middle;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
		padding: 0;
		line-height: inherit;
		color: inherit;
		outline: none;
	}
	textarea {
		resize: none;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: inherit;
		font-weight: inherit;
	}

	button,
	input {
		overflow: visible;
	}

	button,
	[role="button"] {
		cursor: pointer;
	}

	input::placeholder,
	textarea::placeholder {
		color: #a0aec0;
	}

	input,
	textarea,
	button,
	select,
	a {
		-webkit-tap-highlight-color: rgba(0,0,0,0);
	}

	ol,
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	/* #__next {
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		align-items: center;
	} */

	.no-borders {
		border: none;
	}

	.without-background {
		background: none;
	}

	.icon_size {
		width: 30px;
		height: 30px;
	}

	.basket__itens span {
		color: red;
		position: relative;
		top: -4px;
	}

	.basket__icon {
		width: 25px;
		height: 25px;
		margin-right: 4px;
	}

	.favorite {
		cursor: pointer;
		position: absolute;
		top: 20px;
		right: 20px;
		z-index: 10;
	}
	/* Slide */
`
