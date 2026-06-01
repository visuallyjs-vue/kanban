<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {
  ControlsComponent,
  type SurfaceComponent,
  SurfaceProvider
} from "@visuallyjs/browser-ui-vue"
import {
  EVENT_GROUP_RENDERED,
  type GroupRenderedParams,
  uuid,
  BrowserElement
} from "@visuallyjs/browser-ui"

import { DragManager } from './drag-manager'
import KanbanInspectorComponent from "./InspectorComponent.vue"
import renderOptions from "./render-options"
import viewOptions from "./view-options"

const surfaceComponent = ref(null)
const surface = ref(null)

function addColumn(event: any) {
  if (event.code === "Enter") {
    surface.value.model.addGroup({
        id: uuid(),
        title: event.target.value,
        description: "",
        color: "#FFFFFF"
      })
      event.target.value = ""
  }
}

onMounted(() => {
  surface.value = surfaceComponent.value.surface;
  new DragManager(surface.value)
  surface.value.bind(EVENT_GROUP_RENDERED, (p: GroupRenderedParams<BrowserElement>) => {
      setTimeout(() => p.el.scrollIntoView())
    })
})

</script>

<template>
  <div class="vjs-kanban-main">
    <SurfaceProvider>
      <div class="vjs-kanban-container">
        <SurfaceComponent
          ref="surfaceComponent"
          :view-options="viewOptions"
          :render-options="renderOptions"
          url="/dataset.json"
        />
      </div>

      <div class="vjs-kanban-rhs">
        <ControlsComponent :zoom-to-extents="false" :clear="false" />

        <div class="vjs-kanban-controls">
          <input type="text" id="txtAddColumn" placeholder="Add column..." @keypress="addColumn" />
        </div>

        <KanbanInspectorComponent />

        <div class="description"></div>
      </div>
    </SurfaceProvider>
  </div>
</template>
