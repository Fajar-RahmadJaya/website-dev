---
title: Installation
titleTemplate: Getting Started
description: How to install KeyTik.
---

# Installation

KeyTik comes with 2 download versions, normal version and source code version. Basically, normal version is KeyTik in '.exe' form and source code version is KeyTik in '.py' form. For more info about it, check out [KeyTik Download Version](/docs/introduction/safety#download-options). You need to install AutoHotkey and optionally Interception driver to make KeyTik work. Interception driver is required if you want to assign profiles to specific devices. If you don't want to use that feature, then you don't have to install Interception driver. To make AutoHotkey and Interception driver installation easier, we have also made AutoHotkey and Interception driver command line installation guide. You can check it in the section below or just click [here](/docs/getting-started/installation#command-line-installation) or see the video guide [here](https://youtu.be/-qKC3TkfDEo?si=mOG2LH9JQUBZoSMB).

<Adsense />

## How To Install
To install KeyTik you just need to follow these steps:
### Using Installer
1. Download Setup.exe.
2. Double click on it to run.
3. Follow the instruction.
4. Done.

### Install Manually
1. **Download And Install AutoHotkey, Interception Driver (Optional If You Use Assign Profile On Specific Device Feature)**
    - You can install AutoHotkey and Interception driver manually or use command line to make it easier. To do that, refer to [How To Install AutoHotkey and Interception Driver Using Command Line](/docs/getting-started/installation#command-line-installation).
    - **AutoHotkey**:
      - AutoHotkey Download Website: [https://www.autohotkey.com/download](https://www.autohotkey.com/download).
      - If you encounter any issues with AutoHotkey installation, you can visit AutoHotkey installation documentation at: [https://www.autohotkey.com/docs/v2/howto/Install.htm](https://www.autohotkey.com/docs/v2/howto/Install.htm).
    - **Interception Driver**:
      - Interception Driver Download: [https://github.com/oblitum/Interception/releases](https://github.com/oblitum/Interception/releases)
      - To manually install it, visit [AutoHotkey Interception, Install the Interception driver](https://github.com/evilC/AutoHotInterception?tab=readme-ov-file#install-the-intereception-driver) for detailed installation guide.
      - To know whether the Interception Driver is correctly installed, try using the "Open AHI Monitor To Test Device" button. If it works, then the Interception Driver is installed correctly.
2. **Download KeyTik from one of the following platforms**
    - KeyTik GitHub Release: [https://github.com/Fajar-RahmadJaya/KeyTik/releases](https://github.com/Fajar-RahmadJaya/KeyTik/releases).
     - There are 2 option to download, normal version and source code version.
     - If you want simple version in executable form, you can download the normal version (In release it's the zip file without 'open source version' name on it, example KeyTik.v1.5.0.rar). In normal version you can directly double click the exe file to run KeyTik.
     - If you want the raw code only, you can download source code version (In release it's the zip file with 'open source version' name on it, example KeyTik.v1.5.0.Source.Code.Download.Version.rar). To make it work, you need to install required python library or build it into executable yourself. We have added guide to build it into the download or you can see it in [here](https://github.com/Fajar-RahmadJaya/KeyTik/blob/main/Build%20Guide.txt).
    - Source Forge: [https://sourceforge.net/projects/keytik](https://sourceforge.net/projects/keytik).
3. **Extract KeyTik zip file**
    - Extract the downloaded KeyTik zip file to a location of your choice.
4. **Open KeyTik folder**
    - Navigate to the folder where you extracted KeyTik and locate KeyTik.exe.
5. **Run KeyTik**
    - Double-click KeyTik.exe to start it.
6. **You're All Set!**
    - KeyTik should now be ready to use.

<Adsense />

## User Agreement
By downloading, installing, or using KeyTik: The All-in-One Automation Tool , you agree to comply with and be bound by the terms of the Apache License 2.0 and our additional terms. If you do not agree to these terms, you must not download, install, or use the Software. You can find our full user agreement on: [https://keytik.com/term-and-policies/user-agreement](https://keytik.com/term-and-policies/user-agreement).

## System Requirements
KeyTik requires AutoHotkey to run, so it shares the same system requirements as AutoHotkey:
- **Operating System**: Windows only.

## Command Line Installation
Installing AutoHotkey and Interception driver can be a lot of work, especially Interception driver. So we made this command line to make AutoHotkey and Interception driver installation easier. We have also made a video guide for this - check out [Command Line Installation](https://youtu.be/-qKC3TkfDEo?si=mOG2LH9JQUBZoSMB). Here is the step-by-step guide on how to install AutoHotkey and Interception driver using command line:
1. **Open Command Prompt as Administrator**
   - This step is required to install the Interception Driver.
2. **Run the Command Below**
   - Copy the command below and paste it into your command prompt (right-click to paste).
3. **Follow the Installation Steps for AutoHotkey**
   - After running the command, follow the prompts to install **AutoHotkey**.
4. **Test Installation**
   - After installation, use the "Open AHI Monitor to Test Device" button to ensure everything is set up properly.

**AutoHotkey and Interception Driver Installation Command:**
```bat
:: This Is Comment.
:: Make sure to run your Command Prompt as administrator for Interception Installation

:: Go To Download Directory.
cd %USERPROFILE%\Downloads

:: Create Installation Folder.
mkdir "AutoHotkey & Interception Installation"

:: Go To Installation Folder.
cd "%USERPROFILE%\Downloads\AutoHotkey & Interception Installation"

:: Check If AutoHotkey Installed, If Not, Then Download AutoHotkey Setup From GitHub Release And Run It.
IF NOT EXIST "C:\Program Files\AutoHotkey" (curl -L https://github.com/AutoHotkey/AutoHotkey/releases/download/v2.0.18/AutoHotkey_2.0.18_setup.exe -o "%USERPROFILE%\Downloads\AutoHotkey & Interception Installation\AutoHotkey_2.0.18_setup.exe" && "%USERPROFILE%\Downloads\AutoHotkey & Interception Installation\AutoHotkey_2.0.18_setup.exe") ELSE echo AutoHotkey is already installed.

:: Download Interception.zip From GitHub Release.
curl -L https://github.com/oblitum/Interception/releases/download/v1.0.1/Interception.zip -o "%USERPROFILE%\Downloads\AutoHotkey & Interception Installation\Interception.zip"

:: Extract Interception.zip.
powershell -Command "Expand-Archive -Path '%USERPROFILE%\Downloads\AutoHotkey & Interception Installation\Interception.zip' -DestinationPath '%USERPROFILE%\Downloads\AutoHotkey & Interception Installation\Interception'"

:: Go To Interception Install Directory.
cd "%USERPROFILE%\Downloads\AutoHotkey & Interception Installation\Interception\Interception\command line installer"

:: Run Interception Installer.
install-interception.exe

:: Command To Install Interception.
install-interception.exe /install

:: AutoHotkey And Interception Installation Done!

```

> [!IMPORTANT]
> Make sure AutoHotkey is installed correctly, as it's required for KeyTik to run profiles. If you're using the "Assign Profile On Specific Device" feature, ensure that the Interception Driver is properly installed, as it is needed for this functionality.

<Adsense />
