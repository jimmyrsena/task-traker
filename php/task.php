<?php
// Simulação de conexão a banco de dados (pode ser adaptado para um banco real)
$tasks = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $task = $_POST['task'];
    if ($task) {
        // Simulando adicionar a tarefa em um banco de dados
        $tasks[] = $task;
        echo json_encode(['success' => true, 'task' => $task]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Task is empty']);
    }
}
?>
