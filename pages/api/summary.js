// import products from "../../static/products.json";
import Summary from "../../models/Summary";
import connectDb from "../../utils/connectDb";
//static data import
//import summary from '../../static/products.json'


connectDb();

export default async (req, res) => {
    console.log(req.method);
    
    const summary = await Summary.find();
    res.status(200).json(summary);
};