import { useState, useEffect, useContext } from "react";
import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Context } from "../../../Context";
import styled from "styled-components"
import { Link } from "react-router-dom";

//ESTILO CSS FORM
const StyledForm = styled.form`
    width: 50%;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 169px;
    /* background-color: #191919; */
`
const Titulo = styled.h1`
    text-align: center;
`

//FORMULARIO
const RegistroVideo = () => {
    const data = useContext(Context)
    //useStates
    const [title,setTitle] = useState("")
    const [video,setVideo] = useState("")
    const [videoImg,setVideoImg] = useState("")
    const [category,setCategory] = useState("")
    const [descripcion,setDescripcion] = useState("")
    const [securitycode,setSecuritycode] = useState("")
    //ERRORES
    const [errors,setErrors] = useState({
        title:{
            error: false, //si inicia en false, no muestra el error
            message: "El título debe contener un mínimo de 5 caracteres y un MAXIMO de 30",
        },
        video:{
            error: false, //si inicia en false, no muestra el error
            message: "La URL es inválida",
        }
    })
    //VALIDACIONES
    function validarTitulo(title){
        if(title.length >=5 && title.length < 30){
            return { ...errors, title: {error: false, message: errors.title.message}}
        }   else{
            return { ...errors, title: {error: true, message: errors.title.message,}}
        }
    }
    function validarVideo(video){
        if(/^(?:https?:\/\/)?(?:[a-z0-9-]+\.)+[a-z]{2,6}(?::[0-9]+)?(?:\/.*)?$/.test(video)){ 
            return { ...errors, video: {error: false, message: errors.video.message, title: errors.title}}
        }   else{
            return { ...errors, video: {error: true, message: errors.video.message, title: errors.title}}
        }
    }
     //MANEJANDO EL ENVÍO
    const handleSubmit = (values) => {
        console.log("APPJS: ", values)
      }
      //FORMULARIO
    return (
        <>
        <Container>
        <Titulo>Nuevo Video</Titulo>
        <StyledForm onSubmit={(e) => {
            e.preventDefault()
            handleSubmit({
                title,
                video,
                videoImg,
                category,
                descripcion,
                securitycode
            }
            )
        }}>
            <TextField 
            required
            id="title" 
            label="Título" 
            variant="filled" 
            type="text"
            fullWidth 
            margin='normal'   
            onChange={(e) => {
                setTitle(e.target.value)
            }}
            value={title}
            error={errors.title.error}
            helperText={errors.title.error ? errors.title.message : ""}
            onBlur={(e) => {
                setErrors(validarTitulo(e.target.value))
            }}
            />
            <TextField
            required
            id="video" 
            label="Link del video" 
            variant="filled" 
            type="text"
            fullWidth 
            margin='normal'
            onChange={(e) => {
                setVideo(e.target.value)               
           }}
            value={video}
            error={errors.video.error}
            helperText={errors.video.error ? errors.video.message : ""}
            onBlur={(e) => {
                setErrors(validarVideo(e.target.value))
            }}
            />
            <TextField
            required
            id="videoImg" 
            label="Link imagen del video" 
            variant="filled" 
            type="text"
            fullWidth 
            margin='normal'
            value={videoImg} 
            onChange={(e) => {
                setVideoImg(e.target.value)
            }}
                  
            />
            <TextField 
            required
            id="category" 
            label="Escoja una categoría" 
            variant="filled" 
            type="text"
            fullWidth 
            margin='normal'
            value={category}  
            onChange={(e) => {
                setCategory(e.target.value)
            }}
                       
            />
            <TextField 
            required
            id="description" 
            label="Descripción" 
            variant="filled" 
            type="text"
            fullWidth 
            margin='normal'
            value={descripcion}   
            onChange={(e) => {
                setDescripcion(e.target.value)
            }}
                     
            />
            <TextField
            required
            id="securitycode" 
            label="Código de seguridad" 
            variant="filled" 
            type="text"
            fullWidth 
            margin='normal'  
            value={securitycode}   
            onChange={(e) => {
                setSecuritycode(e.target.value)
            }}               
            />
            <Button variant="contained" type="submit">Guardar</Button>
            <Button variant="outlined">Limpiar</Button>
            <Link to="/nueva-categoria">
            <Button variant="contained" >Nueva Categoría</Button>
            </Link>
        </StyledForm>
        </Container>
        </>
    )
};



export default RegistroVideo