import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
import { MyDataService } from "src/app/services/my-data.service";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, SwiperOptions } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-offersContainer',
  templateUrl: './Offers-container.component.html',
  styleUrls: ['./Offers-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OffersContainerComponent implements OnInit {

  config: SwiperOptions = {
    loop: true,
    pagination: { 
      type: 'fraction',
      clickable: true ,
    },

    
    spaceBetween: 30
  };  

  myData: any;
  constructor(private myDataService: MyDataService) {}

  ngOnInit(): void {
    this.myDataService.getOffersData()
    .subscribe((data) => {
      this.myData = data;
      console.log(this.myData)
    }
    )
  }
  slide(direction: string) {
    const mySlider: any = document.getElementById("mySlider")
    return direction === "right" ?  mySlider.scrollLeft += mySlider.offsetWidth:mySlider.scrollLeft -= mySlider.offsetWidth;
  }
}
