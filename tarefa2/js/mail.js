/*ajax formulário*/
function xmlhttp(){
if (window.XMLHttpRequest){
     return new XMLHttpRequest();
   }
   var versao = ['Microsoft.XMLHttp', 'Msxml2.XMLHttp', 'Msxml2.XMLHttp.6.0', 'Msxml2.XMLHttp.5.0', 'Msxml2.XMLHttp.4.0', 'Msxml2.XMLHttp.3.0','Msxml2.DOMdocument.3.0'];
        for (var i = 0; i < versao.length; i++){
           try{
               return new ActiveXObject(versao[i]);
           }catch(e){
               alert("Navegador Não Suporta Ajax");
             }
        }
        return null;
}
function enviarEmail(){

  nome = document.getElementById("name").value;
  email = document.getElementById("email").value;
  assunto = document.getElementById("subject").value;
  mensagem = encodeURI(document.getElementById("message").value);

  ajax = xmlhttp();
  if (ajax){

      /********************************
        alterar o nome do arquivo (mail.php)
        nesta linha logo abaixo
      ********************************/

     ajax.open('post','mail.php?Nome='+nome+'&Email='+email+'&assunto='+assunto+'&mensagem='+mensagem, true);

     ajax.onreadystatechange = onsend;
     ajax.send(null);

     // document.getElementById('sendok').innerHTML = '<div class=\"alert alert-success\">Mensagem enviada com sucesso, Você receberá um email de confirmação em seu email!</div>';
     alert("Mensagem enviada com sucesso!\nVocê receberá um email de confirmação em seu email");
  }
}
function onsend()
{
        if (ajax.readyState==4)
        {
                if (ajax.status==200)
                {
                        document.getElementById("nome").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("assunto").value = "";
                        document.getElementById("mensagem").value = "";
                        document.getElementById('sendok').innerHTML = ajax.responseText;
                }
        }
}