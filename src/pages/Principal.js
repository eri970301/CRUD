import axios from "axios";
import React from "react";
import TablaUsuario from "../tablas/TablaUsuario";

const baseUrl = 'http://localhost:3001/usuarios';

class Principal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error: null,
            users: [],
            res: {}
        }
    }

    componentDidMount(){
        axios.get(baseUrl)
        .then(res => res.data)
        .then((result)=>{
            this.setState({
                users: result
            });
        },
        (error)=>{
            this.setState({error});
        }
        )
    }
    
render(){

    return(
        <div className="container">
             <button>Cerrar sesión</button>
            <h1>Mi crud</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <h2>añadir usuario</h2>
                </div>
                <div className="flex-large">
                    <h2>ver usuarios</h2>
                    <TablaUsuario />
                </div>
            </div>
            Hola
            <br></br>
        </div>
    )
}
    
}

export default Principal;