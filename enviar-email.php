<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $whatsapp = $_POST['whatsapp'];
    
    $to = "martineleclaudio756@gmail.com"; 
    $subject = "Novo Contato Rápido";
    $message = "Nome Completo: $nome\nWhatsapp: $whatsapp";
    $headers = "From: no-reply@seudominio.com";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Falha ao enviar o e-mail.";
    }
}
?>
