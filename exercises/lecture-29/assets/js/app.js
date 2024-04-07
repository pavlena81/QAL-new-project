
class AuthException extends Error {
  constructor(code, message) {
      
    const fullMsg = message ? `${code}: ${message}` : code;
    super(fullMsg);
   
    this.code = code;
    this.message = fullMsg;
    
  }
  
  toString() {
    return this.message;
  }
}

const checkAuth = document.querySelector('.check-auth');


const handleClick = (e) => {   
    try { 
        if (isAuth!==true) {           
            
            throw new AuthException('FORBIDDEN', 'You don\'t have access to this page');
                
        }        
        window.open('success.html');        
       
        } catch (e) {
        showDialog(e.message);
        console.error(e);
        
        }
  
}

checkAuth.addEventListener('click', handleClick);
// let isAuth = true;
let isAuth = (auth)  => auth ?? false;

let dialogBoxId=document.getElementById("dialogBox");


function showDialog(e){
  dialogBoxId.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
    }
  });
  
  dialogBoxId.showModal();
}

function closeDialog(){
  dialogBoxId.close(); 
}
