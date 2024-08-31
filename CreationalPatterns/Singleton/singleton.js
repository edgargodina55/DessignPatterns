var Database = /** @class */ (function () {
    function Database() {
    }
    Database.getInstance = function () {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    };
    Database.prototype.someBussinessLogic = function () {
        console.log("Hola");
    };
    return Database;
}());
function clientCode() {
    let s1 = Database.getInstance();
    let s2 = Database.getInstance();
    if (s1 === s2) {
        console.log("Singleton works, both variables contain the same instance.");
        s1.someBussinessLogic();
    }
    else {
        console.log("Singleton failed, varables contain different instances.");
    }
}
clientCode();
