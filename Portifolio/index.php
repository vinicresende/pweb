<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Language" content="pt-br">
    <title>Potifolio Vinicius Silva</title>
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="style.css">
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/284916def4.js" crossorigin="anonymous"></script>
</head>

<body onload="darkMode()">
    <div class="container">

        <div class="container-principal">

            <nav>
                <div class="logo">
                    <h1>VINI</h1>
                </div>
                <ul class='nav-links'>
                    <li><a href="#paginaRosto">Home</a></li>
                    <li><a href="#paginaSobreMim">Sobre</a></li>
                    <li><a href="#paginaHabilidades">Habilidades</a></li>
                    <li><a href="#paginaContato">Contato</a></li>
                </ul>
                <div class="burger-logo">
                    <div class="linha1"></div>
                    <div class="linha2"></div>
                    <div class="linha3"></div>
                </div>
            </nav>

            <div class="wrapper">

                <section class="paginas" id="paginaRosto">
                    <did class="conteudo-flex" id="redes">
                        <div class="logos"><a href="http://instagram.com/baby_vinicius" target="_blank"><i class="fab fa-instagram fa-lg"></a></i></div>
                        <div class="logos"><a href="https://github.com/vinicresende/" target="_blank"><i class="fab fa-github fa-lg"></a></i></div>
                        <div class="logos"><a href="#" target="_blank"><i class="fab fa-linkedin-in fa-lg"></a></i></div>
                    </did>
                    <div class="conteudo-flex" id="texto-rosto">
                        <h1>Oi! Eu sou Vinicius.</h1>
                        <h3>Desenvolvedor</h3>
                        <p>Bem vindo à magia do meu universo... Gostaria de te dizer que tenho experiência em front-end,
                            em poções, em Java e em defesa contra as arte das trevas.</p>

                    </div>

                    <div class="conteudo-flex" id='lufalufa-logo'>
                        <img src="assets/img/Hufflepuff_ClearBG.webp" alt="Brasão Lufa Lufa">
                    </div>
                    <a href="#paginaSobreMim" class="mouse-container" id="mouse-pagina-rosto">
                        <div class="mouse"></div>
                    </a>
                </section>

                <section class="paginas" id="paginaSobreMim">
                    <div class="titulo">
                        <h1>Sobre Mim</h1>
                    </div>
                    <div class="foto">
                        <img src="assets/img/foto2.jpg" alt="Foto de rosto de Vinicius">
                    </div>
                    <div class="texto">
                        <p>Iniciante na carreira de Desenvolvedor, Engenheiro Eletricista (UNESP - 2011), graduando em
                            Análise e Desenvolvimento de Sistemas (FATEC), experiência em C, C++, sistemas embarcados,
                            Java, C#, SAP GUI Scripting API, VBA + BI.</p>
                        <a href="assets/pdf/ViniciusSilva-Curriculo.pdf" download>
                            <button class="button">Download CV <spam><i class="fas fa-file-download"></i></spam></button>
                        </a>


                    </div>
                    <a href="#paginaHabilidades" class="mouse-container" id="mouse-pagina-sobre-mim">
                        <div class="mouse"></div>
                    </a>
                </section>

                <section class="paginas" id="paginaHabilidades">
                    <div class="titulo" id="titulo-habilidade">
                        <h1>Habilidades</h1>
                    </div>

                    <div class="skills">
                        <ul>
                            <li><span class="html5"></span><em>HTML</em></li>
                            <li><span class="css3"></span><em>CSS</em></li>
                            <li><span class="js"></span><em>Javascript</em></li>
                            <li><span class="java"></span><em>Java</em></li>
                            <li><span class="C"></span><em>C / C++</em></li>
                            <li><span class="Csharp"></span><em>C#</em></li>
                        </ul>
                    </div>
                    <a href="#paginaContato" class="mouse-container" id="mouse-pagina-habilidades">
                        <div class="mouse"></div>
                    </a>

                </section>

                <section class="paginas" id="paginaContato">
                    <div class="titulo" id="titulo-habilidade">
                        <h1>Contato</h1>
                    </div>

                    <?php
                    //Processo de armazenar no BD
                    if (isset($_POST['email'])) {
                        //CONECTANDO NO BD
                        $dbHost = "localhost";
                        $dbName = "SEGREDO MAS NO SITE ESTÁ CORRETO";
                        $dbChar = "utf8";
                        $dbUser = "SEGREDO MAS NO SITE ESTÁ CORRETO";
                        $dbPass = "SEGREDO MAS NO SITE ESTÁ CORRETO";

                        $pdo = new PDO(
                            "mysql:host=$dbHost;charset=$dbChar;dbname=$dbName",
                            $dbUser,
                            $dbPass,
                            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
                        );

                        //SQL INSERT
                        try {
                            $sql = "INSERT INTO `contato` (`email`, `name`, `comment`) VALUES (?,?,?)";
                            $stmt = $pdo->prepare($sql);
                            $stmt->execute([
                                htmlspecialchars($_POST['email']), htmlspecialchars($_POST['name']), htmlspecialchars($_POST['subject'])
                            ]);
                            // echo "<div>OK</div>";
                        } catch (Exception $ex) {
                            echo "<script>alert(" . $e->getMessage() . ")</script>";
                        }
                    }
                    ?>

                    <form class="formulario" method="post">
                        <label for="name">Nome</label>
                        <input type="text" id="name" name="name" placeholder="Seu nome.." required>

                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="email.." required>

                        <label for="subject">Mensagem</label>
                        <textarea id="subject" name="subject" placeholder="Escreva Algo.." style="height:200px" maxlength="500" required></textarea>

                        <input type="submit" value="Submit" id="submit">

                    </form>


                    <did class="conteudo-flex" id="redesContato">
                        <div class="logos"><a href="http://instagram.com/baby_vinicius" target="_blank"><i class="fab fa-instagram fa-lg"></a></i></div>
                        <div class="logos"><a href="https://github.com/vinicresende/" target="_blank"><i class="fab fa-github fa-lg"></a></i></div>
                        <div class="logos"><a href="#" target="_blank"><i class="fab fa-linkedin-in fa-lg"></a></i></div>
                    </did>
                </section>
            </div>


        </div>
    </div>


    <script src="main.js"></script>
    <script src="app.js"></script>
</body>

</html>