function Toogler(){
    let darkModeOn=true;
    const darkMode=<h1>Dark Mode is On</h1>
    const lightMode=<h1>Light Mode is On</h1>
    const handleClick=()=>{
        
        darkModeOn=!darkModeOn;
        if(darkModeOn==true){
            console.log(darkMode);
        }else{
            console.log(lightMode);
        }
    }
return(
    <div>
    {darkModeOn?darkMode:lightMode}
    <button onClick={handleClick}>Click Me</button>
    </div>
)
}
export default Toogler