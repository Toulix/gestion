import { Enseignant } from 'src/enseignant/enseignant.graphql.type';
import { EtudiantsService } from 'src/etudiants/etudiants.service';
import { EnseignantService } from 'src/enseignant/enseignant.service';
import { ScolariteService } from './../scolarite/scolarite.service';
import { CreateUserInput } from './input.type';

import { Etudiant } from './../etudiants/etudiant.graphql.type';
import { jwtConstants } from './../../constant';
import { User } from './../interface/user.interface';
import { Model } from 'mongoose';
import { UserService } from './user.service';
import { Utilisateur } from './user.graphql.type';
import {  Query , Args, Mutation, Resolver, Parent, ResolveField, Context} from "@nestjs/graphql";
import { AuthenticationError } from 'apollo-server-express'
import { Logger, UseGuards } from '@nestjs/common';
import { CurrentUser } from './current-user';
import { InjectModel } from '@nestjs/mongoose';
import * as jwt from 'jsonwebtoken'

import { Admin } from 'src/interface/admin.interface';
import { Scolarite } from 'src/scolarite/scolarite.graphql.type';


@Resolver(of => Utilisateur)
export class UserResolver {
    private logger = new Logger(UserResolver.name);
    constructor(private userService: UserService,
                private scolariteService: ScolariteService,
                private enseignantService: EnseignantService,
                private etudiantService: EtudiantsService,
                @InjectModel('User') private readonly userModel: Model<User>,
                //@InjectModel('Etudiant') private readonly etudiantModel: Model<Etudiant>,
                //@InjectModel('Enseignant') private readonly enseignantModel: Model<Enseignant>,
                //@InjectModel('Scolarite') private readonly scolariteModel: Model<Scolarite>,
                //@InjectModel('Admin') private readonly adminModel: Model<Admin>,

                
                ) {}

    @Query(returns => [Utilisateur], { name: 'users'})
    async getAllUsers() {
        return await this.userService.findAll();
    }

    
    @Query(returns => Utilisateur)
    async me(@CurrentUser() user: Utilisateur) {
        this.logger.log(user)
        try{
            return await this.userService.findById(user.id);
        } catch {
            throw  new Error('No user to show')
        }
    }

    @Mutation(returns => String)
    async singIn(@Args('username') username: string,
                 @Args('password') password : string ) {

        const user = await this.userModel.findOne({username: username});
        if(!user) {
            throw new AuthenticationError("L'utilisateur n'existe pas")
        }

        if(user.password !== password) {
            throw new AuthenticationError("Nom d'utilisateur ou mot de passe invalide")
        }

        return  await jwt.sign({ id: user.id, username: user.username, roles: user.roles, profile: user.profile }, jwtConstants.secret)
    }

    @Mutation(returns => Utilisateur)
    async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
        const newUser = new this.userModel({ username: createUserInput.username,
                          password: createUserInput.password,
                          roles: createUserInput.roles,
                          profile: createUserInput.profile
                        })
        return await newUser.save();
    }
 

    //iProfile could be (idStudent, or idEnseignant, idScolarité)
    // @Mutation(returs => Utilisateur) 
    // async addProfile(@Args('userId') userId: string,
    //                  @Args('idProfile') idProfile : string ) {
        @Mutation(returs => Utilisateur)
        async addEnseignantProfileToUser(@Args('userId') userId: string,
                                        @Args('idProfile') idProfile: string) { //this is an update to add the proFile id to the user
           //userId we get it from createUserMutation()
          return await this.userModel.findOneAndUpdate(
            {
                _id: userId,
            },
            {
                $set: {
                    profile: idProfile
                }
            },
            {
                new: true
            }
        );
    }
        @Mutation(returs => Utilisateur)
        async addScolariteProfileToUser(@Args('userId') userId: string,
                                        @Args('idProfile') idProfile: string) { //this is an update to add the proFile id to the user
           //userId we get it from createUserMutation()
          return await this.userModel.findOneAndUpdate(
            {
                _id: userId,
            },
            {
                $set: {
                    profile: idProfile
                }
            },
            {
                new: true
            }
        );
    }

    @Mutation(returs => Utilisateur)
        async addAdminProfileToUser(@Args('userId') userId: string,
                                       @Args('idProfile') idProfile: string) { //this is an update to add the proFile id to the user
           //userId we get it from createUserMutation()
          return await this.userModel.findOneAndUpdate(
            {
                _id: userId,
            },
            {
                $set: {
                    profile: idProfile
                }
            },
            {
                new: true
            }
        );
    }

    @Mutation(returs => Utilisateur)
        async addEtudiantProfileToUser(@Args('userId') userId: string,
                                       @Args('idProfile') idProfile: string) { //this is an update to add the proFile id to the user
           //userId we get it from createUserMutation()
          return await this.userModel.findOneAndUpdate(
            {
                _id: userId,
            },
            {
                $set: {
                    profile: idProfile
                }
            },
            {
                new: true
            }
        );
    }
    
    // @ResolveField('scolariteProfile', returns => Scolarite)
    // async getScolariteProfile(@Parent() utilisateur: Utilisateur) {
    //     return await this.scolariteService.findById(utilisateur.scolariteProfile);
    // }

    // @ResolveField('enseignantProfile', returns => Enseignant)
    // async getEnseignantProfile(@Parent() utilisateur: Utilisateur) {
    //     return await this.enseignantService.findById(utilisateur.enseignantProfile);
    // }

    // @ResolveField('etudiantProfile', returns => Etudiant)
    // async getEtudiantProfile(@Parent() utilisateur: Utilisateur) {
    //     return await this.etudiantService.findById(utilisateur.etudiantProfile);
    // }
}
