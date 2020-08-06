import React, { useState } from 'react';
import { v4 as randomString } from 'uuid';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import './AmazonDropzoneTwo.css';

function Amazon(props) {

  const upload = {
    isUploading: false
  };

  const [files, setFiles] = useState([]);
  const [isUploading, setUploading] = useState(upload);
  // const [photo, setPhoto] = useState('');

  // We are creating a file name that consists of a random string, and the name of the file that was just uploaded with the spaces removed and hyphens inserted instead. This is done using the .replace function with a specific regular expression. This will ensure that each file uploaded has a unique name which will prevent files from overwriting other files due to duplicate names.
  const getSignedRequest = (e, [files]) => {
    e.preventDefault()
    setUploading(!isUploading)
    console.log(files)
    const fileName = `${randomString()}-${files.name.replace(/\s/g, '-')}`
    console.log(fileName)
    console.log(files.type)
    //Try to get it from service after you get it working with the axios get from here
    axios.get('/sign-s3', {
      params: {
        'file-name': fileName,
        'file-type': files.type
      }
    }).then((response) => {
      // setTimeout(function(){alert('Wait 3 seconds then hit complete')}, 7000)
      const { signedRequest, url } = response.data
      uploadFile(files, signedRequest, url)
    }).catch(err => {
      console.log(err)
    })
  };

  const uploadFile = (files, signedRequest, url) => {

    const options = {
      headers: {
        'Content-Type': files.type,
      },
    };
    axios
      .put(signedRequest, files, options)
      .then(() => {
        setUploading({ isUploading: false, url });
        props.photoFn(url)
        if (url) {

        }
      })
      .catch(err => {
        setUploading({
          isUploading: false,
        });
        if (err.response === 403) {
          alert(
            `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
            err.stack
            }`
          );
        } else {
          alert(`ERROR: ${err.status}\n ${err.stack}`);
        }
      })
  };


  function MyDropzone() {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) => Object.assign(file, {
            preview: URL.createObjectURL(file)
          }))
        )

      }
    })

    const images = files.map((file) =>
      <div key={file.name} >
        <div>
          <h2>{'===>'}</h2>
        </div>
        <div className='amazonImageHold'>
          <img className='amazonImagesPreview' src={file.preview} style={{ width: "150px" }} alt="preview" />
        </div>
      </div>
    )

    return (
      <div className='amazonDropzoneImageHolder' >
        <div className='dropzoneInput' {...getRootProps()}>
          <input id='dropzoneInput' {...getInputProps()} />
          {
            isDragActive ?
              <h4 className='dropzoneAdd' ><img className='amazonImages' src={props.photo} style={{ width: "150px" }} alt="preview" /> </h4>
              : <div className='imageDisplay'>
                <h4 className='dropzoneAdd' > Click To Change Profile Picture <img className='amazonImages' src={props.photo} style={{ width: "150px" }} alt="preview" /></h4>
              </div>
          }
          <div>
            {images}
          </div>
        </div>

        <div className='dropzoneButtonHolder' >
          <button className='amazonSubmitPhoto' onClick={(e) => getSignedRequest(e, files)} >Submit Photo</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <form>
        <div className='amazonDropzoneHolder'>
          <div className='amazonDropHold' >
            {MyDropzone()}
          </div>
        </div>
      </form>
    </div>
  )
};

export default Amazon;