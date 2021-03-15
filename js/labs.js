class Labs{
    constructor(){
        this.wbc1 = createElement("h2");
        this.wbc = createInput("");

        this.hmg = createElement("h2");
        this.hmg1 = createInput("");

        this.platelet = createElement("h2");
        this.platelet1 = createInput("");
        this.today = createElement("h2");
        this.calendar = createElement("h2");

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
        this.wbc1.show();
        this.wbc1.html("Enter WBC count:");
        this.wbc1.position(width/6, height*6/8);
        this.wbc.show();
        this.wbc.position(width/6, height*8/10);

        this.hmg.show();
        this.hmg.html("Enter Haemoglobin Count:");
        this.hmg.position(width/2, height*6/8);
        this.hmg1.show();
        this.hmg1.position(width/2, height*8/10);

        this.platelet.show();
        this.platelet.html("Enter platelet Count: ");
        this.platelet.position(width*5/6,height*6/8);
        this.platelet1.show();
        this.platelet1.position(width*5/6, height*8/10);

        this.today.show();
        this.today.html("Day "+dayIndex);
        this.today.position(width/2, height/2);

        this.calendar.show();
        this.calendar.html("Calendar");
        this.calendar.position(width/2, 0);

    }
    hide(){
        this.wbc.hide();
        this.wbc1.hide();
        this.hmg.hide();
        this.hmg1.hide();
        this.platelet.hide();
        this.platelet1.hide();
        this.bsa.hide();
        this.counts.hide();
        this.tablets.hide();
        this.dashboard.hide();
        this.today.hide();
    }
}