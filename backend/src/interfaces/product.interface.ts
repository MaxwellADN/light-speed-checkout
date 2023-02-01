import { Document } from "mongoose";
import { ProductStatusEnum } from "../enums/product-status.enum";
import { ProductFileInterface } from "./product-file.interface";
import { TaxInterface } from "./tax.interface";
import { TenantInterface } from "./tenant.interface";
import { UserInterface } from "./user.interface";

export interface ProductInterface extends Document {
    /**
     * Role id
     */
    id: string;
    /**
     * Date creation
     */
    createdAt: Date;
    /**
     * Updated date
     */
    updateAt: Date
    /**
     * Role name
     */
    name: string;
    /**
     * Produc description
     */
    description: string;
    /**
     * Product price
     */
    price: number;
    /**
     * Stepper index
     */
    stepperIndex: number;
    /**
     * True if file step is completed
     */
    filesStepCompleted: boolean;
    /**
     * True if product form is completed
     */
    formStepCompleted: boolean;
    /**
     * Product status
     */
    status: ProductStatusEnum;
    /**
     * Product dowloadable files
     */
    files: ProductFileInterface[];
    /**
     * Tax
     */
    tax: TaxInterface;
    /**
     * The user that create the data
     */
    createdBy: UserInterface;
    /**
     * The tenant
     */
    tenant: TenantInterface;
}