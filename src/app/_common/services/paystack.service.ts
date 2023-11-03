import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  Authorization: `Bearer sk_test_2b176cfecf4bf2bf8ed1de53b55f868dc4ed9127`
});

export interface PaymentInterface {
  user: string | undefined;
  reference: string | undefined;
  course: string | undefined;
  status: string;
}

@Injectable()
export class PaystackService {
  private paystackApiUrl = 'https://api.paystack.co';
  private apiURL = 'https://asynctrainingapi4-x0bw8fkh.b4a.run';
  private clientURL = 'http://training.async.ng/';
  //private apiURL = 'http://localhost:3000';
  //private clientURL = 'http://localhost:4200';

  constructor(private http: HttpClient) { }
  

  initiatePayment(amount: number, email: string, courseId: string, userId: string): Observable<any> {   

    const body = {
      email: email,
      amount: amount * 100, // Paystack API uses amount in kobo (1 NGN = 100 kobo)
      currency: 'NGN',
      callback_url: `${this.clientURL}/portal/payment?courseId=${courseId}&userId=${userId}`,
    };

    return this.http.post(`${this.paystackApiUrl}/transaction/initialize`, body, { headers });
  }


  getReferencesFromPaystack(reference: string): Observable<any> {
    return this.http.get<string[]>(`${this.paystackApiUrl}/transaction/verify/${reference}`, { headers });
  }


  setUserPayment(paymentObject: PaymentInterface): Observable<any> {
    return this.http.post<PaymentInterface>(`${this.apiURL }/payments/paystack`, paymentObject, { withCredentials: true } );
  }

  getPaymentRecords(userId: string, courseId: string): Observable<PaymentInterface> {
    return this.http.get<PaymentInterface>(`${this.apiURL}/payments/paystack/${userId}/${courseId}`, { withCredentials: true } );
  }

}