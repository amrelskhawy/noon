import { Component, OnInit, Input } from '@angular/core';

import { MyDataService } from '../../services/my-data.service';


@Component({
  selector: 'Sublink',
  templateUrl: './sublink.component.html',
  styleUrls: ['./sublink.component.scss']
})
export class SublinkComponent implements OnInit {

  title:string = 'الفئات'

  pics = [
    "https://blog.flipsnack.com/wp-content/uploads/2021/01/pepsi-current-logo.jpg",
    "https://seeklogo.com/images/C/club-social-y-sportivo-divisadero-de-divisadero-logo-1872CBD3BD-seeklogo.com.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaiwNC8u8RVyOpEvjaLgZc9jHjlOWtKcDQ9w&usqp=CAU",
    "https://digitalsynopsis.com/wp-content/uploads/2016/11/famous-brand-logos-hidden-meanings-16.jpg",
    "https://w7.pngwing.com/pngs/514/448/png-transparent-tiktok-logo-brand-logos-brands-in-colors-icon-thumbnail.png",
    "https://www.justlifelogo.com/wp-content/uploads/2016/09/lady-butterfly-beauty-logo-for-sale.jpg",
  ]

  previewPics: any;

  @Input() data: string[] = [];

  constructor(private dataBack: MyDataService) { }

  ngOnInit() {

  }

}
