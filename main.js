function preload(){
    classifier=ml5.imageClassifier('DoodleNet');

}

function setup() {
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
    

}

function draw(){
    strokeWeight(13);
    stroke(0);

    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)

    }

}

function clearCanvas(){
    background("white");
    
}

function classifyCanvas(){
    classifier.classify(canvas,gotResult);          
}

function gotResult(error,result){
    if(error){
        console.error(error);

    }
    console.log(result);
    document.getElementById("label").innerHTML="Label:"+result[0].label;
    percent=Math.floor(result[0].confidence*100);
    document.getElementById("confidence").innerHTML="Confidence:"+percent+"%";
}

(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());