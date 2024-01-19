# CLOUDINARY UPLOAD

Uploads images to cloudinary solely using React

Unsigned uploads do not need signature and secret. Only need to go to Settings in Cloudinary, choose Upload, go to upload preset, choose `Add Upload Preset`, copy key, select `unsigned` in dropdown and save

Add Upload Preset key to .env

Go to Dashboard and copy cloud name

Add to .env

Then use the code and it should work.

[Cloudinary API reference](https://cloudinary.com/documentation/image_upload_api_reference)

[Programmatically Uploading Data](https://cloudinary.com/documentation/upload_images)

[Admin API Reference](https://cloudinary.com/documentation/admin_api)

[FormData Array](https://developer.mozilla.org/en-US/docs/Web/API/FormData/values)
