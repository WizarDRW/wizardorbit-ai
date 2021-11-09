<template>
  <div class="mt-5">
    <v-card class="mx-auto" max-width="300" tile>
      <v-list rounded>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-btn @click="itemUp(selectedItem)">up</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
  }),
  methods: {
    itemUp(selItem) {
        console.log('girdim');
      for (let i = 0; i < items.length; i++) {
        if (this.items[i].icon == "mdi-flag") {
          let temp = this.items[i - 1];
          this.items[i - 1] = this.items[i];
          this.items[i] = temp;
        }
      }
    },
  },
};
</script>

<style lang="scss">
</style>