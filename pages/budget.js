import { Segment } from "semantic-ui-react";
//import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";
import BudgetComponent from "../components/Budget/BudgetComponent";


function Budget() {
  return (

    <Segment>
      <BudgetComponent />
      <BudgetComponent />
    </Segment>
  );
  
}

export default Budget;
