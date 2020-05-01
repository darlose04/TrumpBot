const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
const fetch = require("node-fetch");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", (msg) => {
  // if (msg.content === "ping") {
  //   msg.reply("pong");
  // }

  const getJoke = async () => {
    const url = "https://api.tronalddump.io/random/quote";

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.joke);
        msg.reply(data.joke);
      })
      .catch((err) => console.log(err));
  };

  if (msg.content[0] === "#") {
    getJoke();
  }
});

let token = process.env.TOKEN;

client.login(token);
