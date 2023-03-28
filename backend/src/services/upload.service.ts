import { ManagedUpload } from "aws-sdk/clients/s3";
import { BUCKET_NAME, space } from "../constants/space-bucket.constant";
import { FileInterface } from "../interfaces/file.interface";

export class UploadService {

    /**
     * It takes an array of files, uploads them to DigitalOcean Spaces, and returns an array of
     * FileInterface objects.
     * @param {any} files - any - this is the files that are being uploaded.
     * @returns The result array is being returned.
     */
    public async uploadFiles(files: any): Promise<FileInterface[]> {
        const result: FileInterface[] = [];
        try {
            for (const file of files) {
                const fileName = `${Date.now()}-${file.name}`;
                let uploadParameters = {
                    Bucket: BUCKET_NAME,
                    ContentType: 'multipart/form-data',
                    Body: file.data,
                    Key: fileName
                };
                space.upload(uploadParameters, function (error: Error, data:  ManagedUpload.SendData) {
                    if (error) {
                        console.error(error);
                        return;
                    }
                    console.log("data", data)
                    result.push({
                        createdAt: new Date(),
                        extension: file.extension,
                        filename: file.name,
                        url: data.Location,
                    });
                });
                console.log("result", result)
            }
        } catch (ex) {
            throw ex;
        }
        return result;
    }
}