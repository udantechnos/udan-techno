import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { TechStripComponent } from './components/tech-strip/tech-strip.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProcessComponent } from './components/process/process.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    TechStripComponent,
    ServicesComponent,
    ProjectsComponent,
    ProcessComponent,
    WhyUsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Udan Techno — Digital Solutions That Help Businesses Fly High';
}
