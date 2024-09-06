<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP TESTES</title>
</head>
<body>
    <h1>Testando PHP</h1>
    <?php
    $campus="Instituto Federal";
    echo "<p>Eu estudo no $campus!</p>";
    ?>
    
    <h1>Exemplo de PHP</h1>
    <?php
    date_default_timezone_set("America/Sao_Paulo");
    echo "Hoje é dia ". date("d/m/Y");
    echo " e a hora atual é ". date("G:i:s")
    ?>
</body>
</html>