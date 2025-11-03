import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LOCAL_ROUTES } from '../../../utils/routes/local.route';
interface menuItem {
  route: string;
  label: string;
  icon: string;
}
@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  tabs!: menuItem[];
  activeTab!: string;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.loadTabs();
    this.routeObserver();
  }

  loadTabs() {
    this.tabs = [
      { route: LOCAL_ROUTES.PROFILE, label: 'Profile', icon: 'pi pi-user' },
      { route: LOCAL_ROUTES.SMTP, label: 'Smtp', icon: 'pi pi-envelope' },
    ];
  }

  routeObserver() {
    // Listen for route changes
    this.router.events.subscribe(() => {
      const currentPath = this.router.url.split('/').pop(); // get last segment
      const matchedTab = this.tabs.find((tab) =>
        tab.route.endsWith(currentPath as string)
      );
      if (matchedTab) {
        this.activeTab = matchedTab.route;
      }
    });

    // Set on load
    const currentPath = this.router.url.split('/').pop();
    const matchedTab = this.tabs.find((tab) =>
      tab.route.endsWith(currentPath as string)
    );
    if (matchedTab) {
      this.activeTab = matchedTab.route;
    }
  }
}
