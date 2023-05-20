AFRAME.registerComponent("car-model",{
  schema:{
    modelRef : {type: "string", default:"../assets/car/scene.gltf"},
    countClick:{type:"number", default:0}
  },
  init:function() {
    // Do something when component first attached.
    this.el.setAttribute("gltf-model",this.data.modelRef);
    const position={x:0, y:50, z:80};
    const rotation={x:0, y:-100, z:0}
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  },
  update:function(){
      window.addEventListener("click",e => {
          this.data.countClick = this.data.countClick+1
          if(this.data.countClick ===1){
              const rotation={x:0,y:20, z:0};
              this.el.setAttribute("rotation",rotation)
          }
          else if(this.data.countClick === 2){
              const rotation={x:0, y:100, z:0};
              this.el.setAttribute("rotation",rotation);
          }
          else if(this.data.countClick === 3){
            const rotation={x:0 ,y:-190,z:0}
            this.el.setAttribute("rotation",rotation)
          }
          else{
            const rotation={x:0, y:-50, z:0}
            this.el.setAttribute("rotation",rotation)
            this.data.countClick = 0;
          }
      })
  }
})