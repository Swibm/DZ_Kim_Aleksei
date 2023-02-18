import { useState } from "react";

const Content = () => {

    const data = [
        {id:0, car: "Nickname", type: "Type"},
        {id:1, car: "Lexus", type: "GS"},
        {id:2, car: "BMW", type: "E30"},
        {id:3, car: "Toyota", type: "Celica"}
    ]

    const [ state, setState] = useState([])

    const getData = () => {
        setState([])
        
        setState( prev => {
            return [...prev, ...data]
        })
    }

    const clearData = () => {
        setState([])
    }

    return (
        <div className="wrapper">
            <button onClick={getData}>Get Data</button>
            <button onClick={clearData}>Clear Data</button> 
            {state.map((data, i) => 
            <div className="cars" key={i}>
                <div className="cars_car">{data.car}</div>
                <div className="cars_type">{data.type}</div>
            </div>
            )}  
        </div> 
    )
}

export default Content