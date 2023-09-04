import { useState, useEffect, useContext } from "react";
import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Context } from "../../../Context";
import { useForm } from "react-hook-form";



const RegistroVideo = () => {
    const data = useContext(Context)

    function insertar(data){
        console.log(data)
    }
    const {register,formState:{errors},handleSubmit} = useForm();

    // const [title, setTitle] = useState("")
    // const [video, setVideo] = useState("")
    // const [videoimg, setVideoimg] = useState("")
    // const [category, setCategory] = useState("")
    // const [description, setDescription] = useState("")
    // const [securitycode, setSecuritycode] = useState("")

    // const [errors, setErrors] = useState({
    //     title: {
    //         error: false,
    //         message: "Deben ser al menos 5 caracteres"
    //     }
    // })

    return (
        <div>
        <h1>Nuevo Video</h1>
        <form 
        //     onSubmit={(e) => {
        //     e.preventDefault();
        //     handleSubmit(insertar);
        // }}
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
        >
           <div>
            <TextField 
            id="title" 
            label="Título" 
            variant="filled" 
            type="text"
            fullWidth 
            margin='normal'
            inputRef={{...register("title2",{required:true,minLength:5,maxLength:25})}}
            // onChange={ (e) => {
            //     setTitle(e.target.value)
            // }}
            />
            {
            errors.title2?.type==="required" && (
                <p>Ingrese un titulo</p>
            )
            }
            </div>
            <TextField 
            id="video" 
            label="Link del video" 
            variant="filled" 
            type="text"
            fullWidth 
            margin='normal'
            // onChange={(e) => {
            //     setVideo(e.target.value)
            // }}
            />
            <TextField 
            id="videoimg" 
            label="Link imagen del video" 
            variant="filled" 
            type="text"
            fullWidth 
            margin='normal'   
            // onChange={(e) => {
            //     setVideoimg(e.target.value)
            // }}         
            />
            <TextField 
            id="category" 
            label="Escoja una categoría" 
            variant="filled" 
            type="text"
            fullWidth 
            margin='normal'  
            // onChange={(e) => {
            //     setCategory(e.target.value)
            // }}          
            />
            <TextField 
            id="description" 
            label="Descripción" 
            variant="filled" 
            type="text"
            fullWidth 
            margin='normal'
            // onChange={(e) => {
            //     setDescription(e.target.value)
            // }}           
            />
            <TextField 
            id="securitycode" 
            label="Código de seguridad" 
            variant="filled" 
            type="text"
            fullWidth 
            margin='normal'
            // onChange={(e) => {
            //     setSecuritycode(e.target.value)
            // }}           
            />
            <Button variant="       ained" type="submit">Guardar</Button>
            <Button variant="outlined" type="submit">Limpiar</Button>
            <Button variant="contained" type="submit">Nueva Categoría</Button>
        </form>
        </div>
    )
};

export default RegistroVideo