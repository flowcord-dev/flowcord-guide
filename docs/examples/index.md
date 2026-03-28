---
sidebar_position: 1
---

# Examples

Each example is a standalone, runnable bot that demonstrates a specific set of FlowCord features. They build on each other — later examples assume familiarity with earlier ones.

## All examples

| Example | Slash command | What it demonstrates |
|---|---|---|
| [01 — Quick Start](./01-quickstart) | `/weather` | Minimum setup: one menu, state, buttons |
| [02 — Multi-Menu Navigation](./02-multi-menu-navigation) | `/cookbook` | Multiple menus, `goTo`, `goBack`, history stack |
| [03 — State & Lifecycle](./03-state-and-lifecycle) | `/workout` | Typed state, `ctx.state` vs `ctx.sessionState`, all lifecycle hooks |
| [04 — Sub-Menu Continuation](./04-sub-menu-continuation) | `/party` | `openSubMenu`, `ctx.complete`, returning results to a parent |
| [05 — Select Menus & Modals](./05-selects-and-modals) | `/event` | `setSelectMenu`, `setModal`, multi-modal, `opensModal` |
| [06 — Pagination & Guards](./06-pagination-and-guards) | `/shop` | Button pagination, list pagination, `guard`, `pipeline` |

## Where to start

If you're new to FlowCord, start with **01 — Quick Start** and work through in order. Each example introduces one or two new concepts without re-explaining the basics.

If you're looking for something specific:
- **Navigation patterns** → [02](./02-multi-menu-navigation)
- **State across menus** → [03](./03-state-and-lifecycle)
- **Parent-child flows** → [04](./04-sub-menu-continuation)
- **Form input** → [05](./05-selects-and-modals)
- **Large item lists** → [06](./06-pagination-and-guards)

All source files live in [`flowcord-core/examples/`](https://github.com/flowcord-dev/flowcord-core/tree/main/examples).
