import { Component } from 'react';
import '../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl = 'http://localhost:3001/usuarios';
const cookies = new Cookies();

class Login extends Component {

    state = {
        form:{
            username: '',
            password: ''
        }
    }

    handleChange = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    } 

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(res=>{
            return res.data
        })
        .then(res=>{
            if(res.length > 0){
                var respuesta = res[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellidos', respuesta.apellidos, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Bienvenida ${respuesta.nombre} ${respuesta.apellidos}`);
                window.location.href="./Principal"
            }else{
                alert("esta mal")
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render () {

        return(
            <div className="containerPrincipal">
            <div className="containerSecundario">
                <div className="form-group">
                <label>Usuario:</label>
                <br></br>
                <input 
                type="text"
                className="form-control"
                name="username"
                onChange={this.handleChange}/>
                <br></br>
                <label>Contraseña:  </label>
                <br></br>
                <input
                type="password"
                className="form-control"
                name="password" 
                onChange={this.handleChange}/>
                <br/>
                <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar sesión</button>
                </div>
            </div>
        </div>
        )
        
    }
}

export default Login;
