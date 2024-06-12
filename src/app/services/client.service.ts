import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl =
    'https://hotelbooking.stepprojects.ge/api/Rooms/GetAvailableRooms?';
  private bookingUrl = 'https://hotelbooking.stepprojects.ge/api/Booking';

  constructor(private http: HttpClient) {}

  //

  fromDate: string = '';
  toDate: string = '';

  getRooms(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/from=${this.fromDate}&/to=${this.toDate}`
    );
  }

  bookingPost(dataFromComp: any): Observable<any> {
    console.log(dataFromComp);

    return this.http.post<any>(this.bookingUrl, dataFromComp);
  }

  postClientData(clientData: any): Observable<any> {
    console.log(clientData);
    return this.http.post<any>(this.apiUrl, clientData);
  }
}
