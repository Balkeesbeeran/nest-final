import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./UI/navbar/navbar.component";
import { FootbarComponent } from "./UI/footbar/footbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FootbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jewellery';
}
