import React, { useState } from "react";
import Loader from "./Loader";

function Form (){

const[inputWeather,setInputWeather]=useState("");
const[loading, setLoading]= useState(false);
const[data,setData]=useState({});


const handleSubmit=(cityName)=>{    
    const trim = inputWeather.trim();
    if(!trim){
        setInputWeather("")
        return;
    } 
    setLoading(true);
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=e7e6415e6c6c447386e64735230304&q=${cityName}&days=7&aqi=no&alerts=no`).then(res => res.json())
        .then(data => {
            setData(data)
        })
        .finally(() => setLoading(false));
    setInputWeather("")
}



const handleSearch=(e) =>{
    e.preventDefault()
    handleSubmit(inputWeather)
}
    return (
        <div className="col-md-12">
        <div className="d-grid gap-3 col-4 mt-4">
            <form onSubmit={handleSearch}>
                <input type ="text" className="form-control" placeholder="Add city" value={inputWeather} onChange={(e) => setInputWeather(e.target.value) }required/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
          
        
        <div className="col-md-12 text-center mt-5">
            
            {loading ? <Loader /> : 
                ( 
                    <div  className="shadow rounded wetherResultBox" >
                        {
                            data?.location?.name && (
                                <>
                                    <img   className="weathorIcon" src={data?.current?.condition?.icon} alt="img"/>
                                    <h4 className="weathorCity">{data?.location?.name}</h4>
                                    <h6 className="weathorTemp">{data?.current?.temp_c}°C</h6>
                                </>
                            )
                        }
                    </div>
                )}
        </div>
                    
                

        </div>
    )
}


export default Form;