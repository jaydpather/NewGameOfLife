import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Layout from '../components/MyLayout';


const mainDivStyle = {
}

export default class extends Component {

  constructor(props){
    super(props);
  }

  setPixel(canvasCtx, x, y, r, g, b){
    const a = 255; //alpha
    canvasCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    canvasCtx.fillRect(x, y, 1, 1);
  }

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    
    var predators = 60, plants = 200, herbivores = 125; //this one almost goes extinct twice, then recovers and becomes mostly herbivores!

    const x = 100;
    const y = 100;

    let setPixelFn = (c, x, y, r, g, b) => this.setPixel(c, x, y, r, g, b)

    setInterval(function (){
      let starvationPct = 1.0;

      //herbivores eat or die:
      plants -= herbivores;
      if(plants < 0){
        herbivores += starvationPct * plants; //the number of negative plants is the number of herbivores that died of starvation
        plants = 0;
      }
      
      //predators eat or die:
      herbivores -= predators;
      if(herbivores < 0){
        predators += starvationPct * herbivores //the number of negative herbivores is the number of predators that died of starvation
        herbivores = 0;
      }

      //die of random events (wildfire, struck by lightning):
      // let randomSurviveBasePct = 80;
      // let randomSurvivePct = (randomSurviveBasePct + 10*Math.random()) / 100.0;
      // plants *= randomSurvivePct;
      // randomSurvivePct = (randomSurviveBasePct + 10*Math.random()) / 100.0;
      // herbivores *= randomSurvivePct;
      // randomSurvivePct = (randomSurviveBasePct + 10*Math.random()) / 100.0;
      // predators *= randomSurvivePct;

      //everything reproduces:
      let reproductionRate = 2.0;
      plants *= reproductionRate;
      if(plants > 255)
        plants = 255
      
      herbivores *= reproductionRate;
      if(herbivores > 255)
        herbivores = 255;
      
      predators *= reproductionRate;
      if(predators > 255)
        predators = 255


      for(var ix = 0; ix < x; ix++){
        for(var iy =0; iy < y; iy++){
          setPixelFn(ctx, ix, iy, predators, plants, herbivores)
        }
      }
    },
    300);
    
  }

  render () {
    console.log("rendering") //todo: why do we see this log message on both server and console when doing SSR?
    //todo: responsive text area for code
    return (
      <Layout>
        <canvas ref="canvas" width={640} height={480} />
      </Layout>
    )
  }
}