import React,{Component} from 'react';
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Error from "./componentes/Error";
import Clima from "./componentes/Clima";

class App extends Component{
state = {
error:'',
consulta:{},
resultado:{}
}

componentDidUpdate(prevProps,prevState) {
  if(prevState.consulta !== this.state.consulta){
    this.consultarApi();
  }

}

componentDidMount() {
  this.setState({
    error:false
  })
}

consultarApi = ()=> {
  const {ciudad,pais}= this.state.consulta;
  if(!ciudad || !pais ) return null;
  const appId='fe3ac633767587c3645c4cd064c83cb8';
  let url= `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${appId}`;
  

  fetch(url)
      .then(resultado =>{
        return resultado.json();
      })
      .then(datos =>{
              
          this.setState({
           resultado:datos
          })
      }) 
      .catch(error =>{
        console.log(error)
      })
} 



datosConsulta = (resultado) => {

if(resultado.ciudad === ""|| resultado.pais === ""){
  this.setState({
    error: true
    })    
 }  else{
        this.setState({
         consulta:resultado,
         error:false
         })  
      }
}

render() {

    const error = this.state.error; 
    let resultado2;

    if(error){
        resultado2 =<Error mensaje="Ambos campos son requeridos"/>
    }else {
      resultado2= <Clima resultado2={this.state.resultado}/>
    }



  
  return (
    <div className="app">
      <Header
      titulo= 'Proyecto App clima en React'
      />
      <Formulario
      datosConsulta={this.datosConsulta}      
      />
      {resultado2}
      
    </div>
  );
}
}

export default App;
