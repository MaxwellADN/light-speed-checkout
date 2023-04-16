import { ClientSession } from "mongoose";
import { ProductInterface } from "../interfaces/product.interface";
import { TenantInterface } from "../interfaces/tenant.interface";
import Product from "../models/product.model";

export class ProductService {

    /**
     * It returns a promise that resolves to a ProductInterface or null
     * @param {string} id - string - The id of the user you want to get.
     * @returns A promise of a ProductInterface or null.
     */
    public async getSingle(id: string): Promise<ProductInterface | null> {
        return await Product.findById(id).populate('tax').exec();
    }

    /**
     * This function returns an array of ProductInterface objects, or null, based on the tenantId
     * parameter.
     * @param {string} tenantId - string - The tenantId is a string that is passed in from the
     * controller.
     * @returns An array of ProductInterface objects or null.
     */
    public async getAll(tenantId: string | TenantInterface, size: number, skip: number, searchTerm: string): Promise<ProductInterface[] | null> {
        const regex = new RegExp(searchTerm, 'i');
        return await Product.find(
            {
                $and: [
                    { tenant: tenantId },
                    {
                        $or: [
                            { name: { $regex: regex } },
                            { description: { $regex: regex } },
                            { status: { $regex: regex } }
                        ]
                    }
                ]
            })
            .skip(skip)
            .limit(size)
            .sort({ createdAt: -1 })
            .exec();
    }

    public async count(tenantId: string | TenantInterface): Promise<number | null> {
        return await Product.estimatedDocumentCount({ tenant: tenantId });
    }

    /**
     * This function creates a new user in the database and returns the newly created user.
     * @param {ProductInterface} user - ProductInterface - This is the user object that we are going to
     * create.
     * @returns The user object that was created.
     */
    public async create(user: ProductInterface): Promise<ProductInterface | null> {
        return await Product.create(user);
    }

    /**
     * This function creates a new user in the database, and returns an array of users that were
     * created.
     * @param {ProductInterface} user - ProductInterface - This is the user object that you want to create.
     * @param {ClientSession} session - ClientSession
     * @returns An array of ProductInterface objects.
     */
    public async createWithSession(user: ProductInterface, session: ClientSession): Promise<ProductInterface[] | null> {
        return await Product.create([user], { session: session });
    }

    /**
     * It updates a user in the database.
     * @param {ProductInterface} user - ProductInterface - This is the user object that we are going to
     * update.
     * @returns The updated user.
     */
    public async update(user: ProductInterface): Promise<ProductInterface | null> {
        return await Product.findByIdAndUpdate(user.id, user, { new: true });
    }

    /**
     * "Update a user in the database and return the updated user."
     * 
     * The function takes two parameters:
     * 1. user: ProductInterface
     * 2. session: ClientSession
     * 
     * The function returns a Promise that resolves to an array of ProductInterface objects or null
     * @param {ProductInterface} user - ProductInterface - This is the user object that you want to update.
     * @param {ClientSession} session - ClientSession
     * @returns The updated user.
     */
    public async updateWithSession(user: ProductInterface, session: ClientSession): Promise<ProductInterface[] | null> {
        return await Product.findByIdAndUpdate(user.id, user, { new: true, session: session });
    }

    /**
     * Delete a user from the database by id.
     * @param {string} id - string - The id of the user to delete
     * @returns The result of the deleteOne() method.
     */
    public async delete(id: string) {
        return await Product.deleteOne({ _id: id });
    }
}