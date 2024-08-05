    var express= require("express");
    var app= express();

    // Serve static files from the 'public' folder
    app.use(express.static(__dirname+'/public'))
    app.use(express.json()); 
    app.use(express.urlencoded({ extended: false }));app.use

    // Simple GET endpoint
    app.get("/", (req, res) => {
        const n1 = "<html><head><title>My Simple Page</title><body><H1>HELLO THERE </H1><h1>Welcome to My Simple Page</h1><p>This is a static HTML file served by Express.</p></body></html>";
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(n1));     
    })

    var port = process.env.port || 3000;
    app.listen(port,()=> {
        console.log("hello i'm listening to port "+port);
    })