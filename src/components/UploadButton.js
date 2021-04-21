import React from 'react'

const UploadButton = ({handleUpload, upLoadProgress}) => {
    return (
        <button onClick={() => handleUpload()} className="upload-button">
            {
            upLoadProgress.message ? upLoadProgress.message : 'Upload Ip Data'}
            </button>
    )
}

export default UploadButton