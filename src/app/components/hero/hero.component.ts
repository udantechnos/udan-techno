import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-mesh-gradient">
      
      <!-- Subtle Background Grid -->
      <div class="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: High-Impact Typography & Actionable CTAs (7 cols) -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <!-- Brand Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider shadow-xs">
              <span>🚀</span>
              <span>YOUR IDEAS. OUR TECHNOLOGY.</span>
            </div>

            <!-- Main Headline -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.12] font-display tracking-tight">
              We Build <br class="hidden sm:block" />
              <span class="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Solutions
              </span> <br />
              That Help Businesses <span class="text-sky-600 underline decoration-sky-300 decoration-wavy decoration-2">Fly High</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong class="text-slate-900 font-semibold">Udan Techno</strong> is a team of passionate innovators delivering smart, scalable, and modern digital products for startups, enterprises, and ambitious brands.
            </p>

            <!-- 6 Quick Service Pills Grid (From the Instagram post) -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0">
              @for (svc of quickServices; track svc.name) {
                <a 
                  [href]="svc.href"
                  class="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 text-slate-700 hover:text-sky-600 hover:border-sky-300 hover:shadow-xs transition-all text-xs font-semibold group"
                >
                  <span class="text-base group-hover:scale-110 transition-transform">{{ svc.icon }}</span>
                  <span class="truncate">{{ svc.name }}</span>
                </a>
              }
            </div>

            <!-- Primary Action Buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a 
                href="#contact" 
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-base shadow-md shadow-sky-500/25 hover:shadow-lg hover:scale-105 active:scale-95 transition-all group"
              >
                <span>Start Your Project</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>

              <a 
                href="#services" 
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
              >
                <span>Explore Services</span>
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </a>
            </div>

          </div>

          <!-- Right Column: Clean & Friendly 3D Tech Laptop + Soaring Rocket Showcase (5 cols) -->
          <div class="lg:col-span-5 relative flex items-center justify-center">
            
            <div class="relative w-full max-w-[420px] sm:max-w-[460px] aspect-square flex items-center justify-center">
              
              <!-- Soft Ambient Glow Behind Laptop -->
              <div class="absolute inset-4 rounded-full bg-gradient-to-tr from-sky-200/50 via-blue-200/30 to-indigo-200/40 blur-3xl pointer-events-none"></div>

              <!-- Sleek Modern Laptop Base Mockup -->
              <div class="relative z-10 w-full max-w-[380px] bg-slate-900 rounded-2xl p-3 shadow-2xl border border-slate-700">
                
                <!-- Screen Frame -->
                <div class="bg-slate-950 rounded-xl overflow-hidden p-3 border border-slate-800 relative">
                  
                  <!-- Screen Header Bar -->
                  <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                    <div class="flex items-center gap-1.5">
                      <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                      <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    </div>
                    <span class="text-[10px] font-mono text-slate-400">udan-cloud-dashboard.app</span>
                    <span class="text-[9px] font-mono text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded">LIVE 99.9%</span>
                  </div>

                  <!-- Dashboard Metrics Preview Inside Screen -->
                  <div class="grid grid-cols-2 gap-2 mb-3">
                    <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                      <div class="text-[10px] text-slate-400">Active API Requests</div>
                      <div class="text-sm font-bold text-white">148.2k / min</div>
                    </div>
                    <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                      <div class="text-[10px] text-slate-400">Mobile Sync Latency</div>
                      <div class="text-sm font-bold text-emerald-400">12ms (Instant)</div>
                    </div>
                  </div>

                  <div class="h-16 bg-gradient-to-r from-sky-950/60 via-blue-900/40 to-slate-900 rounded-lg p-2 flex items-end gap-1">
                    <div class="w-1/6 bg-sky-500/40 h-8 rounded-xs"></div>
                    <div class="w-1/6 bg-sky-500/60 h-10 rounded-xs"></div>
                    <div class="w-1/6 bg-sky-500/80 h-12 rounded-xs"></div>
                    <div class="w-1/6 bg-sky-400 h-14 rounded-xs"></div>
                    <div class="w-1/6 bg-blue-400 h-11 rounded-xs"></div>
                    <div class="w-1/6 bg-emerald-400 h-15 rounded-xs"></div>
                  </div>

                </div>

                <!-- Laptop Base Bottom Edge -->
                <div class="h-2 bg-slate-800 rounded-b-xl mx-auto w-3/4 mt-1"></div>
              </div>

              <!-- Stylized Rocket Soaring Out Of The Laptop -->
              <div class="absolute -top-6 right-8 sm:right-12 z-20 animate-soar flex flex-col items-center">
                
                <!-- Rocket SVG -->
                <div class="w-24 sm:w-28 h-36 filter drop-shadow-[0_15px_25px_rgba(2,132,199,0.4)]">
                  <svg viewBox="0 0 100 160" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Left Fin -->
                    <path d="M30 85 C20 95 10 115 12 125 C22 125 32 115 36 102 Z" fill="#0284c7" stroke="#0369a1" stroke-width="1.5"/>
                    <!-- Right Fin -->
                    <path d="M70 85 C80 95 90 115 88 125 C78 125 68 115 64 102 Z" fill="#0284c7" stroke="#0369a1" stroke-width="1.5"/>
                    <!-- Fuselage -->
                    <path d="M50 10 C68 30 72 75 70 115 C70 120 30 120 30 115 C28 75 32 30 50 10 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
                    <!-- Nosecone -->
                    <path d="M50 10 C60 22 65 42 65 42 L35 42 C35 42 40 22 50 10 Z" fill="#0284c7"/>
                    <!-- Porthole Window -->
                    <circle cx="50" cy="65" r="11" fill="#0f172a" stroke="#0284c7" stroke-width="2"/>
                    <circle cx="50" cy="65" r="8" fill="#38bdf8"/>
                    <ellipse cx="48" cy="63" rx="4" ry="2" fill="#ffffff" opacity="0.8" transform="rotate(-30 48 63)"/>
                    <!-- Flame -->
                    <path class="animate-flame" d="M40 120 C40 145 50 160 50 160 C50 160 60 145 60 120 Z" fill="#f97316"/>
                    <path class="animate-flame" d="M44 120 C44 138 50 150 50 150 C50 150 56 138 56 120 Z" fill="#fde047"/>
                  </svg>
                </div>

                <!-- Launch Smoke Cloud Puff -->
                <div class="relative -mt-4 flex items-center justify-center gap-1">
                  <div class="w-8 h-8 rounded-full bg-white/90 shadow-md"></div>
                  <div class="w-12 h-10 rounded-full bg-sky-50 shadow-md -mt-2"></div>
                  <div class="w-9 h-8 rounded-full bg-white/90 shadow-md"></div>
                </div>

              </div>

              <!-- Floating Interactive Achievement Cards -->
              <div class="absolute -bottom-4 -left-4 sm:-left-6 z-30 animate-float-pill bg-white p-3 rounded-2xl border border-slate-200 shadow-lg flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <div>
                  <div class="text-xs font-extrabold text-slate-900">50+ Digital Products</div>
                  <div class="text-[10px] text-slate-500 font-medium">Successfully Deployed</div>
                </div>
              </div>

              <div class="absolute top-12 -left-6 z-30 animate-float-pill bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-md flex items-center gap-2" style="animation-delay: 1.5s;">
                <span class="w-2 h-2 rounded-full bg-sky-500 animate-ping"></span>
                <span class="text-xs font-bold text-slate-800">Flutter • Angular • .NET</span>
              </div>

            </div>

          </div>

        </div>

        <!-- Bottom Trust Statement Bar (From Instagram design) -->
        <div class="mt-16 pt-8 border-t border-slate-200/80">
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            @for (badge of trustBadges; track badge.title) {
              <div class="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-slate-200/60">
                <div class="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-lg shrink-0">
                  {{ badge.icon }}
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-900 leading-tight">{{ badge.title }}</div>
                  <div class="text-[10px] text-slate-500">{{ badge.subtitle }}</div>
                </div>
              </div>
            }
          </div>
        </div>

      </div>
    </section>
  `
})
export class HeroComponent {
  quickServices = [
    { name: 'Mobile App Dev', icon: '📱', href: '#services' },
    { name: 'Web Development', icon: '🌐', href: '#services' },
    { name: 'UI/UX Design', icon: '🎨', href: '#services' },
    { name: 'Custom Software', icon: '💻', href: '#services' },
    { name: 'API Integration', icon: '⚡', href: '#services' },
    { name: 'Business Automation', icon: '⚙️', href: '#services' },
  ];

  trustBadges = [
    { icon: '👥', title: 'Experienced Team', subtitle: 'Senior Developers' },
    { icon: '🎖️', title: 'Quality Assurance', subtitle: '100% Tested Code' },
    { icon: '⏱️', title: 'On-time Delivery', subtitle: 'Milestone Tracking' },
    { icon: '💬', title: 'Transparent Updates', subtitle: 'Direct Communication' },
    { icon: '🤝', title: 'Long-term Support', subtitle: 'Continuous AMC' },
  ];
}
