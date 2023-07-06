function getValueByKey<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com'
};
  
const userName = getValueByKey(user, 'name');
const userAge = getValueByKey(user, 'age');
const userEmail = getValueByKey(user, 'email');

console.log(userName + " " + userAge + " " + userEmail);