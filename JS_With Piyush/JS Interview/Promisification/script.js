// Promisification

function promisify(fn) {            // This Process is known as Promisification
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (error, result) => {
                if(error) return reject(error);
                return resolve(result);
            });
        });
    };
};

// Without Promise
function loadScript(src, callback) {
    const script = document.createElement("script");
    
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error("Error Loading.."));
    document.head.appendChild(script);
}

const loadScriptNew = promisify(loadScript);

// loadScriptNew("test.js")
//     .then(() => console.log("Done:"))
//     .catch((err) => console.log("We got Error!!"));


(async () => {
    try{
        const result = await loadScriptNew("test.js");
        console.log("Done!");
    } catch (error) {
        console.log(error);
    }
})();




// loadScript('test.js', (err, script) => {
//     if(err) {
//         console.log(err);
//     }
//     else{
//         console.log("Script Loaded");
//     }
// })