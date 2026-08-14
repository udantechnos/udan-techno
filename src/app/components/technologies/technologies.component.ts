import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="technologies" class="py-20 lg:py-28 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
            Our Technology Stack
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Powered by <span class="text-sky-600">Modern Technologies</span>
          </h2>
          <p class="text-slate-600 text-base sm:text-lg">
            We leverage rock-solid, production-proven frameworks to guarantee high performance, security, and zero technical debt.
          </p>
        </div>

        <!-- Tech Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          @for (tech of techStack; track tech.name) {
            <div class="clean-card p-5 text-center flex flex-col items-center justify-center group">
              <div class="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl mb-2.5 group-hover:scale-110 transition-transform">
                {{ tech.icon }}
              </div>
              <h4 class="text-sm font-bold text-slate-900 font-display">{{ tech.name }}</h4>
              <span class="text-[10px] text-slate-500 font-medium uppercase mt-0.5">{{ tech.category }}</span>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class TechnologiesComponent {
  techStack = [
    { name: 'Flutter', category: 'Mobile UI', icon: '🦋' },
    { name: 'Dart', category: 'Language', icon: '🎯' },
    { name: 'Android', category: 'Mobile OS', icon: '🤖' },
    { name: 'Angular 21', category: 'Web App', icon: '🅰️' },
    { name: '.NET', category: 'Backend', icon: '🔷' },
    { name: 'C#', category: 'Language', icon: '⚡' },
    { name: 'SQL Server', category: 'Enterprise DB', icon: '🗄️' },
    { name: 'MySQL', category: 'Relational DB', icon: '🐬' },
    { name: 'REST API', category: 'Integration', icon: '🔌' },
    { name: 'Firebase', category: 'Cloud Services', icon: '🔥' },
    { name: 'IoT Solutions', category: 'Hardware Tech', icon: '📡' },
    { name: 'TypeScript', category: 'Language', icon: '📘' },
  ];
}
