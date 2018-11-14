
function generate() {
    var textarea_text = $("#area").val();
    var text_ar = textarea_text.split("\n");
    var text_ar_processed = text_ar.map(x => x.trim()).filter(x => x.length > 0);
    var replaced_ar = text_ar_processed.map(x => getReplaced(x));
    $("#out").text(replaced_ar.join("\n"));
}

function getTemplate() {
    return $("#template").text();
}

function getReplaced(code) {
    return getTemplate().replace(/\{\{code\}\}/g, code);
}

$(function () {
    $("#generate").click(function () {
        generate();
    }) 
});