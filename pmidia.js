
let lupa = document.getElementById("lupa")
const en_pt = {
    FLIGHT: "VOO",
    HOTEL: "HOTEL",
    RENTAL: "ALUGUEL",
    "Travel the world with us": "Viaje pelo mundo conosco",
    To: "Para",
    From:"De",
    "Good Offiers Right Now" : "Boas ofertas agora mesmos",
    "Departin from" : "Partindo de",
    "Up to 50% discount." : "Desconto de até 50%!",
    "Explore Nature": "Explore a natureza",
    "Travel with us and see nature at its finests" : "Viage conosco e veja a natureza na sua melhor fase! ",
    "West Coast, Norway" : "Costa Oeste, Noruega",
    "Roundtrip from $79" : "Ida e volta a partir de 79 Dólares",
    "Preasent tincidut sed tellus sid vitae justo." : "Praias lindas! Venha conhecer o lado gelado de cá!",
    "Buy Tickets" : "Comprar passagem",
    "Montais, Austria" : "Montanhas, Austria",
    "Roundtrip from $39" : "Ida e volta a partir de 39 Dólares",
    "Preasent tinciidut sed tellus sid vitae justo." : "Venha passar uns dias nas monstanhas, tomar um chocolate quente !",
    "Get the best offers first!" : "Pegue a melhor oferta primeiro!",
    "Join our newsletter." : "Junte-se ao nosso boletim informativo.",
    "Your E-mail adress" : "Seu endereço de email",
    "Contact" : "Contatos",
    "Let us book your next trip!" : "Deixe-nos agendar sua proxima viagem!",
    "Find us on" : "Fale conosco",    
    "SEND MESSAGE" : "Mande mensagem",
    "Search and find dates" : "Procure e ache datas",
    "Subscribe" : "Inscreva-se",
    "Arrinving at" : "Vindo de",
    "longer text": "texto mais longo"
    
  }
  
  // inverte o objeto de cima
  const pt_en = Object.entries(en_pt).reduce(
    (acc, [key, value]) => ({ ...acc, [value]: key }),
    {}
  )
  console.log(pt_en)
let traduzido = false
  
  const elementos = document.getElementsByName("traduzir")
  const inpts = document.querySelector('input[name="traduzir] input[type=text]')
  function traduzir() {
    for (let i = 0; i < elementos.length; i++) {
      const elemento = elementos[i]
      console.log(1, 2, 3, 4, 5)  
      if (traduzido) {
        elemento.innerText = pt_en[elemento.innerText]
      } else {
        elemento.innerText = en_pt[elemento.innerText]
      }
     
      
 
      
      
    }
  
    // inverte o booleano
    traduzido =!traduzido
  }
   
  const checkbox = document.getElementById("checkbox")
  const header = document.getElementById('header')
  checkbox.addEventListener('change' , () =>{
    document.body.classList.toggle('dark')
    document.getElementById('header').classList.toggle('dark')
      document.getElementById('descrição1').style.color = 'white'
      document.getElementById('descrição1').style.backgroundColor = 'rgba(0, 0, 0, 0.740)'
      document.getElementById('descrição2').style.color = 'white'
      document.getElementById('descrição2').style.backgroundColor = 'rgba(0, 0, 0, 0.740)'
      
      lupa.src = 'vidro.png'

  })

  
  