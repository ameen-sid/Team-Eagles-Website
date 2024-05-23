// Import the Required Modules
import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';

// Interface of the function parameters
interface UploadImageOptions {
  file: File;
  folder: string;
  height?: number;
  quality?: number;
}

// Function to Upload Image to Cloudinary
export const uploadImageToCloudinary = async ({ file, folder, height, quality }: UploadImageOptions): Promise<UploadApiResponse> => {
  try {
    // divide image into buffers
    const buffer = await file.arrayBuffer();
    const bytes = Buffer.from(buffer);

    // upload image
    return new Promise( async (resolve, reject) => {
      cloudinary.uploader.upload_stream({
        resource_type: "auto",
        folder: folder,
        height: height,
        quality: quality,
      }, async (err, result: any) => {
        if (err) {
          reject(err.message);
        }
        resolve(result);
      }).end(bytes);
    });
    
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error; // Throw the error to be handled by the caller
  }
};
