Docs Pour l'API | Node.js | REST API:

• Recupérer toutes les places ( site historiques ) :
    Method: GET 
    Lien: http://localhost:5000/api/places

• Récupérer une place spécifique :
    Method: GET
    Lien: http://localhost:5000/api/places/:id
    Exemple: (http://localhost:5000/api/places/5) => {"id": 5, "nom": "Gouraya", "description": "Le lieu qui représente Bejaia", "lat": 36.7708493, "lng": 5.0723562}

• Ajouter une place :
    Method: POST
    Lien: http://localhost:5000/api/places/
    Body: {"nom": "Remplir le nom", "description": "Remplir la description", "lat": 36.7708493, "lng": 5.0723562}  // exemple de body a envoyer dans la requette

• Modifier une place :
    Method: PATCH
    Lien: http://localhost:5000/api/places/:id
    Body: (indiquer le champ a modifier dans le body exemple on veut modifier que le nom => ) {"nom": "Cap Carbon"}

• Supprimer une place :
    Method: DELETE
    Lien: http://localhost:5000/api/places/:id
    
    
Important : dans ce projet il y a un fichier SQL qu'il faut ajouter sur le WAMP ou le serveur que vous utiliser.
