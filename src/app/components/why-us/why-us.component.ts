import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 lg:py-28 bg-slate-50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
            Why Udan Techno
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Why Businesses Choose <span class="text-sky-600">Udan Techno</span>
          </h2>
          <p class="text-slate-600 text-base sm:text-lg">
            We don't sell bloated templates. We partner with you as an extension of your engineering team.
          </p>
        </div>

        <!-- 6 Reasons Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          @for (reason of reasons; track reason.title) {
            <div class="clean-card p-7 sm:p-8 flex flex-col justify-between group">
              <div>
                <div class="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                  {{ reason.icon }}
                </div>

                <h3 class="text-xl font-bold text-slate-900 mb-2 font-display group-hover:text-sky-600 transition-colors">
                  {{ reason.title }}
                </h3>

                <p class="text-slate-600 text-sm leading-relaxed mb-5">
                  {{ reason.description }}
                </p>
              </div>

              <div class="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-sky-600">
                <span>✓</span>
                <span>{{ reason.highlight }}</span>
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class WhyUsComponent {
  reasons = [
    {
      icon: '🎯',
      title: 'Business First',
      description: 'Technology is engineered around your actual business operations, revenue streams, and user workflows.',
      highlight: 'Direct Alignment with ROI'
    },
    {
      icon: '✨',
      title: 'Custom Built',
      description: 'No unnecessary limitations of generic off-the-shelf software. Every screen and API is crafted for you.',
      highlight: 'Zero Bloat & Zero Limits'
    },
    {
      icon: '⚡',
      title: 'Modern Technology',
      description: 'Built with Angular 21, Flutter, .NET Core, REST APIs, SQL Server and IoT for maximum speed.',
      highlight: 'Future-Proof Tech Stack'
    },
    {
      icon: '🌐',
      title: 'Complete Solutions',
      description: 'Web + Mobile + Backend API + Enterprise Database + Hardware IoT integrations all under one roof.',
      highlight: 'Single Accountable Partner'
    },
    {
      icon: '📈',
      title: 'Scalable Architecture',
      description: 'Clean architecture designed to scale smoothly as your user base and transaction volumes multiply.',
      highlight: 'High Concurrency Ready'
    },
    {
      icon: '🤝',
      title: 'Long-Term Partnership',
      description: 'We provide ongoing proactive AMC maintenance, system upgrades, and dedicated SLA support.',
      highlight: 'Dedicated AMC & 24/7 Support'
    },
  ];
}
