---
sidebar_position: 2
---

# MenuBuilder

Fluent builder for defining menus. Constructed once per session and produces a `MenuDefinition` via `.build()`.

```ts
import { MenuBuilder } from '@flowcord/core';
```

## Generics

```ts
MenuBuilder<TState, TSessionState, TCtx, TMode>
```

| Generic | Default | Description |
|---|---|---|
| `TState` | `Record<string, unknown>` | Typed menu-local state shape |
| `TSessionState` | `Record<string, unknown>` | Typed session-wide state shape |
| `TCtx` | `MenuContext<TState, TSessionState>` | Context type (extended by builder subclasses) |
| `TMode` | `'unset'` | Tracks render mode — narrows to `'embeds'` or `'layout'` when the respective method is called |

`TMode` enforces at compile time that embed-mode methods (`.setEmbeds`, `.setButtons`, `.setSelectMenu`) cannot be called alongside layout-mode methods (`.setLayout`).

## Constructor

```ts
new MenuBuilder(session: MenuSessionLike, name: string, options?: Record<string, unknown>)
```

`session` is the `MenuSession` instance passed into the menu factory. `name` is the unique menu identifier. `options` are available as `ctx.options` in callbacks.

---

## Render methods

### `.setEmbeds(fn)` — embeds mode

```ts
setEmbeds(fn: (ctx: TCtx) => Awaitable<EmbedBuilder[]>): MenuBuilder<TState, TSessionState, TCtx, 'embeds'>
```

Sets the embed render callback. Switches the builder to embeds mode.

---

### `.setButtons(fn, options?)` — embeds mode

```ts
setButtons(
  fn: (ctx: TCtx) => Awaitable<ButtonInputConfig<TCtx>[]>,
  options?: SetButtonsOptions
): MenuBuilder<TState, TSessionState, TCtx, 'embeds'>
```

Sets the button render callback. `options.pagination` enables explicit button pagination.

**`SetButtonsOptions`:**

```ts
{ pagination?: ButtonPaginationOptions }
```

**`ButtonPaginationOptions`:**

| Option | Type | Default | Description |
|---|---|---|---|
| `perPage` | `number` | `25` | Buttons per page |
| `stableButtons` | `boolean` | `true` | Always render both nav buttons (disabled when N/A) |
| `labels.next` | `string` | `'Next →'` | Next button label |
| `labels.previous` | `string` | `'← Previous'` | Previous button label |

---

### `.setSelectMenu(fn)` — embeds mode

```ts
setSelectMenu(fn: (ctx: TCtx) => Awaitable<SelectInputConfig<TCtx>>): MenuBuilder<TState, TSessionState, TCtx, 'embeds'>
```

Sets the select menu render callback.

---

### `.setLayout(fn)` — layout mode

```ts
setLayout(fn: (ctx: TCtx) => Awaitable<ComponentConfig<TCtx>[]>): MenuBuilder<TState, TSessionState, TCtx, 'layout'>
```

Sets the layout render callback (Components v2). Switches the builder to layout mode.

---

### `.setModal(fn)` — both modes

```ts
setModal(fn: (ctx: TCtx) => Awaitable<ModalConfig<TCtx> | ModalConfig<TCtx>[]>): this
```

Sets the modal render callback. Return a single `ModalConfig` for one modal, or an array for multiple (each requiring a unique `id`).

---

### `.setMessageHandler(fn)` — both modes

```ts
setMessageHandler(fn: (ctx: TCtx, response: string) => Awaitable<void>): this
```

Enables text message input handling. The callback fires when the user sends a message in the channel.

---

## Lifecycle hooks

All hook methods accept `(ctx: TCtx) => Awaitable<void>` and return `this`.

| Method | Fires |
|---|---|
| `.setup(fn)` | Once on menu creation, before `onEnter` |
| `.onEnter(fn)` | Each time the menu is entered |
| `.beforeRender(fn)` | Before each render cycle |
| `.afterRender(fn)` | After the Discord message is sent or updated |
| `.onAction(fn)` | Before each button/select action callback |
| `.onNext(fn)` | When the user clicks the Next pagination button |
| `.onPrevious(fn)` | When the user clicks the Previous pagination button |
| `.onLeave(fn)` | When the menu is exited |
| `.onCancel(fn)` | When the user presses the Cancel button (before `onLeave`) |

See [Lifecycle Hooks](/docs/core-concepts/lifecycle-hooks) for execution order and usage guidance.

---

## Navigation & behaviour options

### `.setTrackedInHistory()`

Pushes this menu onto the navigation stack when navigating away. Required for `goBack()` to return here. See [Navigation](/docs/core-concepts/navigation).

### `.setReturnable()`

Injects a Back button into the reserved row. The button calls `goBack()`.

### `.setCancellable()`

Injects a Cancel button into the reserved row. Fires `onCancel` then `onLeave`.

### `.setPreserveStateOnReturn()`

Snapshots `ctx.state` and pagination position when leaving. Restores them when `goBack()` returns to this menu, skipping `setup()`. Requires `setTrackedInHistory()`. See [State Management](/docs/core-concepts/state-management).

### `.setFallbackMenu(menuId, options?)`

Specifies where `goBack()` navigates when the stack is empty. See [Fallback Menus](/docs/advanced/fallback-menus).

---

## Pagination

### `.setListPagination(opts)`

```ts
setListPagination(opts: ListPaginationOptions<TCtx>): this
```

Enables list pagination. FlowCord calls `getTotalQuantityItems` before each render and populates `ctx.pagination`.

**`ListPaginationOptions`:**

| Option | Type | Default | Description |
|---|---|---|---|
| `getTotalQuantityItems` | `(ctx) => Awaitable<number>` | Required | Total item count |
| `itemsPerPage` | `number` | `50` | Items per page |
| `stableButtons` | `boolean` | `true` | Always render both nav buttons |
| `labels.next` | `string` | `'Next →'` | Next button label |
| `labels.previous` | `string` | `'← Previous'` | Previous button label |

See [Pagination](/docs/advanced/pagination).

---

## Context extension

### `.extendContext(fn)`

```ts
extendContext<TExtra extends Record<string, unknown>>(
  fn: (baseCtx: MenuContext) => TExtra
): this
```

Adds typed properties to `ctx`. Used by builder subclasses to inject domain helpers.

---

## `fromDefinition(def)`

An alternative to method chaining — configure the builder from an object literal:

```ts
builder.fromDefinition({
  embeds: (ctx) => [/* ... */],
  buttons: (ctx) => [/* ... */],
  setup: (ctx) => { /* ... */ },
  hooks: { onLeave: async (ctx) => { /* ... */ } },
  options: { trackInHistory: true, returnable: true },
});
```

`fromDefinition` merges with any previously set builder options.

---

## `.build()`

```ts
build(): MenuDefinition
```

Validates the builder configuration and returns a `MenuDefinition`. Throws if:

- Neither `.setEmbeds()` nor `.setLayout()` was called
- Both `.setEmbeds()` and `.setLayout()` were called
- `.setSelectMenu()` is combined with button pagination
