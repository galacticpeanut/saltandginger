import { Component, OnInit } from '@angular/core';
import { MerchandiseService } from '../services/merchandise.service';
import { Merchandise } from '../models/Merchandise';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public item_id: number;
  public item: Merchandise;
  public items: Merchandise[];

  constructor(private merchandiseService: MerchandiseService ) {

  }

  public get_item() {
    this.merchandiseService.get_item(this.item_id).subscribe(item => this.item = item);
  }

  public get_all_items() {
    this.merchandiseService.get_all_items().subscribe(items => this.items = items)
  }

  ngOnInit() {
    this.get_all_items();
  }
}
