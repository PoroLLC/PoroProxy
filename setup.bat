echo
echo ██████╗░░█████╗░██████╗░░█████╗░██████╗░██████╗░░█████╗░██╗░░██╗██╗░░░██╗
echo ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗██╔╝╚██╗░██╔╝
echo ██████╔╝██║░░██║██████╔╝██║░░██║██████╔╝██████╔╝██║░░██║░╚███╔╝░░╚████╔╝░
echo ██╔═══╝░██║░░██║██╔══██╗██║░░██║██╔═══╝░██╔══██╗██║░░██║░██╔██╗░░░╚██╔╝░░
echo ██║░░░░░╚█████╔╝██║░░██║╚█████╔╝██║░░░░░██║░░██║╚█████╔╝██╔╝╚██╗░░░██║░░░
echo ╚═╝░░░░░░╚════╝░╚═╝░░╚═╝░╚════╝░╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░
echo Setting up this PoroProxy..
echo Install node.js from https://nodejs.org/en recommended version.
:PROMPT
SET /P AREYOUSURE=Did you install it? (Y/[N])?
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END
echo INITING PROJECT...
npm init -y
echo INSTALLING DISCORDJS@v13...
npm install discord.js@v13
echo -- We are aware this is a old version, but we can't update it right now.
echo PoroProxy@latest setup is now complete, you may now close this!