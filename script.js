let flag=false;

function LoJsubMenu(){
    let LOJM=document.getElementById("LOJMenu");
    LOJM.classList.toggle("viewNone");
    LOJM.classList.toggle("LOJMenu");
    let LOJ=document.getElementById("LOJ");
    LOJ.classList.toggle("bccolor");
    let JusticMenu=document.getElementById("JusticMenu");
    let Justic=document.getElementById("Justic");
    if(JusticMenu.className=='JusticMenu'){
        JusticMenu.classList.toggle("viewNone");
        JusticMenu.classList.toggle("JusticMenu");
        Justic.classList.remove("bccolor");
    }
}

function justicMEnu(){
    let JusticMenu=document.getElementById("JusticMenu");
    JusticMenu.classList.toggle("viewNone");
    JusticMenu.classList.toggle("JusticMenu");
    let Justic=document.getElementById("Justic");
    Justic.classList.toggle("bccolor");
    let LOJM=document.getElementById("LOJMenu");
    let LOJ=document.getElementById("LOJ");
    if(LOJM.className=='LOJMenu'){
        LOJM.classList.toggle("LOJMenu");
        LOJM.classList.toggle("viewNone")
        LOJ.classList.remove("bccolor")
    }
}

function menuViewControl(){
    let Menubar=document.getElementById("Menubar");
    let rightChat=document.getElementById("rightChat");
    Menubar.classList.toggle("leftMenu");
    Menubar.classList.toggle("viewNone");
    if(Menubar.className=="viewNone"){
        rightChat.style.width='100%'
    }
    else{
        rightChat.style.width='82%'
    }
    let LOJMenu=document.getElementById("LOJMenu");
    if(LOJMenu.className=='LOJMenu'){
        LOJMenu.classList.remove("LOJMenu");
        LOJMenu.classList.add("viewNone")
        let LOJ=document.getElementById("LOJ");
        LOJ.classList.toggle("bccolor");
    }

    let JusticMenu=document.getElementById("JusticMenu");
    if(JusticMenu.className=='JusticMenu'){
        JusticMenu.classList.remove("JusticMenu");
        JusticMenu.classList.add("viewNone")
        let Justic=document.getElementById("Justic");
        Justic.classList.toggle("bccolor");
    }
}

function mic(){
    let voiceBody=document.getElementById("voiceBody");
    voiceBody.classList.toggle("VoiceBody");
    voiceBody.classList.toggle("viewNone");
}


// for voice search purpose


let voiceBody=document.getElementById("voiceBody");
let Start=document.getElementById("Start");
let written=document.getElementById("written");


Start.addEventListener('click', function() {
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = document.getElementById("language-select").value; // Select language
    
    let hasResponded = false; // To avoid multiple replies for the same input

    recognition.addEventListener('result', e => {
        let transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
            .trim()
            .toLowerCase(); // Clean the transcript

        written.value = transcript;

        if (e.results[0].isFinal && !hasResponded) { // Only respond when speech is final
            let responseText = '';

            // Match various phrases
            if (transcript.includes('hello')) {
                responseText = 'Hello! How can I help you today?';
            } else if (transcript.includes('how are you')) {
                responseText = 'I am doing great, thank you!';
            } else if (transcript.includes('what is your name')) {
                responseText = 'my name is nitimitra, an ai chatbot';
            } else {
                responseText = "I didn't understand that.";
            }

            speak(responseText, recognition.lang); // Respond
            hasResponded = true; // Prevent multiple responses
        }
    });

    recognition.addEventListener('end', () => {
        hasResponded = false; // Reset the flag after recognition ends
        let voiceBody = document.getElementById("voiceBody");
        voiceBody.classList.toggle("VoiceBody");
        voiceBody.classList.toggle("viewNone");
    });

    if (speech) {
        let voiceBody = document.getElementById("voiceBody");
        voiceBody.classList.toggle("viewNone");
        recognition.start();
    }
});

// Function to handle text-to-speech
function speak(text, lang) {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
}










// Start.addEventListener('click', function() {
//     var speech = true; 
//     window.SpeechRecognition = window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();
//     recognition.interimResults = true;

//     let hasSpoken = false; // Flag to ensure speech happens once

//     const selectedLanguage = document.getElementById("language-select").value;
//     recognition.lang = selectedLanguage; 

//     recognition.addEventListener('result', e => {
//         const transcript = Array.from(e.results)
//             .map(result => result[0])
//             .map(result => result.transcript)
//             .join('').trim().toLowerCase(); // Clean transcript
        
//         written.value = transcript;

//         let responseText = '';

//         // Improved condition checking for phrases
//         if (transcript.includes('name')) {
//             responseText = 'I am your voice assistant!';
//         } else if (transcript.includes('how are you')) {
//             responseText = 'I am doing great, thank you!';
//         } else if (transcript.includes('what is your name')) {
//             responseText = 'I am your voice assistant!';
//         } else {
//             responseText = "I didn't understand that.";
//         }

//         // Only speak if the flag has not been set yet
//         if (!hasSpoken) {
//             speak(responseText, recognition.lang);
//             hasSpoken = true; // Set the flag to true so it doesn't repeat
//         }
//     });

//     recognition.addEventListener('end', () => {
//         hasSpoken = false; // Reset the flag for the next recognition cycle
//         let voiceBody = document.getElementById("voiceBody");
//         voiceBody.classList.toggle("VoiceBody");
//         voiceBody.classList.toggle("viewNone");
//     });

//     if (speech == true) {
//         let voiceBody = document.getElementById("voiceBody");
//         voiceBody.classList.toggle("viewNone");
//         recognition.start();
//     }
// });

// // Text-to-speech function
// function speak(text, lang) {
//     const speechSynthesis = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = lang; // Set the language for speech
//     speechSynthesis.speak(utterance);
// }






//send the msg


function sendreq(){
    let right=document.querySelector("#req-res");
    let count="";
    let written=document.getElementById("written");
    let text=written.value;
    if(text==""){
        alert("Please write something !!!");
    }
    else
    {
        console.log(text)
        written.value="";
        count =`<div class="reqest" style="height: auto; max-width: 70%; font-size: 21px; color: white; padding: 10px; border-radius: 15px; background-color: black;">${text}</div>`;
        right.innerHTML+=count;
    }
}

//supreme court judge link 


function supremJudge() {
    window.open("https://www.sci.gov.in/chief-justice-judges/", "_blank");
  }

  function highCourt(){
    window.open("./hightcourtJudge.html")
  }

// function darkMode(){
//     if(flag==false){
//         flag=true;
//     }
//     else{
//         flag=false;
//     }
//     let modeicon=document.getElementById("modicon");
//     modeicon.classList.toggle("fa-moon");
//     modeicon.classList.toggle("fa-sun");
//     let nav=document.getElementById("nav");
//     nav.classList.toggle("nav");
//     nav.classList.toggle("navdark");
//     let menubar=document.getElementById("Menubar");
//     menubar.classList.toggle("leftMenu");
//     menubar.classList.toggle("leftmenudark");
//     let menuHandele=document.getElementById("menuHandle");
//     menuHandele.classList.toggle("menuHandle");
//     menuHandele.classList.toggle("menuHandledark");
//     let op1=document.getElementById("op1");
//     op1.classList.toggle("option");
//     op1.classList.toggle("optiondark");
//     let op2=document.getElementById("op2");
//     op2.classList.toggle("option");
//     op2.classList.toggle("optiondark");
//     let LOJ=document.getElementById("LOJ");
//     LOJ.classList.toggle("option");
//     LOJ.classList.toggle("optiondark");
//     let op4=document.getElementById("op4");
//     op4.classList.toggle("option");
//     op4.classList.toggle("optiondark");
//     let op5=document.getElementById("op5");
//     op5.classList.toggle("option");
//     op5.classList.toggle("optiondark");
//     let op6=document.getElementById("op6");
//     op6.classList.toggle("option");
//     op6.classList.toggle("optiondark");
//     let mode=document.getElementById("mode");
//     mode.classList.toggle("modedark");
//     mode.classList.toggle("mode");
//     let fontchange=document.getElementById("fontchange");
//     fontchange.classList.toggle("fontchange");
//     fontchange.classList.toggle("fontchangedark");
//     let languageOption=document.getElementById("languageOption");
//     languageOption.classList.toggle("languageOption");
//     languageOption.classList.toggle("languageOptiondark");
//     let botBody=document.getElementById("botBody");
//     botBody.classList.toggle("botBody");
//     botBody.classList.toggle("botBodydark");
//     let bottumInput=document.getElementById("buttomInput");
//     bottumInput.classList.toggle("bottumInput");
//     bottumInput.classList.toggle("bottumInputdark");
//     let LOJMenu=document.getElementById("LOJMenu");
//     LOJMenu.classList.toggle("LOJMenu")
//     LOJMenu.classList.toggle("LOJMenudark")
//     let subop1=document.getElementById("subop1");
//     subop1.classList.toggle("suboption");
//     subop1.classList.toggle("suboptiondark");
//     let subop2=document.getElementById("subop2");
//     subop2.classList.toggle("suboption");
//     subop2.classList.toggle("suboptiondark");
//     let subop3=document.getElementById("subop3");
//     subop3.classList.toggle("suboption");
//     subop3.classList.toggle("suboptiondark");
// }