import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
import { MyDataService } from "src/app/services/my-data.service";
// import Swiper and modules styles


// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  SwiperOptions,
  Autoplay
} from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

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
      clickable: true ,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    spaceBetween: 30
  };

  myData: any;
  constructor(private myDataService: MyDataService) {}

  ngOnInit(): void {
    this.myDataService.getOffersData()
    .subscribe((data) => {
      this.myData = data;
    }
    )
  }
}
