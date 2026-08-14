import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="solutions" class="py-20 lg:py-28 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            Industry Solutions
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Solutions Designed for <span class="text-emerald-600">Real Businesses</span>
          </h2>
          <p class="text-slate-600 text-base sm:text-lg">
            Purpose-built technology solutions that solve specific operational challenges, eliminate manual bottlenecks, and drive profitability.
          </p>
        </div>

        <!-- 6 Solution Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          @for (item of solutions; track item.title) {
            <div class="clean-card p-7 sm:p-8 flex flex-col justify-between group">
              <div>
                <div class="flex items-center justify-between mb-5">
                  <div class="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {{ item.icon }}
                  </div>
                  <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {{ item.category }}
                  </span>
                </div>

                <h3 class="text-xl font-bold text-slate-900 mb-2 font-display group-hover:text-emerald-600 transition-colors">
                  {{ item.title }}
                </h3>

                <p class="text-slate-600 text-sm leading-relaxed mb-5">
                  {{ item.description }}
                </p>
              </div>

              <!-- Feature Checkpoints -->
              <div class="space-y-2 pt-4 border-t border-slate-100">
                @for (feat of item.features; track feat) {
                  <div class="flex items-center gap-2 text-xs text-slate-700">
                    <span class="text-emerald-600 font-bold">✓</span>
                    <span>{{ feat }}</span>
                  </div>
                }
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class SolutionsComponent {
  solutions = [
    {
      icon: '🌱',
      title: 'Smart Agriculture',
      category: 'AgriTech & IoT',
      description: 'IoT-enabled agriculture solutions, real-time farm sensor monitoring, automated irrigation alerts, and crop management.',
      features: ['Soil moisture & sensor telemetry', 'Automated valve & pump triggers', 'Mobile app for farmers & field staff']
    },
    {
      icon: '🏢',
      title: 'Enterprise Management',
      category: 'ERP & Operations',
      description: 'Custom ERP and business management platforms tailored precisely to multi-department enterprise workflows.',
      features: ['Finance, HR & payroll modules', 'Departmental approval chains', 'Executive KPI dashboards']
    },
    {
      icon: '📦',
      title: 'Inventory & Store Management',
      category: 'Supply Chain',
      description: 'Digitalize physical store operations, multi-warehouse stock levels, automated purchase orders, and barcode scanning.',
      features: ['Live stock alerts & minimum limits', 'Barcode / QR code scanning', 'Automated purchase orders']
    },
    {
      icon: '🚚',
      title: 'Field Operations',
      category: 'Mobile-First',
      description: 'Mobile-first solutions for distributed field teams, inspection agents, logistics drivers, and on-site technicians.',
      features: ['Offline-capable mobile apps', 'GPS geo-stamping & route history', 'Digital signatures & reports']
    },
    {
      icon: '⚙️',
      title: 'Process Automation',
      category: 'Productivity',
      description: 'Convert fragile manual spreadsheets, email chains, and redundant paperwork into structured automated software.',
      features: ['Eliminate data entry errors', 'Automated PDF invoicing & reporting', 'Instant WhatsApp/SMS alerts']
    },
    {
      icon: '🎯',
      title: 'Custom Business Solutions',
      category: 'Tailored',
      description: 'Have a unique proprietary process? We build ground-up bespoke software with zero compromises.',
      features: ['100% proprietary source ownership', 'Tailored to unique business logic', 'Scalable architecture']
    },
  ];
}
