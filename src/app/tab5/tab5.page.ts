import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {


  likes:number=0
  addLikes(){
    this.likes++
  }

  public alertButtons = [
    {
      text: 'Não',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Sim',
      cssClass: 'alert-button-confirm',
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
