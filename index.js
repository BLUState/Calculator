function deleteLast()
{
    var string = document.getElementById("display").value;
    var newString = string.substring(0, string.length - 1);
    document.getElementById("display").value = newString;
}