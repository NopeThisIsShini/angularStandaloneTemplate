import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader-overlay" *ngIf="isVisible">
      <div class="loader-container">
        <!-- Professional Tyre Icon -->
        <div class="tyre-icon">
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Outer tire -->
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#ffffff"
              stroke-width="3"
              opacity="0.9"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#ffffff"
              stroke-width="1"
              opacity="0.4"
            />

            <!-- Professional tread pattern -->
            <g stroke="#ffffff" stroke-width="1.5" fill="none" opacity="0.7">
              <path d="M50 5 L50 12" />
              <path d="M68 12 L66 18" />
              <path d="M82 25 L76 28" />
              <path d="M95 50 L88 50" />
              <path d="M82 75 L76 72" />
              <path d="M68 88 L66 82" />
              <path d="M50 95 L50 88" />
              <path d="M32 88 L34 82" />
              <path d="M18 75 L24 72" />
              <path d="M5 50 L12 50" />
              <path d="M18 25 L24 28" />
              <path d="M32 12 L34 18" />
            </g>

            <!-- Inner rim -->
            <circle
              cx="50"
              cy="50"
              r="28"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              opacity="0.8"
            />
            <circle
              cx="50"
              cy="50"
              r="22"
              fill="rgba(255,255,255,0.05)"
              stroke="#ffffff"
              stroke-width="1"
              opacity="0.6"
            />

            <!-- Rim spokes - professional design -->
            <g stroke="#ffffff" stroke-width="1.5" opacity="0.7">
              <line x1="50" y1="28" x2="50" y2="72" />
              <line x1="28" y1="50" x2="72" y2="50" />
              <line x1="35.8" y1="35.8" x2="64.2" y2="64.2" />
              <line x1="64.2" y1="35.8" x2="35.8" y2="64.2" />
              <!-- Additional spokes for premium look -->
              <line x1="39" y1="29" x2="61" y2="71" />
              <line x1="61" y1="29" x2="39" y2="71" />
              <line x1="29" y1="39" x2="71" y2="61" />
              <line x1="71" y1="39" x2="29" y2="61" />
            </g>

            <!-- Center hub -->
            <circle
              cx="50"
              cy="50"
              r="8"
              fill="rgba(255,255,255,0.1)"
              stroke="#ffffff"
              stroke-width="1"
              opacity="0.8"
            />
          </svg>
        </div>

        <!-- Loading Progress Bar -->
        <div class="loading-progress-bar">
          <div class="loading-progress-fill"></div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .loader-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(135deg, #0d2635 0%, #1e3a5f 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      .loader-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }

      .tyre-icon {
        animation: tyreRotate 3s linear infinite;
        filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.2));
      }

      .loading-progress-bar {
        width: 200px;
        height: 4px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 2px;
        overflow: hidden;
        position: relative;
      }

      .loading-progress-fill {
        height: 100%;
        background: linear-gradient(
          90deg,
          #ffffff,
          rgba(255, 255, 255, 0.7),
          #ffffff
        );
        border-radius: 2px;
        animation: progressMove 2s ease-in-out infinite;
        width: 60px;
      }

      /* Animations */
      @keyframes tyreRotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes progressMove {
        0% {
          transform: translateX(-60px);
        }
        100% {
          transform: translateX(200px);
        }
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .tyre-icon svg {
          width: 70px;
          height: 70px;
        }
        .loading-progress-bar {
          width: 150px;
        }
      }

      @media (max-width: 480px) {
        .tyre-icon svg {
          width: 60px;
          height: 60px;
        }
        .loading-progress-bar {
          width: 120px;
        }
      }
    `,
  ],
})
export class LoaderComponent {
  @Input() isVisible: boolean = true;
}
