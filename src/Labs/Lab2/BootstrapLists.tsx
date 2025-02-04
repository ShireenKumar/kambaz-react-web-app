import { Container, ListGroup } from "react-bootstrap";
import "./index.css";

export default function BootstrapLists() {
  return (
    <Container>
    <div id="wd-css-styling-lists">
  <h2>Favorite movies</h2>
  <ListGroup>
    <ListGroup.Item active>Aliens</ListGroup.Item>
    <ListGroup.Item>Terminator</ListGroup.Item>
    <ListGroup.Item>Blade Runner</ListGroup.Item>
    <ListGroup.Item>Lord of the Ring</ListGroup.Item>
    <ListGroup.Item disabled>Star Wars</ListGroup.Item>
  </ListGroup>
</div>

<div id="wd-css-hyperlink-list">
  <h3>Favorite Movies</h3>
  <ListGroup>
    <ListGroup.Item   action active
      href="https://en.wikipedia.org/wiki/How_to_Lose_a_Guy_in_10_Days">
      How to Lose a Guy in 10 Days
    </ListGroup.Item>
    <ListGroup.Item   action
      href="https://en.wikipedia.org/wiki/The_Outsiders_(film)">
      The Outsiders    </ListGroup.Item>
    <ListGroup.Item   action
      href="https://en.wikipedia.org/wiki/The_Karate_Kid">
      The Karate Kid      </ListGroup.Item>
    <ListGroup.Item   action
href="https://en.wikipedia.org/wiki/Smile_(2022_film)">
      Smile </ListGroup.Item>
    <ListGroup.Item   action   disabled
      href="https://en.wikipedia.org/wiki/The_Little_Mermaid_(2023_film)">
      The Little Mermaid         </ListGroup.Item>
    <ListGroup.Item action onClick={() => alert("New book added")}>
      Add another movie     </ListGroup.Item>
  </ListGroup>
</div>
</Container>
  );
}