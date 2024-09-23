const tar = document.querySelector(".conatiner")
const career= ["Krishna Pratap Singh","Student OF CS", "Studying in Patel College of Science And Technology","A WEB DEVELOPER", "Engineer From HEART","From BHoPAL"]
let careerIndex = 0

let characterIndex = 0;



updateText();
function updateText(){
    characterIndex++;
    tar.innerHTML = `
    <h1>I AM   ${career[careerIndex].slice(0,characterIndex)}</h1>
   `;
  
   if(characterIndex === career[careerIndex].length){
    careerIndex++;
    characterIndex = 0
   }

   if(careerIndex === career.length){
    careerIndex = 0;
   }
   setTimeout(updateText,200)
}

