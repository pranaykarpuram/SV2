class Dashboard{
    constructor(){
        this.name = createElement('h2');
        this.number = createElement('h2');
        this.dob = createElement('h2');
        this.address = createElement('h2');
        this.mail = createElement('h2');
        this.title = createElement('h2');
        this.bsa = createButton("Calculate BSA");
        this.counts = createButton("Labs");
        this.tablets = createButton("Talets");
        this.dashboard = createButton("Dashboard");
    }

    display(){
        this.bsa.show();
        this.bsa.position(0,height*3/4);
        this.bsa.mousePressed(()=>{
            state = "BSA";
        });

        this.counts.show();
        this.counts.position(width*1/3,height*3/4);
        this.counts.mousePressed(()=>{
            state = "counts"
        });

        this.tablets.show();
        this.tablets.position(width*2/3,height*3/4);
        this.tablets.mousePressed(()=>{
            state = "tablets"
        });

        this.dashboard.show();
        this.dashboard.position(width,height*3/4);
        this.dashboard.mousePressed(()=>{
            state = "dashboard";
        });

        this.name.show();
        this.name.html("Name: "+data.name); //Change data.name to var name from getName();
        this.name.position(width/2, height*1/5);

        this.number.show();
        this.number.html("Phone No. :"+data.number);
        this.number.position(width/2, height*2/5);

        this.dob.show(); //Change to Age
        this.dob.html("Date of Birth: "+data.dob);
        this.dob.position(width/2,height*3/5);

        this.address.show();
        this.address.html("Address: "+data.address);
        this.address.position(width/2, height*4/5);

        this.mail.show();
        this.mail.html("E-mail ID: "+data.mail);
        this.mail.position(width/2, height);

        this.title.show();
        this.title.html("Personal Info");
        this.title.position(width/2, 0);
    }
    hide(){
        this.title.hide();
        this.name.hide();
        this.number.hide();
        this.dob.hide();
        this.address.hide();
        this.bsa.hide();
        this.counts.hide();
        this.tablets.hide();
        this.dashboard.hide();
        this.mail.hide();
    }
}