interface IPrototype<T>{
    clone(): T
}

class UserProfile implements IPrototype<UserProfile>{

    private username : string;
    
    constructor(
        username:string
    ){
        this.username = username
    }

    getUsername():string{
        return this.username;
    }

    clone(): UserProfile{
        return new UserProfile(this.username)
    }
}

class PremiumUserProfile extends UserProfile{

    private subLevel:string;

    constructor(
        username:string,
        sublevel:string
    ){
        super(username);
        this.subLevel=sublevel
    }

    clone(): PremiumUserProfile {
        return new PremiumUserProfile(this.getUsername(),this.subLevel);
    }

    getSublevel():string{
        return this.subLevel;
    }



}

const basicUser = new UserProfile("Edgar Godina")
console.log("Basic User ",basicUser.getUsername());

const clonesBasicUser = basicUser.clone();
console.log("Clone Basic User ",clonesBasicUser.getUsername());

const premiumUser = new PremiumUserProfile(clonesBasicUser.getUsername(),"Premium")
console.log("Premium User", premiumUser.getUsername(),"-",premiumUser.getSublevel())