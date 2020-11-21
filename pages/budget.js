import axios from "axios";
import { Segment } from "semantic-ui-react";
//import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";
import BudgetComponent from "../components/Budget/BudgetComponent";
import baseUrl from "../utils/baseUrl";


function Budget({product,user}) {
  return (

    <Segment>
      <BudgetComponent {...product}/>
      <BudgetComponent user={user} {...product} />
    </Segment>
  );
  
}

Product.getInitialProps = ({query: {_id}}) => {
  const url = 'http://localhost/api/budget';
  const payload = {params : {_id}}
  const response = axios.get(url, payload)
};


export default Budget;
