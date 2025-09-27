import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from '../../nav/nav';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-serviccios',
  standalone:true,
  imports: [CommonModule,RouterModule,Nav,Footer],
  templateUrl: './serviccios.html',
  styleUrl: './serviccios.scss'
})
export class Serviccios {

}
