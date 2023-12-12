import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  likes:number=0
  addLikes(){
    this.likes++
  }

  public produtos=[
    { 
        id: 1, 
        produto: "Placa de Vídeo RTX 4060",
        preco:"R$1939,99",
        descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm, tubos de calor de cobre compostos giratórios alternativos que tocam diretamente a GPU",
        miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
        imagem:"https://static.netshoes.com.br/produtos/tenis-mizuno-brave-6/40/2FU-6366-040/2FU-6366-040_zoom1.jpg" 
    },
 ]
  constructor() {}

}
