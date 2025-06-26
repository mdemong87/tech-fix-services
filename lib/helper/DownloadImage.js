function downloadImages(imageUrls) {
    imageUrls.forEach(imageUrl => {
        // Fetch each image as a blob
        fetch(imageUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.blob();
            })
            .then(blob => {
                // Create a URL for the blob
                const url = URL.createObjectURL(blob);

                // Create a temporary link element
                const link = document.createElement('a');
                link.href = url;

                // Extract filename from the URL or use a default name
                const urlParts = imageUrl.split('/');
                const filename = urlParts[urlParts.length - 1] || 'downloaded_image';
                link.download = filename;

                // Append the link to the body
                document.body.appendChild(link);

                // Trigger the download
                link.click();

                // Remove the link from the body
                document.body.removeChild(link);

                // Revoke the object URL after download
                URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error(`There was an error downloading the image from ${imageUrl}:`, error);
            });
    });
}

export default downloadImages;
