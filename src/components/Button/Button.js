import "./Button.style.css";

export default function Button({ children, type }) {
	return <button type={type}>{children}</button>;
}
