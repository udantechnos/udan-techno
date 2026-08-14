import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 lg:py-24 bg-slate-50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white text-center shadow-xl shadow-sky-500/20 relative overflow-hidden">
          
          <div class="max-w-3xl mx-auto space-y-6 relative z-10">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <span>🚀</span>
              <span>YOUR IDEAS. OUR TECHNOLOGY.</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight">
              Have an Idea? <br />
              <span>Let's Build It Together.</span>
            </h2>

            <p class="text-sky-100 text-base sm:text-lg max-w-xl mx-auto">
              Tell us about your business challenge, product idea or automation requirement. We'll help turn it into a high-ROI digital solution.
            </p>

            <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact" 
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-bold text-base shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <span>Start a Conversation</span>
                <span>→</span>
              </a>

              <a 
                href="https://instagram.com/udan.techno" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all"
              >
                <span>DM Us on Instagram</span>
                <span>📷</span>
              </a>
            </div>

            <div class="pt-4 text-xs font-bold text-sky-200 tracking-wider">
              LET'S GROW TOGETHER. <span class="text-white underline decoration-sky-300">LET'S FLY HIGH.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class CtaComponent {}
