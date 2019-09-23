import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuarios/usuarios';
import { Service } from '../services';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private newService: Service) {}

  usersArray: Usuario[] = [];

  selectedUser: Usuario = new Usuario();

  ngOnInit() {
    this.newService.getUsers().subscribe(data => {
      console.log(data);
      data.forEach(element => {
        this.usersArray.push(element);
      });
    });
  }

  ngaddOrEditUser() {
    console.log('Entre a la funcion de usuario');
    if (this.selectedUser.id === 0) {
      console.log('Entre a la funcion de agregar usuario');
      this.selectedUser.id = null;
      this.newService.saveUser(this.selectedUser).then(data => {
        console.log(data);
      });
    } else {
      console.log('Entre a la funcion de editar usuario');
      this.newService.updateUser(this.selectedUser).then(data => {
        console.log(data);
      });
    }
  }

  openForEdit(usuarios) {
    this.selectedUser = usuarios;
  }

  ngdeleteUser() {
    this.newService.deleteUser(this.selectedUser).then(data => {
      console.log(data);
    });
  }


}
