ScriptAPI.register('Tesing A Script', true, 'Sethback', 'nl.tribalwars@coma.innogames.de');

(() => {
    if (typeof window.twLib === 'undefined') {
        $.getScript('https://media.innogames.com/com_DS_NL/scripts/resources/TribalWarsLibrary.js', testingScript);
    } else {
        testingScript();
    }

    function testingScript() {

        //random test
          var test = $(`<div id="">HEY</div>`);
          $("#content_value").append(test)

    }
})();


