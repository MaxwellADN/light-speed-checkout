export interface TaxInterface {
    /**
     * Id
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
     * Tax name
     */
    name: string | undefined;
    /**
     * Tax rate
     */
    rate: number | undefined;
}