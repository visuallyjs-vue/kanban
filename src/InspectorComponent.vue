<script setup lang="ts">
import { ref } from "vue";
import { Node, Group, type Base } from "@visuallyjs/browser-ui";
import { InspectorComponent } from "@visuallyjs/browser-ui-vue";

const currentType = ref('');

const renderEmptyContainer = () => {
  currentType.value = '';
};

const refresh = (obj: Base) => {
  currentType.value = obj.objectType;
};
</script>

<template>
  <InspectorComponent :refresh="refresh" :renderEmptyContainer="renderEmptyContainer">
    <div v-if="currentType === ''"></div>

    <div v-else-if="currentType === Node.objectType" class="vjs-kanban-inspector">
      <strong>Label</strong>
      <input vjs-att="name" type="text"/>
      <strong>Description</strong>
      <textarea vjs-att="description" rows="10"></textarea>
    </div>

    <div v-else-if="currentType === Group.objectType" class="vjs-kanban-inspector">
      <strong>Title</strong>
      <input vjs-att="title" type="text"/>
      <strong>Description</strong>
      <textarea vjs-att="description" rows="10"></textarea>
      <strong>Color</strong>
      <input type="color" vjs-att="color"/>
    </div>
  </InspectorComponent>
</template>
