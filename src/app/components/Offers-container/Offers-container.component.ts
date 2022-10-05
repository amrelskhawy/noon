import { MyDataService } from '../../services/my-data.service';
import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";


// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-offersContainer',
  templateUrl: './Offers-container.component.html',
  styleUrls: ['./Offers-container.component.scss']
})
export class OffersContainerComponent implements OnInit {

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
