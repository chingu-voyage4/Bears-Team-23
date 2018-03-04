import React from "react";
import "../css/Upload.css";
import cloudinary from 'cloudinary-core';


// const Upload = () => {
class Upload extends React.Component {
    uploadWidget() {
        cloudinary.openUploadWidget({ cloud_name:'bears23', upload_preset: 'glshf8h1'}, 
        function(error, result) {
            console.log(result);
        });
    }
    render() {
        return (
            <div className="upload__div">
                <h1>Test uploading an image</h1>
                <button 
                    onClick={this.uploadWidget.bind(this)}
                    className="upload__button">
                    Add Image
                </button>
            </div>
        );
    }
    
}

export default Upload;