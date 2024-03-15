import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FistComponentComponent } from './components/fist-component/fist-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FistComponentComponent, SecondComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
