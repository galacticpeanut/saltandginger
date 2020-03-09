import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  public item_id: number;
  public item: Menu;
  public items: Menu[];

  constructor(private menu_service: MenuService ) {

  }

  public get_item() {
    this.menu_service.get_item(this.item_id).subscribe(item => this.item = item);
  }

  public get_all_items() {
    this.menu_service.get_all_items().subscribe(items => this.items = items)
  }

  ngOnInit() {
    this.get_all_items();
  }
}
