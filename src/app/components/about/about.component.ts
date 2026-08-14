import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 lg:py-28 bg-slate-50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Modern Architecture Preview (6 cols) -->
          <div class="lg:col-span-6">
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5">
              
              <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-rose-400"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
                  <span class="text-xs font-mono text-slate-500 font-bold ml-2">udan-technology-partner</span>
                </div>
                <span class="text-[10px] font-mono font-bold bg-sky-50 text-sky-700 px-2 py-0.5 rounded">VERIFIED STACK</span>
              </div>

              <div class="space-y-3">
                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-xs">01</div>
                    <div>
                      <div class="text-xs font-bold text-slate-900">Business Workflow Analysis</div>
                      <div class="text-[11px] text-slate-500">Mapping manual operations to automated logic</div>
                    </div>
                  </div>
                  <span class="text-xs text-emerald-600 font-bold">✓ Ready</span>
                </div>

                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">02</div>
                    <div>
                      <div class="text-xs font-bold text-slate-900">Scalable Backend & Database Core</div>
                      <div class="text-[11px] text-slate-500">.NET REST APIs & SQL Server</div>
                    </div>
                  </div>
                  <span class="text-xs text-sky-600 font-bold">⚡ 99.9% Uptime</span>
                </div>

                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">03</div>
                    <div>
                      <div class="text-xs font-bold text-slate-900">Web & Mobile Interfaces</div>
                      <div class="text-[11px] text-slate-500">Angular 21 + Flutter Native</div>
                    </div>
                  </div>
                  <span class="text-xs text-indigo-600 font-bold">📱 60 FPS</span>
                </div>
              </div>

              <!-- Stats Row -->
              <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                <div class="p-2 bg-slate-50 rounded-xl">
                  <div class="text-lg font-bold text-slate-900 font-display">100%</div>
                  <div class="text-[10px] text-slate-500 uppercase font-bold">Custom Tailored</div>
                </div>
                <div class="p-2 bg-slate-50 rounded-xl">
                  <div class="text-lg font-bold text-sky-600 font-display">Zero</div>
                  <div class="text-[10px] text-slate-500 uppercase font-bold">Vendor Lock-in</div>
                </div>
                <div class="p-2 bg-slate-50 rounded-xl">
                  <div class="text-lg font-bold text-emerald-600 font-display">24/7</div>
                  <div class="text-[10px] text-slate-500 uppercase font-bold">AMC Support</div>
                </div>
              </div>

            </div>
          </div>

          <!-- Right Column: Content (6 cols) -->
          <div class="lg:col-span-6 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
              About Udan Techno
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display leading-tight">
              Technology Built <br />
              <span class="text-sky-600">Around Your Business</span>
            </h2>

            <div class="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                <strong class="text-slate-900 font-semibold">Udan Techno</strong> works directly with business owners to convert real-world manual processes into practical digital solutions.
              </p>
              <p>
                We don't simply build software. We understand your workflow, identify opportunities for automation, and build technology around the way your business actually operates.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              @for (item of highlights; track item.title) {
                <div class="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                  <span class="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <div>
                    <h4 class="text-xs font-bold text-slate-900">{{ item.title }}</h4>
                    <p class="text-[11px] text-slate-500">{{ item.desc }}</p>
                  </div>
                </div>
              }
            </div>

            <div class="pt-2">
              <a 
                href="#contact" 
                class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm shadow-md shadow-sky-500/20 hover:scale-105 transition-all"
              >
                <span>Schedule a Consultation</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  highlights = [
    { title: 'Business-Focused', desc: 'Designed around your exact operational goals.' },
    { title: 'Custom Solutions', desc: 'No one-size-fits-all templates or bloat.' },
    { title: 'Scalable Architecture', desc: 'Built to scale smoothly as you grow.' },
    { title: 'Long-Term Support', desc: 'Dedicated AMC and continuous updates.' },
  ];
}
