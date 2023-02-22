import LikeButton from "./likeButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutPage() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={9}>
            <div className="about-page">
              <h1>About this website</h1>
              Origami is the art of paper folding with its name comeing from the
              Japanese words oru (which means 'to fold') and kami (meaning
              'paper'). Today, origami is a widely-used practice that encourages
              mindfulness and creative expression, in addtion to helping
              developing our hand-eye coordination, dexterity, and fine motor
              skills. And because it requires great mental concentration, it is
              also beneficial for our cognitive abilities too. In OrigaMe, we
              provide a platform for origami artists and crafters to share their
              creativity and for users to learn and communicate. Let's get
              creative!
            </div>
          </Col>
        </Row>
      </Container>
      <img className="crane" src="/crane.png"></img>
      <img className="plane" src="/plane.png"></img>
      <img className="frog" src="/frog.png"></img>
    </div>
  );
}
