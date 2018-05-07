window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('cvs')
    const engine = new BABYLON.Engine(canvas, true)
    const createScene = () => {
        const scene = new BABYLON.Scene(engine)
        const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene)
        camera.setTarget(BABYLON.Vector3.Zero())
        camera.attachControl(canvas, false)
        const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene)
        const sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene)
        sphere.position.y = 1
        const groundMaterial = new BABYLON.StandardMaterial('groundMaterial', scene)
        groundMaterial.diffuseColor = new BABYLON.Color3(0.1, 0.3, 0.1)
        const ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene)
        ground.material = groundMaterial
        ground.receiveShadow = true

        return scene
    }

    const scene = createScene()
    engine.runRenderLoop(() => {
        scene.render()
    })
})