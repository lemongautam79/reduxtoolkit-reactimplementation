import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IceCreamView = () => {
const numOfIceCreams = useSelector((state)=>state.iceCream.numOfIceCreams)
const dispatch = useDispatch()
    return ( 
        <div>
            <h2>Number of IceCreams - {numOfIceCreams}</h2>
            <button onClick={()=>dispatch(ordered())}>Order icecream</button>
            <button onClick={()=>dispatch(restocked(5))}>Restock icecream</button>
        </div>
     );
}
 
export default IceCreamView;