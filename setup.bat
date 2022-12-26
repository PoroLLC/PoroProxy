echo Setting up PoroProxy@v2..
echo Install node.js from https://nodejs.org/en recommended version.
:PROMPT
SET /P AREYOUSURE=Did you install it? (Y/[N])?
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END
echo INITING PROJECT...
call npm init -y
echo INSTALLING discord.js@v13...
call npm install discord.js@v13
echo -- We are aware this is a old version, but we can't update it right now.
echo PoroProxy@latest setup is now complete, you may now close this!
pause 