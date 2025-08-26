'use client';
import { useRef } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({label, name}){
const imageInput = useRef();

function handlePickClick(){
    imageInput.current.click();
}

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <input type='file' id="image" className={classes.input} ref={imageInput} accept='image/png, image/jpeg' name={name} />
                <button className={classes.button} type="button" onClick={ImagePicker}>Pick an Image</button>
            </div>
        </div>
    );
}