### About this Demo

This Vue application demonstrates a **Kanban Board** built with **VisuallyJS**.

### VisuallyJS Components Used

The demo utilizes several components from the `@visuallyjs/browser-ui-vue` package:

- **SurfaceProvider**: Provides the VisuallyJS context.
- **SurfaceComponent**: The main canvas where the Kanban columns and cards are rendered.
- **ControlsComponent**: Provides UI controls for the surface.

The demo also integrates with the VisuallyJS event system and model to handle drag-and-drop and column management.

### Component Options

The `SurfaceComponent` is configured with:

- **renderOptions**: Configures the rendering of the Kanban board.
- **viewOptions**: Defines the appearance of cards and columns.

### CSS Requirement

For the VisuallyJS components to render correctly, the standard VisuallyJS stylesheet must be included in the project. In this demo, it is imported in `src/main.js`:

```javascript
import "@visuallyjs/browser-ui/css/visuallyjs.css"
```
