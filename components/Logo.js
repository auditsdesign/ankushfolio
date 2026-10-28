/* "Ankushfolio" wordmark: the first "o" in "folio" is the red blob */
export default function Logo({ light }) {
  return (
    <div className={`logo${light ? " logo-light" : ""}`} role="img" aria-label="Ankushfolio">
      <span>Ankushf</span><i /><span>lio</span>
    </div>
  );
}
