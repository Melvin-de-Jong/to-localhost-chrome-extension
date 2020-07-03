(function () {
  var storage = chrome.storage;

  function fillField() {
    var localhost = getLocalhost();
    alert(localhost);

    var input = document.getElementById("addingInput");
    input.value = localhost;
  }

  function saveUrl(e) {
    if (e.keyCode === 13) {
      var input = document.getElementById("addingInput");

      if (input.value.length === 0) {
        return;
      }

      saveToStorage(input.value);

    }
  }

  function saveToStorage(value) {
    storage.local.set({ localhostUrl: value });

  }

  function getLocalhost() {
    return 'localhost:8888';

    //this is not working yet

    return storage.local.get(["localhostUrl"], function (items) {
      if (items.localhostUrl !== undefined) {
        if (items.localhostUrl.length !== 0) {
          return items.localhostUrl;
        }
      }

      saveToStorage('localhost:8888');
    });

  }

  fillField();
  document.getElementById("addingInput").addEventListener("keypress", saveUrl);

})();
