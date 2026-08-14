import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-20 lg:py-28 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Let's Build Something <span class="text-sky-600">Amazing</span>
          </h2>
          <p class="text-slate-600 text-base sm:text-lg">
            Share your project idea, workflow requirements, or questions. Our team will get back to you within 24 hours.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column: Company Details (5 cols) -->
          <div class="lg:col-span-5 space-y-6">
            <div class="clean-card p-8 space-y-6">
              
              <div class="flex items-center gap-3.5">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white text-xl shadow-md">
                  🚀
                </div>
                <div>
                  <h3 class="text-xl font-extrabold text-slate-900 font-display">UDAN TECHNO</h3>
                  <p class="text-xs text-sky-600 font-bold">Software Development & Technology Solutions</p>
                </div>
              </div>

              <p class="text-slate-600 text-sm leading-relaxed">
                We are a passionate engineering team transforming manual business processes into fast, scalable digital software across India and worldwide.
              </p>

              <div class="space-y-4 pt-2 border-t border-slate-100 text-sm">
                <!-- Email -->
                <div class="flex items-center gap-3 text-slate-700">
                  <div class="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 text-lg">
                    📧
                  </div>
                  <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">Email Us</div>
                    <a href="mailto:info@udantechno.com" class="text-slate-900 font-bold hover:text-sky-600 transition-colors">
                      info&#64;udantechno.com
                    </a>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-center gap-3 text-slate-700">
                  <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-lg">
                    📞
                  </div>
                  <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">Direct Phone / WhatsApp</div>
                    <div class="text-slate-900 font-bold">+91 (India) — Direct Support</div>
                  </div>
                </div>

                <!-- Location -->
                <div class="flex items-center gap-3 text-slate-700">
                  <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 text-lg">
                    📍
                  </div>
                  <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">Location</div>
                    <div class="text-slate-900 font-bold">India • Serving Worldwide</div>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="pt-4 border-t border-slate-100">
                <div class="text-xs text-slate-500 font-semibold mb-3">Connect With Us:</div>
                <div class="flex items-center gap-2.5">
                  <a 
                    href="https://instagram.com/udan.techno" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-pink-50 border border-slate-200 hover:border-pink-200 text-slate-700 hover:text-pink-600 transition-all flex items-center gap-2 text-xs font-bold"
                  >
                    <span>📷</span>
                    <span>/udan.techno</span>
                  </a>

                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-700 hover:text-blue-600 transition-all flex items-center gap-2 text-xs font-bold"
                  >
                    <span>💼</span>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          <!-- Right Column: Clean Enquiry Form (7 cols) -->
          <div class="lg:col-span-7">
            <div class="clean-card p-8 sm:p-10">
              
              @if (isSubmitted()) {
                <div class="py-12 text-center space-y-4">
                  <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto">
                    ✓
                  </div>
                  <h3 class="text-2xl font-bold text-slate-900 font-display">Message Sent!</h3>
                  <p class="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out. A senior technical consultant from Udan Techno will review your requirements and reply within 24 hours.
                  </p>
                  <button 
                    (click)="resetForm()"
                    class="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              } @else {
                <form (ngSubmit)="submitForm()" class="space-y-5">
                  
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="space-y-1.5">
                      <label class="block text-xs font-bold uppercase text-slate-700">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        [(ngModel)]="formData.name" 
                        name="name"
                        placeholder="e.g. Rahul Sharma"
                        class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white text-sm"
                      />
                    </div>

                    <div class="space-y-1.5">
                      <label class="block text-xs font-bold uppercase text-slate-700">Company Name</label>
                      <input 
                        type="text" 
                        [(ngModel)]="formData.company" 
                        name="company"
                        placeholder="e.g. Acme Enterprises"
                        class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white text-sm"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="space-y-1.5">
                      <label class="block text-xs font-bold uppercase text-slate-700">Work Email *</label>
                      <input 
                        type="email" 
                        required
                        [(ngModel)]="formData.email" 
                        name="email"
                        placeholder="you@company.com"
                        class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white text-sm"
                      />
                    </div>

                    <div class="space-y-1.5">
                      <label class="block text-xs font-bold uppercase text-slate-700">Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        required
                        [(ngModel)]="formData.phone" 
                        name="phone"
                        placeholder="+91 98765 43210"
                        class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white text-sm"
                      />
                    </div>
                  </div>

                  <!-- Service Selector Pills -->
                  <div class="space-y-2">
                    <label class="block text-xs font-bold uppercase text-slate-700">What service do you need?</label>
                    <div class="flex flex-wrap gap-2">
                      @for (service of serviceOptions; track service) {
                        <button 
                          type="button"
                          (click)="selectService(service)"
                          class="px-3 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer"
                          [ngClass]="{
                            'bg-sky-600 text-white border-sky-600 shadow-xs': formData.service === service,
                            'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100': formData.service !== service
                          }"
                        >
                          {{ service }}
                        </button>
                      }
                    </div>
                  </div>

                  <!-- Message -->
                  <div class="space-y-1.5">
                    <label class="block text-xs font-bold uppercase text-slate-700">Describe Your Requirements *</label>
                    <textarea 
                      rows="4" 
                      required
                      [(ngModel)]="formData.message" 
                      name="message"
                      placeholder="Tell us about your project requirements, goals, or existing technology..."
                      class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white text-sm resize-none"
                    ></textarea>
                  </div>

                  <!-- Submit -->
                  <button 
                    type="submit"
                    class="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-base shadow-md shadow-sky-500/25 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Enquiry</span>
                    <span>🚀</span>
                  </button>

                  <p class="text-[11px] text-center text-slate-400">
                    🔒 Strict NDA Protection. Your project details are 100% confidential.
                  </p>

                </form>
              }

            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  isSubmitted = signal(false);

  formData = {
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Mobile App Development',
    message: ''
  };

  serviceOptions = [
    'Mobile App (Flutter)',
    'Web Development',
    'ERP & Business Software',
    'REST API & Backend',
    'IoT & Hardware Solutions',
    'Smart Agriculture',
    'Business Automation'
  ];

  selectService(s: string) {
    this.formData.service = s;
  }

  submitForm() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.isSubmitted.set(true);
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: 'Mobile App Development',
      message: ''
    };
    this.isSubmitted.set(false);
  }
}
