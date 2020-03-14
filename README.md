# NewGameOfLife
 a modern version of Conway's Game of Life


## Projects:
  * src/node
    * NodeJS front end
    * to run: npm run dev
  * src/Fable
    * Fable project (F# that transpiles to JS)
    * Transpiled JS code is called by front end
    * to build: 
      * npm run-script build
      * transpiles to a JS bundle file in the node project
    * to start:
      * npm run-script start
      * serves content from localhost:8080
    * to debug: 
      * npm run-script start
        * this doesn't work as a pre-build step because I can't get it to run in the background
      * then press F5 in VS Code
      * Note:
        * this will only hit breakpoints in your Fable F# code
        * if you want to hit breakpoints in the node project, you will have to debug that project
          * example: debugging an issue w/ client-side rendering
        * you can only debug one project at a time, since only 1 process can attach to the browser.