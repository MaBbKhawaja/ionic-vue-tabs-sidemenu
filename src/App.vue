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
  </ion-split-pane>
</template>

<script>
import {
  // IonHeader,
  IonMenu,
  IonRouterOutlet,
  IonSplitPane,
  // IonTitle,
  // IonToolbar,
} from "@ionic/vue";
// import { defineComponent } from "vue";

export default {
  components: {
    // IonHeader,
    IonMenu,
    IonRouterOutlet,
    IonSplitPane,
    // IonTitle,
    // IonToolbar,
  },
};
</script>

<style scoped>
</style>