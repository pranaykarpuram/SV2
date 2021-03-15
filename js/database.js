class Database{
    constructor(){
        this.name = null;
        this.number = null;
        this.dob = null;
        this.mail = null;
        this.address = null;
        this.username = null;
        this.password = null;

        this.bsa = null;
        this.wbc = null;
        this.hgb = null;
        this.platelet = null;

        this.tablet1 = null;
        this.tablet2 = null;
        this.tablet3 = null;
        this.tablet4 = null;
        this.tablet5 = null;

        this.day = null;

    }

    updatePersonalInfo(){
        var username = "username: "+this.username; //Add "PERSONAL INFO" Sub data, Add "Prescriptions", Add Med info/Day No. Date/ tablets and Med Info/ Counts/ wbc, hmg,etc
        database.ref(username).set({
            name: this.name,
            PhNo: this.number,
            dob: this.dob,
            address: this.address,
            Email: this.mail,
            username: this.username,
            password: this.password,

            tablet1: this.tablet1,
            tablet2: this.tablet2,
            tablet3: this.tablet3,
            tablet4: this.tablet4,
            tablet5: this.tablet5
        });
    }
    /*updatePrescriptions(){ uncomment after Med info
        var username = "username: "+this.username;//Add "MEDICAL INFO"
        database.ref(username).set({
            tablet1: this.tablet1,
            tablet2: this.tablet2,
            tablet3: this.tablet3,
            tablet4: this.tablet4,
            tablet5: this.tablet5

        });
    }*/ 

    /*getUsername(){
        var usernameRef = database.ref('username: '+username); // Add "PERSONAL INFO in the ref"
        var UsernameRef2 = database.ref(usernameRef/name);
        usernameRef2.on("value",(data)=>{
            correctUsername = data.val();
        });
    }*/
    getName(){

    }
    getNumber(){

    }
    getAge(){

    }

    getMail(){

    }
    getAddress(){

    }
    
}