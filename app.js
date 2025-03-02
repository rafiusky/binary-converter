let resultBtn = document.querySelector(".result-btn");
resultBtn.addEventListener("click", deciToBinary);

const refreshButton = document.querySelector('.refresh-btn');
const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)

function deciToBinary() {  

  let deciNum = document.getElementById("number").value; //Decimal Number
 
  if( deciNum <= 0) {
    alert("Digite um numero positivo!")
  }  
  else {
  
  const numberOfBits = 32; // 32-bits binary
  const arrBitwise = [0]; // save the resulting bitwise
  
  for (let i=0; i<numberOfBits; i++) {
      let mask = 1;  
      const bit = deciNum & (mask << i); // And bitwise with left shift
  
      if(bit === 0) {
          arrBitwise[i] = 0;
      } else {
          arrBitwise[i] = 1;
      }
  }
  
  const binary = arrBitwise.reverse().join("");


const h2 = document.createElement('h2');
h2.innerHTML = binary;

const container = document.querySelector(".result-container");
container.append(h2);
}
}