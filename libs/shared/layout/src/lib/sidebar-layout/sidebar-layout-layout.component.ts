import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { LabelModule } from 'primeng/label';
import { SidebarCollapsible, SidebarSide, SidebarVariant } from 'primeng/types/sidebar';
import { Sidebar } from '@primeicons/angular/sidebar';
import { ChevronDown } from '@primeicons/angular/chevron-down';
import { EllipsisV } from '@primeicons/angular/ellipsis-v';
import { PIcon } from '@primeicons/angular/p-icon';

interface NavItem {
  icon: string;
  label: string;
  isActive?: boolean;
  badge?: string;
  subItems?: { label: string; isActive?: boolean }[];
}

interface NavGroup {
  label: string;
  items: NavItem[];
}
@Component({
  selector: 'lib-sidebar-layout',
  imports: [AvatarModule, SelectModule, SelectButtonModule, ToggleSwitchModule, SidebarModule, ButtonModule, LabelModule, FormsModule, Sidebar, ChevronDown, EllipsisV, PIcon]
  ,
  templateUrl: './sidebar-layout-layout.component.html',
  styleUrl: './sidebar-layout-layout.component.css'
})
export class SidebarLayoutLayout {

  variant: SidebarVariant = 'sidebar';
  collapsible: SidebarCollapsible = 'icon';
  side: SidebarSide = 'left';
  overlay: boolean = false;
  openOnHover: boolean = false;
  backdrop: boolean = false;
  variantOptions = [
    { label: 'Sidebar', value: 'sidebar' },
    { label: 'Floating', value: 'floating' },
    { label: 'Inset', value: 'inset' }
  ];
  collapsibleOptions = [
    { label: 'Icon', value: 'icon' },
    { label: 'Offcanvas', value: 'offcanvas' },
    { label: 'None', value: 'none' }
  ];
  sideOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' }
  ];
  navGroups: NavGroup[] = [
    {
      label: 'Navigation',
      items: [
        { icon: 'home', label: 'Home', isActive: true },
        { icon: 'inbox', label: 'Inbox', badge: '12' },
        { icon: 'search', label: 'Search' },
        { icon: 'bell', label: 'Notifications', badge: '3' }
      ]
    },
    {
      label: 'Projects',
      items: [
        { icon: 'chart-bar', label: 'Analytics', subItems: [{ label: 'Overview', isActive: true }, { label: 'Reports' }, { label: 'Real-time' }] },
        { icon: 'users', label: 'Team' },
        { icon: 'calendar', label: 'Calendar' },
        { icon: 'folder', label: 'Documents', subItems: [{ label: 'Shared' }, { label: 'Private' }, { label: 'Archived' }] }
      ]
    },
    {
      label: 'Billing',
      items: [
        { icon: 'credit-card', label: 'Payments' },
        { icon: 'shopping-cart', label: 'Orders' },
        { icon: 'star', label: 'Subscriptions' }
      ]
    }
  ];
  hasActiveSub(item: NavItem): boolean {
    return !!item.subItems?.some((s) => s.isActive);
  }

  protected onChangeSideBar() {
    if (this.side == "left") {
      this.side = 'right'
    }else {
      this.side = 'left'
    }
  }
}
