import { Component } from '@angular/core';
import { listAll, ref, getDownloadURL, Storage } from '@angular/fire/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
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
