import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";

export const RecipePanel = () => {
  return (
    <Container className="recipe-panel">
      <Row>
        <Col>
          <Image
            src="https://www.bespokehomedesign.com/wp-content/uploads/2016/11/confused-cook-or-chef-baking-a-cake-Fotolia_76046078_XS.jpg"
          >          
          </Image>
        </Col>
        <Col>
          <ListGroup className="recipe-ingredients">
              <ListGroup.Item>
                <strong>Flour: </strong>
                <span>700</span>
                <small>(g)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Milk: </strong>
                <span>1000</span>
                <small>(ml)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Eggs: </strong>
                <span>3</span>
                <small>(units)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Butter: </strong>
                <span>700</span>
                <small>(g)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Sugar: </strong>
                <span>100</span>
                <small>(mg)</small>
              </ListGroup.Item>
            </ListGroup>      
        </Col>
      </Row>
    </Container>
  );
};
