import React from 'react';
import './Form.css';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';
//import {  DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const style = {
    width: "40%",
    height: "500px",
    position: "fixed",
    marginLeft:"0px",
    marginTop:"75px",
    marginRight:"200px",

backgroundColor:"rgba(50,115,150,0.3)"

};
class Form extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state= {


        };
        this.radiogroup=this.radiogroup.bind(this);
        }
        radiogroup=(e)=>{
            this.setState({od_dnia:e.target.value});
            this.setState({do_dnia:e.target.value});
         }

    onSubmith=(e)=>{
        e.preventDefault();
        this.setState({isSaving:true});
        fetch('http://localhost:3004/accident' ,{
                method :"POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "Id": this.state.Id,
                    "Latitude": this.state.Latitude,
                    "Longitude": this.state.Longitude,
                    "Type": this.state.Type,
                    "Date": this.state.Date,
                    "County": this.state.County,
                    "City": this.state.City,
                    "Street": this.state.Street,
                    "WhatHappened": this.state.WhatHappened,
                    "Pedestrians": this.state.Pedestrians,
                    "Cyclists": this.state.Cyclists,
                    "Cars": this.state.Cars,
                    "Trucks": this.state.Trucks,
                    "Motorcycles": this.state.Motorcycles,
                    "Trams": this.state.Trams
                })
            }
        )
            .then(Response=>Response.json())
    }

    onChangeEvent(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render()
    {
        return(

            <form  style={style}  onSubmit={this.onSubmith}>

                    <div  onChange={e=>this.radiogroup(e)}>
                        <input type="radio" value="ko" name="t1" /> wypadki i kolizje
                        <br></br>
                        <input type="radio" value="wy" name="t2" /> wypadki
                            <br></br>
                        <input type="radio" value="sm" name="t3" /> wypadki i śmiertelne
                        <br></br>
                    </div>
                <br></br>
                            <div>
                                <label>od dnia :</label><input  type="date" name="name"></input>
                                <br/>

                                <label >do dnia :</label><input  type="date"></input>

                                <br/>
                                <br/>
                                <label>Powiat :</label>
                                <select name="powiat">
                                        <option>
                                            POWIAT KAZIMIERSKI
                                        </option>
                                        <option>
                                            POWIAT KĘDZIERZYŃSKO-KOZIELSKI
                                        </option>
                                        <option>
                                            POWIAT KĘPIŃSKI
                                        </option>
                                        <option>
                                            POWIAT KĘTRZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT KIELCE
                                        </option>
                                        <option>
                                            POWIAT KIELECKI
                                        </option>
                                        <option>
                                            POWIAT KLUCZBORSKI
                                        </option>
                                        <option>
                                            POWIAT KŁOBUCKI
                                        </option>
                                        <option>
                                            POWIAT KŁODZKI
                                        </option>
                                        <option>
                                            POWIAT KOLBUSZOWSKI
                                        </option>
                                        <option>
                                            POWIAT KOLNEŃSKI
                                        </option>
                                        <option>
                                            POWIAT KOLSKI
                                        </option>
                                        <option>
                                            POWIAT KOŁOBRZESKI
                                        </option>
                                        <option>
                                            POWIAT KONECKI
                                        </option>
                                        <option>
                                            POWIAT KONIN
                                        </option>
                                        <option>
                                            POWIAT KONIŃSKI
                                        </option>
                                        <option>
                                            POWIAT KOSZALIN
                                        </option>
                                        <option>
                                            POWIAT KOSZALIŃSKI
                                        </option>
                                        <option>
                                            POWIAT KOŚCIAŃSKI
                                        </option>
                                        <option>
                                            POWIAT KOŚCIERSKI
                                        </option>
                                        <option>
                                            POWIAT KOZIENICKI
                                        </option>
                                        <option>
                                            POWIAT KRAKOWSKI
                                        </option>
                                        <option>
                                            POWIAT KRAKÓW
                                        </option>
                                        <option>
                                            POWIAT KRAPKOWICKI
                                        </option>
                                        <option>
                                            POWIAT KRASNOSTAWSKI
                                        </option>
                                        <option>
                                            POWIAT KRAŚNICKI
                                        </option>
                                        <option>
                                            POWIAT KROSNO
                                        </option>
                                        <option>
                                            POWIAT KROŚNIEŃSKI
                                        </option>
                                        <option>
                                            POWIAT KROTOSZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT KUTNOWSKI
                                        </option>
                                        <option>
                                            POWIAT KWIDZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT LEGIONOWSKI
                                        </option>
                                        <option>
                                            POWIAT LEGNICA
                                        </option>
                                        <option>
                                            POWIAT LEGNICKI
                                        </option>
                                        <option>
                                            POWIAT LESKI
                                        </option>
                                        <option>
                                            POWIAT LESZCZYŃSKI
                                        </option>
                                        <option>
                                            POWIAT LESZNO
                                        </option>
                                        <option>
                                            POWIAT LEŻAJSKI
                                        </option>
                                        <option>
                                            POWIAT LĘBORSKI
                                        </option>
                                        <option>
                                            POWIAT LIDZBARSKI
                                        </option>
                                        <option>
                                            POWIAT LIMANOWSKI
                                        </option>


                                </select>
                            </div>
                 <label>Rodzaj zdarzenia :</label>
                    <select id="filter_form_accidentType" name="filter_form[accidentType]"><option value=""></option><option value="01">Zderzenie pojazdów czołowe</option><option value="02">Zderzenie pojazdów boczne</option><option value="03">Zderzenie pojazdów tylne</option><option value="04">Najechanie na pieszego</option><option value="05">Najechanie na pojazd unieruchomiony</option><option value="06">Najechanie na drzewo, słup, inny obiekt drogowy</option><option value="A1">Najechanie na drzewo</option><option value="A2">Najechanie na słup, znak</option><option value="07">Najechanie na zapore kolejową</option><option value="08">Najechanie na dziurę, wybój, garb</option><option value="09">Najechanie na zwierzę</option><option value="A3">Najechanie na barierę ochronną</option><option value="10">Wywrócenie się pojazdu</option><option value="11">Wypadek z pasażerem</option><option value="12">Inne</option></select>

                                <br></br>
                                <label>Ulica: </label><input name="text" ></input>
                    <br></br>
                <br></br>
                    <label>Miejscowość: </label><input name="text" ></input>

                    <br/>
                    <input type="checkbox" value="piesi" /> piesi  <br/>
                    <input type="checkbox" value="rowerzyści" /> rowerzyści<br></br>
                    <input type="checkbox" value="samochody osobowe"  /> samochody osobowe<br></br>
                    <input type="checkbox" value="samohody ciężarowe" /> samohody ciężarowe<br></br>
                    <input type="checkbox" value="motocykle i skutery" /> motocykle i skutery<br></br>
                <input type="checkbox" value="tramwaje, trolejbusy" checked /> tramwaje, trolejbusy<br></br>

            </form>
        )

    }
}
export default Form;