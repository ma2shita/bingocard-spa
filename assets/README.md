Rename from distributed Iconset

```
IFS=$'\n' ; for icon in `ls *.png` ; do mv -v "$icon" $(echo $icon | cut -d "-" -f 1).png ; done
```
