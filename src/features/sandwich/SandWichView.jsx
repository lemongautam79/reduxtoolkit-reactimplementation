import React from "react";
import { useSelector,useDispatch } from "react-redux/es/exports";
import { ordered, restocked } from "./sandwichSlice";

const SandWichView = () => {
    const numOfSandWiches = useSelector((state)=>state.sandWich.numOfSandWiches)
    const dispatch = useDispatch()
    return ( 
        <div>
            <h2>Number of Sandwiches - {numOfSandWiches}</h2>
            <button onClick={()=>dispatch(ordered())}>Order Sandwiches</button>
            <button onClick={()=>dispatch(restocked(5))}>Restock Sandwiches</button>
        </div>
     );
}
 
export default SandWichView;