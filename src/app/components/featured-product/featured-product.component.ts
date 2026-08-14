import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="products" class="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Product Information (6 cols) -->
          <div class="lg:col-span-6 space-y-6">
            
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-400/30">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Featured IoT Product</span>
            </div>

            <div class="space-y-2">
              <div class="text-2xl font-extrabold font-display text-sky-400 tracking-wider">Z+ SECURE</div>
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight">
                Smart Monitoring. Instant Alerts. <br />
                <span class="text-sky-400">Better Security.</span>
              </h2>
            </div>

            <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
              <strong class="text-white font-semibold">Z+ Secure</strong> combines smart IoT hardware with intuitive mobile apps to provide 24/7 real-time monitoring, perimeter detection, and instant emergency alerts directly to your smartphone.
            </p>

            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <div class="text-sky-400 text-xl font-bold font-display">&lt; 200ms</div>
                <div class="text-xs font-bold text-white mt-0.5">Instant Alert Speed</div>
                <div class="text-[11px] text-slate-400">Realtime Push Notifications</div>
              </div>
              <div class="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <div class="text-emerald-400 text-xl font-bold font-display">Multi-Network</div>
                <div class="text-xs font-bold text-white mt-0.5">GSM / Wi-Fi / LoRa</div>
                <div class="text-[11px] text-slate-400">Always Connected</div>
              </div>
            </div>

            <div class="pt-2 flex items-center gap-4">
              <a 
                href="#contact" 
                class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-sm shadow-md shadow-sky-500/25 hover:scale-105 transition-all"
              >
                <span>Explore Z+ Secure</span>
                <span>→</span>
              </a>
              <span class="text-xs text-slate-400">Custom IoT Prototyping Available</span>
            </div>

          </div>

          <!-- Right Column: Clean Phone & Hardware Preview (6 cols) -->
          <div class="lg:col-span-6 flex items-center justify-center">
            
            <div class="relative w-full max-w-md bg-slate-800/90 rounded-3xl p-6 border border-slate-700 shadow-2xl">
              
              <div class="flex items-center justify-between border-b border-slate-700 pb-4 mb-4">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
                  <span class="text-xs font-mono font-bold text-slate-200">Z+ IOT CONTROLLER HUB</span>
                </div>
                <span class="text-xs font-mono text-sky-400 font-bold">STATUS: ARMED</span>
              </div>

              <div class="space-y-3">
                <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-between text-xs">
                  <span class="text-slate-300 font-medium">🚪 Main Entry Sensor:</span>
                  <span class="text-emerald-400 font-bold">SECURED</span>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-between text-xs">
                  <span class="text-slate-300 font-medium">📡 GSM Telemetry Link:</span>
                  <span class="text-sky-400 font-bold">98% SIGNAL</span>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-between text-xs">
                  <span class="text-slate-300 font-medium">🔋 Battery Backup:</span>
                  <span class="text-emerald-400 font-bold">100% HEALTH</span>
                </div>
              </div>

              <div class="mt-4 p-3 rounded-xl bg-sky-950/60 border border-sky-500/30 text-xs text-sky-200 flex items-center gap-2">
                <span>📱</span>
                <span>Native Flutter Mobile App included with remote one-tap control.</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class FeaturedProductComponent {}
