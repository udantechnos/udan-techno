import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          <!-- Column 1: Brand & Bio -->
          <div class="lg:col-span-2 space-y-4">
            <a href="#" class="flex items-center gap-3 group">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white text-lg shadow-sm">
                🚀
              </div>
              <div class="flex items-center font-extrabold text-xl font-display tracking-tight text-white">
                <span>UDAN</span>
                <span class="text-sky-400 ml-1">TECHNO</span>
              </div>
            </a>

            <p class="text-slate-400 text-sm leading-relaxed max-w-sm">
              <strong class="text-white">Technology that moves your business forward.</strong> <br />
              Converting manual workflows into high-performance custom digital products across India and globally.
            </p>

            <div class="flex items-center gap-3 pt-2">
              <a href="https://instagram.com/udan.techno" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors" title="Instagram">
                📷
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors" title="LinkedIn">
                💼
              </a>
            </div>
          </div>

          <!-- Column 2: Company -->
          <div class="space-y-3">
            <h4 class="text-xs uppercase tracking-wider font-bold text-white font-display">Company</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="#about" class="hover:text-sky-400 transition-colors">About Us</a></li>
              <li><a href="#services" class="hover:text-sky-400 transition-colors">Services</a></li>
              <li><a href="#projects" class="hover:text-sky-400 transition-colors">Portfolio</a></li>
              <li><a href="#process" class="hover:text-sky-400 transition-colors">Our Process</a></li>
              <li><a href="#contact" class="hover:text-sky-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <!-- Column 3: Solutions -->
          <div class="space-y-3">
            <h4 class="text-xs uppercase tracking-wider font-bold text-white font-display">Solutions</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="#solutions" class="hover:text-sky-400 transition-colors">ERP Software</a></li>
              <li><a href="#solutions" class="hover:text-sky-400 transition-colors">Flutter Mobile Apps</a></li>
              <li><a href="#solutions" class="hover:text-sky-400 transition-colors">Angular Web Apps</a></li>
              <li><a href="#products" class="hover:text-sky-400 transition-colors">Z+ Secure IoT</a></li>
              <li><a href="#solutions" class="hover:text-sky-400 transition-colors">Smart Agriculture</a></li>
            </ul>
          </div>

          <!-- Column 4: Technologies -->
          <div class="space-y-3">
            <h4 class="text-xs uppercase tracking-wider font-bold text-white font-display">Technologies</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="#technologies" class="hover:text-sky-400 transition-colors">Flutter & Dart</a></li>
              <li><a href="#technologies" class="hover:text-sky-400 transition-colors">Angular 21</a></li>
              <li><a href="#technologies" class="hover:text-sky-400 transition-colors">.NET Core & C#</a></li>
              <li><a href="#technologies" class="hover:text-sky-400 transition-colors">SQL Server & MySQL</a></li>
              <li><a href="#technologies" class="hover:text-sky-400 transition-colors">IoT Sensors & MQTT</a></li>
            </ul>
          </div>

        </div>

        <!-- Bottom Copyright -->
        <div class="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Udan Techno. All Rights Reserved.</p>
          <div class="flex items-center gap-4">
            <a href="#" class="hover:text-slate-200">Privacy Policy</a>
            <span>•</span>
            <a href="#" class="hover:text-slate-200">Terms & Conditions</a>
            <span>•</span>
            <button (click)="scrollToTop()" class="hover:text-sky-400 transition-colors cursor-pointer">
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
