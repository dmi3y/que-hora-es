import { settingsStorage } from "settings";
import * as messaging from "messaging";

settingsStorage.onchange = function(evt) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    let data = JSON.parse(evt.newValue);
    switch (evt.key) {
      case "level":
        messaging.peerSocket.send({
          key: "level",
          value: data["values"][0].value
        });
      case "military":
        messaging.peerSocket.send({ key: "military", value: data });
    }
  }
};
