import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Storage, listAll, getDownloadURL, ref } from '@angular/fire/storage';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent  implements OnInit {
  
  imgUrl: any = []
  constructor(private af: Storage) { }

  ngOnInit() {
    listAll(ref(this.af, 'fotos')).then(imgs => {
      imgs.items.forEach((im) => {
        getDownloadURL(im).then((res) => {
          console.log(res)
          this.imgUrl.push(res)
        })
      })
    })

  }
}
