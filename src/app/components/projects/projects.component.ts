import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-16 lg:py-20 bg-slate-50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Selected Work
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Solutions We've <span class="text-blue-600">Built</span>
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Proven enterprise software, IoT farm telemetry, and cross-platform mobile apps built for growing businesses.
          </p>
        </div>

        <!-- 4 Clean Project Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (project of allProjects; track project.title) {
            <div class="clean-card p-6 flex flex-col justify-between group">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div class="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-xl">
                    {{ project.icon }}
                  </div>
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {{ project.category }}
                  </span>
                </div>

                <h3 class="text-base font-bold text-slate-900 mb-2 font-display group-hover:text-blue-600 transition-colors">
                  {{ project.title }}
                </h3>

                <p class="text-slate-600 text-xs leading-relaxed mb-4">
                  {{ project.description }}
                </p>
              </div>

              <!-- Tech Chips -->
              <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                @for (tech of project.technologies; track tech) {
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {{ tech }}
                  </span>
                }
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class ProjectsComponent {
  allProjects = [
    {
      title: 'Smart Farm Solutions',
      category: 'AgriTech & IoT',
      icon: '🌾',
      description: 'End-to-end smart agriculture platform with real-time soil telemetry and automated motor starter controls.',
      technologies: ['Android', 'ESP32 IoT', 'REST API', 'SQL Server']
    },
    {
      title: 'Store & Inventory ERP',
      category: 'Supply Chain',
      icon: '📦',
      description: 'Multi-branch retail store and inventory management with barcode scanning and automated stock replenishment.',
      technologies: ['Angular 21', '.NET Core', 'SQL Server', 'Flutter']
    },
    {
      title: 'Nursery Management System',
      category: 'Agri ERP',
      icon: '🪴',
      description: 'Comprehensive plant nursery management platform for batch tracking, plant growth cycles, inventory, and sales billing.',
      technologies: ['Angular 21', '.NET Core', 'SQL Server']
    },
    {
      title: 'Purchase Management System',
      category: 'Procurement',
      icon: '📑',
      description: 'Enterprise procurement workflow automation from requisition approvals to automated vendor purchase orders.',
      technologies: ['Angular 21', '.NET Core', 'SQL Server', 'Flutter']
    },
  ];
}
