({
        appDir: "../",
        baseUrl: "scripts",
        dir: "../../webapp-build",
        //Comment out the optimize line if you want
        //the code minified by UglifyJS
        //optimize: "none",

        modules: [
            {
                name: "main",
                exclude: ["jquery"]
            }
        ]
})
