// import validator from "https://deno.land/x/validator@v0.14.0/mod.ts";
import validator from "validator";
// import chalk from "https://deno.land/x/chalk@v0.4.0/mod.ts";
import chalk from "chalk";

console.info(validator.isEmail("kK8hG@example.com"));
console.info(validator.isMobilePhone("08823987432", "id-ID"));
console.info(validator.isNumeric("23094"));

console.info(chalk.blue.bgGreen.bold("Hello, Chalk!"));

const message = "Hello World!";
console.info(chalk.green.bgBlueBright(message));

// #1 Chalk comes with an easy to use composable API where you just chain and nest the styles you want.
const log = console.log;

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

// Pass in multiple arguments
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// Nest styles
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// Nest styles of the same type even (color, underline, background)
log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);

// ES2015 template literal
log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
log(chalk.hex("#DEADED").bold("Bold gray!"));

// #2 Easily define your own themes:
const error = chalk.bold.red;
const warning = chalk.hex("#FFA500"); // Orange color

console.log(error("Error!"));
console.log(warning("Warning!"));

// #3 Take advantage of console.log string substitution:
const name = "Sindre";
console.log(chalk.green("Hello %s"), name);
