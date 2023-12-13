import { Component, AfterViewInit } from '@angular/core'
import Swiper from 'swiper';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {

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

 ngAfterViewInit() {
  // Inicialize o Swiper aqui
  const mySwiper = new Swiper('.swiper-container', {
    // Configurações do Swiper, consulte a documentação do Swiper para mais opções
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 });

 

  

 }}

