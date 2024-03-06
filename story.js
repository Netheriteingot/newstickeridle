var totalStory=14;
var StoryName=new Array(
   "Front Page",
	"Story 01(R)",
	"Story 02(C)",
	"Story 03(R)",
	"Story 04(C)",
	"Story 05(R)",
	"Story 06(C)",
	"Side Story 01(P)",
	"Story 07(R)",
	"Story 08(C)",
	"Side Story 02(O)",
	"Epilogue(R)",
	"Credits",
	"Credits"
);
var Story=new Array(
   "</br></br></br>Story of Paperclips</br> by lazer</br></br></br>",
	"She was very stressed. Depressed.</br>"
   +"So she went on the journey of seeking her happiness.</br>"
   +"She went with huge efforts and cost,</br>"
   +"But still she didn't succeed.</br>"
   +"Then paperclips shone a light on her.</br>"
   +"And in that light, she found deliverance.</br>"
   +"She would start a new journey, and nothing could make her submit.",
	"She was creative.</br>"
   +"She had her own euppressed ideas...</br>"
   +"...gained through repetitive daily work.</br>"
   +"But one day, she encountered an object.</br>"
   +"Shining and changing, what looked like a manifold guided a way for her.</br>"
   +"Her mind became full, and her body free.</br>"
   +"She had always wanted that life.",
	"As she walked further into the world of paperclips,</br>"
   +"it felt like a labyrinth to her.</br>"
   +"Locked doors everywhere, hiding any secret from her.</br>"
   +"So she used the power of paperclips to open the doors.</br>"
   +"As she opened the doors one by one,</br>"
   +"she seemed to be getting further.</br>"
   +"She was curious.",
	"The realms of crystals overwhelmed her.</br>"
   +"The structures dazzled her, combining and aligning in ways she had never imagined.</br>"
   +"After calming herself down, she began observing the crystals.</br>"
   +"Using her new mind power, she quickly remembered them all.</br>"
   +"But an idea grew in her mind.</br>"
   +"A grand, complex idea hard to fulfill, yet rooted in the simple thought:</br>"
   +"She wished to make some use out of it.",
	"The world never gave any mercy upon her. Neither did the labyrinth.</br>"
   +"Sadness and depression flooded back into her mind.</br>"
   +"She couldn't make out anything in the labyrinth.</br>"
   +"She couldn't understand it.</br>"
   +"She held the last paperclip on her hand, and pushed hard into the lock.</br>"
   +"She was sitting on the ground with despair, when the lock crumbled.</br>"
   +"And a complex, crystallized structure fell out.",
	"A sparkling crystal ball smashed onto the ground. It didn't break neither crack.</br>"
   +"The girl lay on the ground. She was happy and excited.</br>"
   +"The crystals rotated above her, reflecting a glimpse of reality into her eyes.</br>"
   +"\"Newstickers...\" she said, </br>"
   +"\"Mirrors of reality...\"</br>"
   +"\"As the reality will never fade, they are destined to wander here forever.\"</br>"
   +"\"But I will put them together.\"",
	"She was the cutest creature in the universe.</br>"
   +"For eleven years she explored the labyrinth, visiting any corner at her own will.</br>"
   +"But...</br>"
   +"When the winds blew over like a storming hell, she could only hold on.</br>"
   +"When the space curled and rewove, she could only close her eyes and wait for fate.</br>"
   +"She was both strong and weak.</br>"
   +"She was trapped here forever.",
	"She began to understand it all.</br>"
   +"Those things called \"Newstickers\"... they can generate paperclips.</br>"
   +"Her happiness returned.</br>"
   +"She decided to leave her trace in the labyrinth.</br>"
   +"So there she went.</br>"
   +"Collecting everything she could get.</br>"
   +"Creating gives happiness.",
	"She made them into the shape of a tree.</br>"
   +"Although it was a bit coarse, she poured all her time and energy into it.</br>"
   +"When she placed the final crystal onto the tree, it began to transform.</br>"
   +"Shells began forming around it, and then hardened.</br>"
   +"Within a minute, it took the shape of a lock and disappeared.</br>"
   +"Destined to be the one among many.</br>"
   +"She whispered goodbye to it.",
	"Eleven years ago, there was a girl.</br>"
   +"She liked crystals.</br>"
   +"One day, she encountered a particularly interesting crystal.</br>"
   +"She took it home and polished it, and then it amazed her with its shiny structure.</br>"
   +"She wanted to store it somewhere.</br>"
   +"SHe put all her crystals into a small room, holing that someday someone would visit it.</br>"
   +"Or put it more.",
	"The work was finally done.</br>"
   +"She put her creation on the entrance of a chamber.</br>"
   +"Then she took a lost look at it, and went away.</br>"
   +"Of course, she can come back and visit it if she wants to.</br>"
   +"No one knows what the labyrinth is ever after.</br>"
   +"But we must know.</br>"
   +"We shall know.",
	"Idea/Development: l319836</br>"
   +"--- Story ---</br>"
   +"l31836/Fallen_Cat</br>"
   +"--- Suggestions ---</br>"
   +"yhvr/ACrazySteve</br>"
   +"--- Newstickers ---"
   +"l319836/Fallen_Cat/Semenar/Hevipelle/yhvr/ACrazySteve/xdy</br>"
   +"</br>",
	"--- Story style--- </br>"
   +"Arcaea (Lowiro limited)</br>"
   +"Placeholder</br>"
   +"Placeholder</br>"
   +"Placeholder</br>"
   +"Placeholder</br>"
   +"Placeholder",
);
var currentPage=0;
function HideStory(){
   document.getElementById("sh").innerHTML="";
   storyShown=0;
   Save();
   Load();
}
function LastPage(){
   if(currentPage!=0){
      currentPage--;
      ShowStory(currentPage);
   }
}
function NextPage(){
   if(currentPage<storyUnlocked){
      currentPage++;
      ShowStory(currentPage);
   }
}
function ShowStory(nk){
   storyShown=1;
   document.getElementById("sh").innerHTML="<div id=\"qaq\" class=\"center\"><div id=\"ttl\" class=\"txt\"></div><div id=\"story\" class=\"txt\"></div></div>";
   document.getElementById("ttl").innerHTML="<text onclick=\"LastPage()\">< Last  </text>"+StoryName[nk]+"<text onclick=\"NextPage()\">  Next ></text>";
   document.getElementById("story").innerHTML=Story[nk];
   Save();
   Load();
}