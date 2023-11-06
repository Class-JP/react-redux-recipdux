import './App.css'
import { IngredientsPanel } from './components/ingredients-panel/panel'
import { NavHeader } from './components/navbar'
import { RecipePanel } from './components/recipe'

function App() {

  return (
    <>
      <NavHeader></NavHeader>
      <RecipePanel></RecipePanel>
      <IngredientsPanel></IngredientsPanel>
    </>
  )
}

export default App
