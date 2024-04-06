
const en_pt = {
    FLIGHT: "VOO",
    HOTEL: "HOTEL",
    RENTAL: "ALUGUEL",
    "longer text": "texto mais longo"
  }
  
  // inverte o objeto de cima
  const pt_en = Object.entries(en_pt).reduce(
    (acc, [key, value]) => ({ ...acc, [value]: key }),
    {}
  )
  console.log(pt_en)
let traduzido = false
  
  const elementos = document.getElementsByClassName("traduzir")
  
  function traduzir() {
    for (let i = 0; i < elementos.length; i++) {
      const elemento = elementos[i]
      console.log("1", 2, 3, 4, 5)  
      if (traduzido) {
        elemento.textContent = pt_en[elemento.textContent]
      } else {
        elemento.textContent = en_pt[elemento.textContent]
      }

    }
  
    // inverte o booleano
    traduzido = !traduzido
  }
  

 