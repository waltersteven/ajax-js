var BASE_URL = "https://jsonplaceholder.typicode.com/";

$(document).ready(function () {

    var users = "";
    $.get(BASE_URL + "posts", (data) => loadData(data));
    

    // fetch(BASE_URL + "posts")
    //     .then(response => response.json())
    //     .then(json => loadData(json))


    // $.ajax({
    //     type: "get",
    //     url: BASE_URL + "employees",
    //     data: "",
    //     dataType: "json",
    //     success: function(data){
    //         console.log("success");
    //         console.log(data);
    //     }
    // });
});

function loadData(data) {
    var users = "";
    data.forEach(element => {
        var row = `<tr>
                <td class='mdl-data-table__cell--non-numeric'>${element.id}<td>    
                <td class='mdl-data-table__cell--non-numeric'>${element.title}</td>
                <td class='mdl-data-table__cell--non-numeric'>${element.body}</td>
            </tr>`;
        users += row;
    });
    $("#tableBody").empty();
    $("#tableBody").append(users);
}
$("#formUser").submit(function (event) {
    event.preventDefault();
    let id = $("#id").val();
    let title = $("#title").val();
    let body = $("#body").val();

    let newPost = { "id": id, "title": title, "body": body };

    // $.ajax({
    //     type: 'POST',
    //     url: BASE_URL + "posts",
    //     data: JSON.stringify(newPost),
    //     contentType: 'application/json; charset=utf-8',
    //     dataType: 'json',
    //     async: false,
    //     // headers: {"Content-type": "application/json; charset=UTF-8"},
    //     // beforeSend: function(xhr){
    //     //     xhr.setRequestHeader('Access-Control-Allow-origin', 'true');
    //     //     // xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With, Session');
    //     //     // xhr.setRequestHeader('Access-Control-Request-Method', 'POST');
    //     // },
    //     success: function (data) {
    //         console.log("despues de success");
    //         console.log(data);
    //     }
    // });

    fetch(BASE_URL + "posts", {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {"Content-type": "application/json; charset=UTF-8"}     
    })
    .then(response => response.json())
    .then(json => console.log(json))
});

