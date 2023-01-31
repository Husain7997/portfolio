import React, { useState } from 'react';
import file from '../../assets/file.pdf';



const handleDownload = (file, setDownloadStatus) => {
    const link = document.createElement('a');
    link.href = file;
    link.setAttribute('download', file);
    document.body.appendChild(link);
  
    link.click();
    setDownloadStatus(true);
  };
  
  export default handleDownload;