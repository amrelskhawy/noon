import { Component, OnInit, Input } from '@angular/core';
import { MyDataService } from '../../services/my-data.service';

@Component({
  selector: 'favOffers',
  templateUrl: './favOffers.component.html',
  styleUrls: ['./favOffers.component.scss']
})
export class FavOffersComponent implements OnInit {
  bestSellers: any;
  constructor(private myData: MyDataService) {
   }

  ngOnInit() {
    this.myData.getOffersData().subscribe(data => this.bestSellers = data)
  }

}
