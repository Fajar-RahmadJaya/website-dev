---
title: Automation Tool
titleTemplate: Getting Started
description: Guide to customize automation tool.
---

# Automation Tool

KeyTik comes with several built-in automation tools, each of which is treated as a profile and uses text formatting to function, similar to AutoHotKey. These tools are adapted from our side project, [AutoHotkey Script Collection and Templates](https://github.com/Fajar-RahmadJaya/AutoHotkeyCollection). Each script includes inline comments explaining which parts you can customize and how.

Lines that contain a semicolon ( `;` ) are partially or fully commented out — everything to the right of `;` is a comment and has no effect on the script. For example: `space:: ; This is a comment`. Here, `space` is the functional part you can edit, and `; This is a comment` is just a note for your reference.

::: tip
All KeyTik AutoHotkey scripts, including the automation tools, use AutoHotkey V2.
:::

## Auto Clicker

AutoHotkey makes a capable auto clicker — and a more flexible one than most dedicated tools. Unlike standard auto clickers that are limited to left click, this script lets you configure any key as the click action. You can also adjust the trigger key (the key you hold to activate it) and the interval between clicks.

Think of the included script as a ready-to-use template. The customizable parts are clearly marked with comments.

**What you can change:**

1. Click interval: `ClickInterval := 100`
2. Trigger key: `$e::` and `$e up::`
3. Key to auto-click: `Click`

---

**Example — Auto-clicking Space while holding Left Alt, with a 1-minute interval:**

```txt
ClickInterval := 60000  ; Interval in milliseconds (60000 = 1 minute)

global isClicking := false

$Lalt:: ; Activate while Left Alt is held
{
    global isClicking
    isClicking := true
    while (isClicking)
    {
        Space ; Key to auto-click
        Sleep(ClickInterval)
    }
}

$Lalt up:: ; Deactivate when Left Alt is released
{
    global isClicking
    isClicking := false
}
```

---

**Full default script:**

```txt
ClickInterval := 100 ; Change to adjust the interval between clicks

global isClicking := false

$e:: ; Change to set which key activates the auto clicker when held
{
    global isClicking
    isClicking := true
    while (isClicking)
    {
        Click ; Change to set which key is auto-clicked
        Sleep(ClickInterval)
    }
}

$e up:: ; Change to match the trigger key above
{
    global isClicking
    isClicking := false
}
```

<Adsense />

## Screen Clicker

The screen clicker is another tool built on AutoHotkey. Rather than clicking at the cursor's current position, it clicks a predefined sequence of screen coordinates at set intervals. This is useful for automating repetitive on-screen tasks — working through a series of download prompts, filling out forms, or interacting with fixed UI elements on a schedule.

Few programs offer this kind of functionality, and those that do typically require a paid license. A separate coordinate finder script (described below) is also included to make setting up your coordinates straightforward.

**What you can change:**

1. Toggle shortcut (activate/deactivate the screen clicker): `q & e::` (Line 3)
2. Screen coordinates: `coordinates := [[500, 300], [600, 400], [700, 500]]` — add as many coordinate pairs as needed (Line 19)
3. Interval between clicks: `interval := 500` (Line 29)

---

**Example — Clicking through six coordinates with a 1-minute interval, toggled by Left Alt + Space:**

```txt
toggle := false

Lalt & Space:: ; Toggle the screen clicker on or off
{
global
    toggle := !toggle

    if (toggle) {
        SetTimer(ClickLoop,100)
    } else {
        SetTimer(ClickLoop,0)
    }
    return
}

ClickLoop()
{
global
    coordinates := [[100, 0], [0, 100], [100, 100], [200, 100], [200, 200], [0, 200]] ; Your coordinates

    Loop coordinates.Length != 0 ? coordinates.Length : ""
    {
        x := coordinates[A_Index][1]
        y := coordinates[A_Index][2]

        MouseMove(x, y)
        Click()

        interval := 60000 ; Interval in milliseconds

        Sleep(interval)
    }
    return
}
```

---

**Full default script:**

```txt
toggle := false

q & e:: ; Change to set the toggle shortcut
{
global
    toggle := !toggle

    if (toggle) {
        SetTimer(ClickLoop,100)
    } else {
        SetTimer(ClickLoop,0)
    }
    return
}

ClickLoop()
{
global
    coordinates := [[500, 300], [600, 400], [700, 500]] ; Change to your desired coordinates

    Loop coordinates.Length != 0 ? coordinates.Length : ""
    {
        x := coordinates[A_Index][1]
        y := coordinates[A_Index][2]

        MouseMove(x, y)
        Click()

        interval := 500 ; Change to your desired interval in milliseconds

        Sleep(interval)
    }
    return
}
```

## Screen Coordinate Auto Detect and Copy

This script makes it easy to collect coordinates for use with the screen clicker. By default, pressing Space detects the cursor's current screen position, copies the coordinate to your clipboard, and briefly displays it as a tooltip near the cursor. Since the coordinate is copied automatically, you can paste it wherever you need it without writing anything down.

The tooltip is intentionally small and disappears quickly so it doesn't get in the way.

**What you can change:**

The only configurable option is the trigger key. By default it is Space, but it can be changed to any key or key combination.

---

**Example — Trigger with Left Alt + Win:**

```txt
Persistent
SetTitleMatchMode(2)

Lalt & Lwin:: ; Change to set the trigger key or combination
{
    MouseGetPos(&mouseX, &mouseY)

    coordFormat := "[" mouseX "," mouseY "]"

    A_Clipboard := coordFormat

    ToolTip("The coordinate has been copied:`n" coordFormat)

    SetTimer(RemoveToolTip,-2000)

    return
}

RemoveToolTip()
{
global
    ToolTip()
    return
}
```

---

**Full default script:**

```txt
Persistent
SetTitleMatchMode(2)

Space:: ; Change to set the trigger key
{
    MouseGetPos(&mouseX, &mouseY)

    coordFormat := "[" mouseX "," mouseY "]"

    A_Clipboard := coordFormat

    ToolTip("The coordinate has been copied:`n" coordFormat)

    SetTimer(RemoveToolTip,-2000)

    return
}

RemoveToolTip()
{
global
    ToolTip()
    return
}
```

## Multiple Files Opener

This script opens one or more files or programs when a key or shortcut is pressed. It works with anything that has a file path on your system — documents, applications, folders, shortcuts, and more. This is a convenient way to launch your full working environment in a single key press, or to keep your desktop clean by avoiding pinned shortcuts.

You can also opt to run the script on startup without a trigger key, so your files and programs open automatically whenever you log in. For instructions on adding a script to startup, [see this guide](https://github.com/Fajar-RahmadJaya/AutoHotkeyCollection/tree/main?tab=readme-ov-file#how-to-run-the-script-).

**What you can change:**

1. Shortcut to trigger the opener: `alt & left::`
2. File paths to open: `Run("C:\Your\files\path")` — add or remove `Run()` lines as needed

---

**Example — Open Chrome and the Downloads folder with Alt + Space:**

```txt
Alt & Space::
{
    Run("C:\Users\<username>\Desktop\Downloads - Shortcut.lnk")
    Run("C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Google Chrome.lnk")
}
return
```

---

**Full default script:**

```txt
Alt & Left::
{
    Run("C:\\path\\to\\your\\file1.txt") ; Replace with your actual file path
    Run("C:\\path\\to\\your\\file2.txt") ; Copy and paste this line to add more files
    Run("C:\\path\\to\\your\\file3.txt")
}
return
```

<Adsense />
