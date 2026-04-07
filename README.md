# 🛒 Lista de Compras

> *"Artigo. Quantidade. Acrescentar. Clicar. Riscar. Repetir até o frigorífico estar cheio."*

A shopping list app built with pure vanilla JavaScript — no frameworks, no libraries, no forgotten items.  
Add items with or without quantity, move them to the cart with a click, send them back if you changed your mind, and remove them for good when they're done.

---

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Frameworks](https://img.shields.io/badge/frameworks-none-lightgrey?style=flat)
![Vanilla JS](https://img.shields.io/badge/vanilla-JS%20only-yellow?style=flat)

---

## Features

| | Feature | Detail |
|---|---|---|
| ➕ | Add items | Name required, quantity optional |
| 🛒 | Move to cart | Click any item to mark it as picked up |
| ↩️ | Move back | Click again to return it to the list |
| ❌ | Remove item | Red X button for permanent deletion |
| 👁️ | Auto-hide lists | Empty sections disappear automatically |
| ⌨️ | Keyboard flow | Focus returns to the input after every action |

---

## How to Use

1. Open `index.html` in any modern browser
2. Type the item name in **Artigo**
3. Optionally fill in **Quantidade**
4. Click **Acrescentar** (or press `Enter`)
5. Click an item to move it to the cart — it gets crossed out
6. Click it again to send it back to the list
7. Hit **✕** to remove it permanently

---

## Project Structure

```
compras/
│
├── 📄 index.html       ← Page structure, form, and list containers
├── 🎨 styles.css       ← Layout, item states, and responsive rules
└── ⚙️  app.js          ← All logic: add, move, remove, validation
```

---

## How It Works

```
User input
    └─→ addItem()
            ├─→ Validation (empty check)
            ├─→ Creates <li> with text + optional quantity
            ├─→ Injects ✕ button with stopPropagation
            └─→ Appends to #lista-on

Click on item
    └─→ moveItem()
            ├─→ Checks parentNode.parentNode.id
            ├─→ #lista-on  →  moves to #lista-off (crossed out)
            └─→ #lista-off →  moves back to #lista-on

Click on ✕
    └─→ e.stopPropagation() → prevents moveItem() from firing
    └─→ item.remove()
```

---

## Honest Notes

- The X button uses `e.stopPropagation()`. Without it, clicking X also fires the move-to-cart logic. That was a fun bug while it lasted.
- The lists hide with `:has(ul:empty)`. CSS doing the work JavaScript usually has to beg for.
- Quantity is optional. The app will not judge you for buying milk without specifying how many litres.
- All variable names are in Portuguese. The app is called *Lista de Compras*. There was never any other option.

---

## Context

Built as part of my **Web Development (Front-End)** module at **CESAE Digital**.  
First project combining dynamic DOM manipulation, event delegation, and multi-state UI — in a practical, real-world use case.

---

*Next up: local storage so the list survives a page refresh. Because right now it doesn't.*
