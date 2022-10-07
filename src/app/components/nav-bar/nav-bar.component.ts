import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../../services/my-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  subLinksPics: any;

  phones: string[] = [
    "موبايلات وصلت جديد",
    "كل الموبايلات",
    "كل أجهزة التابلت",
    "ساعات سمارت وإكسسوارات",
    "سماعات أذن لاسلكية",
    "الباور بانك",
    "الشواحن و الكابلات",
  ]

  electronics: string[] = [
    "تليفزيونات وأجهزة الستالايت والإكسسوارات",
    "أجهزة الصوت و الترفيه المنزلي",
    "الكاميرات والإكسسوارات",
    "الطابعات والإكسسوارات",
    "أجهزة الأنترنت و الراوتر",
    "تخزين الداتا",
    "مكونات أجهزة الكمبيوتر",
    "إكسسورات الكمبيوتر",
  ]

  men: string[] = [
    "أجدد عروض الموضة",
    "أزياء رجالي",
    "أحذية",
    "ساعات",
    "نظارات",
    "الأمتعة والحقائب",
    "ملابس أطفال"
  ]
  women : string[] = [
    "أجدد عروض الموضة",
    "أزياء نسائي",
    "أحذية",
    "ساعات",
    "المجوهرات",
    "نظارات",
    "شنط اليد",
    "ملابس أطفال"
  ]
  home : string[] = [
      "الأجهزة المنزلية",
      "الأجهزة المنزلية الكبيرة",
      "أدوات الطهي",
      "أدوات الشرب",
      "الحمامات و مستلزمات السرير",
      "الأدوات وتحسين المنزل",
      "ديكورات المنازل",
      "المطبخ و أدوات الطعام"
    ]
  constructor(private newData: MyDataService) { }

  slide = (orientation: any) => {
    const slider = document.getElementById(`nav-bottom-container`)
    slider!.scrollLeft = orientation === 'right' ? slider!.scrollLeft + 600 : slider!.scrollLeft - 600
  }

  ngOnInit(): void {
    this.newData.getOffersData().subscribe(data => this.subLinksPics = data)
  }

}
