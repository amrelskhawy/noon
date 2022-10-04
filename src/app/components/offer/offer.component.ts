import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  photo: string = 'https://f.nooncdn.com/cms/pages/20220919/1c6fd9c4afd5c575a8a36d30ab05b265/ar_dk_eg-banner-01.png'

  constructor() { }

  ngOnInit(): void {
  }

}
