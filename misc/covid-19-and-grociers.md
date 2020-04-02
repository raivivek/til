## COVID-19 and grociers

The entire world is on lockdown to _flatten the curve_ and minimize infections due to
COVID-19 worldwide. Given the "stay at home" orders, it has been a little challenging and
infact necessary to stay at home and come in physical contact with as few people as
possible.

One unfortunate side-effect of this is that getting groceries have been a little
difficult. While delivery services such as InstaCart have been god-send, find a delivery
slot due to immense slot has been incredibly tough.

I learned from reddit that the slots become available sparingly and most likely during
early morning or midnight. So I thought, wait, can we automate the process of checking for
time slots instead of maniacally refreshing webpage.

So Wednesday afternoon and I wrote a little script to send a Slack notification when it
finds a lot.

```
#! /usr/bin/env python3

import httpx
import asyncio

import slack


api = "https://www.instacart.com"

headers = {
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15",
}

# copied this from the web-browser instance
delivery_time_path = "/v3/retailers/12/delivery_options?source=web&cart_updated_at=1585759368.9886&address_id=XXXXXXXXX"


def message(msg, channel=None):
    slack_token = (
      "GET_YOUR_TOKEN"
    )
    sc = slack.WebClient(token=slack_token)
    sc.chat_postMessage(
        channel=channel, text=msg, username="insta-bot", icon_emoji=":robot_face:"
    )
    return


async def main():
    r = httpx.post(
        f"{api}/v3/dynamic_data/authenticate/login?source=web&cache_key=undefined",
        # copy this information from web-browser when logging in (use developer console)
        data={
            "authenticity_token": "TOKEN",
            "email": "EMAIL",
            "password": "PASSWORD",
            "grant_type": "password",
            "scope": "",
        },
        headers=headers,
    )

    if not r.status_code == httpx.codes.OK:
        print("here")
        message("Error making request -- please check", channel="#vivek-debug")
        await asyncio.sleep(60)

    delivery_times = httpx.get(
        f"{api}{delivery_time_path}", headers=headers, cookies=r.cookies
    )

    today = delivery_times.json()["service_options"]["days"][0]
    if not "No delivery times" in str(today):
        message("InstaCart delivery available! Hurry.", channel="#vivek-debug")
        message(f"Payload: {today}", channel="#vivek-debug")
    else:
        print("Still no delivery -- wait.")

    await asyncio.sleep(60)

loop = asyncio.new_event_loop()
asyncio.set_event_loop(loop)
task = loop.create_task(main())
loop.run_forever()
```

Happy hacking!
