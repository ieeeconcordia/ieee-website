import Container from "react-bootstrap/Container";

export default function Navbar() {
  return (
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
          <li style={{ display: "inline" }}>Link</li>
          <li style={{ display: "inline" }}>Link</li>
          <li style={{ display: "inline" }}>Link</li>
          <li style={{ display: "inline" }}>Link</li>
          <li style={{ display: "inline" }}>Link</li>
        </ul>
        <button type="button">Sponsor</button>
      </div>
    </div>
  );
}
