




var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var n3 = document.getElementById('n3')
var v = document.getElementById('variavel')
var m = document.getElementById('mapa')

n1.addEventListener('click' ,mudar1)
n2.addEventListener('click' ,mudar2)
n3.addEventListener('click' ,mudar3)

var string1 = ' <a id="fava" href="">fava</a> <a id="sorgo" href="">sorgo</a><a id="caferobusta" href="">caferobusta</a><a id="cafearábica" href="">cafearábica</a><a id="canadeaçucarlatex" href="">canadeaçucarlatex</a><a id="fumo" href="">fumo</a><a id="arrozaveiacenteio" href="">arrozaveiacenteio</a><a id="trigocevada" href="">trigocevada</a><a id="algodão" href="">algodão</a><a id="girasol" href="">girasol</a>'
var string2 = ' <a id="guarana" href="">guarana</a> <a id="cajumelao" href="">caju</a> <a id="cajumelao" href="">melao</a>   <a id="cacau" href="">cacau</a> <a id="cacaugraviolaguaraná" href="">Litoral baiano</a> <a id="abacate" href="">abacate</a> <a id="açaipimenta" href="">Pará</a> <a id="maracujá" href="">interior baiano</a> <a id="mangauvademesa" href=""> Rio São Srancisco, Petrolina e Juazeiro</a> <a id="mamãopimenta" href="">sul da Bahia e Espirito Santo</a> <a id="laranja" href="">São paulo</a> <a id="uvavinho" href="  ">Serra gaucha, Rio Grande do sul e Santa catarina</a> '
var string3 = ' <a id="cebola" href="">cebola</a><a id="macaxeiramandiocaaipim" href="">macaxeiramandiocaaipim</a><a id="tomaterasteiro" href="">tomaterasteiro</a><a id="mamona" href="">mamona</a><a id="batatainglesa" href="">batatainglesa</a><a id="alho" href="">alho</a> '

function mudar1(){
v.innerHTML = string1
m.src = 'imagens/cp1.jpg'
}

function mudar2(){
    v.innerHTML = string2
m.src = 'imagens/cp2.jpg'
}

function mudar3(){
    v.innerHTML = string3
m.src = 'imagens/cp3.jpg'
}






