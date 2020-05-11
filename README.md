# uniforceFrontEnd

## framework

React JS

## tutos & help

[react from scratch](https://www.google.com)
[tutorial for beginners](https://www.youtube.com/watch?v=DLX62G4lc44)

[react router tutorial by DevEd top!](https://www.youtube.com/watch?v=Law7wfdg_ls&pbjreload=10)


## REACT JS for uniforce project

### COMING SOON

Le composant COMING SOON correspond à l'écran d'attente mis en ligne: "logo uni-force + site en construction".

Il suffit de l'appeler dans App.js

### AUTRES COMPOSANTS

- HEADER / FOOTER

- MENU (avec react router)

- HOME -> Page d'accueil + video plateforme twitch

- UNIFORCE TEAM / GAMER CARDS

    - composant parent : UNIFORCE TEAM
    - compoant enfant: GAMER CARDS

    => Passage de props entre les 2 composants

### DONNEES

- exemple de données "en dur" data/gamersInfos.js
- exemple appel API:

    ```javascript
        // WIP for http request
        componentDidMount(){
            fetch("hhtfzfjzfnfzfo", {
                method:'POST',
                body:JSON.stringify({
                "kzfjzlfnfln":"fihhf"
                })
            }).then(res => res.json).then(data =>{
                this.setState(prevState => {
                webpagedata: data
                })
            })
        }
    ```

- Le STATE 
    Les données récupérées via API ou stockage en dur, sont organisées dans le state de chaque composant : 

    ```javascript
        class App extends Component{
            constructor () {
                super()
                this.state = {
                // récupérer les données +tôt initialiser un tableau 
                webpagedata : []
                }
            }
        }
    ```

  
  ## CONCLUSION

  Le projet donne une structure de base avec un design basique aux couleurs de UNI-FORCE.

  Il permet d'ajouter des pages simplement.

  La logique des props et du state est fonctionnelle.


