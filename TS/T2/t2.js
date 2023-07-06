var MyDB = /** @class */ (function () {
    function MyDB(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    return MyDB;
}());
var entity = new MyDB(1, "ex1", "desc");
console.log("".concat(entity.id, " ").concat(entity.name, " ").concat(entity.description));
