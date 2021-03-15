class BSA{
    constructor(){
        this.height = createInput("");
        this.weight = createInput("");
        this.title = createElement('h1');
        this.title1 = createElement('h3');
        this.title2 = createElement('h3');
        this.bsa = createElement('h1');
        this.enter = createButton('Enter');
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

        this.height.show();
        this.weight.show();
        this.title.show();
        this.title1.show();
        this.title2.show();
        this.bsa.show();
        this.enter.show();
        
        this.title.html("BSA CALCULATOR");
        this.title.position(width/2-50, 0);

        this.title1.html("Enter Height(in cm): ");
        this.title1.position(width/2,height/2-150);
        this.height.position(width/2,height/2-100);

        this.title2.html("Enter Weight(in kg): ");
        this.title2.position(width/2,height/2);
        this.weight.position(width/2, height/2+100);

        this.enter.position(width/2,height*3/4);



        this.enter.mousePressed(()=>{
            this.height.hide();
            this.weight.hide();
            this.title1.hide();
            this.title2.hide();
            height = this.height.value();
            weight = this.weight.value();
            var bsa = ((height*weight)/3600)^1/2
            this.bsa.html("Your Body Surface Area is: "+ bsa);
            this.bsa.position(width/2, height/2);
            data.bsa = bsa;



        });





    }
    hide(){
        this.height.hide();
        this.weight.hide();
        this.title.hide();
        this.title1.hide();
        this.title2.hide();
        this.bsa.hide();
        this.enter.hide();
        this.bsa.hide();
        this.counts.hide();
        this.tablets.hide();
        this.dashboard.hide();
    }

}