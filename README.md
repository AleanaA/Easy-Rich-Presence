# Easy Discord Rich Presence!

## How to install
### Windows
1. [Install nodejs](https://nodejs.org/en/)
2. [Install git](https://git-scm.com/downloads)
3. Open git bash and run `git clone https://github.com/AleanaA/Easy-Rich-Presence.git`
4. Open cmd and run `cd %UserProfile%\Easy-Rich-Presence && npm install`
5. Run `start.bat`

### Linux
1. Install nodejs and npm for your distro, as found [here](https://nodejs.org/en/download/package-manager/)
2. Install git for your distro<br/>
2.a - Arch Based - `pacman -S git`<br/>
2.b - Debian Based - `apt install git`<br/>
2.c - Fedora Based - `yum install git`<br/>
3. In terminal, run `git clone https://github.com/AleanaA/Easy-Rich-Presence.git`
4. In terminal, run `cd Easy-Rich-Presence && npm install`
5. In terminal, run `sh start.sh`

## Running in the background on Linux
1. In terminal, run `npm install pm2 -g`
2. In terminal, move to the Easy-Rich-Presence directory.
3. In terminal, run `pm2 start start.sh --name "Rich Presence"`

## Configuration
To start with, make a bot aplication on your [Developer page](https://discordapp.com/developers/applications/me/)<br/>
Choose a good name for the application. This is what will show as your playing status.<br/>
<br/>
After making your application, scroll down and click `Enable Rich Presence`<br/>
<br/>
Next, you'll want to open `main.js`<br/>
If you're on Windows, it's prefered that you open it with something like [Notepad++](https://notepad-plus-plus.org/) or [Sublime](https://www.sublimetext.com/)<br/>
Replace `id` with your applications Client ID, and change `First line` and `Second line` to whatever you'd like.<br/>
To make the second line blank, put `//` at the beginning of the line. If you do this for the first line, you'll just get errors.<br/>
<br/>
After setting up your text, you can either find an image you like that's above a 512x512 resolution, or you can add `//` to the start of the four image lines.<br/>
<br/>
If setting up an image, upload it to your assets area in your application, set it as a large image, and give it a name, then save your changes.<br/>
Once you've saved your changes, replace `largeimage` with whatever you named the image. Afterwards, you can set `Large Image Hover Text` to whatever you'd like, or to disable it, add `//` to the start of the line.<br/>
<br/>
If you'd like a small image in the bottom corner of the large image, find another image that is above a 512x512 resolution, upload it to your assets area in your application,  set it as a small image, and give it a name, then save your changes.<br/>
Once you've saved your changes, replace `smallimage` with whatever you named the image. Afterwards, you can set `Small Image Hover Text` to whatever you'd like, or to disable it, add `//` to the start of the line.

## Support
[There's a support server that you can find here if you have any issues, or just need help.](https://discord.gg/eJhG4Tq)
