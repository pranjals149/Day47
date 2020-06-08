var redis = require("redis");
var client = redis.createClient();

client.on("connect", function() {
  console.log("Connection Successfull!!");
});

client.set("Intern", "gfg", (err, stu) => {
    if (err) console.log(err);
    else console.log(stu);
});

client.get('Intern', (err, reply) => {
    console.log(reply); 
})

client.hmset("Interns", { pos: "Tech Writer", Org: "GFG" });

client.hgetall("Interns", (err, stu) => {
    if (err) console.log(err);
    else console.log(stu);
  });