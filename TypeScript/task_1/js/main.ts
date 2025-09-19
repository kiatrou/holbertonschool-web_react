interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: "Sherlock",
    fullTimeEmployee: false,
    lastName: "Holmes",
    location: "London",
    contract: false,
};
console.log(teacher3);