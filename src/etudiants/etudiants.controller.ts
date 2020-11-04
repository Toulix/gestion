import { Controller, Delete, Get, Post, Patch, Param } from '@nestjs/common';

@Controller('etudiants')
export class EtudiantsController {
  //read all students
  @Get()
  getAllStudents(): String {
    return 'all students';
  }
  //read one student
  @Get(':id')
  getOneStudent(@Param('id') string): String {
    return 'this returns a single students';
  }
  //create a student
  @Post()
  createStudent(): String {
    return 'create a student';
  }
  //delete single student
  @Delete(':id')
  deleteOneStudent(@Param('id') string): String {
    return 'student deleted';
  }
  //update one student
  @Patch(':id')
  updateOneStudent(): string {
    return 'student updated';
  }
}

//req.query
//import @Query('student') student
