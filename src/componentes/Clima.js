import React, {Component} from "react";
import PropTypes from "prop-types";

class Clima extends Component{

    mostrarResultado=()=>{

    //obteniendo datos de la api o consulta
    const {name,weather,main}=this.props.resultado2;

    if(!name || !weather|| !main) return null;

    const Kelvin=273.15;  
    const urlIcono= `http://openweathermap.org/img/w/${weather[0].icon}.png`;
    const alt=`clima de ${name}`;      
      

    return (
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2>Resultado del Clima de:{name}</h2>
                            <p className="temperatura">
                                Actual: {(main.temp - Kelvin).toFixed(2)} &deg;C
                                <img src={urlIcono} alt={alt}/>
                            </p>
                             <p>Max.{(main.temp_max-Kelvin).toFixed(2)}&deg;C</p>
                             <p>Min.{(main.temp_min-Kelvin).toFixed(2)}&deg;C</p>
                        </span>
                    </div> 
                </div>
             </div>
          )
    }


    render(){
        //console.log(this.props.resultado2);
        return(
            <div className ="container">
                {this.mostrarResultado()}
                </div>
        )        
    }
}
Clima.propTypes={
    resultado2:PropTypes.object.isRequired
}
export default Clima;