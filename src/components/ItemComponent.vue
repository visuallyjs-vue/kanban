<script setup lang="ts">
import {Node, Surface} from "@visuallyjs/browser-ui"
import {BrowserUIVueModel} from "@visuallyjs/browser-ui-vue";

const props = defineProps({
  model:BrowserUIVueModel,
  obj:Node,
  ui:Surface
})
</script>

<template>
  <div class="vjs-kanban-item" draggable="true">
    <div class="vjs-kanban-item-delete" @click="props.model.removeNode(props.obj)"></div>
    {{ props.obj.data.name }}
  </div>
</template>
