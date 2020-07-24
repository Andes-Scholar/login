import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  email = '';
  password = '';

  constructor(private api: ApiService, private customer: CustomerService, private router: Router) {
  }

  tryLogin() {
    this.api.getUsers()
      .subscribe(
        r => {
          // TODO: Delegar esta lógica en la "apiService"
          const rta = r.find(x => x.email === this.email && x.clave === this.password);
          if (rta && rta.token) {
            this.customer.setToken(rta.token);
            this.router.navigate(['/dashboard', rta]);
          } else {
            alert('Usuario o clave incorrecta');
          }
        },
        r => {
          alert('Error al momento de hacer el login');

        });
  }

}
