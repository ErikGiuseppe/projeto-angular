import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fist-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fist-component.component.html',
  styleUrl: './fist-component.component.css',
})
export class FistComponentComponent {
  nome: string = 'Erik';
  idade: number = 19;
  trabalho: string = 'Desenvolvedor backend';
  hobbies = ['EA FC', 'R6'];
  carro = { marca: 'Hyundai', modelo: 'HB20' };
}
