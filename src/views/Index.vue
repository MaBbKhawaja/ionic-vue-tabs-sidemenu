<template>
  <ion-split-pane content-id="main">
    <!--  the side menu  -->
    <ion-menu content-id="main">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <!-- the main content -->
    <ion-router-outlet id="main"></ion-router-outlet>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-split-pane>
</template>

<script>
import {
  IonHeader,
  IonMenu,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonContent,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
} from "@ionic/vue";
import { ellipse, square, triangle } from "ionicons/icons";

export default {
  components: {
    IonHeader,
    IonMenu,
    IonRouterOutlet,
    IonSplitPane,
    IonTitle,
    IonToolbar,
    IonItem,
    IonList,
    IonContent,
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
  },
  setup() {
    return {
      ellipse,
      square,
      triangle,
    };
  },
};
</script>

<style scoped>
</style>