import { AdminService } from './admin.service';
import {  Query , Args, Mutation, Resolver} from "@nestjs/graphql";
import { Admin } from './admin.graphql.type';
import { UpdateAdminInput } from './admin.input.type';

@Resolver(of => Admin)
export class AdminResolver {
    constructor(private adminService : AdminService){}
    @Query(returns => [Admin], { name: 'admins'})
    async getAllAdmin() {
        return await this.adminService.findAll();
    }

    @Query(returns => Admin, { name: 'admin' })
    async getOneAdmin(@Args('adminId') adminId: string) {
        return await this.adminService.findById(adminId);
    }

    //Admin functionality
    @Mutation(returns => Admin)
    async createDefaultAdminProfile() {
        return await this.adminService.createDefault();
    }

    //update profile
    @Mutation(returns => Admin)
    async editAdminProfile(@Args('adminId')
                                 adminId: string,
                                @Args('updateAdminInput')
                                updateAdminInput: UpdateAdminInput) {
        return await this.adminService
                         .updateAdmin(adminId,updateAdminInput);
    }
}