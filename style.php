<html>
<form action = "" method="post">
    <label> Name: <br><input type="text" name="name"><br></lable>
    <label> Message: <br><textarea cols="35" rows="5" name="mes"></textarea></label><br>

    <input type="submit" name="post" value="Post">
</form>

</html>

<?php 

$name = $_Post["name"];
$text = $_Post["mes"];
$post = $_Post["post"];

if($post){
    #Write Down Comments#
$write = fopen("com2.text", "a+");
fwrite($write, "<u><b> $name</b></u><br>$text<br></br>");
fclose($write);

#display comments #
$read = fopen("com.txt", "r+t");
echo "All comments: <br>";

while(!feof($read)) {
    echo fread($read, 1024);
}

fclose($read);

}
else{

#display comments #

$read = fopen("com2.txt", "r+t");
    echo "All comments:";

while(!feof($read)) {
    echo fread($read, 1024);

}
fclose($read);

}
?>