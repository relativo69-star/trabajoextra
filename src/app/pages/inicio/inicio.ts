import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from '../../nav/nav';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-inicio',
  standalone:true,
  imports: [CommonModule,RouterModule,Nav,Footer],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {

}
