import React, {useRef} from 'react';

const FileUploader = ({onFileSelectError, onFileSelectSuccess, disabled}) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file.size > 1024*1024*2)
      onFileSelectError({ error: "O arquivo não pode ser maior que 2MB" });
    else
      onFileSelectSuccess(file);
  }

  return (
    <div className="file-uploader">
      <input disabled={disabled} name="file" type="file" accept="image/*" onChange={handleFileInput} />
      <button disabled={disabled} onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"></button>
    </div>
  )
};

export default FileUploader;