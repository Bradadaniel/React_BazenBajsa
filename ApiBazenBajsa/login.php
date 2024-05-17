<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Ez megengedi, hogy bármely domain hozzáférjen az API-hoz
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT'); //lenyeges ha postot kuldok..
header('Access-Control-Allow-Headers: Content-Type, Authorization');

require_once "config.php";
require_once "db.php";

$pdo = connectDatabase($dsn, $pdoOptions);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    $username = $input['username'] ?? '';
    $password = $input['password'] ?? '';

    if ($username && $password) {
        $stmt = $pdo->prepare('SELECT * FROM admin WHERE username = :username');
        $stmt->execute(['username' => $username]);
        $user = $stmt->fetch();

        if ($password == $user['password']) {
            echo json_encode(['status' => 'success', 'message' => 'Login successful']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Invalid username or password']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Username and password are required']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
