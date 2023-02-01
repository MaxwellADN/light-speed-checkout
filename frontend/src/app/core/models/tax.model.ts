import { TaxInterface } from "../interfaces/tax.interface";

export class Tax implements TaxInterface {
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
     * Tax name
     */
    public name: string | undefined;
    /**
     * Tax rate
     */
    public rate: number | undefined;
}