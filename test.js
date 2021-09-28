function Espectadores(idade, opiniao)
{
    this.idade = idade;
    this.opiniao = opiniao;
};

 let espectadores = {
    lista : [
            new Espectadores(20,"otimo"),
            new Espectadores(23,"otimo"),
            new Espectadores(15,"regular"),
            new Espectadores(29,"bom"),
            new Espectadores(77,"bom"),
            new Espectadores(43,"regular"),
            new Espectadores(33,"regular"),
            new Espectadores(23,"otimo"),
            new Espectadores(13,"regular"),
            new Espectadores(53,"bom"),
            new Espectadores(73,"bom"),
            new Espectadores(48,"regular"),
            new Espectadores(41,"otimo"),
            new Espectadores(39,"otimo"),
            new Espectadores(24,"regular"),
              ],

    mediaDasopiOtimo : function()
    {
        let somaIdadeDasOtimo = 0;
        let quaDasOtimo = 0;
        
        for( i in this.lista)
        {
          if (this.lista[i].opiniao ==="otimo"){
            quaDasOtimo ++;
            somaIdadeDasOtimo += this.lista[i].idade;
        }
       
      }
      let mediaDasOtimo = somaIdadeDasOtimo/ quaDasOtimo;
      return  mediaDasOtimo;
    },
   
  quaDeRegular : function()
  {
    let quaDasRegular = 0;
    for( i in this.lista)
        {
          if (this.lista[i].opiniao ==="regular"){
            quaDasRegular ++;
        }
      }
        return quaDasRegular
      
  },
  porcentagemDasBom : function()
    {
      let quaDasBom = 0;
        
        for( i in this.lista)
        {
          if (this.lista[i].opiniao ==="bom"){
            quaDasBom ++;
        
        }
       
      }
      let percentagem = (quaDasBom / this.lista.length)*100;
      return  percentagem.toFixed(2);
    }

};
   


module.exports = espectadores;
