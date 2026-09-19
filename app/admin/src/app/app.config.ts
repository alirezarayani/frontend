import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {providePrimeNG} from "primeng/config";
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    providePrimeNG({
      theme: {
        preset: Aura
      },
      ripple: true,
      license: 'eyJpZCI6ImVkODdlN2UxLWUxZmQtNDA4Yi1iMTY2LTBjOWU1ZWUxNmE0YSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODkzNjI1NDksImV4cCI6MTgyMDg5ODU0OX0.8Ydco5cHC3-ZqQuK8TEMeR3mRoL2OZ7tNlLrxJtW9ELXCoPNXS2KaIOR0PXpb0HnXdqisAfdi0-vrXuOiTXwDw'
    })
  ]
};
