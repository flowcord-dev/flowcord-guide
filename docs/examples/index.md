---
sidebar_position: 1
---

# Examples

Each example corresponds to a runnable bot in the `flowcord-core/examples/` directory. The snippets on these pages highlight the key FlowCord patterns and may omit boilerplate for brevity — refer to the source files for complete, runnable code. They build on each other — later examples assume familiarity with earlier ones.

## All examples

| Example                                          | Slash command | What it demonstrates                                                |
| ------------------------------------------------ | ------------- | ------------------------------------------------------------------- |
| [Quick Start](./quickstart)                      | `/weather`    | Minimum setup: one menu, state, buttons                             |
| [Multi-Menu Navigation](./multi-menu-navigation) | `/cookbook`   | Multiple menus, `goTo`, `goBack`, history stack                     |
| [State & Lifecycle](./state-and-lifecycle)       | `/workout`    | Typed state, `ctx.state` vs `ctx.sessionState`, all lifecycle hooks |
| [Sub-Menu Continuation](./sub-menu-continuation) | `/party`      | `openSubMenu`, `ctx.complete`, returning results to a parent        |
| [Select Menus & Modals](./selects-and-modals)    | `/event`      | `setSelectMenu`, `setModal`, multi-modal, `opensModal`              |
| [Pagination & Guards](./pagination-and-guards)   | `/shop`       | Button pagination, list pagination, `guard`, `pipeline`             |

## Where to start

If you're new to FlowCord, start with **01 — Quick Start** and work through in order. Each example introduces one or two new concepts without re-explaining the basics.

If you're looking for something specific:

- **Navigation patterns** → [Multi-Menu Navigation](./multi-menu-navigation)
- **State across menus** → [State & Lifecycle](./state-and-lifecycle)
- **Parent-child flows** → [Sub-Menu Continuation](./sub-menu-continuation)
- **Form input** → [Select Menus & Modals](./selects-and-modals)
- **Large item lists** → [Pagination & Guards](./pagination-and-guards)

All source files live in [`flowcord-core/examples/`](https://github.com/flowcord-dev/flowcord-core/tree/main/examples).
