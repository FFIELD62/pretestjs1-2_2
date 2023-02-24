function pingPong(ping, boo) {
    let strsum = [];

    if (boo == true) {
        console.log(true);
        for (let i = 0; i < ping.length; i++) {
            strsum.push(ping[0]);
            strsum.push("Pong!");
        }
    } else {
        console.log(false);

        for (let i = 0; i < (ping.length) - 1; i++) {
            strsum.push(ping[0]);
            strsum.push("Pong!");
        }
        strsum.push(ping[0]);
    }

    console.log(strsum);

}


pingPong(["Ping!"], true) //["Ping!", "Pong!"]
pingPong(["Ping!", "Ping!"], false) //["Ping!", "Pong!", "Ping!"]
pingPong(["Ping!", "Ping!", "Ping!"], true) //["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
pingPong(["Ping!", "Ping!", "Ping!"], false) //["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]