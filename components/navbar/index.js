import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav_container">
    <div
      style={{ flexDirection: "row", display: "flex", alignItems: "center", justifyContent: 'space-between' }}
      >
      <h3>IEEE Concordia</h3>
      <h4>Lab status: Open</h4>
      <div style={{display: 'flex' ,flexDirection: 'row', gap: 5}}>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            padding: 0,
            margin: 0,
          }}
        >
          <li style={{ display: "inline" }}>
          <Link href="/aboutUs">
             aboutUs
            </Link>
          </li>


          <li style={{ display: "inline" }}>
          <Link href="/events">
              events
            </Link>
          </li>


          <li style={{ display: "inline" }}>
          <Link href="/projects">
              projects
            </Link>
          </li>


          <li style={{ display: "inline" }}>
          <Link href="/laboratory">
              lab
            </Link>
          </li>

          <li style={{ display: "inline" }}>

          <Link href="contact">
              contact us
            </Link>
          </li>
        </ul>
        <button type="button">Sponsor</button>
      </div>
    </div>
    </nav>
  );
}
