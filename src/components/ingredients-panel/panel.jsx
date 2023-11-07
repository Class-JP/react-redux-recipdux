import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateIngredients } from "../../redux/ingredientsSlice";

export const IngredientsPanel = () => {

  const [ingredients, setIngredients] = useState({
    flour: '',
    milk: '',
    eggs: '',
    butter: '',
    sugar: ''
  });

  // in order to execute acctions, we need the dispath
  const dispatch = useDispatch()

  const saveRecipe = () => {
    // The dispatch uses the action called "updateIngredients"
    // then the acction "updateIngredients" sends the ingredients data as a payload
    dispatch(updateIngredients(ingredients));
  };


  return (
    <Container className="ingredients-panel">
      <h2 className="text-center">Ingredients Panel</h2>
      <Container className="list">
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="flour">Flour (g)</Form.Label>
            <Form.Control
              id="flour"
              placeholder="how much?"
              onChange={({target}) => {
                const flourValue = target.value;

                setIngredients({
                  ...ingredients,
                  flour: flourValue
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="milk">Milk (ml)</Form.Label>
            <Form.Control
              id="milk"
              placeholder="how much?"
              onChange={({target}) => {
                const milkValue = target.value;

                setIngredients({
                  ...ingredients,
                  milk: milkValue
                });
              }}              
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="eggs">Eggs (units)</Form.Label>
            <Form.Control
              id="eggs"
              placeholder="how many?"
              onChange={({target}) => {
                const eggsValue = target.value;

                setIngredients({
                  ...ingredients,
                  eggs: eggsValue
                });
              }}               
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="butter">Butter (g)</Form.Label>
            <Form.Control
              id="butter"
              placeholder="how much?"
              onChange={({target}) => {
                const butterValue = target.value;

                setIngredients({
                  ...ingredients,
                  butter: butterValue
                });
              }}        
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="sugar">Sugar (mg)</Form.Label>
            <Form.Control
              id="sugar"
              placeholder="how much?"
              onChange={({target}) => {
                const sugerValue = target.value;

                setIngredients({
                  ...ingredients,
                  sugar: sugerValue
                });
              }}                  
            />
          </Form.Group>
          <Button
            type="button"
            onClick={saveRecipe}
          >
            Update Recipe!
          </Button>
        </fieldset>
      </Container>
    </Container>
  );
};
