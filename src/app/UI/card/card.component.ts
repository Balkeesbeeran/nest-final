

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data = {
    id: 0,
    title: '',
    image: '',
    price: 0,
    description: '',
    brand: '',
    model: '',
    color: '',
    category: '',
    discount: 0,
    popular: false // optional
  };
}
