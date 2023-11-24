import { Component } from '@angular/core';
import { listAll, ref, getDownloadURL, Storage } from '@angular/fire/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  
  
})
export class Tab1Page {
  ficcao:any=[]
  ngOnInit() {
    listAll(ref(this.af, 'Ficção Científica')).then(imgs => {
      imgs.items.forEach((im) => {
        getDownloadURL(im).then((res) => {
          console.log(res)
          this.ficcao.push(res)
        })
      })
    })
  }


  constructor(private af:Storage) {}

}
