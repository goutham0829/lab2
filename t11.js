function createProfile({name,email}){
    return {name,email};
}
const user={
    name:"John doe",
    email:"johndoe@example.com",
    age:30,
    address:'123 main St spring field'
};
const profile=createProfile(user);
console.log(profile);