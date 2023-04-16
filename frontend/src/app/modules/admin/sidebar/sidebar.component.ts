import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public sidebarItems: NbMenuItem[] = [
    {
      title: this.translate.instant('app.sidebar.menu.items.productAndServices'),
      group: true,
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.products'),
      icon: 'shopping-bag-outline',
      link: "/app/product/list"
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.services'),
      icon: 'briefcase-outline',
      link: "/app/service/list"
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.orders'),
      group: true,
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.orders'),
      icon: 'shopping-cart-outline',
      link: "/app/order/list"
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.customers'),
      icon: 'people-outline',
      link: "/app/customer/list"
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.discounts'),
      group: true,
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.discounts'),
      icon: 'percent-outline',
      link: "/app/discount/list"
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.settings'),
      group: true,
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.general'),
      icon: 'settings-2-outline',
      link: '/app/setting/general'
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.plan'),
      icon: 'pricetags-outline',
      link: '/app/setting/plan'
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.currencies'),
      icon: 'credit-card-outline',
      link: '/app/setting/plan'
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.taxes'),
      icon: 'file-text-outline',
      link: '/app/setting/taxes'
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.profile'),
      icon: 'person-outline',
      link: '/app/setting/profile'
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.owner'),
      group: true,
    },
    {
      title: this.translate.instant('app.sidebar.menu.items.adminConsole'),
      icon: 'settings-outline',
      link: '/app/owner/console'
    },
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

}
