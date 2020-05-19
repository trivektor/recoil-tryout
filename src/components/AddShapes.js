import React, {useState} from 'react';
import { useSetRecoilState } from "recoil";
import {itemWithID, squareList} from "../atoms";
import shortid from 'shortid'

const AddShapes = () => {
  const newSquare = itemWithID(shortid.generate())
  const setItemState = useSetRecoilState(newSquare)
  const setSquareState = useSetRecoilState(squareList)
  const defaultFormState = {
    x: "",
    y: "",
    size: "",
    fill: "#3942e0"
  }
  const [formState, setFormState] = useState(defaultFormState);
  const {x, y, size, fill } = formState;

  const isValid = x !== "" && y == "" && size !== ""

  console.log(isValid)

  const handleChange = e => {
    e.preventDefault();
    const name = e.target.name
    const value = e.target.value
    setFormState({...formState, [name]: value})
  }

  const submitSquare = () => {
    setItemState((...oldState) => ({...oldState, formState}))
    setSquareState((...oldState) => ([...oldState, newSquare]))
  }

  return (
    <div className="flex flex-col m-2 justify-center font-mono">
      <h2>Square</h2>
      <span>X: </span>
      <input
        type="number"
        value={x}
        name="x"
        placeholder="x value"
        onChange={handleChange}
        className="border border-black border-2 rounded m-0 shadow-lg"
      />
      <span>Y: </span>
      <input
        type="number"
        value={y}
        name="y"
        placeholder="y value"
        onChange={handleChange}
        className="border border-black border-2 rounded m-0 shadow-lg"
      />
      <span>Dimensions: </span>
      <input
        type="number"
        value={size}
        name="size"
        placeholder="height & width"
        onChange={handleChange}
        className="border border-black border-2 rounded m-0 shadow-lg"
      />
      <span>Color: </span>
      <input type="color"
             value={fill}
             name="fill"
             onChange={handleChange}
      />
      <button
        disabled={!isValid}
        className="border
                   border-black border-2 bg-white rounded
                   w-full my-2 hover:bg-black hover:text-white shadow-lg"
      >
        Add Square
      </button>
    </div>
  );
};

export default AddShapes;