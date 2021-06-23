
import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {FormGroup, Label, Input, Button, FormText} from 'reactstrap'
import {URLAPI} from '../helper'
import {authLogin} from '../action'



class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            angkaValid:false,
            abjadValid:false,
         }
    }

    validasiPassword=()=>{
        let abjad = /[a-z]/i
        let angka = /[0-9]/

        if(this.password.value.length>5){
         if(abjad.test(this.password.value)&& angka.test(this.password.value)){
            this.setState({abjadValid:true, angkaValid:true})
        }else if(abjad.test(this.password.value)){
            this.setState({abjadValid:true,angkaValid:false})
        }else if(angka.test(this.password.value)){
            this.setState({abjadValid:false,angkaValid:true})
        }
        }
    }

    onBtLogin=()=>{
        axios.get(URLAPI+`/users?email=${this.email.value}&password=${this.password.value}`)
        .then(res=>{
            if(res.data.length>0){
                this.props.authLogin(res.data[0])
            }else{
                if (this.state.abjadValid&&this.state.angkaValid){
                axios.post(URLAPI+`/users`,{
                    email:this.email.value,
                    password:this.password.value,
                    cart:[]
                }).then(resPost=>{
                    alert('regis sukses')
                    console.log(resPost.data)
                    //jika sudah ada maka redirect ke home, atau auto login
                    if(resPost.data.id){
                        this.props.authLogin(resPost.data)
                        this.setState({redirect:true})
                    }
                  
                }).catch(errPost=>{
                    console.log(errPost)
                })
            }else{
                alert("perbaiki password")
            }
                
            }

        }).catch(err=>{
            console.log(err)
        })
    }

    render() { 
        if(this.props.id){
            return (<Redirect to="/"/>)
        }
        return ( 
        <div style={{width:'20vw', margin:'auto', marginTop:'15vh', backgroundColor:'#f8f9fa', padding:'2vw'}}>
            <h3>Login Page</h3>
            <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" innerRef={el=>this.email=el}  />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" onChange={this.validasiPassword} placeholder="password placeholder" innerRef={el=>this.password=el}/>
        {
            this.state.abjadValid||this.state.angkaValid ?
            <FormText>{this.state.abjadValid&&"Berisi Huruf"}{this.state.angkaValid&&"Berisi angka"}</FormText>
            :null
        }
      </FormGroup>
      <Button type="button" onClick={this.onBtLogin}>Login</Button>
        </div> 
        );
    }
}

const mapToProps=({authReducer})=>{
    return {
       id:authReducer.id
    }
}
export default connect(mapToProps,{authLogin}) (LoginPage);