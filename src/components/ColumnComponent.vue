<script setup lang="ts">
import {Group, Surface, uuid} from "@visuallyjs/browser-ui"
import {BrowserUIVueModel} from "@visuallyjs/browser-ui-vue";

const props = defineProps({
  model:BrowserUIVueModel,
  obj:Group,
  ui:Surface
})

function addItem(event: any) {
  if (event.code === "Enter") {

    // On enter keypress, find out how many members there already are in the column
    const order = props.obj.getMembers().length
    // add a new item to the column, specifying an `order` property and the text from
    // the input field, or default to `Item` if the user didnt type anything.
    const node = props.model.addNode({
      group: props.obj,
      id: uuid(),
      order,
      name: event.target.value || "Item"
    })

    // show the rendered item in the next tick of the event loop
    setTimeout(() => {
      const el = props.ui.getRenderedElement(node)
      el.scrollIntoView()
      props.model.setSelection(node)
    }, 0)

    // clear the input field
    event.target.value = ""
  }
}
</script>

<template>
  <div class="vjs-kanban-lane" data-vjs-draggable="false">
    <div class="vjs-kanban-lane-header">
      <div class="vjs-kanban-lane-titlebar">
        <div class="vjs-kanban-lane-color" :style="{ backgroundColor: obj.data.color }"></div>
        <div class="vjs-kanban-lane-title">{{ obj.data.title }}</div>
        <div class="vjs-kanban-lane-edit" aria-label="Edit column name and description" title="Edit column name and description" @click="model.setSelection(obj)"></div>
      </div>
      <div class="vjs-kanban-lane-description">{{ obj.data.description }}</div>
    </div>

    <!-- the items go into this element -->
    <div data-vjs-group-content="true"></div>

    <div class="vjs-kanban-lane-footer">
      <input type="text" placeholder="Add item..." @keypress="addItem" />
    </div>
  </div>
</template>
