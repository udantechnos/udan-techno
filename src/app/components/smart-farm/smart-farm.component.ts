import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-smart-farm',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 lg:py-28 bg-slate-50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            Smart Agriculture
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Smart Technology for <span class="text-emerald-600">Modern Farming</span>
          </h2>
          <p class="text-slate-600 text-base sm:text-lg">
            Empowering agricultural operations with soil humidity sensors, automated motor starters, and field-tested mobile apps.
          </p>
        </div>

        <!-- 5-Step Visual Flow -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-12">
          @for (step of farmPipeline; track step.title; let idx = $index) {
            <div class="clean-card p-4 text-center flex flex-col items-center justify-between">
              <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl mb-2">
                {{ step.icon }}
              </div>
              <span class="text-[10px] font-mono font-bold text-emerald-600 uppercase">Step 0{{ idx + 1 }}</span>
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 font-display mt-0.5">{{ step.title }}</h4>
              <p class="text-[11px] text-slate-500 mt-1">{{ step.desc }}</p>
            </div>
          }
        </div>

        <!-- Highlights Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          @for (feat of agriFeatures; track feat.title) {
            <div class="p-5 rounded-2xl bg-white border border-slate-200">
              <div class="text-emerald-600 text-lg font-bold flex items-center gap-2 mb-1">
                <span>{{ feat.icon }}</span>
                <span class="text-sm text-slate-900">{{ feat.title }}</span>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">{{ feat.desc }}</p>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class SmartFarmComponent {
  farmPipeline = [
    { icon: '🌾', title: 'Farm Field', desc: 'Crop soil & outdoor plots' },
    { icon: '📡', title: 'IoT Sensors', desc: 'Realtime soil telemetry' },
    { icon: '☁️', title: 'Cloud & API', desc: 'Automated rules engine' },
    { icon: '📱', title: 'Mobile App', desc: 'Multilingual alarms' },
    { icon: '👨‍🌾', title: 'Farmer Action', desc: 'Remote pump activation' }
  ];

  agriFeatures = [
    { icon: '💧', title: 'Smart Irrigation', desc: 'Precision water dispensing based on live soil humidity levels.' },
    { icon: '🔔', title: 'Instant Mobile Alarms', desc: 'Alerts for power failure, motor dry-run, or pipe burst.' },
    { icon: '📊', title: 'Historical Trends', desc: 'Track seasonal soil patterns and optimize water usage.' },
    { icon: '⚡', title: 'Motor Protection', desc: 'Voltage fluctuation safeguards and automated timers.' }
  ];
}
