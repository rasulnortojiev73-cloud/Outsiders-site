const $ = (sel, root = document) => root.querySelector(sel);

const THEME_KEY = "outsidersTheme";

const views = [
  { tab: "#tab-dossiers", panel: "#view-dossiers" },
  { tab: "#tab-book", panel: "#view-book" },
  { tab: "#tab-quiz", panel: "#view-quiz" },
  { tab: "#tab-shop", panel: "#view-shop" },
];

const GROUP_LABEL = {
  greasers: "Greasers",
  socs: "Socs",
  adults: "Adults",
  other: "Other",
};

const CHARACTERS = [
  {
    id: "ponyboy",
    name: "Ponyboy Curtis",
    group: "greasers",
    tagline: "The narrator: observant, bookish, and looking for a truer story than “us vs. them.”",
    summary:
      "Ponyboy is the youngest Curtis brother and the voice of the novel. He’s sensitive and curious, and he tries to understand people as individuals rather than stereotypes.",
    atAGlance: {
      "Role in story": "Narrator; a Greaser trying to make sense of class conflict and identity.",
      "Strengths": "Empathy, attention to detail, willingness to reflect.",
      "Pressure points": "Grief, feeling misunderstood, navigating violence he didn’t choose.",
    },
    relationships: [
      "Darry and Sodapop: brothers who pull him between safety, pride, and belonging.",
      "Johnny Cade: best friend; a bond built on protection and trust.",
      "Cherry Valance: unexpected connection that complicates “Greasers vs. Socs.”",
    ],
    funFacts: [
      "He’s unusually interested in books, movies, and language for his social circle, which shapes the novel’s tone.",
      "He notices small details (clothes, expressions, weather) the way a writer does.",
      "He’s often the first to question whether labels like “Greaser” and “Soc” explain anything real.",
    ],
    spoilers: [
      "He and Johnny become central to the plot after a late-night confrontation escalates.",
      "A crisis forces him to grow up quickly and reconsider what “family” means.",
      "He ends the story trying to turn lived experience into something that might help others.",
    ],
    tags: ["narrator", "curtis", "identity", "class", "loyalty"],
  },
  {
    id: "darry",
    name: "Darry Curtis",
    group: "greasers",
    tagline: "The oldest Curtis brother: disciplined, protective, and carrying adult responsibilities too soon.",
    summary:
      "Darry becomes the head of the Curtis household after their parents’ death. He’s strict because he’s terrified of losing what little stability they have.",
    atAGlance: {
      "Role in story": "Guardian figure; shows what sacrifice looks like under pressure.",
      "Strengths": "Work ethic, leadership, long-term thinking.",
      "Pressure points": "Fear of failure; guilt; being misread as cold.",
    },
    relationships: [
      "Ponyboy: conflict shaped by love, expectations, and misunderstanding.",
      "Sodapop: the emotional bridge between brothers.",
      "The Greasers: respected as someone who can keep people focused.",
    ],
    funFacts: [
      "He’s often associated with “doing the right thing,” even when it makes him unpopular.",
      "He represents the cost of growing up fast in a world with limited options.",
    ],
    spoilers: [
      "A turning point in the family forces Darry and Ponyboy to finally confront what they’ve been avoiding: grief and fear.",
    ],
    tags: ["curtis", "family", "responsibility", "sacrifice"],
  },
  {
    id: "sodapop",
    name: "Sodapop Curtis",
    group: "greasers",
    tagline: "The middle Curtis brother: magnetic, tender, and the “glue” holding people together.",
    summary:
      "Sodapop is charming and emotionally intuitive. He tries to keep peace in the Curtis household and among the Greasers, even when he’s hurting.",
    atAGlance: {
      "Role in story": "The heart of the family; a contrast to Darry’s hardness and Ponyboy’s introspection.",
      "Strengths": "Warmth, social intelligence, loyalty.",
      "Pressure points": "Avoiding conflict; carrying quiet disappointments.",
    },
    relationships: [
      "Ponyboy and Darry: mediator who understands both sides.",
      "Steve Randle: best friend; shared work and shared pride.",
    ],
    funFacts: [
      "He’s often described as the easiest to love, which also makes others lean on him.",
      "He dreams big but is pulled by real-life complications.",
    ],
    spoilers: [
      "His personal life becomes a stress test for the idea that “being nice” is enough to fix everything.",
    ],
    tags: ["curtis", "family", "loyalty", "peacekeeper"],
  },
  {
    id: "johnny",
    name: "Johnny Cade",
    group: "greasers",
    tagline: "A quiet Greaser shaped by fear and neglect, with a fierce loyalty to the people who protect him.",
    summary:
      "Johnny is soft-spoken and cautious, largely because of violence at home and on the streets. With Ponyboy, he finds friendship that feels safe.",
    atAGlance: {
      "Role in story": "Catalyst for the novel’s major events; shows how the vulnerable get cornered.",
      "Strengths": "Courage under pressure, devotion, moral clarity in a crisis.",
      "Pressure points": "Trauma, low self-worth, constant fear.",
    },
    relationships: [
      "Ponyboy: closest friend; their bond drives the emotional core of the story.",
      "Dally: protective attachment to someone he sees as tough and capable.",
    ],
    funFacts: [
      "He’s one of the clearest examples of how environment can shape behavior and choices.",
      "He contrasts with Dally: quiet steadiness versus loud recklessness.",
    ],
    spoilers: [
      "A violent encounter forces Johnny to make a decision that changes everything.",
      "He becomes connected to an act of public heroism that reshapes how others see the Greasers.",
      "His arc raises the book’s most painful question: who gets a second chance?",
    ],
    tags: ["loyalty", "trauma", "courage", "friendship"],
  },
  {
    id: "dally",
    name: 'Dallas “Dally” Winston',
    group: "greasers",
    tagline: "Hard-edged, fearless, and loyal in a way that looks like danger.",
    summary:
      "Dally is street-smart and intense. He’s proud of being tough, but he also cares deeply about a few people and doesn’t know how to show it safely.",
    atAGlance: {
      "Role in story": "Embodies the cost of a life built on survival and reputation.",
      "Strengths": "Boldness, resourcefulness, fierce loyalty.",
      "Pressure points": "Impulsivity, self-destructive choices, distrust of authority.",
    },
    relationships: [
      "Johnny: protective and emotionally attached, even if he hides it.",
      "The Greasers: respected, feared, and followed.",
    ],
    funFacts: [
      "He’s one of the most polarizing characters: both villain-coded and deeply sympathetic.",
      "He shows how “toughness” can become a trap when it’s your only identity.",
    ],
    spoilers: [
      "A major loss pushes Dally into a spiral that reframes his earlier actions.",
    ],
    tags: ["toughness", "loyalty", "risk", "survival"],
  },
  {
    id: "twobit",
    name: 'Keith “Two-Bit” Mathews',
    group: "greasers",
    tagline: "The comic relief with a serious loyalty underneath the jokes.",
    summary:
      "Two-Bit is the wisecracking Greaser who keeps morale up. He’s playful, but he’s also dependable when things get real.",
    atAGlance: {
      "Role in story": "Relieves tension; shows community and everyday survival.",
      "Strengths": "Humor, street awareness, loyalty.",
      "Pressure points": "Trouble with authority; impulsive mischief.",
    },
    relationships: [
      "The Greasers: older-brother energy to the younger boys.",
      "Ponyboy: treats him like a kid brother.",
    ],
    funFacts: [
      "He’s a reminder the Greasers are not just “violent kids”; they’re friends with personalities and routines.",
      "His humor is also a defense mechanism: if you can laugh, you can endure.",
    ],
    spoilers: [
      "He plays a key role in the buildup to the rumble and in protecting the younger boys.",
    ],
    tags: ["humor", "friendship", "greasers"],
  },
  {
    id: "steve",
    name: "Steve Randle",
    group: "greasers",
    tagline: "Sodapop’s best friend: proud, sharp-tongued, and serious about cars and reputation.",
    summary:
      "Steve works with Sodapop and shares his social world, but he’s more cynical and quick to judge. He shows how status works even within the Greasers.",
    atAGlance: {
      "Role in story": "Shows the Greasers as a varied group, not a single personality type.",
      "Strengths": "Competence, confidence, loyalty (in his own way).",
      "Pressure points": "Defensiveness; fear of seeming weak.",
    },
    relationships: ["Sodapop: tight friendship, almost like family."],
    funFacts: [
      "He’s a good example of how pride can look like arrogance, especially under stress.",
    ],
    spoilers: [
      "He’s involved in the group’s biggest conflict, revealing who stays calm and who reacts.",
    ],
    tags: ["friendship", "pride", "work"],
  },
  {
    id: "cherry",
    name: "Sherri “Cherry” Valance",
    group: "socs",
    tagline: "A Soc who refuses simple answers and becomes a bridge across the class divide.",
    summary:
      "Cherry is sharp and perceptive. She recognizes the social system she benefits from and still chooses to see the Greasers as people, not a threat category.",
    atAGlance: {
      "Role in story": "Complicates the Greaser/Soc binary; reveals hidden costs of privilege.",
      "Strengths": "Insight, honesty, emotional intelligence.",
      "Pressure points": "Social expectations; safety; loyalty conflicts.",
    },
    relationships: [
      "Ponyboy: conversation partner who helps him articulate what he already senses.",
      "Bob and Randy: tied to the Soc world, even when she disagrees with it.",
    ],
    funFacts: [
      "She’s one of the first characters to say out loud that both groups share the same sunsets and fears.",
      "She shows how empathy can coexist with boundaries.",
    ],
    spoilers: [
      "She provides information and perspective that influence decisions leading up to the rumble.",
    ],
    tags: ["socs", "empathy", "class", "bridge"],
  },
  {
    id: "bob",
    name: "Bob Sheldon",
    group: "socs",
    tagline: "A violent Soc whose choices ignite the novel’s central crisis.",
    summary:
      "Bob is a symbol of how power and insecurity can combine into cruelty. He’s not the whole Soc world, but he is a turning point in the plot.",
    atAGlance: {
      "Role in story": "Inciting force; shows how violence escalates when no one backs down.",
      "Strengths": "Social power and influence.",
      "Pressure points": "Entitlement; need for control.",
    },
    relationships: ["Cherry: dating relationship complicated by his behavior."],
    funFacts: [
      "He’s often discussed in class as a character shaped by privilege but not protected from consequences.",
    ],
    spoilers: [
      "A confrontation ends with Bob’s death, which changes the direction of the story.",
    ],
    tags: ["socs", "violence", "power"],
  },
  {
    id: "randy",
    name: "Randy Adderson",
    group: "socs",
    tagline: "A Soc who starts to question the point of fighting and the meaning of “winning.”",
    summary:
      "Randy is more reflective than most of his group. He’s tired of the cycle and becomes an important voice for the idea that fighting solves nothing.",
    atAGlance: {
      "Role in story": "A counterexample to Bob; shows that social groups contain dissenters.",
      "Strengths": "Self-awareness, honesty, willingness to change.",
      "Pressure points": "Peer pressure; grief; shame.",
    },
    relationships: ["Cherry and Bob: part of the same social circle; affected by what happens."],
    funFacts: [
      "He’s one of the clearest examples of the book’s theme: labels are loud, but conscience is louder.",
    ],
    spoilers: [
      "He steps away from the rumble, arguing it won’t bring anyone back or fix anything.",
    ],
    tags: ["socs", "conscience", "change"],
  },
  {
    id: "marcia",
    name: "Marcia",
    group: "socs",
    tagline: "A Soc friend of Cherry’s who interacts with the Greasers without panic or performance.",
    summary:
      "Marcia is practical and direct. She helps show that not every Soc is looking for a fight, even if the system encourages distance.",
    atAGlance: {
      "Role in story": "Supports Cherry and adds nuance to the Soc group.",
      "Strengths": "Composure, plain speaking.",
      "Pressure points": "Social risk; safety concerns.",
    },
    relationships: ["Cherry: close friend; shares the night that triggers several misunderstandings."],
    funFacts: [
      "She is often remembered for how calmly she treats the Greasers in conversation.",
    ],
    spoilers: ["She becomes part of the chain of events that heightens tensions between groups."],
    tags: ["socs", "nuance"],
  },
  {
    id: "david",
    name: "David",
    group: "socs",
    tagline: "A Soc in Bob and Randy’s circle who represents the peer-pressure side of privilege.",
    summary:
      "David appears as part of the Soc group dynamic: quick to taunt, ready to escalate, and protected by the assumption that consequences are negotiable.",
    atAGlance: {
      "Role in story": "Supporting antagonist; shows how group energy can turn mean fast.",
      "Strengths": "Social confidence and backup.",
      "Pressure points": "Status performance; cruelty as entertainment.",
    },
    relationships: ["Bob and Randy: part of the same Soc crowd."],
    funFacts: [
      "He’s useful for analysis because he’s less “special” than Bob: more like a typical member of the machine.",
    ],
    spoilers: ["He is present around key confrontations that intensify the Greaser/Soc conflict."],
    tags: ["socs", "peer pressure", "escalation"],
  },
  {
    id: "paul",
    name: "Paul Holden",
    group: "socs",
    tagline: "A Soc tied to Darry’s past, showing how the class line can split old friendships.",
    summary:
      "Paul is a capable, respected Soc who once knew Darry in a different context. He represents the uncomfortable truth that people can be close and still end up on opposite sides.",
    atAGlance: {
      "Role in story": "A mirror to Darry: talent plus opportunity versus talent plus obligation.",
      "Strengths": "Confidence, leadership, composure.",
      "Pressure points": "Group loyalty; status expectations.",
    },
    relationships: ["Darry: past connection that complicates the meaning of “enemy.”"],
    funFacts: [
      "He’s often used in discussions about how social structures can override personal respect.",
    ],
    spoilers: [
      "He appears around the rumble and highlights that the conflict isn’t just personal; it’s social and performative.",
    ],
    tags: ["socs", "status", "past", "respect"],
  },
  {
    id: "buck",
    name: "Buck Merrill",
    group: "other",
    tagline: "An older friend of Dally’s who provides a place and a network.",
    summary:
      "Buck is connected to the Greasers’ wider world: older, rougher, and operating with fewer illusions about consequences.",
    atAGlance: {
      "Role in story": "Shows the older edge of the Greaser ecosystem.",
      "Strengths": "Connections, practicality.",
      "Pressure points": "Normalization of risk; rough environment.",
    },
    relationships: ["Dally: friendship rooted in shared reputation and trust."],
    funFacts: ["His presence hints at where some of the boys could end up if the cycle doesn’t break."],
    spoilers: ["He helps facilitate hiding and movement when the stakes rise."],
    tags: ["network", "older", "risk"],
  },
  {
    id: "tim",
    name: "Tim Shepard",
    group: "greasers",
    tagline: "Leader of another Greaser set: respected, tough, and fiercely territorial.",
    summary:
      "Tim leads a different Greaser group. He’s not in Ponyboy’s inner circle, but he shows the broader social structure of the neighborhood.",
    atAGlance: {
      "Role in story": "Expands the Greaser world beyond one friend group.",
      "Strengths": "Leadership, toughness.",
      "Pressure points": "Territory conflicts; reputation politics.",
    },
    relationships: ["Other Greaser sets: alliances form when bigger threats appear."],
    funFacts: ["His group reminds readers the Greasers are not a single uniform gang."],
    spoilers: ["He appears during the rumble-related buildup as groups coordinate."],
    tags: ["greasers", "leadership", "territory"],
  },
  {
    id: "curly",
    name: "Curly Shepard",
    group: "greasers",
    tagline: "Tim’s younger brother: part of the wider Greaser network beyond Ponyboy’s core group.",
    summary:
      "Curly is a secondary Greaser character who helps show how many different crews and loyalties exist in the same neighborhood.",
    atAGlance: {
      "Role in story": "World-building: reinforces that the Greasers are a community, not just one clique.",
      "Strengths": "Loyalty to his group.",
      "Pressure points": "Reputation and territory conflicts.",
    },
    relationships: ["Tim Shepard: family tie that also functions like a chain of command."],
    funFacts: ["He’s a reminder that the story’s conflict radiates outward to many teens, not just the main cast."],
    spoilers: ["He appears during the period when Greaser groups coordinate for a larger confrontation."],
    tags: ["greasers", "community", "crew"],
  },
  {
    id: "jerry",
    name: "Jerry Wood",
    group: "adults",
    tagline: "A teacher who meets the boys with respect and help instead of judgment.",
    summary:
      "Jerry is one of the adults who treats the Greasers like kids worth saving. He models a different kind of authority: calm, humane, and practical.",
    atAGlance: {
      "Role in story": "Shows how adult empathy can change outcomes.",
      "Strengths": "Composure, compassion, follow-through.",
      "Pressure points": "Limits of what one adult can fix in a broken system.",
    },
    relationships: ["Ponyboy and Johnny: offers help when they are overwhelmed."],
    funFacts: ["He’s often cited as proof that the novel isn’t anti-adult; it’s anti-cruelty."],
    spoilers: ["He is present during a public crisis where the boys’ choices become visible to others."],
    tags: ["adult", "empathy", "help"],
  },
  {
    id: "judge",
    name: "The Judge",
    group: "adults",
    tagline: "The adult system made visible: decisions about kids’ futures made in a formal room.",
    summary:
      "The judge is part of the legal backdrop of the story. Even when unnamed, this role matters because it represents how quickly teenage mistakes can become life-defining records.",
    atAGlance: {
      "Role in story": "Represents institutions deciding outcomes.",
      "Strengths": "Authority to impose structure.",
      "Pressure points": "Distance from the daily realities of the boys’ lives.",
    },
    relationships: ["The Curtis family: the threat of separation makes Darry’s fear feel rational."],
    funFacts: [
      "The judge is a good discussion anchor for “systems vs. individuals”: who gets grace and who gets punished?",
    ],
    spoilers: ["The possibility of court involvement drives several characters’ decisions about risk and responsibility."],
    tags: ["adult", "law", "consequences"],
  },
  {
    id: "doctor",
    name: "The Doctor",
    group: "adults",
    tagline: "Medical authority during the story’s most vulnerable moments.",
    summary:
      "The doctor appears in hospital scenes, where the boys’ toughness doesn’t help. In that setting, facts and outcomes matter more than reputation.",
    atAGlance: {
      "Role in story": "Signals the seriousness of injuries and the limits of control.",
      "Strengths": "Clarity, realism, boundaries.",
      "Pressure points": "Cannot repair the social damage that led to the injuries.",
    },
    relationships: ["The Greasers: interacts with them in crisis rather than conflict."],
    funFacts: ["Hospital scenes shift the story from “fight logic” to “loss logic” quickly."],
    spoilers: ["Delivers hard information that changes how characters move forward."],
    tags: ["adult", "hospital", "reality"],
  },
  {
    id: "nurse",
    name: "The Nurse",
    group: "adults",
    tagline: "A practical adult presence in the hospital, where emotions are raw and rules matter.",
    summary:
      "The nurse represents everyday care and hospital rules. This role highlights how institutions respond to kids in trouble: sometimes kindly, sometimes impatiently.",
    atAGlance: {
      "Role in story": "Adds realism to the hospital setting and its constraints.",
      "Strengths": "Order, care, practicality.",
      "Pressure points": "Time pressure; limits of empathy when overwhelmed.",
    },
    relationships: ["The Greasers: a reminder they are still children in an adult world."],
    funFacts: ["Even unnamed adults can shape a scene’s moral temperature: comfort versus judgment."],
    spoilers: ["Acts as a gatekeeper during moments when characters want access, answers, and control."],
    tags: ["adult", "hospital", "care"],
  },
  {
    id: "mrs-curtis",
    name: "Mrs. Curtis",
    group: "adults",
    tagline: "Absent but central: her loss forces the Curtis brothers into survival mode.",
    summary:
      "Ponyboy’s mother doesn’t appear directly, but her absence defines the family’s structure. The boys live inside the aftershock of losing parents too early.",
    atAGlance: {
      "Role in story": "Background cause of the Curtis family’s stakes.",
      "Strengths": "Represents the idea of home and safety that’s gone.",
      "Pressure points": "Her death leaves Darry parenting siblings while still a young man.",
    },
    relationships: ["Darry, Sodapop, Ponyboy: her absence reshapes all three."],
    funFacts: ["The novel’s tension relies on what’s missing as much as what’s present."],
    spoilers: ["The fear of being split up is tied directly to the parents’ death."],
    tags: ["adult", "family", "loss"],
  },
  {
    id: "mr-curtis",
    name: "Mr. Curtis",
    group: "adults",
    tagline: "Like Mrs. Curtis, his absence sets the stakes for every Curtis-brother decision.",
    summary:
      "Ponyboy’s father is not a scene character, but the family’s situation exists because both parents are gone. The result is a household that runs on sacrifice and fear of losing custody.",
    atAGlance: {
      "Role in story": "Background stake: the reason the boys are effectively on their own.",
      "Strengths": "Represents stability that no longer exists.",
      "Pressure points": "His death makes “home” a fragile legal and emotional object.",
    },
    relationships: ["Darry, Sodapop, Ponyboy: defines their responsibilities through absence."],
    funFacts: ["In many classroom discussions, the Curtis parents are treated as the book’s first major turning point."],
    spoilers: ["The custody threat becomes sharper because there is no parent buffer left."],
    tags: ["adult", "family", "stakes"],
  },
  {
    id: "mr-syme",
    name: "Mr. Syme",
    group: "adults",
    tagline: "Ponyboy’s English teacher: a small but meaningful example of adult attention to potential.",
    summary:
      "Mr. Syme recognizes Ponyboy’s ability and pushes him to use it. His role is brief, but he represents how school can be a lifeline when someone actually notices you.",
    atAGlance: {
      "Role in story": "Signals Ponyboy’s academic talent and possible future beyond the street.",
      "Strengths": "Encouragement, clear expectations.",
      "Pressure points": "Limited influence outside the classroom.",
    },
    relationships: ["Ponyboy: teacher-student dynamic focused on writing and effort."],
    funFacts: ["He’s often cited as the “quiet mentor” figure in the book."],
    spoilers: ["His class assignment becomes connected to how Ponyboy frames the story."],
    tags: ["adult", "school", "writing"],
  },
  {
    id: "mrs-cade",
    name: "Mrs. Cade",
    group: "adults",
    tagline: "Johnny’s mother: a harsh home life that explains why the streets feel safer than home.",
    summary:
      "Mrs. Cade is associated with neglect and hostility. She helps establish Johnny’s vulnerability and why he clings to the Greasers as a chosen family.",
    atAGlance: {
      "Role in story": "Shows how family dysfunction can be as dangerous as street violence.",
      "Strengths": "Represents a grim form of authority without care.",
      "Pressure points": "Creates lasting fear and distrust in Johnny.",
    },
    relationships: ["Johnny: parent-child relationship defined by harm instead of protection."],
    funFacts: ["Her presence is more thematic than plot-heavy: she explains a lot in a few scenes."],
    spoilers: ["Her reaction during a hospital moment underlines how alone Johnny truly is."],
    tags: ["adult", "home", "neglect", "trauma"],
  },
  {
    id: "mr-cade",
    name: "Mr. Cade",
    group: "adults",
    tagline: "Johnny’s father: another piece of the unsafe home environment.",
    summary:
      "Mr. Cade is linked to violence and instability at home. Even when he’s off-page, his impact is visible in Johnny’s fearfulness and self-protection.",
    atAGlance: {
      "Role in story": "Reinforces the idea that danger is not limited to rival gangs.",
      "Strengths": "None framed as supportive in the novel’s portrayal.",
      "Pressure points": "Generational harm; lack of safety nets.",
    },
    relationships: ["Johnny: contributes to a home life that pushes him outward."],
    funFacts: ["He’s an example of how the book treats “background adults” as forces shaping teen choices."],
    spoilers: ["His absence as a protector is part of why Johnny relies on friends for survival."],
    tags: ["adult", "home", "violence"],
  },
  {
    id: "sandy",
    name: "Sandy",
    group: "other",
    tagline: "Sodapop’s girlfriend: a quiet source of pressure, hope, and heartbreak.",
    summary:
      "Sandy exists mostly through the Curtis family’s conversations, but she matters because she affects Sodapop’s future plans and emotional stability.",
    atAGlance: {
      "Role in story": "Shows how private lives complicate “gang” identities.",
      "Strengths": "Represents a possible different life path.",
      "Pressure points": "Social judgment; limited choices.",
    },
    relationships: ["Sodapop: central relationship shaping his decisions."],
    funFacts: ["Her storyline helps explain why Sodapop sometimes avoids hard conversations."],
    spoilers: ["Her situation becomes a key emotional turning point for Sodapop."],
    tags: ["relationships", "future", "pressure"],
  },
  {
    id: "sylvia",
    name: "Sylvia",
    group: "other",
    tagline: "Part of Dally’s social orbit, representing the older, rougher nightlife around the boys.",
    summary:
      "Sylvia appears in connection with Dally’s world. She’s not central to the plot, but she helps set the tone of risk, reputation, and adult-like environments around teen characters.",
    atAGlance: {
      "Role in story": "Atmosphere and context for Dally’s lifestyle.",
      "Strengths": "Street confidence.",
      "Pressure points": "Normalization of danger and instability.",
    },
    relationships: ["Dally: associated through his older, harder crowd."],
    funFacts: ["She’s a reminder that some characters are already living in an adult-coded world while still teens."],
    spoilers: ["She’s mentioned around the time the group needs cover and connections."],
    tags: ["context", "nightlife", "risk"],
  },
  {
    id: "goldie",
    name: "Goldie",
    group: "other",
    tagline: "A name from Dally’s past that hints at an older, harder world beyond Tulsa.",
    summary:
      "Goldie is referenced as part of Dally’s story. Even as a brief mention, she expands the sense that some characters already have histories too heavy for their age.",
    atAGlance: {
      "Role in story": "Adds texture to Dally’s background and the novel’s broader social map.",
      "Strengths": "Represents connection and memory in Dally’s life.",
      "Pressure points": "Signals a life shaped by rough places and rough choices.",
    },
    relationships: ["Dally: linked to his past and his sense of loyalty."],
    funFacts: ["In analysis, Goldie often functions as “off-stage evidence” of Dally’s earlier life."],
    spoilers: ["Her mention matters most when Dally’s past and present collide emotionally."],
    tags: ["context", "past", "dally"],
  },
];

const BOOK_FACTS = [
  "Author: S. E. Hinton.",
  "First published in 1967; it helped shape modern young-adult realism.",
  "Hinton began writing the story as a teenager, drawing on social divisions she observed.",
  "The book was originally published under initials (“S. E.”), a choice often discussed in relation to gender expectations in publishing.",
  "The story is set in Tulsa, Oklahoma, with class identity split between Greasers and Socs.",
  "A key literary motif comes from Robert Frost’s poem “Nothing Gold Can Stay.”",
  "A major film adaptation released in 1983 was directed by Francis Ford Coppola.",
  "It is widely taught in U.S. schools and frequently used to discuss class, identity, and empathy.",
  "The 1983 film cast included several young actors who later became major stars.",
];

const THEMES = [
  {
    title: "Class and labels",
    body:
      "The novel critiques how social categories (Greasers, Socs) become identity prisons. People get treated as roles long before they get treated as human.",
  },
  {
    title: "Family (chosen and given)",
    body:
      "The Curtis brothers and the Greasers show how people build family out of loyalty. The cost is that loyalty sometimes demands violence.",
  },
  {
    title: "Violence and escalation",
    body:
      "Fights rarely start from one moment. They build from fear, reputation, humiliation, and the belief that backing down is the same as losing yourself.",
  },
  {
    title: "Identity and innocence",
    body:
      "Ponyboy’s perspective asks what stays “gold” when the world is trying to harden you. The book keeps returning to small moments of beauty as resistance.",
  },
];

const SYMBOLS = [
  {
    title: "“Stay gold”",
    body:
      "A short phrase tied to innocence and the hope that a person can keep what is gentle and true, even when the world tries to harden them.",
  },
  {
    title: "Sunsets",
    body:
      "A repeated reminder that beauty is shared across class lines. It undercuts the idea that groups are fundamentally different kinds of people.",
  },
  {
    title: "Hair",
    body:
      "More than style: it signals identity, belonging, and defiance. Changing hair becomes a way to change how the world reads you.",
  },
  {
    title: "Cars (especially the blue Mustang)",
    body:
      "Cars represent power, status, and speed, and they can turn into weapons when used to intimidate or trap someone.",
  },
  {
    title: "The church hideout",
    body:
      "A temporary sanctuary where the boys have time to think, read, talk, and imagine a different life, even if it cannot last.",
  },
  {
    title: "The switchblade",
    body:
      "A symbol of how “protection” and “danger” blur. It reflects the book’s question: what do you do when fear gives you no good options?",
  },
  {
    title: "The rumble",
    body:
      "A ritual of reputation. It’s framed as a way to “settle” conflict, but it mostly proves how costly pride can be.",
  },
];

const CHAPTER_SUMMARIES = [
  {
    n: 1,
    title: "Lines Drawn",
    beats: [
      "Ponyboy leaves a movie theater alone and gets jumped by a group of Socs.",
      "The Greasers rush in to save him, showing how protective the group is of its own.",
      "Ponyboy introduces the Greasers (his crew) and the class conflict that runs through the city.",
      "We meet the Curtis household: Darry acts like a strict parent, Sodapop keeps the peace, and Ponyboy feels misunderstood.",
      "Ponyboy’s friendships (especially with Johnny) are set up as emotional safety in a dangerous world.",
    ],
  },
  {
    n: 2,
    title: "Unexpected Conversations",
    beats: [
      "Ponyboy and Johnny go to the drive-in and sit near two Soc girls, Cherry and Marcia.",
      "They talk surprisingly openly, and Ponyboy realizes Socs can be thoughtful and scared too.",
      "Dally shows up and harasses the girls, and the situation threatens to turn ugly.",
      "Two-Bit steps in, and Ponyboy sees the Greasers’ “tough” image isn’t the whole story.",
      "Cherry and Ponyboy connect over the idea that people share the same feelings even when their lives look different.",
    ],
  },
  {
    n: 3,
    title: "Home Pressure",
    beats: [
      "Tension builds as Cherry’s presence complicates the Greaser-Soc line.",
      "Ponyboy stays out late and runs straight into Darry’s fear-based strictness.",
      "A fight at home turns emotional, and Ponyboy feels like he doesn’t belong even in his own house.",
      "Ponyboy leaves and meets up with Johnny because it feels safer than being home right then.",
      "They decide to cool off at the park, not realizing how quickly danger can find them.",
    ],
  },
  {
    n: 4,
    title: "The Turning Point",
    beats: [
      "At the park, a group of Socs confronts Ponyboy and Johnny.",
      "The conflict becomes life-threatening, and Ponyboy is attacked in a way that forces a split-second response.",
      "Johnny acts to save Ponyboy, and Bob is killed.",
      "Ponyboy and Johnny run, terrified, realizing the police and the Socs will come after them.",
      "They go to Dally for help, and he gives them money and a plan to hide.",
      "They leave town and hide out, shifting from normal teenage life into survival mode.",
    ],
  },
  {
    n: 5,
    title: "Hiding Out",
    beats: [
      "The boys settle into an isolated hideout and try to stay invisible.",
      "They change their appearance to avoid being recognized.",
      "With time to think, Ponyboy and Johnny talk about what kind of people they want to be.",
      "They read and reflect, and the idea of keeping innocence (“stay gold”) becomes a lifeline.",
      "Dally visits and brings news: the city is boiling, and a rumble is coming.",
    ],
  },
  {
    n: 6,
    title: "A Choice To Help",
    beats: [
      "The hideout is threatened by a sudden emergency that puts others in danger.",
      "Ponyboy and Johnny choose to help, even though it risks exposing them.",
      "They act bravely, and the public sees them differently for a moment.",
      "Johnny is badly hurt, and the story moves into the hospital and legal consequences.",
      "The “hero” label doesn’t erase what happened before, and pressure returns fast.",
    ],
  },
  {
    n: 7,
    title: "Hospital Aftermath",
    beats: [
      "Ponyboy wakes up in the hospital and has to face what the emergency cost.",
      "Darry and Sodapop arrive, and the family finally confronts grief and fear honestly.",
      "The Greasers show up, bringing loyalty, noise, and the reality of a rumble coming soon.",
      "Ponyboy realizes Darry’s strictness comes from terror of losing his brothers, not lack of love.",
      "Plans harden: the rumble becomes a symbol of pride and protection, even if it won’t fix everything.",
    ],
  },
  {
    n: 8,
    title: "Holding On",
    beats: [
      "Ponyboy visits Johnny and tries to keep hope alive while the situation worsens.",
      "Johnny’s home life is revealed as cold and unsafe, which explains why the gang felt like family.",
      "Two-Bit helps Ponyboy feel protected (and not alone) as fear rises.",
      "Ponyboy reaches out to Cherry, and she offers information that could keep someone from getting killed.",
      "The line between “enemy” and “human” keeps getting blurrier, even as violence approaches.",
    ],
  },
  {
    n: 9,
    title: "The Rumble",
    beats: [
      "The Greasers and Socs meet for the rumble, treating it like a final answer.",
      "The fight is brutal, and Ponyboy experiences how quickly adrenaline becomes exhaustion and numbness.",
      "The Greasers “win,” but the victory feels hollow because it doesn’t bring anyone peace.",
      "After the fight, the boys rush to the hospital because the real stakes are there.",
      "Johnny dies, leaving Ponyboy devastated and Dally unmoored.",
    ],
  },
  {
    n: 10,
    title: "Dally’s Spiral",
    beats: [
      "Ponyboy tries to keep moving, but grief scrambles his thinking.",
      "Dally breaks down in his own way: rage, recklessness, and the need to feel something.",
      "A desperate act pulls the police into the story, and the gang chases after Dally.",
      "Dally is killed by police, and the loss hits like a second explosion right after Johnny’s death.",
      "Ponyboy shuts down emotionally, unable to process back-to-back trauma.",
    ],
  },
  {
    n: 11,
    title: "Numbness And Denial",
    beats: [
      "Ponyboy’s mind protects him by blurring reality; he struggles to accept what happened.",
      "School and everyday life return, but Ponyboy feels detached and different.",
      "Randy talks with Ponyboy and admits the fighting never solved anything, only multiplied pain.",
      "A court hearing approaches, adding stress and forcing Ponyboy to confront the story in public.",
      "Ponyboy begins to realize that telling the truth might be the only way to make meaning from it.",
    ],
  },
  {
    n: 12,
    title: "Turning Life Into Story",
    beats: [
      "Ponyboy faces the consequences and the social fallout, even as he’s still grieving.",
      "He finds Johnny’s final message, which pushes him toward hope instead of bitterness.",
      "Ponyboy decides to write what happened as a warning and a bridge to other kids like him.",
      "The novel closes by circling back to the beginning, showing that the story itself is Ponyboy’s attempt to “stay gold.”",
    ],
  },
];


const STUDY_GUIDE = [
  {
    title: "Setting",
    body:
      "A mid-century American city shaped by neighborhoods, cars, and status. Public spaces become social borders: drive-ins, parks, streets at night.",
  },
  {
    title: "Groups",
    body:
      "Greasers: working-class teens bonded by loyalty. Socs: wealthier teens protected by status. The book argues neither group is a single personality.",
  },
  {
    title: "Symbols",
    body:
      "Sunsets (shared humanity), hair/clothes (identity and judgment), and “home” (safety vs. confinement).",
  },
  {
    title: "Discussion prompts",
    body:
      "Where do characters act from fear rather than choice? Which adults help, and why? What does “winning” cost by the end?",
  },
];

const BUY_LINKS = [
  {
    label: "IndieBound (local bookstores)",
    href: "https://www.indiebound.org/search/book?keys=The+Outsiders+S.+E.+Hinton",
    note: "Support indie",
  },
  {
    label: "Bookshop.org",
    href: "https://bookshop.org/search?query=The%20Outsiders%20S.%20E.%20Hinton",
    note: "Support indie",
  },
  {
    label: "Barnes & Noble",
    href: "https://www.barnesandnoble.com/s/the%20outsiders%20s%20e%20hinton",
    note: "Print/ebook",
  },
  {
    label: "Google Books",
    href: "https://www.google.com/search?q=The+Outsiders+S.+E.+Hinton+Google+Books",
    note: "Preview",
  },
  {
    label: "Apple Books",
    href: "https://www.google.com/search?q=The+Outsiders+S.+E.+Hinton+Apple+Books",
    note: "Ebook",
  },
  {
    label: "Amazon",
    href: "https://www.amazon.com/s?k=The+Outsiders+S.+E.+Hinton",
    note: "Many editions",
  },
  {
    label: "Audible",
    href: "https://www.audible.com/search?keywords=The+Outsiders+S.+E.+Hinton",
    note: "Audiobook",
  },
];

const OTHER_HINTON_BOOKS = [
  {
    id: "that-was-then",
    title: "That Was Then, This Is Now",
    tagline: "Friendship, loyalty, and what it costs to grow into different people.",
    summary:
      "A coming-of-age story about two close friends whose worldviews split as choices get heavier. It explores identity, responsibility, and how the past can stop feeling safe once reality catches up.",
    highlights: ["Tough moral choices", "Friendship under pressure", "Consequences and change"],
  },
  {
    id: "rumble-fish",
    title: "Rumble Fish",
    tagline: "Reputation, restlessness, and a teen trying to live up to a legend.",
    summary:
      "A gritty, atmospheric novel focused on a boy drawn to danger and status. It examines how myths of toughness shape behavior, and how admiration can turn into self-destruction.",
    highlights: ["Identity and myth", "Violence as ritual", "A darker, moodier tone"],
  },
  {
    id: "tex",
    title: "Tex",
    tagline: "A brotherhood story about stability, belonging, and surviving adolescence.",
    summary:
      "A realistic portrait of a teenager and his older brother trying to hold their lives together. It’s about family, resilience, and what it means to be cared for when the adults are unreliable.",
    highlights: ["Family dynamics", "Hope and hardship", "Growing up too fast"],
  },
  {
    id: "taming-star-runner",
    title: "Taming the Star Runner",
    tagline: "When talent meets pressure: a teen navigates writing, pride, and consequences.",
    summary:
      "A story about a high-school student whose writing ability opens doors, but also exposes him to new expectations and conflicts. It explores self-image, ambition, and accountability.",
    highlights: ["Creative identity", "Pride vs. growth", "School and social pressure"],
  },
  {
    id: "hawkes-harbor",
    title: "Hawkes Harbor",
    tagline: "A later, darker Hinton novel with suspense and the feeling of being trapped.",
    summary:
      "A tense story with a more thriller-like mood than Hinton’s early work. It focuses on isolation, secrets, and a young person trying to understand danger that doesn’t look like a school fight.",
    highlights: ["Suspense tone", "Isolation", "Secrets and fear"],
  },
  {
    id: "puppy-sister",
    title: "The Puppy Sister",
    tagline: "A shorter, gentler story about empathy, change, and seeing others differently.",
    summary:
      "A kid-focused novel about learning compassion and handling life shifts that feel unfair. It’s lighter in tone, but still keeps Hinton’s interest in perspective and character.",
    highlights: ["Empathy", "Family change", "Accessible, younger read"],
  },
];

const READING_ORDER_IDEAS = [
  {
    title: "Classic YA realism track",
    body:
      "If you like the gritty realism of The Outsiders, try That Was Then, This Is Now and Tex next for similar tone and moral questions.",
  },
  {
    title: "Darker, moodier track",
    body:
      "If you want a sharper edge and a more experimental feeling, try Rumble Fish after The Outsiders.",
  },
  {
    title: "Modern contrast track",
    body:
      "Read one of Hinton’s later works (like Hawkes Harbor) after an early novel to compare how themes evolve over time.",
  },
];

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function applyTheme(theme) {
  const next = String(theme || "ivory");
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {
    // Ignore storage failures (private mode, quotas, etc.).
  }
}

function wireTheme() {
  const select = $("#theme");
  if (!select) return;
  const saved = (() => {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch {
      return null;
    }
  })();

  const initial = saved || select.value || "ivory";
  select.value = initial;
  applyTheme(initial);

  select.addEventListener("change", () => applyTheme(select.value));
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function setView(panelSel) {
  views.forEach(({ tab, panel }) => {
    const tabEl = $(tab);
    const panelEl = $(panel);
    const isActive = panel === panelSel;
    tabEl.classList.toggle("is-active", isActive);
    tabEl.setAttribute("aria-selected", isActive ? "true" : "false");
    panelEl.classList.toggle("is-active", isActive);
  });
}

function groupPill(group) {
  return GROUP_LABEL[group] || "Unknown";
}

function buildTile(character) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "tile";
  btn.dataset.id = character.id;
  btn.setAttribute("aria-label", `Open dossier: ${character.name}`);

  const tags = character.tags.slice(0, 3).map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("");
  btn.innerHTML = `
    <div class="tile-head">
      <h3>${escapeHtml(character.name)}</h3>
      <span class="pill">${escapeHtml(groupPill(character.group))}</span>
    </div>
    <p class="tagline">${escapeHtml(character.tagline)}</p>
    <div class="meta">${tags}</div>
  `;
  return btn;
}

function matchesFilters(character, q, group) {
  if (group !== "all" && character.group !== group) return false;
  if (!q) return true;
  const blob = normalize(
    [
      character.name,
      character.group,
      character.tagline,
      character.summary,
      character.tags.join(" "),
      character.relationships.join(" "),
      character.funFacts.join(" "),
    ].join(" "),
  );
  return blob.includes(q);
}

function renderGrid() {
  const grid = $("#grid");
  const q = normalize($("#search").value);
  const group = $("#group").value;
  const matches = CHARACTERS.filter((c) => matchesFilters(c, q, group));

  grid.innerHTML = "";
  if (!matches.length) {
    const empty = document.createElement("div");
    empty.className = "card wide";
    empty.innerHTML = `<h2>No matches</h2><p class="muted">Try a different name, group, or keyword.</p>`;
    grid.appendChild(empty);
    return;
  }

  matches.forEach((c, idx) => {
    const tile = buildTile(c);
    tile.style.animation = `fadeUp 220ms ease ${idx * 18}ms both`;
    grid.appendChild(tile);
  });
}

function fillDl(dl, map) {
  dl.innerHTML = "";
  Object.entries(map).forEach(([k, v]) => {
    const dt = document.createElement("dt");
    dt.textContent = k;
    const dd = document.createElement("dd");
    dd.textContent = v;
    dl.appendChild(dt);
    dl.appendChild(dd);
  });
}

function fillList(ul, items) {
  ul.innerHTML = "";
  items.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });
}

function renderModal(character) {
  const spoilersOn = $("#spoilers").checked;
  const modal = $("#modal");
  modal.dataset.id = character.id;
  $("#m-group").textContent = groupPill(character.group);
  $("#m-name").textContent = character.name;
  $("#m-tagline").textContent = character.tagline;
  $("#m-summary").textContent = character.summary;
  fillDl($("#m-dl"), character.atAGlance);
  fillList($("#m-rel"), character.relationships);
  fillList($("#m-fun"), character.funFacts);

  const spoilersWrap = $("#m-spoilers-wrap");
  spoilersWrap.hidden = !spoilersOn;
  fillList($("#m-spoilers"), character.spoilers);

  const spoilerBtn = $("#m-spoiler-toggle");
  spoilerBtn.textContent = spoilersOn ? "Spoilers: On" : "Spoilers: Off";
  spoilerBtn.setAttribute("aria-pressed", spoilersOn ? "true" : "false");
}

function openModal(character) {
  const modal = $("#modal");
  renderModal(character);
  if (!modal.open && typeof modal.showModal === "function") modal.showModal();
}

function wireTabs() {
  const tabs = views.map(({ tab }) => $(tab));

  views.forEach(({ tab, panel }) => {
    $(tab).addEventListener("click", () => {
      setView(panel);
      $("#main").focus();
    });
  });

  $(".tabs").addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const activeIndex = tabs.findIndex((t) => t === document.activeElement);
    if (activeIndex === -1) return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (activeIndex + dir + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    tabs[nextIndex].click();
  });
}

function renderBook() {
  const facts = $("#book-facts");
  facts.innerHTML = "";
  BOOK_FACTS.forEach((f) => {
    const li = document.createElement("li");
    li.textContent = f;
    facts.appendChild(li);
  });

  const themes = $("#themes");
  themes.innerHTML = "";
  THEMES.forEach((t) => {
    const div = document.createElement("div");
    div.className = "theme";
    div.innerHTML = `<h3>${escapeHtml(t.title)}</h3><p>${escapeHtml(t.body)}</p>`;
    themes.appendChild(div);
  });

  const study = $("#study");
  study.innerHTML = "";
  STUDY_GUIDE.forEach((b) => {
    const div = document.createElement("div");
    div.className = "study-block";
    div.innerHTML = `<h3>${escapeHtml(b.title)}</h3><p>${escapeHtml(b.body)}</p>`;
    study.appendChild(div);
  });

  const symbols = $("#symbols");
  symbols.innerHTML = "";
  SYMBOLS.forEach((s) => {
    const div = document.createElement("div");
    div.className = "symbol";
    div.innerHTML = `<h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.body)}</p>`;
    symbols.appendChild(div);
  });

  const chapters = $("#chapters");
  chapters.innerHTML = "";
  const spoilersOn = $("#spoilers").checked;
  CHAPTER_SUMMARIES.forEach((c) => {
    const d = document.createElement("details");
    const s = document.createElement("summary");
    s.textContent = `Chapter ${c.n}: ${c.title}`;
    const p = document.createElement("p");
    p.textContent = spoilersOn
      ? "Step-by-step summary:"
      : "Spoilers are off. Turn on “Show spoilers” to reveal this chapter summary.";
    d.appendChild(s);
    d.appendChild(p);

    if (spoilersOn) {
      const ol = document.createElement("ol");
      ol.className = "list";
      c.beats.forEach((beat) => {
        const li = document.createElement("li");
        li.textContent = beat;
        ol.appendChild(li);
      });
      d.appendChild(ol);
    }

    chapters.appendChild(d);
  });
}

function renderShop() {
  const buy = $("#buy-links");
  buy.innerHTML = "";
  BUY_LINKS.forEach((l) => {
    const a = document.createElement("a");
    a.className = "btn";
    a.href = l.href;
    a.target = "_blank";
    a.rel = "noreferrer noopener";
    a.innerHTML = `${escapeHtml(l.label)} <span>${escapeHtml(l.note)}</span>`;
    buy.appendChild(a);
  });

  const list = $("#other-books");
  list.innerHTML = "";
  OTHER_HINTON_BOOKS.forEach((b) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "other-tile";
    btn.dataset.bookId = b.id;
    btn.innerHTML = `<strong>${escapeHtml(b.title)}</strong><span>${escapeHtml(b.tagline)}</span>`;
    btn.addEventListener("click", () => openBookModal(b));
    list.appendChild(btn);
  });

  const order = $("#reading-order");
  order.innerHTML = "";
  READING_ORDER_IDEAS.forEach((x) => {
    const div = document.createElement("div");
    div.className = "theme";
    div.innerHTML = `<h3>${escapeHtml(x.title)}</h3><p>${escapeHtml(x.body)}</p>`;
    order.appendChild(div);
  });
}

function buildBookLinks(bookTitle) {
  const q = encodeURIComponent(`${bookTitle} S. E. Hinton`);
  return [
    { label: "Bookshop.org", href: `https://bookshop.org/search?query=${q}`, note: "Support indie" },
    { label: "IndieBound", href: `https://www.indiebound.org/search/book?keys=${q}`, note: "Local stores" },
    { label: "Barnes & Noble", href: `https://www.barnesandnoble.com/s/${encodeURIComponent(bookTitle)}`, note: "Print/ebook" },
    { label: "Amazon", href: `https://www.amazon.com/s?k=${q}`, note: "Many editions" },
    { label: "Google", href: `https://www.google.com/search?q=${q}`, note: "Search" },
  ];
}

function renderBookModal(book) {
  const modal = $("#book-modal");
  modal.dataset.bookId = book.id;
  $("#bm-title").textContent = book.title;
  $("#bm-tagline").textContent = book.tagline;
  $("#bm-summary").textContent = book.summary;
  fillList($("#bm-highlights"), book.highlights);

  const links = $("#bm-links");
  links.innerHTML = "";
  buildBookLinks(book.title).forEach((l) => {
    const a = document.createElement("a");
    a.className = "btn";
    a.href = l.href;
    a.target = "_blank";
    a.rel = "noreferrer noopener";
    a.innerHTML = `${escapeHtml(l.label)} <span>${escapeHtml(l.note)}</span>`;
    links.appendChild(a);
  });
}

function openBookModal(book) {
  const modal = $("#book-modal");
  renderBookModal(book);
  if (!modal.open && typeof modal.showModal === "function") modal.showModal();
}

function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function uniqueBy(arr, keyFn) {
  const out = [];
  const seen = new Set();
  arr.forEach((x) => {
    const k = keyFn(x);
    if (seen.has(k)) return;
    seen.add(k);
    out.push(x);
  });
  return out;
}

const quiz = {
  active: false,
  locked: false,
  mode: "who",
  current: null,
  score: 0,
  streak: 0,
  best: 0,
};

function quizBestKey(mode) {
  return `outsidersQuizBest_${mode}`;
}

function loadQuizBest() {
  quiz.best = Number(localStorage.getItem(quizBestKey(quiz.mode))) || 0;
  $("#q-best").textContent = String(quiz.best);
}

function updateQuizStats() {
  $("#q-score").textContent = String(quiz.score);
  $("#q-streak").textContent = String(quiz.streak);
  $("#q-best").textContent = String(quiz.best);
}

function setExplain(text) {
  $("#q-explain").textContent = text || "";
}

function setPrompt(text) {
  $("#q-prompt").textContent = text;
}

function clearChoices() {
  $("#q-choices").innerHTML = "";
}

function setLocked(locked) {
  quiz.locked = locked;
  $("#q-next").disabled = !locked;
}

function buildChoice(label, isCorrect, onPick) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "choice";
  btn.textContent = label;
  btn.addEventListener("click", () => onPick(btn, isCorrect));
  return btn;
}

function questionWho() {
  const character = sample(CHARACTERS.filter((c) => c.group !== "adults"));
  const distractors = shuffle(CHARACTERS.filter((c) => c.id !== character.id)).slice(0, 3);
  const choices = shuffle([character, ...distractors]).map((c) => ({
    label: c.name,
    correct: c.id === character.id,
  }));

  const hints = shuffle(uniqueBy(character.funFacts.concat(character.relationships), (x) => x)).slice(0, 2);
  const hintText = hints.length ? `Hints: ${hints.join(" ")}` : "Hint: Focus on group + personality.";
  setPrompt(`Who is this? ${hintText}`);

  return {
    choices,
    answerLabel: character.name,
    explain: `${character.name}: ${character.summary}`,
  };
}

function questionFacts() {
  const pool = [
    ...CHARACTERS.map((c) => ({
      prompt: `Which group is ${c.name} in?`,
      correct: groupPill(c.group),
      wrong: shuffle(Object.values(GROUP_LABEL))
        .filter((g) => g !== groupPill(c.group))
        .slice(0, 3),
      explain: `${c.name} is categorized as ${groupPill(c.group)} in this dossier.`,
    })),
    {
      prompt: "When was The Outsiders first published?",
      correct: "1967",
      wrong: ["1957", "1977", "1983"],
      explain: "The novel was first published in 1967.",
    },
    {
      prompt: "Where is the story set?",
      correct: "Tulsa, Oklahoma",
      wrong: ["New York City", "Los Angeles", "Chicago"],
      explain: "The story is set in Tulsa, Oklahoma.",
    },
    {
      prompt: "What is the name for the wealthier group in the book?",
      correct: "Socs",
      wrong: ["Jocks", "T-Birds", "Jets"],
      explain: "The wealthier teens are called Socs.",
    },
    {
      prompt: "“Stay gold” connects to which poem the book references?",
      correct: "“Nothing Gold Can Stay” (Robert Frost)",
      wrong: ["“The Road Not Taken” (Robert Frost)", "“O Captain! My Captain!” (Walt Whitman)", "“If—” (Rudyard Kipling)"],
      explain: "The novel uses Robert Frost’s “Nothing Gold Can Stay” as a key motif for innocence and change.",
    },
  ];

  const q = sample(pool);
  const choices = shuffle([{ label: q.correct, correct: true }, ...q.wrong.map((w) => ({ label: w, correct: false }))]);
  setPrompt(q.prompt);
  return { choices, answerLabel: q.correct, explain: q.explain };
}

function nextQuestion() {
  quiz.current = quiz.mode === "who" ? questionWho() : questionFacts();
  clearChoices();
  setExplain("");
  setLocked(false);

  quiz.current.choices.forEach((c) => {
    $("#q-choices").appendChild(
      buildChoice(c.label, c.correct, (btn, isCorrect) => {
        if (quiz.locked) return;
        const choiceButtons = [...$("#q-choices").querySelectorAll("button.choice")];
        choiceButtons.forEach((b) => b.setAttribute("disabled", "true"));

        if (isCorrect) {
          btn.classList.add("is-correct");
          quiz.score += 1;
          quiz.streak += 1;
        } else {
          btn.classList.add("is-wrong");
          quiz.streak = 0;
          choiceButtons.forEach((b) => {
            if (b.textContent === quiz.current.answerLabel) b.classList.add("is-correct");
          });
        }

        if (quiz.score > quiz.best) {
          quiz.best = quiz.score;
          localStorage.setItem(quizBestKey(quiz.mode), String(quiz.best));
        }

        updateQuizStats();
        setExplain(quiz.current.explain);
        setLocked(true);
      }),
    );
  });
}

function startQuiz() {
  quiz.active = true;
  quiz.score = 0;
  quiz.streak = 0;
  loadQuizBest();
  updateQuizStats();
  nextQuestion();
}

function resetQuiz() {
  quiz.active = false;
  quiz.score = 0;
  quiz.streak = 0;
  loadQuizBest();
  updateQuizStats();
  clearChoices();
  setExplain("");
  setPrompt("Choose a mode and press Start.");
  setLocked(false);
}

function wireQuiz() {
  $("#q-mode").addEventListener("change", () => {
    quiz.mode = $("#q-mode").value;
    loadQuizBest();
    resetQuiz();
  });
  $("#q-start").addEventListener("click", () => startQuiz());
  $("#q-next").addEventListener("click", () => {
    if (!quiz.active) return;
    nextQuestion();
  });
  $("#q-reset").addEventListener("click", () => resetQuiz());
}

function wireDossiers() {
  $("#search").addEventListener("input", () => renderGrid());
  $("#group").addEventListener("change", () => renderGrid());
  $("#spoilers").addEventListener("change", () => {
    const modal = $("#modal");
    if (modal.open) {
      const id = modal.dataset.id;
      const c = CHARACTERS.find((x) => x.id === id);
      if (c) renderModal(c);
    }
    renderBook();
  });

  $("#m-spoiler-toggle").addEventListener("click", () => {
    const spoilers = $("#spoilers");
    spoilers.checked = !spoilers.checked;
    spoilers.dispatchEvent(new Event("change", { bubbles: true }));
  });

  $("#grid").addEventListener("click", (e) => {
    const btn = e.target.closest("button.tile");
    if (!btn) return;
    const c = CHARACTERS.find((x) => x.id === btn.dataset.id);
    if (!c) return;
    openModal(c);
  });

  $("#grid").addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const btn = e.target.closest("button.tile");
    if (!btn) return;
    e.preventDefault();
    btn.click();
  });

  const modal = $("#modal");
  modal.addEventListener("close", () => {
    modal.dataset.id = "";
  });
}

function init() {
  wireTheme();
  wireTabs();
  wireDossiers();
  wireQuiz();
  renderBook();
  renderShop();
  renderGrid();

  quiz.mode = $("#q-mode").value;
  loadQuizBest();
  updateQuizStats();
}

init();
