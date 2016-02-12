# Choosing right Wifi channel

When connected to a Wifi network, using one channel over the other can provide
significant boost in network speed and overall connectivity quality.

A typical 802.11n router transmits at a channel frequency of around 2.4GHz. The
channel bandwidth of 100MHz allows for 14 transmission channels. However, for
minimum interference, usually channels 1, 6 and 11 are used. [Read more
here..](http://www.extremetech.com/computing/179344-how-to-boost-your-wifi-speed-by-choosing-the-right-channel)

Now, even if you are connected to a network say `WIFI-1`, these three channels
may have different signal quality and load.

On Linux, run `sudo iwlist wlan0 scan` to the list of all available SSIDs along
with channel and quality information.

Also, to see which channel is less congested, run:

```
sudo iwlist wlan0 scan | grep Frequency | sort | uniq -c | sort -n
```

Connect to that SSID/channel by using the `address` information in your
`Network` settings.[How?](http://askubuntu.com/questions/183525/how-to-set-wifi-driver-settings-to-prefer-5-ghz-channel-above-2-4-ghz)

Alternatively, use a GUI software like `wifi-radar`.
