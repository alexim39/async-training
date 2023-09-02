import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaystackService {
  private paystackApiUrl = 'https://api.paystack.co';

  constructor(private http: HttpClient) {}

  initiatePayment(amount: number, email: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer sk_test_2b176cfecf4bf2bf8ed1de53b55f868dc4ed9127`
    });

    const body = {
      email: email,
      amount: amount * 100, // Paystack API uses amount in kobo (1 NGN = 100 kobo)
      currency: 'NGN',
    };

    return this.http.post(`${this.paystackApiUrl}/transaction/initialize`, body, { headers });
  }
}