import {Component} from '@angular/core';
import {Avatar} from "primeng/avatar";
import {ButtonDirective} from "primeng/button";
import {PIcon} from "@primeicons/angular";
import {
  Sidebar,
  SidebarAside,
  SidebarBackdrop,
  SidebarCollapsible,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarLayout,
  SidebarMain,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarPanel,
  SidebarRail,
  SidebarSide,
  SidebarSpacer,
  SidebarTrigger,
  SidebarVariant
} from "primeng/sidebar";

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
  imports: [
    Avatar,
    ButtonDirective,
    PIcon,
    Sidebar,
    SidebarAside,
    SidebarBackdrop,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarLayout,
    SidebarMain,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarPanel,
    SidebarRail,
    SidebarSpacer,
    SidebarTrigger
  ],
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
  navGroups: NavGroup[] = [
    {
      label: 'Navigation',
      items: [
        {icon: 'home1', label: 'Home1', isActive: true},
        {icon: 'inbox', label: 'Inbox', badge: '12'},
        {icon: 'search', label: 'Search'},
        {icon: 'bell', label: 'Notifications', badge: '3'}
      ]
    },
    {
      label: 'Projects',
      items: [
        {
          icon: 'chart-bar',
          label: 'Analytics',
          subItems: [{label: 'Overview', isActive: true}, {label: 'Reports'}, {label: 'Real-time'}]
        },
        {icon: 'users', label: 'Team'},
        {icon: 'calendar', label: 'Calendar'},
        {icon: 'folder', label: 'Documents', subItems: [{label: 'Shared'}, {label: 'Private'}, {label: 'Archived'}]}
      ]
    },
    {
      label: 'Billing',
      items: [
        {icon: 'credit-card', label: 'Payments'},
        {icon: 'shopping-cart', label: 'Orders'},
        {icon: 'star', label: 'Subscriptions'}
      ]
    }
  ];

  hasActiveSub(item: NavItem): boolean {
    return !!item.subItems?.some((s) => s.isActive);
  }
}
