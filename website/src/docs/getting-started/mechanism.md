---
title: KeyTik Mechanism
titleTemplate: Getting Started
description: Learn how KeyTik work.
---

# KeyTik Mechanism

<Adsense />

## Overall Mechanism
For the automation tool executor, KeyTik use AutoHotkey. AutoHotkey is a powerful scripting language to do this task. Using AutoHotkey, allow keytik to do almost all automation task while still make it lightweight. For example, one AutoHotkey script size usually below 1MB and if We make the automation tool without AutoHotkey such as using python library then the size could be more than that. Another reason We use AutoHotkey is because how it work. Because it work in a single file and have different file for each script, allow KeyTik to assign feature to it such as run on startup or multiple profile.
To be more simple, We use python for the functionality (create, edit, GUI, run, exit, store, delete, run on startup and more) and use AutoHotkey as executor for each profile. So it's basically an app to create AutoHotkey script based on user input and assign functionality to it. You can see the created script on (KeyTik\_internal\data\active). For example, suppose your input is like this:

Example 1 (Without Shortcut):
<p align="center">
  <img src="/docs/getting-started/mechanism/Example1.png" alt="Input Example 1" width="400" />
</p>

Then the created script result would look like this:
```js
; default
^!p::ExitApp 

w::Up
a::Left
s::Down
d::Right
```

Example 2 (With Shortcut):
<p align="center">
  <img src="/docs/getting-started/mechanism/Example2.png" alt="Input Example 2" width="400" />
</p>

Then the created script result would look like this:
```js
; default
^!p::ExitApp 

toggle := false

~q & e::
{
    global toggle
    toggle := !toggle
}

#HotIf toggle
w::Up
a::Left
s::Down
#HotIf
```

<Adsense />

## Assign Profile on Specific Device
This feature work similar to [Remapper And Automation Tool] section with taking input from user then create AutoHotkey script from it. The difference is, KeyTik use help from AutoHotkey wrapper named [AutoHotkey Interception by evilC](https://github.com/evilC/AutoHotInterception) to be able to assign script or profile on specific device. AutoHotkey Interception work using [Interception driver by oblitum](https://github.com/oblitum/Interception) so to be able to make it work you need to install Interception driver first. For how to do it, visit [AutoHotkey Interception, Install the Interception driver](https://github.com/evilC/AutoHotInterception?tab=readme-ov-file#install-the-intereception-driver). 

To use this feature, you just need to select your device then click on "Select" Button, it will automatically take the device type, VID and PID/Handle then pass it to "Device ID" entry. After that, you can freely add your script or keyboard remap and finish it, then it's done. After setting up your device id and remap or script, you have a profile that work on specific device. If you are unsure which one is your device ID, you can use AutoHotkey Interception built in monitor with clicking "Open AHI Monitor To Test Device" button and it will automatically open monitor.ahk. 

For more simple explanation, to assign your remap or script to specific device, you just need to select your device in the "Select Device" button. 

Here is the example, suppose your input is like this:
<p align="center">
  <img src="/docs/getting-started/mechanism/Example3.png" alt="Input Example 3" width="400" />
</p>

Then the created script result would look like this:
```js
; default
^!p::ExitApp 

#SingleInstance force
Persistent
#include AutoHotkey Interception\Lib\AutoHotInterception.ahk

AHI := AutoHotInterception()
id1 := AHI.GetDeviceIdFromHandle(false, "ACPI\VEN_HPQ&DEV_8001")
cm1 := AHI.CreateContextManager(id1)

#HotIf cm1.IsActive
toggle := false

~q & e::
{
    global toggle
    toggle := !toggle
}

#HotIf toggle
w::Up
a::Left
s::Down
#HotIf

#HotIf
```

<Adsense />