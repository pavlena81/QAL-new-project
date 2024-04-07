
class AuthException extends Error {
  constructor(code, message) {
      
    const fullMsg = message ? `${code}: ${message}` : code;
    super(fullMsg);
    this.name = code;
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
            console.log('e:', e);
            console.log('e type: ', e.type);
            console.log('currentTarget: ', e.currentTarget); 
            throw new AuthException('FORBIDDEN', 'You don\'t have access to this page');
                
        }
       
    } catch (e) {
        dialogBoxId(e.message);
        console.error(e);
        
     }
  
}

checkAuth.addEventListener('click', handleClick);

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
