import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Merchandise } from '../models/Merchandise';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MerchandiseService {

  constructor(private httpService: HttpClient) { }

  public get_item(id: number): Observable<Merchandise> {
    return this.httpService.get<Merchandise>(`https://saltandginger.betazeta.io/api/merchandise/${id}`).pipe(
      map(data => new Merchandise().deserialize(data))
    );
  }

  public get_all_items(): Observable<Merchandise[]> {
    return this.httpService.get<Merchandise[]>(`https://saltandginger.betazeta.io/api/merchandise`).pipe(
      map(data => data['merchandise'].map(data => new Merchandise().deserialize(data)))
    );
  }
}
