# webservicerestful
Web Service restful nodejs

Express - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal.
Mongoose - elegant mongodb object modeling for node.js

app.js - "Entry point" da aplicação, definição das rotas.
app_config.js - Configurações de acesso e cabeçalhos http.
db_config.js - configuração do schema e de conexão com o mongodb
controller/languageController.js - isolamento do crud no mongodb

web service - 

GET 127.0.0.1:5000/language

{
     "_id": "55c0343a45dcda5811044ba4",
    
     "name": "C",
    
     "paradigm": "estruturada e imperativa",
   
     "author": "Dennis Ritchie",
    
     "created_at": "2015-08-04T03:40:42.742Z",
    
     "__v": 0
  
}

GET 127.0.0.1:5000/language/55c0343a45dcda5811044ba4

{
     "_id": "55c0343a45dcda5811044ba4",
     
     "name": "C",
    
     "paradigm": "estruturada e imperativa",
   
     "author": "Dennis Ritchie",
    
     "created_at": "2015-08-04T03:40:42.742Z",
    
     "__v": 0
  
}

POST 127.0.0.1:5000/language

{   
     "name": "C",
    
     "paradigm": "estruturada e imperativa",
   
     "author": "Dennis Ritchie"
}

PUT 127.0.0.1:5000/language


{
     "_id": "55c0343a45dcda5811044ba4",
     
     "name": "C",
     
     "paradigm": "estruturada e imperativa",
    
     "author": "Dennis Ritchie",
    
}

delete 127.0.0.1:5000/language/55c0343a45dcda5811044ba4

{
  
     "response": "Linguagem deletada com sucesso"

}
