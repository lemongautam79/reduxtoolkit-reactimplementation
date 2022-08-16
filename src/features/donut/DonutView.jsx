import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { ordered,restocked } from "./donutSlice";
const DonutView = () => {
    const numOfDonut = useSelector((state)=>state.donut.numOfDonut) 
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of donuts - {numOfDonut}</h2>
            <button onClick={()=>dispatch(ordered())}>Order donuts</button>
            <button onClick={()=>dispatch(restocked(5))}>Restock donuts</button>
        </div>
    );
}

export default DonutView;
