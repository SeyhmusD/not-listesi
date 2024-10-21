function yapilacakEkle() {
    var yeniGorev = $("#taskInput").val();
    if (yeniGorev !== "") {
        var yeniGorevHtml = getGorevHTML(yeniGorev);
        $("#taskList").append(yeniGorevHtml);
        $("#taskInput").val("");
    }
}

function duzenleGorev(button) {
    var gorevMetni = $(button).parent().siblings("span").text().trim();
    $("#taskInput").val(gorevMetni);
    $(button).parent().parent().remove();
}

function silGorev(button) {
    $(button).parent().parent().remove();
}
function tamamlandiGorev(checkbox) {
    var spanElement = $(checkbox).siblings("span");
    spanElement.toggleClass("tamamlandi", checkbox.checked);
}

function getGorevHTML(gorevMetni) {
    return "<li class='list-group-item'>" +
        "<input type='checkbox' onchange='tamamlandiGorev(this)'>" +
        "<span>" + gorevMetni + "</span>" +
        "<div class='btn-group float-right'>" +
        "<button class='btn btn-info' onclick='duzenleGorev(this)'>Düzenle</button>" +
        "<button class='btn btn-danger' onclick='silGorev(this)'>Sil</button>" +
        "</div></li>";
}
function gorevSil(button) {
    $(button).parent().remove();
}

function goreviDuzenle(item) {
    var text = $(item).text().trim();
    $("#taskInput").val(text);
    $(item).remove();
    // Yeni görevi ekle
    $("#taskList").append("<li class='list-group-item' onclick='goreviDuzenle(this)'>" + text +
        "<button class='btn btn-danger btn-sm float-right' onclick='gorevSil(this)'>Sil</button></li>");
}


function gorevleriGoster(tur) {
    var listItems = $("#taskList").children("li");

    if (tur === 'devamEden') {
        listItems.filter(".tamamlandi").remove();
        listItems.not(".tamamlandi").show();
    } else if (tur === 'biten') {
        listItems.filter(".tamamlandi").remove();
    } else {
        listItems.show();
    }
}
function tumunuTemizle() {
    $("#taskList").empty();
}
function DevamEden() {
    var listItem = document.querySelectorAll('#taskList li');
    listItem.forEach(function (item) {
        var checkbox = item.querySelector('input[type="checkbox"]');
        var label = item.querySelector('p');

        if (checkbox.checked) {
            item.style.display = 'none';

        } else {
            item.style.display = 'block';
        }
    });
}


function BitenGorev() {
    var listItem = document.querySelectorAll('#taskList li');
    listItem.forEach(function (item) {
        var checkbox = item.querySelector('input[type="checkbox"]');
        var label = item.querySelector('p');

        if (checkbox.checked) {
            item.style.display = 'block';

        } else {
            item.style.display = 'none';
        }
    });
}
