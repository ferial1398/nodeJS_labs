
const { read, write, deleted } = require("./helper");
const [, , option, value, newval] = process.argv;

switch (option) {
  case "add":

    data = read();
    data.push({ id: 5, value });
    write(data);

    break;

  case "deleted":
   data = deleted();
   data.splice(value-1,1);
   //data.filter(data => data.indexOf(data) === -1);
   write(data);
   console.log(data);
    break;

  case "edit":
  data = read();
   data[+value-1].value=newval;
   write(data);
   console.log(data);
    break;

  case "list":
    console.log(read());
    break;

  default:
    break;
}
