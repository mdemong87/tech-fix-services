

function ConvartMediaToBase64(event, file, setfile) {
    const files = Array.from(event.target.files); // Convert FileList to array
    const fileReaders = files.map(file => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = () => resolve(fileReader.result);
            fileReader.onerror = (error) => reject(error);
            fileReader.readAsDataURL(file); // Read each file
        });
    });

    // Use Promise.all to handle all file read operations
    Promise.all(fileReaders)
        .then(results => {
            setfile(results); // results is an array of base64 data URLs
        })
        .catch(error => {
            console.error('Error reading files:', error);
        });
}

export default ConvartMediaToBase64;
