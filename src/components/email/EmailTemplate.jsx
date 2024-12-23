// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //

// IMAGES //

// DATA //

/** EmailTemplate Component */
export const EmailTemplate = ({ name, email, number, message }) => {
	return (
		<div>
			<p>Name: {name} </p>
			<p>Email: {email} </p>
			<p>Number: {number} </p>
			<p>Message: {message} </p>
		</div>
	);
};
