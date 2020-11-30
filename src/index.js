var uploader = { 
    uploadByFile: (file) => { 
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(
          {'success': 1, 'file': {url: reader.result}});
        reader.onerror = error => reject(error);
    });

  }
}

export default uploader;
