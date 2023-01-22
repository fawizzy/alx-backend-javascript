/// <reference path="Teacher.ts"/>
namespace Subjects{
    export interface Teacher{
        experienceTeachingReact?:number;
    }
    export class React extends Subject{
        getRequirement(){
            return "Here is the list of requirement for React"
        }

        getAvailableTeacher(){
            const exp = this.teacher.experienceTeachingReact
            if (exp > 0){
                return `Available Teacher ${this.teacher.firstName}`
            }else{
                return "No available teacher"
            }
        }
    }
}