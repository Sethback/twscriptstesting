(() => {
    if (typeof window.twLib === 'undefined') {
        $.getScript('https://media.innogames.com/com_DS_NL/scripts/resources/TribalWarsLibrary.js', testingScript);
    } else {
        testingScript();
    }

    function testingScript() {

        //random tes
          let test = $(`<div id="">HEY</div>`);
          $("#content_value").prepend(test)

    }
})();
