import { FaReact } from "react-icons/fa";

function Header() {
  return (
    <header className="app-header">
      <FaReact style={{ fontSize: "100px", color: "#38bdf8" }} />
      <h1 style={{ textDecoration: "underline dotted", fontSize: "80px" }}>
        The React Quiz
      </h1>
    </header>
  );
}

export default Header;
