import './Button.css';

function Button(props) {
  return (
    <button className="Btn">{props.children}</button>
  );
}

export default Button;