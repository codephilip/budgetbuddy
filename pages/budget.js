<<<<<<< HEAD
=======
import axios from "axios";
>>>>>>> d10a14607b0a56bbb0d1729d89f9f42016b96df4
import { Segment } from "semantic-ui-react";
//import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";
import BudgetComponent from "../components/Budget/BudgetComponent";
<<<<<<< HEAD


function Budget() {
  return (

    <Segment>
      <BudgetComponent />
=======
import baseUrl from "../utils/baseUrl";


function Budget({product,user}) {
  return (

    <Segment>
      <BudgetComponent {...product}/>
      <BudgetComponent user={user} {...product} />
>>>>>>> d10a14607b0a56bbb0d1729d89f9f42016b96df4
    </Segment>
  );
  
}

<<<<<<< HEAD
=======
Product.getInitialProps = ({query: {_id}}) => {
  const url = 'http://localhost/api/budget';
  const payload = {params : {_id}}
  const response = axios.get(url, payload)
};


>>>>>>> d10a14607b0a56bbb0d1729d89f9f42016b96df4
export default Budget;
