const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet="abcdefghijklmnopqrstuvwxyz";
const numberSet="0123456789";
const symbolSet="~!@#$%^&*()_+{}<>?/\,.[];''";

const totalchar=document.getElementById("total-char");
const upperInput=document.getElementById("Upper-case");
const lowerInput=document.getElementById("Lower-case");
const numberInput=document.getElementById("number");
const symbolInput=document.getElementById("symbol");
const passBox=document.getElementById("pass-box");

const getRandomdata=(dataSet)=>{
         return dataSet[Math.floor(Math.random()*dataSet.length)];
}

const generatePassword=(password="")=>{
      if(upperInput.checked)
      {
        password+=getRandomdata(upperSet)
      }
      if(lowerInput.checked)
      {
        password+=getRandomdata(lowerSet)
      }
      if(numberInput.checked)
      {
        password+=getRandomdata(numberSet)
      }
      if(symbolInput.checked)
      {
        password+=getRandomdata(symbolSet)
      }
      if(password.length < totalchar.value)
      {
        return generatePassword(password)
      }
      passBox.innerText=truncateString(password,totalchar.value)
}

document.getElementById("btn").addEventListener(
    "click",
    function()
    {
        generatePassword();
    }
    )

    function truncateString(str,num){
        if(str.length > num)
        {
            let substr=str.substring(0,num);
            return substr;
        }
        else{
            return str;
        }
    }