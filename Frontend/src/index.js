import React from 'react';
import { render } from 'react-dom';
import Map from './Map';
import Form from "./Form";
import Background from './image.png';
//import List from './List';
const style = {
    width:"100%",
    height:"100%",
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
   backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop:"0px"
};

class App extends React.Component {
  state = {
      dsource :null,
    markersData: [
      { latLng: { lat: 52.2297, lng: 21.0122 } , title : 1  , Type : "colission" , Date : "2018-02-09"  , Time:"16:50" }
    ]
  };

    componentDidMount(){
        fetch('http://localhost:3004/accident')
            .then(Response=>{
                return Response.json();
            })
            .then (source=>{
                    console.log(source)

                    this.setState({
                        dsource:source
                    });
                }
            );
    }
  addMarker = () => {
    const { markersData } = this.state;
    const lastMarker = markersData[markersData.length - 1];

    this.setState({

      markersData: [
        ...markersData,
        {
            title: +lastMarker.title + 1,
            Type : "fatal_accident",
            Date : "2018-03-12"  ,
            Time:"18:30",
          latLng: {
            lat: lastMarker.latLng.lat + 0.01,
            lng: lastMarker.latLng.lng + 0.001
          }
        }
      ]
    });
  };

  render() {
    const { markersData } = this.state;
    return (
      <div style={style} >
        <h1>SEWIK/Mapa</h1>
        <Map markersData={markersData} />


        <button
          onClick={this.addMarker}
        >
         submit
        </button>

          <ul style={{color:'white' , backgroundColor:"rgba(50,115,150,0.3)" , FontWeight: 'bold'} }>Accidents Location:
              {markersData.map(marker => (
                  <li key={marker.title}>
                      {marker.title},
                      lat: {marker.latLng.lat},
                      lng: {marker.latLng.lng},
                      Type : {marker.Type},
                      Date:{marker.Date},
                      Time :{marker.Time}
                  </li>
              ))}
          </ul>

        <Form></Form>
          {/*<List></List>*/}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
