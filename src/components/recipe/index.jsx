import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export const RecipePanel = () => {

  const ingredients = useSelector(state => state.ingredients);

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
                <span>{ ingredients.flour }</span>
                <small>(g)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Milk: </strong>
                <span>{ ingredients.milk }</span>
                <small>(ml)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Eggs: </strong>
                <span>{ ingredients.eggs }</span>
                <small>(units)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Butter: </strong>
                <span>{ ingredients.butter }</span>
                <small>(g)</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Sugar: </strong>
                <span>{ ingredients.sugar }</span>
                <small>(mg)</small>
              </ListGroup.Item>
            </ListGroup>      
        </Col>
      </Row>
    </Container>
  );
};
