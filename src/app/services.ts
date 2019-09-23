import { Usuario } from './model/usuarios/usuarios';
import { Injectable } from '@angular/core';
import {HttpResponse, HttpHeaders, HttpRequest, HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
  export class Service {
    constructor(private http: HttpClient) { }
    saveUser(usuarios) {
      return this.http.post('http://localhost:4200/api/newUser', usuarios).forEach((response: Response) => response);
    }
    updateUser(usuarios) {
      return this.http.post('http://localhost:8080/api/updateUser', usuarios).forEach((response: Response) => response);
    }
    deleteUser(usuarios) {
      return this.http.post('http://localhost:8080/api/deleteUser', usuarios).forEach((response: Response) => response);
    }
    getUsers() {
      return this.http.get<Usuario>('http://localhost:8080/api/getUsers');
    }
  }
