interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}
// const teacher3: Teacher = {
//     firstName: "Sherlock",
//     fullTimeEmployee: false,
//     lastName: "Holmes",
//     location: "London",
//     contract: false,
// };
// console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}
// const director1: Directors = {
//   firstName: 'John',
//   lastName: 'Doe',
//   location: 'London',
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };
// console.log(director1);
interface printTeacherFunction {
    //(parameter1: type, parameter2: type): returnType
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string) {
    return firstName[0] + "." + " " + lastName
};

console.log(printTeacher("Sherlock", "Holmes"));