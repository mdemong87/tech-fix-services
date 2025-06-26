// Require the Cloudinary library
const cloudinary = require('cloudinary').v2



cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUD_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUD_SECRECT,
    secure: true
});




//for single file upload function
async function FileUpload(file, type, destination) {


    const cloudresult = await cloudinary.uploader.upload(file, {
        folder: destination,
        resource_type: "auto",
        width: "auto",
        crop: "auto"
    })
    return cloudresult;
}


// Function to upload multiple photos
async function multipleFileUpload(files, type, destination) {
    if (!files || !Array.isArray(files) || files.length === 0) {
        throw new Error('No files provided for upload');
    }

    try {
        // Upload each file
        const uploadPromises = files.map(file => FileUpload(file, type, destination));
        const results = await Promise.all(uploadPromises);
        return results;
    } catch (error) {
        console.error('Error uploading multiple photos:', error);
        throw error;
    }
}





//for sigle file delete function
export async function fileDelete(singleData) {

    if (singleData) {
        try {
            const result = await cloudinary.uploader.destroy(singleData.file.public_id);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    } else {
        console.error('Unable to extract public_id from secure_url:');
    }
}



//for multipul file delete function
export async function multipulfileDelete(publicIds) {
    if (publicIds && Array.isArray(publicIds) && publicIds.length > 0) {

        try {
            const result = await cloudinary.api.delete_resources(publicIds);
            return true;
        } catch (error) {
            return false;
        }

    } else {
        return false;
    }
}



//check is the file is single or multipul
export async function issingleormultipulUpload(file, type, destination) {

    if (file.length > 1) {
        const result = await multipleFileUpload(file, type, destination);
        return result;
    } else {
        const result = await FileUpload(file[0], type, destination);
        return result;
    }

}



export const allresourse = async () => {
    // const folder = 'Laquan_Smith'; // Replace with your folder name


    try {
        await cloudinary.api.resources({
            type: 'upload',
            // // prefix: folder,
            max_results: 5000,// Adjust as needed,
            // next_cursor: null
        }, function (error, result) {
            if (error) {
                console.error('Error fetching resources:', error);
            } else {

                result?.resources?.map((item) => {
                    console.log(item?.secure_url);
                })



            }
        });
    } catch (error) {
        console.log(error);
    }





}
