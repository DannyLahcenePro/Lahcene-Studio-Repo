import{O,B as I,F as z,b,c as P,U as R,V as m,d as L,H as k,N as B,e as V,C as f,f as M,g as q,R as Y,S as H,P as G,W,h as d,L as j,a as E,M as U,i as Q,j as Z,k as A,l as N,m as X,n as K,A as J,D as $}from"./three.module-DeTNbURA.js";const ee={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class w{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const te=new O(-1,1,1,-1,0,1),S=new I;S.setAttribute("position",new z([-1,3,0,-1,-1,0,3,-1,0],3));S.setAttribute("uv",new z([0,2,0,0,2,0],2));class F{constructor(e){this._mesh=new b(S,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,te)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ie extends w{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof P?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=R.clone(e.uniforms),this.material=new P({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new F(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _ extends w{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const o=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,c;this.inverse?(r=0,c=1):(r=1,c=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),s.buffers.stencil.setFunc(o.ALWAYS,r,4294967295),s.buffers.stencil.setClear(c),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(o.EQUAL,1,4294967295),s.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),s.buffers.stencil.setLocked(!0)}}class se extends w{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class oe{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new m);this._width=i.width,this._height=i.height,t=new L(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:k}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ie(ee),this.copyPass.material.blending=B,this.clock=new V}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let o=0,s=this.passes.length;o<s;o++){const r=this.passes[o];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const c=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}_!==void 0&&(r instanceof _?i=!0:r instanceof se&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new m);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(i,o),this.renderTarget2.setSize(i,o);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class re extends w{constructor(e,t,i,o,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=o,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new f}render(e,t,i){const o=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==void 0&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=r),e.autoClear=o}}const ne={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class ae extends w{constructor(e,t,i){super(),this.scene=e,this.camera=t;const o=i.focus!==void 0?i.focus:1,s=i.aspect!==void 0?i.aspect:t.aspect,r=i.aperture!==void 0?i.aperture:.025,c=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new L(1,1,{minFilter:M,magFilter:M,type:k}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new q,this.materialDepth.depthPacking=Y,this.materialDepth.blending=B;const l=ne,a=R.clone(l.uniforms);a.tDepth.value=this.renderTargetDepth.texture,a.focus.value=o,a.aspect.value=s,a.aperture.value=r,a.maxblur.value=c,a.nearClip.value=t.near,a.farClip.value=t.far,this.materialBokeh=new P({defines:Object.assign({},l.defines),uniforms:a,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.uniforms=a,this.fsQuad=new F(this.materialBokeh),this._oldClearColor=new f}render(e,t,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const o=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(o),e.autoClear=s}setSize(e,t){this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}class ce{constructor(){this.config={grid:{spacing:25,pointSize:1.5,minPointSize:0,maxPointSize:2,depthAmplitude:10},bokeh:{focus:329,aperture:0,maxblur:.15},mouse:{interactionDistance:150,displacementMax:40},colors:{touchdesigner:{close:15948188,medium:3614415},design:{close:16740137,medium:9640747},development:{close:9992959,medium:2112684}},videoPlane:{width:300,height:400,position:{x:window.innerWidth*.1,y:0,z:35}}},this.scene=new H,this.camera=new G(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new W({alpha:!0}),this.gridPoints=[],this.currentCategory="touchdesigner",this.mouse=new m,this.mouseInScene=new d,this.waterMovementOffset=50,this.isTransitioning=!1,this.fadeOutAnimation=null,this.targetColors={medium:new f(this.config.colors[this.currentCategory].medium),close:new f(this.config.colors[this.currentCategory].close)},this.currentColors={medium:new f(this.config.colors[this.currentCategory].medium),close:new f(this.config.colors[this.currentCategory].close)},this.colorTransitionSpeed=.05,this.composer=null,this.bokehPass=null,this.videoTexture=null,this.videoMaterial=null,this.videoPlane=null,this.currentVideo=null,this.init(),this.gridPoints.forEach(e=>{e.scale.set(0,0,0)}),this.fadeInPoints(600)}init(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=j,document.querySelector("main").appendChild(this.renderer.domElement),this.camera.position.z=385,this.createGrid(),this.setupPostProcessing(),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("mousemove",e=>this.onMouseMove(e)),this.animate(),this.createVideoPlane()}setupPostProcessing(){this.composer=new oe(this.renderer);const e=new re(this.scene,this.camera);this.composer.addPass(e),this.bokehPass=new ae(this.scene,this.camera,{focus:this.config.bokeh.focus,aperture:this.config.bokeh.aperture,maxblur:this.config.bokeh.maxblur,width:window.innerWidth,height:window.innerHeight,resolution:new m(1024,1024),rings:3,samples:2,showFocus:!1}),this.composer.addPass(this.bokehPass)}createGrid(){const e=Math.floor(window.innerWidth/this.config.grid.spacing),t=Math.floor(window.innerHeight/this.config.grid.spacing);for(let i=0;i<e;i++)for(let o=0;o<t;o++){const s=(i-e/2)*this.config.grid.spacing,r=(o-t/2)*this.config.grid.spacing,c=new E(this.config.grid.pointSize,8,8),l=new U({color:this.config.colors[this.currentCategory].medium,transparent:!0,opacity:1,blending:Q}),a=new b(c,l);a.position.set(s,r,0),a.originalPosition=new d(s,r,0),this.gridPoints.push(a),this.scene.add(a)}}updateColors(e){this.currentCategory=e;const t=this.config.colors[e];this.targetColors.medium.setHex(t.medium),this.targetColors.close.setHex(t.close),this.videoMaterial&&this.videoMaterial.uniforms&&this.videoMaterial.uniforms.colorClose&&this.videoMaterial.uniforms.colorMedium&&(this.videoMaterial.uniforms.colorClose.value.setHex(t.close),this.videoMaterial.uniforms.colorMedium.value.setHex(t.medium))}updatePoints(){this.waterMovementOffset+=.007,this.currentColors.medium.lerp(this.targetColors.medium,this.colorTransitionSpeed),this.currentColors.close.lerp(this.targetColors.close,this.colorTransitionSpeed);let e=0;if(this.gridPoints.forEach(t=>{const i=Math.sin(t.originalPosition.x*.02+this.waterMovementOffset)*5,o=Math.cos(t.originalPosition.y*.02+this.waterMovementOffset)*5,s=Math.sin(t.originalPosition.x*.01+t.originalPosition.y*.01+this.waterMovementOffset)*this.config.grid.depthAmplitude,r=new d(i,o,s),c=t.position.distanceTo(this.mouseInScene);let l=new d;if(c<this.config.mouse.interactionDistance){const v=t.position.clone().sub(this.mouseInScene).normalize(),g=1-c/this.config.mouse.interactionDistance;l=v.multiplyScalar(g*this.config.mouse.displacementMax);const x=new f().copy(this.currentColors.medium);x.lerp(this.currentColors.close,g),t.material.color.copy(x)}else t.material.color.copy(this.currentColors.medium);const a=this.isTransitioning?t.scale.x:1,u=t.originalPosition.clone().add(r.multiplyScalar(a)).add(l.multiplyScalar(a));t.position.lerp(u,.5);const h=(t.position.z+this.config.grid.depthAmplitude)/(2*this.config.grid.depthAmplitude),p=this.config.grid.minPointSize+(this.config.grid.maxPointSize-this.config.grid.minPointSize)*h;this.isTransitioning||t.scale.setScalar(p),t.material.opacity=.85+h*.15,e+=t.position.z}),this.bokehPass){e/=this.gridPoints.length;const t=this.camera.position.z+e;this.bokehPass.uniforms.focus.value+=(t-this.bokehPass.uniforms.focus.value)*.05}}onMouseMove(e){if(this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.videoMaterial&&this.videoMaterial.uniforms){this.videoMaterial.uniforms.mousePosition.value.set(e.clientX/window.innerWidth,1-e.clientY/window.innerHeight);const o=1,s=this.videoMaterial.uniforms.mouseInfluence.value;this.videoMaterial.uniforms.mouseInfluence.value+=(o-s)*.1}const t=new d(this.mouse.x,this.mouse.y,.5);t.unproject(this.camera),t.sub(this.camera.position).normalize();const i=-this.camera.position.z/t.z;this.mouseInScene.copy(this.camera.position).add(t.multiplyScalar(i))}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer&&this.composer.setSize(e,t),this.gridPoints.forEach(i=>this.scene.remove(i)),this.gridPoints=[],this.createGrid()}animate(){this.waterMovementOffset+=.01,this.updatePoints(),this.videoMaterial&&this.videoMaterial.uniforms&&(this.videoMaterial.uniforms.time.value+=.01),this.composer.render(),requestAnimationFrame(this.animate.bind(this))}createVideoPlane(){const e=document.createElement("video");e.autoplay=!0,e.loop=!0,e.muted=!0,e.playsInline=!0,e.crossOrigin="anonymous",this.videoTexture=new Z(e),this.videoTexture.minFilter=A,this.videoTexture.magFilter=A,this.videoTexture.format=N,this.videoTexture.colorSpace=X,this.videoTexture.generateMipmaps=!1;const t=20,i=25,o=this.config.videoPlane.width,s=this.config.videoPlane.height,r=new K(o,s,t,i),c=new P({uniforms:{videoTexture:{value:this.videoTexture},time:{value:0},tileSize:{value:new m(20,20)},mousePosition:{value:new m(.5,.5)},mouseInfluence:{value:500},displacementIntensity:{value:75}},vertexShader:`
                    varying vec2 vUv;
                    varying float vDisplacement;
                    
                    uniform float time;
                    uniform vec2 tileSize;
                    uniform vec2 mousePosition;
                    uniform float mouseInfluence;
                    uniform float displacementIntensity;
                    
                    void main() {
                        vUv = uv;
                        
                        // Calculer la position de la tuile
                        vec2 tilePosition = floor(vUv * tileSize) / tileSize;
                        
                        // Distance à la souris
                        float mouseDistance = length(vUv - mousePosition);
                        float mouseEffect = (1.0 - smoothstep(0.05, 0.25, mouseDistance)) * mouseInfluence;
                        
                        // Effet de vague basé sur le temps et la position (amplitude réduite)
                        float waveX = sin(position.x * 0.02 + time * 2.0) * 3.0;
                        float waveY = cos(position.y * 0.02 + time * 2.0) * 3.0;
                        float waveZ = sin(position.x * 0.01 + position.y * 0.01 + time * 2.0) * 3.0;
                        
                        // Déplacement basé sur la position de la tuile et les vagues
                        float displacement = sin(tilePosition.x * 10.0 + time) * 
                                          cos(tilePosition.y * 10.0 + time) * 
                                          displacementIntensity * mouseEffect;
                        
                        // Appliquer le déplacement et les vagues
                        vec3 newPosition = position;
                        newPosition.x += waveX;
                        newPosition.y += waveY;
                        newPosition.z += displacement + waveZ;
                        
                        vDisplacement = displacement;
                        
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
                    }
                `,fragmentShader:`
                    uniform sampler2D videoTexture;
                    varying vec2 vUv;
                    varying float vDisplacement;
                    
                    void main() {
                        // Force de l'aberration basée sur le déplacement
                        float aberrationStrength = abs(vDisplacement) * 0.003;
                        
                        // Décalage des canaux RGB
                        vec2 redOffset = vUv + vec2(aberrationStrength, 0.0);
                        vec2 greenOffset = vUv;
                        vec2 blueOffset = vUv - vec2(aberrationStrength, 0.0);
                        
                        // Échantillonner la texture pour chaque canal
                        float r = texture2D(videoTexture, redOffset).r;
                        float g = texture2D(videoTexture, greenOffset).g;
                        float b = texture2D(videoTexture, blueOffset).b;
                        float a = texture2D(videoTexture, vUv).a;
                        
                        // Combiner les canaux avec un effet de luminosité
                        float brightness = 1.0 + abs(vDisplacement) * 0.05;
                        vec3 color = vec3(r, g, b) * brightness;
                        
                        gl_FragColor = vec4(color, a);
                    }
                `,transparent:!0,blending:J,side:$});this.videoMaterial=c,this.videoPlane=new b(r,this.videoMaterial),this.videoPlane.position.set(this.config.videoPlane.position.x,this.config.videoPlane.position.y,this.config.videoPlane.position.z),this.scene.add(this.videoPlane),this.controlPoints=[];const l=new E(2),a=new U({color:16777215,transparent:!0,opacity:0});this.originalVertices=r.attributes.position.array.slice();const u=o/(t/2),h=s/(i/2);for(let p=0;p<=t/2;p++)for(let v=0;v<=i/2;v++){const g=p*u-o/2+this.config.videoPlane.position.x,x=v*h-s/2+this.config.videoPlane.position.y,T=this.config.videoPlane.position.z,y=new b(l,a);y.position.set(g,x,T),y.originalPosition=new d(g,x,T),this.controlPoints.push(y),this.scene.add(y)}this.currentVideo=e}updateVideoTexture(e){!this.videoPlane||!this.videoMaterial||this.isTransitioning||(this.isTransitioning=!0,this.currentVideo&&this.currentVideo.pause(),this.currentVideo.src=e,this.currentVideo.onloadeddata=()=>{this.currentVideo.play().then(()=>{this.isTransitioning=!1}).catch(t=>{console.error("Erreur de lecture vidéo:",t),this.isTransitioning=!1})},this.currentVideo.onerror=()=>{console.error("Erreur de chargement vidéo"),this.isTransitioning=!1})}fadeOutPoints(e=600){if(console.log("fadeOutPoints anim"),this.isTransitioning)return;this.isTransitioning=!0;const t=performance.now(),i=this.gridPoints.map(s=>s.scale.x),o=s=>{const r=s-t,c=Math.min(r/e,1),l=c===0?0:Math.pow(2,10*(c-1));this.gridPoints.forEach((a,u)=>{const h=i[u]*(1-l);a.scale.set(h,h,h)}),c<1&&(this.fadeOutAnimation=requestAnimationFrame(o))};this.fadeOutAnimation=requestAnimationFrame(o)}fadeInPoints(e=600){if(console.log("fadeInPoints anim"),this.isTransitioning)return;this.isTransitioning=!0;const t=performance.now(),i=this.gridPoints.map(s=>{const r=(s.position.z+this.config.grid.depthAmplitude)/(2*this.config.grid.depthAmplitude);return this.config.grid.minPointSize+(this.config.grid.maxPointSize-this.config.grid.minPointSize)*r}),o=s=>{const r=s-t,c=Math.min(r/e,1),l=Math.pow(c,3);this.gridPoints.forEach((a,u)=>{const h=i[u]*l;a.scale.set(h,h,h)}),c<1?this.fadeInAnimation=requestAnimationFrame(o):this.isTransitioning=!1};this.fadeInAnimation=requestAnimationFrame(o)}}const C=new ce;window.addEventListener("beforeunload",()=>{if(C){window.removeEventListener("resize",C.onResize),window.removeEventListener("mousemove",C.onMouseMove),C.gridPoints.forEach(e=>{e.geometry.dispose(),e.material.dispose()});const n=document.querySelector("canvas");n&&n.remove()}});const le=700,he=700,ue={"index.html":{top:"header",center:".container",bottom:"footer"},"projects.html":{top:"header",center:".menu-projects-content",bottom:"footer"},"about.html":{top:"header",center:".about-container",bottom:"footer"},"contact.html":{top:"header",center:".contact-container",bottom:"footer"}};function D(){const n=window.location.pathname,e=n.substring(n.lastIndexOf("/")+1)||"index.html";return ue[e]}function fe(){const n=D();if(!n)return;if(!document.referrer.includes(window.location.host)){const t={top:document.querySelector(n.top),center:document.querySelector(n.center),bottom:document.querySelector(n.bottom)};Object.values(t).forEach(i=>{i&&(i.style.opacity="0",i.classList.add("fade-initial"))})}else{const t=document.querySelector(n.center);t&&t.classList.add("fade-initial")}}fe();function de(){const n=D();if(!n)return;const e=!document.referrer.includes(window.location.host),t={top:document.querySelector(n.top),center:document.querySelector(n.center),bottom:document.querySelector(n.bottom)};Object.values(t).forEach(i=>{i&&(i.classList.add("fade-transition"),i.style.opacity="0",i.style.transform="translateY(20px)")}),e?(setTimeout(()=>{t.top&&(t.top.style.opacity="1",t.top.style.transform="translateY(0)",t.top.classList.remove("fade-initial"),t.top.querySelectorAll("a").forEach((o,s)=>{setTimeout(()=>{o.style.opacity="1",o.style.transform="translateY(0)"},s*100)}))},800),setTimeout(()=>{if(t.center){t.center.style.opacity="1",t.center.style.transform="translateY(0)",t.center.classList.remove("fade-initial");const i=t.center.querySelectorAll(".bento-item");if(i.length>0)i.forEach((o,s)=>{setTimeout(()=>{o.style.opacity="1",o.style.transform="translateY(0)"},s*150+200)});else{const o=t.center.children;Array.from(o).forEach((s,r)=>{setTimeout(()=>{s.style.opacity="1",s.style.transform="translateY(0)"},r*150)})}}},1200),setTimeout(()=>{t.bottom&&(t.bottom.style.opacity="1",t.bottom.style.transform="translateY(0)",t.bottom.classList.remove("fade-initial"))},1600)):(t.top&&(t.top.style.opacity="1",t.top.style.transform="translateY(0)",t.top.classList.remove("fade-initial")),t.bottom&&(t.bottom.style.opacity="1",t.bottom.style.transform="translateY(0)",t.bottom.classList.remove("fade-initial")),t.center&&setTimeout(()=>{t.center.style.opacity="1",t.center.style.transform="translateY(0)",t.center.classList.remove("fade-initial");const i=t.center.querySelectorAll(".bento-item");if(i.length>0)i.forEach((o,s)=>{setTimeout(()=>{o.style.opacity="1",o.style.transform="translateY(0)"},s*150+200)});else{const o=t.center.children;Array.from(o).forEach((s,r)=>{setTimeout(()=>{s.style.opacity="1",s.style.transform="translateY(0)"},r*150+100)})}},100))}function me(){const n=D();if(!n)return;const e=document.querySelector(n.center);e&&(e.classList.add("fade-transition"),e.offsetHeight,e.style.opacity="0",e.style.transform="translateY(20px)",e.classList.add("fade-initial"))}document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{de()},500),document.querySelectorAll("a[href]").forEach(n=>{n.addEventListener("click",function(e){if(this.getAttribute("target")==="_blank"||this.getAttribute("href").startsWith("#")||this.getAttribute("href").startsWith("mailto:")||this.getAttribute("href").startsWith("tel:"))return;e.preventDefault();const t=this.getAttribute("href");C.fadeOutPoints(he),me(),setTimeout(()=>{window.location.href=t},le)})})});export{C as t};
//# sourceMappingURL=main-B_O-L8LT.js.map
