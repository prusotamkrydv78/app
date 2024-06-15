import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSectionComponent } from './Component/home-section/home-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
