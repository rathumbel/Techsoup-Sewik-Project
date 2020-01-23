import React from 'react';
import Form from './Form';
class List extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            isLoading :true ,
            dsource :null,
            isEmpty : false
        }
    }

    componentDidMount(){
        fetch('http://localhost:3004/accident')
            .then(Response=>{
                return Response.json();
            })
            .then (source=>{
                    console.log(source)
                    //or .then(source=>this.setstate({dsource:source}))
                    this.setState({
                        dsource:source,
                        isLoading:false
                    });
                }
            );
    }

    render(){
        if(this.state.isLoading){
            return(
                <p>isloading...</p>
            )
        }

        return(
            <div>
                {/*print from db.json */}
                {this.state.dsource.map((e, ind) => { return (

                    <div key={ind}><h4>Accident :{e.Id}</h4>
                        <p>Latitude: {e.Latitude}</p>
                        <p>Longitude: {e.Longitude}</p>
                        <p>Type: {e.Type}</p>
                        <p>Date: {e.Date}</p>
                        <p>County: {e.County}</p>
                        <p>City: {e.City}</p>
                        <p>Street: {e.Street}</p>
                        <p>WhatHappened: {e.WhatHappened}</p>
                        <p>Pedestrians: {e.Pedestrians.toString()}</p>
                        <p>Cyclists: {e.Cyclists.toString()}</p>
                        <p>Cars: {e.Cars.toString()}</p>
                        <p>Trucks: {e.Trucks.toString()}</p>
                        <p>Motorcycles: {e.Motorcycles.toString()}</p>
                        <p>Trams: {e.Trams.toString()}</p>
                    </div>
                )
                })
                }
            </div>
        )
    }
}

export default List;