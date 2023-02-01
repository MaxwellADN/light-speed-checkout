import { ProductStatusEnum } from "../enums/product-status.enum";
import { ProductFile } from "../models/product-file.model";
import { Tax } from "../models/tax.model";

export interface ProductInterface {
    /**
     * Role id
     */
    id: string | undefined;
    /**
     * Date creation
     */
    createdAt: Date | undefined;
    /**
     * Updated date
     */
    updateAt: Date | undefined
    /**
     * Role name
     */
    name: string | undefined;
    /**
     * Produc description
     */
    description: string | undefined;
    /**
     * Product price
     */
    price: number | undefined;
    /**
     * Stepper index
     */
    stepperIndex: number | undefined;
    /**
     * True if file step is completed
     */
    filesStepCompleted: boolean | undefined;
    /**
     * True if product form is completed
     */
    formStepCompleted: boolean | undefined;
    /**
     * Product status
     */
    status: ProductStatusEnum | undefined;
    /**
     * Product dowloadable files
     */
    files: ProductFile[] | undefined;
    /**
     * Tax
     */
    tax: Tax | undefined;
}