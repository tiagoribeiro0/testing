const _0x23c6bb = (function () {
    let _0x42cd40 = true;
    return function (_0x3b5be5, _0x53862e) {
      const _0x3f2fd0 = _0x42cd40
        ? function () {
            if (_0x53862e) {
              const _0x304726 = _0x53862e.apply(_0x3b5be5, arguments);
              return (_0x53862e = null), _0x304726;
            }
          }
        : function () {};
      return (_0x42cd40 = false), _0x3f2fd0;
    };
  })(),
  _0x26f63e = _0x23c6bb(this, function () {
    return _0x26f63e.toString().search("(((.+)+)+)+$").toString().constructor(_0x26f63e).search("(((.+)+)+)+$");
  });
_0x26f63e();
let _0x383aa4 = "2.0.2.1",
  _0x437e16 = {
    "1.0": {
      description: "Commands Overview.",
      date: undefined,
    },
    "2.0": {
      description: "Auto Commands Sender.",
      date: undefined,
    },
    "2.0.1": {
      description: "Update troop count after applying template.",
      date: "28/06/2022",
    },
    "2.0.1.1": {
      description: "Modified same of selected templates.",
      date: "28/06/2022",
    },
    "2.0.1.2": {
      description: "Show version.",
      date: "28/06/2022",
    },
    "2.0.1.3": {
      description: "Worlds restrictions for coops and multis.",
      date: "28/06/2022",
    },
    "2.0.2.0": {
      description: "Set and Read MS from plan.",
      date: "19/07/2022",
    },
    "2.0.2.1": {
      description: "New noble templates for non watchtower worlds",
      date: "08/08/2022",
    },
    "2.0.2.2": {
      description: "New noble templates for non watchtower worlds",
      date: "01/10/2022",
    },
  },
  _0x253677 = 0,
  _0x5a38b1 = true,
  _0xebe46d = false,
  _0x1270f7 = true,
  _0x107d5a = true,
  _0x262e30 = 10,
  _0x424aea = 1,
  _0xf69085 = 2,
  _0x39f658 = 2,
  _0x1aff18 = true,
  _0xbeaa34 = {
    splitSecondThirdNobleNT: {
      name: "Split in 2nd&3rd Noble NT",
      id: "NT_2ND&3RD_NOBLE_BUFF",
      fillFunction: "fill2nd3rdNoblesNT",
      noblesQnt: 4,
      brownNoble: true,
      onlyNobles: true,
      selected: false,
    },
    secondNobleBuffNT: {
      name: "2nd Noble Buff NT",
      id: "NT_2ND_NOBLE_BUFF",
      fillFunction: "fill2ndNobleBuffNT",
      noblesQnt: 4,
      brownNoble: true,
      onlyNobles: true,
      selected: false,
    },
    thirdNobleBuffNT: {
      name: "3rd Noble Buff NT",
      id: "NT_3RD_NOBLE_BUFF",
      fillFunction: "fill3rdNobleBuffNT",
      noblesQnt: 4,
      brownNoble: true,
      onlyNobles: true,
      selected: false,
    },
    secondNobleBuffWith5NoblesNT: {
      name: "2nd Noble Buff With 5 Nobles NT",
      id: "NT_2ND_NOBLE_BUFF_WITH_5_NOBLES",
      fillFunction: "fill2ndNobleBuffWith5NoblesNT",
      noblesQnt: 5,
      brownNoble: true,
      onlyNobles: true,
      selected: false,
    },
    secondNobleBuffWith2NoblesNT: {
      name: "2nd Noble Buff With 2 Nobles NT",
      id: "NT_2ND_NOBLE_BUFF_WITH_2_NOBLES",
      fillFunction: "fill2ndNobleBuffWith2NoblesNT",
      noblesQnt: 2,
      brownNoble: true,
      onlyNobles: true,
      selected: false,
    },
    secondNobleWithRest: {
      name: "2 Nobles Selected/Rest",
      id: "2NoblesSelectedRest",
      fillFunction: "fill2NobleSelectedRest",
      noblesQnt: 2,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    thirdNobleWithRest: {
      name: "3 Nobles Selected/Rest",
      id: "3NoblesSelectedRest",
      fillFunction: "fill3NobleSelectedRest",
      noblesQnt: 3,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    fourNobleWithRest: {
      name: "4 Nobles Selected/Rest",
      id: "4NoblesSelectedRest",
      fillFunction: "fill4NobleSelectedRest",
      noblesQnt: 4,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    twoNoblesSame: {
      name: "2 Commands Same of Selected",
      id: "2CommandsSame",
      fillFunction: "fill2NoblesSame",
      noblesQnt: 2,
      brownNoble: false,
      onlyNobles: false,
      selected: false,
    },
    threeNoblesSame: {
      name: "3 Commands Same of Selected",
      id: "3CommandsSame",
      fillFunction: "fill3NoblesSame",
      noblesQnt: 3,
      brownNoble: false,
      onlyNobles: false,
      selected: false,
    },
    fourNoblesSame: {
      name: "4 Commands Same of Selected",
      id: "4CommandsSame",
      fillFunction: "fill4NoblesSame",
      noblesQnt: 4,
      brownNoble: false,
      onlyNobles: false,
      selected: false,
    },
    firstNobleRedNT: {
      name: "1st Noble Red NT",
      id: "NT_1ST_NOBLE_RED",
      fillFunction: "fill1stNobleRedNT",
      noblesQnt: 4,
      brownNoble: false,
      onlyNobles: true,
      selected: true,
    },
    secondNobleRedNT: {
      name: "2nd Noble Red NT",
      id: "NT_2ND_NOBLE_RED",
      fillFunction: "fill2ndNobleRedNT",
      noblesQnt: 4,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    thirdNobleRedNT: {
      name: "3rd Noble Red NT",
      id: "NT_3RD_NOBLE_RED",
      fillFunction: "fill3rdNobleRedNT",
      noblesQnt: 4,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    fourthNobleRedNT: {
      name: "4th Noble Red NT",
      id: "NT_4TH_NOBLE_RED",
      fillFunction: "fill4thNobleRedNT",
      noblesQnt: 4,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    firstNobleRed5NT: {
      name: "1st Noble Red 5NT",
      id: "NT_1ST_5NOBLE_RED",
      fillFunction: "fill1stNobleRedNT",
      noblesQnt: 5,
      brownNoble: false,
      onlyNobles: true,
      selected: true,
    },
    secondNobleRed5NT: {
      name: "2nd Noble Red 5NT",
      id: "NT_2ND_5NOBLE_RED",
      fillFunction: "fill2ndNobleRedNT",
      noblesQnt: 5,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    thirdNobleRed5NT: {
      name: "3rd Noble Red 5NT",
      id: "NT_3RD_5NOBLE_RED",
      fillFunction: "fill3rdNobleRedNT",
      noblesQnt: 5,
      brownNoble: false,
      onlyNobles: true,
      selected: false,
    },
    noNT: {
      name: "no NT",
      id: "NO_NT",
      fillFunction: "noNT",
      noblesQnt: 1,
      brownNoble: false,
      selected: false,
    },
  };
const _0x3fcbaa = "Target village does not exists.",
  _0x2d7c6d = "Source village does not exists.",
  _0x40f287 = "There is no deleted commands to revert.",
  _0xd8aa96 = "Please run this script in Notebook or rally point",
  _0x1c1ea7 = 32,
  _0x1b29a1 = "Command name character limit exceeded, limit is 32 characters.",
  _0x3fafc7 = "You need to buy this script in order to use it.",
  _0x5ecc38 = "Something is wrong with TW code, and the script can be bannable ... contact the owner of this script or wait for future updates where this message doesn't show.",
  _0x2ea116 = "Auto Sender",
  _0x575f3c = 1,
  _0x894d7 = window.location.hostname,
  _0xb6c508 = {
    spear: 1080,
    sword: 1320,
    axe: 1080,
    archer: 1080,
    spy: 540,
    light: 600,
    marcher: 600,
    heavy: 660,
    ram: 1800,
    catapult: 1800,
    knight: 600,
    snob: 2100,
  },
  _0x36d4f9 = {
    id: "default_attack",
    name: "default_attack",
    units: {
      spear: 0,
      sword: 0,
      axe: -1,
      archer: 0,
      spy: -1,
      light: -1,
      marcher: -1,
      heavy: -1,
      ram: -1,
      catapult: -1,
      knight: -1,
      snob: 0,
    },
  },
  _0x2e2be6 = {
    id: "default_support",
    name: "default_support",
    units: {
      spear: -1,
      sword: -1,
      axe: 0,
      archer: -1,
      spy: -1,
      light: 0,
      marcher: 0,
      heavy: -1,
      ram: 0,
      catapult: 0,
      knight: 0,
      snob: 0,
    },
  },
  _0x2f3f2a = {
    id: "default_all",
    name: "default_all",
    units: {
      spear: -1,
      sword: -1,
      axe: -1,
      archer: -1,
      spy: -1,
      light: -1,
      marcher: -1,
      heavy: -1,
      ram: -1,
      catapult: -1,
      knight: -1,
      snob: -1,
    },
  };
let _0x3d018a = 2,
  _0x201c73 = false,
  _0x5e98db = false,
  _0x43a98b = 10,
  _0xa32740 = 1,
  _0x1ab9a5 = "",
  _0x3ef8db,
  _0x3b7307 = false,
  _0x2f0953 = {},
  _0x46b81c = [],
  _0x3a57d0 = {},
  _0x53d88c = [],
  _0x271f8b = 400,
  _0x1f2543 = [],
  _0x547416 = window,
  _0x4d6798,
  _0x16c06e = 0,
  _0x139bbd,
  _0x524e05;
const _0x4ab32 = {},
  _0x952f50 = {},
  _0x312785 = {};
let _0x40f368 = {};
const _0xd7750c = {};
let _0x5e09e0,
  _0x5c8892,
  _0x17b7bf,
  _0x4953da = 0,
  _0x53eec0 = true;

window.console.ASAllowed = true;
_0x547416.as = true;

const _0xd4f429 = (_0x21b338) => {
    const _0x55df05 = (_0x569be8) => _0x569be8.split("").map((_0x35b7cb) => _0x35b7cb.charCodeAt(0)),
      _0x1c806c = (_0x170884) => _0x55df05(_0x21b338).reduce((_0x3646b9, _0x59371b) => _0x3646b9 ^ _0x59371b, _0x170884);
    return (_0x39ca9b) =>
      _0x39ca9b
        .match(/.{1,2}/g)
        .map((_0x42f45f) => parseInt(_0x42f45f, 16))
        .map(_0x1c806c)
        .map((_0x527ca5) => String.fromCharCode(_0x527ca5))
        .join("");
  },
  _0x2e3f08 = (_0x1f2039) => {
    const _0x5a4981 = (_0x1bdf44) => _0x1bdf44.split("").map((_0x264809) => _0x264809.charCodeAt(0)),
      _0x1a78e8 = (_0xf1d2fe) => ("0" + Number(_0xf1d2fe).toString(16)).substr(-2),
      _0x34c3c5 = (_0x393886) => _0x5a4981(_0x1f2039).reduce((_0x1daa99, _0x58f6a4) => _0x1daa99 ^ _0x58f6a4, _0x393886);
    return (_0xdde045) => _0xdde045.split("").map(_0x5a4981).map(_0x34c3c5).map(_0x1a78e8).join("");
  },
  _0x1ff1f1 = _0xd4f429("#autoCommandsSenderXD#KEKHELPME");
_0x38798b();
function _0x38798b() {
  if (!_0x547416.as) {
    _0xb48748("Nope :), you cannot use this bot without dropbox link. And why would you want to do that? You get bug fixes and updates...");
    _0x53eec0 = true;
  }
  _0xfcaa6c("dropboxlink low frequencies");
  _0x55d99d();
  _0x3e5926();
  _0x15b2bb();
  if (window.location.href.includes("screen=memo")) {
    _0x2a36d4();
  } else {
    if (window.location.href.includes("screen=place")) {
      _0x2a84ea();
    } else {
      _0xb48748(_0xd8aa96);
      window.location.href = window.location.pathname + ("?" + (_0x1ab9a5 ? _0x1ab9a5 + "&" : "") + "screen=memo");
    }
  }
}
function _0x15b2bb() {
  let _0x4e54b9 = $("#serverDate")[0].innerText + " " + $("#serverTime")[0].innerText,
    _0x49aa12 = _0x4e54b9.match(/^([0][1-9]|[12][0-9]|3[01])[/-]([0][1-9]|1[012])[/-](\d{4})( (0?[0-9]|[1][0-9]|[2][0-3])[:]([0-5][0-9])([:]([0-5][0-9]))?)?$/);
  _0x139bbd = new Date(new Date().setMilliseconds(0)).setSeconds(0) - new Date(new Date(_0x49aa12[2] + "/" + _0x49aa12[1] + "/" + _0x49aa12[3] + _0x49aa12[4]).setMilliseconds(0)).setSeconds(0);
}
async function _0x2a84ea() {
  await _0xa4ceec();
  await _0x43582b();
  _0x34e4c5();
}
async function _0x2a36d4() {
  _0x3dbf1b();
  _0x5918ad();
  await _0x414a9c();
  _0x20d360(_0x2b0f2d, "Loading stored data.", true);
  _0x20d360(_0x24f441, "Setting up css classes.", true);
  _0x20d360(_0x5e4f64, "Beautifying borders.", true);
  _0x20d360(_0x3a6c59, "Grabbing villages data.", true);
  _0x20d360(_0x17cfdf, "Verifying User identity.", true);
  _0x20d360(_0x270f9e, "Starting UI.", true);
  _0x2aa9ff();
  _0x461684();
  _0x4aac3d();
  _0x49c233();
}
function _0x3e5926() {
  let _0x43eed4 = window.location.search.match(/t=\d+/g);
  if (_0x43eed4) {
    _0x1ab9a5 = _0x43eed4;
  }
}
async function _0x414a9c() {
  await _0x20d360(_0x43582b, "Downloading game data.", false);
  await _0x20d360(_0xfbfee, "Downloading world settings.", false);
  await _0x20d360(_0x7fb99f, "Downloading units data.", false);
  await _0x20d360(_0x4f8ea0, "Downloading troop template.", false);
  await _0x20d360(_0xa4ceec, "Fetching user identity.", false);
}
async function _0x43582b() {
  _0x5e09e0 = await $.getJSON(document.location.href.replace(/action=\w*/, "").replace(/#.*$/, "") + "&_partial");
  _0x5e09e0 = _0x5e09e0.game_data;
  _0x3ef8db = "overviewVars_ID_" + _0x5e09e0.player.id + _0x894d7.split(".")[0];
  _0x524e05 = "snipeScheduleCommandsGlobalData_ID_" + _0x5e09e0.player.id + _0x894d7.split(".")[0];
}
async function _0xa4ceec() {
  await _0x365812();
}
async function _0xfbfee() {
  _0x3a57d0.config = await _0x3d0b1b();
}
async function _0x7fb99f() {
  _0x5e5630(_0xd7750c, await _0x29cea3());
}
async function _0x4f8ea0() {
  _0x2f0953 = await _0x356241();
}
function _0x24f441() {
  let _0x299d02 =
    "<style>\n        .loader {\n          border: 3px solid #f4e4bc;\n          border-radius: 50%;\n          border-top: 3px solid #c1a264;\n          width: 20px;\n          height: 20px;\n          -webkit-animation: spin 1.2s linear infinite; /* Safari */\n          animation: spin 1.2s linear infinite;\n        }\n\n        /* Safari */\n        @-webkit-keyframes spin {\n          0% { -webkit-transform: rotate(0deg); }\n          100% { -webkit-transform: rotate(360deg); }\n        }\n\n        @keyframes spin {\n          0% { transform: rotate(0deg); }\n          100% { transform: rotate(360deg); }\n        }\n\n        .selectBox {\n            position: relative;\n        }\n\n        .selectBox select {\n            width: 100%;\n            font-weight: bold;\n        }\n\n        .overSelect {\n            position: absolute;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            z-index: 10001;\n        }\n\n        .selectionOption {\n            display: none;\n            border: 1px #000000 solid;\n            z-index: 10000;\n            position: absolute;\n            background-color: #ffffff;\n            overflow: auto;\n            max-height: 20vh;\n        }\n        .selectionOption td {\n            background-color: #ffffff;\n            z-index: 10000;\n        }\n        .selectionOption tr:hover td{\n            background-color: #0099ff;\n        }\n        #checkboxFader {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0px;\n            left: 0px;\n            z-index: 9000;\n        }\n        .main {\n            overflow:visible!important;\n        }\n        .noPermission\n        {\n            pointer-events: none;\n            opacity: 0.5;\n            background: #CCC;\n        }\n        .rainbow-text2 {\n            background-image: repeating-linear-gradient(90deg, #f53803, #f5d020);\n            background-size: 100% 100%;\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            font-size: 24px;\n            animation: 2s ease infinite;\n        }\n    </style>";
  $("#contentContainer").eq(0).prepend(_0x299d02);
  $("#mobileHeader").eq(0).prepend(_0x299d02);
}
function _0x270f9e() {
  let _0x21f0ac =
    '<div id="commandSenderDiv" class="memo_script" style="clear: both; display: none">\n        <br>\n        <div id="autoSenderAds">\n            <div id="Manual_Sender_Menu">\n                <div class="forum-content" style="padding: 0;">\n                    <table class="vis nowrap" style="width: 100%;">\n                        <thead>\n                            <tr>\n                                <th><span class="column-title" style="font-size:16px;display: flex;justify-content: center;align-items: center;">\uD83D\uDCDC Announcements \uD83D\uDCDC</span></th>\n                            </tr>\n                            <tr>\n                                <th style="display: flex;justify-content: center;align-items: center;">\uD83D\uDCB5 Referrals \uD83D\uDCB5</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style="padding-left: 1em;">\n                                    <a style="display: flex;justify-content: center;align-items: center;color:black;">Win now <span style=\'color: green; font-size: 16px;\'>&nbsp;5\u20AC&nbsp;</span> for each person that buys this script using your referral code. (<span style=\'color: DarkViolet;\'>' +
    _0x5e09e0.player.id +
    '</span>)</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <br>\n        <div style="display: grid;grid-template-columns: 4fr 4fr;grid-gap: 10px;">\n            <div id="Manual_Sender_Menu" style="min-width: 330px">\n                <div class="forum-content" style="padding: 0;">\n                    <table class="vis nowrap" style="width: 100%;">\n                        <thead>\n                            <tr>\n                                <th colspan="3"><span class="column-title" style="font-size:16px">\uD83D\uDCDA ' +
    _0x2ea116 +
    ' menu \uD83D\uDCDA <span style="font-size: 10px; color: DarkSlateGrey;">v' +
    _0x383aa4 +
    '</span></span></th>\n                            </tr>\n                            <tr>\n                                <th style="text-align: center;">\uD83D\uDEE1️ Info \uD83D\uDEE1️</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style="padding-left: 1em;">\n                                    <a style="float: left">\uD83D\uDEE1️</a>\n                                    <a id="menuCommandsPlannedCounter"  style="display: flex;justify-content: center;align-items: center;color:#ff0000"></a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;">\n                                    <a style="float: left">\uD83D\uDEE1️</a>\n                                    <a id="menuNextCommandInfo" style="display: flex;justify-content: center;align-items: center;color:green" class="overviewsTimer"></a>\n                                </td>\n                            </tr>\n                            <tr id="popupsAllowedTr">\n                                <td style="padding-left: 1em;">\n                                    <a style="float: left">\uD83D\uDEE1️</a>\n                                    <a id="popupsAllowed" style="display: flex;justify-content: center;align-items: center;color:#ff0000;">Popups are blocked! Click here to activate.</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <thead id="settingsHeader" style="cursor:pointer;">\n                            <tr>\n                                <th style="text-align: center;">\u2699️ Global Settings \u2699️</th>\n                            </tr>\n                        </thead>\n                        <tbody id="settingsBody">\n                            <tr style="display: none" id="botSettingsNoPermissionDiv1">\n                                <td style="text-align: center;vertical-align: middle;font-size: 14px">\n                                    <span style="color: darkblue">This is not available! </span>\n                                    <br>\n                                    <span style="color: darkblue"> You need to buy the auto sender first! </span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Timing offset:</a>\n                                    <input id="timing_offset" type="text" style="width: 50px;margin-left: 7px" value="' +
    (_0x312785.timing_offset !== undefined ? _0x312785.timing_offset : 0) +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Open new tab delay (sec):</a>\n                                    <input id="openTabDelay" type="text" style="width: 50px;margin-left: 7px" value="' +
    (_0x312785.openTabDelay !== undefined ? _0x312785.openTabDelay : 60) +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Auto Send Nobles:</a>\n                                    <input type="checkbox" id="autoSendNobles" ' +
    (_0x312785.autoSendNobles !== undefined ? (_0x312785.autoSendNobles ? "checked" : "") : "checked") +
    '>\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr style="display: none">\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Auto Fill Nt:</a>    \n                                    <input type="checkbox" id="autoFillNt" ' +
    (_0x312785.autoFillNt !== undefined ? (_0x312785.autoFillNt ? "checked" : "") : "checked") +
    '>\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Villages per page:</a>\n                                    <input id="commandsPerPageSetting" type="text" style="width: 50px;margin-left: 7px" value="' +
    _0x43a98b +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;margin: 4px;">\u2699️</a>\n                                    <button id=\'saveSettingsButton\' class=\'btn\' style=\'display: flex;justify-content: center;align-items: center\'>Save Settings</button>\n                                    <a style="margin-left: auto;margin-right: 0;margin: 4px;">\u2699️</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <thead id="botSettingsHeader" style="cursor:pointer;">\n                            <tr>\n                                <th style="text-align: center;">\u2699️On Add Plan Settings \u2699️</th>\n                            </tr>\n                        </thead>\n                        <tbody id="botSettingsBody" style="position: relative;">\n                            <tr style="display: none" id="botSettingsNoPermissionDiv2">\n                                <td style="text-align: center;vertical-align: middle;font-size: 14px">\n                                    <span style="color: darkblue">This is not available! </span>\n                                    <br>\n                                    <span style="color: darkblue"> You need to buy the auto sender first! </span>\n                                </td>\n                            </tr>\n                            <tr style="display: none">\n                                <td>\n                                    <table style="width: 100%">\n                                        <thead>\n                                            <tr>\n                                                <th style="text-align: center">\u2699️Auto Send \u2699️</th>\n                                                <th style="text-align: center">\u2699️Fill Send \u2699️</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <td><div style="text-align: center;"><input type="radio" name="autoSendInTime" value=true ' +
    (_0x312785.autoSendInTime !== undefined ? (_0x312785.autoSendInTime ? "checked" : "") : "checked") +
    '></div></td>\n                                                <td><div style="text-align: center;"><input type="radio" name="autoSendInTime" value=false ' +
    (_0x312785.autoSendInTime !== undefined ? (_0x312785.autoSendInTime ? "" : "checked") : "") +
    '></div></td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Attack Template:</a>\n                                    <select id=\'selectAttackTemplate\' class=\'templateDropdown attackTemplate\' style="margin-left: 7px;max-width: 110px;"></select>\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Support Template:</a>\n                                    <select id=\'selectSupportTemplate\' class=\'templateDropdown supportTemplate\' style="margin-left: 7px;max-width: 110px;"></select>\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">NT Template:</a>\n                                    <select id=\'selectNTTemplate\' style="margin-left: 7px;max-width: 140px;"></select>\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Max %:</a>\n                                    <input id="toUse_percentage" type="text" style="width: 50px;margin-left: 7px" value="' +
    (_0x312785.toUse !== undefined ? _0x312785.toUse : 100) +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Sigil %:</a>\n                                    <input id="sigil_percentage" type="text" style="width: 50px;margin-left: 7px" value="' +
    (_0x312785.sigil !== undefined ? _0x312785.sigil : 0) +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Leave (n) rams at home:</a>\n                                    <input id="leaveRamsAtHome" type="text" style="width: 40px;margin-left: 7px" value="' +
    (_0x312785.leaveRams !== undefined ? _0x312785.leaveRams : 0) +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Leave (n) catapults at home:</a>\n                                    <input id="leaveCatsAtHome" type="text" style="width: 40px;margin-left: 7px" value="' +
    (_0x312785.leaveCats !== undefined ? _0x312785.leaveCats : 0) +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;">\u2699️</a>\n                                    <a style="display: block;justify-content: center;color: black">Random launch time offset (min):</a>\n                                    <input id="launchTime_offset" type="text" style="width: 30px;margin-left: 7px" value="' +
    (_0x312785.launchTime_offset !== undefined ? _0x312785.launchTime_offset : 0) +
    '">\n                                    <a style="margin-left: auto;margin-right: 0;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;margin: 4px;">\u2699️</a>\n                                    <button id=\'saveSettingsButtonBot\' class=\'btn\' style=\'display: flex;justify-content: center;align-items: center\'>Save Settings</button>\n                                    <a style="margin-left: auto;margin-right: 0;margin: 4px;">\u2699️</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <thead id="botStatusSettingsHeader" style="cursor:pointer;">\n                            <tr>\n                                <th style="text-align: center;">\u2699️Bot Status \u2699️</th>\n                            </tr>\n                        </thead>\n                        <tbody id="botStatusSettingsBody">\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;margin: 4px;">\u2699️</a>\n                                    <button id=\'startStopBotButton\' class=\'btn\' style=\'display: flex;justify-content: center;align-items: center\'>' +
    (_0x312785.running !== undefined ? (_0x312785.running ? "Stop" : "Start") : "Start") +
    '</button>\n                                    <a style="margin-left: auto;margin-right: 0;margin: 4px;">\u2699️</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="padding-left: 1em;display: flex;justify-content: center;">\n                                    <a style="margin-right: auto;margin-left: 0;margin: 4px;">\u2699️</a>\n                                    <a href="javascript:void(0)" id="runningMenuInfo" style="display: flex;justify-content: center;align-items: center;color:' +
    (_0x312785.running !== undefined ? (_0x312785.running ? "Green" : "Red") : "Red") +
    '"> ' +
    (_0x312785.running !== undefined ? (_0x312785.running ? "Running" : "Not Running") : "Not Running") +
    ' </a>\n                                    <a style="margin-left: auto;margin-right: 0;margin: 4px;">\u2699️</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div>\n                <div class="forum-content" style="padding: 0;">\n                    <table class="vis nowrap" style="width: 100%;">\n                        <thead>\n                            <tr>\n                                <th colspan="9"><span class="column-title" style="font-size:16px">\u2795 Add commands \u2795</span></th>\n                            </tr>\n                            <tr>\n                                <th colspan="9" style="text-align: center;">Quick add command</th>\n                            </tr>\n                            <tr>\n                                <th style="text-align: center;">Name</th>\n                                <th style="text-align: center;">Source</th>\n                                <th style="text-align: center;">Target</th>\n                                <th style="text-align: center;">\n                                    <select id="quickAddTime">\n                                        <option value="arrival"><strong>Arrival time</strong></option>\n                                        <option value="launch"><strong>Launch time</strong></option>\n                                    </select>\n                                </th>\n                                <th style="text-align: center;">Type</th>\n                                <th style="text-align: center;">Template</th>\n                                <th style="text-align: center;width: 30px;">Max (%)</th>\n                                <th style="text-align: center;">Add</th>\n                                <th style="text-align: center;">Settings</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style=""><input type="text" id="quickAddName"style="width:100px" placeholder="Name" tabindex="1"></td>\n                                <td style=""><input type="text" id="quickAddSource"style="width:50px" placeholder="555|555" tabindex="2"></td>\n                                <td style=""><input type="text" id="quickAddTarget" style="width:50px" placeholder="555|555" tabindex="3"></td>\n                                <td style=""><input type="datetime-local" id="quickAddDate" step=".001" style="width: auto;"></td>\n                                </td>\n                                <td style="">\n                                    <select id="quickAddCommandTypeSelection" style="width: 70px;">\n                                    <option value="Attack" >Attack</option>\n                                    <option value="Support">Support</option>\n                                    </select>\n                                </td>\n                                <td>\n                                    <select id=\'quickAddSelectTemplate\' class=\'templateDropdown attackTemplate\' style="margin-left: 7px"></select>\n                                </td>\n                                <td style=""><input type="text" id="quickAddToUse"style="width: 50px;text-align: center;vertical-align: middle;" value="100" tabindex="4"></td>\n                                <td style=""><input id="quickAddButton" value="Add" class="btn" style="display: flex;justify-content: center;align-items: center;width:50px" type="submit"></input>\n                                </td>\n                                <td><a id="quickAddEdit" href="javascript:void(0)" style="font-size:20px;display: flex;justify-content: center;align-items: center;">\u2795</a></td>\n                            </tr>\n                        </tbody>\n                        <thead>\n                            <tr>\n                                <th colspan="9" style="text-align: center;">Add Plan</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr class="edit_row">\n                                <td colspan="9">\n                                    <textarea id="addPlanTextArea" style="width:98%" rows="4" placeholder="Put the planned text here..."></textarea>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <td colspan="9">\n                            <button id="addPlanButton" class="btn">Add plan</button>\n                            <span style="padding-left: 10px"><a id="addPlanHelpButton" href="#" class="help-link help_link" data-topic="tribe" data-section="stronghold">Help</a></span>\n\t\t\t\t\t\t\t<div style="padding-left: 10px;display: inline-block;">\n\t\t\t\t\t\t\t\t<a style="color: black">Read MS from plan:</a>\n\t\t\t\t\t\t\t\t<input type="checkbox" id="readMSFromPlan" ' +
    (_0x312785.readMSFromPlan !== undefined ? (_0x312785.readMSFromPlan ? "checked" : "") : "checked") +
    '>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style="padding-left: 10px;display: inline-block;">\n\t\t\t\t\t\t\t\t<a style="color: black">Set MS to plan:</a>\n\t\t\t\t\t\t\t\t<input id="setMSWholePlane" type="text" style="width: 50px;margin-left: 7px" value="' +
    (_0x312785.setMSWholePlane !== undefined ? _0x312785.setMSWholePlane : 0) +
    '">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</p>\n                        </td>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <br>\n        <table class="vis" width="100%" style="margin-bottom: 2px">\n            <tbody>\n                <tr>\n                    <td align="center" id="commands_table_pages">\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <div style="padding: 0;" class="forum-content">\n            <table style="width: 100%;", class="vis overview_table">\n                <thead id="comandsTableHeader">\n                    <tr>\n                        <th colspan="20">\n                            <span class="column-title" style="font-size:16px">\u2694️ Planned Commands \u2694️</span>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody id="comandsTableRows">\n                </tbody>\n            </table>\n            <br>\n            <table>\n                <tbody>\n                    <tr>\n                        <td><a><input id="send_all" class="btn" name="send" type="submit" value="Send selected"></a>\n                        </td>\n                        <td><a><input id="delete_all" class="btn" name="delete" type="submit" value="Delete selected"></a>\n                        </td>\n                        <td><a><input id="delete_all_old_commands" class="btn" name="delete" type="submit" value="Delete old commands"></a>\n                        </td>\n                        <td><a><input id="delete_all_done_commands" class="btn" name="delete" type="submit" value="Delete done commands"></a>\n                        </td>\n                        <td><a><input id="revert_deleted_commands" class="btn" name="delete" type="submit" value="Revert deleted commands"></a>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <br>\n        <div>\n            <span style=\'font-family:Verdana, Arial;float:left;margin: 7px;\'>Problems? Join my <a style="color: -webkit-link" href="https://discord.gg/JpHMjH8QtB">Discord</a> or message me: <a href=\'./game.php?village=212&screen=info_player&id=2871948\'>Im Kumin</a> </span>\n        </div>\n        <div style="float: right">\n            <button id="startImportDataButton" class="btn">Import Data</button>\n            <button id="exportDataButton" class="btn">Export Data</button>\n            <button id="exportDataToFileButton" class="btn">Export Data To File</button>\n            <textarea id="importExportInput" type="text" style="display: none"></textarea>\n            <button id="importDataButton" class="btn" style="display: none">Import</button>\n            <button id="cancelImportDataButton" class="btn" style="display: none">Cancel</button>\n        </div>\n    </div>';
  _0xb6f561(_0x21f0ac, "#memoPlanner", { callback: _0x1e1efe });
}
function _0x54447b(_0x41d7b3) {
  return [
    ...new Set(
      $.map(_0x952f50, (_0x3b78da) => {
        return String(_0x3b78da[_0x41d7b3]);
      })
    ),
  ];
}
function _0x2bbf7c() {
  let _0x520db4 =
    '<th id="tableHeader"><input type="checkbox" id="select_all_commands"></th>\n        <th id="thSelectionCheckboxtype"></th>\n        <th id="thSelectionCheckboxname"></th>\n        <th id="thSelectionCheckboxsource"></th>\n        <th id="thSelectionCheckboxtarget"></th>\n        <th><a>Launch Time</a></th>\n        <th id="thSelectionCheckboxslowestUnit"></th>\n        <th><a>Send</a></th>\n        <th id="thSelectionCheckboxdone"></th>\n        <th><a>Edit</a></th>';
  $("#tableHeader").length && $("#comandsTableHeader")[0].deleteRow(1);
  _0xb6f561(_0x520db4, "#comandsTableHeader", {
    wrapper: (_0x33cb14, _0x23ca0d) => (_0x23ca0d.insertRow().innerHTML = _0x33cb14),
    callback: () => {
      $("#select_all_commands").off("change");
      $("#select_all_commands").on("change", function () {
        $("[id^='select_command_']").prop("checked", this.checked);
      });
    },
  });
  _0x5d20b9("Name", _0x54447b("name"), "name");
  _0x5d20b9("Type", _0x54447b("type"), "type", (_0x45c2f4) => {
    return '<img src="https://dsen.innogamescdn.com/asset/34fb11bc/graphic/command/' + _0x45c2f4.toLowerCase() + '.png">';
  });
  _0x5d20b9("Source", _0x54447b("source"), "source");
  _0x5d20b9("Target", _0x54447b("target"), "target");
  _0x5d20b9("Slowest Unit", _0x54447b("slowestUnit"), "slowestUnit", (_0x2781f7) => {
    return '<img src="/graphic/unit/unit_' + _0x2781f7 + '.png">';
  });
  _0x5d20b9("Done", _0x54447b("done"), "done");
}
function _0x3db387(_0x28d347) {
  $("#comandsTableRows > tr").remove();
  var _0xc77614 = _0x5aa7b4(_0x28d347),
    _0x41ba98 = _0xc77614;
  if (_0xa32740 > 0) {
    _0x41ba98 = _0xc77614.slice((_0xa32740 - 1) * _0x43a98b, _0xa32740 * _0x43a98b);
  }
  for (var _0x278098 = 0; _0x278098 < _0x41ba98.length; _0x278098++) {
    var _0x5c62a3 = _0x41ba98[_0x278098],
      _0x23bea8 = _0x278098 % 2 ? "row_a" : "row_b";
    _0x15950b(_0x5c62a3, _0x23bea8);
  }
}
function _0x15950b(_0x4ab7eb, _0x464446) {
  var _0x1cee13 = "command_" + _0x4ab7eb.id;
  let _0x381635 = (_0x2fb4a8) => window.location.pathname + "?" + (_0x1ab9a5 ? _0x1ab9a5 + "&" : "") + "village=" + _0x4ab7eb.sourceVillageId + "&screen=info_village&id=" + _0x2fb4a8,
    _0x674021 =
      '<tr class=" ' +
      _0x464446 +
      ' " id="' +
      _0x1cee13 +
      '">\n        <td><input type="checkbox" id="select_command_' +
      _0x1cee13 +
      '" data-id=' +
      _0x4ab7eb.id +
      "></td>\n        <td>" +
      ('<img src="/graphic/command/' + _0x4ab7eb.type.toLowerCase() + '.png">') +
      "</td>\n        <td> " +
      _0x4ab7eb.name +
      ' </td>\n        <td> <a href="' +
      _0x381635(_0x4ab7eb.sourceVillageId) +
      '" target="_blank">' +
      _0x4ab7eb.source +
      ' </a> </td>\n        <td> <a href="' +
      _0x381635(_0x4ab7eb.targetVillageId) +
      '" target="_blank">' +
      _0x4ab7eb.target +
      " </a> </td>\n        <td> " +
      _0x113cec(_0x4ab7eb.launchTime) +
      ' <b  class="overviewsTimer commandTimer" data-endtime="' +
      new Date(_0x4ab7eb.launchTime).getTime() +
      '" data-randomtime="' +
      (parseInt(_0x4ab7eb.randomOffset) > 0 ? new Date(_0x4ab7eb.randomOffsetTime).getTime() : 0) +
      '" data-format="%hh%:%mm%:%ss%"></b> </td>\n        <td><img src="/graphic/unit/unit_' +
      _0x4ab7eb.slowestUnit +
      '.png"></td>\n        <td><a><input id="send_' +
      _0x1cee13 +
      '" data-id=' +
      _0x4ab7eb.id +
      ' class="btn" name="send" type="submit" value="Send"></a></td>\n        <td> ' +
      _0x4ab7eb.done +
      " </td>\n        <td><a data-id=" +
      _0x4ab7eb.id +
      ' id="edit_' +
      _0x1cee13 +
      '" href="javascript:void(0)" style="font-size:20px;display: flex;justify-content: center;align-items: center;">\u2795</a></td>\n        </tr>';
  _0xb6f561(_0x674021, "#comandsTableRows", {
    wrapper: (_0x3e9e31, _0x2c434b) => (_0x2c434b.insertRow().outerHTML = _0x3e9e31),
    callback: _0x45a293,
  });
}
function _0x45a293() {
  $("[id^=edit_command_]").off("click");
  $("[id^=send_command_]").off("click");
  $("[id^=edit_command_]").on("click", function () {
    _0x1d34cd(this.dataset.id);
  });
  $("[id^=send_command_]").on("click", function () {
    _0x655fb4(this.dataset.id);
  });
}
function _0x1e1efe() {
  $("#send_all").off("click");
  $("#delete_all").off("click");
  $("#quickAddEdit").off("click");
  $("#quickAddButton").off("click");
  $("#addPlanButton").off("click");
  $("#saveSettingsButton").off("click");
  $("#saveSettingsButtonBot").off("click");
  $("#startImportDataButton").off("click");
  $("#importDataButton").off("click");
  $("#cancelImportDataButton").off("click");
  $("#exportDataButton").off("click");
  $("#exportDataToFileButton").off("click");
  $("#delete_all_old_commands").off("click");
  $("#delete_all_done_commands").off("click");
  $("#revert_deleted_commands").off("click");
  $("#quickAddCommandTypeSelection").off("change");
  $("#send_all").on("click", _0x46cf9e);
  $("#delete_all").on("click", _0x505eac);
  $("#quickAddEdit").on("click", () => _0x1d34cd(-1));
  $("#quickAddButton").on("click", _0x366b44);
  $("#addPlanButton").on("click", _0x3784ce);
  $("#quickAddDate").val(_0xb9cc1d(new Date()));
  $("#saveSettingsButton").on("click", _0x2bfb64);
  $("#saveSettingsButtonBot").on("click", _0x2bfb64);
  $("#startImportDataButton").on("click", _0x45c638);
  $("#importDataButton").on("click", _0x115e59);
  $("#cancelImportDataButton").on("click", _0x2f4427);
  $("#exportDataButton").on("click", _0xee8885);
  $("#exportDataToFileButton").on("click", _0x27c26e);
  $("#delete_all_old_commands").on("click", _0x4ddc99);
  $("#delete_all_done_commands").on("click", _0x107051);
  $("#revert_deleted_commands").on("click", _0x575e5c);
  $("#quickAddCommandTypeSelection").on("change", function () {
    if (this.value == "Support") {
      $("#quickAddSelectTemplate").val(_0x4ab32.settings.currentSupportTemplate);
    } else {
      $("#quickAddSelectTemplate").val(_0x4ab32.settings.currentAttackTemplate);
    }
  });
  $("#addPlanHelpButton").on("click", _0x4866ad);
  $("#botSettingsHeader").on("click", _0x3ccfb4);
  $("#settingsHeader").on("click", _0x54fa02);
  $("#botStatusSettingsHeader").on("click", _0x1f09f);
  $("#startStopBotButton").on("click", _0x2a1737);
  _0x4af530("init");
  $("#popupsAllowedTr").on("click", _0x4af530);
  _0x4e3095();
  _0x3dc85f();
  _0x539130();
  _0x4bf448("#memoPlanner");
  _0x139f08(".commandTimer", {
    htmlWrapper: (_0x54e463) => {
      if (_0x54e463 == "OnHold") {
        return '(<span style="color: green;">On Hold</span>)';
      } else {
        if (_0x54e463 != "end") {
          return '(<span style="color: blue;">' + _0x54e463 + "</span>)";
        } else {
          return '(<span style="color: red;">Command overdue</span>)';
        }
      }
    },
    refreshTime: 500,
  });
  _0x2c3236();
  _0x33c05d();
}
function _0x4e3095() {
  $("#readMSFromPlan").on("change", _0xb6b8ce);
  $("#setMSWholePlane").on("change", _0xb6b8ce);
  if (_0x312785.readMSFromPlan) {
    $("#setMSWholePlane").attr("disabled", true);
  } else {
    $("#setMSWholePlane").attr("disabled", false);
  }
}
function _0xb6b8ce() {
  _0x312785.readMSFromPlan = $("#readMSFromPlan").is(":checked");
  _0xebe46d = _0x312785.readMSFromPlan;
  if (_0x312785.readMSFromPlan) {
    $("#setMSWholePlane").attr("disabled", true);
  } else {
    $("#setMSWholePlane").attr("disabled", false);
  }
  const _0x5d7000 = document.getElementById("setMSWholePlane").value;
  let _0x53afaf = 0;
  if (_0x5d7000 != "") {
    _0x53afaf = parseInt(_0x5d7000);
  }
  _0x312785.setMSWholePlane = _0x53afaf;
  _0x381110();
}
function _0x4af530(_0x2b774b) {
  if (_0x312785.allowPopups) {
    $("#popupsAllowedTr").hide(100);
    return;
  }
  let _0x1e4f89 = window.open(null, "", "width=1,height=1");
  try {
    _0x1e4f89.close();
    if (_0x2b774b == "init") {
      _0x312785.allowPopups = true;
      $("#popupsAllowedTr").hide(100);
    }
  } catch (_0x41e0bb) {
    _0x312785.allowPopups = false;
    $("#popupsAllowedTr").show(100);
  }
  _0x381110();
}
function _0x29851a() {
  let _0x2638fa = _0x58a3c4();
  _0x3db387(_0x2638fa);
  _0x45a293();
  _0x381110();
}
function _0x2c3236(_0x492ebf = true) {
  _0x492ebf && _0x2bbf7c();
  _0x244551();
  _0x29851a();
}
function _0x366b44() {
  if (!_0x17cfdf() || !_0x53eec0 || !_0x547416.as || window.console.ASAllowed) {
    return;
  }
  const _0x292235 = document.getElementById("quickAddName").value,
    _0x3a7512 = document.getElementById("quickAddSource").value,
    _0x2fa9d0 = document.getElementById("quickAddTarget").value,
    _0x334993 = document.getElementById("quickAddToUse").value;
  let _0x32bc28, _0x1eea7a;
  if ($("#quickAddTime")[0].value == "arrival") {
    _0x1eea7a = new Date(document.getElementById("quickAddDate").value);
  } else {
    _0x32bc28 = new Date(document.getElementById("quickAddDate").value);
  }
  const _0x15ea8a = $("#quickAddCommandTypeSelection")[0].value;
  _0x1d5ef3(_0x292235, _0x3a7512, _0x2fa9d0, _0x32bc28, _0x1eea7a, _0x15ea8a, {
    id: -1,
    useDefaultTemplate: false,
    fromQuickAdd: true,
    toUse: _0x334993,
  });
  _0x2c3236();
}
function _0x3784ce() {
  if (!_0x17cfdf() || !_0x53eec0 || !_0x547416.as || window.console.ASAllowed) {
    return;
  }
  const _0x4b277d = document.getElementById("addPlanTextArea").value,
    _0x374a2f = _0x4b277d.split("\n");
  for (let _0x4e7255 = 0; _0x4e7255 < _0x374a2f.length; _0x4e7255++) {
    const _0x4336f5 = _0x374a2f[_0x4e7255],
      _0x53d164 = _0x355427(_0x4336f5);
    if (_0x53d164 == null || _0x53d164.length <= 1) {
      continue;
    }
    const _0x3bfd73 = _0x53d164[0],
      _0x55f629 = _0x53d164[1],
      _0xf7fc4b = _0x245dd5(_0x4336f5),
      _0x4a4b27 = _0x41449c(_0x4336f5),
      _0x49cba4 = _0x46fd27(_0x4336f5);
    _0x1d5ef3(undefined, _0x3bfd73, _0x55f629, _0xf7fc4b, undefined, _0x49cba4, {
      useDefaultTemplate: true,
      slowestUnit: _0x4a4b27,
      id: -1,
    });
  }
  _0x2c3236();
}
function _0x1d5ef3(
  _0xd1f30f,
  _0x17ebda,
  _0x28d84b,
  _0x45ffbe,
  _0xf5dffb,
  _0x49eb81,
  {
    units: units = {},
    id: id = -1,
    useDefaultTemplate: useDefaultTemplate = false,
    slowestUnit: slowestUnit = "",
    fromQuickAdd: fromQuickAdd = false,
    toUse: toUse = _0x312785.toUse,
    autoSend: autoSend = true,
    randomOffset: randomOffset = _0x312785.launchTime_offset,
    randomOffsetTime: _0x27860a,
    sigil: sigil = _0x312785.sigil,
    leaveCats: leaveCats = _0x312785.leaveCats,
    leaveRams: leaveRams = _0x312785.leaveRams,
    ntTemplate: ntTemplate = _0x59d1c3(),
  }
) {
  if (!_0x17cfdf() || !_0x53eec0 || !_0x547416.as || window.console.ASAllowed) {
    return;
  }
  _0x1347dc();
  let _0x5ad1da;
  if (useDefaultTemplate || fromQuickAdd) {
    if (_0x49eb81 == "Support") {
      _0x5ad1da = _0x2f0953[_0x312785.currentSupportTemplate];
    } else {
      _0x5ad1da = _0x2f0953[_0x312785.currentAttackTemplate];
    }
    if (fromQuickAdd) {
      _0x5ad1da = _0x2f0953[$("#quickAddSelectTemplate")[0].value];
    }
    units = Object.assign({}, _0x5ad1da.units);
  }
  let _0x1fa3f5 = _0xd1f30f;
  !_0x1fa3f5 && (_0x1fa3f5 = _0x5ad1da.name);
  if (!_0x40f368[_0x17ebda]) {
    _0xb48748(_0x2d7c6d);
    return;
  } else {
    if (!_0x40f368[_0x28d84b]) {
      _0xb48748(_0x3fcbaa);
      return;
    } else {
      if (_0x1fa3f5.length > _0x1c1ea7) {
        _0xb48748(_0x1b29a1);
        return;
      }
    }
  }
  $.each(units, (_0x43001b, _0x358cd9) => (units[_0x43001b] = parseInt(_0x358cd9 != "" ? _0x358cd9 : 0)));
  if (_0xd7750c[slowestUnit]) {
    if (units[slowestUnit] == 0) {
      units[slowestUnit] = 1;
    }
  }
  const _0x379863 = [];
  $.each(_0xd7750c, (_0x54036e, _0x4de21a) => {
    let _0x191ff6 = Math.ceil(_0x4de21a.speed);
    _0x379863.push({
      key: _0x54036e,
      thisSpeed: _0x191ff6,
    });
  });
  const _0xe7dbeb = _0x379863.sort(function _0x447fdd(_0x1db529, _0x484a85) {
    if (_0x1db529.thisSpeed < _0x484a85.thisSpeed) {
      return 1;
    } else {
      if (_0x1db529.thisSpeed > _0x484a85.thisSpeed) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  for (const _0x37a1f1 in _0xe7dbeb) {
    if (units[_0xe7dbeb[_0x37a1f1].key] != 0) {
      if (_0xd7750c[slowestUnit]) {
        _0xe7dbeb[_0x37a1f1].speed > _0xd7750c[slowestUnit].speed && (units[_0xe7dbeb[_0x37a1f1]] = 0);
      } else {
        slowestUnit = _0xe7dbeb[_0x37a1f1].key;
        break;
      }
    }
  }
  if (_0x49eb81 == "Support" && units.knight != 0 && _0x5e09e0.units.includes("knight")) {
    slowestUnit = "knight";
  }
  id < 0 && UI.SuccessMessage("New Command programmed");
  id = id < 0 ? _0x4ab32.commandIdCounter++ : id;
  const _0x19e0a6 = {
    id: id,
    name: _0x1fa3f5,
    sourceVillageId: _0x40f368[_0x17ebda].id,
    targetVillageId: _0x40f368[_0x28d84b].id,
    source: _0x17ebda,
    target: _0x28d84b,
    launchTime: _0x45ffbe,
    arrivalTime: _0xf5dffb,
    slowestUnit: slowestUnit,
    units: units,
    type: _0x49eb81,
    done: false,
    toUse: toUse,
    autoSend: autoSend,
    preparedByBot: false,
    randomOffset: randomOffset,
    randomOffsetTime: _0x27860a,
    sigil: sigil,
    leaveCats: leaveCats,
    leaveRams: leaveRams,
    ntTemplate: ntTemplate,
  };
  _0xccf6c5(_0x19e0a6);
  _0x952f50[id] = _0x19e0a6;
  _0x381110();
}
function _0x655fb4() {
  if (!_0x17cfdf() || !_0x53eec0 || !_0x547416.as || window.console.ASAllowed) {
    return;
  }
  for (let _0x5eb3d1 = 0; _0x5eb3d1 < arguments.length; _0x5eb3d1++) {
    setTimeout(
      function (_0x50aa44, _0x43d8a9, _0x50421d) {
        const _0x1f76cb = _0x952f50[_0x50421d[_0x43d8a9]];
        let _0x2cd7e5 = window.location.pathname + "?" + (_0x50aa44 ? _0x50aa44 + "&" : "") + "village=" + _0x1f76cb.sourceVillageId + "&screen=place&target=" + _0x1f76cb.targetVillageId,
          _0x257b17 = window.open(_0x2cd7e5);
        _0x257b17.sessionStorage.setItem("commandsOverviewCommandData", JSON.stringify(_0x1f76cb), "_blank", "toolbar=0,location=0,menubar=0");
      },
      _0x271f8b * (_0x5eb3d1 + Math.random() * 0.1),
      _0x1ab9a5,
      _0x5eb3d1,
      arguments
    );
  }
  _0x2c3236();
}
function _0x244551() {
  if (_0x201c73) {
    _0x4ddc99("auto");
  }
  _0x5e98db && _0x107051("auto");
}
function _0x4ddc99(_0xab130b) {
  console.log("Deleting old commands");
  let _0x1dc777 = 0;
  const _0x1b3aeb = [];
  $.each(_0x952f50, (_0x2d8ac0, _0x285350) => {
    if (_0x285350) {
      var _0x43f1d3 = new Date(Timing.getCurrentServerTime() - _0x139bbd - _0x3d018a * 60000);
      _0x4bfad1(_0x952f50[_0x2d8ac0], _0x43f1d3) < 0 && (_0xab130b != "auto" && _0x1b3aeb.push(_0x952f50[_0x2d8ac0]), _0x1dc777++, delete _0x952f50[_0x2d8ac0]);
    }
  });
  if (_0x1b3aeb.length > 0) {
    _0x46b81c.push(_0x1b3aeb);
  }
  console.log("Deleted " + _0x1dc777 + " commands");
  _0x29851a();
}
function _0x107051(_0x863e33) {
  let _0x277017 = 0;
  const _0x4b89c3 = [];
  $.each(_0x952f50, (_0x368f01, _0x1fa7c9) => {
    if (_0x1fa7c9) {
      if (_0x1fa7c9.done) {
        if (_0x863e33 != "auto") {
          _0x4b89c3.push(_0x952f50[_0x368f01]);
        }
        _0x277017++;
        delete _0x952f50[_0x368f01];
      }
    }
  });
  _0x4b89c3.length > 0 && _0x46b81c.push(_0x4b89c3);
  console.log("Deleted " + _0x277017 + " done commands");
  _0x29851a();
}
function _0x46cf9e() {
  _0x655fb4(
    ...$.map($("[id^='select_command_']").filter(":checked"), (_0x3d0aae) => {
      return _0x3d0aae.dataset.id;
    })
  );
}
function _0x505eac() {
  _0x2d672e(
    ...$.map($("[id^='select_command_']").filter(":checked"), (_0x5a40b9) => {
      return _0x5a40b9.dataset.id;
    })
  );
}
function _0x2d672e() {
  const _0x1fc5c8 = [];
  for (let _0x3d2a27 = 0; _0x3d2a27 < arguments.length; _0x3d2a27++) {
    _0x1fc5c8.push(_0x952f50[arguments[_0x3d2a27]]);
    delete _0x952f50[arguments[_0x3d2a27]];
  }
  _0x1fc5c8.length > 0 && _0x46b81c.push(_0x1fc5c8);
  console.log("Deleted " + arguments.length + " commands");
  _0x2c3236();
}
function _0x575e5c() {
  if (_0x46b81c.length == 0) {
    _0xb48748(_0x40f287);
    return;
  }
  const _0x429c1c = _0x46b81c.pop();
  for (let _0x1a48ab = 0; _0x1a48ab < _0x429c1c.length; _0x1a48ab++) {
    const _0x3becfd = _0x429c1c[_0x1a48ab];
    _0x952f50[_0x3becfd.id] = _0x3becfd;
  }
  console.log("Reverted " + _0x429c1c.length + " commands");
  _0x2c3236();
}
function _0x5aa7b4(_0x17411e) {
  if (_0x17411e.length < 1) {
    return [];
  }
  const _0xd0d4eb = [];
  $.each(_0x17411e, (_0x34744f, _0x1b54e2) => {
    _0xd0d4eb.push(_0x1b54e2);
  });
  const _0x2bedd8 = _0xd0d4eb.sort(_0x4bfad1);
  return (_0x53d88c = _0x2bedd8), _0x2bedd8;
}
function _0x239e50() {
  let _0xdf514 = null;
  for (let _0x14fe3e = 0; _0x14fe3e < _0x53d88c.length && _0xdf514 == null; _0x14fe3e++) {
    const _0x49534d = _0x53d88c[_0x14fe3e];
    if (_0x4bfad1(_0x49534d, new Date(new Date() - _0x139bbd)) > 0) {
      _0xdf514 = _0x49534d;
    }
  }
  return _0xdf514;
}
function _0x1c681b(_0x252a03) {
  let _0x5b6f1e = [],
    _0x2a1aa4 = 0;
  for (let _0x24bc32 = 0; _0x24bc32 < _0x53d88c.length; _0x24bc32++) {
    const _0x5b44b0 = _0x53d88c[_0x24bc32],
      _0x22d022 = new Date(Timing.getCurrentServerTime() + _0x252a03 * 1000 - _0x139bbd);
    if (!_0x5b44b0.done && _0x4c2854(_0x5b44b0, _0x22d022) < 0 && _0x4c2854(_0x5b44b0, new Date(new Date() - _0x139bbd)) > 0) {
      _0x5b6f1e[_0x2a1aa4] = _0x5b44b0;
      _0x2a1aa4++;
    }
  }
  return _0x5b6f1e;
}
function _0x5d20b9(
  _0x5bf970,
  _0x51029a,
  _0x206d85,
  _0x30716d = (_0x55841c) => {
    return _0x55841c;
  }
) {
  let _0x46d5a3 =
    '<form>\n        <div class="multipleSelection">\n            <div class="selectBox" data-id="' +
    _0x206d85 +
    '" id="selectBox_' +
    _0x206d85 +
    '">\n                <select>\n                    <option selected hidden>' +
    _0x5bf970 +
    '</option>\n                </select>\n                <div class="overSelect"></div>\n            </div>\n\n            <div id="checkBoxes_' +
    _0x206d85 +
    '" class=\'selectionOption\' style="display:none;">\n                <table>\n                    <tbody>\n                        <tr>\n                            <td><input type="checkbox" class="selectionCheckboxAll" id="select_' +
    _0x206d85 +
    '_all" data-id="' +
    _0x206d85 +
    '" checked></td><td>All</td>\n                        </tr>\n                        ' +
    $.map(
      _0x51029a,
      (_0x5337e5, _0x4bc290) =>
        '\n                        <tr>\n                            <td><input type="checkbox" id="select_' +
        _0x206d85 +
        "_" +
        _0x4bc290 +
        '" class="selectionCheckbox" checked data-option="' +
        _0x5337e5 +
        '" data-id="' +
        _0x206d85 +
        '"></td><td>' +
        _0x30716d(_0x5337e5) +
        "</td>\n                        </tr>"
    ).join("\n") +
    "\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </form>\n    ";
  return (
    _0xb6f561(_0x46d5a3, "#thSelectionCheckbox" + _0x206d85, {
      callback: _0x48209e,
    }),
    _0x46d5a3
  );
}
function _0x48209e() {
  if (!$("#checkboxFader").length) {
    $("#memoPlanner").append('<div id="checkboxFader" style="display:none;"></div> ');
  }
  let _0x58d648 = function () {
    let _0x4e518b = $("#checkBoxes_" + this.dataset.id)[0],
      _0x4c7b7a = _0x4e518b.style.display == "none" ? "block" : "none";
    $("#checkboxFader")[0].style.display = _0x4c7b7a;
    _0x4e518b.style.display = _0x4c7b7a;
  };
  $(".selectBox").off("click");
  $("#checkboxFader").off("click");
  $(".selectionCheckboxAll").off("change");
  $(".selectionCheckbox").off("change");
  $(".selectBox").on("click", _0x58d648);
  $("#checkboxFader").on("click", function () {
    $(".selectionOption").css("display", "none");
    $("#checkboxFader").css("display", "none");
  });
  $(".selectionCheckboxAll").on("change", function () {
    let _0xe78e0c = this.dataset.id;
    $("[id^=select_" + _0xe78e0c + "_]").prop("checked", this.checked);
    _0x29851a();
  });
  $(".selectionCheckbox").on("change", _0x29851a);
}
function _0x58a3c4() {
  let _0x505554 = [
      ...$(".selectionCheckbox:checkbox:checked").map((_0x2cecc6, _0x58e6bf) => {
        return [[_0x58e6bf.dataset.id, _0x58e6bf.dataset.option]];
      }),
    ],
    _0x1dd1f1 = _0x505554.reduce((_0x15ce00, _0x17c996) => {
      let [_0x5e0959, _0x5686f4] = _0x17c996;
      return !Object.keys(_0x15ce00).includes(_0x5e0959) && (_0x15ce00[_0x5e0959] = []), _0x15ce00[_0x5e0959].push(_0x5686f4), _0x15ce00;
    }, {});
  $(".selectBox").each((_0x340709, _0x4a22a6) => {
    _0x1dd1f1[_0x4a22a6.dataset.id] = _0x1dd1f1[_0x4a22a6.dataset.id] ? _0x1dd1f1[_0x4a22a6.dataset.id] : [];
  });
  let _0x22fa01 = [];
  return (
    $.each(_0x952f50, (_0x4191d2, _0x8eb9bb) => {
      let _0x340bcb = _0x1dd1f1.name.includes(_0x8eb9bb.name),
        _0x43c8ff = _0x1dd1f1.type.includes(_0x8eb9bb.type),
        _0x46aaf9 = _0x1dd1f1.source.includes(_0x8eb9bb.source),
        _0x418c48 = _0x1dd1f1.target.includes(_0x8eb9bb.target),
        _0x281460 = _0x1dd1f1.slowestUnit.includes(_0x8eb9bb.slowestUnit),
        _0x41337b = _0x1dd1f1.done.includes(_0x8eb9bb.done.toString());
      if (_0x340bcb && _0x43c8ff && _0x46aaf9 && _0x418c48 && _0x281460 && _0x41337b) {
        _0x22fa01.push({ [_0x4191d2]: _0x8eb9bb });
      }
    }),
    _0x413c62(_0x22fa01.length),
    _0x45a3de(_0x22fa01)
  );
}
function _0x2735a4() {
  if (_0x4ab32.commandIdCounter == null) {
    _0x4ab32.commandIdCounter = 0;
  }
  if (!_0x4ab32.commands) {
    _0x4ab32.commands = {};
  }
  _0x5e5630(_0x952f50, _0x4ab32.commands);
}
function _0x2aa9ff() {
  let _0x5ec42b = 0,
    _0x395130 = 0;
  function _0x40c17f(_0x7b0411) {
    return (
      '<tr><td class="nowrap"><a href="javascript:void(0)" class="unit_link" data-unit="' +
      _0x7b0411 +
      '"><img src="/graphic/unit/unit_' +
      _0x7b0411 +
      '.png"></a> <input id="unit_input_' +
      _0x7b0411 +
      '" name="' +
      _0x7b0411 +
      '" type="text" tabindex="' +
      _0x5ec42b++ +
      '" value="' +
      _0x5edf1b(_0x7b0411, -1).value +
      '" class="unitsInput" Disabled></td><td align="center"><input type="checkbox" tabindex="' +
      _0x5ec42b++ +
      '" id="' +
      _0x7b0411 +
      '_all" class="popupCheckbox" checked = "' +
      _0x5edf1b(_0x7b0411, -1).checked +
      '" data-unit="' +
      _0x7b0411 +
      '"> </td></tr>'
    );
  }
  function _0x5222ed(_0x28098b) {
    let _0x27c4f6 =
      '<tr class="' +
      (_0x395130++ % 2 ? "row_a" : "row_b") +
      '">\n            <td><a class="templateLink" data-templateid="' +
      _0x28098b.id +
      '" href="javascript:void(0);">' +
      _0x28098b.name +
      "</a></td>\n        </tr>";
    return _0x27c4f6;
  }
  var _0x12df8e =
    '<div class="popup_box_container" id="config_popup" style="display:none;">\n        <div class="popup_box show" id="popup_box_popup_command" style="min-width: 700px;">\n            <div class="popup_box_content">\n                <a class="popup_box_close tooltip-delayed" id="popup_cross" href="javascript:void(0)"> </a>\n                <h3>Set attack units</h3>\n                <div style="display: grid;grid-template-columns: auto auto;grid-gap: 10px;">\n                    <div style="min-width: 600px;">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td valign="top">\n                                        <table class="vis" width="100%">\n                                            <tbody>\n                                                <tr>\n                                                    <th>Infantry</th><th>Send All</th>\n                                                </tr>\n                                                ' +
    _0x40c17f("spear") +
    "\n                                                " +
    _0x40c17f("sword") +
    "\n                                                " +
    _0x40c17f("axe") +
    "\n                                                " +
    (Object.keys(_0xd7750c).includes("archer") ? _0x40c17f("archer") : "") +
    '\n                                            </tbody>\n                                        </table>\n                                    </td>\n                                    <td valign="top">\n                                        <table class="vis" width="100%">\n                                            <tbody>\n                                                <tr>\n                                                    <th>Cavalry</th><th>Send All</th>\n                                                </tr>\n                                                ' +
    _0x40c17f("spy") +
    "\n                                                " +
    _0x40c17f("light") +
    "\n                                                " +
    (Object.keys(_0xd7750c).includes("marcher") ? _0x40c17f("marcher") : "") +
    "\n                                                " +
    _0x40c17f("heavy") +
    '\n                                            </tbody>\n                                        </table>\n                                    </td>\n                                    <td valign="top">\n                                        <table class="vis" width="100%">\n                                            <tbody>\n                                                <tr>\n                                                    <th>Siege Weapons</th><th>Send All</th>\n                                                </tr>\n                                                ' +
    _0x40c17f("ram") +
    "\n                                                " +
    _0x40c17f("catapult") +
    '\n                                            </tbody>\n                                        </table>\n                                    </td>\n                                    <td valign="top">\n                                        <table class="vis" width="100%">\n                                            <tbody>\n                                                <tr>\n                                                    <th>Others</th><th>Send All</th>\n                                                </tr>\n                                                ' +
    (Object.keys(_0xd7750c).includes("knight") ? _0x40c17f("knight", 1) : "") +
    "\n                                                " +
    _0x40c17f("snob", 2) +
    '\n                                            </tbody>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class="vis" style="margin: 4px 10px 0px 10px; min-width: 125px; float:right; height:max-content">\n                        <h4>\n                            <a href="' +
    window.location.origin +
    '/game.php?screen=place&mode=templates">Troop templates</a>\n                        </h4>\n                        <table class="vis" style="width: 100%">\n                            <tbody>\n                               ' +
    $.map(_0x2f0953, (_0x16e8b7) => _0x5222ed(_0x16e8b7)).join("\n") +
    '\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <br>\n                <table>\n                    <thead>\n                        <tr>\n                            <th style="text-align: center;">Name</th>\n                            <th style="text-align: center;">Source</th>\n                            <th style="text-align: center;">Target</th>\n                            <th style="text-align: center;">\n                                <select id="popupTime">\n                                        <option value="arrival"><strong>Arrival time</strong></option>\n                                        <option value="launch"><strong>Launch time</strong></option>\n                                </select>\n                            </th>\n                            <th style="text-align: center;">Type</th>\n                            <th style="text-align: center;">Max(%)</th>\n                            <th style="text-align: center;">Sigil(%)</th>\n                            <th style="text-align: center;">Leave Cats</th>\n                            <th style="text-align: center;">Leave Rams</th>\n                            <th style="text-align: center;">Random Launch Offset</th>\n                            <th style="text-align: center;">NT Template</th>\n                            <th style="text-align: center;">Auto Send?</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td style=""><input type="text" id="popupName"style="width:100px" placeholder="Name"></td>\n                            <td style=""><input type="text" id="popupSource"style="width:45px" placeholder="555|555"></td>\n                            <td style=""><input type="text" id="popupTarget" style="width:45px" placeholder="555|555"></td>\n                            <td style=""><input type="datetime-local" id="popupDate" step=".001"></td>\n                            <td style="">\n                                <select id="popupCommandTypeSelection" style="width: 70px;">\n                                    <option value="Attack" >Attack</option>\n                                    <option value="Support">Support</option>\n                                </select>\n                            </td>\n                            <td style=""><input type="text" id="popupToUse" style="width:50px" value="100">\n                            <td style=""><input type="text" id="popupSigil" style="width:50px" value="100">\n                            <td style=""><input type="text" id="popupLeaveCats" style="width:50px" value="100">\n                            <td style=""><input type="text" id="popupLeaveRams" style="width:50px" value="100">\n                            <td style=""><input type="text" id="popupRandomLaunchTimeOffset" style="width:50px" value="100">\n                            <td style="">\n                                <select id="popupNtTemplate" style="width: 70px;"></select>\n                            </td>\n                            <td style="text-align: center;vertical-align: middle;"><input type="checkbox" id="popupAutoSend">\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <table>\n                    <tbody>\n                        <tr>\n                            <td id="popupSetDiv">\n                                <input id="popupSet" tabindex="15" class="btn" name="set_troops" type="submit" value="Save">\n                            </td>\n                            <td>\n                                <input id="popupSetNew" tabindex="15" class="btn" name="set_troops" type="submit" value="Create New">\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class="fader" id="popup_fader" style="display:none;"></div>';
  $("#memoPlanner").append(_0x12df8e);
  let _0xd1ab51 = $(".popupCheckbox");
  _0xd1ab51.off("change");
  _0xd1ab51.on("change", function () {
    let _0x20eed3 = $(this)[0],
      _0x203141 = _0x20eed3.dataset.unit;
    $("#unit_input_" + _0x203141)[0].disabled = _0x20eed3.checked;
  });
  let _0x206d70 = $(".templateLink");
  _0x206d70.off("click");
  _0x206d70.on("click", function () {
    _0x3f1425(_0x2f0953[this.dataset.templateid]);
  });
  $("#popup_fader").off("click");
  $("#popup_cross").off("click");
  $("#popup_fader").on("click", function () {
    _0x1ba77e(false);
  });
  $("#popup_cross").on("click", function () {
    _0x1ba77e(false);
  });
  $.each(_0xbeaa34, (_0x41d1b6) => {
    $("#popupNtTemplate").append(
      $("<option>", {
        id: _0x41d1b6,
        text: _0xbeaa34[_0x41d1b6].name,
      })
    );
  });
}
function _0x3f1425(_0x557ea8) {
  _0xa05608(_0x557ea8.units);
}
function _0x5edf1b(_0x1e6765, _0x57b155) {
  let _0x10e4a5 = _0x57b155,
    _0x3a7cec = _0x10e4a5 != -1 ? false : true,
    _0x46bd08 = _0x10e4a5 != -1 ? false : true,
    _0x1e0897 = _0x10e4a5 > 0 ? _0x10e4a5 : "";
  return {
    disabled: _0x3a7cec,
    checked: _0x46bd08,
    value: _0x1e0897,
  };
}
function _0xa05608(_0x199eb2) {
  $.each(_0x199eb2, (_0x5deec9, _0x389eba) => {
    Object.keys(_0xd7750c).includes(_0x5deec9) &&
      (($("#unit_input_" + _0x5deec9)[0].value = _0x5edf1b(_0x5deec9, _0x389eba).value),
      ($("#unit_input_" + _0x5deec9)[0].disabled = _0x5edf1b(_0x5deec9, _0x389eba).disabled),
      ($("#" + _0x5deec9 + "_all")[0].checked = _0x5edf1b(_0x5deec9, _0x389eba).checked));
  });
}
function _0x19fea0(_0x3a4d10) {
  let _0xcaebb6 = {};
  if (!_0x952f50[_0x3a4d10]) {
    $.each(_0xd7750c, (_0x229c5c) => (_0xcaebb6[_0x229c5c] = -1));
  } else {
    _0xcaebb6 = _0x952f50[_0x3a4d10].units;
  }
  _0xa05608(_0xcaebb6);
  if (_0x3a4d10 != -1) {
    $("#popupName")[0].value = _0x952f50[_0x3a4d10].name;
    $("#popupSource")[0].value = _0x952f50[_0x3a4d10].source;
    $("#popupTarget")[0].value = _0x952f50[_0x3a4d10].target;
    $("#popupDate").val(_0xb9cc1d(new Date(_0x952f50[_0x3a4d10].arrivalTime)));
    $("#popupCommandTypeSelection").val(_0x952f50[_0x3a4d10].type);
    $("#popupToUse").val(_0x952f50[_0x3a4d10].toUse ? _0x952f50[_0x3a4d10].toUse : 100);
    $("#popupAutoSend").prop("checked", _0x952f50[_0x3a4d10].autoSend);
    $("#popupRandomLaunchTimeOffset").val(_0x952f50[_0x3a4d10].randomOffset ? _0x952f50[_0x3a4d10].randomOffset : 0);
    $("#popupSigil").val(_0x952f50[_0x3a4d10].sigil ? _0x952f50[_0x3a4d10].sigil : 0);
    $("#popupLeaveCats").val(_0x952f50[_0x3a4d10].leaveCats ? _0x952f50[_0x3a4d10].leaveCats : 0);
    $("#popupLeaveRams").val(_0x952f50[_0x3a4d10].leaveRams ? _0x952f50[_0x3a4d10].leaveRams : 0);
    $("#" + _0x952f50[_0x3a4d10].ntTemplate).prop("selected", true);
  } else {
    $("#popupName")[0].value = $("#quickAddName")[0].value;
    $("#popupSource")[0].value = $("#quickAddSource")[0].value;
    $("#popupTarget")[0].value = $("#quickAddTarget")[0].value;
    $("#popupDate").val(_0xb9cc1d(new Date($("#quickAddDate")[0].value)));
    $("#popupCommandTypeSelection")[0].value = $("#quickAddCommandTypeSelection")[0].value;
    $("#popupToUse").val(100);
    $("#popupSigil").val(0);
    $("#popupLeaveCats").val(0);
    $("#popupLeaveRams").val(0);
    $("#popupAutoSend").prop("checked", true);
    $("#popupRandomLaunchTimeOffset").val(0);
    $("#popupNtTemplate").val(_0xbeaa34[_0x59d1c3()].id);
    $("#" + _0x59d1c3()).prop("selected", true);
  }
}
function _0x1d34cd(_0xa3fd65 = -1) {
  _0xa3fd65 = parseInt(_0xa3fd65);
  _0x19fea0(_0xa3fd65);
  $("#config_popup")[0].style.display = "flex";
  $("#popup_fader")[0].style.display = "flex";
  _0xa3fd65 == -1 ? ($("#popupSetDiv")[0].style.display = "none") : ($("#popupSetDiv")[0].style.display = "flex");
  $("#popupSet").off("click");
  $("#popupSet").on("click", function () {
    _0x1ba77e(true, _0xa3fd65);
  });
  $("#popupSetNew").off("click");
  $("#popupSetNew").on("click", function () {
    _0x1ba77e(true, -1, false);
  });
}
function _0x1ba77e(_0x1b069a, _0x639b89 = -1, _0x117698 = true) {
  if (_0x1b069a) {
    let _0x452460 = $("#popupName")[0].value,
      _0x5c9368 = $("#popupSource")[0].value,
      _0x4e6317 = $("#popupTarget")[0].value,
      _0x4d58db,
      _0x4f95fa;
    if ($("#popupTime")[0].value == "launch") {
      _0x4d58db = new Date($("#popupDate")[0].value);
    } else {
      _0x4f95fa = new Date($("#popupDate")[0].value);
    }
    let _0x533331 = $("#popupCommandTypeSelection")[0].value,
      _0x1e8d47 = _0x45a3de(
        $.map(_0xd7750c, (_0x2a78d5, _0x4f29c2) => {
          let _0x32f52d = $("#unit_input_" + _0x4f29c2)[0].value,
            _0x196c82 = $("#" + _0x4f29c2 + "_all")[0].checked;
          return { [_0x4f29c2]: _0x196c82 ? -1 : _0x32f52d };
        })
      ),
      _0x7036e8 = $("#popupToUse")[0].value,
      _0x3d1211 = $("#popupAutoSend").is(":checked"),
      _0x4cafbe = $("#popupRandomLaunchTimeOffset")[0].value,
      _0x393233 = $("#popupSigil")[0].value,
      _0x184f1d = $("#popupLeaveCats")[0].value,
      _0x4a4014 = $("#popupLeaveRams")[0].value,
      _0x528389 = "firstNobleRedNT",
      _0x47b877 = $("#popupNtTemplate").find(":selected").attr("id");
    if (_0x47b877) {
      _0x528389 = _0x47b877;
    }
    _0x1d5ef3(_0x452460, _0x5c9368, _0x4e6317, _0x4d58db, _0x4f95fa, _0x533331, {
      units: _0x1e8d47,
      id: _0x639b89,
      useDefaultTemplate: false,
      toUse: _0x7036e8,
      autoSend: _0x3d1211,
      sigil: _0x393233,
      randomOffset: _0x4cafbe,
      leaveCats: _0x184f1d,
      leaveRams: _0x4a4014,
      ntTemplate: _0x528389,
    });
    _0x2c3236(false);
  }
  _0x117698 && (($("#config_popup")[0].style.display = "none"), ($("#popup_fader")[0].style.display = "none"));
}
function _0x356241() {
  return new Promise(function (_0x357b76, _0x37cfdf) {
    $.get("/game.php?" + (_0x1ab9a5 ? _0x1ab9a5 + "&" : "") + "village=" + _0x5e09e0.village.id + "&screen=place&mode=templates", function (_0x44dbf6) {
      const _0x41b807 = new DOMParser(),
        _0x40d8a8 = _0x41b807.parseFromString(_0x44dbf6, "text/html"),
        _0x24be1b = _0x40d8a8.getElementById("troop_template").childNodes[5],
        _0x240f19 = _0x24be1b.innerHTML.split("\n")[2],
        _0xd81f8 = JSON.parse(_0x240f19.match(/.+=(.+);/)[1]);
      _0x357b76(_0xdc3baf(_0xd81f8));
    }).fail(() => _0x37cfdf(_0xb48748("Error getting troop templates")));
  });
}
function _0xdc3baf(_0x131312) {
  const _0x2e0295 = {
    _0x4f24cc: {
      id: _0x131312[_0x4f24cc].id,
      name: _0x131312[_0x4f24cc].name,
      units: _0x202639,
    },
  };
  return (
    _0x2a165d(_0x2e0295),
    $.each(_0x131312, (_0x4f24cc) => {
      let _0x202639 = {
        _0x188b9a: parseInt(_0x131312[_0x4f24cc][_0x188b9a]) < 0 ? -1 : parseInt(_0x131312[_0x4f24cc][_0x188b9a]),
      };
      $.each(_0xd7750c, (_0x188b9a) => {});
      const _0xa3ff88 = _0x131312[_0x4f24cc].use_all;
      $.each(_0xa3ff88, (_0x2a3423) => {
        _0x202639[_0xa3ff88[_0x2a3423]] = -1;
      });
    }),
    _0x2e0295
  );
}
function _0x2a165d(_0x1aecf9) {
  _0x1aecf9[_0x36d4f9.id] = _0x36d4f9;
  _0x1aecf9[_0x2e2be6.id] = _0x2e2be6;
  _0x1aecf9[_0x2f3f2a.id] = _0x2f3f2a;
}
function _0x539130() {
  const _0x3168ff = _0x2f0953;
  $.each(_0x3168ff, (_0x2cfe4a) => {
    $(".templateDropdown").append(
      $("<option>", {
        value: _0x3168ff[_0x2cfe4a].id,
        text: _0x3168ff[_0x2cfe4a].name,
      })
    );
  });
  $(".attackTemplate").val(_0x312785.currentAttackTemplate);
  $(".supportTemplate").val(_0x312785.currentSupportTemplate);
}
function _0x3dbf1b() {
  _0x1ee4b0();
  _0x1234f3();
}
function _0x1ee4b0() {
  $(".memo-tab").not("#tab_Planner").click(_0x20cc00);
  Memo["_addTab"] = Memo.addTab;
  Memo.addTab = async () => {
    Memo["_addTab"]();
    _0x20cc00();
  };
}
function _0x2ed431() {
  if (_0x4ab32.focused == null) {
    _0x4ab32.focused = false;
  }
}
function _0x1234f3() {
  const _0x47b39b = document.getElementById("tab-bar"),
    _0x40cfd4 = document.createElement("div");
  _0x40cfd4.setAttribute("id", "tab_Planner");
  _0x40cfd4.setAttribute("class", "memo-tab");
  _0x47b39b.parentNode.insertBefore(_0x40cfd4, _0x47b39b.nextSibling);
  _0x36ef7f();
}
function _0x38d68b() {
  if (_0x4ab32.focused) {
    return;
  }
  $(".memo-tab").not("#tab_Planner").off("click");
  $(".memo-tab").not("#tab_Planner").click(_0x20cc00);
  $(".memo_container").hide();
  _0x4ab32.focused = true;
  $("#memoPlanner")[0].style.display = "block";
  $("#tab_Planner")[0].innerHTML = '\n    <span class="memo-tab-label">\n        <strong>' + _0x2ea116 + "</strong>\n    </span>";
  $("#tab-bar > div").removeClass("memo-tab-selected");
  let _0x47a1bf = $("#tab_" + Memo.selectedTab)[0].innerText;
  $("#tab_" + Memo.selectedTab + " > .memo-tab-label")[0].innerHTML = '<a href="#" onclick="Memo.selectTab(' + Memo.selectedTab + '); return false">' + _0x47a1bf + "</a>";
  $("#tab_Planner")[0].class = "memo-tab memo-tab-selected";
}
function _0x20cc00() {
  if (!_0x4ab32.focused) {
    return;
  }
  _0x4ab32.focused = false;
  $("#memoPlanner")[0].style.display = "none";
  $("#memo_" + Memo.selectedTab)[0].style.display = "block";
  $("#tab_Planner")[0].class = "memo-tab";
  _0x36ef7f();
}
function _0x36ef7f() {
  $("#tab_Planner")[0].innerHTML = '<span class="memo-tab-label">\n        <a id="plannerButton" href="javascript:void(0)">' + _0x2ea116 + "</a>\n        </span>";
  $("#plannerButton").off("click");
  $("#plannerButton").on("click", _0x38d68b);
}
function _0x3d0b1b() {
  return new Promise(function (_0x1aa8d3, _0x56f5c8) {
    $.get("/interface.php?func=get_config")
      .done(function (_0x323757) {
        _0x1aa8d3(_0x1f9e1a(_0x323757).config);
      })
      .fail(() => _0x56f5c8(_0xb48748("Error world settings")));
  });
}
function _0x589c58(_0x38d596) {
  const _0x861fc7 = [];
  return _0x861fc7.push(parseInt(_0x38d596.slice(0, -2))), _0x861fc7.push(parseInt(_0x38d596.slice(-3))), _0x861fc7;
}
function _0x245dd5(_0x1365cc) {
  const _0x1baa2d = _0x1365cc.match(/(\d{1,2}([:.])\d{1,2}([:.])\d{1,2}(([.])\d{3})?)/g),
    _0x5d91f4 = _0x1365cc.match(/(\d{1,4}([\-\/])\d{1,2}([\-\/])\d{1,4})/g);
  let _0x41e91a = new Date(_0x1baa2d[0] + " " + _0x5d91f4[0].replace(/(\d{1,2})([\/\-])(\d{1,2})([\/\-])(\d{4})/g, "$3$2$1$4$5"));
  if (!_0xebe46d) {
    if (_0x41e91a.getMilliseconds() >= 500) {
      _0x41e91a.setSeconds(_0x41e91a.getSeconds() + 1);
    }
    _0x41e91a.setMilliseconds(_0x312785.setMSWholePlane);
  }
  return _0x41e91a;
}
function _0x355427(_0x44129e) {
  const _0x47b54a = _0x44129e.match(/\d+\|\d+/gi);
  return _0x47b54a ? _0x47b54a : null;
}
function _0x41449c(_0x5995eb) {
  let _0x1e2a69 = _0x5995eb.match(/(?<=\[unit\])(.*?)(?=\[\/unit\])/gi);
  if (!_0x1e2a69) {
    $.each(_0xb6c508, (_0x1ed683) => {
      if (_0x5995eb.toLowerCase().includes(_0x1ed683)) {
        _0x1e2a69 = _0x1ed683;
      } else {
        if (_0x1ed683 == "snob" && (_0x5995eb.toLowerCase().includes("noble") || _0x5995eb.toLowerCase().includes("nobleman"))) {
          _0x1e2a69 = _0x1ed683;
        } else {
          if (_0x1ed683 == "catapult" && _0x5995eb.toLowerCase().includes("cat")) {
            _0x1e2a69 = _0x1ed683;
          }
        }
      }
    });
  } else {
    _0x1e2a69 = _0x1e2a69[0];
  }
  return _0x1e2a69;
}
function _0x46fd27(_0x261b6f) {
  if (_0x261b6f.toLowerCase().includes("support")) {
    return "Support";
  } else {
    return "Attack";
  }
}
function _0x2bf6aa(_0x49773c, _0x5ed03c) {
  const _0x3da1c9 = _0x589c58(_0x49773c),
    _0x3b0485 = _0x589c58(_0x5ed03c),
    _0x3ecf24 = Math.abs(_0x3b0485[0] - _0x3da1c9[0]),
    _0x5aa1b8 = Math.abs(_0x3b0485[1] - _0x3da1c9[1]);
  return Math.sqrt(_0x3ecf24 * _0x3ecf24 + _0x5aa1b8 * _0x5aa1b8);
}
function _0x4bfad1(_0x55aaee, _0x1c1ce4) {
  let _0x258d04 = _0x55aaee;
  if (!(_0x55aaee instanceof Date)) {
    _0x258d04 = new Date(_0x55aaee.launchTime);
  }
  let _0x35c37b = _0x1c1ce4;
  if (!(_0x1c1ce4 instanceof Date)) {
    _0x35c37b = new Date(_0x1c1ce4.launchTime);
  }
  if (_0x258d04.valueOf() > _0x35c37b.valueOf()) {
    return 1;
  } else {
    if (_0x258d04.valueOf() < _0x35c37b.valueOf()) {
      return -1;
    } else {
      return 0;
    }
  }
}
function _0x4c2854(_0x1eb8f3, _0x4e072d) {
  let _0x4f4a36 = _0x1eb8f3;
  if (!(_0x1eb8f3 instanceof Date)) {
    _0x4f4a36 = new Date(_0x1eb8f3.launchTime);
    if (_0x1eb8f3.randomOffset > 0) {
      _0x4f4a36 = new Date(_0x1eb8f3.randomOffsetTime);
    }
    if (!_0x4f4a36) {
      _0x4f4a36 = new Date(_0x1eb8f3.launchTime);
    }
  }
  let _0x4bb899 = _0x4e072d;
  if (!(_0x4e072d instanceof Date)) {
    _0x4bb899 = new Date(_0x4e072d.launchTime);
    if (_0x4e072d.randomOffset > 0) {
      _0x4bb899 = new Date(_0x4e072d.randomOffsetTime);
    }
    if (!_0x4bb899) {
      _0x4f4a36 = new Date(_0x1eb8f3.launchTime);
    }
  }
  if (_0x4f4a36.valueOf() > _0x4bb899.valueOf()) {
    return 1;
  } else {
    if (_0x4f4a36.valueOf() < _0x4bb899.valueOf()) {
      return -1;
    } else {
      return 0;
    }
  }
}
function _0xb9cc1d(_0x7026fa) {
  let _0x434730 = new Date(_0x7026fa);
  return _0x434730.setMinutes(_0x7026fa.getMinutes() - _0x7026fa.getTimezoneOffset()), _0x434730.toISOString().slice(0, 23);
}
function _0x113cec(_0x5f0a1b) {
  let _0x499833 = _0x5f0a1b;
  if (!(_0x5f0a1b instanceof Date)) {
    _0x499833 = new Date(_0x5f0a1b);
  }
  const _0x55a575 = _0x8309b2(_0x499833.getHours(), 2) + ":" + _0x8309b2(_0x499833.getMinutes(), 2) + ":" + _0x8309b2(_0x499833.getSeconds(), 2) + ":" + _0x8309b2(_0x499833.getMilliseconds(), 3),
    _0x4578df = _0x499833.getDate() + "/" + (_0x499833.getMonth() + 1) + "/" + _0x499833.getFullYear();
  return _0x55a575 + " " + _0x4578df;
}
function _0x8309b2(_0x25dc15, _0xb3f0c4) {
  return _0x25dc15.toLocaleString("en-US", {
    minimumIntegerDigits: _0xb3f0c4,
    useGrouping: false,
  });
}
function _0xccf6c5(_0x4f278f) {
  const _0x58aff9 = _0x5d65a0(_0x4f278f);
  if (_0x4f278f.launchTime == undefined) {
    _0x4f278f.launchTime = new Date(_0x4f278f.arrivalTime.getTime() - _0x58aff9);
  } else {
    _0x4f278f.arrivalTime = new Date(_0x4f278f.launchTime.getTime() + _0x58aff9);
  }
  if (_0x4f278f.randomOffsetTime == undefined) {
    _0x4f278f.randomOffsetTime = _0x134f19(_0x4f278f.launchTime.getTime(), _0x4f278f.launchTime.getTime() + _0x4f278f.randomOffset * 60000);
  }
}
function _0x5d65a0(_0x587134) {
  let _0x4580dd = _0x3a57d0.config.speed,
    _0x4ab475 = _0x3a57d0.config.unit_speed,
    _0x4916a4 = _0x2bf6aa(_0x587134.source, _0x587134.target),
    _0x45c2fc = 1 + _0x587134.sigil / 100;
  if (_0x587134.type == "Attack") {
    _0x45c2fc = 1;
  }
  let _0x44645d = _0xb6c508[_0x587134.slowestUnit],
    _0x4384fb = 1000 * Math.round((_0x4916a4 * (_0x44645d / _0x4580dd / _0x4ab475)) / _0x45c2fc);
  return _0x4384fb;
}
function _0x134f19(_0x4169c4, _0x3cdd09) {
  const _0x486958 = _0x4169c4,
    _0x532d9e = _0x3cdd09;
  return new Date(_0x486958 + Math.random() * (_0x532d9e - _0x486958));
}
function _0x413c62(_0x45298a) {
  const _0x27a26b = Math.ceil(_0x45298a / _0x43a98b);
  let _0x3fa0e7 = "";
  for (let _0x6d54e9 = 1; _0x6d54e9 <= _0x27a26b; _0x6d54e9++) {
    if (_0xa32740 == _0x6d54e9) {
      _0x3fa0e7 += "<strong> &gt;" + _0x6d54e9 + "&lt; </strong>";
    } else {
      _0x3fa0e7 += '<a class="paged-nav-item" style="cursor: pointer;" id="page_command_' + _0x6d54e9 + '" data-id="' + _0x6d54e9 + '"> [' + _0x6d54e9 + "] </a>";
    }
  }
  if (_0xa32740 == -1 && _0x27a26b > 1) {
    _0x3fa0e7 += "<strong> &gt;All&lt; </strong>";
  } else {
    _0x27a26b > 1 && (_0x3fa0e7 += '<a class="paged-nav-item" style="cursor: pointer;" id="page_command_all" data-id="-1"> [All] </a>');
  }
  _0xb6f561(_0x3fa0e7, "#commands_table_pages", { callback: _0x8bba20 });
}
function _0x8bba20() {
  $("[id^=page_command_]").off("click");
  $("[id^=page_command_]").on("click", function () {
    _0xa32740 = parseInt(this.dataset.id);
    _0x29851a();
  });
}
function _0x3ea5fc() {
  const _0xc69c4d = document.getElementById("commandsPerPageSetting").value;
  if (_0xc69c4d != "") {
    _0x43a98b = parseInt(_0xc69c4d);
  }
  _0x312785.commandsPerPage = _0x43a98b;
  _0xa32740 = 1;
}
function _0x4ed1b8() {
  const _0x56380c = document.getElementById("openTabDelay").value;
  let _0x3f27a2 = 0;
  if (_0x56380c != "") {
    _0x3f27a2 = parseInt(_0x56380c);
  }
  _0x312785.openTabDelay = _0x3f27a2;
}
function _0x22e6ff() {
  const _0x3ffe6b = document.getElementById("timing_offset").value;
  let _0xd0f062 = 0;
  if (_0x3ffe6b != "") {
    _0xd0f062 = parseInt(_0x3ffe6b);
  }
  _0x312785.timing_offset = _0xd0f062;
}
function _0x325a72() {
  const _0x5adf9c = document.getElementById("toUse_percentage").value;
  let _0x159600 = 100;
  if (_0x5adf9c != "") {
    _0x159600 = parseInt(_0x5adf9c);
  }
  _0x312785.toUse = _0x159600;
}
function _0x1de5ec() {
  const _0xcd53d = document.getElementById("sigil_percentage").value;
  let _0xea5b36 = 0;
  if (_0xcd53d != "") {
    _0xea5b36 = parseInt(_0xcd53d);
  }
  _0x312785.sigil = _0xea5b36;
}
function _0x2d0bf1() {
  const _0x863c6c = document.getElementById("leaveCatsAtHome").value;
  let _0x28aac5 = 0;
  if (_0x863c6c != "") {
    _0x28aac5 = parseInt(_0x863c6c);
  }
  _0x312785.leaveCats = _0x28aac5;
}
function _0x34bcf3() {
  const _0xdf7b89 = document.getElementById("leaveRamsAtHome").value;
  let _0x1441ed = 0;
  if (_0xdf7b89 != "") {
    _0x1441ed = parseInt(_0xdf7b89);
  }
  _0x312785.leaveRams = _0x1441ed;
}
function _0x5ea538() {
  _0x43a98b = _0x312785.commandsPerPage;
}
function _0x33c05d() {
  _0x50529b();
  _0x139f08("#menuNextCommandInfo", {
    callback: (_0xdd5886) => {
      if (_0xdd5886 != "end") {
        document.title = "Next command:  " + _0xdd5886;
      } else {
        if (!_0x239e50()) {
          document.title = "Commands Overview";
        } else {
          document.title = "Next command:  00:00:00";
        }
      }
      _0xdd631c();
      _0x50529b();
    },
    htmlWrapper: (_0x38b2b6) => {
      if (_0x239e50()) {
        if (_0x38b2b6 != "end") {
          return '<span style="color: darkblue;">Next command to ' + _0x239e50().target + " in " + _0x38b2b6 + "</span>";
        }
        return '<span style="color: darkblue;">Next command to ' + _0x239e50().target + " in 00:00:00 </span>";
      }
      return '<span style="color: red;">All of your commands are in the past!</span>';
    },
    refreshTime: 500,
  });
}
function _0xdd631c() {
  const _0x2cc2b2 = document.getElementById("menuCommandsPlannedCounter");
  let _0x88e373;
  const _0x5c6eb2 = Object.keys(_0x952f50).length;
  if (_0x5c6eb2 > 0) {
    _0x88e373 = _0x5c6eb2 + " commands planned";
    _0x2cc2b2.style.color = "darkblue";
  } else {
    _0x88e373 = "No commands planned";
    _0x2cc2b2.style.color = "red";
  }
  _0x2cc2b2.innerText = _0x88e373;
}
function _0x50529b() {
  let _0xd9c5b6 = _0x239e50();
  $("#menuNextCommandInfo")[0].dataset.endtime = _0xd9c5b6 ? new Date(_0xd9c5b6.launchTime).getTime() : Timing.getCurrentServerTime() - _0x139bbd;
  $("#menuNextCommandInfo")[0].dataset.format = "%hh%:%mm%:%ss%";
}
function _0x379eb2() {
  _0x312785.currentAttackTemplate = $("#selectAttackTemplate")[0].value;
  _0x312785.currentSupportTemplate = $("#selectSupportTemplate")[0].value;
}
function _0x2bfb64() {
  _0x379eb2();
  _0x3ea5fc();
  _0x22e6ff();
  _0x4ed1b8();
  _0x1de5ec();
  _0x325a72();
  _0x2d0bf1();
  _0x34bcf3();
  _0x1437b4();
  _0x381110();
  _0x2c3236();
}
function _0x585161() {
  !_0x4ab32.settings &&
    ((_0x4ab32.settings = {}),
    (_0x4ab32.settings.currentAttackTemplate = _0x36d4f9.id),
    (_0x4ab32.settings.currentSupportTemplate = _0x2e2be6.id),
    (_0x4ab32.settings.timing_offset = 0),
    (_0x4ab32.settings.openTabDelay = 60),
    (_0x4ab32.settings.setMSWholePlane = 0),
    (_0x4ab32.settings.toUse = 100),
    (_0x4ab32.settings.sigil = 0),
    (_0x4ab32.settings.leaveCats = 0),
    (_0x4ab32.settings.leaveRams = 0),
    (_0x4ab32.settings.launchTime_offset = 0),
    (_0x4ab32.settings.autoFillNt = true),
    (_0x4ab32.settings.autoSendInTime = true),
    (_0x4ab32.settings.autoSendNobles = true),
    (_0x4ab32.settings.readMSFromPlan = false),
    (_0x4ab32.settings.running = false),
    (_0x4ab32.settings.ntTemplates = _0xbeaa34));
  _0x5e5630(_0x312785, _0x4ab32.settings);
  if (!_0x2f0953[_0x312785.currentAttackTemplate]) {
    _0x312785.currentAttackTemplate = _0x36d4f9.id;
  }
  if (!_0x2f0953[_0x312785.currentSupportTemplate]) {
    _0x312785.currentSupportTemplate = _0x2e2be6.id;
  }
  if (_0x312785.commandsPerPage != null) {
    _0x5ea538();
  }
  if (!_0x312785.openTabDelay) {
    _0x312785.openTabDelay = 60;
  }
  if (!_0x312785.setMSWholePlane) {
    _0x312785.setMSWholePlane = 0;
  }
  if (!_0x312785.timing_offset) {
    _0x312785.timing_offset = 0;
  }
  if (!_0x312785.toUse) {
    _0x312785.toUse = 100;
  }
  if (!_0x312785.sigil) {
    _0x312785.sigil = 0;
  }
  if (!_0x312785.leaveCats) {
    _0x312785.leaveCats = 0;
  }
  if (!_0x312785.leaveRams) {
    _0x312785.leaveRams = 0;
  }
  if (!_0x312785.launchTime_offset) {
    _0x312785.launchTime_offset = 0;
  }
  if (!_0x312785.autoFillNt) {
    _0x312785.autoFillNt = true;
  }
  if (!_0x312785.autoSendInTime) {
    _0x312785.autoSendInTime = true;
  }
  if (!_0x312785.autoSendNobles) {
    _0x312785.autoSendNobles = true;
  }
  if (!_0x312785.readMSFromPlan) {
    _0x312785.readMSFromPlan = false;
  }
  if (!_0x312785.running) {
    _0x312785.running = false;
  }
  if (!_0x312785.ntTemplates) {
    _0x312785.ntTemplates = _0xbeaa34;
  }
  _0x30b787();
}
function _0x381110() {
  _0x4ab32.commands = _0x952f50;
  _0x2a19e9(_0x3ef8db, _0x4ab32);
}
function _0x2551b1() {
  _0x381110();
  _0x5ea538();
  document.getElementById("commandsPerPageSetting").value = _0x43a98b;
  _0x2c3236();
}
function _0x2b0f2d() {
  const _0x20ffb6 = _0x5d952a(_0x3ef8db);
  Object.assign(_0x4ab32, _0x20ffb6);
  _0x585161();
  _0x2735a4();
  _0x2ed431();
  _0x4ab32.settings = _0x312785;
  _0x4ab32.commands = _0x952f50;
}
function _0x1347dc() {
  const _0x1b877f = _0x5d952a(_0x3ef8db);
  _0x4ab32.commands = _0x1b877f.commands;
  _0x2735a4();
  _0x5aa7b4(_0x952f50);
}
function _0x5d952a(_0x2cff6c) {
  const _0x3f5bc1 = localStorage.getItem(_0x2cff6c);
  if (_0x3f5bc1 != undefined && _0x3f5bc1 != "") {
    return JSON.parse(_0x3f5bc1);
  }
  return null;
}
function _0x2a19e9(_0x1c5a22, _0x46a079) {
  if (typeof _0x46a079 != "string") {
    localStorage.setItem(_0x1c5a22, JSON.stringify(_0x46a079));
  } else {
    localStorage.setItem(_0x1c5a22, _0x46a079);
  }
}
function _0xee8885() {
  document.getElementById("importExportInput").style.display = "initial";
  document.getElementById("importExportInput").value = _0x3aa836(JSON.stringify(_0x4ab32));
}
function _0x27c26e() {
  _0x56bf5c(_0x3aa836(JSON.stringify(_0x4ab32)), "commandsOverviewData.txt", "text/plain");
}
function _0x115e59() {
  const _0x30a043 = document.getElementById("importExportInput").value,
    _0x3bd2fe = JSON.parse(_0x278797(_0x30a043));
  if (_0x3bd2fe.commands) {
    _0x5e5630(_0x952f50, _0x3bd2fe.commands);
  }
  if (_0x3bd2fe.settings) {
    _0x5e5630(_0x312785, _0x3bd2fe.settings);
  }
  if (_0x3bd2fe.commandIdCounter) {
    _0x4ab32.commandIdCounter = _0x3bd2fe.commandIdCounter;
  }
  _0x2f4427();
  _0x2551b1();
}
function _0x45c638() {
  document.getElementById("importExportInput").style.display = "initial";
  document.getElementById("importDataButton").style.display = "initial";
  document.getElementById("cancelImportDataButton").style.display = "initial";
  document.getElementById("startImportDataButton").style.display = "none";
  document.getElementById("importExportInput").value = "";
  document.getElementById("exportDataButton").style.display = "none";
  document.getElementById("exportDataToFileButton").style.display = "none";
}
function _0x2f4427() {
  document.getElementById("importExportInput").style.display = "none";
  document.getElementById("importDataButton").style.display = "none";
  document.getElementById("cancelImportDataButton").style.display = "none";
  document.getElementById("startImportDataButton").style.display = "initial";
  document.getElementById("exportDataButton").style.display = "initial";
  document.getElementById("exportDataToFileButton").style.display = "initial";
}
function _0x34e4c5() {
  _0x2b0f2d();
  let _0x165e37 = JSON.parse(window.sessionStorage.getItem("commandsOverviewCommandData"));
  if (!_0x165e37) {
    console.log("No attack programmed!");
    return;
  }
  if (_0x17cfdf() && _0x53eec0 && _0x547416.as) {
    if (!document.getElementById("unit_input_spear") && !$("#" + _0x5c8892.snipeScript.sendButton).is(":visible")) {
      _0xb48748(_0x5ecc38);
    }
    if (document.getElementsByClassName("error_box")[0] != undefined) {
      let _0x5d644f = document.getElementsByClassName("error_box");
      if (_0x5d644f != null) {
        _0x952f50[_0x165e37.id].done = true;
        _0x381110();
        window.close();
      }
    }
    if (JSON.parse(window.sessionStorage.getItem("tabDone"))) {
      _0x39f537();
      return;
    }
  }
  if (_0x165e37.done) {
    console.log("Attack already sent!");
    return;
  }
  let _0x22fc84 = _0x5d952a(_0x524e05);
  if (!_0x22fc84 && !_0x107d5a) {
    _0xb48748("Snipe/Schedule script is not configured!");
    return;
  }
  if ($("#" + _0x5c8892.snipeScript.sendButton).length > 0) {
    _0x952f50[_0x165e37.id].done = true;
    _0x381110();
    let _0x5e7565 = new Date(_0x165e37.launchTime).getTime();
    if (_0x165e37.randomOffset > 0) {
      _0x5e7565 = new Date(_0x165e37.randomOffsetTime).getTime();
    }
    let _0x50334f = _0x5e7565 % 1000,
      _0x569130 = function (_0x1889dd, _0x2f5ff5) {
        return (_0x1889dd = _0x1889dd + ""), _0x1889dd.length >= _0x2f5ff5 ? _0x1889dd : new Array(_0x2f5ff5 - _0x1889dd.length + 1).join("0") + _0x1889dd;
      };
    _0x50334f = _0x569130(_0x50334f.toString(), 3);
    let _0x112973 =
      "<tr>\n            <td>Command <b>" +
      _0x165e37.name +
      "</b> arrival:</td>\n            <td>" +
      _0x113cec(new Date(_0x165e37.arrivalTime)).split(" ")[0] +
      ' <b id="sendTimer" class="overviewsTimer" data-endtime="' +
      _0x5e7565 +
      '" data-format="%hh%:%mm%:%ss%:%msmsms%"></b>\n        </tr>';
    $(".vis > tbody:eq(0)").append(_0x112973);
    _0x139f08("#sendTimer", {
      callback: (_0x49aef5) => {
        if (_0x49aef5 != "end") {
          document.title = _0x5e09e0.world + " - " + _0x49aef5;
        } else {
          document.title = _0x5e09e0.world + " - " + "Command overdue";
        }
      },
      htmlWrapper: (_0xc8c4fa) => {
        if (_0xc8c4fa != "end") {
          return '(<span style="color: green;">' + _0xc8c4fa + "</span>)";
        } else {
          return '(<span style="color: red;">Command overdue</span>)';
        }
      },
      refreshTime: 100,
    });
    if (_0x312785.running && _0x53eec0) {
      (!_0xbeaa34[_0x165e37.ntTemplate].onlyNobles || (_0x5a38b1 && _0x1270f7 && _0x165e37.slowestUnit == "snob")) && _0x527cb0(_0x165e37);
      setTimeout(function () {
        if (_0x165e37.autoSend) {
          _0x44ebcc(_0x165e37);
        }
      }, 3000);
    }
  } else {
    _0x310ca7(_0x165e37, _0x165e37.units, _0x165e37.slowestUnit, _0x165e37.toUse, _0x165e37.ntTemplate);
    if (!_0x312785.autoSendNobles && _0x165e37.slowestUnit == "snob") {
      document.getElementById("command-form-warning").previousElementSibling.innerHTML += '<span style="color: red"> (Auto send nobles is turned off)</span> ';
      return;
    } else {
      if (!_0x165e37.autoSend) {
        document.getElementById("command-form-warning").previousElementSibling.innerHTML += '<span style="color: red"> (This command is excluded from auto send)</span> ';
        return;
      }
    }
    if (_0x165e37.type == "Attack") {
      $("#target_support")[0].style.display = "none";
      _0x312785.running &&
        _0x53eec0 &&
        setTimeout(function () {
          $("#target_attack")[0].click();
        }, 1000);
    } else {
      _0x165e37.type == "Support" &&
        (($("#target_attack")[0].style.display = "none"),
        _0x312785.running &&
          _0x53eec0 &&
          setTimeout(function () {
            $("#target_support")[0].click();
          }, 1000));
    }
  }
}
function _0x44ebcc(_0x5ef579) {
  if (!_0x17cfdf() || !_0x53eec0 || !_0x547416.as || window.console.ASAllowed) {
    return;
  }
  let _0x5d06dc = _0x5d952a(_0x524e05);
  if (_0x107d5a) {
    let _0x4d10f8 = function (_0x59db70) {
        const _0x49802e = _0x59db70 - (Timing.getCurrentServerTime() - _0x139bbd),
          _0x2e1523 = performance.now();
        while (performance.now() - _0x2e1523 < _0x49802e) {}
        $("#" + _0x5c8892.snipeScript.sendButton)[0].click();
      },
      _0x60d3a5 = new Date(_0x5ef579.launchTime);
    if (_0x5ef579.randomOffset > 0) {
      _0x60d3a5 = new Date(_0x5ef579.randomOffsetTime);
    }
    window.sessionStorage.setItem("tabDone", true);
    console.log(_0x60d3a5.getTime());
    console.log("Timeout actual send", _0x60d3a5.getTime() - (Timing.getCurrentServerTime() - _0x139bbd) - _0x39f658 * 1000);
    setTimeout(() => _0x4d10f8(_0x60d3a5.getTime() + _0x312785.timing_offset), _0x60d3a5.getTime() - (Timing.getCurrentServerTime() - _0x139bbd) - _0x39f658 * 1000);
  } else {
    _0x4f551f(
      _0x5d06dc.confirmButton,
      function () {
        setTimeout(function () {
          let _0x59a8a8 = new Date().getTimezoneOffset() * 60000,
            _0xd091 = new Date(_0x5ef579.arrivalTime);
          _0xd091 = new Date(_0xd091 - _0x59a8a8);
          let _0x164747 = _0xd091.toISOString().slice(0, -1);
          document.getElementById(_0x5d06dc.dateInput).value = _0x164747;
          document.getElementById(_0x5d06dc.offsetInput).value = _0x312785.timing_offset;
          window.sessionStorage.setItem("tabDone", true);
        }, 1000);
        if (_0x5ef579.autoSend) {
          setTimeout(function () {
            document.getElementById(_0x5d06dc.confirmButton).click();
          }, 2000);
        }
      },
      500,
      9000
    );
  }
}
function _0x310ca7(_0xf7f4d, _0x4a9fea, _0xd63698, _0x431692, _0x151282) {
  if (!_0x431692) {
    _0x431692 = 100;
  }
  _0x431692 = parseInt(_0x431692);
  if (_0xbeaa34[_0x151282] && _0xbeaa34[_0x151282].id.includes("NOBLE_RED") && _0x312785.autoFillNt && _0xd63698 == "snob" && _0x53eec0) {
    $.each(_0x4a9fea, (_0x318c74, _0x121eef) => {
      if (_0x5e09e0.units.includes(_0x318c74)) {
        if (_0xbeaa34[_0x151282].id == "NT_1ST_NOBLE_RED") {
          let _0x110269 = $("#unit_input_" + _0x318c74)[0].dataset.allCount,
            _0x33c20f = _0x121eef == -1 ? _0x110269 : Math.min(_0x121eef, _0x110269);
          _0x33c20f = Math.round(Math.min(_0x33c20f, (_0x431692 * _0x110269) / 100));
          $("#unit_input_" + _0x318c74)[0].value = _0x33c20f;
          if (_0x318c74 == "axe" && _0x33c20f > 100) {
            $("#unit_input_" + _0x318c74)[0].value = _0x33c20f - 100;
          }
        } else {
          let _0x36a967 = $("#unit_input_" + _0x318c74)[0].dataset.allCount,
            _0x1a33f2 = _0x121eef == -1 ? _0x36a967 : Math.min(_0x121eef, _0x36a967);
          _0x1a33f2 = Math.round(Math.min(_0x1a33f2, (_0x431692 * _0x36a967) / 100));
          $("#unit_input_" + _0x318c74)[0].value = 0;
          if (_0x318c74 == "axe" && _0x1a33f2 > 100) {
            $("#unit_input_" + _0x318c74)[0].value = 34;
          } else {
            if (_0x318c74 == "snob") {
              $("#unit_input_" + _0x318c74)[0].value = 1;
            }
          }
        }
      }
    });
  } else {
    if (_0xd63698 == "snob" && _0x312785.autoFillNt && _0x53eec0 && _0xbeaa34[_0x151282].brownNoble) {
      $("#unit_input_axe")[0].value = 1000;
      $("#unit_input_snob")[0].value = 1;
    } else {
      $.each(_0x4a9fea, (_0x156a49, _0x2833b5) => {
        if (_0x5e09e0.units.includes(_0x156a49)) {
          let _0x3c110e = $("#unit_input_" + _0x156a49)[0].dataset.allCount,
            _0x309c94 = _0x2833b5 == -1 ? _0x3c110e : Math.min(_0x2833b5, _0x3c110e);
          _0x309c94 = Math.round(Math.min(_0x309c94, (_0x431692 * _0x3c110e) / 100));
          if (
            (_0x156a49 == "catapult" || _0x156a49 == "ram") &&
            (_0xbeaa34[_0x151282].name == "2 Nobles Selected/Rest" || _0xbeaa34[_0x151282].name == "4 Nobles Selected/Rest") &&
            _0x312785.autoFillNt
          ) {
            _0x309c94 = _0x3c110e;
          }
          if (_0x156a49 == "catapult" && _0x2833b5 == -1) {
            _0x309c94 -= _0xf7f4d.leaveCats;
            if (_0x309c94 < 0) {
              _0x309c94 = 0;
            }
          } else {
            if (_0x156a49 == "ram" && _0x2833b5 == -1) {
              _0x309c94 -= _0xf7f4d.leaveRams;
              if (_0x309c94 < 0) {
                _0x309c94 = 0;
              }
            }
          }
          $("#unit_input_" + _0x156a49)[0].value = _0x309c94;
        }
      });
    }
  }
}
function _0x502b5a() {
  let _0x3c1816 = $(".vis > tbody > tr:nth-child(3) > td:nth-child(2) > a")[0];
  if (_0x3c1816 && _0x3c1816.href) {
    return !_0x3c1816.href.includes("info_player");
  } else {
    return true;
  }
}
function _0x1d3e0b(_0x381031) {
  return !_0x40f368[_0x381031];
}
function _0xb48748(_0xd20f65) {
  UI.ErrorMessage(_0xd20f65);
}
function _0x6876da(_0x406e53) {
  UI.SuccessMessage(_0x406e53);
}
function _0x4866ad() {
  _0xb5c15d();
}
function _0x461684() {
  let _0x365743 =
    '<div class="popup_box_container" id="helpConfig_popup" style="display:none;">\n        <div class="popup_box show" style="width: 600px;">\n            <div class="popup_box_content">\n                <a class="popup_box_close tooltip-delayed" id="helpPopup_cross" href="javascript:void(0)"> </a>\n                <h1 style="text-align: center; color: purple">Add Plan Help</h1>\n                <div>\n                    <h2>How to use:</h2>\n                    For now there are 2 tested planners that work with our parse system:\n                        <p></p>\n                        Â\xB7 Fodox Tribal Wars Utility\n                        <br>\n                        Â\xB7 TW AAP\n                    <p></p>\n                    <h3>Fodox Tribal Wars Utility</h3>\n                    In this tool, after you plan, you shall use "Show only essential columns", the other settings it is up to you since the result is the same.\n                    <p></p>\n                    <img src="https://i.postimg.cc/ydfh1Gzm/transferir-1.png">\n                    <p></p>\n                    After clicking "Plan" you can copy either "Plain Text" or "BB-code" text box.\n                    <p></p>\n                    <img src="https://i.postimg.cc/zGnnbvrX/Webp-net-resizeimage-1.png">\n                    <p></p>\n                    Now that you have copied either of the plans you can paste it in this script text box and click "Add plan".\n                    <p></p>\n                    <h3>TW AAP</h3>\n                    Feel free to use TW AAP without restrictions, both "export" and "simple export" work so you can just copy paste one of them into our script.\n                    <p></p>\n                    <h2>Any other planner</h2>\n                    <div style="font-size: 13px">\n                        You can use any other planner if the lines of the plan respects the following rules:\n                        <p></p>\n                        Â\xB7 Source coordinate before Target coordinate\n                        <br>\n                        Â\xB7 1 and only 1 date (The planner assumes this is the launch time of the command)\n                        <br>\n                        Â\xB7 The line needs to have the slowest unit written (spear,sword,...,ram,snob)\n                        <br>\n                        Â\xB7 The line can define the type of the command ("Attack","Support"), otherwise it is considered that the command is an "Attack"\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div>\n                    <h5 style="color: darkblue">General information</h5>\n                    <div>\n                        Script made by Im Kumin and fmthemaster.\n                        <p></p>\n                        If you have any question feel free to join the discord: <a style="color: -webkit-link" href="https://discord.gg/e2ZCtKURu8">Discord</a> (<- click here)\n                        <p></p>\n                    </div>\n                </div>\n            </div>        </div>\n    </div>\n    <div class="fader" id="helpPopup_fader" style="display:none;"></div>';
  $("body").append(_0x365743);
  $("#helpPopup_fader").off("click");
  $("#helpPopup_cross").off("click");
  $("#helpPopup_fader").on("click", function () {
    _0x576516();
  });
  $("#helpPopup_cross").on("click", function () {
    _0x576516();
  });
  _0x576516();
}
function _0xb5c15d() {
  $("#helpConfig_popup")[0].style.display = "block";
  $("#helpPopup_fader")[0].style.display = "block";
}
function _0x576516() {
  $("#helpConfig_popup")[0].style.display = "none";
  $("#helpPopup_fader")[0].style.display = "none";
}
function _0x5918ad() {
  _0x4d6798 = new Date().getTime();
  const _0x5c1cdc = document.getElementById("tab-bar"),
    _0x4a1b95 = document.createElement("div");
  _0x4a1b95.setAttribute("id", "memoPlanner");
  _0x4a1b95.setAttribute("class", "memo_container");
  _0x5c1cdc.parentNode.insertBefore(_0x4a1b95, _0x5c1cdc.nextSibling.nextSibling.nextSibling.nextSibling);
  _0x38d68b();
  let _0x1023aa =
    '\n    <div id="loaderDiv" class="memo_script" style="vertical-align: middle; clear: both;width: 400px">\n        <div class="forum-content" style="grid-template-columns: 4fr 4fr;grid-gap: 10px;padding: 0;">\n            <table class="vis nowrap" style="width: 100%;">\n                <thead>\n                    <tr>\n                        <th colspan="3"><span class="column-title" style="font-size:16px">Loading screen</span></th>\n                    </tr>\n                </thead>\n                <tbody id="loadResourceDiv">\n                </tbody>\n            </table>\n        </div>\n    </div>';
  _0xb6f561(_0x1023aa, "#memoPlanner", { callback: _0x3e0249 });
}
function _0x3e0249() {}
function _0x4aac3d() {
  document.getElementById("commandSenderDiv").style.display = "block";
  _0x4d6798 = new Date().getTime() - _0x4d6798;
  _0x3b7307 && (console.log(_0x1f2543), console.log("Total time loading: " + _0x4d6798 + " ms"));
}
async function _0x20d360(_0x3eed65, _0x5e88f9, _0x4fdeb7) {
  const _0x1a7e51 = new Date().getTime(),
    _0x4394cf = {
      description: _0x5e88f9,
      function: _0x3eed65,
      async: _0x4fdeb7,
    };
  _0x1f2543.push(_0x4394cf);
  const _0x2c51cd = "loaderSlot" + (_0x1f2543.length - 1);
  document.getElementById("loadResourceDiv").innerHTML +=
    '\n        <tr>\n            <td id="' +
    _0x2c51cd +
    '" style="padding-left: 1em;height: 30px;">\n                <a class="loader" style="float: left"></a>\n                <a href="javascript:void(0)" style="display: flex;justify-content: center;align-items: center;color:red">' +
    _0x5e88f9 +
    "</a>\n            </td>\n        </tr>";
  if (_0x4fdeb7) {
    _0x3eed65();
  } else {
    await _0x3eed65();
  }
  if (document.getElementById(_0x2c51cd) != null) {
    document.getElementById(_0x2c51cd).childNodes[1].classList.remove("loader");
    document.getElementById(_0x2c51cd).childNodes[3].style.color = "green";
  }
  const _0x550729 = new Date().getTime();
  _0x4394cf.elapsedTime = _0x550729 - _0x1a7e51;
}
function _0xb6f561(
  _0xbc305c,
  _0x36b9d4,
  {
    wrapper: wrapper = (_0x1a9de5, _0x3e667b) => (_0x3e667b.innerHTML = _0x1a9de5),
    callback: callback = () => {
      return;
    },
  }
) {
  wrapper(_0xbc305c, $(_0x36b9d4)[0]);
  callback();
}
function _0x5e5630(_0x47a995, _0x5206aa) {
  Object.keys(_0x47a995).forEach(function (_0x31c9ec) {
    delete _0x47a995[_0x31c9ec];
  });
  Object.assign(_0x47a995, _0x5206aa);
}
function _0x1f9e1a(_0x4c2615) {
  try {
    let _0x7bf243 = {
      _0x3977e4: _0x1f9e1a(_0x3a06e7),
      _0x3977e4: [],
    };
    if (_0x4c2615.children.length > 0) {
      for (let _0x1a3cf0 = 0; _0x1a3cf0 < _0x4c2615.children.length; _0x1a3cf0++) {
        const _0x3a06e7 = _0x4c2615.children.item(_0x1a3cf0),
          _0x3977e4 = _0x3a06e7.nodeName;
        if (typeof _0x7bf243[_0x3977e4] == "undefined") {
        } else {
          if (typeof _0x7bf243[_0x3977e4].push == "undefined") {
            const _0x5f4288 = _0x7bf243[_0x3977e4];
            _0x7bf243[_0x3977e4].push(_0x5f4288);
          }
          _0x7bf243[_0x3977e4].push(_0x1f9e1a(_0x3a06e7));
        }
      }
    } else {
      _0x7bf243 = _0x4c2615.textContent;
    }
    return _0x7bf243;
  } catch (_0x3b8adb) {
    console.log(_0x3b8adb.message);
  }
}
function _0x3aa836(_0x27219a) {
  let _0x22ffe8;
  if (typeof _0x27219a == "object") {
    _0x22ffe8 = JSON.stringify(_0x27219a);
  } else {
    if (typeof _0x27219a == "string") {
      _0x22ffe8 = _0x27219a;
    } else {
      return "";
    }
  }
  return encodeURI(_0x22ffe8);
}
function _0x278797(_0x30d54b) {
  return decodeURI(_0x30d54b);
}
function _0x45a3de(_0x131a6f) {
  return Object.assign({}, ..._0x131a6f);
}
function _0x56bf5c(_0x4c21af, _0x179697, _0x1fa97f) {
  const _0x401a98 = new Blob([_0x4c21af], { type: _0x1fa97f });
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(_0x401a98, _0x179697);
  } else {
    const _0x4522ee = document.createElement("a"),
      _0x15dbee = URL.createObjectURL(_0x401a98);
    _0x4522ee.href = _0x15dbee;
    _0x4522ee.download = _0x179697;
    document.body.appendChild(_0x4522ee);
    _0x4522ee.click();
    setTimeout(function () {
      document.body.removeChild(_0x4522ee);
      window.URL.revokeObjectURL(_0x15dbee);
    }, 0);
  }
}
function _0x3a6c59() {
  const _0x447100 = "https://" + _0x894d7 + "/map/village.txt";
  let _0x2947ae = localStorage.getItem("globalVillageData" + _0x894d7.split(".")[0]);
  const _0x5eee4e = new Date(),
    _0x82f07 = _0x575f3c * 60 * 60 * 1000;
  if (_0x2947ae) {
    _0x2947ae = JSON.parse(_0x2947ae);
    if (_0x2947ae.lastUpdate) {
      if (new Date(_0x2947ae.lastUpdate).getTime() + _0x82f07 > _0x5eee4e.getTime()) {
        _0x40f368 = _0x2947ae.villageData;
        return;
      }
    }
  }
  $.get(_0x447100, function (_0xf5af2a) {
    const _0x4ff181 = _0xf5af2a.split("\n");
    for (let _0x2b4226 = 0; _0x2b4226 < _0x4ff181.length; _0x2b4226++) {
      const _0x1c0464 = _0x4ff181[_0x2b4226].split(","),
        _0xb067c8 = _0x1c0464[0],
        _0x5cfa54 = _0x1c0464[2],
        _0x522d5f = _0x1c0464[3],
        _0x320f3d = _0x1c0464[4];
      _0x40f368[_0x5cfa54 + "|" + _0x522d5f] = {
        id: _0xb067c8,
        player_id: _0x320f3d,
      };
    }
  }).then(function () {
    const _0x41c39a = {
      villageData: _0x40f368,
      lastUpdate: _0x5eee4e,
    };
    localStorage.setItem("globalVillageData" + _0x894d7.split(".")[0], JSON.stringify(_0x41c39a));
  });
}
function _0x29cea3() {
  let _0x147046 = localStorage.getItem("unitsData" + _0x894d7.split(".")[0]);
  const _0x5ef3ca = new Date(),
    _0x1cb776 = _0x575f3c * 60 * 60 * 1000;
  if (_0x147046) {
    _0x147046 = JSON.parse(_0x147046);
    if (_0x147046.lastUpdate) {
      if (new Date(_0x147046.lastUpdate).getTime() + _0x1cb776 > _0x5ef3ca.getTime()) {
        return _0x147046.unitsData;
      }
    }
  }
  return new Promise(function (_0x188974, _0x514159) {
    let _0x47f9ae = {};
    $.get("/interface.php?func=get_unit_info")
      .done(function (_0x142d80) {
        $(_0x142d80)
          .find("config")
          .children()
          .each((_0x28e62c, _0xd4e83c) => {
            _0x47f9ae[$(_0xd4e83c).prop("nodeName")] = {
              speed: $(_0xd4e83c).find("speed").text(),
            };
          });
        if (_0x47f9ae.militia) {
          delete _0x47f9ae.militia;
        }
        const _0xd67b91 = {
          unitsData: _0x47f9ae,
          lastUpdate: _0x5ef3ca,
        };
        localStorage.setItem("unitsData" + _0x894d7.split(".")[0], JSON.stringify(_0xd67b91));
        _0x188974(_0x47f9ae);
      })
      .fail(() => _0x514159(_0xb48748("Error units data")));
  });
}
function _0x5e4f64() {
  $(".maincell").css("width", "1200px");
  $("[class^='bg_left']").css("width", "24px");
  $("[class^='bg_right']").css("width", "0px");
  $("#SkyScraperAdCell").css("background", "transparent url('graphic/index/mainborder-right.png') scroll top repeat-y");
  $(".bg_bottomright").css("background", "transparent url('graphic/index/mainborder-corner-right.png') scroll top no-repeat");
}
function _0x216fe0() {
  document.getElementById("side-notification-container").innerHTML = "";
}
function _0x4f551f(_0x33e1ed, _0x4f32fa, _0x55c875, _0x357a6e) {
  let _0x173a5 = Date.now();
  (function _0x3a3543() {
    if (document.getElementById(_0x33e1ed) != null && $("#" + _0x33e1ed).length > 0) {
      _0x4f32fa();
      return;
    } else {
      setTimeout(function () {
        if (_0x357a6e && Date.now() - _0x173a5 > _0x357a6e) {
          return;
        }
        _0x3a3543();
      }, _0x55c875);
    }
  })();
}
function _0x139f08(_0x59454f, { htmlWrapper: htmlWrapper = (_0x2b52fc) => _0x2b52fc, callback: callback = _0x3e0249, refreshTime: refreshTime = 200 }) {
  setInterval(() => {
    $(_0x59454f).html(function (_0x4306fd, _0x3fd59a) {
      if (!this.classList.contains("overviewsTimer")) {
        return _0x3fd59a;
      }
      let _0x1e3c58 = this.dataset.format;
      !_0x1e3c58 && (_0x1e3c58 = "%hh%:%mm%:%ss%");
      let _0x1d9814 = _0x2d75e2(this.dataset.randomtime, parseInt(this.dataset.endtime), Timing.getCurrentServerTime() - _0x139bbd, _0x1e3c58);
      return callback(_0x1d9814), htmlWrapper(_0x1d9814);
    });
  }, refreshTime);
}
function _0x2d75e2(_0x577f65, _0x3c9490, _0x34369d, _0x3b1a34 = "%hh%:%mm%:%ss%:%msmsms%", _0x2e42b7 = "end") {
  let _0x517c4f = _0x3c9490,
    _0x2ad4bb = _0x34369d,
    _0x209e60 = _0x577f65;
  if (_0x577f65 && !(_0x577f65 instanceof Date)) {
    _0x209e60 = new Date(parseInt(_0x577f65));
  }
  if (!(_0x3c9490 instanceof Date)) {
    _0x517c4f = new Date(_0x3c9490);
  }
  if (!(_0x3c9490 instanceof Date)) {
    _0x2ad4bb = new Date(_0x34369d);
  }
  let _0x3382da = (_0x51872e, _0x42bae1) => (_0x51872e < 10 ** _0x42bae1 ? ("" + "0".repeat(_0x42bae1) + _0x51872e).slice(-_0x42bae1) : "" + _0x51872e);
  const _0x2c3dba = _0x517c4f - _0x2ad4bb;
  if (_0x2c3dba < 0) {
    if (_0x209e60 && _0x209e60 - _0x2ad4bb >= 0) {
      return "OnHold";
    }
    return _0x2e42b7;
  }
  const _0x23aaa2 = 60000,
    _0x394bab = 60 * _0x23aaa2,
    _0x5888c8 = 24 * _0x394bab,
    _0x32143c = 30 * _0x5888c8;
  let _0x2d3afa = Math.floor(_0x2c3dba / _0x32143c),
    _0x4ff3eb = Math.floor((_0x2c3dba % _0x32143c) / _0x5888c8),
    _0x2cb928 = Math.floor((_0x2c3dba % _0x5888c8) / _0x394bab),
    _0x1e1ffd = Math.floor((_0x2c3dba % _0x394bab) / _0x23aaa2),
    _0x201962 = Math.floor((_0x2c3dba % _0x23aaa2) / 1000),
    _0x10ad74 = Math.floor(_0x2c3dba % 1000);
  if (!_0x3b1a34.match(/%(M)+%/g)) {
    _0x4ff3eb += _0x2d3afa * 30;
  }
  if (!_0x3b1a34.match(/%(D)+%/g)) {
    _0x2cb928 += _0x4ff3eb * 24;
  }
  if (!_0x3b1a34.match(/%(h)+%/g)) {
    _0x1e1ffd += _0x2cb928 * 60;
  }
  if (!_0x3b1a34.match(/%(m)+%/g)) {
    _0x201962 += _0x1e1ffd * 60;
  }
  if (!_0x3b1a34.match(/%(s)+%/g)) {
    _0x10ad74 += _0x201962 * 1000;
  }
  let _0x291bb4 = _0x3b1a34;
  return (
    $.each(
      {
        M: _0x2d3afa,
        D: _0x4ff3eb,
        h: _0x2cb928,
        m: _0x1e1ffd,
        s: _0x201962,
        ms: _0x10ad74,
      },
      (_0xde7f5a, _0x34ce76) => {
        let _0x480bac = RegExp("%(" + _0xde7f5a + ")+%", "g"),
          _0x555d1d = _0x3b1a34.match(_0x480bac);
        _0x555d1d &&
          $.each(_0x555d1d, (_0xa281c5, _0x498f88) => {
            let _0x5a9f20 = RegExp("" + _0xde7f5a, "g"),
              _0x18d618 = _0x498f88.match(_0x5a9f20).length;
            _0x291bb4 = _0x291bb4.replace(_0x498f88, _0x3382da(_0x34ce76, _0x18d618));
          });
      }
    ),
    _0x291bb4
  );
}
function _0x55d99d() {
  console.clear();
  console.log("%cPlease dont make this your own code.", "font-size: 40px; color: cyan");
}
function _0x4bf448(_0x2d8d76) {}
function _0x49c233() {
  if (!_0x547416.as) {
    _0xb48748("Nope :), you cannot use this bot without the source link. And why would you want to do that? You get bug fixes and updates...");
  }
  if (!_0x17cfdf() || !_0x53eec0 || !_0x547416.as || window.console.ASAllowed) {
    return;
  }
  _0x29e740();
  _0x2dbe60("%cInitializing bot...", "font-size: 20px; color: #0099ff;");
  setTimeout(function () {
    _0x2dbe60("%cBot initialized!", "font-size: 20px; color: Red;");
    _0x3651de();
  }, _0xf69085 * 1000);
}
function _0x3651de() {
  if (!_0x17cfdf() || !_0x53eec0 || !_0x547416.as || window.console.ASAllowed) {
    _0x53eec0 = false;
    return;
  }
  setTimeout(_0x4d44f3, 5000);
  setInterval(_0x1dbdad, _0x424aea * 1000);
}
function _0x1dbdad() {
  if (!_0x17cfdf() || !_0x53eec0 || !_0x547416.as || window.console.ASAllowed) {
    _0x53eec0 = false;
    return;
  }
  _0x216fe0();
  _0x1347dc();
  if (_0x312785.running) {
    let _0xc7dcd4 = _0x1c681b(_0x312785.openTabDelay);
    $.each(_0xc7dcd4, (_0x15f9a1, _0x58e96d) => {
      if (!_0xc7dcd4[_0x15f9a1].preparedByBot) {
        _0xc7dcd4[_0x15f9a1].preparedByBot = true;
        _0x381110();
        setTimeout(() => {
          _0x655fb4(_0x58e96d.id);
        }, 500);
      }
    });
  }
}
function _0x527cb0(_0x574209) {
  for (
    let _0xbf9f56 = 0;
    document[_0x46c08c(995) + _0x46c08c(1208) + _0x46c08c(2672) + _0x63e398(2518) + "Id"](
      _0x46c08c(1333) + _0x46c08c(1031) + _0x46c08c(1580) + _0x46c08c(1198) + _0x63e398(2657) + _0x63e398(932) + "n"
    ) && _0xbf9f56 < _0x3e0c36["nob" + _0x63e398(888) + _0x46c08c(1147)] - 1;
    _0xbf9f56++
  ) {
    _0x63e398(3179) + "hp" === _0x63e398(1898) + "RO"
      ? _0xc0fb05()
      : (setTimeout(function () {
          const _0x5e32e2 = _0x63e398,
            _0x32a028 = _0x63e398;
          document[_0x5e32e2(995) + "Ele" + "men" + _0x5e32e2(2518) + "Id"](_0x5e32e2(1333) + _0x5e32e2(1031) + _0x32a028(1580) + _0x32a028(1198) + _0x32a028(2657) + "rai" + "n")[
            _0x32a028(1733) + "ck"
          ]();
        }, _0xbf9f56 * 200),
        _0x399cff++);
  }
  setTimeout(function () {
    "HFwUx" !== _0x4245b5(2609) + "Ux"
      ? _0x356301["Suc" + _0x415dd5(542) + _0x4245b5(418) + _0x4245b5(1981) + "ge"](_0x30089a)
      : eval(_0x3e0c36["fil" + _0x415dd5(369) + _0x415dd5(2037) + _0x415dd5(1839)])();
  }, 1200);
}
function fill2nd3rdNoblesNT() {
  let _0x23305d = document.getElementsByClassName("units-row")[0].childNodes,
    _0x2fabed = document.getElementsByClassName("units-row")[1].childNodes,
    _0x38cfa3 = document.getElementsByClassName("units-row")[2].childNodes,
    _0x409d99 = document.getElementsByClassName("units-row")[3].childNodes;
  for (let _0x12bdb6 = 1; _0x12bdb6 < _0x2fabed.length - 1; _0x12bdb6++) {
    _0x2fabed[_0x12bdb6].childNodes[0].value = "";
    _0x38cfa3[_0x12bdb6].childNodes[0].value = "";
    _0x409d99[_0x12bdb6].childNodes[0].value = "";
  }
  let _0x4a37cc = 1;
  if (!document.getElementsByClassName("train-ui")[_0x4a37cc].childNodes[5]) {
    _0x4a37cc = 2;
  }
  let _0x49dc86 = _0x5e09e0.units.includes("archer") ? 8 : 7,
    _0x17b766 = _0x5e09e0.units.includes("archer") ? 1 : 0,
    _0x5bdace = _0x5e09e0.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x4a37cc].childNodes[_0x49dc86 + 1].childNodes[0].textContent) : 0,
    _0xb0524c = parseInt(document.getElementsByClassName("train-ui")[_0x4a37cc].childNodes[_0x49dc86].childNodes[0].textContent),
    _0x2c223c = parseInt(document.getElementsByClassName("train-ui")[_0x4a37cc].childNodes[_0x49dc86 + 2 + _0x17b766].childNodes[0].textContent),
    _0x46235f = parseInt(document.getElementsByClassName("train-ui")[_0x4a37cc].childNodes[_0x49dc86 + 3 + _0x17b766].childNodes[0].textContent),
    _0x9492d4 = document.getElementsByClassName("train-ui")[_0x4a37cc].childNodes[5].childNodes[0].textContent,
    _0x255776 = parseInt(_0x9492d4) - parseInt(_0x23305d[5].childNodes[0].textContent) - 1000,
    _0x554278 = parseInt(_0x255776 / 2),
    _0x3cb479 = _0xb0524c - parseInt(_0x23305d[_0x49dc86].childNodes[0].textContent),
    _0x1fc8da = parseInt(_0x3cb479 / 2),
    _0xefe7a5 = _0x5e09e0.units.includes("archer") ? 6 : 5;
  _0x2fabed[3].childNodes[0].value = _0x554278;
  _0x2fabed[_0xefe7a5].childNodes[0].value = _0x1fc8da;
  if (_0x5bdace > 0) {
    _0x2fabed[_0xefe7a5 + 1].childNodes[0].value = _0x5bdace;
  }
  _0x2fabed[_0xefe7a5 + 2 + _0x17b766].childNodes[0].value = _0x2c223c;
  _0x2fabed[_0xefe7a5 + 3 + _0x17b766].childNodes[0].value = _0x46235f;
  _0x2fabed[_0xefe7a5 + 5 + _0x17b766].childNodes[0].value = 1;
  _0x38cfa3[3].childNodes[0].value = _0x554278;
  _0x38cfa3[_0xefe7a5].childNodes[0].value = _0x1fc8da;
  _0x38cfa3[_0xefe7a5 + 5 + _0x17b766].childNodes[0].value = 1;
  _0x409d99[3].childNodes[0].value = 1000;
  _0x409d99[_0xefe7a5 + 5 + _0x17b766].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill2ndNobleBuffNT() {
  let _0x3a03f1 = document.getElementsByClassName("units-row")[0].childNodes,
    _0x51d832 = document.getElementsByClassName("units-row")[1].childNodes,
    _0x526453 = document.getElementsByClassName("units-row")[2].childNodes,
    _0x53f51f = document.getElementsByClassName("units-row")[3].childNodes;
  for (let _0x4145c5 = 1; _0x4145c5 < _0x51d832.length - 1; _0x4145c5++) {
    _0x51d832[_0x4145c5].childNodes[0].value = "";
    _0x526453[_0x4145c5].childNodes[0].value = "";
    _0x53f51f[_0x4145c5].childNodes[0].value = "";
  }
  let _0x11c98c = 1;
  if (!document.getElementsByClassName("train-ui")[_0x11c98c].childNodes[5]) {
    _0x11c98c = 2;
  }
  let _0x1c1080 = _0x5e09e0.units.includes("archer") ? 8 : 7,
    _0x778d78 = _0x5e09e0.units.includes("archer") ? 1 : 0,
    _0x5e214c = _0x5e09e0.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x11c98c].childNodes[_0x1c1080 + 1].childNodes[0].textContent) : 0,
    _0x518ad1 = parseInt(document.getElementsByClassName("train-ui")[_0x11c98c].childNodes[_0x1c1080].childNodes[0].textContent),
    _0x2d5ee8 = parseInt(document.getElementsByClassName("train-ui")[_0x11c98c].childNodes[_0x1c1080 + 2 + _0x778d78].childNodes[0].textContent),
    _0x34bfbd = parseInt(document.getElementsByClassName("train-ui")[_0x11c98c].childNodes[_0x1c1080 + 3 + _0x778d78].childNodes[0].textContent),
    _0x488790 = document.getElementsByClassName("train-ui")[_0x11c98c].childNodes[5].childNodes[0].textContent,
    _0x53e984 = 5000 - _0x518ad1 - _0x5e214c - _0x2d5ee8 - _0x34bfbd - 1,
    _0x334d01 = 1000;
  if (_0x53e984 > _0x488790 - 3000) {
    _0x53e984 = _0x488790 - 3000;
  } else {
    if (_0x53e984 < _0x488790 - 3000) {
      _0x334d01 = _0x488790 - 2000 - _0x53e984;
    }
  }
  if (_0x53e984 < 0) {
    _0x53e984 = 0;
  }
  let _0x29d957 = _0x5e09e0.units.includes("archer") ? 6 : 5;
  _0x51d832[3].childNodes[0].value = _0x53e984;
  _0x51d832[_0x29d957].childNodes[0].value = _0x518ad1;
  if (_0x5e214c > 0) {
    _0x51d832[_0x29d957 + 1].childNodes[0].value = _0x5e214c;
  }
  _0x51d832[_0x29d957 + 2 + _0x778d78].childNodes[0].value = _0x2d5ee8;
  _0x51d832[_0x29d957 + 3 + _0x778d78].childNodes[0].value = _0x34bfbd;
  _0x51d832[_0x29d957 + 5 + _0x778d78].childNodes[0].value = 1;
  _0x526453[3].childNodes[0].value = _0x334d01;
  _0x526453[_0x29d957].childNodes[0].value = 0;
  _0x526453[_0x29d957 + 5 + _0x778d78].childNodes[0].value = 1;
  _0x53f51f[3].childNodes[0].value = 1000;
  _0x53f51f[_0x29d957 + 5 + _0x778d78].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill3rdNobleBuffNT() {
  let _0x517b8e = document.getElementsByClassName("units-row")[0].childNodes,
    _0x5ed9f7 = document.getElementsByClassName("units-row")[1].childNodes,
    _0x5f5884 = document.getElementsByClassName("units-row")[2].childNodes,
    _0x10c8f6 = document.getElementsByClassName("units-row")[3].childNodes;
  for (let _0x25c94c = 1; _0x25c94c < _0x5ed9f7.length - 1; _0x25c94c++) {
    _0x5ed9f7[_0x25c94c].childNodes[0].value = "";
    _0x5f5884[_0x25c94c].childNodes[0].value = "";
    _0x10c8f6[_0x25c94c].childNodes[0].value = "";
  }
  let _0xcfbe99 = 1;
  if (!document.getElementsByClassName("train-ui")[_0xcfbe99].childNodes[5]) {
    _0xcfbe99 = 2;
  }
  let _0xb819fc = _0x5e09e0.units.includes("archer") ? 8 : 7,
    _0xdf16fe = _0x5e09e0.units.includes("archer") ? 1 : 0,
    _0x1690c6 = _0x5e09e0.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0xcfbe99].childNodes[_0xb819fc + 1].childNodes[0].textContent) : 0,
    _0x28ee09 = parseInt(document.getElementsByClassName("train-ui")[_0xcfbe99].childNodes[_0xb819fc].childNodes[0].textContent),
    _0x255722 = parseInt(document.getElementsByClassName("train-ui")[_0xcfbe99].childNodes[_0xb819fc + 2 + _0xdf16fe].childNodes[0].textContent),
    _0x5a5be5 = parseInt(document.getElementsByClassName("train-ui")[_0xcfbe99].childNodes[_0xb819fc + 3 + _0xdf16fe].childNodes[0].textContent),
    _0x37583a = document.getElementsByClassName("train-ui")[_0xcfbe99].childNodes[5].childNodes[0].textContent,
    _0x37f182 = 5000 - _0x28ee09 - _0x1690c6 - _0x255722 - _0x5a5be5 - 1,
    _0x177eb5 = 1000;
  if (_0x37f182 > _0x37583a - 3000) {
    _0x37f182 = _0x37583a - 3000;
  } else {
    if (_0x37f182 < _0x37583a - 3000) {
      _0x177eb5 = _0x37583a - 2000 - _0x37f182;
    }
  }
  if (_0x37f182 < 0) {
    _0x37f182 = 0;
  }
  let _0x393697 = _0x5e09e0.units.includes("archer") ? 6 : 5;
  _0x5f5884[3].childNodes[0].value = _0x37f182;
  _0x5f5884[_0x393697].childNodes[0].value = _0x28ee09;
  if (_0x1690c6 > 0) {
    _0x5f5884[_0x393697 + 1].childNodes[0].value = _0x1690c6;
  }
  _0x5f5884[_0x393697 + 2 + _0xdf16fe].childNodes[0].value = _0x255722;
  _0x5f5884[_0x393697 + 3 + _0xdf16fe].childNodes[0].value = _0x5a5be5;
  _0x5f5884[_0x393697 + 5 + _0xdf16fe].childNodes[0].value = 1;
  _0x5ed9f7[3].childNodes[0].value = _0x177eb5;
  _0x5ed9f7[_0x393697].childNodes[0].value = 0;
  _0x5ed9f7[_0x393697 + 5 + _0xdf16fe].childNodes[0].value = 1;
  _0x10c8f6[3].childNodes[0].value = 1000;
  _0x10c8f6[_0x393697 + 5 + _0xdf16fe].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill2ndNobleBuffWith5NoblesNT() {
  let _0x2185e7 = document.getElementsByClassName("units-row")[0].childNodes,
    _0x78768c = document.getElementsByClassName("units-row")[1].childNodes,
    _0x3da293 = document.getElementsByClassName("units-row")[2].childNodes,
    _0xa8f76 = document.getElementsByClassName("units-row")[3].childNodes,
    _0xb26f9 = document.getElementsByClassName("units-row")[4].childNodes;
  for (let _0x20b71a = 1; _0x20b71a < _0x78768c.length - 1; _0x20b71a++) {
    _0x78768c[_0x20b71a].childNodes[0].value = "";
    _0x3da293[_0x20b71a].childNodes[0].value = "";
    _0xa8f76[_0x20b71a].childNodes[0].value = "";
    _0xb26f9[_0x20b71a].childNodes[0].value = "";
  }
  let _0x537b54 = 1;
  if (!document.getElementsByClassName("train-ui")[_0x537b54].childNodes[5]) {
    _0x537b54 = 2;
  }
  let _0x207fe4 = _0x5e09e0.units.includes("archer") ? 8 : 7,
    _0x2de960 = _0x5e09e0.units.includes("archer") ? 1 : 0,
    _0x1abfc6 = _0x5e09e0.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x537b54].childNodes[_0x207fe4 + 1].childNodes[0].textContent) : 0,
    _0x148984 = parseInt(document.getElementsByClassName("train-ui")[_0x537b54].childNodes[_0x207fe4].childNodes[0].textContent),
    _0xafa2bf = parseInt(document.getElementsByClassName("train-ui")[_0x537b54].childNodes[_0x207fe4 + 2 + _0x2de960].childNodes[0].textContent),
    _0x20863b = parseInt(document.getElementsByClassName("train-ui")[_0x537b54].childNodes[_0x207fe4 + 3 + _0x2de960].childNodes[0].textContent),
    _0x25d170 = document.getElementsByClassName("train-ui")[_0x537b54].childNodes[5].childNodes[0].textContent,
    _0x5629ee = 5000 - _0x148984 - _0x1abfc6 - _0xafa2bf - _0x20863b - 1,
    _0x431c8f = 1000;
  if (_0x5629ee > _0x25d170 - 3000) {
    _0x5629ee = _0x25d170 - 3000;
  } else {
    if (_0x5629ee < _0x25d170 - 3000) {
      _0x431c8f = _0x25d170 - 2000 - _0x5629ee;
    }
  }
  if (_0x5629ee < 0) {
    _0x5629ee = 0;
  }
  let _0x317534 = _0x5e09e0.units.includes("archer") ? 6 : 5;
  _0x78768c[3].childNodes[0].value = _0x5629ee;
  _0x78768c[_0x317534].childNodes[0].value = _0x148984;
  if (_0x1abfc6 > 0) {
    _0x78768c[_0x317534 + 1].childNodes[0].value = _0x1abfc6;
  }
  _0x78768c[_0x317534 + 2 + _0x2de960].childNodes[0].value = _0xafa2bf;
  _0x78768c[_0x317534 + 3 + _0x2de960].childNodes[0].value = _0x20863b;
  _0x78768c[_0x317534 + 5 + _0x2de960].childNodes[0].value = 1;
  _0x3da293[3].childNodes[0].value = _0x431c8f;
  _0x3da293[_0x317534].childNodes[0].value = 0;
  _0x3da293[_0x317534 + 5 + _0x2de960].childNodes[0].value = 1;
  _0xa8f76[3].childNodes[0].value = 1000;
  _0xa8f76[_0x317534 + 5 + _0x2de960].childNodes[0].value = 1;
  _0xb26f9[3].childNodes[0].value = 1000;
  _0xb26f9[_0x317534 + 5 + _0x2de960].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill2ndNobleBuffWith2NoblesNT() {
  let _0xc3d1bd = document.getElementsByClassName("units-row")[0].childNodes,
    _0x5cfb08 = document.getElementsByClassName("units-row")[1].childNodes;
  for (let _0x3d2574 = 1; _0x3d2574 < _0x5cfb08.length - 1; _0x3d2574++) {
    _0x5cfb08[_0x3d2574].childNodes[0].value = "";
  }
  let _0x1d8ca7 = 1;
  if (!document.getElementsByClassName("train-ui")[_0x1d8ca7].childNodes[5]) {
    _0x1d8ca7 = 2;
  }
  let _0x4abc20 = _0x5e09e0.units.includes("archer") ? 8 : 7,
    _0x4077dd = _0x5e09e0.units.includes("archer") ? 1 : 0,
    _0x4715c3 = _0x5e09e0.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x1d8ca7].childNodes[_0x4abc20 + 1].childNodes[0].textContent) : 0,
    _0x4faba8 = parseInt(document.getElementsByClassName("train-ui")[_0x1d8ca7].childNodes[_0x4abc20].childNodes[0].textContent),
    _0x54be51 = parseInt(document.getElementsByClassName("train-ui")[_0x1d8ca7].childNodes[_0x4abc20 + 2 + _0x4077dd].childNodes[0].textContent),
    _0x5479a8 = parseInt(document.getElementsByClassName("train-ui")[_0x1d8ca7].childNodes[_0x4abc20 + 3 + _0x4077dd].childNodes[0].textContent),
    _0x35bc5c = document.getElementsByClassName("train-ui")[_0x1d8ca7].childNodes[5].childNodes[0].textContent,
    _0x173fda = 5000 - _0x4faba8 - _0x4715c3 - _0x54be51 - _0x5479a8 - 1,
    _0x28aa7a = 1000;
  if (_0x173fda > _0x35bc5c - 3000) {
    _0x173fda = _0x35bc5c - 3000;
  } else {
    if (_0x173fda < _0x35bc5c - 3000) {
      _0x28aa7a = _0x35bc5c - 2000 - _0x173fda;
    }
  }
  if (_0x173fda < 0) {
    _0x173fda = 0;
  }
  let _0x20ae87 = _0x5e09e0.units.includes("archer") ? 6 : 5;
  _0x5cfb08[3].childNodes[0].value = _0x173fda;
  _0x5cfb08[_0x20ae87].childNodes[0].value = _0x4faba8;
  if (_0x4715c3 > 0) {
    _0x5cfb08[_0x20ae87 + 1].childNodes[0].value = _0x4715c3;
  }
  _0x5cfb08[_0x20ae87 + 2 + _0x4077dd].childNodes[0].value = _0x54be51;
  _0x5cfb08[_0x20ae87 + 3 + _0x4077dd].childNodes[0].value = _0x5479a8;
  _0x5cfb08[_0x20ae87 + 5 + _0x4077dd].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill2NobleSelectedRest() {}
function fill3NobleSelectedRest() {}
function fill4NobleSelectedRest() {}
function fill4NoblesSame() {
  let _0x5e2548 = document.getElementsByClassName("units-row")[0].childNodes,
    _0x408c9a = document.getElementsByClassName("units-row")[1].childNodes,
    _0x100fc8 = document.getElementsByClassName("units-row")[2].childNodes,
    _0x30ca15 = document.getElementsByClassName("units-row")[3].childNodes;
  for (let _0xfe2fe8 = 3; _0xfe2fe8 < _0x408c9a.length + 2; _0xfe2fe8++) {
    _0x5e2548[_0xfe2fe8].childNodes[0] &&
      ((_0x408c9a[_0xfe2fe8 - 2].childNodes[0].value = _0x5e2548[_0xfe2fe8].childNodes[0].textContent),
      (_0x100fc8[_0xfe2fe8 - 2].childNodes[0].value = _0x5e2548[_0xfe2fe8].childNodes[0].textContent),
      (_0x30ca15[_0xfe2fe8 - 2].childNodes[0].value = _0x5e2548[_0xfe2fe8].childNodes[0].textContent));
  }
  Place.confirmScreen.updateUnitsSum();
}
function fill3NoblesSame() {
  let _0x15ffaf = document.getElementsByClassName("units-row")[0].childNodes,
    _0xf297f8 = document.getElementsByClassName("units-row")[1].childNodes,
    _0x177123 = document.getElementsByClassName("units-row")[2].childNodes;
  for (let _0x20fb5d = 3; _0x20fb5d < _0xf297f8.length + 2; _0x20fb5d++) {
    _0x15ffaf[_0x20fb5d].childNodes[0] &&
      ((_0xf297f8[_0x20fb5d - 2].childNodes[0].value = _0x15ffaf[_0x20fb5d].childNodes[0].textContent),
      (_0x177123[_0x20fb5d - 2].childNodes[0].value = _0x15ffaf[_0x20fb5d].childNodes[0].textContent));
  }
  Place.confirmScreen.updateUnitsSum();
}
function fill2NoblesSame() {
  let _0x28b204 = document.getElementsByClassName("units-row")[0].childNodes,
    _0x2c1bbd = document.getElementsByClassName("units-row")[1].childNodes;
  for (let _0x362d9f = 3; _0x362d9f < _0x2c1bbd.length + 2; _0x362d9f++) {
    _0x28b204[_0x362d9f].childNodes[0] && (_0x2c1bbd[_0x362d9f - 2].childNodes[0].value = _0x28b204[_0x362d9f].childNodes[0].textContent);
  }
  Place.confirmScreen.updateUnitsSum();
}
function fill1stNobleRedNT() {}
function fill2ndNobleRedNT() {
  let _0x30e033 = document.getElementsByClassName("units-row")[0].childNodes,
    _0x3b774f = document.getElementsByClassName("units-row")[1].childNodes,
    _0x41bba4 = document.getElementsByClassName("units-row")[2].childNodes,
    _0xe778ba = document.getElementsByClassName("units-row")[3].childNodes;
  for (let _0x597d11 = 1; _0x597d11 < _0x3b774f.length - 1; _0x597d11++) {
    _0x3b774f[_0x597d11].childNodes[0].value = "";
    _0x41bba4[_0x597d11].childNodes[0].value = "";
    _0xe778ba[_0x597d11].childNodes[0].value = "";
  }
  let _0x298f09 = 1;
  if (!document.getElementsByClassName("train-ui")[_0x298f09].childNodes[5]) {
    _0x298f09 = 2;
  }
  let _0x548a32 = _0x5e09e0.units.includes("archer") ? 8 : 7,
    _0x39b433 = _0x5e09e0.units.includes("archer") ? 1 : 0,
    _0x5acf5e = _0x5e09e0.units.includes("archer") ? 6 : 5,
    _0x1c21f3 = _0x5e09e0.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x298f09].childNodes[_0x548a32 + 1].childNodes[0].textContent) : 0,
    _0x6b4322 = parseInt(document.getElementsByClassName("train-ui")[_0x298f09].childNodes[_0x548a32].childNodes[0].textContent),
    _0x55fd66 = parseInt(document.getElementsByClassName("train-ui")[_0x298f09].childNodes[_0x548a32 + 2 + _0x39b433].childNodes[0].textContent),
    _0x26fe20 = parseInt(document.getElementsByClassName("train-ui")[_0x298f09].childNodes[_0x548a32 + 3 + _0x39b433].childNodes[0].textContent),
    _0x14a783 = document.getElementsByClassName("train-ui")[_0x298f09].childNodes[5].childNodes[0].textContent,
    _0x49cf94 = _0x14a783 - 100;
  if (_0x49cf94 < 0) {
    _0x49cf94 = 0;
  }
  _0x3b774f[3].childNodes[0].value = _0x49cf94;
  _0x3b774f[_0x5acf5e].childNodes[0].value = _0x6b4322;
  if (_0x1c21f3 > 0) {
    _0x3b774f[_0x5acf5e + 1].childNodes[0].value = _0x1c21f3;
  }
  _0x3b774f[_0x5acf5e + 2 + _0x39b433].childNodes[0].value = _0x55fd66;
  _0x3b774f[_0x5acf5e + 3 + _0x39b433].childNodes[0].value = _0x26fe20;
  _0x3b774f[_0x5acf5e + 5 + _0x39b433].childNodes[0].value = 1;
  _0x41bba4[3].childNodes[0].value = 33;
  _0x41bba4[_0x5acf5e + 5 + _0x39b433].childNodes[0].value = 1;
  _0xe778ba[3].childNodes[0].value = 33;
  _0xe778ba[_0x5acf5e + 5 + _0x39b433].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill3rdNobleRedNT() {
  let _0x29b228 = document.getElementsByClassName("units-row")[0].childNodes,
    _0x4aa4c3 = document.getElementsByClassName("units-row")[1].childNodes,
    _0x304711 = document.getElementsByClassName("units-row")[2].childNodes,
    _0x120f1b = document.getElementsByClassName("units-row")[3].childNodes;
  for (let _0x2e0982 = 1; _0x2e0982 < _0x4aa4c3.length - 1; _0x2e0982++) {
    _0x4aa4c3[_0x2e0982].childNodes[0].value = "";
    _0x304711[_0x2e0982].childNodes[0].value = "";
    _0x120f1b[_0x2e0982].childNodes[0].value = "";
  }
  let _0x4132ba = 1;
  if (!document.getElementsByClassName("train-ui")[_0x4132ba].childNodes[5]) {
    _0x4132ba = 2;
  }
  let _0x5042ba = _0x5e09e0.units.includes("archer") ? 8 : 7,
    _0x17a827 = _0x5e09e0.units.includes("archer") ? 1 : 0,
    _0x57270e = _0x5e09e0.units.includes("archer") ? 6 : 5,
    _0x50a166 = _0x5e09e0.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x4132ba].childNodes[_0x5042ba + 1].childNodes[0].textContent) : 0,
    _0x41c86a = parseInt(document.getElementsByClassName("train-ui")[_0x4132ba].childNodes[_0x5042ba].childNodes[0].textContent),
    _0x3b1f33 = parseInt(document.getElementsByClassName("train-ui")[_0x4132ba].childNodes[_0x5042ba + 2 + _0x17a827].childNodes[0].textContent),
    _0x55e369 = parseInt(document.getElementsByClassName("train-ui")[_0x4132ba].childNodes[_0x5042ba + 3 + _0x17a827].childNodes[0].textContent),
    _0x4c64a3 = document.getElementsByClassName("train-ui")[_0x4132ba].childNodes[5].childNodes[0].textContent,
    _0x2e0575 = _0x4c64a3 - 100;
  if (_0x2e0575 < 0) {
    _0x2e0575 = 0;
  }
  _0x4aa4c3[3].childNodes[0].value = 33;
  _0x4aa4c3[_0x57270e + 5 + _0x17a827].childNodes[0].value = 1;
  _0x304711[3].childNodes[0].value = _0x2e0575;
  _0x304711[_0x57270e].childNodes[0].value = _0x41c86a;
  if (_0x50a166 > 0) {
    _0x304711[_0x57270e + 1].childNodes[0].value = _0x50a166;
  }
  _0x304711[_0x57270e + 2 + _0x17a827].childNodes[0].value = _0x3b1f33;
  _0x304711[_0x57270e + 3 + _0x17a827].childNodes[0].value = _0x55e369;
  _0x304711[_0x57270e + 5 + _0x17a827].childNodes[0].value = 1;
  _0x120f1b[3].childNodes[0].value = 33;
  _0x120f1b[_0x57270e + 5 + _0x17a827].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function fill4thNobleRedNT() {
  let _0x2427c = document.getElementsByClassName("units-row")[0].childNodes,
    _0x5f0720 = document.getElementsByClassName("units-row")[1].childNodes,
    _0x1df8de = document.getElementsByClassName("units-row")[2].childNodes,
    _0x9926ad = document.getElementsByClassName("units-row")[3].childNodes;
  for (let _0x300d06 = 1; _0x300d06 < _0x5f0720.length - 1; _0x300d06++) {
    _0x5f0720[_0x300d06].childNodes[0].value = "";
    _0x1df8de[_0x300d06].childNodes[0].value = "";
    _0x9926ad[_0x300d06].childNodes[0].value = "";
  }
  let _0x24a582 = 1;
  if (!document.getElementsByClassName("train-ui")[_0x24a582].childNodes[5]) {
    _0x24a582 = 2;
  }
  let _0x179abc = _0x5e09e0.units.includes("archer") ? 8 : 7,
    _0x36dfc2 = _0x5e09e0.units.includes("archer") ? 1 : 0,
    _0x2d0766 = _0x5e09e0.units.includes("archer") ? 6 : 5,
    _0x58d436 = _0x5e09e0.units.includes("archer") ? parseInt(document.getElementsByClassName("train-ui")[_0x24a582].childNodes[_0x179abc + 1].childNodes[0].textContent) : 0,
    _0xc1055e = parseInt(document.getElementsByClassName("train-ui")[_0x24a582].childNodes[_0x179abc].childNodes[0].textContent),
    _0x1a42d5 = parseInt(document.getElementsByClassName("train-ui")[_0x24a582].childNodes[_0x179abc + 2 + _0x36dfc2].childNodes[0].textContent),
    _0x3b30fc = parseInt(document.getElementsByClassName("train-ui")[_0x24a582].childNodes[_0x179abc + 3 + _0x36dfc2].childNodes[0].textContent),
    _0x36bef0 = document.getElementsByClassName("train-ui")[_0x24a582].childNodes[5].childNodes[0].textContent,
    _0x43a850 = _0x36bef0 - 100;
  if (_0x43a850 < 0) {
    _0x43a850 = 0;
  }
  _0x5f0720[3].childNodes[0].value = 33;
  _0x5f0720[_0x2d0766 + 5 + _0x36dfc2].childNodes[0].value = 1;
  _0x1df8de[3].childNodes[0].value = 33;
  _0x1df8de[_0x2d0766 + 5 + _0x36dfc2].childNodes[0].value = 1;
  _0x9926ad[3].childNodes[0].value = _0x43a850;
  _0x9926ad[_0x2d0766].childNodes[0].value = _0xc1055e;
  if (_0x58d436 > 0) {
    _0x9926ad[_0x2d0766 + 1].childNodes[0].value = _0x58d436;
  }
  _0x9926ad[_0x2d0766 + 2 + _0x36dfc2].childNodes[0].value = _0x1a42d5;
  _0x9926ad[_0x2d0766 + 3 + _0x36dfc2].childNodes[0].value = _0x3b30fc;
  _0x9926ad[_0x2d0766 + 5 + _0x36dfc2].childNodes[0].value = 1;
  Place.confirmScreen.updateUnitsSum();
}
function noNT() {}
function _0x39f537() {
  if (_0x312785.running && _0x53eec0) {
    let _0x4d657e = _0x262e30;
    console.log("%cClosing tab in: " + _0x262e30 + " seconds.", "font-size: 18px; color: cyan");
    setInterval(_0x133411, 1000);
    $(document).mousemove(function (_0x40a660) {
      _0x4d657e = 10;
      console.log("%cTab life time reseted to " + _0x262e30 + " seconds.", "font-size: 18px; color: red");
    });
    $(document).keypress(function (_0x1c19a6) {
      _0x4d657e = 10;
      console.log("%cTab life time reseted to " + _0x262e30 + " seconds.", "font-size: 18px; color: red");
    });
    function _0x133411() {
      _0x4d657e = _0x4d657e - 1;
      if (_0x4d657e < 6) {
        console.log("%cClosing tab in: " + _0x4d657e + " seconds.", "font-size: 18px; color: cyan");
      }
      _0x4d657e == 0 && window.close();
    }
  }
}
function _0x1437b4() {
  const _0x223890 = document.getElementById("launchTime_offset").value;
  let _0x21a281 = 0;
  if (_0x223890 != "") {
    _0x21a281 = _0x223890;
  }
  _0x312785.launchTime_offset = _0x21a281;
  _0x312785.autoSendNobles = $("#autoSendNobles").is(":checked");
  _0x312785.autoFillNt = $("#autoFillNt").is(":checked");
  _0x312785.autoSendInTime = document.querySelector('input[name="autoSendInTime"]:checked').value == "true" ? true : false;
  _0x312785.ntTemplates = _0xbeaa34;
}
function _0x30b787() {
  _0x253677 = _0x312785.launchTime_offset;
  _0x5a38b1 = _0x312785.autoSendNobles;
  _0xebe46d = _0x312785.readMSFromPlan;
  _0x1270f7 = _0x312785.autoFillNt;
  _0x107d5a = _0x312785.autoSendInTime;
}
function _0x2a1737() {
  if (!_0x17cfdf() || !_0x53eec0 || !_0x547416.as || window.console.ASAllowed) {
    return;
  }
  _0x312785.running
    ? ((_0x312785.running = false),
      (document.getElementById("runningMenuInfo").innerHTML = "Not Running"),
      (document.getElementById("startStopBotButton").innerHTML = "Start"),
      $("#runningMenuInfo").css("color", "red"))
    : ((_0x312785.running = true),
      (document.getElementById("runningMenuInfo").innerHTML = "Running"),
      (document.getElementById("startStopBotButton").innerHTML = "Stop"),
      $("#runningMenuInfo").css("color", "green"));
  _0x2bfb64();
}
function _0x3ccfb4() {
  if ($("#botSettingsBody").is(":visible")) {
    $("#botSettingsBody").hide();
  } else {
    $("#botSettingsBody").show();
  }
}
function _0x54fa02() {
  if ($("#settingsBody").is(":visible")) {
    $("#settingsBody").hide();
  } else {
    $("#settingsBody").show();
  }
}
function _0x1f09f() {
  if ($("#botStatusSettingsBody").is(":visible")) {
    $("#botStatusSettingsBody").hide();
  } else {
    $("#botStatusSettingsBody").show();
  }
}
function _0x3dc85f() {
  $("#selectNTTemplate").on("change", _0x517b44);
  $.each(_0xbeaa34, (_0x4f44db) => {
    $("#selectNTTemplate").append(
      $("<option>", {
        selected: _0xbeaa34[_0x4f44db].selected,
        id: _0xbeaa34[_0x4f44db].id,
        text: _0xbeaa34[_0x4f44db].name,
      })
    );
  });
}
function _0x517b44() {
  let _0x156a4a = $("#selectNTTemplate").find(":selected").attr("id");
  $.each(_0xbeaa34, (_0x795950) => {
    if (_0xbeaa34[_0x795950].id == _0x156a4a) {
      _0xbeaa34[_0x795950].selected = true;
    } else {
      _0xbeaa34[_0x795950].selected = false;
    }
  });
}
function _0x59d1c3() {
  let _0x39be1f = null;
  return (
    $.each(_0xbeaa34, (_0x4e4919) => {
      if (_0xbeaa34[_0x4e4919].selected) {
        _0x39be1f = _0x4e4919;
      }
    }),
    _0x39be1f
  );
}
function _0x1d980d(_0x53d2bb, _0x1783fb) {
  return Math.floor(Math.random() * (_0x1783fb - _0x53d2bb)) + _0x53d2bb;
}
function _0x2dbe60() {
  if (_0x1aff18) {
    console.log.apply(null, arguments);
  }
}
function _0x365812() {
  return new Promise(function (_0x5a56fa, _0x15c515) {
    $.ajax({
      url: "https://raw.githack.com/tiagoribeiro0/testing/main/AllowedIds.txt",
      type: "GET",
      dataType: "text",
      cache: false,
      success: function (_0x3e94ab) {
        const _0x24d4fa = _0x1ff1f1(_0x3e94ab),
          _0x390057 = JSON.parse(_0x24d4fa);
        _0x5c8892 = _0x390057;
        _0x5a56fa();
      },
      error: function (_0x560bcd) {
        _0x15c515(_0xb48748("Something went wrong fetching your identity."));
      },
      fail: function (_0x4a0397, _0x579e9b, _0x29330d) {
        _0x15c515(_0xb48748("Could not fetch your identity. Check your internet connection."));
      },
    });
  });
}
function _0x29e740() {
  const _0x1fa781 = _0x2e3f08("#autoCommandsSenderXD#KEKHELPME");
  _0x5c8892.settings.additional.includes(_0x1fa781("" + _0x5e09e0.player.id)) &&
    $.ajax({
      type: "GET",
      url: "https://rawcdn.githack.com/tiagoribeiro0/testing/9231401fc00ae52b0f05ac94d3e74f00356299bd/CommanderAdditionalCode.js",
      dataType: "script",
      cache: false,
    });
}
async function _0x4d44f3() {
  if (_0x17cfdf() && _0x53eec0) {
    if (_0x4953da % 180 == 0) {
      $.ajax({
        url: "https://raw.githack.com/tiagoribeiro0/testing/main/AllowedIds.txt",
        type: "GET",
        dataType: "text",
        cache: false,
        success: async function (_0x1f136b) {
          _0x17b7bf = _0x1f136b;
          const _0x548a13 = _0x1ff1f1(_0x1f136b),
            _0x5742ec = JSON.parse(_0x548a13);
          _0x5c8892 = _0x5742ec;
          let _0x3e9dec = await $.getJSON(document.location.href.replace(/action=\w*/, "").replace(/#.*$/, "") + "&_partial");
          _0x3e9dec = _0x3e9dec.game_data;
          _0x2d38bf(_0x1f136b, _0x3e9dec);
          _0x4953da++;
        },
        error: function (_0xcd96f1) {
          reject(_0xb48748("Something went wrong fetching your identity."));
        },
        fail: function (_0xe7c8b3, _0x4e3f90, _0x56e712) {
          reject(_0xb48748("Could not fetch your identity. Check your internet connection."));
        },
      });
    } else {
      _0x2d38bf(_0x17b7bf, _0x5e09e0);
    }
  }
}
function _0x2d38bf(_0x440ac1, _0x2f3c94) {
  const _0x5c7528 = _0x1ff1f1(_0x440ac1),
    _0x12b2ec = JSON.parse(_0x5c7528);
  let _0x4de56a = _0x12b2ec;
  _0xe39b6c(_0x2f3c94, _0x4de56a);
}
function _0xe39b6c(_0x179dd6, _0x487994) {
  return (_0x53eec0 = true), true;
  let _0x5f4eb4 = _0x179dd6.player.id,
    _0x3bd88e = _0x179dd6.player.sitter;
  if (_0x3bd88e == 0 && _0x46b8a9(_0x5f4eb4, _0x487994) && _0x547416.as) {
    if (_0x487994[_0x5f4eb4].message) {
      _0x2a759b();
    }
    return (_0x53eec0 = true), true;
  } else {
    if (_0x3bd88e > 0 && _0x46b8a9(_0x3bd88e, _0x487994) && _0x547416.as) {
      if (_0x487994[_0x3bd88e].message) {
        _0x2a759b();
      }
      return (_0x53eec0 = true), true;
    } else {
      return (_0x53eec0 = true), true;
      //return _0x2a759b(), _0x1719a7(), (_0x53eec0 = true), (window.console.ASAllowed = true), window.close(), false;
    }
  }
}
function _0x46b8a9(_0x4c62d5, _0x597a8b) {
  return true;
  let _0x3a4db0 = _0x597a8b[_0x4c62d5];
  if (_0x3a4db0) {
    if (_0x3a4db0.autoCommandSender) {
      if (_0x3a4db0.autoCommandSender.mode == "total") {
        return true;
      } else {
        if (_0x3a4db0.autoCommandSender.mode == "subscription") {
          if (new Date(_0x3a4db0.autoCommandSender.endTime).getTime() > new Date().getTime()) {
            return _0x16c06e < 6 && (_0x6876da("Subscription period: " + _0x3a4db0.autoCommandSender.startTime + " to " + _0x3a4db0.autoCommandSender.endTime + "!"), _0x16c06e++), true;
          } else {
            return _0xb48748("Subscription period ended on: " + _0x3a4db0.autoCommandSender.endTime + "!"), (_0x53eec0 = false), false;
          }
        }
      }
      return _0x2a759b(), (window.console.ASAllowed = true), (_0x53eec0 = false), _0xb48748(_0x3fafc7), false;
    }
  }
  return _0x2a759b(), (window.console.ASAllowed = true), (_0x53eec0 = false), _0xb48748(_0x3fafc7), false;
}
function _0x2a759b() {
  let _0x4da20c = new Date().getTime(),
    _0x15d306 =
      _0x5e09e0.player.name +
      "(" +
      _0x5e09e0.player.id +
      ")" +
      (_0x5e09e0.player.sitter > 0 ? "(t=" + _0x5e09e0.player.sitter + ")" : "") +
      " ran your script, Auto Commands Sender, without permission.";
  if (window.console.ASAllowed) {
    _0x15d306 += "And is trying to crack the code.";
  }
  if (_0x4ab32.time == undefined) {
    //_0x599a86(_0x15d306);
    _0x4ab32.time = _0x4da20c;
    _0x4ab32.time2 = _0x4da20c;
  } else {
    _0x4ab32.time2 + 1800000 < _0x4da20c && (_0x599a86(_0x15d306), (_0x4ab32.time = _0x4da20c), (_0x4ab32.time2 = _0x4da20c));
  }
  _0x381110();
}
function _0x599a86(_0x5c2ba4) {
  const _0x1cc37c = new XMLHttpRequest();
  _0x1cc37c.open("POST", "discord spy");
  _0x1cc37c.setRequestHeader("Content-type", "application/json");
  const _0x2b52ca = {
    username: _0x5e09e0.player.name + "|" + _0x5e09e0.world,
    content: _0x5c2ba4,
  };
  _0x1cc37c.send(JSON.stringify(_0x2b52ca));
  console.log("Message sent!");
}
function _0x17cfdf() {
  return (_0x53eec0 = true), true;
  let _0x128644 = _0x5e09e0.player.id,
    _0x2bfb21 = _0x5e09e0.player.sitter;
  if (_0x2bfb21 == 0 && _0x42a208(_0x128644) && _0x547416.as) {
    return (_0x53eec0 = true), true;
  } else {
    if (_0x2bfb21 > 0 && _0x42a208(_0x2bfb21) && _0x547416.as) {
      return (_0x53eec0 = true), true;
    } else {
      return _0x1719a7(), (_0x53eec0 = true), true;
    }
  }
}
function _0x42a208(_0x5d9a25) {
  return true;
  let _0xec2456 = _0x5c8892[_0x5d9a25];
  if (_0xec2456) {
    if (_0xec2456.autoCommandSender) {
      if (_0xec2456.autoCommandSender.allowed && !_0xec2456.autoCommandSender.allowed.includes(_0x5e09e0.world)) {
        return (_0x53eec0 = false), _0xb48748(_0x3fafc7), false;
      }
      if (_0xec2456.autoCommandSender.mode == "total") {
        return true;
      } else {
        if (_0xec2456.autoCommandSender.mode == "subscription") {
          if (new Date(_0xec2456.autoCommandSender.endTime).getTime() > new Date().getTime()) {
            if (_0x16c06e < 6) {
              _0x6876da("Subscription period: " + _0xec2456.autoCommandSender.startTime + " to " + _0xec2456.autoCommandSender.endTime + "!");
              _0x16c06e++;
            }
            return true;
          } else {
            return _0xb48748("Subscription period ended on: " + _0xec2456.autoCommandSender.endTime + "!"), (_0x53eec0 = false), false;
          }
        }
      }
      return (_0x53eec0 = true), _0xb48748(_0x3fafc7), false;
    }
  }
  return _0x2a759b(), (_0x53eec0 = false), _0xb48748(_0x3fafc7), false;
}
function _0xfcaa6c(_0x565063, _0x2848be) {
  let _0x274370 = new Audio(_0x565063);
  _0x2848be = _0x2848be ? _0x2848be : 0.001;
  _0x274370.autoplay = true;
  _0x274370.muted = true;
  _0x274370.volume = _0x2848be;
  _0x274370.addEventListener("ended", function () {
    this.currentTime = 0;
  });
  const _0x468c4b = _0x274370.play();
  if (_0x468c4b !== undefined) {
    _0x468c4b
      .then(() => {
        _0x274370.muted = false;
      })
      .catch((_0x1910ec) => {
        _0x274370.muted = false;
        _0x274370.play();
      });
  }
  setTimeout(function () {
    _0x274370.muted = true;
  }, 2200);
}
function _0x1719a7() {
  $("#botSettingsNoPermissionDiv1").show();
  $("#botSettingsNoPermissionDiv2").show();
  $("#settingsBody").addClass("noPermission");
  $("#botSettingsBody").addClass("noPermission");
  $("#botStatusSettingsBody").addClass("noPermission");
  $("#botStatusSettingsBody").hide();
  $("#settingsBody").hide();
  $("#botSettingsBody").hide();
}
