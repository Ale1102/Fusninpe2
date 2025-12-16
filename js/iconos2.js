 document.getElementById("boxProtesis").addEventListener("mouseover", function() {
           //document.getElementById("imgProtesis").src = "assets/images/fav-icon/Oido-2.png";        
          document.getElementById("imgProtesis").style.transition = "opacity 0.5s";
           document.getElementById("imgProtesis").style.opacity = 0;
                setTimeout(() => {
            document.getElementById("imgProtesis").src = "assets/images/fav-icon/Oido-2.png";
          document.getElementById("imgProtesis").style.opacity = 1;
          }, 100);
          
          });
          document.getElementById("boxProtesis").addEventListener("mouseout", function() {
           //document.getElementById("imgProtesis").src = "assets/images/fav-icon/Oido.png";        
          
           document.getElementById("imgProtesis").style.transition = "opacity 0.5s";
            document.getElementById("imgProtesis").style.opacity = 0;
                setTimeout(() => {
            document.getElementById("imgProtesis").src = "assets/images/fav-icon/Oido2.png";
          document.getElementById("imgProtesis").style.opacity = 1;
          }, 100);
           
          });
          
            document.getElementById("boxTamisaje").addEventListener("mouseover", function() {
           //document.getElementById("imgProtesis").src = "assets/images/fav-icon/Oido-2.png";        
          document.getElementById("imgTamisaje").style.transition = "opacity 0.5s";
           document.getElementById("imgTamisaje").style.opacity = 0;
                setTimeout(() => {
            document.getElementById("imgTamisaje").src = "assets/images/fav-icon/tamisaje-white.png";
          document.getElementById("imgTamisaje").style.opacity = 1;
          }, 100);
           // Reemplaza con la URL deseada
          });
          document.getElementById("boxTamisaje").addEventListener("mouseout", function() {
           //document.getElementById("imgProtesis").src = "assets/images/fav-icon/Oido.png";        
          
           document.getElementById("imgTamisaje").style.transition = "opacity 0.5s";
            document.getElementById("imgTamisaje").style.opacity = 0;
                setTimeout(() => {
            document.getElementById("imgTamisaje").src = "assets/images/fav-icon/tamisaje2.png";
          document.getElementById("imgTamisaje").style.opacity = 1;
          }, 100);
           // Reemplaza con la URL deseada
          });