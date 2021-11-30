var content1 = '<section id="one"><h3 class="onetitle">étude : de Juriste à Développeur Web</h3><img src="https://i.pinimg.com/564x/9c/64/e6/9c64e63a6d171d90c3896a227aeeaad1.jpg" alt=""><p>Après mon baccalauréat, j\'ai suivi une la faculté de droit et de science politique. J\'ai fait la première année à <a href="https://www.passion4humanity.com/">l\'université d\'Ankatso</a> et la seconde à <a href="http://www.cntemad.mg/">Cntmad</a>. En 2019, j\'ai opté pour un grand changement de carrière. Ainsi, je suis passé du code juridique(Code civil, Code pénal, Code de procédure civile, Code d\'instruction criminelle, Code de commerce) au code informatique, d\'abord, j\'ai été autodidacte, et en 2020, j\'ai eu une formation gratuite d\'un an auprès de <a href="https://www.passion4humanity.com/">P4H</a>. </p></section>';

var content2 = '<section id="three"><h3 class="twotitle">Parcours professionnel : Conseillère cliente</h3><img src="https://i.pinimg.com/236x/54/56/80/545680b1b1ec22a48b0d39f92d6fefaf.jpg" alt=""><p>En y réfléchissant bien, mon parcours n\'est pas très cohérent, je suis passé de juriste à conseillère client avant de trouver ma vraie vocation : développement web à mes vingt ans. Ma première expérience professionnel officiel a durée un an et demi, entre juin 2019 et novembre 2020. Je prenais des appels dans le service technique mobile de <a href="https://www.sfr.fr/">SFR</a>, une grande société française. Toutefois, cela m\'a appris, a développer mon quotient émotionnel, mon sens de l\'empathie et relation avec les clients.';

var content3 = '<section id="two"><h3 class="threetitle">Activité : Bibliothèque de Rue</h3><img src="https://i.pinimg.com/564x/1f/b2/33/1fb233a3101263a10b506d38cc38e80c.jpg" alt=""><p>En tant que bénévole à l\'association , qui a pour but de lutter contre la misère et la pauvreté, nous nous réunissons tous les samedis <a href="https://www.atd-quartmonde.org/">ATD Quart Monde</a>, afin de lire des livres aux enfants des rues, certains, sont scolarisés, la plupart ne le sont pas. Cela permet de donner une petite pause, dans un bout de temps, on se sent libéré de nos pressions quotidiennes pour se concentrer que sur la joie des enfants, leurs agitations, leurs rires... Magnifique expérience !</p></section>';

$(document).ready(function(){

    $(".background-one").click(function(){
        console.log(content);
      $(".background-two").slideToggle();
      $(".background-three").slideToggle();
      $(".background-default").html(content1);
      var content =  $(".background-default").html();
        // if (content == content1) {
            $(".background-one").click(function(){
                $("#one").remove();
                console.log(content);
                location.reload();
            }); 
        // }
    });

    $(".background-two").click(function(){
        console.log(content);
      $(".background-three").slideToggle();
      $(".background-one").slideToggle();
      $(".background-default").html(content2);
      var content =  $(".background-default").html();
        // if (content == content2) {
            $(".background-two").click(function(){
                $("#three").remove();
                console.log(content);
                location.reload();
            }); 
        // }
    });

    $(".background-three").click(function(){
        console.log(content);
      $(".background-two").slideToggle();
      $(".background-one").slideToggle();
      $(".background-default").html(content3);

      var content =  $(".background-default").html();
        // if (content == content3) {
            $(".background-three").click(function(){
                $("#two").remove();
                console.log(content);
                location.reload();
            }); 
        // }
    });
  });