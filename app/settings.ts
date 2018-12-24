import { me } from "appbit";
import * as fs from "fs";
import * as messaging from "messaging";

const SETTINGS_TYPE = "cbor";
const SETTINGS_FILE = "settings.cbor";

export interface Usettings {
    military: boolean;
}

function loadSettings(): Usettings {
    try {
        return fs.readFileSync(SETTINGS_FILE, SETTINGS_TYPE);
    } catch (ex) {
        // Defaults when no settings found
        return {
            military: null
        };
    }
}

function saveSettings() {
    fs.writeFileSync(SETTINGS_FILE, settings, SETTINGS_TYPE);
}

me.onunload = saveSettings;

let settings = loadSettings();
let onsettingschange: Function

export default function init(callback: Function) {
    settings = loadSettings();
    onsettingschange = callback;
    onsettingschange(settings);
}

// Received message containing settings data
messaging.peerSocket.addEventListener("message", function(evt) {
    let key: (keyof Usettings) = evt.data.key
    settings[key] = evt.data.value;
    onsettingschange(settings);
});