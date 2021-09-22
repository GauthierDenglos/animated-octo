//TODO 6
var Ennemy = function(name, color, position, direction) {

    this.name = name;
    this.position = position;
    this.life = 1;
    this.direction = direction;
    this.speed = 0;

    this.material = new THREE.MeshLambertMaterial({
        color: color,
        });

    var singleGeometry = new THREE.Geometry();

    vehiculeMesh = new THREE.ConeGeometry(5, 20, 32);
    this.graphic = new THREE.Mesh(vehiculeMesh, this.material);
    this.graphic.position.z = 6;
    this.graphic.position.x = position.x;
    this.graphic.position.y = position.y;


    this.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), this.direction+(3*Math.PI/2));
};

Ennemy.prototype.dead = function () {
    this.graphic.position.z = this.graphic.position.z-0.1;
}

Ennemy.prototype.move = function () {
    var moveTo = new THREE.Vector3(
        this.speed * Math.cos(this.direction) + this.position.x,
        this.graphic.position.z
    );

    this.position = moveTo;

    if (this.speed > 0) {
        this.speed = this.speed - 10;
    }
    else if (this.speed < 0) {
        this.speed = this.speed + 10;
    }

    this.graphic.position.x = this.position.x;
    
};