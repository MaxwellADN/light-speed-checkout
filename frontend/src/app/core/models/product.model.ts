import { ProductStatusEnum } from "../enums/product-status.enum";
import { ProductInterface } from "../interfaces/product.interface";
import { ProductFile } from "./product-file.model";
import { Tax } from "./tax.model";

export class Product implements ProductInterface {
    /**
     * Role id
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
     * Role name
     */
    public name: string | undefined;
    /**
     * Produc description
     */
    public description: string | undefined;
    /**
     * Product price
     */
    public price: number | undefined;
    /**
     * Stepper index
     */
    public stepperIndex: number | undefined;
    /**
     * True if file step is completed
     */
    public filesStepCompleted: boolean | undefined;
    /**
     * True if product form is completed
     */
    public formStepCompleted: boolean | undefined;
    /**
     * Product status
     */
    public status: ProductStatusEnum | undefined;
    /**
     * Product dowloadable files
     */
    public files: ProductFile[] | undefined;
    /**
     * Tax
     */
    tax: Tax | undefined;

    /**
     * The constructor function is a function that is called when a new instance of a class is created.
     * 
     * The constructor function
     * @param {ProductInterface} [data] - ProductInterface
     */
    constructor(data?: ProductInterface) {
        if (data) {
            this.id = data.id;
            this.createdAt = data.createdAt;
            this.updateAt = data.updateAt;
            this.name = data.name;
            this.description = data.description;
            this.price = data.price;
            this.files = data.files;
            this.tax = data.tax;
            this.stepperIndex = data.stepperIndex;
            this.status = data.status;
            this.formStepCompleted = data.formStepCompleted;
            this.filesStepCompleted = data.filesStepCompleted
        }
    }
}