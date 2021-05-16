var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
let saveHandle

var Textbox = $("#textarea");
var instructions = $("#instructions");

var Content = "";

recognition.continuous = true;

recognition.onresult = function (event) {
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;

    Content += transcript;
    Textbox.val(Content);
};

$("#start").on("click", function (e) {
    if ($(this).text() == "Stop Recording") {
        $(this).html("Start Recording");
        $("#instructions").html("");
        recognition.stop();
    } else {
        $(this).html("Stop Recording");
        $("#instructions").html("Voice Recognition is on");
        if (Content.length) {
            Content += " ";
        }
        recognition.start();
    }
});


function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function saveText(){
    var x = document.getElementById("textarea").value;
    download("hello.txt",x);
}


document.getElementById('inp')
            .addEventListener('change', function() {
              
            var fr=new FileReader();
            fr.onload=function(){
                Content+=" "+(fr.result).toString();
                $("textarea").val(Content);
            }
              
            fr.readAsText(this.files[0]);
        })

$("#clear").click(function () {
    $("textarea").val("");
    // $("#load").html("Load File")
    Content = "";
    $("#start").html("Start Recording");
    recognition.stop();
    $("#instructions").html("");
    location.reload();
});

Textbox.on("input", function () {
    Content = $(this).val();
});
