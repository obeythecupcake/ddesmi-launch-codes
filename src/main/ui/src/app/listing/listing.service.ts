import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from './listing';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private javaServerUrl = environment.devServerUrl;

  constructor( private http: HttpClient) { }

  public getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.javaServerUrl}/properties/all`);
  }
}
