<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$db_conn = mysqli_connect("localhost", "root", "", "bazenbajsa");
if($db_conn === false){
    die("ERROR: Could Not Connect".mysqli_connect_error());
}

$method = $_SERVER["REQUEST_METHOD"];
switch($method)
{
    case "GET": 
      $path= explode('/', $_SERVER['REQUEST_URI']);

      if(isset($path[4]) && is_numeric($path[4]))
      {
        echo "Get Api Single Row"; die;
      } else {
       
        
       $destination= 'C:/xampp/htdocs/Busniess/BajsaBazenSite/bajsabazen/images/';
       $allproduct= mysqli_query($db_conn, "SELECT * FROM news");
       if(mysqli_num_rows($allproduct) > 0)
       {
          while($row= mysqli_fetch_array($allproduct))
          {
           $json_array["productdata"][]= array("id"=>$row['id_news'], 
           "ptitle"=>$row["ptitle"],
           "ptext"=>$row["ptext"],
           "pdate"=>$row["pdate"],
           "pfile"=>$row["pfile"]
          );
          }
          echo json_encode($json_array["productdata"]);
          return;
       } else {
        echo json_encode(["result"=>"please check the Data"]);
        return;
       }


      }
      
       
    break;

    case "POST";
    
    if(isset($_FILES['pfile'])){
        $ptitle = $_POST['ptitle'];
        $ptext = $_POST['ptext'];
        $pdate = $_POST['pdate'];
        $pfile = time().$_FILES['pfile']['name'];
        $pfile_temp = $_FILES['pfile']['tmp_name'];
        $destination = 'C:/xampp/htdocs/Busniess/BajsaBazenSite/bajsabazen/images/' . $pfile;
    
        $result = mysqli_query($db_conn, "INSERT INTO news (ptitle, ptext, pdate, pfile) VALUES ('$ptitle', '$ptext', '$pdate', '$pfile')");
    
        if($result){
            if(move_uploaded_file($pfile_temp, $destination)){
                echo json_encode(["success" => "News Inserted Successfully"]);
                return;
            } else {
                echo json_encode(["error" => "File upload failed"]);
                return;
            }
        } else {
            echo json_encode(["error" => "News Not Inserted"]);
            return;
        }
    } else {
        echo json_encode(["error" => "File not uploaded"]);
        return;
    }
    break;

    case "DELETE":
        $path= explode('/', $_SERVER["REQUEST_URI"]);
        $result= mysqli_query($db_conn, "DELETE FROM news WHERE id_news= '$path[4]' ");
        if($result)
        {
          echo json_encode(["success"=>"The Record Deleted Successfully"]);
          return;
        } else {
          echo json_encode(["Please Check the Nre Data!"]);
          return;
        }

      break;    
}

?>