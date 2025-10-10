---
title: Automation Tool
titleTemplate: Getting Started
description: Guide to customize automation tool.
---

# Automation Tool

KeyTik also come with various automation tool you can use. It count as profile and use text mode. We take it from our side project on [AutoHotkey Script Collection And Template](https://github.com/Fajar-RahmadJaya/AutoHotkeyCollection). We add comment on the script to make it easier to change and tell you which part you can customize. So if there are ";" on the line, that mean after it or ";" right is comment and what you can change is before it or left ";". Example: '''space:: ; This is comment'''. On that example 'space' is what you can change and '; this is comment' is the comment. Comment mean AutoHotkey not detect it as input it wouldn't affect script.

::: tip
All KeyTik AutoHotkey Script Including Automation Tool is Using AutoHotkey V2.
:::

## Auto Clicker
AutoHotkey can also be used as auto clicker. But not like other auto clicker, AutoHotkey can made you able to add more command to the clicker. For example in this code, you can use 'e' to make condition for it to work. So, if you hold 'e' it will send left click multiple time and you can adjust the interval between click. For short, with this you can do more advance auto clicker in lightweight size. You can also use this as template or adjust to your preference on interval, condition for script to work, change left click with another keys etc.

- How To Use Template
You can change the code to your preferences like what i describe with adjusting some code such as :
1. Change interval : `ClickInterval := 100`
2. Change what key to click : `$e::` and `$e up::`
3. Change auto click key : `Click`

- Example Changing Template
I will give you example if i want to change the code for it to behave like this :
- Auto clicking 'Space' when i press 'Left Alt' with interval 1 minute (60000 millisecond) :

```txt
ClickInterval := 60000  ; Change the interval to 1 minute (60000 millisecond)

global isClicking := false

$Lalt:: ; Change this 'to doing auto click when left alt is held'
{
    global isClicking
    isClicking := true
    while (isClicking)
    {
        Space ; Change Auto Clicking to Space
        Sleep(ClickInterval)
    }
}

$Lalt up:: ; Change this 'to doing auto click when left alt is held'
{
    global isClicking
    isClicking := false
}
```

- Full Code :
```txt
ClickInterval := 100 ; Change this if you want to change the interval

global isClicking := false

$e:: ; Change this if you want to change hold 'e' for condition to do auto clicker
{
    global isClicking
    isClicking := true
    while (isClicking)
    {
        Click ; Change this if you want to change left click to another key for auto clicker
        Sleep(ClickInterval)
    }
}

$e up:: ; Change this if you want to change hold 'e' for condition to do auto clicker
{
    global isClicking
    isClicking := false
}
```

<Adsense />

## Screen Clicker
Another useful you can use with AutoHotkey is screen clicker. What screen clicker do is clicking some coordinate on your screen with some interval. There is not much program or software that can do this. If there any, it usually need you to pay to be able to use it. Fortunately there is AutoHotkey that can help you. Screen clicker can be useful if you have repetitive task such as filling form, simulate click, or even clicking element. You can also activate or deactivate it using some key combination to make it more convenient and flexible. Don't worry, because i also made an AutoHotkey script to take screen coordinate and copy it automatically.

- How To Use Template
There are 3 thing you can modify in this script :
1. Screen clicker toggle ( To activate or deactivate screen clicker ): `q & e::`  (Line 3)
2. Screen coordinate :  `coordinates := [[500, 300], [600, 400], [700, 500]]` (Note : You can the coordinate as much as you want) (Line 19)
3. Interval : `interval := 500` (Line 29)

- Example Changing Template
I will give you example the script change. Example, do screen clicker with coordinate [100, 0], [0, 100], [100, 100], [200, 100], [200, 200], [0, 200] with interval 1 minute (60.000 millisecond) if i press (Left Alt + Space).
   - Open chrome and download folder with shortcut assignment 'alt+space'
```txt
toggle := false

Lalt & Space:: ; 'Screen Will Activate or Deactivate if Keys Pressed' Change
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
    coordinates := [[100, 0], [0, 100], [100, 100], [200, 100], [200, 200], [0, 200]] ; Coordinate Change

    Loop coordinates.Length != 0 ? coordinates.Length : ""
    {
        x := coordinates[A_Index][1]
        y := coordinates[A_Index][2]

        MouseMove(x, y)
        Click()

        interval := 60000 ; Interval Change

        Sleep(interval)
    }
    return
}
```

- Full Code :
```txt
toggle := false

q & e:: ; Change this to toggle screen clicker on or off
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
    coordinates := [[500, 300], [600, 400], [700, 500]] ; Change the interval to your preference

    Loop coordinates.Length != 0 ? coordinates.Length : ""
    {
        x := coordinates[A_Index][1]
        y := coordinates[A_Index][2]

        MouseMove(x, y)
        Click()

        interval := 500 ; Change the interval to your preference in millisecond

        Sleep(interval)
    }
    return
}
```

## Screen Coordinate Auto Detect And Copy
This script is to help you getting coordinate to use on screen clicker. To use it, You just need to click 'space' at default. This script is useful if you work with screen such as programmer or designer. It also easy to use where you just need to press on key and it will automatically take the coordinate and copy it. Because it automatically copy the coordinate, you just need to paste the coordinate if you need it. The coordinate also show up on cursor using tooltip to help user getting coordinate more flexible. Don't worry, because the tooltip is small and generally would not disturb you as it also disappear fast.

- How To Use Template
What you can change is only 1, that is the condition to start coordinate finder. At default, it's space but you can change it to whatever you need. This not only limited to one key, but you can also use key combination such as shortcut.

- Example Changing Template
I will give you example the script change. Example, do Screen Coordinate Auto Detect And Copy when pressing (Left Alt + Win)
The script should be :
```txt
Persistent
SetTitleMatchMode(2)

Lalt & Lwin:: ; Condition to Activate or Deactivate Change
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

- Full Code :
```txt
Persistent
SetTitleMatchMode(2)

Space:: ; Change this for script to take coordinate
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
You can open some files using shortcut. For example, i want to open files 1 and files 2 when clicking 'alt+left arrow'. I can do that with adjusting some of this code then run the script. After i click 'alt+left arrrow' it should opening files 1 and files 2. Files i mean here is not just files, you can use whatever in your device as long as it has their path like "D\MyFolder\MyFiles". You can use it if you don't want to go to your files directory or want to make your desktop clean. If you want the script to auto run on startup, [click this for more info](https://github.com/Fajar-RahmadJaya/AutoHotkeyCollection/tree/main?tab=readme-ov-file#how-to-run-the-script-) so you can add or remove your script from startup easily. Of course you can also not assign any shortcut to it so if the script clicked or run it will directly open the files or you can just made it to run on startup so your files will automatically opened when you log to your device. Adjust it to your preference and creativity.

- How To Use Template
You can change the code to your preferences like what i describe with adjusting some code such as :
1. Assign Shortcut : `alt & left::`
2. Open the files : `Run("C:\Your\files\path\with\double\quotation\mark")` (Be sure to change this)

- Example Changing Template
I will give you example if i want to change the code for it to behave like this :
   - Open chrome and download folder with shortcut assignment 'alt+space'
```txt
Alt & Space::
{
    Run("C:\Users\<username>\Desktop\Downloads - Shortcut.lnk")
    Run("C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Google Chrome.lnk")
}
return
```

- Full Code :
```txt
Alt & Left::
{
    Run("C:\\path\\to\\your\\file1.txt") ; Made sure to change this with your file path
    Run("C:\\path\\to\\your\\file2.txt") ; You can also copy and paste this line for more file like this
    Run("C:\\path\\to\\your\\file3.txt")
}
return
```

<Adsense />
