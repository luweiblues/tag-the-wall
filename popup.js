function dothatuploadthing() {
	chrome.tabs.executeScript({
        code: 'sprivate = ' + $("#private").is(":checked") + ';'
    });
    chrome.tabs.executeScript({
        code: 'name = "' + $("#title").val() + '"; upload();'
    });
}

function loadPrivateCall() {
    chrome.tabs.executeScript({
        code: 'loadPrivate();'
    });
}

function toggleMode() {
    chrome.tabs.executeScript({
        code: 'toggleMode();'
    });
}

function toggleGraffiti() {
    chrome.tabs.executeScript({
        code: 'toggleGraffiti();'
    });
} 

function setWeight(){
	chrome.tabs.executeScript({
		code: 'stroke = ' + $("#w").val() + ';'
	});
}

function superCoderMasterFunction() {
	
    console.log("Starting super function");
    var passed_id = String($("#private_id").val());
    var url;
    if (passed_id == "") {
        console.log("Can't lookup blank field");
    } else {

        Parse.$ = jQuery;

        // Initialize Parse with your Parse application javascript keys
        Parse.initialize("CVbYCUyIgQ255dpPxaRyx8uaR70t8gvUhmK29C3j",
            "le7e4vYRItSEvMdknX7tFxLs6AQr1FlIUldXN121");

        var Graffiti = Parse.Object.extend("Graffiti");
        var query = new Parse.Query(Graffiti);

        // setting the query criteria
        query.get(passed_id, {
            success: function(result) {
                console.log("download is successfull");
                // Do something with the returned Parse.Object values
                var graffiti = result;
                url = graffiti.get('urlString');
                chrome.extension.getBackgroundPage().url = url;
                chrome.extension.getBackgroundPage().passed_id = passed_id;
                chrome.extension.getBackgroundPage().viewPrivate = true;
                chrome.tabs.update({
                        url: "http://" + url
                    }
                );
            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    }
}

function setRed() {
    chrome.tabs.executeScript({
        code: 'color = RED;'
    });
}

function setGreen() {
    chrome.tabs.executeScript({
        code: 'color = GREEN;'
    });
}

function setBlue() {
    chrome.tabs.executeScript({
        code: 'color = BLUE;'
    });
}

function setYellow() {
    chrome.tabs.executeScript({
        code: 'color = YELLOW;'
    });
}


document.getElementById('load').addEventListener('click', superCoderMasterFunction);
document.getElementById('save').addEventListener('click', dothatuploadthing);
document.getElementById('toggle').addEventListener('click', toggleMode);
document.getElementById('graffiti').addEventListener('click', toggleGraffiti);
document.getElementById('red').addEventListener('click', setRed);
document.getElementById('green').addEventListener('click', setGreen);
document.getElementById('blue').addEventListener('click', setBlue);
document.getElementById('yellow').addEventListener('click', setYellow);
document.getElementById('setweight').addEventListener('click', setWeight);