import React from 'react';
import {circleList, circleWithID, getCircle, itemWithID} from "../atoms";
import {selector, useRecoilState, useSetRecoilState} from "recoil";

const CircleCard = ({props}) => {

    console.log(props, ' Circle card')

    const [circleState, setCircleState] = useRecoilState(circleWithID(props.key));


    const { cx, cy, r, fill, id } = circleState;

    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        e.preventDefault();
        const name = e.target.name
        const value = e.target.value
        setCircleState({...props, [name]: value})
    }


  return (
    <div className="border border-black border-2 rounded m-2 bg-white font-mono p-2 flex flex-col">
      <h2>Circle {id}</h2>
        <span>X: </span>
        <input
            type="number"
            value={cx}
            name="cx"
            placeholder=" x value"
            onChange={handleChange}
            className="border border-black border-2 rounded m-0 shadow-lg"
        />
        <span>Y: </span>
        <input
            type="number"
            value={cy}
            name="cy"
            placeholder=" y value"
            onChange={handleChange}
            className="border border-black border-2 rounded m-0 shadow-lg"
        />
        <span>Radius: </span>
        <input
            type="number"
            value={r}
            name="r"
            placeholder=" diameter"
            onChange={handleChange}
            className="border border-black border-2 rounded m-0 shadow-lg"
        />
        <span>Color: </span>
        <input type="color"
               value={fill}
               name="fill"
               onChange={handleChange}
        />
    </div>
  );
};

export default CircleCard;