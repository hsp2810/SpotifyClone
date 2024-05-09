import { v2 as cloudinary } from "cloudinary";

export const connectToCloud = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });
};

export const getBuffer = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  return buffer;
};

export const insertMusic = async (file: File) => {
  connectToCloud();

  const buffer = await getBuffer(file);
  const results = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "spotify/music",
          resource_type: "raw",
        },
        function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        }
      )
      .end(buffer);
  });

  return results;
};

export const insertArtistProfilePic = async (file: File) => {
  connectToCloud();

  const buffer = await getBuffer(file);
  const results = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "spotify/artists",
          resource_type: "raw",
        },
        function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        }
      )
      .end(buffer);
  });
  return results;
};
