import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-strip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-8 bg-white border-y border-slate-200/80 relative overflow-hidden">
      <!-- Side gradient fades for infinite marquee -->
      <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 mb-3 text-center">
        <p class="text-[11px] uppercase tracking-[0.25em] font-bold text-slate-400">
          POWERED BY INDUSTRY-STANDARD MODERN TECHNOLOGIES
        </p>
      </div>

      <!-- Marquee Wrapper -->
      <div class="flex overflow-hidden select-none">
        <div class="animate-marquee flex items-center gap-6 py-1">
          @for (tech of allTechnologies; track $index) {
            <div class="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50/50 transition-all group shrink-0">
              <span class="text-base group-hover:scale-110 transition-transform">
                {{ tech.icon }}
              </span>
              <span class="text-xs font-bold tracking-wide whitespace-nowrap">
                {{ tech.name }}
              </span>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class TechStripComponent {
  techList = [
    { name: 'Flutter', icon: '🦋' },
    { name: 'Android', icon: '🤖' },
    { name: 'Angular 21', icon: '🅰️' },
    { name: '.NET & C#', icon: '🔷' },
    { name: 'REST APIs', icon: '⚡' },
    { name: 'IoT Solutions', icon: '📡' },
    { name: 'SQL Server', icon: '🗄️' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Cloud & DevOps', icon: '☁️' },
  ];

  allTechnologies = [...this.techList, ...this.techList, ...this.techList];
}
