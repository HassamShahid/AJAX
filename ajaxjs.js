$(function(){
$("#load").click(sendAjax);

});

function sendAjax(){

    console.log("sending ajax request");
    //send request here.
     $.get("student.txt", handleResponse);
     console.log ("sent");

}

function handleResponse(Response){

    console.log( "response received");
    console.log(Response)
    $("#result").empty();
    $("#result").append(Response);
}

