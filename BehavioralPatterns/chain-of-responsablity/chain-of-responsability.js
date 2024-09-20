var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var RequestHandler = /** @class */ (function () {
    function RequestHandler() {
        this.nextHandler = null;
    }
    RequestHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    RequestHandler.prototype.handle = function (code) {
        if (this.nextHandler)
            return this.nextHandler.handle(code);
        return '';
    };
    return RequestHandler;
}());
var OnCorrectRequest = /** @class */ (function (_super) {
    __extends(OnCorrectRequest, _super);
    function OnCorrectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnCorrectRequest.prototype.handle = function (code) {
        if (code === '200')
            return 'Correct request';
        return _super.prototype.handle.call(this, code);
    };
    return OnCorrectRequest;
}(RequestHandler));
var OnIncorrectRequest = /** @class */ (function (_super) {
    __extends(OnIncorrectRequest, _super);
    function OnIncorrectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnIncorrectRequest.prototype.handle = function (code) {
        if (code === '400')
            return 'Incorrect Request';
        return _super.prototype.handle.call(this, code);
    };
    return OnIncorrectRequest;
}(RequestHandler));
var OnForbbiddenRequest = /** @class */ (function (_super) {
    __extends(OnForbbiddenRequest, _super);
    function OnForbbiddenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnForbbiddenRequest.prototype.handle = function (code) {
        if (code === '403')
            return 'Forbbidden Request';
        return _super.prototype.handle.call(this, code);
    };
    return OnForbbiddenRequest;
}(RequestHandler));
var OnNewRequest = /** @class */ (function (_super) {
    __extends(OnNewRequest, _super);
    function OnNewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnNewRequest.prototype.handle = function (code) {
        if (code === '2795')
            return 'Godina Request';
        return _super.prototype.handle.call(this, code);
    };
    return OnNewRequest;
}(RequestHandler));
var correctRequest = new OnCorrectRequest();
var incorrectRequest = new OnIncorrectRequest();
var forbiddenRequest = new OnForbbiddenRequest();
var newRequest = new OnNewRequest();
function findResponsible(code) {
    var responsible = correctRequest.handle(code);
    if (responsible)
        return console.log(responsible);
    console.error('Inprocessible request');
}
function fetchSomething() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/users')];
                case 1:
                    _a.sent();
                    correctRequest.setNext(forbiddenRequest).setNext(newRequest).setNext(incorrectRequest);
                    findResponsible(String(2795));
                    return [2 /*return*/];
            }
        });
    });
}
fetchSomething();
