// ==UserScript==
// @name LA Enhancer Auto
// @version 1
// @description Script que envia quantiade de tropas diferentes para farms cheios e vazios.
// @match        https://*/game.php?*screen=am_farm*
// @grant       unsafeWindow

// ==/UserScript==

//Assign unsafeWindow to a variable
const w = unsafeWindow;

w.getCurrentGameTime = function () {
  var serverTime = $("#serverTime").html().split(":");
  var serverDate = $("#serverDate").html().split("/");
  return new Date(serverDate[2], serverDate[1] - 1, serverDate[0], serverTime[0], serverTime[1], serverTime[2], 0);
};

var botSettings = {
  botRunning: false,
};

var botVillageSettings = {
  skipVillage: false,
  mode: "useMasterButton",
};

//Language: English
var filter_01 = "LA Enhancer";
var filter_02 = "Instructions";
var filter_03 = "Created by";
var filter_04 = "Load Pages";
var filter_05 = "to";
var filter_06 = "Enable";
var filter_07 = "Hide All/None";
var filter_08 = "Scout Attack";
var filter_09 = "No losses";
var filter_10 = "Some losses";
var filter_11 = "Lost, but damaged building(s)";
var filter_12 = "Lost,but scouted";
var filter_13 = "Lost";
var filter_14 = "Order By";
var filter_15 = "Distance";
var filter_16 = "Time";
var filter_17 = "Direction";
var filter_18 = "Ascending";
var filter_19 = "Descending";
var filter_20 = "Hide Hauls";
var filter_21 = "Full";
var filter_22 = "Partial";
var filter_23 = "Hide Attacks";
var filter_24 = "Greater Than";
var filter_25 = "Less Than";
var filter_26 = "Equal To";
var filter_27 = "Hide farms sent to in the last";
var filter_28 = "minutes";
var filter_29 = "Reset";
var filter_30 = "Hide Wall Lvl";
var filter_31 = "Hide Distances";
var filter_32 = "Hide";
var filter_33 = "Show";
var filter_34 = "continent(s)";
var filter_35 = "Hide scout reports with resources";
var filter_36 = "villages plundered in the last";
var filter_37 = "minute(s)";
var filter_38 = "Run default automatically";
var filter_39 = "All rows are hidden";
var filter_40 = "Loot Assistant";
var filter_41 = "Loot Assistant - Loading page";
var filter_42 = "Language";
var filter_43 = "Go to next village when...";
var filter_44 = "Not enough units available";
var filter_45 = "scouts are remaining";
var filter_46 = "Farming troops are available";
var filter_47 = "villages sent to in the last";
var filter_48 = "minute(s)";
var filter_49 = "Hot Keys";
var filter_50 = "Master Button Settings";
var filter_51 = "Skip next farm";
var filter_52 = "Previous village";
var filter_53 = "Next village";
var filter_54 = "If row matches profile";
var filter_55 = "click";
var filter_56 = "Skip";
var filter_57 = "A";
var filter_58 = "B";
var filter_59 = "C";
var filter_60 = "If row doesn't match any profiles, click";
var filter_61 = "today"; //must be as it appears in tribalwars
var filter_62 = "yesterday"; //must be as it appears in tribalwars
var instructions_01 = "Checked report types will be hidden";
var instructions_02 = "Filters left unchecked will not be applied";
var instructions_03 = "Separate continents with a period. Example: 55.54.53";
var instructions_04 =
  'This filter will hide rows that were farmed "n" minutes ago. The default is 60 minutes. Changing the time will only affect newly farmed rows. Clicking reset will reset all the timers for each row but only the rows loaded.';
var instructions_05 = "Save and load your various settings configurations here. Changing profiles will load the selected profile. The default will load automatically when the script is run.";
var instructions_06 = "Adjust page size to 100 for faster page loading";
var dialog_01 = "Are you sure you want to reset your recently farmed villages?";
var dialog_02 = "You are already on the default profile. Would you like to create a new profile and set it to default?";
var dialog_03 = "Profile name";
var dialog_04 = "You already have a profile with that name. Please choose another name";
var dialog_05 = "Your profile name cannot be empty. Please try again.";
var dialog_06 = "You cannot delete your default profile";
var dialog_07 = "You cannot export/import the default profile. To export these settings, create a new profile, then try exporting again.";
var dialog_08 = "Copy to clipboard: Ctrl+C, Enter";
var dialog_09A = "[b]LA Enhancer: ";
var dialog_09B =
  "[/b][spoiler][i][u]Instructions[/u]: To import this profile, copy the following line of code then import the copied settings by pasting them into the prompt after clicking import on the LA Enhancer Script settings panel[/i][code]";
var dialog_09C = "[/code][/spoiler]";
var dialog_10 = "Profile Settings";
var dialog_11 = "Ctrl+V to paste here settings here";
var dialog_12 = "You already have a profile with that name.";
var dialog_13 = "Reload this script to see the new language. This page will refresh automatically.";
var profile_01 = "Settings profile";
var profile_02 = "Apply";
var profile_03 = "Reset";
var profile_04 = "New";
var profile_05 = "Set Default";
var profile_06 = "Delete";
var profile_07 = "Save Changes";
var profile_08 = "Export";
var profile_09 = "Import";
var profile_10 = "Default";

var version = "1.13.1";
var scriptName = "LA Enhancer Auto";
var scriptURL = "https://scripts.ibragonza.nl/enhancer/";
var updateNotesURL = "https://forum.tribalwars.net/index.php?threads/ntoombs19s-fa-filter.266604/page-15#post-7053294";
var working = true;
var resourcesLoaded = false;
var scriptLoaded = false;
var pagesLoaded = false;
var filtersApplied = false;
var cansend = true;
var keySetMode = false;
var hideRow = false;
var editingKey = false;
var troubleshoot = false;
var clearProfiles = false;
var reason = [];
var keyToEdit;
var current_units;
var currentGameTime = w.getCurrentGameTime();
var sitter = "";
if (w.top.game_data.player.sitter != "0") {
  sitter = "t=" + w.top.game_data.player.id + "&";
}
var link = ["https://" + w.location.host + "/game.php?" + sitter + "village=", "&screen=am_farm"];

var userset;
var s = {
  start_page: 0,
  end_page: 1,
  order_by: 2,
  direction: 3,
  all_none: 4,
  blue: 5,
  green: 6,
  yellow: 7,
  red_yellow: 8,
  red_blue: 9,
  red: 10,
  hide_recent_farms: 11,
  sent_time_filter: 12,
  hide_recent_time: 13,
  enable_hauls: 14,
  full: 15,
  partial: 16,
  enable_attacks: 17,
  attack_operator: 18,
  attack_value: 19,
  enable_walls: 20,
  wall_operator: 21,
  wall_value: 22,
  enable_distances: 23,
  distance_operator: 24,
  distance_value: 25,
  enable_scout: 26,
  scout_report_operator: 27,
  haul_value: 28,
  continent_display: 29,
  continents_list: 30,
  enable_time: 31,
  attack_time_filter: 32,
  time_value: 33,
  enable_auto_run: 34,
  next_village_no_farms: 35,
  next_village_scouts: 36,
  scouts_left: 37,
  next_village_farming_troops: 38,
  farming_troops_left: 39,
  next_village_units: 40,
};
var keycodes = {
  a: 65,
  b: 66,
  c: 67,
  skip: 83,
  right: 39,
  left: 37,
  master: 77,
};
var keyPressSettings = {
  a_code: 65,
  a_char: "A",
  b_code: 66,
  b_char: "B",
  c_code: 67,
  c_char: "C",
  master_code: 77,
  master_char: "M",
  skip_code: 83,
  skip_char: "S",
  left_code: 37,
  left_char: "Left",
  right_code: 39,
  right_char: "Right",
  priorityOneEnabled: true,
  priorityOneProfile: "Default",
  priorityOneButton: "Skip",
  priorityTwoEnabled: true,
  priorityTwoProfile: "Default",
  priorityTwoButton: "Skip",
  priorityThreeEnabled: true,
  priorityThreeProfile: "Default",
  priorityThreeButton: "Skip",
  defaultButton: "Skip",
};
var availableLangs = ["en"];

(function () {
  w.top.$.getScript("https://cdnjs.cloudflare.com/ajax/libs/jStorage/0.4.12/jstorage.min.js", function () {
    w.top.$.getScript("https://cdnjs.cloudflare.com/ajax/libs/taffydb/2.7.3/taffy-min.js", function () {
      if (w.top.$.jStorage.get("language") == null) {
        setDefaultLanguage();
      }
      w.top.$.getScript(scriptURL + "lang/" + w.top.$.jStorage.get("language") + ".js", function () {
        console.log("init");
        checkPage();
      });
    });
  });
})();

w.run = function () {
  console.log("run");
  makeItPretty();
  showSettings();
  turnOnHotkeys();
  hotkeysOnOff();
  if (userset[s.enable_auto_run] != false) {
    applySettings();
  }
};

w.showAllRows = function () {
  var pages = w.top.$.trim(w.top.$("#plunder_list_nav tr:first td:last").children().last().html().replace(/\D+/g, ""));
  if (w.top.$("#end_page").val() == "max") {
    w.top.$("#end_page").text(pages);
  }
  w.top.$("#am_widget_Farm tr:last").remove();
  if (pages > parseInt(w.top.$("#end_page").val(), 10)) {
    pages = parseInt(w.top.$("#end_page").val(), 10);
  }
  setTimeout(function () {
    getPage(parseInt(w.top.$("#start_page").val(), 10) - 1, pages);
  }, 1);
};
w.getPage = function (i, pages) {
  if (i < pages) {
    changeHeader(filter_41 + " " + (i + 1) + "/" + pages + " <img src='graphic/throbber.gif' height='24' width='24'></img>");
    var url = link[0] + w.top.game_data.village.id + "&order=" + userset[s.order_by] + "&dir=" + userset[s.direction] + "&Farm_page=" + i + "&screen=am_farm";
    w.top.$.ajax({
      type: "GET",
      url: url,
      dataType: "html",
      error: function (xhr, statusText, error) {
        console.log("Get page failed with error: " + error);
      },
      success: function (data) {
        w.top
          .$("#plunder_list tr", data)
          .slice(2)
          .each(function () {
            w.top.$("#plunder_list tr:last").after("<tr>" + w.top.$(this).html() + "</tr>");
          });
        setTimeout(function () {
          getPage(i + 1, pages);
        }, 1);
      },
    });
  } else {
    setTimeout(function () {
      addTableInfo();
      applyFilters();
      changeHeader(filter_40);
      highlightRows();
    }, 1);
    w.top.$("#plunder_list").show();
    w.top.Accountmanager.initTooltips();
    pagesLoaded = true;
    cansend = true;
  }
};
w.changeHeader = function (string) {
  w.top.$("h3:first").html(string);
};
w.highlightRows = function () {
  w.top.$("#am_widget_Farm table").each(function () {
    w.top.$("tr:even:gt(0) td", this).not("table:first").css("backgroundColor", "#FFF5DA");
    w.top.$("tr:odd:gt(0) td", this).not("table:first").css("backgroundColor", "#F0E2BE");
  });
};
w.getNewVillage = function (way) {
  if (way == "n") w.top.UI.InfoMessage("Switching to next village...", 500);
  else w.top.UI.InfoMessage("Switching to previous village...", 500);
  w.onkeydown = function () {};
  cansend = false;
  filtersApplied = false;
  Timing.pause();
  fadeThanksToCheese();
  openLoader();
  var vlink = link[0] + way + w.top.game_data.village.id + link[1];
  w.top.$.ajax({
    type: "GET",
    url: vlink,
    dataType: "html",
    error: function (xhr, statusText) {
      alert("Error: " + statusText);
      w.top.$("#fader").remove();
      w.top.$("#loaders").remove();
    },
    success: function (data) {
      var v = w.top.$(data);
      var titlePat = /<\s*title\s*>([^<]+)<\/title\s*>/g;
      var titleMatch = titlePat.exec(data);
      var title = titleMatch[1];
      var newGameData = w.top.$.parseJSON(data.split("TribalWars.updateGameData(")[1].split(");")[0]);
      w.top.game_data = newGameData;
      if (typeof history !== "undefined" && typeof history.pushState === "function") {
        history.pushState({}, w.top.game_data.village.name + " - Loot Assistant", "https://" + w.top.location.host + game_data.link_base_pure + "am_farm");
      }
      w.top.$("#header_info").html(w.top.$("#header_info", v).html());
      w.top.$("#topContainer").html(w.top.$("#topContainer", v).html());
      w.top.$("#contentContainer").html(w.top.$("#contentContainer", v).html());
      w.top.$("#quickbar_inner").html(w.top.$("#quickbar_inner", v).html());
      w.top.$("head").find("title").html(title);
      w.top.$("#fader").remove();
      w.top.$("#loaders").remove();
      Timing.resetTickHandlers();
      Timing.pause();
      pagesLoaded = false;
      cansend = false;
      run();
    },
  });
};
w.showSettings = function () {
  w.top.$("head").append("<link type='text/css' rel='stylesheet' href='" + scriptURL + "css/style.css' />");
  w.top
    .$("#contentContainer h3")
    .eq(0)
    .after(
      w.top.$(
        "<div class='vis'id='settingsDiv'><table class='settingsTable'><thead><tr><th colspan='5'class='vis'style='padding:0px;'><h4> " +
          scriptName +
          "<div class='vis'style='float:right;text-align:center;line-height:100%;width:12px;height:12px;margin:0px 0px 0px 0px;position:relative;background-color:tan;opacity:.7'><a href='#'num='2'onclick='uglyHider(window.top.$(this));return false;'>-</a></div></span></h4></th></tr></thead><tbody id='settingsBody'><tr><td class='col1'style='min-width:200px'><span>" +
          filter_04 +
          "</span>&nbsp;<input type='text'value=''size='2'maxlength='3'id='start_page'>&nbsp;<span>" +
          filter_05 +
          "</span>&nbsp;<input type='text'value=''size='2'maxlength='3'id='end_page'></td><td colspan='3'><span style='font-weight:bold'>" +
          filter_06 +
          "</span>&nbsp;<img src='graphic/questionmark.png'width='13'height='13'id='enable_help'></td><td rowspan='5'valign='top'><form><input type='checkbox'id='all_none'>&nbsp;<label for='all_none'style='font-weight:bold'>" +
          filter_07 +
          "</label>&nbsp;<img src='graphic/questionmark.png'width='13'height='13'id='report_help'><br><input type='checkbox'id='blue'><label for='blue'><img src='graphic/dots/blue.png'>&nbsp;" +
          filter_08 +
          "</label><br><input type='checkbox'id='green'><label for='green'><img src='graphic/dots/green.png'>&nbsp;" +
          filter_09 +
          "</label><br><input type='checkbox'id='yellow'><label for='yellow'><img src='graphic/dots/yellow.png'>&nbsp;" +
          filter_10 +
          "</label><br><input type='checkbox'id='red_yellow'><label for='red_yellow'><img src='graphic/dots/red_yellow.png'>&nbsp;" +
          filter_11 +
          "</label><br><input type='checkbox'id='red_blue'><label for='red_blue'><img src='graphic/dots/red_blue.png'>&nbsp;" +
          filter_12 +
          "</label><br><input type='checkbox'id='red'><label for='red'><img src='graphic/dots/red.png'>&nbsp;" +
          filter_13 +
          "</label></form></td></tr><tr><td rowspan='2'><label for='order_by'>" +
          filter_14 +
          ":</label>&nbsp;<select id='order_by'val='distance'><option value='distance'>" +
          filter_15 +
          "</option><option value='date'>" +
          filter_16 +
          "</option></select><br><label for='direction'>" +
          filter_17 +
          ":</label>&nbsp;<select id='direction'val='desc'><option value='asc'>" +
          filter_18 +
          "</option><option value='desc'>" +
          filter_19 +
          "</option></select></td><td style='width:26px'><input type='checkbox'id='enable_hauls'></td><td style='width:110px'><label for='enable_hauls'>" +
          filter_20 +
          "</label></td><td><input type='radio'name='hauls'id='full'><label for='full'><img src='graphic/max_loot/1.png'>" +
          filter_21 +
          "</label>&nbsp;<input type='radio'name='hauls'id='partial'><label for='partial'><img src='graphic/max_loot/0.png'>" +
          filter_22 +
          "</label></td></tr><tr><td><input type='checkbox'id='enable_attacks'></td><td><label for='enable_attacks'>" +
          filter_23 +
          "</label></td><td><select id='attack_operator'><option value='greater_than'>" +
          filter_24 +
          "</option><option value='less_than'>" +
          filter_25 +
          "</option><option value='equal_to'>" +
          filter_26 +
          "</option></select>&nbsp;<input type='text'id='attack_value'size='2'maxlength='2'value=''></td></tr><tr><td rowspan='1'><span style='font-weight:bold;'>" +
          filter_43 +
          "</span></td><td><input type='checkbox'id='enable_walls'></td><td><label for='enable_walls'>" +
          filter_30 +
          "</label></td><td><select id='wall_operator'><option value='greater_than'>" +
          filter_24 +
          "</option><option value='less_than'>" +
          filter_25 +
          "</option><option value='equal_to'>" +
          filter_26 +
          "</option></select>&nbsp;<input type='text'id='wall_value'size='2'maxlength='2'value=''></td></tr><tr><td><input type='checkbox'id='next_village_no_farms'><label for='next_village_no_farms'>" +
          filter_39 +
          "</label></td><td><input type='checkbox'id='enable_distances'></td><td><label for='enable_distances'>" +
          filter_31 +
          "</label></td><td><select id='distance_operator'val='greater_than'><option value='greater_than'>" +
          filter_24 +
          "</option><option value='less_than'>" +
          filter_25 +
          "</option><option value='equal_to'>" +
          filter_26 +
          "</option></select>&nbsp;<input type='text'id='distance_value'size='2'maxlength='2'value=''></td></tr><tr><td><input type='checkbox' id='next_village_units' />" +
          filter_44 +
          "</td><td><input type='checkbox' id='enable_continents' /><td colspan='3'><select id='continent_display'><option value='hide'>" +
          filter_32 +
          "</option><option value='show'>" +
          filter_33 +
          "</option></select>&nbsp;<label for='continents_list'>" +
          filter_34 +
          "</label>&nbsp;<input type='text'size='2'maxlength='150'id='continents_list'value=''>&nbsp;<img src='graphic/questionmark.png'height='13'id='continent_help'></td></tr><tr><td><input type='checkbox' id='next_village_scouts' /><input type='text' size='2' id='scouts_left' /> " +
          filter_45 +
          "</td><td><input type='checkbox'id='enable_scout'></td><td colspan='3'><label for='enable_scout'>" +
          filter_35 +
          "</label>&nbsp;<select id='scout_report_operator'val='greater_than'><option value='greater_than'>" +
          filter_24 +
          "</option><option value='less_than'>" +
          filter_25 +
          "</option><option value='equal_to'>" +
          filter_26 +
          "</option></select>&nbsp;<input type='text'id='haul_value'size='9'maxlength='7'value=''></td></tr><tr><td><input type='checkbox' id='next_village_farming_troops' /><input type='text' size='2' id='farming_troops_left' /> " +
          filter_46 +
          "</td><td><input type='checkbox'id='enable_time'></td><td colspan='3'><select id='attack_time_filter'val='hide'><option value='hide'>" +
          filter_32 +
          "</option><option value='show'>" +
          filter_33 +
          "</option></select>&nbsp;<label for='enable_time'>" +
          filter_36 +
          "</label>&nbsp;<input type='text'id='time_value'size='2'maxlength='4'value=''><span>" +
          filter_37 +
          "</span></td></tr><tr><td><input type='checkbox'id='enable_auto_run'><label for='enable_autoRun'>" +
          filter_38 +
          "</label></td><td><input type='checkbox' id='hide_recent_farms' /></td><td colspan='3'><select id='sent_time_filter'val='hide'><option value='hide'>" +
          filter_32 +
          "</option><option value='show'>" +
          filter_33 +
          "</option></select>&nbsp;" +
          filter_47 +
          " <input type='text' size='2' id='hide_recent_time' /> " +
          filter_48 +
          "</td></tr><tr><th>" +
          filter_49 +
          "</th><th colspan='4'>" +
          filter_50 +
          "</th></tr><tr><td rowspan='4'><table><tr class='hotkey_values'><td><a href='#'onclick='return setKeyEditMode(\"A\")'id='button_a'class='farm_icon farm_icon_a'></a></td><td><a href='#'onclick='return setKeyEditMode(\"B\")'id='button_b'class='farm_icon farm_icon_b'></a></td><td><a href='#'onclick='return setKeyEditMode(\"C\")'id='button_c'class='farm_icon farm_icon_c'></a></td><td><a href='#'onclick='return setKeyEditMode(\"Master\")'id='button_master'class='farm_icon farm_icon_m'></a></td></tr><tr class='hotkey_values'><td><input type='text'class='hotkey_value' READONLY id='hotkey_value_a'value='A'></td><td><input type='text'class='hotkey_value' READONLY id='hotkey_value_b'value='B'></td><td><input type='text'class='hotkey_value' READONLY id='hotkey_value_c'value='C'></td><td><input type='text'class='hotkey_value' READONLY id='hotkey_value_master'value='M'></td></tr><tr class='hotkey_values'><td colspan='2'><input class='btn tooltip'onclick='return setKeyEditMode(\"Skip\")'type='button'value='Skip'style='margin:0px 0px 0px 0px'title='" +
          filter_51 +
          "'></td><td><input class='btn tooltip'onclick='return setKeyEditMode(\"Left\")'type='button'value='Left'style='margin:0px 0px 0px 0px'title='" +
          filter_52 +
          "'></td><td><input class='btn tooltip'type='button'onclick='return setKeyEditMode(\"Right\")'value='Right'style='margin:0px 0px 0px 0px'title='" +
          filter_53 +
          "'></td></tr><tr class='hotkey_values'><td colspan='2'><input type='text'class='hotkey_value' READONLY id='hotkey_value_skip'value='S'></td><td><input type='text'class='hotkey_value' READONLY id='hotkey_value_left'value='&#8592;'></td><td><input type='text'class='hotkey_value' READONLY id='hotkey_value_right'value='&#8594;'></td></tr></table></td><td><input type='checkbox' onchange='return updateKeypressSettings();' id='priorityOneEnabled'/></td><td colspan='3'>" +
          filter_54 +
          " <select id='priorityOneProfile' onchange='return updateKeypressSettings();'></select> " +
          filter_55 +
          " <select id='priorityOneButton' onchange='return updateKeypressSettings();'><option val='" +
          filter_56 +
          "'>" +
          filter_56 +
          "</option><option val='" +
          filter_57 +
          "'>" +
          filter_57 +
          "</option><option val='" +
          filter_58 +
          "'>" +
          filter_58 +
          "</option><option val='" +
          filter_59 +
          "'>" +
          filter_59 +
          "</option></select></td></tr><tr><td><input type='checkbox' onchange='return updateKeypressSettings();' id='priorityTwoEnabled'/></td><td colspan='3'>" +
          filter_54 +
          " <select id='priorityTwoProfile' onchange='return updateKeypressSettings();'></select> " +
          filter_55 +
          " <select id='priorityTwoButton' onchange='return updateKeypressSettings();'><option val='" +
          filter_56 +
          "'>" +
          filter_56 +
          "</option><option val='" +
          filter_57 +
          "'>" +
          filter_57 +
          "</option><option val='" +
          filter_58 +
          "'>" +
          filter_58 +
          "</option><option val='" +
          filter_59 +
          "'>" +
          filter_59 +
          "</option></select></td></tr><tr><td><input type='checkbox' onchange='return updateKeypressSettings();' id='priorityThreeEnabled'/></td><td colspan='3'>" +
          filter_54 +
          " <select id='priorityThreeProfile' onchange='return updateKeypressSettings();'></select> " +
          filter_55 +
          " <select id='priorityThreeButton' onchange='return updateKeypressSettings();'><option val='" +
          filter_56 +
          "'>" +
          filter_56 +
          "</option><option val='" +
          filter_57 +
          "'>" +
          filter_57 +
          "</option><option val='" +
          filter_58 +
          "'>" +
          filter_58 +
          "</option><option val='" +
          filter_59 +
          "'>" +
          filter_59 +
          "</option></select></td></tr><tr><td colspan='4'>" +
          filter_60 +
          " <select id='defaultButton' onchange='return updateKeypressSettings();'><option val='" +
          filter_56 +
          "'>" +
          filter_56 +
          "</option><option val='" +
          filter_57 +
          "'>" +
          filter_57 +
          "</option><option val='" +
          filter_58 +
          "'>" +
          filter_58 +
          "</option><option val='" +
          filter_59 +
          "'>" +
          filter_59 +
          "</option></select></td></tr><tr><td colspan='5'><div style='float:left'><input type='submit'value='" +
          profile_02 +
          "'onclick='applySettings()'>&nbsp;<input type='submit'value='" +
          profile_03 +
          "'onclick='resetTable()'></div><div style='float:right'><img src='graphic/questionmark.png'width='13'height='13'id='profile_help'>&nbsp;<label for='settingsProfile'>" +
          profile_01 +
          ":</label>&nbsp;<select id='settingsProfile'onchange='changeProfile(window.top.$(&quot;#settingsProfile&quot;).val())'></select>&nbsp;<input type='submit'value='" +
          profile_04 +
          "'onclick='createProfile()'>&nbsp;<input type='submit'value='" +
          profile_05 +
          "'onclick='setDefaultProfile()'>&nbsp;<input type='submit'value='" +
          profile_06 +
          "'onclick='deleteProfile()'>&nbsp;<input type='submit'value='" +
          profile_07 +
          "'onclick='updateProfile()'>&nbsp;<input type='submit'value='" +
          profile_08 +
          "'onclick='exportProfile()'>&nbsp;<input type='submit'value='" +
          profile_09 +
          "'onclick='importProfile()'></div></td></tr>" +
          "<tr><th colspan='3'>Global Bot Settings</th><th colspan='3'>Village Bot Settings</th></tr>" +
          "<tr><td colspan='3'><input type='checkbox' onchange='return updateBotSettings();' id='botRunning'/> On/Off </td><td colspan='3'>" +
          "<input type='checkbox' onchange='return updateBotVillageSettings();' id='botSkipVillage'/> Skip this village </td></tr>" +
          "<tr><td colspan='3'></td><td colspan='3'>Choose which button will be pressed <select id='botVillageMode' onchange='return updateBotVillageSettings();'>" +
          "<option val='useOnlyA' >useOnlyA</option>" +
          "<option val='useOnlyB' >useOnlyB</option>" +
          "<option val='useAforFullAndBforHalf' >useAforFullAndBforHalf</option>" +
          "<option val='useMasterButton' >Use Master Button Settings</option>" +
          "</select>" +
          "</td></tr>" +
          "</tbody ></table ></div > "
      )
    );
  formatSettings();
  addLanguages();
  w.top.$("#language option[value='" + w.top.$.jStorage.get("language") + "']").attr("selected", "selected");
};
w.formatSettings = function () {
  w.top.$("#all_none").bind("click", function () {
    w.top.$(this).closest("form").find(":checkbox").prop("checked", this.checked);
  });
  var reportHelp = w.top.$("#report_help");
  reportHelp.attr("title", instructions_01);
  w.top.UI.ToolTip(reportHelp);
  var enableHelp = w.top.$("#enable_help");
  enableHelp.attr("title", instructions_02);
  w.top.UI.ToolTip(enableHelp);
  var continentHelp = w.top.$("#continent_help");
  continentHelp.attr("title", instructions_03);
  w.top.UI.ToolTip(continentHelp);
  var recentHelp = w.top.$("#recent_help");
  recentHelp.attr("title", instructions_04);
  w.top.UI.ToolTip(recentHelp);
  var profileHelp = w.top.$("#profile_help");
  profileHelp.attr("title", instructions_05);
  w.top.UI.ToolTip(profileHelp);
  loadDefaultProfile();
  fillProfileList();
  fillMasterSettings();
  fillKeypressSettings();
  this.fillBotSettings();
  this.fillBotVillageSettings();
};
w.removeFirstPage = function () {
  w.top.$("#plunder_list tr:gt(0)").remove();
  w.top.$("#plunder_list_nav").hide();
};
w.customSendUnits = function (link, target_village, template_id, button) {
  if (!checkIfNextVillage()) {
    button.closest("tr").hide();
    link = w.top.$(link);
    if (link.hasClass("farm_icon_disabled")) return false;
    var data = {
      target: target_village,
      template_id: template_id,
      source: w.top.game_data.village.id,
    };
    w.top.$.post(
      w.top.Accountmanager.send_units_link,
      data,
      function (data) {
        if (data.error) {
          if (userset[s.next_village_units] && data.error === "Not enough units available") {
            if (cansend && filtersApplied) getNewVillage("n");
            return false;
          } else {
            w.top.UI.ErrorMessage(data.error);
            button.closest("tr").show();
          }
        } else {
          setLocalStorageRow(target_village);
          if (typeof w.top.$(button).prop("tooltipText") != "undefined") {
            var buttext = w.top.$(button).prop("tooltipText");
          }
          var yolo = w.top.$("<div></div>").append(w.top.$(buttext));
          var bolo = w.top.$(yolo).find('img[src*="res.png"]').eq(0).attr("src");
          var sep1 = buttext.split(/<br\s*?\/?>/gi);
          sep1.splice(sep1.length - 2, 1);
          w.top.UI.SuccessMessage(sep1.join(" "), 100);
          w.top.Accountmanager.farm.updateOwnUnitsAvailable(data.current_units);
        }
      },
      "json"
    );
    return false;
  }
};
w.customSendUnitsFromReport = function (link, target_village, report_id, button) {
  if (!checkIfNextVillage()) {
    button.closest("tr").hide();
    link = w.top.$(link);
    if (link.hasClass("farm_icon_disabled")) return false;
    var data = { report_id: report_id };
    w.top.$.post(
      w.top.Accountmanager.send_units_link_from_report,
      data,
      function (data) {
        if (data.error) {
          if (userset[s.next_village_units] && data.error === "Not enough units available") {
            if (cansend && filtersApplied) getNewVillage("n");
            return false;
          } else {
            w.top.UI.ErrorMessage(data.error);
            button.closest("tr").show();
          }
        } else {
          setLocalStorageRow(target_village);
          if (typeof data.success === "string") {
            if (typeof w.top.$(button).prop("tooltipText") != "undefined") {
              var buttext = w.top.$(button).prop("tooltipText");
            }
            var yolo = w.top.$("<div></div>").append(w.top.$(buttext));
            var bolo = w.top.$(yolo).find('img[src*="res.png"]').eq(0).attr("src");
            var sep1 = buttext.split(/<br\s*?\/?>/gi);
            sep1.splice(sep1.length - 2, 1);
            w.top.UI.SuccessMessage(sep1.join(" "), 100);
            w.top.Accountmanager.farm.updateOwnUnitsAvailable(data.current_units);
          }
        }
      },
      "json"
    );
    return false;
  }
};
w.setOnclick = function (button) {
  var clickFunction = button.find("a").attr("onclick");
  if (typeof clickFunction != "undefined") {
    var parameters = clickFunction.slice(clickFunction.indexOf("(") + 1, clickFunction.indexOf(")"));
    var eachParameter = parameters.split(",");
    if (clickFunction.indexOf("FromReport") == -1) {
      button.find("a").attr("onclick", "return customSendUnits(" + parameters + ", window.top.$(this))");
    } else {
      button.find("a").attr("onclick", "return customSendUnitsFromReport(" + parameters + "))");
    }
    button.closest("tr").attr("name", w.top.$.trim(eachParameter[1]));
  }
};
w.addTableInfo = function () {
  w.top.$("#am_widget_Farm tr th").slice(0, 1).after("<th></th>");
  w.top.$("#am_widget_Farm tr:not(:first-child)").each(function (i) {
    w.top
      .$(this)
      .children("td")
      .each(function (j) {
        switch (j) {
          case 1:
            w.top
              .$(this)
              .filter(":first")
              .before("<td style='width:10px;font-weight:bold;' id='rowNum'>" + (i + 1) + "</td>");
            break;
          case 3:
            var attackImg = w.top.$(this).find("img");
            var tooltip = w.top.$(this).find("img").prop("tooltipText");
            if (typeof tooltip != "undefined") {
              var numAttacks = tooltip.replace(/\D/g, "");
              attackImg.after("<span style='font-weight:bold;'> (" + numAttacks + ")</span>");
            }
            break;
          case 8:
            setOnclick(w.top.$(this));
            break;
          case 9:
            setOnclick(w.top.$(this));
            break;
          case 10:
            setOnclick(w.top.$(this));
            break;
        }
      });
  });
};
w.checkIfNextVillage = function () {
  current_units = w.top.Accountmanager.farm.current_units;
  if (userset[s.next_village_scouts]) {
    var scouts = current_units.spy;
    if (scouts <= parseInt(userset[s.scouts_left])) {
      getNewVillage("n");
      return true;
    }
  }
  if (userset[s.next_village_farming_troops]) {
    var totalTroops = 0;
    w.top.$(".fm_unit input:checked").each(function (i) {
      var unitName = w.top.$(this).attr("name");
      totalTroops += parseInt(current_units[unitName]);
    });
    if (totalTroops <= parseInt(userset[s.farming_troops_left])) {
      getNewVillage("n");
      return true;
    }
  }
  if (userset[s.next_village_no_farms]) {
    if (w.top.$("#plunder_list tr:not(:first-child):visible").length == 0) {
      getNewVillage("n");
      return true;
    }
  }
};
w.applySettings = function () {
  if (!pagesLoaded) {
    setTimeout(showAllRows(), 1);
    removeFirstPage();
  } else {
    applyFilters();
  }
};
w.applyFilters = function () {
  w.top.$("#am_widget_Farm tr:gt(0)").each(function (i) {
    hideRow = checkRowToHide(w.top.$(this), userset);
    if (hideRow) {
      w.top.$(this).hide();
    }
  });
  changeHeader(filter_40);
  var topContainer = 0;
  if (w.top.$("#topContainer").css("position") == "fixed") {
    topContainer = w.top.$("#topContainer").height();
  }
  if (w.top.$('*:contains("Bot Protection")').length) {
    w.top.$("html, body").animate(
      {
        scrollTop: w.top.$('*:contains("Bot Protection")').offset().top - topContainer,
      },
      500
    );
    if (typeof showNotification === "function") {
      showNotification("custom", ["LA Enhancer has encountered bot protection. Please respond to captcha to continue farming."], null, "Bot Protection");
    }
    cansend = false;
  } else {
    w.top.$("html, body").animate(
      {
        scrollTop: w.top.$("#farm_units").offset().top - topContainer,
      },
      500
    );
  }
  filtersApplied = true;
};
w.checkRowToHide = function (row, profileArray) {
  hideRow = false;
  row.children("td").each(function (cell) {
    switch (cell) {
      case 2:
        reportSettings(w.top.$(this), profileArray);
        break;
      case 3:
        haulSettings(w.top.$(this), profileArray);
        break;
      case 4:
        hideRecentlyFarmed(w.top.$(this), profileArray);
        attackSettings(w.top.$(this), profileArray);
        continentSettings(w.top.$(this), profileArray);
        break;
      case 5:
        hideTime(w.top.$(this), profileArray);
        break;
      case 6:
        scoutReportSettings(w.top.$(this), profileArray);
        break;
      case 7:
        wallSettings(w.top.$(this), profileArray);
        break;
      case 8:
        distanceSettings(w.top.$(this), profileArray);
        break;
    }
  });
  if (hideRow) {
    if (troubleshoot) console.log(row.find("#rowNum").html() + ": (" + reason.join(",") + ")");
    reason = [];
    return true;
  }
  return false;
};
w.resetTable = function () {
  w.top.$("#plunder_list tr").each(function (i) {
    w.top.$(this).show();
  });
};
w.setLocalStorageRow = function (village) {
  var localTitle = "sitter:" + sitter + ", village:" + village + ", world:" + getURL()[0];
  w.top.$.jStorage.set(localTitle, getCurrentGameTime());
};
w.reportSettings = function (cell, profileArray) {
  if (cell.html().indexOf("blue") >= 0 && profileArray[s.blue]) {
    reason.push("Report is blue");
    hideRow = true;
    return;
  }
  if (cell.html().indexOf("green") >= 0 && profileArray[s.green]) {
    reason.push("Report is green");
    hideRow = true;
    return;
  }
  if (cell.html().indexOf("yellow") >= 0 && profileArray[s.yellow]) {
    reason.push("Report is yellow");
    hideRow = true;
    return;
  }
  if (cell.html().indexOf("red_yellow") >= 0 && profileArray[s.red_yellow]) {
    reason.push("Report is red_yellow");
    hideRow = true;
    return;
  }
  if (cell.html().indexOf("red_blue") >= 0 && profileArray[s.red_blue]) {
    reason.push("Report is red_blue");
    hideRow = true;
    return;
  }
  if (cell.html().indexOf("red") >= 0 && profileArray[s.red]) {
    reason.push("Report is red");
    hideRow = true;
    return;
  }
};
w.haulSettings = function (cell, profileArray) {
  if (profileArray[s.enable_hauls]) {
    if (cell.html().indexOf("max_loot/1") >= 0 && profileArray[s.full]) {
      reason.push("Haul is full");
      hideRow = true;
      return;
    }
    if (cell.html().indexOf("max_loot/0") >= 0 && profileArray[s.partial]) {
      reason.push("Haul is partial");
      hideRow = true;
      return;
    }
    if (cell.html().indexOf("max_loot") == -1 && profileArray[s.full]) {
      reason.push("No haul graphic");
      hideRow = true;
      return;
    }
  }
};
w.hideRecentlyFarmed = function (cell, profileArray) {
  if (profileArray[s.hide_recent_farms]) {
    var village = cell.closest("tr").attr("name");
    localTitle = "sitter:" + sitter + ", village:" + village + ", world:" + getURL()[0];
    var sentTime = new Date(w.top.$.jStorage.get(localTitle));
    var t1 = currentGameTime;
    var t2 = sentTime;
    var dif = t1.getTime() - t2.getTime();
    var minutesBetween = Math.abs(parseInt(dif / 1000 / 60));
    switch (profileArray[s.sent_time_filter]) {
      case "hide":
        if (minutesBetween < parseInt(profileArray[s.hide_recent_time])) {
          reason.push("Village was recently sent to " + minutesBetween + " minutes ago");
          hideRow = true;
          return;
        }
        break;
      case "show":
        if (minutesBetween > parseInt(profileArray[s.hide_recent_time])) {
          reason.push("Village was not recently sent to");
          hideRow = true;
          return;
        }
        break;
    }
  }
};
w.attackSettings = function (cell, profileArray) {
  var numAttacks;
  var attackImg = cell.find("img");
  if (typeof attackImg.prop("tooltipText") != "undefined") {
    numAttacks = parseInt(attackImg.prop("tooltipText").replace(/\D/g, ""));
  } else {
    numAttacks = 0;
  }
  if (profileArray[s.enable_attacks]) {
    switch (profileArray[s.attack_operator]) {
      case "greater_than":
        if (numAttacks > parseInt(profileArray[s.attack_value])) {
          reason.push("Outgoing attacks is too many");
          hideRow = true;
          return;
        }
        break;
      case "less_than":
        if (numAttacks < parseInt(profileArray[s.attack_value])) {
          reason.push("Outgoing attacks is too few");
          hideRow = true;
          return;
        }
        break;
      case "equal_to":
        if (numAttacks == parseInt(profileArray[s.attack_value])) {
          reason.push("Outgoing attacks is equal");
          hideRow = true;
          return;
        }
        break;
    }
  }
};
w.continentSettings = function (cell, profileArray) {
  var continent = cell.find("a").html();
  if (typeof continent != "undefined") {
    continent = continent.substr(continent.length - 2);
    var filteredContinents = profileArray[s.continents_list].split(".");
    if (w.top.$.inArray(continent, filteredContinents) >= 0 && profileArray[s.continent_display] == "hide") {
      reason.push("Continent is set to hide");
      hideRow = true;
      return;
    }
    if (w.top.$.inArray(continent, filteredContinents) == -1 && profileArray[s.continent_display] == "show") {
      reason.push("Continent is not set to show");
      hideRow = true;
      return;
    }
  }
};
w.hideTime = function (cell, profileArray) {
  if (profileArray[s.enable_time]) {
    var t1 = currentGameTime;
    var t2 = getVillageAttackedTime(cell);
    var dif = t1.getTime() - t2.getTime();
    var minutesBetween = Math.abs(parseInt(dif / 1000 / 60));
    switch (profileArray[s.attack_time_filter]) {
      case "hide":
        if (minutesBetween < parseInt(profileArray[s.time_value])) {
          reason.push("Village attacked " + minutesBetween + " minutes ago.");
          hideRow = true;
          return;
        }
        break;
      case "show":
        if (minutesBetween > parseInt(profileArray[s.time_value])) {
          reason.push("Village attacked " + minutesBetween + " minutes ago.");
          hideRow = true;
          return;
        }
        break;
    }
  }
};
w.scoutReportSettings = function (cell, profileArray) {
  var total;
  if (profileArray[s.enable_scout]) {
    if (w.top.$.trim(cell.find("span").html()) == "?") {
      total = 0;
    } else {
      var wood = parseInt(cell.children("span").eq(0).html().replace(/\D+/g, ""));
      var clay = parseInt(cell.children("span").eq(1).html().replace(/\D+/g, ""));
      var iron = parseInt(cell.children("span").eq(2).html().replace(/\D+/g, ""));
      total = wood + clay + iron;
    }
    switch (profileArray[s.scout_report_operator]) {
      case "greater_than":
        if (total > parseInt(profileArray[s.haul_value])) {
          reason.push("Too many resources");
          hideRow = true;
          return;
        }
        break;
      case "less_than":
        if (total < parseInt(profileArray[s.haul_value])) {
          reason.push("Not enough resources");
          hideRow = true;
          return;
        }
        break;
      case "equal_to":
        if (total == parseInt(profileArray[s.haul_value])) {
          reason.push("Exact resources");
          hideRow = true;
          return;
        }
        break;
    }
  }
};
w.wallSettings = function (cell, profileArray) {
  if (profileArray[s.enable_walls]) {
    var wallLvl = parseInt(cell.html());
    if (wallLvl == "?") {
      wallLvl = 0;
    }
    switch (w.top.$.trim(profileArray[s.wall_operator])) {
      case "greater_than":
        if (wallLvl > parseInt(profileArray[s.wall_value])) {
          reason.push("Wall too high");
          hideRow = true;
          return;
        }
        break;
      case "less_than":
        if (wallLvl < parseInt(profileArray[s.wall_value])) {
          reason.push("Wall too low");
          hideRow = true;
          return;
        }
        break;
      case "equal_to":
        if (wallLvl == parseInt(profileArray[s.wall_value])) {
          reason.push("Wall is exact");
          hideRow = true;
          return;
        }
        break;
    }
  }
};
w.distanceSettings = function (cell, profileArray) {
  if (profileArray[s.enable_distances]) {
    var distanceLvl = cell.html();
    switch (w.top.$.trim(profileArray[s.distance_operator])) {
      case "greater_than":
        if (parseFloat(distanceLvl) > parseFloat(profileArray[s.distance_value])) {
          reason.push("Village too far");
          hideRow = true;
          return;
        }
        break;
      case "less_than":
        if (parseFloat(distanceLvl) < parseFloat(profileArray[s.distance_value])) {
          reason.push("Village too close");
          hideRow = true;
          return;
        }
        break;
      case "equal_to":
        if (parseFloat(distanceLvl) == parseFloat(profileArray[s.distance_value])) {
          reason.push("Village exact distance");
          hideRow = true;
          return;
        }
        break;
    }
  }
};
w.deleteRecentlyFarmed = function () {
  w.top.$("#am_widget_Farm tr:gt(0)").each(function (i) {
    w.top
      .$(this)
      .children("td")
      .each(function (j) {
        if (j == 4) {
          reportLinkText = w.top.$.trim(w.top.$(this).children("a").html());
          localTitle = "sitter:" + sitter + ", village:" + reportLinkText + ", world:" + getURL()[0];
          if (w.top.$.jStorage.get(localTitle) != null) {
            w.top.$.jStorage.deleteKey(localTitle);
          }
        }
      });
  });
};

w.getVillageAttackedTime = function (cell) {
  var time = cell.html();
  var cellTime = time.split(" ");
  var attackDay;
  var attackTime;
  var cell;
  for (var i = 0; i < cellTime.length; i++) {
    cell = w.top.$.trim(cellTime[i]);
    if (cell.indexOf(".") > -1) {
      attackDay = cell;
    } else if (cell == filter_61) {
      attackDay = filter_61;
    } else if (cell == filter_62) {
      attackDay = filter_62;
    }
    if (cell.indexOf(":") > -1) {
      attackTime = cell;
    }
  }
  if (attackDay == filter_61 || attackDay == filter_62) {
    var day = currentGameTime.getDate();
    if (attackDay == filter_62) day--;
    var month = currentGameTime.getMonth();
    var year = currentGameTime.getFullYear();
    var time = attackTime.split(":");
    var hours = time[0];
    var minutes = time[1];
    var seconds = time[2];
    return new Date(year, month, day, hours, minutes, seconds, 0);
  } else {
    var cellDay = attackDay.split(".");
    var day = cellDay[0];
    var month = cellDay[1] - 1;
    if (currentGameTime.getMonth() == 0 && month == 11) var year = currentGameTime.getFullYear() - 1;
    else var year = currentGameTime.getFullYear();
    var time = attackTime.split(":");
    var hours = time[0];
    var minutes = time[1];
    var seconds = time[2];
    return new Date(year, month, day, hours, minutes, seconds, 0);
  }
};
w.loadDefaultProfile = function () {
  if (w.top.$.jStorage.get("profile:" + profile_10) == null) {
    w.top.$.jStorage.set("profile:" + profile_10, [
      "1",
      "1",
      "distance",
      "asc",
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      "hide",
      "",
      false,
      false,
      false,
      false,
      "greater_than",
      "",
      false,
      "greater_than",
      "",
      false,
      "greater_than",
      "",
      false,
      "greater_than",
      "",
      "hide",
      "",
      false,
      "hide",
      "",
      false,
      false,
      false,
      "",
      false,
      "",
      false,
    ]);
    w.top.$.jStorage.deleteKey("profileList");
    w.top.$.jStorage.set("profileList", [profile_10]);
  }
  userset = w.top.$.jStorage.get("profile:" + profile_10);
  loadProfile(profile_10);
  w.top.$("#settingsProfile").val(profile_10);
};
w.setDefaultProfile = function () {
  if (w.top.$("#settingsProfile").val() == profile_10) {
    var newProfile = confirm(dialog_02);
    if (newProfile) {
      createProfile();
      setDefaultProfile();
    } else {
      return false;
    }
  } else {
    var profile = w.top.$.jStorage.get("profile:" + w.top.$("#settingsProfile").val());
    w.top.$.jStorage.set("profile:" + profile_10, profile);
  }
};
w.fillProfileList = function () {
  var profileList = w.top.$.jStorage.get("profileList");
  w.top.$.each(profileList, function (i, val) {
    w.top.$("#settingsProfile").append("<option value='" + val + "'>" + val + "</option>");
  });
  w.top.$("#settingsProfile").val(w.top.$.jStorage.get("DefaultProfile"));
};
w.createProfile = function () {
  var profileName = prompt(dialog_03 + ":");
  if (w.top.$.inArray(profileName, w.top.$.jStorage.get("profileList")) != -1) {
    alert(dialog_04);
    createProfile();
    return false;
  }
  if (profileName == "") {
    alert(dialog_05);
    createProfile();
    return false;
  }
  var profiles;
  if (profileName != null && profileName != "") {
    var settings = [];
    settings.push(w.top.$("#start_page").val());
    settings.push(w.top.$("#end_page").val());
    settings.push(w.top.$("#order_by").val());
    settings.push(w.top.$("#direction").val());
    settings.push(w.top.$("#all_none").prop("checked"));
    settings.push(w.top.$("#blue").prop("checked"));
    settings.push(w.top.$("#green").prop("checked"));
    settings.push(w.top.$("#yellow").prop("checked"));
    settings.push(w.top.$("#red_yellow").prop("checked"));
    settings.push(w.top.$("#red_blue").prop("checked"));
    settings.push(w.top.$("#red").prop("checked"));
    settings.push(w.top.$("#hide_recent_farms").prop("checked"));
    settings.push(w.top.$("#sent_time_filter").val());
    settings.push(w.top.$("#hide_recent_time").val());
    settings.push(w.top.$("#enable_hauls").prop("checked"));
    settings.push(w.top.$("#full").prop("checked"));
    settings.push(w.top.$("#partial").prop("checked"));
    settings.push(w.top.$("#enable_attacks").prop("checked"));
    settings.push(w.top.$("#attack_operator").val());
    settings.push(w.top.$("#attack_value").val());
    settings.push(w.top.$("#enable_walls").prop("checked"));
    settings.push(w.top.$("#wall_operator").val());
    settings.push(w.top.$("#wall_value").val());
    settings.push(w.top.$("#enable_distances").prop("checked"));
    settings.push(w.top.$("#distance_operator").val());
    settings.push(w.top.$("#distance_value").val());
    settings.push(w.top.$("#enable_scout").prop("checked"));
    settings.push(w.top.$("#scout_report_operator").val());
    settings.push(w.top.$("#haul_value").val());
    settings.push(w.top.$("#continent_display").val());
    settings.push(w.top.$("#continents_list").val());
    settings.push(w.top.$("#enable_time").prop("checked"));
    settings.push(w.top.$("#attack_time_filter").val());
    settings.push(w.top.$("#time_value").val());
    settings.push(w.top.$("#enable_auto_run").prop("checked"));
    settings.push(w.top.$("#next_village_no_farms").prop("checked"));
    settings.push(w.top.$("#next_village_scouts").prop("checked"));
    settings.push(w.top.$("#scouts_left").val());
    settings.push(w.top.$("#next_village_farming_troops").prop("checked"));
    settings.push(w.top.$("#farming_troops_left").val());
    settings.push(w.top.$("#next_village_units").prop("checked"));
    w.top.$.jStorage.set("profile:" + profileName, settings);
    var profileList = w.top.$.jStorage.get("profileList");
    profileList.push(profileName);
    w.top.$.jStorage.set("profileList", profileList);
    w.top.$("#settingsProfile").append("<option value='" + profileName + "'>" + profileName + "</option>");
    w.top.$("#priorityOneProfile").append("<option value='" + profileName + "'>" + profileName + "</option>");
    w.top.$("#priorityTwoProfile").append("<option value='" + profileName + "'>" + profileName + "</option>");
    w.top.$("#priorityThreeProfile").append("<option value='" + profileName + "'>" + profileName + "</option>");
    w.top.$("#settingsProfile").val(profileName);
  }
};
w.loadProfile = function (profile) {
  var settings = w.top.$.jStorage.get("profile:" + profile);
  userset = settings;
  w.top.$("#start_page").val(settings[0]);
  w.top.$("#end_page").val(settings[1]);
  w.top.$("#order_by").val(settings[2]);
  w.top.$("#direction").val(settings[3]);
  w.top.$("#all_none").prop("checked", settings[4]);
  w.top.$("#blue").prop("checked", settings[5]);
  w.top.$("#green").prop("checked", settings[6]);
  w.top.$("#yellow").prop("checked", settings[7]);
  w.top.$("#red_yellow").prop("checked", settings[8]);
  w.top.$("#red_blue").prop("checked", settings[9]);
  w.top.$("#red").prop("checked", settings[10]);
  w.top.$("#hide_recent_farms").prop("checked", settings[11]);
  w.top.$("#sent_time_filter").val(settings[12]);
  w.top.$("#hide_recent_time").val(settings[13]);
  w.top.$("#enable_hauls").prop("checked", settings[14]);
  w.top.$("#full").prop("checked", settings[15]);
  w.top.$("#partial").prop("checked", settings[16]);
  w.top.$("#enable_attacks").prop("checked", settings[17]);
  w.top.$("#attack_operator").val(settings[18]);
  w.top.$("#attack_value").val(settings[19]);
  w.top.$("#enable_walls").prop("checked", settings[20]);
  w.top.$("#wall_operator").val(settings[21]);
  w.top.$("#wall_value").val(settings[22]);
  w.top.$("#enable_distances").prop("checked", settings[23]);
  w.top.$("#distance_operator").val(settings[24]);
  w.top.$("#distance_value").val(settings[25]);
  w.top.$("#enable_scout").prop("checked", settings[26]);
  w.top.$("#scout_report_operator").val(settings[27]);
  w.top.$("#haul_value").val(settings[28]);
  w.top.$("#continent_display").val(settings[29]);
  w.top.$("#continents_list").val(settings[30]);
  w.top.$("#enable_time").prop("checked", settings[31]);
  w.top.$("#attack_time_filter").val(settings[32]);
  w.top.$("#time_value").val(settings[33]);
  w.top.$("#enable_auto_run").prop("checked", settings[34]);
  w.top.$("#next_village_no_farms").prop("checked", settings[35]);
  w.top.$("#next_village_scouts").prop("checked", settings[36]);
  w.top.$("#scouts_left").val(settings[37]);
  w.top.$("#next_village_farming_troops").prop("checked", settings[38]);
  w.top.$("#farming_troops_left").val(settings[39]);
  w.top.$("#next_village_units").prop("checked", settings[40]);
};
w.changeProfile = (profile) => {
  loadProfile(profile);
  resetTable();
  applyFilters();
};

w.deleteProfile = function () {
  var profileName = w.top.$("#settingsProfile").val();
  if (profileName == profile_10) {
    alert(dialog_06);
  } else {
    var profilesList = w.top.$.jStorage.get("profileList");
    profilesList.splice(profilesList.indexOf(profileName), 1);
    w.top.$.jStorage.set("profileList", profilesList);
    w.top.$.jStorage.deleteKey("profile:" + profileName);
    w.top.$("#settingsProfile option[value='" + profileName + "']").remove();
    w.top.$("#priorityOneProfile option[value='" + profileName + "']").remove();
    w.top.$("#priorityTwoProfile option[value='" + profileName + "']").remove();
    w.top.$("#priorityThreeProfile option[value='" + profileName + "']").remove();
    loadDefaultProfile(profile_10);
  }
};
w.updateProfile = function () {
  var profileName = w.top.$("#settingsProfile").val();
  var settings = [];
  settings.push(w.top.$("#start_page").val());
  settings.push(w.top.$("#end_page").val());
  settings.push(w.top.$("#order_by").val());
  settings.push(w.top.$("#direction").val());
  settings.push(w.top.$("#all_none").prop("checked"));
  settings.push(w.top.$("#blue").prop("checked"));
  settings.push(w.top.$("#green").prop("checked"));
  settings.push(w.top.$("#yellow").prop("checked"));
  settings.push(w.top.$("#red_yellow").prop("checked"));
  settings.push(w.top.$("#red_blue").prop("checked"));
  settings.push(w.top.$("#red").prop("checked"));
  settings.push(w.top.$("#hide_recent_farms").prop("checked"));
  settings.push(w.top.$("#sent_time_filter").val());
  settings.push(w.top.$("#hide_recent_time").val());
  settings.push(w.top.$("#enable_hauls").prop("checked"));
  settings.push(w.top.$("#full").prop("checked"));
  settings.push(w.top.$("#partial").prop("checked"));
  settings.push(w.top.$("#enable_attacks").prop("checked"));
  settings.push(w.top.$("#attack_operator").val());
  settings.push(w.top.$("#attack_value").val());
  settings.push(w.top.$("#enable_walls").prop("checked"));
  settings.push(w.top.$("#wall_operator").val());
  settings.push(w.top.$("#wall_value").val());
  settings.push(w.top.$("#enable_distances").prop("checked"));
  settings.push(w.top.$("#distance_operator").val());
  settings.push(w.top.$("#distance_value").val());
  settings.push(w.top.$("#enable_scout").prop("checked"));
  settings.push(w.top.$("#scout_report_operator").val());
  settings.push(w.top.$("#haul_value").val());
  settings.push(w.top.$("#continent_display").val());
  settings.push(w.top.$("#continents_list").val());
  settings.push(w.top.$("#enable_time").prop("checked"));
  settings.push(w.top.$("#attack_time_filter").val());
  settings.push(w.top.$("#time_value").val());
  settings.push(w.top.$("#enable_auto_run").prop("checked"));
  settings.push(w.top.$("#next_village_no_farms").prop("checked"));
  settings.push(w.top.$("#next_village_scouts").prop("checked"));
  settings.push(w.top.$("#scouts_left").val());
  settings.push(w.top.$("#next_village_farming_troops").prop("checked"));
  settings.push(w.top.$("#farming_troops_left").val());
  settings.push(w.top.$("#next_village_units").prop("checked"));
  w.top.$.jStorage.set("profile:" + profileName, settings);
  userset = settings;
};
w.exportProfile = function () {
  var profileName = w.top.$("#settingsProfile").val();
  var settings = w.top.$.jStorage.get("profile:" + profileName);
  if (profileName == profile_10) {
    alert(dialog_07);
  } else {
    var profileSettings = prompt(dialog_08, dialog_09A + "" + profileName + "" + profileName + "," + settings + "" + dialog_09C);
  }
};
w.importProfile = function () {
  var profileSettings = prompt(dialog_10 + ":", dialog_11);
  profileSettings = profileSettings.split(",");
  var profileName = profileSettings[0];
  profileSettings.shift();
  var profileList = w.top.$.jStorage.get("profileList");
  if (w.top.$.inArray(profileName, profileList) != -1) {
    alert(dialog_12);
    return false;
  } else {
    for (i = 0; i <= profileSettings.length; i++) {
      if (profileSettings[i] === "false" || profileSettings[i] === "true") {
        profileSettings[i] = parseBool(profileSettings[i]);
      }
    }
    w.top.$.jStorage.set("profile:" + profileName, profileSettings);
    profileList.push(profileName);
    w.top.$.jStorage.set("profileList", profileList);
    w.top.$("#settingsProfile").append("<option value='" + profileName + "'>" + profileName + "</option>");
    w.top.$("#settingsProfile").val(profileName);
    loadProfile(profileName);
  }
};
w.top.$(document).off();
w.hotkeysOnOff = function () {
  w.top.$("#settingsBody tr:lt(9) input,#settingsBody tr:lt(9) select").focusin(function () {
    w.onkeydown = function () {};
  });
  w.top.$("#settingsBody tr:lt(9) input,#settingsBody tr:lt(9) select").focusout(function () {
    turnOnHotkeys();
  });
};
w.turnOnHotkeys = function () {
  w.onkeydown = function (e) {
    if (editingKey) {
      editKey(e);
    } else {
      var row = w.top.$("#plunder_list tr").filter(":visible").eq(1);
      var aButton = row.children("td").eq(9).children("a");
      var bButton = row.children("td").eq(10).children("a");
      var cButton = row.children("td").eq(11).children("a");
      switch (e.which) {
        case keycodes.a:
          tryClick(aButton);
          break;
        case keycodes.b:
          tryClick(bButton);
          break;
        case keycodes.c:
          tryClick(cButton);
          break;
        case keycodes.skip:
          row.hide();
          break;
        case keycodes.master:
          if (cansend && filtersApplied) selectMasterButton(row);
          break;
        case keycodes.left:
          getNewVillage("p");
          break;
        case keycodes.right:
          getNewVillage("n");
          break;
        default:
          return;
      }
    }
    e.preventDefault();
  };
};
w.tryClick = function (button) {
  if (cansend && filtersApplied) {
    if (!checkIfNextVillage()) {
      console.log(button.html());
      if (button.hasClass("farm_icon_disabled") || button.html() == undefined) {
        w.top.UI.ErrorMessage("That button is not selectable. Skipping row...", 500);
        button.closest("tr").hide();
      } else {
        button.click();
        if (userset[s.next_village_scouts] || userset[s.next_village_farming_troops]) {
          doTime(200);
        } else {
          doTime(200);
        }
      }
    }
  }
};
w.doTime = function (millsec) {
  cansend = false;
  setTimeout(function () {
    cansend = true;
  }, millsec);
};
w.editKey = function (e) {
  if ((e.keyCode <= 37 && e.keyCode >= 40) || (e.keyCode <= 48 && e.keyCode >= 90)) {
    w.top.UI.ErrorMessage("You can only enter letters, numbers, or arrows. Plese try another key.", 1500);
  } else {
    var keyToChar = String.fromCharCode(e.keyCode);
    if (e.keyCode == 37) {
      keyToChar = "Ã¢â€ Â";
    }
    if (e.keyCode == 38) {
      keyToChar = "Ã¢â€ â€˜";
    }
    if (e.keyCode == 39) {
      keyToChar = "Ã¢â€ â€™";
    }
    if (e.keyCode == 40) {
      keyToChar = "Ã¢â€ â€œ";
    }
    switch (keyToEdit) {
      case "A":
        keycodes.a = e.keyCode;
        w.top.$("#hotkey_value_a").val(keyToChar);
        break;
      case "B":
        keycodes.b = e.keyCode;
        w.top.$("#hotkey_value_b").val(keyToChar);
        break;
      case "C":
        keycodes.c = e.keyCode;
        w.top.$("#hotkey_value_c").val(keyToChar);
        break;
      case "Master":
        keycodes.master = e.keyCode;
        w.top.$("#hotkey_value_master").val(keyToChar);
        break;
      case "Skip":
        keycodes.skip = e.keyCode;
        w.top.$("#hotkey_value_skip").val(keyToChar);
        break;
      case "Left":
        keycodes.left = e.keyCode;
        w.top.$("#hotkey_value_left").val(keyToChar);
        break;
      case "Right":
        keycodes.right = e.keyCode;
        w.top.$("#hotkey_value_right").val(keyToChar);
        break;
      default:
        return;
    }
    w.top.UI.SuccessMessage(keyToChar + " is now mapped to the " + keyToEdit + " button.");
    updateKeypressSettings();
    editingKey = false;
  }
};
w.updateKeypressSettings = function () {
  keyPressSettings.a_code = keycodes.a;
  keyPressSettings.a_char = w.top.$("#hotkey_value_a").val();
  keyPressSettings.b_code = keycodes.b;
  keyPressSettings.b_char = w.top.$("#hotkey_value_b").val();
  keyPressSettings.c_code = keycodes.c;
  keyPressSettings.c_char = w.top.$("#hotkey_value_c").val();
  keyPressSettings.master_code = keycodes.master;
  keyPressSettings.master_char = w.top.$("#hotkey_value_master").val();
  keyPressSettings.skip_code = keycodes.skip;
  keyPressSettings.skip_char = w.top.$("#hotkey_value_skip").val();
  keyPressSettings.left_code = keycodes.left;
  keyPressSettings.left_char = w.top.$("#hotkey_value_left").val();
  keyPressSettings.right_code = keycodes.right;
  keyPressSettings.right_char = w.top.$("#hotkey_value_right").val();
  keyPressSettings.priorityOneEnabled = w.top.$("#priorityOneEnabled").prop("checked");
  keyPressSettings.priorityOneProfile = w.top.$("#priorityOneProfile").val();
  keyPressSettings.priorityOneButton = w.top.$("#priorityOneButton").val();
  keyPressSettings.priorityTwoEnabled = w.top.$("#priorityTwoEnabled").prop("checked");
  keyPressSettings.priorityTwoProfile = w.top.$("#priorityTwoProfile").val();
  keyPressSettings.priorityTwoButton = w.top.$("#priorityTwoButton").val();
  keyPressSettings.priorityThreeEnabled = w.top.$("#priorityThreeEnabled").prop("checked");
  keyPressSettings.priorityThreeProfile = w.top.$("#priorityThreeProfile").val();
  keyPressSettings.priorityThreeButton = w.top.$("#priorityThreeButton").val();
  keyPressSettings.defaultButton = w.top.$("#defaultButton").val();
  w.top.$.jStorage.set("keyPressSettings", keyPressSettings);
};

w.updateBotSettings = function () {
  botSettings.botRunning = w.top.$("#botRunning").prop("checked");
  w.top.$.jStorage.set("botSettings", botSettings);
};

w.fillBotSettings = function () {
  botSettings = w.top.$.jStorage.get(`botSettings`);
  console.log(botSettings);
  w.top.$("#botRunning").prop("checked", botSettings?.botRunning ?? false);
};

w.updateBotVillageSettings = function () {
  botVillageSettings.skipVillage = w.top.$("#botSkipVillage").prop("checked");
  botVillageSettings.mode = w.top.$("#botVillageMode").val();
  w.top.$.jStorage.set(`botVillage${w.top.game_data.village.id}Settings`, botSettings);
};

w.fillBotVillageSettings = function () {
  botVillageSettings = w.top.$.jStorage.get(`botVillage${w.top.game_data.village.id}Settings`);
  botVillageSettings.skipVillage = w.top.$("#botSkipVillage").prop("checked", botVillageSettings?.skipVillage ?? false);

  botVillageSettings.mode = w.top.$("#botVillageMode").val(botVillageSettings.mode ?? "useMasterButton");
};

w.fillKeypressSettings = function () {
  if (w.top.$.jStorage.get("keyPressSettings") == null) {
    w.top.$.jStorage.set("keyPressSettings", keyPressSettings);
  }
  keyPressSettings = w.top.$.jStorage.get("keyPressSettings");
  keycodes.a = keyPressSettings.a_code;
  w.top.$("#hotkey_value_a").val(keyPressSettings.a_char);
  keycodes.b = keyPressSettings.b_code;
  w.top.$("#hotkey_value_b").val(keyPressSettings.b_char);
  keycodes.c = keyPressSettings.c_code;
  w.top.$("#hotkey_value_c").val(keyPressSettings.c_char);
  keycodes.master = keyPressSettings.master_code;
  w.top.$("#hotkey_value_master").val(keyPressSettings.master_char);
  keycodes.skip = keyPressSettings.skip_code;
  w.top.$("#hotkey_value_skip").val(keyPressSettings.skip_char);
  keycodes.left = keyPressSettings.left_code;
  w.top.$("#hotkey_value_left").val(keyPressSettings.left_char);
  keycodes.right = keyPressSettings.right_code;
  w.top.$("#hotkey_value_right").val(keyPressSettings.right_char);
  w.top.$("#priorityOneEnabled").prop("checked", keyPressSettings.priorityOneEnabled);
  w.top.$("#priorityOneProfile").val(keyPressSettings.priorityOneProfile);
  w.top.$("#priorityOneButton").val(keyPressSettings.priorityOneButton);
  w.top.$("#priorityTwoEnabled").prop("checked", keyPressSettings.priorityTwoEnabled);
  w.top.$("#priorityTwoProfile").val(keyPressSettings.priorityTwoProfile);
  w.top.$("#priorityTwoButton").val(keyPressSettings.priorityTwoButton);
  w.top.$("#priorityThreeEnabled").prop("checked", keyPressSettings.priorityThreeEnabled);
  w.top.$("#priorityThreeProfile").val(keyPressSettings.priorityThreeProfile);
  w.top.$("#priorityThreeButton").val(keyPressSettings.priorityThreeButton);
  w.top.$("#defaultButton").val(keyPressSettings.defaultButton);
};
w.setKeyEditMode = function (n) {
  editingKey = true;
  keyToEdit = n;
  w.top.UI.InfoMessage("Press any number, letter, or arrow key to set the hotkey for the <span style='font-weight:bold;'>" + n + "</span> button", 1500);
  return false;
};
w.fillMasterSettings = function () {
  var profileList = w.top.$.jStorage.get("profileList");
  w.top.$.each(profileList, function (i, val) {
    w.top.$("#priorityOneProfile").append("<option value='" + val + "'>" + val + "</option>");
    w.top.$("#priorityTwoProfile").append("<option value='" + val + "'>" + val + "</option>");
    w.top.$("#priorityThreeProfile").append("<option value='" + val + "'>" + val + "</option>");
  });
};
w.selectMasterButton = function (row) {
  var buttonToClick;
  var p1 = w.top.$.jStorage.get("profile:" + keyPressSettings.priorityOneProfile);
  var p2 = w.top.$.jStorage.get("profile:" + keyPressSettings.priorityTwoProfile);
  var p3 = w.top.$.jStorage.get("profile:" + keyPressSettings.priorityThreeProfile);
  var aButton = row.children("td").eq(9).children("a");
  var bButton = row.children("td").eq(10).children("a");
  var cButton = row.children("td").eq(11).children("a");
  buttonToClick = keyPressSettings.defaultButton;
  if (keyPressSettings.priorityThreeEnabled && !checkRowToHide(row, p3)) {
    buttonToClick = keyPressSettings.priorityThreeButton;
  }
  if (keyPressSettings.priorityTwoEnabled && !checkRowToHide(row, p2)) {
    buttonToClick = keyPressSettings.priorityTwoButton;
  }
  if (keyPressSettings.priorityOneEnabled && !checkRowToHide(row, p1)) {
    buttonToClick = keyPressSettings.priorityOneButton;
  }
  switch (buttonToClick) {
    case "A":
      tryClick(aButton);
      break;
    case "B":
      tryClick(bButton);
      break;
    case "C":
      tryClick(cButton);
      break;
    default:
      row.hide();
      break;
  }
};
w.setDefaultLanguage = function () {
  var url = getURL();
  if (url.length == 3) url.shift();
  var domain = url.join(".");
  switch (domain) {
    case "fyletikesmaxes.gr":
      w.top.$.jStorage.set("language", "el");
      break;
    case "tribals.it":
      w.top.$.jStorage.set("language", "it");
      break;
    case "guerrastribales.es":
      w.top.$.jStorage.set("language", "es");
      break;
    case "tribalwars.ae":
      w.top.$.jStorage.set("language", "ar");
      break;
    default:
      w.top.$.jStorage.set("language", "en");
      break;
  }
};
w.loadLanguage = function (lang) {
  w.top.$.jStorage.set("language", lang);
  var profileList = w.top.$.jStorage.get("profileList");
  var defaultProfile = w.top.$.jStorage.get("profile:" + profile_10);
  if (w.top.$.inArray(lang, availableLangs) < 0) {
    lang = "en";
  }
  var langFile = scriptURL + "lang/" + lang + ".js";
  w.top.$.getScript(langFile, function () {
    w.top.$("#settingsDiv").remove();
    profileList[0] = profile_10;
    w.top.$.jStorage.set("profileList", profileList);
    w.top.$.jStorage.set("profile:" + profile_10, defaultProfile);
    changeHeader(filter_40);
    showSettings();
  });
};
w.addLanguages = function () {
  w.top.$("#language").append("<option value='en'>English</option>");
  w.top.$("#language").append("<option value='el'>ÃŽâ€¢ÃŽÂ»ÃŽÂ»ÃŽÂ·ÃŽÂ½ÃŽÂ¹ÃŽÂºÃŽÂ¬</option>");
  w.top.$("#language").append("<option value='it'>Italiano</option>");
  w.top.$("#language").append("<option value='es'>EspaÃƒÂ±ol</option>");
  w.top.$("#language").append("<option value='ar'>Ã˜Â§Ã™â€žÃ™â€žÃ˜ÂºÃ˜Â© Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â±Ã˜Â¨Ã™Å Ã˜Â©</option>");
};
w.parseBool = function (value) {
  return typeof value === "undefined" ? false : value.replace(/^\s+|\s+unsafeWindow.top.$/g, "").toLowerCase() === "true";
};
w.getURL = function () {
  var domain = w.location.hostname;
  domain = domain.split(".");
  return domain;
};
w.checkPage = function () {
  console.log("checkPage");
  if (!(w.top.game_data.screen === "am_farm")) {
    getFA();
  } else {
    run();
  }
};
w.getFA = function () {
  console.log("getFA");
  fadeThanksToCheese();
  openLoader();
  var vlink = link[0] + w.top.game_data.village.id + link[1];
  w.top.$.getScript("https://" + w.top.location.host + "/js/game/Accountmanager.js", function () {
    w.top.$.ajax({
      type: "GET",
      url: vlink,
      dataType: "html",
      error: function (xhr, statusText, error) {
        alert("Get LA error: " + error);
        w.top.$("#fader").remove();
        w.top.$("#loaders").remove();
      },
      success: function (data) {
        var v = w.top.$(data);
        var titlePat = /<\s*title\s*>([^<]+)<\/title\s*>/g;
        var titleMatch = titlePat.exec(data);
        var title = titleMatch[1];
        var newGameData = w.top.$.parseJSON(data.split("TribalWars.updateGameData(")[1].split(");")[0]);
        w.top.game_data = newGameData;
        if (typeof history !== "undefined" && typeof history.pushState === "function") {
          history.pushState({}, w.top.game_data.village.name + " - Loot Assistant", "https://" + w.top.location.host + game_data.link_base_pure + "am_farm");
        }
        w.top.$("#header_info").html(w.top.$("#header_info", v).html());
        w.top.$("#topContainer").html(w.top.$("#topContainer", v).html());
        w.top.$("#contentContainer").html(w.top.$("#contentContainer", v).html());
        w.top.$("head").find("title").html(title);
        w.top.$("#fader").remove();
        w.top.$("#loaders").remove();
        console.log("getFA");
        run();
      },
    });
  });
};
w.fadeThanksToCheese = function () {
  var fader = w.top.document.createElement("div");
  fader.id = "fader";
  fader.style.position = "fixed";
  fader.style.height = "100%";
  fader.style.width = "100%";
  fader.style.backgroundColor = "black";
  fader.style.top = "0px";
  fader.style.left = "0px";
  fader.style.opacity = "0.6";
  fader.style.zIndex = "12000";
  w.top.document.body.appendChild(fader);
};
w.openLoader = function () {
  var widget = w.top.document.createElement("div");
  widget.id = "loaders";
  widget.style.position = "fixed";
  widget.style.width = "24px";
  widget.style.height = "24px";
  widget.style.top = "50%";
  widget.style.left = "50%";
  w.top.$(widget).css("margin-left", "-12px");
  w.top.$(widget).css("margin-top", "-12px");
  widget.style.zIndex = 13000;
  w.top.$(widget).append(w.top.$("<img src='graphic/throbber.gif' height='24' width='24'></img>"));
  w.top.$("#contentContainer").append(w.top.$(widget));
};
w.makeItPretty = function () {
  w.top.$(".row_a").css("background-color", "rgb(216, 255, 216)");
  w.top.$("#plunder_list tr").eq(0).remove();
  w.top
    .$("#plunder_list")
    .find("tr:gt(0)")
    .each(function (index) {
      w.top.$(this).removeClass("row_a");
      w.top.$(this).removeClass("row_b");
      if (index % 2 == 0) {
        w.top.$(this).addClass("row_a");
      } else {
        w.top.$(this).addClass("row_b");
      }
    });
  hideStuffs();
  console.log("makeItPretty");
};
w.hideStuffs = function () {
  w.top.$("#plunder_list").hide();
  w.top.$("#plunder_list_nav").hide();
  w.top
    .$("#contentContainer")
    .find('div[class="vis"]')
    .eq(0)
    .children()
    .eq(0)
    .append(
      w.top.$(
        "<div class='vis' style='float:right;text-align:center;line-height:100%;width:12px;height:12px;margin:0px 0px 0px 0px;position:relative;background-color:tan;opacity:.7'><a href='#' num='0' onclick='uglyHider(window.top.$(this));return false;'>+</a></div>"
      )
    );
  w.top.$("#contentContainer").find('div[class="vis"]').eq(0).children().eq(1).hide();
  w.top
    .$("#am_widget_Farm")
    .find("h4")
    .eq(0)
    .append(
      w.top.$(
        "<div class='vis' style='float:right;text-align:center;line-height:100%;width:12px;height:12px;margin:0px 0px 0px 0px;position:relative;background-color:tan;opacity:.7'><a href='#' num='1' onclick='uglyHider(window.top.$(this));return false;'>+</a></div>"
      )
    );
  w.top.$("#plunder_list_filters").hide();
};
w.uglyHider = function (linker) {
  var basd;
  if (w.top.$("#settingsBody").length > 0) {
    basd = 2;
  } else {
    basd = 1;
  }
  if (w.top.$(linker).text() === "+") {
    w.top.$(linker).text("-");
  } else {
    w.top.$(linker).text("+");
  }
  if (parseInt(w.top.$(linker).attr("num")) == 0) {
    w.top.$("#contentContainer").find('div[class="vis"]').eq(basd).children().eq(1).toggle();
  } else if (parseInt(w.top.$(linker).attr("num")) == 1) {
    w.top.$("#plunder_list_filters").toggle();
  } else if (parseInt(w.top.$(linker).attr("num")) == 2) {
    w.top.$("#settingsBody").toggle();
  }
};

w.showNotification = function (type, params, click_callback, title) {
  if (!BrowserNotification.notifications.hasOwnProperty(type) && !(type.toLowerCase() == "custom" || type.toLowerCase() == "bn_custom")) throw "No such notification " + type;
  if (!BrowserNotification.supported()) return;
  var notification = null;
  if ((" " + type.toLowerCase() + " ").indexOf("custom") > -1) {
    notification = { title: "Script Notification", properties: { body: "%1" } };
  } else {
    notification = BrowserNotification.notifications[type];
  }
  var properties = $.extend(notification.properties, BrowserNotification.defaultProperties);
  if ($.isArray(params) && params.length > 0) {
    var fin = properties.body;
    for (pInd = 0, bInd = 1; pInd < params.length; pInd++, bInd++) {
      fin = fin.replace("%" + bInd, params[pInd]);
    }
    properties.body = fin;
  }
  properties.icon = "https://i.imgur.com/atFETJi.png";
  properties.notifyClick = function () {
    if (typeof click_callback === "function") click_callback();
  };
  if (title === null || typeof title !== "string" || title.length == 0) {
    title = notification.title;
  }
  new Notify(title, properties).show();
};
