// Init GitHub
const github = new GitHub;

const ui = new UI;

// Storing input field in a variable
let inputField = document.querySelector("input");

inputField.addEventListener("keyup",(event)=>{
    //Get input text
    const userText = event.target.value;

    

    if(userText !== ""){
        //Make http call
        github.getUser(userText)
        .then(data =>{
            if(data.profile.message === "Not Found"){
                // Show alert
            }else{
                ui.showProfile(data.profile);
            }
        })
    }else{
        //Clear profile
    }
})

