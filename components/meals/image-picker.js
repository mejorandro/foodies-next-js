'use client';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({label, name}){
const [pickedImage, setPickedImage] = useState();
const imageInput = useRef();

function handlePickClick(){
    imageInput.current.click();
}

function handleImageChange(event){
    const file = event.target.files[0];
     
    if (!file) {
        setPickedImage(null);
        return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
       setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);

}
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.preview}>
                {!pickedImage && <p>No Image picked yet.</p>}
                {pickedImage && <Image src={pickedImage} alt='The image selected by the user' fill />}
            </div>
            <div className={classes.controls}>
                <input type='file' id="image" required onChange={handleImageChange} className={classes.input} ref={imageInput} accept='image/png, image/jpeg' name={name} />
                <button className={classes.button} type="button" onClick={handlePickClick}>Pick an Image</button>
            </div>
        </div>
    );
}