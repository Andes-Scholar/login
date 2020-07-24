import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// TODO LoginResultModel

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  localUrl = 'assets/users.json';

  getUsers(): Observable<any> {
    // TODO: Devolver el modelo en lugar de any.
    // TODO2: Modificar esta función para que reciba 2 parámetros (usuario y clave) y devuelva la info filtrada
    return this.http.get(this.localUrl);
  }
}

