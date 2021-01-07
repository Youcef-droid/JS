function StopWatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if (running){
            throw new Error ("StopWatch has already started.")
        } 
        running = true;
        let elem = document.getElementById("demo")
        startTime = setInterval(frame,1)
        function frame() {
            duration+=0.001; 
            elem.duration = duration+=0.001; 
    }
  
        //startTime = setInterval("demo.innerHTML =(new Date-s)/1000")
        //document.getElementById("demo").innerHTML =parseFloat(duration.toFixed(3))
        
    }

    this.stop = function(){
        if (!running){
            throw new Error ("StopWatch has already stopped.")
        } 
        running = false;
        endTime = clearInterval(startTime)
    }

    this.reset = function(){
        endTime = null;
        startTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this , 'duration' , {
        get : function(){
            return  document.getElementById("demo").innerHTML =parseFloat(duration.toFixed(3));
        }
        
    },{
        set : function(){
            if (running = true){
                throw new Error ("StopWatch has already started.")
            } 
        }
    });
    
}

const sw = new StopWatch()