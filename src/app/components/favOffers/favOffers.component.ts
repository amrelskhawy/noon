import { Component, OnInit, Input } from '@angular/core';
import { MyDataService } from '../../services/my-data.service';

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
  selector: 'app-favOffers',
  templateUrl: './favOffers.component.html',
  styleUrls: ['./favOffers.component.scss']
})
export class FavOffersComponent implements OnInit {

  config: SwiperOptions = {
    breakpoints: {
      0 : {
        slidesPerView: 2
      },
      670 : {
        slidesPerView: 3
      },
      1000: {
        slidesPerView: 5

      },
      1450: {
        slidesPerView: 6

      }

    },

    slidesPerView: 4,
    spaceBetween: 40
  };

  bestSellers: any;
  constructor(private myData: MyDataService) {
   }

  ngOnInit() {
    this.myData.getOffersData().subscribe(data => this.bestSellers = data)
  }

}
