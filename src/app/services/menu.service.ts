import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Menu } from '../models/Menu';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpService: HttpClient) { }

  public getItem(id: number): Observable<Menu> {
    return this.httpService.get<Menu>(`https://saltandginger.betazeta.io/api/menu/${id}`).pipe(
      map(data => new Menu().deserialize(data))
    );
  }

  public getAllItems(): Observable<Menu[]> {
    return this.httpService.get<Menu[]>(`https://saltandginger.betazeta.io/api/menu`).pipe(
      map(data => data['menu'].map(data => new Menu().deserialize(data)))
    );
  }
}