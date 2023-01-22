/// <reference path = "Teacher.ts"/>
namespace Subjects{
    export interface Teacher{
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject{
        getRequirements(): string {
            return "Here is a list of requirement for Cpp"
        }

        getAvailableTeacher(): string {
            const exp = this.teacher.experienceTeachingC
            if (exp > 0) {
                return `Available Teacher: ${this.teacher.firstName}`
            }else {
                return "no available teacher"
            }
        }
    }
}