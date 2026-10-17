<img src="runcat.gif" width="150" align="left" />

# pi-runcat

Is a running cat🐱 for your `PI` loading bar

(Yet another useless cat here..)

## pi install 
```bash
wget -P ~/.local/share/fonts "https://raw.githubusercontent.com/janbam/pi-runcat/main/runcat.ttf"
pi install npm:pi-runcat
fc-cache -f

# MacOS
curl -L -o ~/Library/Fonts/runcat.ttf "https://raw.githubusercontent.com/janbam/pi-runcat/main/runcat.ttf"
# Then restart the app that needs the font. 
# If it still does not appear, you can refresh macOS font caches with:
atsutil databases -removeUser

# Check the font in your terminal
printf '\U00100000 \U00100001 \U00100002 \U00100003 \U00100004\n'
```

## Manual Installation

Font installation

```bash
cp -r runcat.ttf ~/.local/share/fonts
fc-cache -f
```

##  uninstall 
```bash
pi remove npm:pi-runcat

rm -r ~/.local/share/fonts/runcat.ttf
fc-cache -f

# MacOS
rm ~/Library/Fonts/runcat.ttf
# Then restart the app that was using the font.
# If it still appears, refresh macOS font caches with:
atsutil databases -removeUser
```

## Ghostty
Add this line to your ghostty config to map RunCat codepoints to the icomoon font
```bash
font-codepoint-map = U+100000-U+100004=icomoon
```

## Kitty
Add this line to your `kitty.conf` to map RunCat codepoints to the icomoon font
```bash
symbol_map U+100000-U+100004 icomoon
```

Inspired by [runcat-text](https://github.com/bzglve/runcat-text)

Security:
[security check](https://www.virustotal.com/gui/file/3c5be14dc51cd0d21b34cbd40fe147ff61480ce03655eb43571008975b395d94/community)

## Troubleshooting: cat shows as Chinese symbols

The frames now use Plane 16 PUA codepoints U+100000–U+100004. Those codepoints
were selected because they are not claimed by the system fonts checked here,
avoiding the previous collision in which AR PL UMing HK and Gentium also
claimed U+E900–U+E904. No GNOME Terminal fontconfig workaround is needed for
the current frames.

Existing installations must update the extension and installed font together:
replace `~/.local/share/fonts/runcat.ttf` with the font from this version,
run `fc-cache -f`, then restart the terminal and Pi. An old font with the new
frames will show missing-glyph boxes.
