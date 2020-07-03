/*******************************************************************************
Copyright (C) 2015 Adrien Coppola

This file is part of Focus Mode.

Focus Mode is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Focus Mode is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Focus Mode.  If not, see <http://www.gnu.org/licenses/>.
*******************************************************************************/

(function () {

  /* Activate or Deactivate the work mode */
  function onButtonClick() {


    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      let url = tabs[0].url;
      // use `url` here inside the callback because it's asynchronous!

      var parser = new URL(url);

      var localhost = ' localhost:8888';

      var newUrl = localhost + parser.pathname + parser.search;

      chrome.tabs.update(tabs[0].tabId, { "url": newUrl });
    });

  }

  /* Open the options tab */
  // function optionsButtonClick() {
  //   chrome.tabs.create({ "url": "html/settings.html" });
  // }

  /* Attach onclick functions */
  var onButton = document.getElementById("onButton");
// var optionsButton = document.getElementById("optionsButton");

onButton.addEventListener("click", onButtonClick);
// optionsButton.addEventListener("click", optionsButtonClick);
}) ();
