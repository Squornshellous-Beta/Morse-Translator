module.exports = {
	title:"Morse Translator",
	summary:"Renders morse code in plain text.",
	author:"Squornshellous Beta",
	modVersion:1.0,
	
	edit(archive) {
		for (var i in serenity) archive.mspa.story[i].content="SERENITY: [<i>"+serenity[i]+"</i>]<br /><br />"+archive.mspa.story[i].content;
		for (var i in vriska) archive.mspa.story[i].content="[<span style=\"color: #005682\"><i>"+vriska[i]+"</i></span>]";
		for (var i in dream) archive.mspa.story[i].content="[<i>"+dream[i]+"</i>]";
		for (var i in calliope) archive.mspa.story[calliope[i][0]].content=archive.mspa.story[calliope[i][0]].content.replace(calliope[i][1],"</span>[<span style=\"color: #929292;\"><i>"+calliope[i][2]+"</i></span>]");
	},
};
serenity={
	"002653":"Let's go!!!",
	"003314":"Yay!!!",
	"003881":"Oh my",
	"004866":"Oh no!!!",
	"005169":"Help! My friend is stuck inside the big can, inside a small house he built! You must hurry, he is not very bright and he doesn't understand it when I blink! Are you watching me? Oh no, don't blink me you don't understand blinking either!!! How do you people even exchange ideas without luminous rear ends!!!!!!",
	"006210":"You suck!!!",
	"006220":"Coward!",
	"006223":"Please...",
	"006224":"Help him!!!",
	"006284":"You there, miss! Please save my friend!",
};
dream={
	"005172":"what a daring dream.",
	"005173":"to combine the finest qualities of humanity with the elegance and nobility of the animal kingdom.",
	"005174":"how you wish you could know their world.",
	"005175":"to hear one night those muted pawpads traipse up your stairs.",
	"005176":"a low but friendly growl unsettles your slumber.",
	"005177":"and as the sopor seeps from your eyes",
	"005178":"they detect a sharp pair of ears cutting moonlight.",
	"005179":"a mysterious wolven tongue invites.",
	"005180":"wouldn't these ears suit you?",
	"005181":"would not this proud long snout assist you in the hunt?",
};
vriska={
	"005192":"hey you!!!!!!!!<br /><br />just what do you think you're planning on doing with that ring?",
	"005193":"whatever it is, forget it!<br /><br />the slayer is miiiiiiiine. ::::)",
	"005194":"now w8ke up!",
	"005195":"i said w88888888ke!",
};
calliope=[
	["007493","... .... .... .... .... .... !!!","shhhhh!!!"],
	["007493","- .... .- -. -.- / -.-- --- ..- !","thank you!"],
	["007493","- .... . / ... .... --- .-. - / .- -. ... .-- . .-. / .. ... --..-- / -.-- --- ..- / .- .-. . / .... .- ...- .. -. --. / .- / -.. .-. . .- --","the short answer is, you are having a dream."],
	["007494","- .... . .-. . / .-- .. .-.. .-.. / -... . / .--. .-.. . -. - -.-- / --- ..-. / - .. -- . / - --- / - .- .-.. -.- / ... --- --- -. --..-- / -... ..- - / .-.. . - .----. ... / .--. .-.. . .- ... . / -.- . . .--. / .- / .-.. --- .-- / .--. .-. --- ..-. .. .-.. . / ..-. --- .-. / -. --- .-- ","there will be plenty of time to talk soon, but let's please keep a low profile for now."],
	["007494","..- ~ ..-","u~u"],
	["007494","... --- / -- -.-- / -... .-. --- - .... . .-. / -.. --- . ... -. .----. - / .... . .- .-. / ..- ...","so my brother doesn't hear us."],
	["007494","-.-- . ...","yes."],
	["007494",".... . / .. ... / .--. .- ... ... .. -. --. / -. . .- .-. -... -.-- / .-- .... .. .-.. . / -.. --- .. -. --. / -.. .- -- .- --. . / - --- / - .... . / ..-. ..- .-. - .... . ... - / .-. .. -. --.","he is passing nearby while doing damage to the furthest ring."],
	["007494",".... . / .. ... / ..-. --- .-.. .-.. --- .-- .. -. --. / .- / .-.. .- .-. --. . / .--. .- .-. - -.-- / --- ..-. / --. .... --- ... - ... --..-- / .. -. / .... --- .--. . ... / - .... . -.-- / .-- .. .-.. .-.. / .-.. . .- -.. / .... .. -- / - --- / -- .","he is following a large party of ghosts, in hopes they will lead him to me."],
	["007494",".... .. ... / .. -. - . -. - / .. ... / - --- / -.. . ... - .-. --- -.-- / -- -.-- / ... --- ..- .-.. / ..- _ ..-","his intent is to destroy my soul. u_u"],
	["007494","-.-- --- ..- / .- .-. . / ...- . .-. -.-- / ... .-- . . - .-.-.- / .. / -- .. ... ... . -.. / -.-- --- ..- --..-- / .-. --- -..- -.-- .-.-.-","you are very sweet. i missed you, roxy."],
	["007494","-... ..- - / - .... . .-. . / .. ... / -. --- - / -- ..- -.-. .... / -.-- --- ..- / -.-. .- -. / -.. --- / .- - / - .... . / -- --- -- . -. - --..-- / --- - .... . .-. / - .... .- -. / .-. . -- .- .. -. / -.. .. ... -.-. .-. . . - .-.-.-","but there is not much you can do at the moment, other than remain discreet."],
	["007494",".-.. . - .----. ... / -.-. --- -. - .. -. ..- . / - .... .. ... / . .-.. ... . .-- .... . .-. . .-.-.- / ..-. --- .-.. .-.. --- .-- / -- . !","let's continue this elsewhere. follow me!"],
	["007496","-. ---","no."],
	["007496","-... ..- - / .-.. . - .----. ... / -.- . . .--. / --. --- .. -. --.","but let's keep going."],
	["007496",".. - / .- .--. .--. . .- .-. ... / - --- / -... . / - .... . / --- ..- - ..-. .. - / --- ..-. / .- / ..-. .- ... .... .. --- -. .- -... .-.. . / ... -.-. .. . -. -.-. . / .-- --- -- .- -. ?","it appears to be the outfit of a fashionable science woman?"],
	["007499","..- --","um."],
	["007499","---... ..-",":u"],
	["007499","-.-- . ... --..-- / -... ..- - / .-- . / .... .- ...- . / - --- / --. --- !","yes, but we have to go!"],
	["007500","- .... . -. / .... ..- .-. .-. -.-- / ..- .--. !","then hurry up!"],
	["007501","- .... .. ... / .-- .- -.-- !","this way!"],
	["007502",".-. . -- . -- -... . .-. --..-- / -.-- --- ..- .----. .-. . / --- -. .-.. -.-- / -.. .-. . .- -- .. -. --.","remember, you're only dreaming."],
	["007502",".- .-.. .-.. / - .... .- - / -.-- --- ..- / ... . . / .. ... / -.-. --- -- .. -. --. / ..-. .-. --- -- / -.-- --- ..- .-. / -- . -- --- .-. .. . ... / .- -. -.. / ... ..- -... -.-. --- -. ... -.-. .. --- ..- ...","all that you see is coming from your memories and subconscious."],
	["007502","... .... .... .... .... .... !","shhhhh!"],
	["007503","- .... .-. --- ..- --. .... / .... . .-. .","through here."],
	["007503",".-- . / .-- .. .-.. .-.. / .... .- ...- . / -- --- .-. . / .--. .-. .. ...- .- -.-. -.-- / .... . .-. .","we will have more privacy here."],
	["007503","-. --- - / . -..- .- -.-. - .-.. -.--","not exactly."],
];