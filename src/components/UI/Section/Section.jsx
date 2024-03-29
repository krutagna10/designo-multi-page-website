import "./Section.css";
function Section({ children, className }) {
  return <section className={`section ${className || ""}`}>{children}</section>;
}

export default Section;
