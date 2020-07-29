class Biosensor {
    constructor(name){
        this.user=name;
        this.heartRate=0;
        this.continous()
    }
    //This is a function to generate a random number between two numbers
    getRandomArbitrary(min, max){
        return parseInt(Math.random()*(max - min) + min);
    }
    //This function generates random heart rate and logs it in the sensor
    beatRate(){
    //Generate random heartrate between 60 and 100 (the range of normal heartrate)
        let pulse=this.getRandomArbitrary(60,100);
        this.heartRate=pulse;
        console.log('[user]:' +this.user + '    |    [pulse]:' +this.heartRate);
    }
    //This is a function to continously generate random heartrate every second
    continous(){
        setInterval(()=>{this.beatRate()}, 1000);
    }
}

let Tosin=new Biosensor('Tosin')