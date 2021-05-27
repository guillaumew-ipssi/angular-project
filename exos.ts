// Créer une interface Point(x, y) ;

interface Point{
    x: number,
    y: number
}

// Créer une fonction qui prend un Point en argument et qui affiche ces coordonnées

let afficher = (p: Point) => {console.log(p.x, p.y)}

// Créer une interface Tpoint qui déclare une fonction translate(delta_x, delta_y) et hérite de l’interface Point.

interface Tpoint extends Point {
    translate(delta_x: number, delta_y: number): void
}

// Créer une Class MyPoint qui hérite de l’interface Tpoint
// → ajouter un constructeur qui initialise les coordonnées du point MyPoint
// → définir la fonction translate qui rajoute le delta sur la coordonnée correspondante.

class MyPoint implements Tpoint {

    x:number;
    y:number;

    constructor (x: number, y:number) {
        this.x = x;
        this.y = y;
    }

    translate (delta_x: number, delta_y: number) : void {
        this.x += delta_x;
        this.y += delta_y;
    }
}

// Créer une fonction qui prend en argument un objet de type Point et
// qui affiche dans la console ( console.log() ) les coordonnées du Point.

let afficherObjPoint = (p: MyPoint) => { console.log("x = " + p.x,"y = " + p.y)}

// Créer une instance de la classe MyPoint avec les coordonnées (3, 4) puis afficher les
//     Utiliser la fonction translate sur l’instance de l’objet crée.
//     Afficher le résultat

let myP = new MyPoint(3,4);
afficherObjPoint(myP);
myP.translate(2,2);
afficherObjPoint(myP);