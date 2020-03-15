import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  public itemID: number;
  public item: Menu;
  public items: Menu[];
  public cateringPackage: boolean;

  constructor(private menuService: MenuService ) {

  }

  public getItem() {
    this.menuService.getItem(this.itemID).subscribe(item => this.item = item);
  }

  public getAllItems() {
    this.menuService.getAllItems().subscribe(items => this.items = items);
  }


  ngOnInit() {
    this.getAllItems();
  }
}
