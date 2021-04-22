$(document).ready(function () {
    $("#submit").click(function (e) {
        var validate = Validate();
        $("#message").html(validate);
        if (validate.length == 0) {
            CallAPI(1);
        }
    });

    function CallAPI(page) {
        api_key = "?api_key=4694567a42a4950589090a37a9729f3f";
        $.ajax({
            url: "https://api.themoviedb.org/3/movie/" + $("#searchInput").val() + api_key,
            dataType: "json",
        }).done(function (result, status, xhr) {
            console.log(result)
            var resultHtml = $("<div class=\"resultDiv\"><p>Names</p>");

            for (i = 0; i < result["results"].length; i++) {

                var image = result["results"][i].backdrop_path == null ? "Image/no-image.png" : "https://image.tmdb.org/t/p/w500/" + result["results"][i].backdrop_path;

                resultHtml.append("<div class=\"result\" resourceId=\"" + result["results"][i]["id"] + "\">" + "<img src=\"" + image + "\" />" + "<p><a>" + result["results"][i]["name"] + "</a></p></div>")
            }

            resultHtml.append("</div>");
            $("#message").html(resultHtml);

            var dataTransmitted = JSON.stringify(result['results'][0])

            $.ajax({
                url: "writing.php",
                data: 'dataTransmitted=' + dataTransmitted,
                type: 'POST'
            }).done(function () {
                console.log('cool')
            }).fail(function () {
                console.log('pas cool')
            })

            // Paging(result["total_pages"]);
            // const fs = require('fs')

            // let donnees = JSON.stringify(result['results'][0])
            // fs.writeFileSync('filmHorreur.json', donnees)
        }).fail(function (xhr, status, error) {
            $("#message").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        })
    };
});

function Validate() {
    var errorMessage = "";
    if ($("#searchInput").val() == "") {
        errorMessage += "► Enter Search Text";
    }
    return errorMessage;
}

// function Paging(totalPage) {
//     var obj = $("#pagination").twbsPagination({
//         totalPages: totalPage,
//         visiblePages: 5,
//         onPageClick: function (event, page) {
//             CallAPI(page);
//         }
//     });
// }

// $(document).ajaxStart(function () {
//     $(".imageDiv img").show();
// });

// $(document).ajaxStop(function () {
//     $(".imageDiv img").hide();
// });

// });






// modal 

$("#message").on("click", ".result", function () {
    var resourceId = $(this).attr("resourceId");
    $.ajax({
        url: "https://api.themoviedb.org/3/person/" + resourceId + "?language=en-US",
        data: {
            api_key: "3356865d41894a2fa9bfa84b2b5f59bb"
        },
        dataType: 'json',
        success: function (result, status, xhr) {
            $("#modalTitleH4").html(result["name"]);

            var image = result["profile_path"] == null ? "Image/no-image.png" : "https://image.tmdb.org/t/p/w500/" + result["profile_path"];
            var biography = result["biography"] == null ? "No information available" : result["biography"];

            var resultHtml = "<p class=\"text-center\"><img src=\"" + image + "\"/></p><p>" + biography + "</p>";

            $("#modalBodyDiv").html(resultHtml)

            $("#myModal").modal("show");
        },
        error: function (xhr, status, error) {
            $("#message").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
    });
});



