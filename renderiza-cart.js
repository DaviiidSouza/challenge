var xhr = new XMLHttpRequest();

xhr.open("GET","products.json");
xhr.addEventListener("load",function(){
    var resposta = xhr.responseText;
    resposta = JSON.parse(resposta)

    //variáveis
    var total = 0;
    var nome = "nome-prod";
    var qtd = "quantidade";
    var preco = "preco";
    //Consumir Json
    resposta.cart.item.forEach(function(produto){
        
        //renderização com classes
        $(".produtos").append("<img src="+produto.image+"><div class="+nome+">"+produto.name+"</div><div class="+qtd+">Qtd.: "+produto.quantity+"</div><div class="+preco+">"+produto.bestPriceFormated+"</div>")
        total = total+produto.bestPrice;
       
    });
    
    total = total.toString();
    total = total.slice(0, -2) +"," + total.slice(-2);
        
        $(".total").append("<span>Total e Compras: <strong>"+total+"</strong></span");
    
    



});
xhr.send(); 