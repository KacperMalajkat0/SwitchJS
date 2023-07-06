function getValueByKey(obj, key) {
    return obj[key];
}
var user = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com'
};
var userName = getValueByKey(user, 'name');
var userAge = getValueByKey(user, 'age');
var userEmail = getValueByKey(user, 'email');
console.log(userName + " " + userAge + " " + userEmail);
