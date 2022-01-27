function startAudio(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fjkAGnn0U/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){}
if(error){
    console.error(error);
}else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
    
    document.getElementById("result_label").innerHTML="I can hear: "+results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy: "+(results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img=document.getElementById("animalImage");
        
       

        if(results[0].label=="Barking - Dog"){
            img.src="JoJo.jpg";
            
        }
        else if(results[0].label=="Kaw - Kaw - Parrot"){
           
            img.src="Karen.webp";
            
        }
        else if(results[0].label=="Meowing - Cat"){
         
           
            img.src="pop.jpg";
            
        }
        else if(results[0].label=="Ooga - Booga- Gorilla")
        {
            
           
            
            img.src="Sir Phones alot.jpeg";
        }
        else{
            img.src="https://t4.ftcdn.net/jpg/02/18/96/33/360_F_218963301_G23swMwicGyTNqFnR1dqnhb96HPskm5r.jpg";
        }
    }
    

