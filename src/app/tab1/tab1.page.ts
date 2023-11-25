import { Component } from '@angular/core';
import { listAll, ref, getDownloadURL, Storage } from '@angular/fire/storage';

import { doc, collection, setDoc, Firestore, collectionData, getDocs} from '@angular/fire/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  
  
})
export class Tab1Page {

  ficcao:any=[]
  filmes:any=[]
  presentingElement:any = null;
  ngOnInit() {
    listAll(ref(this.af, 'Ficção Científica')).then(imgs => {
      imgs.items.forEach((im) => {
        getDownloadURL(im).then((res) => {
          console.log(res)
          this.ficcao.push(res)
        })
      })
    })


      this.presentingElement = document.querySelector('.ion-page');

      this.listar()
  }
  async listar(){
    const querySapshop=await getDocs(collection(this.firestore, 'acao'))
    querySapshop.forEach((doc)=>{
      console.log(`${doc.id} => ${doc.data()['titulo']}`)
      this.filmes=[...this.filmes,{titulo:doc.data()['titulo'],descricao:doc.data()['descricao'],categoria:doc.data()['categoria'],imagem:doc.data()['imagem']}]
    })
  }

  constructor(private af:Storage, private firestore:Firestore) {}

}
