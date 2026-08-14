import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [ngClass]="{
        'clean-glass-nav shadow-xs py-3': isScrolled(),
        'bg-transparent py-5': !isScrolled()
      }"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          
          <!-- Logo -->
          <a href="#" class="flex items-center gap-2.5 group focus:outline-none">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 p-0.5 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform flex items-center justify-center text-white">
              <svg class="w-5 h-5 transform -rotate-45" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.5s3.5 3 4.5 7.5c.5 2.2-.2 4.4-.2 4.4l3.2 2.1c.6.4.7 1.2.3 1.8-.4.5-1.1.7-1.7.3l-2.6-1.7c-.8.8-1.9 1.4-3 1.7L12 22l-.5-3.4c-1.1-.3-2.2-.9-3-1.7l-2.6 1.7c-.6.4-1.3.2-1.7-.3-.4-.6-.3-1.4.3-1.8l3.2-2.1s-.7-2.2-.2-4.4C8.5 5.5 12 2.5 12 2.5zM12 7a2 2 0 100 4 2 2 0 000-4z"/>
              </svg>
            </div>
            
            <div class="flex flex-col">
              <div class="flex items-center font-extrabold text-xl font-display tracking-tight leading-none text-slate-900">
                <span>UDAN</span>
                <span class="text-sky-600 ml-1">TECHNO</span>
              </div>
              <span class="text-[8px] tracking-[0.2em] uppercase text-slate-500 font-bold mt-0.5">Software Solutions</span>
            </div>
          </a>

          <!-- Desktop Navigation Links -->
          <nav class="hidden md:flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-slate-200 shadow-xs backdrop-blur-md">
            @for (item of navItems; track item.label) {
              <a 
                [href]="item.href"
                (click)="setActive(item.href)"
                class="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
                [ngClass]="{
                  'text-white bg-sky-600 shadow-xs': activeSection() === item.href,
                  'text-slate-600 hover:text-slate-900 hover:bg-slate-100': activeSection() !== item.href
                }"
              >
                {{ item.label }}
              </a>
            }
          </nav>

          <!-- Right Action CTA -->
          <div class="hidden md:flex items-center gap-3">
            <a 
              href="#contact" 
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-xs font-bold shadow-md shadow-sky-500/20 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Start Your Project</span>
              <span>🚀</span>
            </a>
          </div>

          <!-- Mobile Hamburger Button -->
          <div class="md:hidden flex items-center">
            <button 
              (click)="toggleMobileMenu()"
              type="button" 
              class="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg *ngIf="!isMobileMenuOpen()" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg *ngIf="isMobileMenuOpen()" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div 
        *ngIf="isMobileMenuOpen()" 
        class="md:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-5 space-y-2 mt-2"
      >
        <div class="flex flex-col space-y-1">
          @for (item of navItems; track item.label) {
            <a 
              [href]="item.href"
              (click)="closeMobileMenu(item.href)"
              class="px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
              [ngClass]="{
                'bg-sky-50 text-sky-600 font-bold': activeSection() === item.href,
                'text-slate-700 hover:bg-slate-50': activeSection() !== item.href
              }"
            >
              {{ item.label }}
            </a>
          }
        </div>
        <div class="pt-3 border-t border-slate-100">
          <a 
            href="#contact" 
            (click)="closeMobileMenu('#contact')"
            class="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm shadow-md shadow-sky-500/20"
          >
            <span>Start Your Project</span>
            <span>🚀</span>
          </a>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  activeSection = signal('#home');

  navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(href: string) {
    this.activeSection.set(href);
    this.isMobileMenuOpen.set(false);
  }

  setActive(href: string) {
    this.activeSection.set(href);
  }
}
