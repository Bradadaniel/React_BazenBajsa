<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

require_once "ApiBazenBajsa/config.php";
require_once "ApiBazenBajsa/db.php";
$pdo = connectDatabase($dsn, $pdoOptions);

$method = $_SERVER["REQUEST_METHOD"];
switch ($method) {
    case "GET":
        $path = explode('/', $_SERVER['REQUEST_URI']);

        if (isset($path[4]) && is_numeric($path[4])) {
            echo "Get Api Single Row";
            die;
        } else {
            $stmt = $pdo->query("SELECT * FROM news ORDER BY pdate DESC");
            $allproduct = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if ($allproduct) {
                $json_array["productdata"] = array_map(function ($row) {
                    return [
                        "id" => $row['id_news'],
                        "ptitle" => $row["ptitle"],
                        "ptexthu" => $row["ptexthu"],
                        "ptextsr" => $row["ptextsr"],
                        "pdate" => $row["pdate"],
                        "pfile" => $row["pfile"]
                    ];
                }, $allproduct);

                echo json_encode($json_array["productdata"]);
            } else {
                echo json_encode(["result" => "please check the Data"]);
            }
            return;
        }
        break;

    case "POST":
        if (isset($_FILES['pfile'])) {
            $ptitle = $_POST['ptitle'];
            $ptexthu = $_POST['ptexthu'];
            $ptextsr = $_POST['ptextsr'];
            $pdate = $_POST['pdate'];
            $pfile = time() . $_FILES['pfile']['name'];
            $pfile_temp = $_FILES['pfile']['tmp_name'];
            $destination = 'C:/xampp/htdocs/Busniess/BajsaBazenSite/bajsabazen/images/' . $pfile;

            $stmt = $pdo->prepare("INSERT INTO news (ptitle, ptexthu, ptextsr, pdate, pfile) VALUES (?, ?, ?, ?, ?)");
            $result = $stmt->execute([$ptitle, $ptexthu, $ptextsr, $pdate, $pfile]);

            if ($result) {
                if (move_uploaded_file($pfile_temp, $destination)) {
                    echo json_encode(["success" => "News Inserted Successfully"]);
                } else {
                    echo json_encode(["error" => "File upload failed"]);
                }
            } else {
                echo json_encode(["error" => "News Not Inserted"]);
            }
        } else {
            echo json_encode(["error" => "File not uploaded"]);
        }
        return;
        break;

    case "DELETE":
        if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
            $path = explode('/', $_SERVER["REQUEST_URI"]);
            $id = end($path);
            $stmt = $pdo->prepare("DELETE FROM news WHERE id_news = ?");
            $result = $stmt->execute([$id]);
        
            if ($result) {
                echo json_encode(["success" => "The Record Deleted Successfully"]);
            } else {
                echo json_encode(["error" => "Please Check the Data!"]);
            }
            return;
        }
        break;
}
?>
