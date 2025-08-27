---
title: Safety
titleTemplate: Introduction
description: KeyTik safety assurance.
---

# Safety

We are serious about user safety. We don't want to add malware or any virus intentionally. We want to build trust with you, so you can use KeyTik without any worry. To better assure you, check out this section.

<Adsense />

## Is KeyTik Safe to Use?
Yes, KeyTik is safe to use. We have not added any malicious code, and since KeyTik is open-source, you can check the code yourself. If you still have doubts, we encourage you to scan it using [VirusTotal](https://www.virustotal.com/gui/home/upload). VirusTotal is a well-known free online service that analyzes files and URLs for viruses, malware, and other malicious content by scanning them with a wide range of antivirus engines and security tools. We scan KeyTik using VirusTotal for every new version before release to ensure its safety.

To put it simply, we do not intend to add any malware or collect your personal data without your permission. Our goal is to build trust with you, so you can use KeyTik without any worries. If you encounter any warnings about safety such as untrusted author or false positives, don't hesitate to tell us so we can request removal from Windows. You can do this by submitting a report on the [KeyTik Issues page](https://github.com/Fajar-RahmadJaya/KeyTik/issues) or using the issue template [Windows Warning Report](https://github.com/Fajar-RahmadJaya/KeyTik/issues/new?assignees=&labels=Windows+Warning+Report&projects=&template=windows-warning-report.md&title=Windows+Warning+Report).

Another consideration is that KeyTik is trusted by Softpedia. Softpedia is one of the biggest software downloaders and is known for the safety of its downloadable software. KeyTik received an award from Softpedia as certified no spyware, no adware, no viruses. You can check it on Softpedia's post about KeyTik [here](https://www.softpedia.com/get/Others/Miscellaneous/KeyTik.shtml).

Here is the award description, taken from Softpedia:
> **This product was last tested in the Softpedia Labs on 29th of November 2024 by Alexandra Sava.**

> **Softpedia guarantees that KeyTik is 100% Free, which means it does not contain any form of malware, including but not limited to: spyware, viruses, trojans and backdoors.**

> **This software product was tested thoroughly and was found absolutely clean; therefore, it can be installed with no concern by any computer user. However, it should be noted that this product will be retested periodically and the award may be withdrawn, so you should check back occasionally and pay attention to the date of testing shown above.**

> **Note: this award is offered by Softpedia and can be used only by the developer of the software product that received the award.**

So you can rest assured about KeyTik safety!

<Adsense />

## Download Options
In each release (starting from version 1.2), we provide two download versions:
1. **Normal Version**: This is the compiled, executable version of KeyTik that we build using the same code as in the source code version. You don't need to compile it yourself, and it works out of the box. We use [PyInstaller](https://github.com/pyinstaller/pyinstaller) to build it into an executable.
2. **Source Code Version**: This is the raw, uncompiled code. You can review the code yourself to ensure its safety. If you're comfortable with compiling the code or installing the required Python libraries to run KeyTik and want to compile it yourself, you can use this download version. We also provide a [build guide](https://github.com/Fajar-RahmadJaya/KeyTik/blob/main/Build%20Guide.txt) with the download to guide you on how to compile or build it.

The source code version's purpose is to ensure user safety and be transparent to users. The normal version is to provide users with a KeyTik executable for ease of use.

## Why Do We Include Source Code Version?
Some antivirus programs may flag compiled programs or software using PyInstaller as malware. This is because of how PyInstaller packages the code into an executable. Even though the code is clean and free from malware, PyInstaller's packaging process can trigger false positives in certain antivirus engines.

For example, when we scan KeyTik source code version using VirusTotal, it passes without any issues. However, the compiled version can be flagged as malware due to the way PyInstaller works.

You can try this by downloading the source code version and checking the code yourself. After that, try to build or compile it yourself using the guide we provided. Then, try to scan it using VirusTotal - some antivirus engines may flag it as malware. So whether you compile it yourself or download the normal version, the result will be the same.

## Scan Results
Here's the VirusTotal scan for KeyTik v1.5.0 (source code version):
* **Report Screenshot**:

<div align="center">
<img src="/docs/introduction/safety/Virus Total Report v1.5.0.png" alt="Virus Total Report" width="700" />
</div>

* **Full scan report**:  
  - [View full scan report on VirusTotal](https://www.virustotal.com/gui/file/0a94bae55421cab450d8b6510ad4ae95ce1826233108c910d0362ea06aec7a1e)

---

## Summary
- **KeyTik is safe to use**: It's open-source, and you can verify the code yourself. KeyTik also got a reward by Softpedia as certified no spyware, no adware, no viruses.
- **Two download options**: A normal version (compiled) and a source code version (raw code) to assure safety and be transparent.
- **False positives on compiled or normal version**: If you find a warning or malware detection, don't worry it's a false positive. Executables built with PyInstaller may be flagged as malware, while the source code version is not flagged.

Your security and trust are our top priorities, and We are committed to keep KeyTik safe for all users. If you have any further concerns, don't hesitate to reach out!

<Adsense />