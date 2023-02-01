import { ProductFileInterface } from "../interfaces/product-file.interface";

export class ProductFile implements ProductFileInterface {
    /**
     * Id
     */
    public id: string | undefined;
    /**
     * Date creation
     */
    public createdAt: Date | undefined;
    /**
     * Updated date
     */
    public updateAt: Date | undefined
    /**
     * File name
     */
    public filename: string | undefined;
    /**
     * File extension
     */
    public extension: string | undefined;
    /**
     * File storage url
     */
    public url: string | undefined;
}