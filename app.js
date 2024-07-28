let textContainer = document.querySelector(".textContainer");
let deleteKey = document.querySelector(".delete");
let deleteKe = document.querySelector(".deletee");
let enterKey = document.querySelector(".enter");
let enterKe = document.querySelector(".entere");
let spaceKey = document.querySelector(".space");
let spaceKe = document.querySelector(".spacee");
let capsLock = document.querySelector(".capslock");
let emoj = document.querySelector(".click");
let com = document.querySelector(".com");
let gon   = document.querySelector(".gon");
let colo   = document.querySelector("#colo");
let rest   = document.querySelector("#rest");

let emoji   = document.querySelector(".man");
let allKey = document.querySelectorAll(".key");
let setting = document.querySelector(".setting");
let isCaps = false;

deleteKey.addEventListener("click",function(){
    let textContainerContent = textContainer.innerText;
    if(textContainerContent.length == 0){
        return;
    }
    console.log(textContainerContent);
    let newContent = textContainerContent.slice(0,textContainerContent.length-1);
    textContainer.innerText = newContent;
})
deleteKe.addEventListener("click",function(){
    let textContainerContent = textContainer.innerText;
    if(textContainerContent.length == 0){
        return;
    }
    console.log(textContainerContent);
    let newContent = textContainerContent.slice(0,textContainerContent.length-1);
    textContainer.innerText = newContent;
})

enterKey.addEventListener("click",function(){
    let content = textContainer.innerText;
    let newContent = content+"\n";
    textContainer.innerText = newContent;
})

enterKe.addEventListener("click",function(){
    let conten = textContainer.innerText;
    let newConten = conten+"\n";
    textContainer.innerText = newConten;
})

spaceKey.addEventListener("click",function(){
    let content = textContainer.innerText;
    let newContent = content+ '\u00A0';
    textContainer.innerText = newContent;
})
spaceKe.addEventListener("click",function(){
    let content = textContainer.innerText;
    let newContent = content+ '\u00A0';
    textContainer.innerText = newContent;
})



capsLock.addEventListener("click",function(){
    if(isCaps){
        capsLock.classList.remove("active");
        for(let key of allKey){
            if(key.classList.contains("delete") || key.classList.contains("enter")||
             key.classList.contains("space") || key.classList.contains("capslock")){
        
            }else
                key.innerText = key.innerText.toLowerCase();
        }
    }else{
        capsLock.classList.add("active");
        for(let key of allKey){
                if(key.classList.contains("delete") || key.classList.contains("enter")||
                 key.classList.contains("space") || key.classList.contains("capslock")){
                    
                }else
                    key.innerText = key.innerText.toUpperCase();
            }
        }
    isCaps=!isCaps
})

for(let key of allKey){
    key.addEventListener("click",function(){
        if(key.classList.contains("delete") || key.classList.contains("enter")||
         key.classList.contains("space") || key.classList.contains("capslock")){
            return;
        }
        textContainer.innerText += key.innerText;
    })
}

emoj.addEventListener("click",function(){
      gon.style.display = "none";
      emoji.style.display = "flex";
      setting.classList.remove("settin");
})
com.addEventListener("click",function(){
    emoji.style.display = "none";
    gon.style.display = "block";
    
})

colo.addEventListener("change",function(){
    gon.style.background = colo.value;
    textContainer.style.borderColor = colo.value;
})
rest.addEventListener("click",function(){
    gon.style.background = "rgb(228, 221, 221)";
    textContainer.style.borderColor = "rgb(228, 221, 221)";
})

function ope(){
    setting.classList.add("settin");
}
function clos(){
    
    setting.classList.remove("settin");
   
}