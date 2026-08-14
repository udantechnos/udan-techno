import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="py-16 lg:py-24 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            What We Build
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Complete Digital Solutions for <span class="text-sky-600">Modern Businesses</span>
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            From initial business analysis to production deployment — we build technology engineered around your exact workflow.
          </p>
        </div>

        <!-- 6 Clean Service Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (service of serviceList; track service.id) {
            <div class="clean-card p-6 sm:p-7 flex flex-col justify-between group">
              <div>
                <!-- Icon Header -->
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl {{ service.bgLight }} {{ service.textColor }} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {{ service.emoji }}
                  </div>
                  <span class="font-mono text-xs font-bold text-slate-400">
                    {{ service.id }}
                  </span>
                </div>

                <!-- Title & Description -->
                <h3 class="text-lg font-bold text-slate-900 mb-2 font-display group-hover:text-sky-600 transition-colors">
                  {{ service.title }}
                </h3>
                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {{ service.description }}
                </p>

                <!-- Feature Tags -->
                <div class="flex flex-wrap gap-1 mb-5">
                  @for (tag of service.tags; track tag) {
                    <span class="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {{ tag }}
                    </span>
                  }
                </div>
              </div>

              <!-- Action Link -->
              <a 
                href="#contact" 
                class="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 group-hover:text-sky-700 transition-colors pt-3 border-t border-slate-100"
              >
                <span>Discuss This Solution</span>
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </a>

            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class ServicesComponent {
  serviceList = [
    {
      id: '01',
      emoji: '📱',
      title: 'Mobile Applications (Flutter)',
      description: 'Cross-platform mobile apps for Android & iOS with smooth 60fps animations, offline data caching, and instant notifications.',
      bgLight: 'bg-sky-50',
      textColor: 'text-sky-600',
      tags: ['Flutter', 'Android & iOS', 'Offline Sync', 'Push Alerts']
    },
    {
      id: '02',
      emoji: '🌐',
      title: 'Custom Web Applications',
      description: 'Responsive web platforms, customer portals, SaaS tools, and admin management dashboards designed around your workflow.',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-600',
      tags: ['Angular 21', 'TypeScript', 'Tailwind CSS', 'Cloud Hosted']
    },
    {
      id: '03',
      emoji: '🏢',
      title: 'ERP & Business Software',
      description: 'Custom ERP systems for store operations, multi-warehouse inventory, procurement, GST billing, and executive analytics.',
      bgLight: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      tags: ['Inventory', 'Store Operations', 'Purchasing', 'GST Reports']
    },
    {
      id: '04',
      emoji: '⚡',
      title: 'Backend APIs & Databases',
      description: 'High-speed REST APIs using modern .NET Core, C#, and enterprise database architectures (SQL Server & MySQL) with rock-solid security.',
      bgLight: 'bg-purple-50',
      textColor: 'text-purple-600',
      tags: ['.NET Core', 'C#', 'SQL Server', 'REST APIs']
    },
    {
      id: '05',
      emoji: '🌾',
      title: 'IoT & Smart Agriculture',
      description: 'Hardware connectivity, soil humidity telemetry, automated motor starter controls, sensor monitoring, and smart field solutions.',
      bgLight: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      tags: ['Smart Irrigation', 'Telemetry', 'Automated Starters', 'Sensors']
    },
    {
      id: '06',
      emoji: '⚙️',
      title: 'Business Process Automation',
      description: 'Transform error-prone spreadsheets and manual paper routines into fast, automated digital workflows with zero data loss.',
      bgLight: 'bg-amber-50',
      textColor: 'text-amber-600',
      tags: ['Process Audit', 'Auto Invoicing', 'Zero Errors', 'Fast ROI']
    },
  ];
}
