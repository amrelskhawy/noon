import { Component, OnInit, Input } from '@angular/core';
import { MyDataService } from '../../services/my-data.service';

@Component({
  selector: 'app-category',
  templateUrl: './Category.component.html',
  styleUrls: ['./Category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() name: string = ''
  @Input() photo: string = ''

  categoryData: any;

  constructor(private myData: MyDataService) { }

  ngOnInit() {
    this.myData.getCategoriesData().subscribe(data => this.categoryData = data)
  }

}
