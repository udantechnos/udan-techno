import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="process" class="py-20 lg:py-28 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Our Process
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            From Idea to <span class="text-blue-600">Impact</span>
          </h2>
          <p class="text-slate-600 text-base sm:text-lg">
            A structured, transparent engineering lifecycle designed to turn complex business problems into reliable, high-ROI software.
          </p>
        </div>

        <!-- 5 Steps Horizontal Roadmap -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          @for (step of steps; track step.num) {
            <div class="clean-card p-6 flex flex-col justify-between group">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div class="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-xl font-bold">
                    {{ step.icon }}
                  </div>
                  <span class="font-mono text-xs font-extrabold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                    {{ step.num }}
                  </span>
                </div>

                <h3 class="text-lg font-bold text-slate-900 mb-2 font-display">
                  {{ step.title }}
                </h3>

                <p class="text-slate-600 text-xs leading-relaxed mb-4">
                  {{ step.description }}
                </p>
              </div>

              <div class="pt-3 border-t border-slate-100">
                <div class="text-[10px] uppercase font-bold text-slate-400">Deliverable:</div>
                <div class="text-xs font-semibold text-slate-800">{{ step.deliverable }}</div>
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class ProcessComponent {
  steps = [
    {
      num: '01',
      icon: '🔍',
      title: 'Understand',
      description: 'We conduct discovery into your business operations, workflow bottlenecks, and ROI goals.',
      deliverable: 'Business Analysis Plan'
    },
    {
      num: '02',
      icon: '📐',
      title: 'Plan',
      description: 'We define the system architecture, database schema, and REST API contracts.',
      deliverable: 'Technical Architecture'
    },
    {
      num: '03',
      icon: '🎨',
      title: 'Design',
      description: 'We craft intuitive modern UI/UX prototypes, wireframes, and design systems.',
      deliverable: 'Interactive Prototypes'
    },
    {
      num: '04',
      icon: '⚡',
      title: 'Build',
      description: 'We write robust, clean TypeScript & C# code with automated unit testing.',
      deliverable: 'Tested Production Build'
    },
    {
      num: '05',
      icon: '🚀',
      title: 'Launch & Support',
      description: 'We deploy to cloud infrastructure, train your team, and provide ongoing AMC.',
      deliverable: 'Live Deployment & AMC'
    },
  ];
}
