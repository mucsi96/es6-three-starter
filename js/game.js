import Cube from 'js/cube'

export class Game {
    constructor() {
        this.elements = [];
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer();
        document.body.appendChild( this.renderer.domElement );
        this.handleResize()
        window.addEventListener('resize', this.handleResize.bind(this), false);

        this.addElement(new Cube());
        this.render();
    }

    addElement(element) {
        this.elements.push(element);
        element.place(this.scene);
    }

    handleResize() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    }

    render() {
        this.elements.forEach(function(element) {
            element.render();
        });
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }
}
