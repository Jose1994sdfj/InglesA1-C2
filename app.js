// [categoría, pregunta ("texto|||pregunta" si lleva lectura), opciones, índice correcto, explicación]
const RAW = [
// ---------- GRAMÁTICA (40) ----------
["G","I ___ to the gym three times a week.",["go","goes","am going","went"],0,"Present simple para hábitos: I go."],
["G","She ___ TV when I called her.",["watched","was watching","watches","has watched"],1,"Past continuous para una acción en progreso interrumpida por otra."],
["G","If it rains tomorrow, we ___ at home.",["stay","will stay","would stay","stayed"],1,"Primer condicional: if + presente, will + verbo."],
["G","I have lived here ___ 2019.",["for","since","from","during"],1,"'Since' va con un punto en el tiempo; 'for' con una duración."],
["G","He is ___ than his brother.",["tall","taller","the tallest","more tall"],1,"Comparativo corto: tall → taller."],
["G","You ___ wear a seatbelt. It's the law.",["must","might","can","would"],0,"'Must' expresa obligación."],
["G","We didn't have ___ money, so we stayed home.",["some","any","many","a"],1,"En negativas se usa 'any'."],
["G","___ you ever been to London?",["Did","Have","Do","Are"],1,"Present perfect para experiencias: Have you ever been...?"],
["G","This book ___ by millions of people.",["reads","is read","is reading","read"],1,"Voz pasiva en presente: is + participio."],
["G","If I ___ rich, I would travel the world.",["am","were","will be","would be"],1,"Segundo condicional: if + pasado, would + verbo."],
["G","She asked me where ___.",["I lived","did I live","I do live","do I live"],0,"En estilo indirecto no se invierte el orden."],
["G","There aren't ___ chairs in the room.",["much","many","a lot","little"],1,"'Many' con sustantivos contables en plural."],
["G","I'm looking forward ___ you.",["to see","to seeing","seeing","for seeing"],1,"'Look forward to' + verbo en -ing."],
["G","He said he ___ tired.",["is","was","will be","has been"],1,"Estilo indirecto: el presente retrocede al pasado."],
["G","This is the ___ film I've ever seen.",["good","better","best","most good"],2,"Superlativo irregular: good → the best."],
["G","I ___ my keys. I can't find them.",["lose","lost","have lost","was losing"],2,"Present perfect: acción pasada con resultado en el presente."],
["G","They ___ dinner when the power went out.",["had","were having","have","are having"],1,"Past continuous interrumpido por un pasado simple."],
["G","She doesn't like coffee, and ___ do I.",["so","neither","either","too"],1,"'Neither do I' = yo tampoco."],
["G","He's the man ___ lives next door.",["which","who","whose","where"],1,"'Who' para personas como sujeto."],
["G","I wish I ___ more free time.",["have","had","would have","will have"],1,"'Wish' + pasado simple para deseos irreales del presente."],
["G","How ___ does it take to get to the airport?",["much","long","far","many"],1,"'How long' pregunta por la duración."],
["G","We ___ to the cinema yesterday.",["go","goes","went","gone"],2,"Pasado simple de go: went."],
["G","You ___ see a doctor if you feel ill.",["should","must to","can to","would"],0,"'Should' sirve para dar consejos."],
["G","My sister is good ___ painting.",["in","at","on","for"],1,"Good at + actividad."],
["G","___ she has a lot of homework, she's going out tonight.",["Because","Although","So","Unless"],1,"'Although' introduce un contraste."],
["G","I'll call you as soon as I ___ home.",["get","will get","got","am getting"],0,"Después de 'as soon as' se usa presente para el futuro."],
["G","He ___ smoke, but he stopped last year.",["used to","use to","is used to","was used"],0,"'Used to' habla de hábitos pasados."],
["G","The meeting ___ at 9 a.m. tomorrow.",["starts","is start","start","starting"],0,"Present simple para horarios programados."],
["G","Neither of my friends ___ coming.",["are","is","be","were"],1,"'Neither of' va con verbo en singular."],
["G","She's wearing ___ beautiful dress.",["a","an","the","some"],0,"'Beautiful' empieza con sonido consonante (/b/), por eso se usa 'a'."],
["G","I can't come ___ I'm busy.",["because","so","although","however"],0,"'Because' introduce una causa."],
["G","The film was so boring ___ I fell asleep.",["that","than","as","which"],0,"Estructura so + adjetivo + that."],
["G","By the time we arrived, the film ___.",["already started","had already started","has already started","was already starting"],1,"Past perfect: acción anterior a otra en el pasado."],
["G","Do you mind ___ the window?",["to open","opening","open","opened"],1,"'Mind' va seguido de verbo en -ing."],
["G","This is my ___ bag.",["sister's","sisters","of sister","sister"],0,"Posesivo con 's."],
["G","Which sentence is correct?",["He don't like pizza.","He doesn't likes pizza.","He doesn't like pizza.","He not like pizza."],2,"Con doesn't el verbo va en forma base."],
["G","We ___ been waiting for an hour.",["have","has","are","did"],0,"Present perfect continuous: have been + -ing."],
["G","I'd rather ___ at home tonight.",["stay","to stay","staying","stayed"],0,"'Would rather' + verbo en forma base."],
["G","She suggested ___ to the beach.",["to go","going","go","went"],1,"'Suggest' + verbo en -ing."],
["G","He ___ finished his homework yet.",["hasn't","didn't","isn't","doesn't"],0,"'Yet' en negativas va con present perfect."],
// ---------- VOCABULARIO (25) ----------
["V","What is the opposite of 'expensive'?",["cheap","rich","heavy","tall"],0,"Expensive ↔ cheap."],
["V","A person who cooks in a restaurant is a ___.",["chef","waiter","driver","nurse"],0,"Chef = cocinero profesional."],
["V","I need to ___ a decision before Friday.",["do","make","have","give"],1,"Colocación: make a decision."],
["V","The weather is freezing. It means it's very ___.",["hot","cold","windy","wet"],1,"Freezing = muy frío."],
["V","'Delicious' means ___.",["tastes very good","looks very bad","smells strange","is very hot"],0,"Delicious = delicioso."],
["V","My brother's wife is my ___.",["aunt","cousin","sister-in-law","niece"],2,"La esposa de tu hermano es tu cuñada."],
["V","He ___ me some money, and I have to pay it back.",["lent","borrowed","earned","won"],0,"Lend = prestar; borrow = pedir prestado."],
["V","Which word means almost the same as 'huge'?",["enormous","tiny","narrow","quiet"],0,"Huge ≈ enormous."],
["V","She's very ___; she always tells the truth.",["honest","lazy","shy","rude"],0,"Honest = honesta."],
["V","You can borrow books from a ___.",["library","bookshop","museum","theatre"],0,"Library = biblioteca."],
["V","I'm not ___ in sport. I find it boring.",["interesting","interested","interest","interests"],1,"Interested describe cómo te sientes."],
["V","What is the opposite of 'arrive'?",["leave","enter","stay","return"],0,"Arrive ↔ leave."],
["V","To 'postpone' a meeting means to ___.",["cancel it forever","move it to a later time","start it earlier","attend it"],1,"Postpone = aplazar."],
["V","You use an ___ to protect yourself from the rain.",["umbrella","suitcase","pillow","mirror"],0,"Umbrella = paraguas."],
["V","I'm exhausted. I need to ___.",["rest","run","shout","argue"],0,"Exhausted = agotado, necesitas descansar."],
["V","Tom is very ___; he never stops talking.",["talkative","quiet","silent","serious"],0,"Talkative = hablador."],
["V","A headache is a pain in your ___.",["head","stomach","foot","back"],0,"Headache = dolor de cabeza."],
["V","A written message you send from your phone is a ___.",["text","letter","poster","postcard"],0,"Text (message) = mensaje de texto."],
["V","Someone who doesn't have a job is ___.",["unemployed","employed","famous","wealthy"],0,"Unemployed = desempleado."],
["V","'I'm fed up' means I'm ___.",["happy","bored and annoyed","hungry","confused"],1,"Fed up = harto."],
["V","Which word means 'very small'?",["tiny","huge","wide","thick"],0,"Tiny = diminuto."],
["V","The ___ brings you the food in a restaurant.",["waiter","pilot","dentist","mechanic"],0,"Waiter = mesero."],
["V","We need to ___ the room before the guests come.",["tidy","break","spend","lend"],0,"Tidy = ordenar."],
["V","A 'souvenir' is ___.",["something you buy to remember a place","a type of hotel","a kind of food","a tourist guide"],0,"Souvenir = recuerdo de viaje."],
["V","She was ___ when she heard the bad news.",["upset","upsetting","upsets","upsetted"],0,"Upset = disgustada, afectada."],
// ---------- PHRASAL VERBS Y PREPOSICIONES (15) ----------
["P","Please ___ your shoes before you come in.",["take off","take out","take up","take in"],0,"Take off = quitarse (ropa, zapatos)."],
["P","I can't find my wallet. Can you help me ___ it?",["look for","look at","look after","look like"],0,"Look for = buscar."],
["P","The plane ___ at 6 a.m.",["took off","took out","took up","took over"],0,"Take off = despegar."],
["P","Don't ___. Keep trying!",["give up","give out","give away","give back"],0,"Give up = rendirse."],
["P","I get ___ well with my colleagues.",["on","up","out","off"],0,"Get on well with = llevarse bien con."],
["P","We ran ___ of milk, so I went to the shop.",["out","off","away","up"],0,"Run out of = quedarse sin."],
["P","She looks ___ her little brother while their parents work.",["after","for","at","up"],0,"Look after = cuidar."],
["P","I'm interested ___ learning Japanese.",["on","in","at","for"],1,"Interested in."],
["P","He's afraid ___ dogs.",["from","of","with","to"],1,"Afraid of."],
["P","Please ___ the TV; it's too loud.",["turn down","turn over","turn into","turn up"],0,"Turn down = bajar el volumen."],
["P","We have to ___ early tomorrow for the flight.",["get up","get on","get over","get off"],0,"Get up = levantarse."],
["P","Can you ___ this form, please?",["fill in","fill on","fill at","fill with"],0,"Fill in = rellenar un formulario."],
["P","She's been waiting ___ the bus stop for 20 minutes.",["at","in the","to","by the"],0,"At the bus stop."],
["P","He is married ___ a doctor.",["with","to","for","at"],1,"Married to."],
["P","I'll pick you ___ at the station at 8.",["up","on","out","off"],0,"Pick up = recoger a alguien."],
// ---------- INGLÉS COTIDIANO (10) ----------
["F","'How about going to the cinema?' Which is the best reply?",["Yes, that sounds great!","No, I'm going.","It's at 8.","I like films."],0,"Respuesta natural a una sugerencia."],
["F","You didn't hear what someone said. You say:",["Sorry, could you say that again?","Sorry, I don't like it.","What time is it?","Never mind, it's mine."],0,"Forma educada de pedir que repitan."],
["F","At a restaurant: 'Would you like anything else?'",["No, that's all, thanks.","Yes, I'm fine.","It's very expensive.","I was there yesterday."],0,"Respuesta natural del cliente."],
["F","'I'm sorry I'm late.'",["That's OK. Don't worry.","You're welcome.","Same to you.","Good idea."],0,"Respuesta habitual a una disculpa."],
["F","Which is the most polite request?",["Give me water.","Could I have some water, please?","I want water.","Water now."],1,"'Could I...?' es cortés."],
["F","'Would you mind closing the door?'",["Not at all.","Yes, it is.","I'm closed.","No, thank you."],0,"'Not at all' = claro que no me molesta."],
["F","'Have a nice weekend!'",["Thanks, you too!","The same weekend.","Yes, I have.","Not really."],0,"Respuesta habitual a un deseo."],
["F","You want to disagree politely. You say:",["I'm not sure I agree.","You're wrong.","That's stupid.","Shut up."],0,"Forma suave de discrepar."],
["F","'What's she like?' asks about her ___.",["personality","favourite food","health today","current activity"],0,"What is she like? pregunta cómo es de carácter."],
["F","On the phone: 'Can I speak to Mr Lopez?' He answers:",["Speaking.","I'm Mr Lopez, no.","Yes, I can.","It's a call."],0,"'Speaking' = soy yo."],
// ---------- LECTURA (10) ----------
["R","Tom works in a bank from Monday to Friday. At weekends he plays football with his friends. On Sundays he visits his grandmother.|||When does Tom visit his grandmother?",["On Sundays","On Saturdays","From Monday to Friday","Every evening"],0,"El texto dice: 'On Sundays he visits his grandmother'."],
["R","NOTICE: The swimming pool is closed on Mondays for cleaning. It opens at 7 a.m. on other days.|||What does the notice say?",["The pool is closed on Mondays.","The pool opens at 7 on Mondays.","The pool is closed every day.","The pool is dirty."],0,"Cerrada los lunes por limpieza."],
["R","Dear Ana, thanks for your invitation. Unfortunately, I can't come to your party because I have to work. I hope you have a great time!|||Why can't the writer go to the party?",["He or she has to work.","He or she is ill.","He or she is on holiday.","He or she forgot."],0,"'Because I have to work'."],
["R","Last summer we went to Mexico City. The food was amazing, but it was very hot, so we visited museums in the afternoon.|||What did they do in the afternoon?",["They visited museums.","They went swimming.","They slept.","They ate tacos."],0,"'We visited museums in the afternoon'."],
["R","Sam used to live in a small village, but now he lives in a big city. He misses the quiet life, but he loves his new job.|||What does Sam think about his new life?",["He likes his job but misses the village.","He hates everything.","He doesn't have a job.","He wants more noise."],0,"Echa de menos la tranquilidad pero ama su trabajo."],
["R","SIGN: Please do not feed the animals.|||What does the sign mean?",["You must not give food to the animals.","You can feed the animals.","The animals are hungry.","Bring food for the animals."],0,"'Do not feed' = no dar de comer."],
["R","The bus to the city centre leaves every 20 minutes. The journey takes 35 minutes.|||If you take the bus at 10:00, when do you arrive?",["10:35","10:20","10:55","11:00"],0,"10:00 + 35 minutos = 10:35."],
["R","EMAIL: The meeting has been moved from Tuesday to Thursday at 3 p.m.|||When is the meeting now?",["Thursday at 3 p.m.","Tuesday at 3 p.m.","Tuesday at 5 p.m.","Friday at 3 p.m."],0,"'Moved to Thursday at 3 p.m.'"],
["R","Maria isn't a morning person. She usually wakes up at 10 and has coffee before she says a single word.|||What kind of person is Maria?",["Someone who doesn't like mornings","An early riser","Talkative in the morning","Always on time"],0,"'Isn't a morning person' = no es de mañanas."],
["R","Because of the heavy snow, all flights were cancelled and passengers had to wait at the airport.|||What happened?",["Flights were cancelled because of the weather.","The airport closed because of a strike.","Passengers arrived late.","Planes flew late."],0,"La causa fue la nieve."],
// ---------- AMPLIACIÓN: GRAMÁTICA (18) ----------
["G","She has worked here ___ five years.",["for","since","during","from"],0,"'For' va con una duración; 'since' con un punto en el tiempo."],
["G","If I had more time, I ___ learn French.",["will","would","am going to","can"],1,"Segundo condicional: if + pasado, would + verbo."],
["G","This car ___ in Germany.",["is made","makes","is making","made"],0,"Voz pasiva en presente: is + participio."],
["G","I ___ up at 5 a.m. yesterday.",["get","got","getting","gets"],1,"'Yesterday' pide pasado simple: got."],
["G","He asked me ___ I wanted some tea.",["if","that","what","which"],0,"En preguntas de sí o no en estilo indirecto se usa 'if'."],
["G","You ___ park here. There's a sign.",["mustn't","don't have to","needn't","might not"],0,"'Mustn't' expresa prohibición."],
["G","We don't ___ to wear a uniform at my school.",["must","have","should","ought"],1,"'Don't have to' = no es obligatorio."],
["G","She's the girl ___ brother is a famous singer.",["who","which","whose","whom"],2,"'Whose' indica posesión."],
["G","I've never ___ sushi.",["eat","ate","eaten","eating"],2,"Present perfect: have + participio (eaten)."],
["G","While I ___ home, I saw an accident.",["walk","was walking","walked","am walking"],1,"Past continuous para la acción larga en progreso."],
["G","There ___ a lot of people at the concert last night.",["was","were","is","are"],1,"'People' es plural: were."],
["G","I'm not as tall ___ my sister.",["than","as","that","like"],1,"Estructura not as + adjetivo + as."],
["G","He drives ___ than his father.",["more carefully","more careful","carefuller","most carefully"],0,"Comparativo del adverbio: more carefully."],
["G","I'll help you if you ___ me.",["ask","will ask","asked","would ask"],0,"Primer condicional: después de 'if' va presente."],
["G","The teacher told us ___ quiet.",["be","to be","being","that be"],1,"'Tell somebody to + verbo'."],
["G","___ of the two bags is yours?",["What","Which","Who","Whose"],1,"'Which' se usa para elegir entre pocas opciones."],
["G","By next year, I ___ English for five years.",["will study","will have studied","studied","am studying"],1,"Future perfect: will have + participio."],
["G","It's the first time I ___ this dish.",["try","tried","have tried","am trying"],2,"'It's the first time' + present perfect."],
// ---------- AMPLIACIÓN: VOCABULARIO (12) ----------
["V","What is the opposite of 'generous'?",["mean","kind","polite","brave"],0,"Generous ↔ mean (tacaño)."],
["V","I'd like to ___ a table for two at 8 p.m.",["book","borrow","bring","buy"],0,"Book a table = reservar una mesa."],
["V","A ___ is a person who teaches at a university.",["lecturer","customer","tourist","guard"],0,"Lecturer = profesor universitario."],
["V","I can't ___ with this noise. It's too loud.",["concentrate","consider","contain","concern"],0,"Concentrate = concentrarse."],
["V","The shirt was too small, so the shop gave me a ___.",["refund","ticket","receipt","discount"],0,"Refund = reembolso."],
["V","Please ___ me know if you can come.",["let","make","tell","say"],0,"Expresión fija: let me know."],
["V","He's got a lot of ___; he's worked in many countries.",["experience","experiment","exercise","expectation"],0,"Experience = experiencia."],
["V","The ___ of the film was exciting. I didn't expect that ending.",["plot","plant","plan","plate"],0,"Plot = trama."],
["V","I feel very ___ before exams.",["stressed","stressing","stress","stresses"],0,"Stressed es el adjetivo: estresado."],
["V","A ___ is a small shop that sells newspapers and sweets.",["kiosk","garage","pharmacy","bakery"],0,"Kiosk = quiosco."],
["V","Which word means 'to look at something quickly'?",["glance","stare","watch","gaze"],0,"Glance = echar un vistazo."],
["V","We need to ___ the problem before it gets worse.",["solve","save","spend","lose"],0,"Solve a problem = resolver un problema."],
// ---------- AMPLIACIÓN: PHRASAL VERBS Y PREPOSICIONES (8) ----------
["P","She turned ___ the job because the salary was low.",["down","up","on","over"],0,"Turn down = rechazar."],
["P","Let's ___ at 7 in front of the cinema.",["meet up","meet over","meet off","meet away"],0,"Meet up = quedar, reunirse."],
["P","The meeting was ___ off because of the strike.",["called","made","brought","kept"],0,"Call off = cancelar."],
["P","She takes ___ her mother; they look the same.",["after","for","up","to"],0,"Take after = parecerse a un familiar."],
["P","He's good ___ maths.",["at","in","on","of"],0,"Good at + materia."],
["P","I'm sorry ___ being late.",["for","to","at","from"],0,"Sorry for + -ing."],
["P","They put ___ the party until next week.",["off","out","up","away"],0,"Put off = aplazar."],
["P","I came ___ my old school friend in town yesterday.",["across","over","out","off"],0,"Come across = encontrarse por casualidad."],
// ---------- AMPLIACIÓN: INGLÉS COTIDIANO (6) ----------
["F","Someone says 'Thanks a lot!' You reply:",["You're welcome.","Same to you.","I don't know.","Good luck."],0,"Respuesta habitual a un agradecimiento."],
["F","You want the bill in a restaurant. You say:",["Could we have the bill, please?","Give me the menu.","I'm full of bill.","Where is the toilet?"],0,"Forma educada de pedir la cuenta."],
["F","'I'm afraid I can't make it tonight.' This means:",["I can't come.","I'm scared.","I haven't done it.","I'll make dinner."],0,"'Can't make it' = no puedo asistir."],
["F","'It's up to you.' means:",["You decide.","You must go up.","It's your turn to speak.","Look upstairs."],0,"'Up to you' = tú decides."],
["F","Which is a polite way to refuse an invitation?",["Thanks for asking, but I'm busy that day.","No way.","I don't want to.","Why would I go?"],0,"Agradecer y dar una razón suaviza el rechazo."],
["F","'Long time no see!' You say it when:",["you meet someone after a long time","you leave quickly","you can't see well","you wait for a bus"],0,"Se dice al reencontrarte con alguien."],
// ---------- AMPLIACIÓN: LECTURA (6) ----------
["R","Anna's flight was delayed for three hours, so she read a book in the café. When she finally boarded the plane, she was very tired.|||Why did Anna read a book?",["Her flight was delayed.","She was tired.","She liked the café.","She missed the plane."],0,"El retraso del vuelo la dejó esperando."],
["R","SALE: Everything half price until Saturday. No refunds on sale items.|||What does the sign tell you?",["Sale items can't be returned for money.","The shop is closed on Saturday.","Items cost double.","Refunds are only given on Saturday."],0,"'No refunds' = no hay reembolsos."],
["R","Hi Leo, I'm running late. I'll be at the station at 6:30 instead of 6. Can you wait for me inside? It's cold. Dani|||What is Dani asking Leo to do?",["Wait inside the station.","Come at 6:30.","Buy the tickets.","Call a taxi."],0,"Le pide esperar adentro por el frío."],
["R","Carlos started learning the guitar two years ago. At first he practised for ten minutes a day, but now he plays for an hour. He hopes to join a band next year.|||What is Carlos's plan?",["To join a band.","To stop playing.","To buy a guitar.","To teach music."],0,"'He hopes to join a band next year'."],
["R","Many people think that cities are noisy and stressful. However, a recent survey says that people in small towns often feel lonelier than people in big cities.|||What does the survey suggest?",["People in small towns can feel lonelier.","Cities are quieter than towns.","Big cities are lonelier.","People hate small towns."],0,"La encuesta contradice la idea popular."],
["R","The museum is free on the first Sunday of every month. On other days, tickets cost 8 euros for adults and are free for children under 12.|||How much does an adult ticket cost on a normal Tuesday?",["8 euros","Free","12 euros","4 euros"],0,"Un martes normal el adulto paga 8 euros."]
];
RAW.push(
["E","The lesson was so ___ that several students started yawning.",["bored","boring","bore","bores"],1,"-ing describe la cosa que causa la emoción: the lesson was boring.",1],
["E","I felt ___ during the long, ___ meeting.",["boring / bored","bored / boring","bored / bored","boring / boring"],1,"-ed describe cómo se siente una persona; -ing describe lo que causa ese sentimiento.",1],
["E","After the trip, we felt ___, but the journey itself was ___.",["exhausting / exhausted","exhausted / exhausting","exhausted / exhausted","exhausting / exhausting"],1,"People feel exhausted; an activity or journey can be exhausting.",2],
["E","She was ___ by the view. The view was ___.",["amazing / amazed","amazed / amazing","amazed / amazed","amazing / amazing"],1,"A person is amazed; the thing causing the feeling is amazing.",1],
["E","I get ___ before exams, but I feel ___ when I finish.",["nervous / relieved","relieving / nervous","nervous / relieving","relieved / nervous"],0,"Nervous describe ansiedad antes del examen; relieved describe el alivio al terminar.",1],
["E","Which sentence correctly uses the preposition with 'worried'?",["She is worried about her finances.","She is worried by her finances about.","She worried to her finances.","She is worried of her finances."],0,"La estructura habitual es be worried about something.",2],
["E","He was ___ by the noise and asked the neighbors to turn it down.",["annoying","annoyed","annoy","annoys"],1,"Annoyed describe cómo se siente él; annoying describiría el ruido.",1],
["E","I listen to music ___ I work; both actions happen at the same time.",["whereas","while","by the time","at first"],1,"While puede conectar dos acciones simultáneas.",1],
["E","Mia works at night, ___ her brother works in the morning.",["as soon as","meanwhile","whereas","by the time"],2,"Whereas introduce un contraste entre dos situaciones.",2],
["E","By the time we arrived, the class ___.",["started","has started","had started","starts"],2,"Past perfect marca la acción que ya había ocurrido antes de otra acción pasada.",2],
["E","Call me as soon as you ___ at the station.",["will arrive","arrive","arrived","would arrive"],1,"Después de as soon as se usa presente simple para hablar de una acción futura.",2],
["E","___, I felt nervous. After that, I relaxed and enjoyed the presentation.",["At first","In the end","By the way","Whereas"],0,"At first introduce el comienzo de una secuencia.",1],
["E","She practiced every day and, ___, felt proud of her progress.",["at first","in the end","whereas","by the time"],1,"In the end resume el resultado final de una historia.",1],
["E","Which sentence correctly uses 'job' and 'work'?",["I found a new job, and I have a lot of work today.","I found a new work, and I have a job today.","I found job new, and I have a work today.","I found a work, and I have job today."],0,"Job es un empleo concreto; work es trabajo en general y normalmente no lleva a.",2],
["E","He decided to ___ his job and look for a new career.",["quit","remain","administer","last"],0,"Quit his job significa renunciar o dejar el empleo.",1],
["E","In 'The meeting lasts two hours,' the verb 'lasts' means:",["is the final meeting","continues for two hours","starts in two hours","happened two hours ago"],1,"Last como verbo significa durar.",2],
["E","'It's quite expensive' means:",["It's completely free.","It's fairly expensive.","It's the last expense.","It's surprisingly cheap."],1,"Quite suele significar bastante; completely o totally expresan totalmente.",2],
["E","You are angry with a friend. Which sentence is grammatically complete?",["Don't mad at me.","Don't be mad at me.","Don't being mad at me.","Don't to be mad at me."],1,"La estructura es be mad at someone.",1],
["F","You are giving information but are not completely certain. You begin:",["As far as I know, the shop closes at six.","It's on me, the shop closes at six.","Beats me, the shop closes at six.","I mean it, the shop closes at six."],0,"As far as I know significa hasta donde sé.",2],
["F","The group has made a final decision. Someone says:",["It's settled.","Not too shabby.","Beats me.","All set?"],0,"It's settled significa que ya está decidido o acordado.",2],
["F","A friend asks how your new job is going. You answer, 'Not too shabby.' You mean:",["It's going fairly well.","I don't know where it is.","I hate it.","It hasn't started."],0,"Not too shabby es una respuesta informal que significa nada mal.",2],
["F","You have finished preparing everything for a trip. You can say:",["All set.","I got unlucky.","Fill me in.","You set me up."],0,"All set significa todo listo.",1],
["F","You want someone to know you are serious. You add:",["I mean it.","Never mind.","Likewise.","Catch you later."],0,"I mean it significa lo digo en serio.",2],
["F","Which greeting is especially informal and regional in the United States?",["Howdy","How do you do?","Nice to meet you","Likewise"],0,"Howdy es un saludo muy informal y regional.",1],
["F","You are leaving a friend and expect to see them later. You say:",["Catch you later.","Fill me in.","It's on me.","Beats me."],0,"Catch you later es una despedida informal: nos vemos luego.",1],
["F","At the end of a friendly conversation, you say:",["Have a good one.","You set me up.","What have you done?","Don't get cocky."],0,"Have a good one es una despedida cordial e informal.",1],
["F","Your friend wins once and starts bragging. You tease them:",["Don't get cocky.","I'm aware of it.","It's settled.","Run errands."],0,"Don't get cocky significa no te pongas arrogante; es informal.",2],
["F","You want to know when a friend will arrive. You ask:",["When are you coming?","When you are coming?","When do you coming?","When coming are you?"],0,"Pregunta en present continuous: When + are + sujeto + verbo-ing?",1],
["F","A friend explains a difficult situation. You show understanding:",["I totally get what you mean.","I don't give a damn.","You cheated on me.","It's on me."],0,"I get what you mean expresa comprensión.",2],
["F","You asked a question, but it is no longer important. You say:",["Never mind.","I don't mind.","I mean it.","Give me the lowdown."],0,"Never mind significa olvídalo o ya no importa. I don't mind significa no me molesta.",2],
["F","You missed the bus because it left early. You say:",["I got unlucky.","I'm aware of it.","It's on me.","All set."],0,"I got unlucky significa tuve mala suerte.",1],
["F","You were away and want a friend to explain what happened. You say:",["Fill me in.","Chill out.","Don't get cocky.","Never mind."],0,"Fill me in significa ponme al día o cuéntame lo que me perdí.",1],
["F","You want the short version with the important details. You ask:",["Give me the lowdown.","Have a good one.","I mean it.","It's settled."],0,"Give me the lowdown pide los detalles o lo esencial; es informal.",2],
["F","Your friends arranged a surprise to trick you. You tell them:",["You set me up.","You filled me in.","You ran errands.","You got unlucky."],0,"You set me up significa me tendiste una trampa.",2],
["F","Before dinner, you need to go to the bank and the post office. You need to:",["run errands","get cocky","chill out","meet the lowdown"],0,"Run errands significa hacer mandados.",1],
["F","You want to add a fact that supports what you just said. You begin:",["As a matter of fact, ...","By the time, ...","It's on me, ...","Beats me, ..."],0,"As a matter of fact significa de hecho.",2],
["F","Someone offers you either tea or coffee. You are happy with either choice. You say:",["I don't mind.","It doesn't matter me.","I don't care about.","Never mind it."],0,"I don't mind expresa que no tienes inconveniente; I don't care puede sonar indiferente.",2],
["F","Your friend is panicking before a presentation. You reassure them:",["Calm down; you've got this.","Don't get cocky.","You set me up.","Give me the lowdown."],0,"Calm down significa cálmate; úsalo con tono amable para que no suene brusco.",1],
["F","People disagree about whether a painting is beautiful. You say:",["It is in the eye of the beholder.","It's settled.","I'm aware of it.","Have a good one."],0,"La expresión indica que la valoración depende de quién la mire.",2],
["F","Someone asks you a question and you have no idea. You reply:",["Beats me.","All set.","I mean it.","Likewise."],0,"Beats me es una respuesta informal que significa ni idea.",1],
["F","Your colleague already knows about the schedule change. They say:",["I'm aware of it.","I got unlucky.","It doesn't matter.","Catch you later."],0,"I'm aware of it significa estoy al tanto de eso o soy consciente de ello.",2],
["F","You see a broken vase and ask about the result of someone's action:",["What have you done?","What did you do tomorrow?","What you have done?","What are you did?"],0,"What have you done? usa present perfect para preguntar por una acción pasada con un resultado visible ahora.",3],
["F","You offer to pay for dinner. You say:",["It's on me.","It's up to me.","It's settled on.","It's aware of me."],0,"It's on me significa yo invito o yo pago.",1],
["F","You are talking about a romantic partner's infidelity. You say:",["You cheated on me.","You cheated me on.","You were cheating me on.","You cheated to me."],0,"Cheat on someone significa ser infiel a esa persona.",2],
["F","At a formal first meeting, which expression means 'mucho gusto'?",["How do you do?","What's up?","Howdy.","Beats me."],0,"How do you do? es un saludo muy formal al conocer a alguien.",2],
["F","You meet a close friend and ask for casual news. You say:",["What's up?","How do you do?","It's settled.","Damn it."],0,"What's up? es un saludo informal parecido a ¿Qué onda? o ¿Qué pasa?",1],
["F","You greet a group of friends very informally: '___, guys?'",["What's cooking","How do you do","As a matter of fact","By the time"],0,"What's cooking? es un saludo muy informal para preguntar qué hay de nuevo.",2],
["F","You see an old friend after several months. You ask:",["How've you been?","How do you do?","When are you coming?","What have you done?"],0,"How've you been? significa ¿Cómo has estado? y se usa al reencontrarse.",2],
["F","Someone says 'Nice to meet you.' A natural reply is:",["Likewise.","Never mind.","Beats me.","It's on me."],0,"Likewise significa igualmente y puede responder a Nice to meet you.",1],
["F","Both available dates work for you. You say:",["It doesn't matter to me.","I don't care about it.","Never mind me.","I don't mind it matters."],0,"It doesn't matter expresa que la elección no cambia nada; I don't care puede sonar indiferente.",2],
["F","Your coworker asks if you mind changing seats. You are happy to change. You say:",["I don't mind.","I don't care.","It doesn't matter me.","Never mind."],0,"I don't mind significa que no te molesta o no tienes inconveniente.",2]
);

const CAT = {G:"Gramática",V:"Vocabulario",P:"Phrasal verbs",F:"Inglés cotidiano",E:"Emociones y conectores",R:"Lectura"};
const CATS = Object.keys(CAT);
const CAT_INFO = {
  G:"Tiempos, condicionales y pasiva.",
  V:"Palabras y colocaciones de uso diario.",
  P:"Verbos con partícula y preposiciones.",
  F:"Saludos, expresiones y respuestas para situaciones reales.",
  E:"Emociones, conectores y vocabulario de trabajo.",
  R:"Avisos, correos y textos cortos."
};
const TIPS = {
  G:"Repasa pasado simple contra present perfect, los dos primeros condicionales y cuándo un verbo lleva -ing o to.",
  V:"Aprende las palabras en pareja y dentro de frases (make a decision, take a photo) en lugar de listas sueltas.",
  P:"Estudia los phrasal verbs dentro de frases completas y agrúpalos por verbo base: take off, take up, take out.",
  F:"Practica saludos, respuestas y expresiones dentro de diálogos. Revisa el registro antes de usar lenguaje vulgar.",
  E:"Distingue -ed (cómo te sientes) de -ing (qué causa la emoción) y practica conectores dentro de una historia.",
  R:"Lee primero la pregunta y busca en el texto la palabra clave. No hace falta entender cada palabra."
};
const MIXES = [
  {name:"Equilibrada", desc:"Un poco de todo, incluidas las nuevas emociones y expresiones.", m:{G:5,V:2,P:2,F:2,E:3,R:1}},
  {name:"Más gramática", desc:"Tiempos verbales, condicionales y estructuras.", m:{G:8,V:1,P:1,F:1,E:2,R:2}},
  {name:"Más vocabulario", desc:"Palabras, colocaciones, expresiones y phrasal verbs.", m:{G:3,V:4,P:2,F:1,E:2,R:3}},
  {name:"Lectura y conversación", desc:"Textos cortos, expresiones cotidianas y emociones.", m:{G:3,V:2,P:1,F:3,E:3,R:3}}
];
const LEVELS = ["Por debajo de B1 (A2)","B1","B1 sólido, cerca de B2"];

const Q = RAW.map((x,i)=>({id:i,c:x[0],q:x[1],o:x[2],a:x[3],e:x[4]}));
// dificultad estimada de cada pregunta: 1 básica, 2 B1, 3 B1 alto
const DIFF = "1211111122"+"2122122213"+"1111222131"+"1232112232"+"1121122211"+"2121121123"+"11222"+"1121222112"+"12122"+"1111121232"+"1111212122"
           + "122122221211222133"+"213231232231"+"22331123"+"112222"+"122132";
const diff = id => Number(RAW[id][5]||DIFF[id]);
const byCat = {}; CATS.forEach(c=>byCat[c]=Q.filter(q=>q.c===c));

/* ---------- almacenamiento ---------- */
const KEY="b1exam_v2";
let store={seen:[],history:[],best:0,attempts:0,name:"",log:[],profile:null,net1:null,settings:{sound:true,limit:0,rounds:2,theme:"light",studyMotion:true}};
try{
  const s=localStorage.getItem(KEY)||localStorage.getItem("b1exam_v1");
  if(s){const p=JSON.parse(s); if(p&&Array.isArray(p.seen)&&Array.isArray(p.history)){
    store.seen=p.seen; store.history=p.history; store.best=p.best||0; store.attempts=p.attempts||p.history.length||0; store.name=p.name||"";
    store.log=Array.isArray(p.log)?p.log:[]; store.profile=p.profile||null; store.net1=p.net1||null;
    if(p.settings) store.settings=Object.assign(store.settings,p.settings);
    if(!p.best) store.history.forEach(h=>{if(h.score>store.best) store.best=h.score;});
  }}
}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(store));}catch(e){}}
function applyAppearance(){
  const theme=store.settings.theme==="dark"?"dark":"light";
  document.documentElement.dataset.theme=theme;
  document.documentElement.dataset.studyMotion=store.settings.studyMotion===false?"off":"on";
  document.querySelectorAll(".theme-toggle").forEach(button=>{
    const nextTheme=theme==="dark"?"claro":"oscuro";
    const label=button.querySelector(".theme-toggle-label");
    if(label) label.textContent=theme==="dark"?"Tema oscuro":"Tema claro";
    button.setAttribute("aria-label",`Cambiar al tema ${nextTheme}`);
    button.setAttribute("aria-pressed",String(theme==="dark"));
  });
}
function toggleTheme(){
  store.settings.theme=store.settings.theme==="dark"?"light":"dark";
  applyAppearance();save();renderSide();
}
applyAppearance();

/* ---------- utilidades ---------- */
const app=document.getElementById("app");
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const fmt=s=>Math.floor(s/60)+":"+String(Math.floor(s)%60).padStart(2,"0");
const today=()=>new Date().toLocaleDateString("es-MX",{day:"numeric",month:"long",year:"numeric"});
function rng(seed){let s=seed>>>0;return()=>{s=(s+0x6D2B79F5)>>>0;let t=s;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296;};}
function gauss(r){return Math.sqrt(-2*Math.log(r()+1e-9))*Math.cos(2*Math.PI*r());}
function shufR(a,r){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

/* ---------- mini red neuronal: una capa oculta, descenso de gradiente ---------- */
class Net{
  constructor(i,h,o,act,r){
    this.i=i;this.h=h;this.o=o;this.act=act;
    this.W1=Array.from({length:h},()=>Array.from({length:i},()=>gauss(r)*Math.sqrt(2/(i+h))));
    this.b1=new Array(h).fill(0);
    this.W2=Array.from({length:o},()=>Array.from({length:h},()=>gauss(r)*Math.sqrt(2/(h+o))));
    this.b2=new Array(o).fill(0);
  }
  fwd(x){
    const a=this.W1.map((w,j)=>{let s=this.b1[j];for(let k=0;k<this.i;k++)s+=w[k]*x[k];return Math.tanh(s);});
    const z=this.W2.map((w,j)=>{let s=this.b2[j];for(let k=0;k<this.h;k++)s+=w[k]*a[k];return s;});
    let y;
    if(this.act==="sig") y=[1/(1+Math.exp(-z[0]))];
    else{const m=Math.max(...z),e=z.map(v=>Math.exp(v-m)),t=e.reduce((s,v)=>s+v,0);y=e.map(v=>v/t);}
    return {a,y};
  }
  predict(x){return this.fwd(x).y;}
  train(x,t,lr){
    const {a,y}=this.fwd(x);
    const dz=this.act==="sig"?[y[0]-t]:y.map((v,k)=>v-t[k]);
    const da=new Array(this.h).fill(0);
    for(let j=0;j<this.o;j++){
      for(let k=0;k<this.h;k++){da[k]+=this.W2[j][k]*dz[j];this.W2[j][k]-=lr*dz[j]*a[k];}
      this.b2[j]-=lr*dz[j];
    }
    for(let k=0;k<this.h;k++){
      const d=da[k]*(1-a[k]*a[k]);
      for(let m=0;m<this.i;m++)this.W1[k][m]-=lr*d*x[m];
      this.b1[k]-=lr*d;
    }
  }
  dump(){return {W1:this.W1,b1:this.b1,W2:this.W2,b2:this.b2};}
  load(d){this.W1=d.W1;this.b1=d.b1;this.W2=d.W2;this.b2=d.b2;}
}
const pOK=(theta,id)=>.25+.75/(1+Math.exp(-1.7*(theta-(diff(id)-2)*.9)));

/* Red 1: probabilidad de acierto usando el tema, la dificultad y el historial. */
function newProfile(){const acc={};CATS.forEach(c=>acc[c]=.6);return {acc,all:.6,streak:0,last:{}};}
let profile=store.profile&&store.profile.acc?store.profile:newProfile();
if(!profile.acc) profile.acc={};
let profileMigrated=false;
CATS.forEach(c=>{if(!Number.isFinite(profile.acc[c])){profile.acc[c]=.6;profileMigrated=true;}});
function feats(q,ps){
  const f=CATS.map(c=>c===q.c?1:0);
  f.push((diff(q.id)-1)/2, ps.acc[q.c], ps.all);
  const l=ps.last[q.id];
  f.push(l===0?1:0, l===1?1:0, Math.min(ps.streak,5)/5);
  return f;
}
const NET1_INPUTS=CATS.length+6, NET1_HIDDEN=12;
const net1=new Net(NET1_INPUTS,NET1_HIDDEN,1,"sig",rng(7));
function validNetDump(d,i,h,o){
  const matrix=(m,rows,cols)=>Array.isArray(m)&&m.length===rows&&m.every(row=>Array.isArray(row)&&row.length===cols&&row.every(Number.isFinite));
  const vector=(v,length)=>Array.isArray(v)&&v.length===length&&v.every(Number.isFinite);
  return !!d&&matrix(d.W1,h,i)&&vector(d.b1,h)&&matrix(d.W2,o,h)&&vector(d.b2,o);
}
function pretrain1(){
  const r=rng(11);
  for(let ep=0;ep<3;ep++)for(let n=0;n<2500;n++){
    const th0=gauss(r)*.9, th={}; CATS.forEach(c=>th[c]=th0+gauss(r)*.5);
    const ps={acc:{},all:0,streak:Math.floor(r()*6),last:{}};
    CATS.forEach(c=>{let m=0;byCat[c].forEach(q=>m+=pOK(th[c],q.id));m/=byCat[c].length;ps.acc[c]=Math.min(1,Math.max(0,m+gauss(r)*.05));});
    ps.all=CATS.reduce((s,c)=>s+ps.acc[c],0)/CATS.length;
    const q=Q[Math.floor(r()*Q.length)], p=pOK(th[q.c],q.id);
    if(r()<.4) ps.last[q.id]=r()<p?1:0;
    net1.train(feats(q,ps), r()<p?1:0, .05);
  }
}
function resetNet1(){const n=new Net(NET1_INPUTS,NET1_HIDDEN,1,"sig",rng(7));net1.load(n.dump());pretrain1();}
const savedNet1Valid=validNetDump(store.net1,NET1_INPUTS,NET1_HIDDEN,1);
if(savedNet1Valid) net1.load(store.net1); else pretrain1();
if(!savedNet1Valid||profileMigrated){store.net1=net1.dump();store.profile=profile;save();}
const predQ=q=>net1.predict(feats(q,profile))[0];

/* ---------- aprendizaje con tus respuestas ---------- */
function learn(q,ok){
  const x=feats(q,profile);
  net1.train(x,ok?1:0,.08);
  profile.acc[q.c]=profile.acc[q.c]*.75+(ok?1:0)*.25;
  profile.all=profile.all*.85+(ok?1:0)*.15;
  profile.streak=ok?profile.streak+1:0;
  profile.last[q.id]=ok?1:0;
  store.log.push({id:q.id,ok}); store.log=store.log.slice(-60);
  store.net1=net1.dump(); store.profile=profile;
}
const wrongIds=()=>Object.keys(profile.last).filter(k=>profile.last[k]===0).map(Number);

/* ---------- armado de rondas ---------- */
function build(mix, exclude){
  const seen=new Set(store.seen), ex=new Set(exclude||[]), out=[];
  for(const c in mix){
    const pool=Q.filter(q=>q.c===c&&!ex.has(q.id));
    const fresh=shuffle(pool.filter(q=>!seen.has(q.id)));
    const old=shuffle(pool.filter(q=>seen.has(q.id)));
    out.push(...fresh.concat(old).slice(0,mix[c]).map(q=>q.id));
  }
  return shuffle(out);
}
function buildAdaptive(exclude){
  const ex=new Set(exclude||[]), seen=new Set(store.seen);
  const w=CATS.map(c=>(1-profile.acc[c])+.3), tot=w.reduce((a,b)=>a+b,0);
  const cap=CATS.map(c=>byCat[c].filter(q=>!ex.has(q.id)).length);
  let cnt=w.map((v,i)=>Math.min(cap[i],Math.max(1,Math.round(15*v/tot))));
  let sum=cnt.reduce((a,b)=>a+b,0), guard=0;
  const order=w.map((_,i)=>i).sort((a,b)=>w[b]-w[a]);
  while(sum!==15&&guard++<200){
    if(sum<15){const i=order.find(i=>cnt[i]<cap[i]);if(i===undefined)break;cnt[i]++;sum++;}
    else{const i=order.slice().reverse().find(i=>cnt[i]>1);if(i===undefined)break;cnt[i]--;sum--;}
  }
  const out=[];
  CATS.forEach((c,ci)=>{
    byCat[c].filter(q=>!ex.has(q.id)).map(q=>{
      const p=predQ(q), l=profile.last[q.id];
      return {id:q.id,s:(l===0?.5:0)+(seen.has(q.id)?0:.2)-Math.abs(p-.55)+Math.random()*.25};
    }).sort((a,b)=>b.s-a.s).slice(0,cnt[ci]).forEach(r=>out.push(r.id));
  });
  return shuffle(out);
}
const newCount=ids=>{const s=new Set(store.seen);return ids.filter(i=>!s.has(i)).length;};

let run=null, rounds=null, timer=null, inExam=false, screen="home";
const STUDY_PROGRESS_KEY="b1study_progress_v1";
const STUDY_VERB_PROGRESS_KEY="b1study_verb_progress_v1";
const STUDY_ARSENAL_KEY="b1study_arsenal_v1";
let studySection="foundations", studyBlockIndex=0, studyPanel="guide", studySearchTerm="", studyDone=[];
const studyNotePages={};
const panelScrollPositions={main:{top:0,left:0},left:{top:0,left:0},right:{top:0,left:0}};
const studyTablePages={};
const studyVerbViews={}, studyVerbCards={};
let masteredVerbs=new Set(), verbPracticeAnswers={};
let studyQuizIndex=0, studyQuizScore=0, studyQuizAnswer=null, studyQuizComplete=false;
let studyStats={weeklyGoal:120,secondsByDay:{},dailyVerbsByDate:{}},studyClockStartedAt=null,studyLastDisplayedMinute=-1;
try{
  const savedStats=JSON.parse(localStorage.getItem(STUDY_ARSENAL_KEY)||"null");
  if(savedStats&&typeof savedStats==="object"){
    if(Number.isFinite(savedStats.weeklyGoal)) studyStats.weeklyGoal=Math.max(30,Math.min(600,savedStats.weeklyGoal));
    if(savedStats.secondsByDay&&typeof savedStats.secondsByDay==="object"&&!Array.isArray(savedStats.secondsByDay)) studyStats.secondsByDay=savedStats.secondsByDay;
    if(savedStats.dailyVerbsByDate&&typeof savedStats.dailyVerbsByDate==="object"&&!Array.isArray(savedStats.dailyVerbsByDate)) studyStats.dailyVerbsByDate=savedStats.dailyVerbsByDate;
  }
}catch(e){}
try{
  const savedStudy=JSON.parse(localStorage.getItem(STUDY_PROGRESS_KEY)||"[]");
  if(Array.isArray(savedStudy)) studyDone=savedStudy.filter(id=>STUDY_GUIDE.sections.some(s=>s.id===id));
}catch(e){}
try{
  const savedVerbs=JSON.parse(localStorage.getItem(STUDY_VERB_PROGRESS_KEY)||"[]");
  if(Array.isArray(savedVerbs)) masteredVerbs=new Set(savedVerbs.filter(id=>VERB_FORMS.allVerbs.some(verb=>verb.id===id)));
}catch(e){}
function localDateKey(date){
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
}
function saveStudyStats(){
  try{localStorage.setItem(STUDY_ARSENAL_KEY,JSON.stringify(studyStats));}catch(e){}
}
function studyWeekKeys(date=new Date()){
  const monday=new Date(date.getFullYear(),date.getMonth(),date.getDate());
  monday.setDate(monday.getDate()-((monday.getDay()+6)%7));
  return Array.from({length:7},(_,index)=>{
    const day=new Date(monday);
    day.setDate(monday.getDate()+index);
    return localDateKey(day);
  });
}
function studyWeekSeconds(){
  return studyWeekKeys().reduce((total,key)=>total+(Number(studyStats.secondsByDay[key])||0),0);
}
function studyStreak(){
  const day=new Date();
  if(!(Number(studyStats.secondsByDay[localDateKey(day)])>0)) day.setDate(day.getDate()-1);
  let streak=0;
  while(Number(studyStats.secondsByDay[localDateKey(day)])>0&&streak<365){streak++;day.setDate(day.getDate()-1);}
  return streak;
}
function formatStudyDuration(seconds){
  const minutes=Math.floor(seconds/60),hours=Math.floor(minutes/60);
  return hours?`${hours} h ${minutes%60} min`:`${minutes} min`;
}
function todayVerbList(){
  const today=localDateKey(new Date()), saved=studyStats.dailyVerbsByDate[today];
  const hasAvailableVerbs=VERB_FORMS.allVerbs.some(verb=>!masteredVerbs.has(verb.id));
  if(Array.isArray(saved)){
    const list=saved.map(id=>VERB_FORMS.allVerbs.find(verb=>verb.id===id)).filter(Boolean);
    if(list.length===saved.length&&(list.length>0||!hasAvailableVerbs)) return list;
  }
  const available=VERB_FORMS.allVerbs.filter(verb=>!masteredVerbs.has(verb.id));
  const dayNumber=Math.floor(Date.UTC(new Date().getFullYear(),new Date().getMonth(),new Date().getDate())/86400000);
  const start=available.length?dayNumber%available.length:0;
  const list=Array.from({length:Math.min(5,available.length)},(_,index)=>available[(start+index)%available.length]);
  studyStats.dailyVerbsByDate[today]=list.map(verb=>verb.id);
  saveStudyStats();
  return list;
}
function setVerbMastery(id,mastered){
  if(mastered) masteredVerbs.add(id);
  else masteredVerbs.delete(id);
  try{localStorage.setItem(STUDY_VERB_PROGRESS_KEY,JSON.stringify([...masteredVerbs]));}catch(e){}
  document.querySelectorAll("[data-verb-ok]").forEach(input=>{if(input.dataset.verbOk===id) input.checked=mastered;});
  document.querySelectorAll("[data-daily-verb]").forEach(input=>{if(input.dataset.dailyVerb===id) input.checked=mastered;});
  document.querySelectorAll(".verb-mastery-count").forEach(count=>{count.textContent=`Dominados: ${masteredVerbs.size} de ${VERB_FORMS.allVerbs.length}`;});
  const dailyVerbs=todayVerbList(), dailyDone=dailyVerbs.filter(verb=>masteredVerbs.has(verb.id)).length;
  const dailyCount=document.getElementById("arsenal-done-count"), dailyBar=document.getElementById("arsenal-daily-progress");
  if(dailyCount) dailyCount.textContent=String(dailyDone);
  if(dailyBar){dailyBar.style.width=`${dailyVerbs.length?Math.round(dailyDone/dailyVerbs.length*100):100}%`;dailyBar.parentElement.setAttribute("aria-valuenow",String(dailyDone));}
}
function recordStudyTime(force=false){
  if(screen!=="study"||document.body.dataset.view!=="app"||document.hidden&&!force){studyClockStartedAt=null;return;}
  const now=Date.now();
  if(studyClockStartedAt===null){studyClockStartedAt=now;return;}
  let cursor=Math.max(studyClockStartedAt,now-30000);
  while(cursor<now){
    const date=new Date(cursor), end=Math.min(now,new Date(date.getFullYear(),date.getMonth(),date.getDate()+1).getTime());
    const key=localDateKey(date);
    studyStats.secondsByDay[key]=(Number(studyStats.secondsByDay[key])||0)+(end-cursor)/1000;
    cursor=end;
  }
  studyClockStartedAt=now;
  saveStudyStats();
  const weekMinute=Math.floor(studyWeekSeconds()/60);
  if(weekMinute!==studyLastDisplayedMinute){studyLastDisplayedMinute=weekMinute;renderSide();}
}
function updatePool(){
  document.getElementById("pool").textContent="Preguntas practicadas: "+store.seen.length+" de "+Q.length;
  renderSide();
}
function setNav(name){
  if(screen==="study") recordStudyTime();
  screen=name;
  studyClockStartedAt=name==="study"&&!document.hidden?Date.now():null;
  studyLastDisplayedMinute=-1;
  document.documentElement.dataset.scrollMode="panels";
}
function topScroll(){
  if(document.documentElement.dataset.scrollMode==="document"){
    window.scrollTo(0,0);
    return;
  }
  const c=document.getElementById("center");
  if(c){c.scrollTop=0;panelScrollPositions.main.top=0;panelScrollPositions.main.left=0;}
}
function setTab(t){
  const l=document.getElementById("layout"); if(!l) return;
  const current=l.dataset.tab, currentPanel=current==="left"||current==="right"?document.getElementById(current):document.getElementById("center");
  if(currentPanel){panelScrollPositions[current]={top:currentPanel.scrollTop,left:currentPanel.scrollLeft};}
  const target=t==="left"||t==="right"?t:"main";
  l.dataset.tab=target;
  requestAnimationFrame(()=>{
    const targetPanel=target==="main"?document.getElementById("center"):document.getElementById(target);
    if(targetPanel&&getComputedStyle(targetPanel).display!=="none"){
      targetPanel.scrollTop=panelScrollPositions[target].top;
      targetPanel.scrollLeft=panelScrollPositions[target].left;
    }
  });
  document.querySelectorAll("#tabs button").forEach(b=>{
    const active=screen==="study"?b.dataset.t==="study":b.dataset.t===target;
    b.className=active?"on":""; b.setAttribute("aria-selected",String(active));
  });
}
function trackPanelScroll(){
  [["center","main"],["left","left"],["right","right"]].forEach(([elementId,panel])=>{
    const element=document.getElementById(elementId);
    element.addEventListener("scroll",()=>{
      panelScrollPositions[panel]={top:element.scrollTop,left:element.scrollLeft};
    },{passive:true});
  });
}
function sparkSVG(h){
  const W=240,H=62,P=7,n=h.length; if(n<2) return "";
  const x=i=>(P+i*(W-2*P)/(n-1)).toFixed(1), y=v=>(H-P-(H-2*P)*v/15).toFixed(1);
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Últimas notas, de 0 a 15"><polyline points="${h.map((e,i)=>x(i)+","+y(e.score)).join(" ")}" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linejoin="round"/><circle cx="${x(n-1)}" cy="${y(h[n-1].score)}" r="4" fill="var(--red)"/></svg>`;
}
function renderStudySide(L,R,leftPosition,rightPosition){
  const section=STUDY_GUIDE.sections.find(s=>s.id===studySection)||STUDY_GUIDE.sections[0];
  const block=section.blocks[studyBlockIndex]||section.blocks[0];
  const dailyVerbs=todayVerbList(), dailyDone=dailyVerbs.filter(verb=>masteredVerbs.has(verb.id)).length;
  const weekSeconds=studyWeekSeconds(), weeklyGoal=studyStats.weeklyGoal*60;
  const weeklyProgress=Math.min(100,Math.round(weekSeconds/weeklyGoal*100));
  const date=new Date(), dayNumber=(date.getDay()+6)%7;
  const memoryTips=[
    "Después de did / didn’t usa el verbo base: Did you go? / I didn’t go.",
    "Have / has va seguido del participio: She has written a letter.",
    "Yesterday y last week suelen pedir pasado simple: We went yesterday.",
    "Pasado y participio pueden ser iguales: buy – bought – bought.",
    "Los modales van con verbo base: You should practise; no añadas -s.",
    "En tercera persona del presente simple, añade -s o -es: he watches.",
    "El pasado regular también funciona como participio: work – worked – worked."
  ];
  const todayTip=memoryTips[Math.floor(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())/86400000)%memoryTips.length];
  const phaseCards=STUDY_GUIDE.roadmap.map((phase,index)=>{
    const completed=phase.sections.filter(id=>studyDone.includes(id)).length;
    const percent=Math.round(completed/phase.sections.length*100);
    return `<button type="button" class="arsenal-phase" data-arsenal-phase="${index}" aria-label="${esc(phase.title)}: ${completed} de ${phase.sections.length} temas. Continuar ruta">
      <span class="arsenal-phase-top"><b>${esc(phase.title)}</b><span>${completed}/${phase.sections.length}</span></span>
      <span class="tiny">${esc(phase.focus)}</span>
      <span class="pbar" role="progressbar" aria-label="Avance de ${esc(phase.title)}" aria-valuemin="0" aria-valuemax="${phase.sections.length}" aria-valuenow="${completed}"><i style="width:${percent}%"></i></span>
    </button>`;
  }).join("");
  const items=(block.rows?.length||0)+(block.words?.length||0)*2+(block.items?.length||0)+(block.verbs?.length||0)+(block.verbPractice?.length||0);
  const pagedContent=Boolean(block.rows||block.words||block.verbs||block.verbPractice);
  const pageKey=`${section.id}-${studyBlockIndex}-0`;
  const pageCount=Math.max(1,Math.ceil((block.rows?.length||block.words?.length||block.verbs?.length||block.verbPractice?.length||0)/5));
  const currentPage=Math.min((studyTablePages[pageKey]||0)+1,pageCount);
  const menuItems=[["home","Preparación",0],["study","Guía B1",0],["prog","Mi avance",0],["rev","Repasar errores",0]];
  L.innerHTML=`
  <section class="pc"><h3>Ir a</h3><div class="menu">${menuItems.map(([k,t])=>`<button type="button" data-n="${k}" class="${screen===k?"on":""}">${t}</button>`).join("")}</div></section>
  <section class="pc"><h3>Este tema</h3>
    <p class="study-side-title">${esc(section.title)}</p>
    <p class="tiny">${studyPanel==="quiz"?"Preguntas de repaso":`${studyBlockIndex+1} de ${section.blocks.length}: ${esc(block.title)}`}</p>
    <div class="mini"><div><b>${studyDone.length}/${STUDY_GUIDE.sections.length}</b><span>Temas repasados</span></div><div><b>${studyPanel==="quiz"?`${studyQuizIndex+1}/${STUDY_GUIDE.quiz.length}`:items}</b><span>${studyPanel==="quiz"?"Pregunta":"Elementos"}</span></div></div>
    <div class="pbar" role="progressbar" aria-label="Temas de estudio revisados" aria-valuemin="0" aria-valuemax="${STUDY_GUIDE.sections.length}" aria-valuenow="${studyDone.length}"><i style="width:${Math.round(studyDone.length/STUDY_GUIDE.sections.length*100)}%"></i></div>
    <p class="tiny">${studyDone.includes(section.id)?"Ya repasaste este tema.":"Marca el tema al terminar el repaso."}</p></section>
  <section class="pc"><h3>Presentación</h3>
    <div class="set2"><span>Tema de color</span>${segHTML("theme",[["light","Claro"],["dark","Oscuro"]])}</div>
    <div class="set2"><span>Movimiento</span>${segHTML("studyMotion",[[true,"Sí"],[false,"No"]])}</div></section>`;
  L.querySelectorAll(".menu button").forEach(b=>b.onclick=()=>{const k=b.dataset.n;go(k==="home"?home:k==="study"?study:k==="prog"?progress:review);});
  bindSeg(L,renderSide);

  const description=studyPanel==="quiz"
    ?`Llevas ${studyQuizScore} respuestas correctas de ${studyQuizIndex+(studyQuizAnswer!==null?1:0)} contestadas.`
    :block.text?"Lee la explicación y localiza la estructura clave."
      :block.verbPractice?"Completa las formas y comprueba tus respuestas al terminar."
        :block.verbs?"Repasa las formas y marca los verbos que ya dominas."
          :block.items?"Recuerda cada significado antes de volver a leerlo."
            :"Estudia cada fila y relaciona el inglés con su significado y ejemplo.";
  const total=studyPanel==="quiz"?STUDY_GUIDE.quiz.length:pageCount;
  const done=studyPanel==="quiz"?studyQuizIndex+(studyQuizAnswer!==null?1:0):currentPage;
  const progress=studyPanel==="quiz"||pagedContent
    ?`<div class="pbar" role="progressbar" aria-label="${studyPanel==="quiz"?"Avance de la práctica":"Páginas de la subsección"}" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}"><i style="width:${total?Math.min(100,Math.round(done/total*100)):0}%"></i></div><p class="tiny">${studyPanel==="quiz"?`${done} de ${total} preguntas contestadas`:`Página ${currentPage} de ${pageCount}`}</p>`
    :`<p class="tiny">${items} elementos en esta subsección</p>`;
  R.innerHTML=`
  <section class="pc"><h3>${studyPanel==="quiz"?"Consejo para el repaso":"Consejo para estudiar"}</h3>
    <p class="study-side-title">${studyPanel==="quiz"?"Recuerda antes de responder":esc(block.title)}</p>
    <p class="tipt">${esc(description)}</p></section>
  <section class="pc"><h3>Tu avance en este tema</h3>
    <p class="tiny">${studyDone.includes(section.id)?"Ya repasaste este tema.":"Marca el tema cuando termines de estudiarlo."}</p>
    ${progress}</section>
  <section class="pc arsenal-card">
    <h3>Tiempo de estudio esta semana</h3>
    <p class="arsenal-week-total">${formatStudyDuration(weekSeconds)} <span>/ ${studyStats.weeklyGoal} min</span></p>
    <div class="pbar" role="progressbar" aria-label="Meta semanal de estudio" aria-valuemin="0" aria-valuemax="${studyStats.weeklyGoal}" aria-valuenow="${Math.floor(weekSeconds/60)}"><i style="width:${weeklyProgress}%"></i></div>
    <div class="arsenal-week-footer"><span>${studyStreak()} días de racha</span><span>Meta semanal</span></div>
    <div class="arsenal-goal-controls" aria-label="Ajustar meta semanal">
      <button type="button" data-study-goal-step="-30" aria-label="Reducir meta semanal en 30 minutos" ${studyStats.weeklyGoal<=30?"disabled":""}>−30</button>
      <button type="button" data-study-goal-step="30" aria-label="Aumentar meta semanal en 30 minutos" ${studyStats.weeklyGoal>=600?"disabled":""}>+30 min</button>
    </div>
    <p class="tiny">Cuenta solo el tiempo con la guía visible.</p>
  </section>
  <section class="pc arsenal-card">
    <h3>Verbos para aprender hoy</h3>
    <p class="tiny arsenal-daily-summary"><span id="arsenal-done-count">${dailyDone}</span> de ${dailyVerbs.length} dominados · Día ${dayNumber+1} del ciclo</p>
    <div class="pbar arsenal-daily-bar" role="progressbar" aria-label="Verbos dominados hoy" aria-valuemin="0" aria-valuemax="${Math.max(1,dailyVerbs.length)}" aria-valuenow="${dailyDone}"><i id="arsenal-daily-progress" style="width:${dailyVerbs.length?Math.round(dailyDone/dailyVerbs.length*100):100}%"></i></div>
    ${dailyVerbs.length?`<ul class="arsenal-verbs">${dailyVerbs.map(verb=>`<li><label class="arsenal-verb-check">
      <input type="checkbox" data-daily-verb="${esc(verb.id)}" aria-label="Marcar ${esc(verb.base)} como aprendido" ${masteredVerbs.has(verb.id)?"checked":""}>
      <span><b>${esc(verb.base)}</b><small>${esc(verb.meaning)}</small><em>${esc(verb.past)} · ${esc(verb.participle)}</em></span>
    </label></li>`).join("")}</ul>`:`<p class="tiny">¡Ya dominas todos los verbos! Vuelve a repasarlos para mantenerlos frescos.</p>`}
    <button type="button" class="arsenal-link" data-arsenal-all-verbs>Explorar los 187 verbos →</button>
  </section>
  <section class="pc arsenal-card">
    <h3>Recuerda que…</h3>
    <p class="arsenal-tip">${esc(todayTip)}</p>
  </section>
  <section class="pc arsenal-card">
    <h3>Fases para añadir a tu arsenal</h3>
    <div class="arsenal-phases">${phaseCards}</div>
  </section>`;
  R.querySelectorAll("[data-daily-verb]").forEach(input=>input.onchange=()=>{
    setVerbMastery(input.dataset.dailyVerb,input.checked);
  });
  R.querySelectorAll("[data-study-goal-step]").forEach(button=>button.onclick=()=>{
    studyStats.weeklyGoal=Math.max(30,Math.min(600,studyStats.weeklyGoal+Number(button.dataset.studyGoalStep)));
    saveStudyStats();renderSide();
  });
  R.querySelectorAll("[data-arsenal-phase]").forEach(button=>button.onclick=()=>{
    const phase=STUDY_GUIDE.roadmap[Number(button.dataset.arsenalPhase)];
    studySection=phase.sections.find(id=>!studyDone.includes(id))||phase.sections[0];
    studyBlockIndex=0;studyPanel="guide";studySearchTerm="";study();topScroll();
  });
  const allVerbsButton=R.querySelector("[data-arsenal-all-verbs]");
  if(allVerbsButton) allVerbsButton.onclick=()=>{
    const verbSection=STUDY_GUIDE.sections.find(item=>item.id==="verb-forms");
    if(!verbSection) return;
    studySection=verbSection.id;
    studyBlockIndex=Math.max(0,verbSection.blocks.findIndex(entry=>entry.title.startsWith("Índice A–Z")));
    studyPanel="guide";studySearchTerm="";study();topScroll();
  };
  if(getComputedStyle(L).display!=="none"){L.scrollTop=leftPosition.top;L.scrollLeft=leftPosition.left;}
  if(getComputedStyle(R).display!=="none"){R.scrollTop=rightPosition.top;R.scrollLeft=rightPosition.left;}
}
function renderSide(){
  const L=document.getElementById("left"), R=document.getElementById("right"); if(!L||!R) return;
  const leftVisible=getComputedStyle(L).display!=="none", rightVisible=getComputedStyle(R).display!=="none";
  const leftPosition=leftVisible?{top:L.scrollTop,left:L.scrollLeft}:panelScrollPositions.left;
  const rightPosition=rightVisible?{top:R.scrollTop,left:R.scrollLeft}:panelScrollPositions.right;
  if(screen==="study"){renderStudySide(L,R,leftPosition,rightPosition);return;}
  const pend=wrongIds().length, h=store.history.slice(-10), l5=store.history.slice(-5);
  const avg=l5.length?(l5.reduce((s,e)=>s+e.score,0)/l5.length).toFixed(1):"—";
  const seenN=Math.min(store.seen.length,Q.length);
  const items=[["home","Preparación",0],["study","Guía B1",0],["prog","Mi avance",0],["rev","Repasar errores",pend]];
  L.innerHTML=`
  <section class="pc"><h3>Ir a</h3><div class="menu">${items.map(([k,t,b])=>`<button type="button" data-n="${k}" class="${screen===k?"on":""}">${t}${b?`<span class="cnt">${b}</span>`:""}</button>`).join("")}</div></section>
  <section class="pc"><h3>Tu avance</h3>
    <div class="mini"><div><b>${store.attempts}</b><span>Prácticas</span></div><div><b>${store.attempts?store.best:"—"}</b><span>Mejor nota</span></div><div><b>${avg}</b><span>Promedio reciente</span></div><div><b>${seenN}</b><span>Preguntas practicadas</span></div></div>
    <div class="pbar" aria-hidden="true"><i style="width:${Math.round(seenN/Q.length*100)}%"></i></div></section>
  <section class="pc"><h3>Preferencias</h3>
    <div class="set2"><span>Tema</span>${segHTML("theme",[["light","Claro"],["dark","Oscuro"]])}</div>
    <div class="set2"><span>Movimiento</span>${segHTML("studyMotion",[[true,"Sí"],[false,"No"]])}</div>
    <div class="set2"><span>Sonido</span>${segHTML("sound",[[true,"Sí"],[false,"No"]])}</div>
    <div class="set2"><span>Tiempo por pregunta</span>${segHTML("limit",[[0,"Sin límite"],[45,"45 s"],[30,"30 s"],[20,"20 s"]])}</div>
    <div class="set2"><span>Rondas al reiniciar</span>${segHTML("rounds",[[2,"2"],[3,"3"]])}</div></section>`;
  L.querySelectorAll(".menu button").forEach(b=>b.onclick=()=>{const k=b.dataset.n;go(k==="home"?home:k==="study"?study:k==="prog"?progress:review);});
  bindSeg(L,renderSide);

  const recent=store.log.slice(-15);
  const recentCorrect=recent.filter(answer=>answer.ok).length;
  const recentResult=recent.length
    ? `<p class="tiny">En tus últimas ${recent.length} respuestas: <strong>${recentCorrect} correctas</strong>.</p>`
    : `<p class="tiny">Completa una práctica para ver tus resultados.</p>`;
  const topicStats=Object.fromEntries(CATS.map(category=>[category,{correct:0,total:0}]));
  store.log.forEach(answer=>{
    const question=Q[answer.id];
    if(!question||!topicStats[question.c]) return;
    topicStats[question.c].total++;
    if(answer.ok) topicStats[question.c].correct++;
  });
  const mast=CATS.map(category=>{
    const {correct,total}=topicStats[category];
    const percentage=total?Math.round(correct/total*100):0;
    return `<div class="topic"><span>${CAT[category]}</span><div class="tbar"><i style="width:${percentage}%"></i></div><span class="n">${total?`${correct}/${total}`:"—"}</span></div>`;
  }).join("");
  const answeredTopics=CATS.filter(category=>topicStats[category].total>=2);
  const weakestTopic=answeredTopics.sort((left,right)=>
    topicStats[left].correct/topicStats[left].total-topicStats[right].correct/topicStats[right].total
  )[0];
  const tip=weakestTopic
    ? `<p class="tipt"><b>Para repasar: ${CAT[weakestTopic].toLowerCase()}.</b> ${TIPS[weakestTopic]}</p>`
    : `<p class="tipt">Responde más preguntas para ver qué tema puedes repasar.</p>`;
  R.innerHTML=`
  <section class="pc"><h3>Resultados recientes</h3>${recentResult}</section>
  <section class="pc"><h3>Preguntas acertadas por tema</h3>${mast}</section>
  <section class="pc"><h3>Qué estudiar</h3>${tip}</section>
  ${h.length>=2?`<section class="pc"><h3>Últimas notas</h3>${sparkSVG(h)}</section>`:""}
  <section class="pc"><p class="tiny">Tus resultados de práctica no sustituyen una prueba oficial de nivel B1.</p></section>`;
  if(leftVisible){L.scrollTop=leftPosition.top;L.scrollLeft=leftPosition.left;panelScrollPositions.left=leftPosition;}
  if(rightVisible){R.scrollTop=rightPosition.top;R.scrollLeft=rightPosition.left;panelScrollPositions.right=rightPosition;}
}

const TICK='<svg viewBox="0 0 24 24" aria-hidden="true"><path class="mk g" d="M3.5 12.5l5.5 5.5L21 5.5"/></svg>';
const CROSS='<svg viewBox="0 0 24 24" aria-hidden="true"><path class="mk r" d="M5 5l14 14M19 5L5 19"/></svg>';

/* ---------- sonido ---------- */
let actx=null;
function note(f,t,d){const o=actx.createOscillator(),g=actx.createGain();o.type="sine";o.frequency.value=f;g.gain.setValueAtTime(0.0001,t);g.gain.linearRampToValueAtTime(.12,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(actx.destination);o.start(t);o.stop(t+d+.02);}
function beep(ok){
  if(!store.settings.sound) return;
  try{
    actx=actx||new (window.AudioContext||window.webkitAudioContext)();
    if(actx.state==="suspended") actx.resume();
    const t=actx.currentTime;
    if(ok){note(660,t,.14);note(880,t+.12,.22);} else note(200,t,.32);
  }catch(e){}
}

/* ---------- navegación ---------- */
function leave(){ if(inExam && !confirm("Tienes una ronda en curso. Si sales, se pierde esta ronda (lo que ya respondiste sí cuenta para tu progreso). ¿Salir?")) return false; clearInterval(timer); inExam=false; run=null; return true; }
function go(fn){ if(leave()){ fn(); setTab("main"); } }
/* ---------- inicio ---------- */
function segHTML(k,opts){
  const cur=store.settings[k];
  return `<div class="seg" data-k="${k}">${opts.map(([v,l])=>`<button type="button" data-v="${v}" class="${cur===v?"on":""}" aria-pressed="${cur===v}">${l}</button>`).join("")}</div>`;
}
function bindSeg(root,again){
  root.querySelectorAll(".seg button").forEach(b=>b.onclick=()=>{
    const k=b.parentNode.dataset.k; let v=b.dataset.v;
    store.settings[k]=(v==="true"||v==="false")?v==="true":k==="theme"?v:Number(v);
    if(k==="theme"||k==="studyMotion") applyAppearance();
    save(); again();
  });
}
function home(){
  setNav("home"); updatePool();
  const pend=wrongIds().length;
  const tiles=CATS.map(c=>`<div class="tile"><b>${CAT[c]}</b><span class="ct">${byCat[c].length} preguntas</span><small>${CAT_INFO[c]}</small></div>`).join("");
  app.innerHTML=`
  <section class="sheet">
    <div class="fields">
      <div class="field"><label for="nm">Nombre:</label><input id="nm" type="text" maxlength="30" autocomplete="given-name" value="${esc(store.name)}"></div>
      <div class="field"><span class="lb">Fecha:</span><span class="fill">${today()}</span></div>
    </div>
    <div class="scale" aria-label="Escala MCER, nivel evaluado: B1"><span>A1</span><span>A2</span><span class="on">B1</span><span>B2</span><span>C1</span><span>C2</span></div>
    <p class="scap">Preparación para una prueba de nivel B1 · MCER</p>
    <h1>Practica para tu examen B1</h1>
    <p class="lead">Responde 15 preguntas, revisa las explicaciones y descubre qué temas conviene estudiar.</p>
    <div class="cta">
      <button class="btn" id="go">${store.attempts?"Elegir una práctica":"Empezar una práctica"}</button>
      ${pend?`<button class="btn line" id="rv">Repasar mis errores (${pend})</button>`:""}
    </div>
    <p class="fine">Práctica de preparación; el formato y los criterios pueden variar según el examen oficial.</p>
    <h2 class="h">Temas que practicarás</h2>
    <div class="tiles">${tiles}</div>
  </section>`;
  const nm=document.getElementById("nm");
  nm.oninput=()=>{store.name=nm.value.trim();save();};
  document.getElementById("go").onclick=()=>store.attempts?choose():start(build(MIXES[0].m),"Primer intento");
  const rv=document.getElementById("rv"); if(rv) rv.onclick=review;
}

function studyTable(headers,rows,key){
  const pageSize=5, term=studySearchTerm.toLocaleLowerCase("es");
  const inkForColumn=(header,index)=>{
    const label=header.toLocaleLowerCase("es");
    if(/registro|alerta|cuidado|error|correcci|respuesta|intensidad|resultado/.test(label)) return "study-ink-red";
    if(/inglés|english|frase|expresión|conector|preposición|phrasal verb|estructura|base form|verbo|sentence|ejemplo|palabra|if-clause/.test(label)) return "study-ink-blue";
    if(/español|spanish|significado|traducción|equivalencia|motivo/.test(label)) return "study-ink-black";
    return index===0?"study-ink-blue":"study-ink-black";
  };
  const matches=term?rows.filter(row=>row.join(" ").toLocaleLowerCase("es").includes(term)):rows;
  const visibleRows=term&&matches.length?matches:rows;
  const pages=Math.max(1,Math.ceil(visibleRows.length/pageSize));
  const page=Math.min(studyTablePages[key]||0,pages-1), pageRows=visibleRows.slice(page*pageSize,(page+1)*pageSize);
  const pager=pages>1?`<div class="study-table-pager"><span>${page+1} / ${pages}${term&&matches.length?` · ${matches.length} coincidencias`:""}</span><div><button type="button" class="btn line" data-study-table-page="${key}" data-step="-1" ${page===0?"disabled":""} aria-label="Página anterior">Anterior</button><button type="button" class="btn line" data-study-table-page="${key}" data-step="1" ${page===pages-1?"disabled":""} aria-label="Página siguiente">Siguiente</button></div></div>`:"";
  return `<div class="study-table-wrap"><table class="study-table"><thead><tr>${headers.map(h=>`<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${pageRows.map((row,index)=>`<tr class="study-reveal" style="--study-delay:${index*32}ms">${row.map((cell,column)=>`<td class="${inkForColumn(headers[column],column)}">${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>${pager}`;
}
function studyVerbTable(verbs,key){
  const term=studySearchTerm.toLocaleLowerCase("es"), matches=term?verbs.filter(v=>Object.values(v).join(" ").toLocaleLowerCase("es").includes(term)):verbs;
  const visible=term&&matches.length?matches:verbs, pageSize=5, pages=Math.max(1,Math.ceil(visible.length/pageSize));
  const page=Math.min(studyTablePages[key]||0,pages-1), rows=visible.slice(page*pageSize,(page+1)*pageSize);
  const view=studyVerbViews[key]||"table";
  const count=`<p class="verb-mastery-count">Dominados: ${masteredVerbs.size} de ${VERB_FORMS.allVerbs.length}</p>`;
  const switcher=`<div class="verb-view-switch" role="group" aria-label="Vista de verbos"><button type="button" data-verb-view="table" data-card-key="${key}" aria-pressed="${view==="table"}">Tabla</button><button type="button" data-verb-view="cards" data-card-key="${key}" aria-pressed="${view==="cards"}">Tarjetas</button></div>`;
  if(view==="cards"){
    const state=studyVerbCards[key]||{index:0,revealed:false};
    const index=Math.min(state.index,visible.length-1), verb=visible[index];
    const previous=index>0?"":"disabled", next=index<visible.length-1?"":"disabled";
    const forms=state.revealed?`<div class="verb-card-answer study-reveal"><dl class="verb-card-forms"><div><dt>he / she / it</dt><dd>${esc(verb.third)}</dd></div><div><dt>-ing</dt><dd>${esc(verb.ing)}</dd></div><div><dt>Simple Past</dt><dd>${esc(verb.past)}</dd></div><div><dt>Past Participle</dt><dd>${esc(verb.participle)}</dd></div><div><dt>Patrón / sonido</dt><dd>${esc(verb.pattern||verb.sound)}</dd></div></dl><label class="verb-ok"><input type="checkbox" data-verb-ok="${esc(verb.id)}" ${masteredVerbs.has(verb.id)?"checked":""}><span>Ya domino este verbo</span></label></div>`:"";
    return `<div class="verb-viewbar">${count}${switcher}</div><article class="verb-flashcard study-reveal"><div class="verb-card-top"><span>Tarjeta ${index+1} de ${visible.length}</span><span class="verb-pattern pattern-${verb.pattern||"regular"}">${esc(verb.pattern||verb.sound)}</span></div><p class="verb-card-label">Base form</p><h4>${esc(verb.base)}</h4><p class="verb-card-meaning">${esc(verb.meaning)}</p><p class="verb-card-prompt">Intenta recordar sus formas antes de revelarlas.</p><p class="verb-card-example">${esc(verb.example)}</p><button type="button" class="btn" data-verb-card-action="reveal" data-card-key="${key}">${state.revealed?"Ocultar formas":"Revelar formas"}</button>${forms}<div class="verb-card-controls"><button type="button" class="btn line" data-verb-card-action="previous" data-card-key="${key}" ${previous}>Anterior</button><span>${index+1} / ${visible.length}</span><button type="button" class="btn line" data-verb-card-action="next" data-card-key="${key}" ${next}>Siguiente</button></div></article>`;
  }
  const headers=["Base Form","he / she / it","-ing","Simple Past","Past Participle","Patrón","Español","Ejemplo (presente simple)","OK"];
  const pager=pages>1?`<div class="study-table-pager"><span>${page+1} / ${pages}${term&&matches.length?` · ${matches.length} coincidencias`:""}</span><div><button type="button" class="btn line" data-study-table-page="${key}" data-step="-1" ${page===0?"disabled":""} aria-label="Página anterior">Anterior</button><button type="button" class="btn line" data-study-table-page="${key}" data-step="1" ${page===pages-1?"disabled":""} aria-label="Página siguiente">Siguiente</button></div></div>`:"";
  const body=rows.map((v,index)=>`<tr class="study-reveal" style="--study-delay:${index*32}ms"><td class="study-ink-blue">${esc(v.base)}</td><td class="study-ink-blue">${esc(v.third)}</td><td class="study-ink-blue">${esc(v.ing)}</td><td class="study-ink-blue">${esc(v.past)}</td><td class="study-ink-blue">${esc(v.participle)}</td><td class="study-ink-red"><span class="verb-pattern pattern-${v.pattern||"regular"}">${esc(v.pattern||v.sound)}</span></td><td class="study-ink-black">${esc(v.meaning)}</td><td class="study-ink-blue">${esc(v.example)}</td><td><label class="verb-ok"><input type="checkbox" data-verb-ok="${esc(v.id)}" ${masteredVerbs.has(v.id)?"checked":""}><span>OK</span></label></td></tr>`).join("");
  return `<div class="verb-viewbar">${count}${switcher}</div><div class="study-table-wrap"><table class="study-table verb-table"><thead><tr>${headers.map(h=>`<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${body}</tbody></table></div>${pager}`;
}
function studyVerbPractice(verbs,key,mode){
  const term=studySearchTerm.toLocaleLowerCase("es"), matches=term?verbs.filter(v=>`${v.base} ${v.past} ${v.participle} ${v.meaning}`.toLocaleLowerCase("es").includes(term)):verbs;
  const visible=term&&matches.length?matches:verbs, pageSize=5, pages=Math.max(1,Math.ceil(visible.length/pageSize));
  const page=Math.min(studyTablePages[key]||0,pages-1), rows=visible.slice(page*pageSize,(page+1)*pageSize);
  const headers=mode==="irregular"?["Base Form","Simple Past","Past Participle","Comprobación"]:["Base Form","Past / Past Participle","Sonido de -ed (t / d / id)","Comprobación"];
  const rowHTML=rows.map(v=>{
    const state=verbPracticeAnswers[v.id]||{first:"",second:"",checked:false};
    const expectedFirst=v.past, expectedSecond=mode==="irregular"?v.participle:v.sound;
    const firstCorrect=expectedFirst.split("/").map(x=>x.trim().toLocaleLowerCase("en")).includes(state.first.trim().toLocaleLowerCase("en"));
    const secondCorrect=expectedSecond.split("/").map(x=>x.trim().toLocaleLowerCase("en")).includes(state.second.trim().toLocaleLowerCase("en"));
    const status=state.checked?`<span class="verb-practice-status ${firstCorrect&&secondCorrect?"correct":"incorrect"}">${firstCorrect&&secondCorrect?"Correcto":"Revisa"}${firstCorrect&&secondCorrect?"":` · ${esc(expectedFirst)} / ${esc(expectedSecond)}`}</span>`:"";
    const secondLabel=mode==="irregular"?"Past Participle":"Sonido -ed";
    return `<tr><td>${esc(v.base)}</td><td><label class="verb-input-label" for="verb-${v.id}-first">${mode==="irregular"?"Simple Past":"Past / Participle"}</label><input id="verb-${v.id}-first" class="verb-answer-input" type="text" autocomplete="off" value="${esc(state.first)}" data-verb-answer="${v.id}" data-field="first"></td><td><label class="verb-input-label" for="verb-${v.id}-second">${secondLabel}</label><input id="verb-${v.id}-second" class="verb-answer-input" type="text" autocomplete="off" value="${esc(state.second)}" data-verb-answer="${v.id}" data-field="second"></td><td>${status}</td></tr>`;
  }).join("");
  const pager=pages>1?`<div class="study-table-pager"><span>${page+1} / ${pages}${term&&matches.length?` · ${matches.length} coincidencias`:""}</span><div><button type="button" class="btn line" data-study-table-page="${key}" data-step="-1" ${page===0?"disabled":""} aria-label="Página anterior">Anterior</button><button type="button" class="btn line" data-study-table-page="${key}" data-step="1" ${page===pages-1?"disabled":""} aria-label="Página siguiente">Siguiente</button></div></div>`:"";
  const check=rows.length?`<button type="button" class="btn line verb-check-page" data-check-verbs="${rows.map(v=>v.id).join(",")}">Comprobar página</button>`:"";
  return `<div class="study-table-wrap"><table class="study-table verb-practice-table"><thead><tr>${headers.map(h=>`<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${rowHTML}</tbody></table></div>${pager}${check}`;
}
function studyBlockHTML(block,key){
  let tableIndex=0;
  let content=block.text?`<p>${block.text}</p>`:"";
  if(block.headers&&block.rows) content+=studyTable(block.headers,block.rows,`${key}-${tableIndex++}`);
  if(block.words) content+=studyTable(["Inglés","Español","Inglés","Español"],block.words,`${key}-${tableIndex++}`);
  if(block.verbs) content+=studyVerbTable(block.verbs,`${key}-${tableIndex++}`);
  if(block.verbPractice) content+=studyVerbPractice(block.verbPractice,`${key}-${tableIndex++}`,block.mode);
  if(block.items){
    const term=studySearchTerm.toLocaleLowerCase("es"), matches=term?block.items.filter(item=>item.join(" ").toLocaleLowerCase("es").includes(term)):block.items;
    content+=`<ul class="study-points">${(term&&matches.length?matches:block.items).map(item=>`<li><b class="study-ink-blue">${esc(item[0])}</b><span class="study-ink-black">${esc(item[1])}</span></li>`).join("")}</ul>`;
  }
  return `<section class="study-block" data-study-item><h3>${esc(block.title)}</h3>${content}</section>`;
}
function renderStudyQuiz(){
  const host=document.getElementById("study-quiz"); if(!host) return;
  if(studyQuizComplete){
    const ratio=studyQuizScore/STUDY_GUIDE.quiz.length;
    host.innerHTML=`<div class="study-quiz-result"><p class="study-score">${studyQuizScore} / ${STUDY_GUIDE.quiz.length}</p><p>${ratio>=.8?"Excelente repaso.":ratio>=.5?"Buen avance; vuelve a los temas que te costaron.":"Repasa las fórmulas y vuelve a intentarlo."}</p><button class="btn" id="study-quiz-reset" type="button">Repetir práctica</button></div>`;
    document.getElementById("study-quiz-reset").onclick=()=>{studyQuizIndex=0;studyQuizScore=0;studyQuizAnswer=null;studyQuizComplete=false;renderStudyQuiz();};
    renderSide();
    return;
  }
  const q=STUDY_GUIDE.quiz[studyQuizIndex], answered=studyQuizAnswer!==null;
  const options=q.options.map((option,i)=>{
    let cls="opt";
    if(answered&&i===q.answer) cls+=" ok";
    else if(answered&&i===studyQuizAnswer) cls+=" bad";
    else if(answered) cls+=" dim";
    return `<button type="button" class="${cls}" data-answer="${i}" ${answered?"disabled":""}><span class="k">${"abcd"[i]})</span><span class="t">${esc(option)}</span></button>`;
  }).join("");
  host.innerHTML=`<p class="study-quiz-count">Pregunta ${studyQuizIndex+1} de ${STUDY_GUIDE.quiz.length}</p><p class="study-quiz-question">${esc(q.q)}</p><div class="opts study-quiz-options">${options}</div>${answered?`<div class="note ${studyQuizAnswer===q.answer?"ok":""}" role="status"><b>${studyQuizAnswer===q.answer?"Correcto.":"Revisa esta regla."}</b> ${esc(q.why)}</div><button type="button" class="btn study-quiz-next" id="study-quiz-next">${studyQuizIndex===STUDY_GUIDE.quiz.length-1?"Ver resultado":"Siguiente pregunta"}</button>`:""}`;
  host.querySelectorAll("[data-answer]").forEach(button=>button.onclick=()=>{
    studyQuizAnswer=Number(button.dataset.answer);
    if(studyQuizAnswer===q.answer) studyQuizScore++;
    renderStudyQuiz();
  });
  const next=document.getElementById("study-quiz-next");
  if(next) next.onclick=()=>{
    if(studyQuizIndex===STUDY_GUIDE.quiz.length-1) studyQuizComplete=true;
    else studyQuizIndex++;
    studyQuizAnswer=null; renderStudyQuiz();
  };
  renderSide();
}
function renderStudyContent(section){
  const host=document.getElementById("study-subsection"), nav=document.getElementById("study-subtabs");
  const block=section.blocks[studyBlockIndex];
  const blockText=entry=>JSON.stringify(entry).replace(/<[^>]*>/g," ").toLocaleLowerCase("es");
  const blockTabs=section.blocks.map((entry,index)=>`<button type="button" role="tab" aria-selected="${studyPanel==="guide"&&index===studyBlockIndex}" class="study-subtab ${studyPanel==="guide"&&index===studyBlockIndex?"on":""}" data-block="${index}">${esc(entry.title)}</button>`).join("");
  nav.innerHTML=blockTabs+`<button type="button" role="tab" aria-selected="${studyPanel==="quiz"}" class="study-subtab study-quiz-tab ${studyPanel==="quiz"?"on":""}" data-panel="quiz">Práctica · ${STUDY_GUIDE.quiz.length} preguntas</button>`;
  if(studyPanel==="quiz"){
    host.innerHTML=`<section class="study-block study-quiz-panel"><p class="study-eyebrow">RECUERDO ACTIVO</p><h3>Comprueba lo aprendido</h3><p>${STUDY_GUIDE.quiz.length} preguntas de gramática, vocabulario, conectores, phrasal verbs y preposiciones.</p><div id="study-quiz"></div></section>`;
    renderStudyQuiz();
  }else if(studySearchTerm&&!blockText(block).includes(studySearchTerm.toLocaleLowerCase("es"))){
    host.innerHTML=`<p class="study-empty">No hay coincidencias en esta subsección. Prueba otro término o selecciona una subsección.</p>`;
  }else{
    host.innerHTML=studyBlockHTML(block,`${section.id}-${studyBlockIndex}`);
    host.querySelectorAll("[data-study-table-page]").forEach(button=>button.onclick=()=>{
      const key=button.dataset.studyTablePage;
      studyTablePages[key]=Math.max(0,(studyTablePages[key]||0)+Number(button.dataset.step));
      renderStudyContent(section);
    });
  }
  host.querySelectorAll("[data-verb-ok]").forEach(input=>input.onchange=()=>{
    setVerbMastery(input.dataset.verbOk,input.checked);
  });
  host.querySelectorAll("[data-verb-answer]").forEach(input=>input.oninput=()=>{
    const state=verbPracticeAnswers[input.dataset.verbAnswer]||{first:"",second:"",checked:false};
    state[input.dataset.field]=input.value;state.checked=false;verbPracticeAnswers[input.dataset.verbAnswer]=state;
  });
  host.querySelectorAll("[data-check-verbs]").forEach(button=>button.onclick=()=>{
    button.dataset.checkVerbs.split(",").forEach(id=>{
      const state=verbPracticeAnswers[id]||{first:"",second:""};state.checked=true;verbPracticeAnswers[id]=state;
    });
    renderStudyContent(section);
  });
  host.querySelectorAll("[data-verb-view]").forEach(button=>button.onclick=()=>{
    studyVerbViews[button.dataset.cardKey]=button.dataset.verbView;
    renderStudyContent(section);
  });
  host.querySelectorAll("[data-verb-card-action]").forEach(button=>button.onclick=()=>{
    const key=button.dataset.cardKey, state=studyVerbCards[key]||{index:0,revealed:false};
    const verbs=block.verbs||[], term=studySearchTerm.toLocaleLowerCase("es");
    const matches=term?verbs.filter(v=>Object.values(v).join(" ").toLocaleLowerCase("es").includes(term)):verbs;
    if(button.dataset.verbCardAction==="reveal") state.revealed=!state.revealed;
    else{
      state.index=Math.max(0,Math.min(matches.length-1,state.index+(button.dataset.verbCardAction==="next"?1:-1)));
      state.revealed=false;
    }
    studyVerbCards[key]=state;renderStudyContent(section);
  });
  nav.querySelectorAll("[data-block]").forEach(button=>button.onclick=()=>{
    studyBlockIndex=Number(button.dataset.block);studyPanel="guide";studySearchTerm="";
    renderStudyContent(section);
  });
  const quizTab=nav.querySelector('[data-panel="quiz"]');
  if(quizTab) quizTab.onclick=()=>{
    studyPanel="quiz";studySearchTerm="";renderStudyContent(section);
  };
  renderSide();
}
function renderStudyNotes(section){
  const host=document.getElementById("study-notes");
  const pages=STUDY_NOTES[section.id];
  if(!pages||pages.length!==3){
    console.error(`Study notes for "${section.id}" must contain exactly three pages.`);
    host.innerHTML=`<p class="study-notes-error" role="status">Class notes are temporarily unavailable for this topic.</p>`;
    return;
  }
  const pageIndex=Math.max(0,Math.min(pages.length-1,studyNotePages[section.id]||0));
  studyNotePages[section.id]=pageIndex;
  const page=pages[pageIndex];
  host.innerHTML=`<section class="study-notebook" aria-labelledby="study-notes-title">
    <div class="study-notebook-heading"><div><p class="study-eyebrow">APUNTES DE CLASE · ENGLISH NOTES</p><h2 id="study-notes-title">Notas para ${esc(section.title)}</h2><p>Ideas clave, ejemplos en inglés y práctica rápida. Desliza las hojas como en una libreta digital.</p></div><span class="study-notebook-mark" aria-hidden="true">✎</span></div>
    <article class="study-note-page" aria-label="Hoja ${pageIndex+1} de 3">
      <div class="study-note-meta"><span>${esc(section.title)}</span><span>Hoja ${String(pageIndex+1).padStart(2,"0")} / 03</span></div>
      <h3>${esc(page.title)}</h3>
      <p class="study-note-idea">${esc(page.note)}</p>
      <div class="study-note-formula"><span>USEFUL PATTERN</span><code>${esc(page.pattern)}</code></div>
      <h4>Examples in English</h4>
      <ul class="study-note-examples">${page.examples.map(example=>`<li lang="en">${esc(example)}</li>`).join("")}</ul>
      <div class="study-note-task"><strong>Try it:</strong> ${esc(page.tryIt)}</div>
      <span class="study-note-scribble" aria-hidden="true">remember this!</span>
    </article>
    <nav class="study-note-pagination" aria-label="Navegación de apuntes">
      <button type="button" class="btn line" data-note-page="${pageIndex-1}" ${pageIndex===0?"disabled":""}>← Hoja anterior</button>
      <span aria-live="polite">Hoja ${pageIndex+1} de ${pages.length}</span>
      <button type="button" class="btn line" data-note-page="${pageIndex+1}" ${pageIndex===pages.length-1?"disabled":""}>Siguiente hoja →</button>
    </nav>
  </section>`;
  host.querySelectorAll("[data-note-page]").forEach(button=>button.onclick=()=>{
    const nextPage=Number(button.dataset.notePage);
    if(nextPage>=0&&nextPage<pages.length){
      studyNotePages[section.id]=nextPage;
      renderStudyNotes(section);
    }
  });
}
function study(){
  setNav("study"); updatePool();
  const section=STUDY_GUIDE.sections.find(s=>s.id===studySection)||STUDY_GUIDE.sections[0];
  studySection=section.id;
  studyBlockIndex=Math.min(studyBlockIndex,section.blocks.length-1);
  const roadmap=STUDY_GUIDE.roadmap.map(phase=>`<article class="study-phase"><h2>${esc(phase.title)}</h2><p>${esc(phase.focus)}</p><div class="study-route-links">${phase.sections.map(id=>{
    const item=STUDY_GUIDE.sections.find(s=>s.id===id);
    return `<button type="button" class="study-route-link" data-section="${item.id}">${esc(item.title)}${studyDone.includes(item.id)?" · ✓":""}</button>`;
  }).join("")}</div></article>`).join("");
  app.innerHTML=`<section class="sheet study-page">
    <p class="study-eyebrow">GUÍA DE PREPARACIÓN · B1</p>
    <h1 class="study-title">Estudia para tu examen B1</h1>
    <p class="lead study-route-intro">Empieza por las bases, amplía tu inglés y practica lectura, escritura, escucha y conversación. Al terminar un tema, intenta explicarlo y usarlo sin mirar las notas.</p>
    <div class="study-roadmap" aria-label="Etapas de la ruta de estudio">${roadmap}</div>
    <div class="study-section-head"><div><h2>${esc(section.title)}</h2><span id="study-progress">${studyDone.length} de ${STUDY_GUIDE.sections.length} temas repasados</span></div><button type="button" class="btn line" id="study-mark">${studyDone.includes(section.id)?"Quitar marca":"Marcar como repasado"}</button></div>
    <div class="study-subtabs" id="study-subtabs" role="tablist" aria-label="Subsecciones del tema"></div>
    <div class="study-content" id="study-subsection"></div>
    <div class="actions"><button class="btn" id="study-home">Volver al examen</button></div>
    <div id="study-notes"></div>
  </section>`;
  app.querySelectorAll(".study-route-link").forEach(button=>button.onclick=()=>{
    studySection=button.dataset.section;studyBlockIndex=0;studyPanel="guide";studySearchTerm="";study();topScroll();
  });
  document.getElementById("study-mark").onclick=event=>{
    if(studyDone.includes(section.id)) studyDone=studyDone.filter(id=>id!==section.id);
    else studyDone.push(section.id);
    try{localStorage.setItem(STUDY_PROGRESS_KEY,JSON.stringify(studyDone));}catch(e){}
    event.currentTarget.textContent=studyDone.includes(section.id)?"Quitar marca de repaso":"Marcar tema revisado";
    document.getElementById("study-progress").textContent=`${studyDone.length} de ${STUDY_GUIDE.sections.length} temas repasados`;
    renderStudyContent(section);
  };
  document.getElementById("study-home").onclick=()=>go(home);
  renderStudyContent(section);
  renderStudyNotes(section);
}
function openStudy(){document.body.dataset.view="app";study();setTab("main");topScroll();}

/* ---------- repaso de errores ---------- */
function review(){
  if(!leave()) return;
  const ids=shuffle(wrongIds()).slice(0,15);
  if(!ids.length){
    setNav("rev"); updatePool();
    app.innerHTML=`<section class="sheet"><h2 class="h" style="margin-top:0">No tienes errores pendientes</h2>
    <p class="lead">Aquí aparecen las preguntas que fallaste la última vez que las respondiste. Cuando aciertes una en un repaso, sale de la lista.</p>
    <div class="actions"><button class="btn" id="hm">Ir al inicio</button></div></section>`;
    document.getElementById("hm").onclick=home; return;
  }
  start(ids,"Repaso de errores","review");
}

/* ---------- examen ---------- */
function start(ids,name,kind){
  clearInterval(timer);
  run={ids,name,kind:kind||"round",i:0,res:[],picked:null,order:null,secsF:0,secs:0,left:0,last:Date.now(),paused:false};
  inExam=true; setNav(kind==="review"?"rev":"");
  timer=setInterval(tick,250);
  prep(); renderQ(); topScroll();
}
function tick(){
  if(!run) return;
  const now=Date.now(), d=(now-run.last)/1000; run.last=now;
  if(run.paused) return;
  run.secsF+=d; run.secs=Math.floor(run.secsF);
  if(run.limit && run.picked===null){
    run.left-=d;
    if(run.left<=0){pick(-1);return;}
  }
  const el=document.getElementById("tm"); if(el) el.textContent="Tiempo "+fmt(run.secs);
  const ql=document.getElementById("ql"); if(ql) ql.textContent="Quedan "+Math.ceil(run.left)+" s";
}
function prep(){const q=Q[run.ids[run.i]];run.order=shuffle(q.o.map((_,k)=>k));run.picked=null;run.limit=store.settings.limit||0;run.left=run.limit;}

function pause(){ run.paused=true; renderPause(); }
function renderPause(){
  app.innerHTML=`<section class="sheet pause"><h2 class="h" style="margin-top:0">Examen en pausa</h2>
  <p>Las preguntas están ocultas mientras esperas y el tiempo no corre. Vas en la pregunta ${run.i+1} de ${run.ids.length}.</p>
  <div class="actions"><button class="btn" id="rs">Continuar</button></div></section>`;
  const b=document.getElementById("rs"); b.onclick=()=>{run.paused=false;run.last=Date.now();renderQ();}; b.focus({preventScroll:true});
}

function renderQ(){
  updatePool();
  const q=Q[run.ids[run.i]], n=run.ids.length, lim=run.limit;
  const parts=q.q.split("|||"), passage=parts.length>1?parts[0]:null, text=parts.length>1?parts[1]:parts[0];
  const answered=run.picked!==null, correctPos=run.order.indexOf(q.a), okNow=answered&&run.picked===correctPos, timeout=run.picked===-1;
  const grid=run.ids.map((_,k)=>{
    if(k<run.res.length) return `<div class="gb ${run.res[k].ok?"ok":"bad"}" title="Pregunta ${k+1}">${run.res[k].ok?"✓":"✕"}</div>`;
    return `<div class="gb ${k===run.i?"now":""}">${k+1}</div>`;}).join("");
  const opts=run.order.map((oi,pos)=>{
    let cls="opt", mark="";
    if(answered){
      if(pos===correctPos){cls+=" ok";mark=TICK;}
      else if(pos===run.picked){cls+=" bad";mark=CROSS;}
      else cls+=" dim";
    }
    return `<button class="${cls}" ${answered?"disabled":""} data-pos="${pos}"><span class="k">${"abcd"[pos]})</span><span class="t">${esc(q.o[oi])}</span>${mark}</button>`;
  }).join("");
  let fb="";
  if(answered){
    const head=okNow?"Bien.":timeout?"Se acabó el tiempo. La correcta es la "+"abcd"[correctPos]+").":"Esa no. La correcta es la "+"abcd"[correctPos]+").";
    fb=`<div class="note ${okNow?"ok":""}" role="status"><b>${head}</b> ${esc(q.e)}</div>
    <div class="dock"><button class="btn" id="next">${run.i===n-1?"Ver mi calificación":"Siguiente"}</button></div>`;
  }
  app.innerHTML=`
  <section class="sheet">
    <div class="answers" aria-label="Avance">${grid}</div>
    <div class="qhead"><span>${run.kind==="review"?"Repaso, ":""}Pregunta ${run.i+1} de ${n}, ${CAT[q.c].toLowerCase()}</span>
      <span class="grp">${lim&&!answered?`<span class="ql" id="ql">Quedan ${Math.ceil(run.left)} s</span>`:""}<span id="tm">Tiempo ${fmt(run.secs)}</span><button class="lnk" id="pz" type="button">Pausa</button></span></div>
    ${passage?`<div class="passage">${esc(passage)}</div>`:""}
    <p class="qtext">${esc(text)}</p>
    <div class="opts">${opts}</div>
    ${fb}
  </section>`;
  app.querySelectorAll(".opt").forEach(b=>b.onclick=()=>pick(+b.dataset.pos));
  const pz=document.getElementById("pz"); if(pz) pz.onclick=pause;
  const nx=document.getElementById("next"); if(nx){nx.onclick=next; nx.focus({preventScroll:true});}
}

function pick(pos){
  if(!run||run.picked!==null||run.paused) return;
  const q=Q[run.ids[run.i]], correctPos=run.order.indexOf(q.a), ok=pos===correctPos;
  run.picked=pos;
  learn(q,ok);
  beep(ok);
  run.res.push({id:q.id, ok, timeout:pos===-1, chosen:pos===-1?"Sin respuesta":q.o[run.order[pos]]});
  if(!store.seen.includes(q.id)) store.seen.push(q.id);
  save(); renderQ();
}
function next(){
  if(run.i<run.ids.length-1){run.i++;prep();run.last=Date.now();renderQ();topScroll();}
  else finish();
}

/* ---------- calificación ---------- */
function finish(){
  clearInterval(timer); inExam=false;
  run.secs=Math.floor(run.secsF);
  const isRev=run.kind==="review";
  const score=run.res.filter(r=>r.ok).length, n=run.ids.length, tmo=run.res.filter(r=>r.timeout).length;
  if(!isRev){
    store.attempts++; if(score>store.best) store.best=score;
    store.history.push({score,n,name:run.name,t:Date.now()}); store.history=store.history.slice(-30);
  }
  save(); updatePool();
  const ratio=score/n, who=store.name?store.name+", ":"";
  let comment;
  if(ratio>=.85) comment=who+"¡Excelente resultado! Revisa tus errores y sigue practicando.";
  else if(ratio>=.65) comment=who+"¡Buen avance! Repasa las preguntas que fallaste.";
  else if(ratio>=.45) comment=who+"Vas avanzando. Estudia las explicaciones y vuelve a intentarlo.";
  else comment=who+"Cada intento cuenta. Repasa los temas y prueba otra ronda.";
  comment=comment.charAt(0).toUpperCase()+comment.slice(1);

  const by={}; run.res.forEach(r=>{const c=Q[r.id].c;by[c]=by[c]||{ok:0,t:0};by[c].t++;if(r.ok)by[c].ok++;});
  const topics=Object.keys(by).map(c=>`<div class="topic"><span>${CAT[c]}</span><div class="tbar"><i style="width:${Math.round(by[c].ok/by[c].t*100)}%"></i></div><span class="n">${by[c].ok}/${by[c].t}</span></div>`).join("");

  const pend=wrongIds().length;
  const wrong=run.res.filter(r=>!r.ok);
  const errs=wrong.length?`<h2 class="h">Lo que fallaste (${wrong.length})</h2><p class="fine" style="margin:0 0 4px">Toca una pregunta para ver la respuesta y por qué.</p>${wrong.map(r=>{
    const q=Q[r.id], parts=q.q.split("|||"), text=parts[parts.length-1];
    return `<details class="rv"><summary><span class="q">${esc(text)}</span><span class="tg">${CAT[q.c]}</span></summary><div class="body"><p>Tu respuesta: <s>${esc(r.chosen)}</s></p><p class="right">Respuesta correcta: ${esc(q.o[q.a])}</p><small>${esc(q.e)}</small></div></details>`;}).join("")}`
    :`<div class="clean">¡Perfecto! No hay errores que repasar en esta ronda.</div>`;
  app.innerHTML=`
  <section class="sheet">
    <div class="fields">
      <div class="field"><span class="lb">Nombre:</span><span class="fill">${esc(store.name)}</span></div>
      <div class="field"><span class="lb">Fecha:</span><span class="fill">${today()}</span></div>
    </div>
    <div class="gradebox">
      <div class="grade" aria-label="Calificación: ${score} de ${n}">
        <svg viewBox="0 0 220 116" aria-hidden="true"><path d="M26 60C20 28 80 10 126 12C186 14 214 34 206 62C198 92 140 106 92 103C42 100 12 86 24 54C30 40 44 32 58 27"/></svg>
        <b>${score}/${n}</b>
      </div>
      <div class="teacher">${esc(comment)}</div>
    </div>
    <p class="sub">${esc(run.name)} · Tiempo: ${fmt(run.secs)}.${tmo?" Se acabó el tiempo en "+tmo+(tmo===1?" pregunta.":" preguntas."):""} Revisa tu resultado por tema y las respuestas incorrectas.</p>
    <div class="actions" style="margin-top:16px">
      <button class="btn" id="again">${isRev?(pend?"Seguir repasando":"Hacer una ronda nueva"):"Reiniciar examen"}</button>
      ${!isRev&&pend?`<button class="btn line" id="rvw">Repasar mis errores (${pend})</button>`:""}
      <button class="btn line" id="copy">Copiar mi nota</button>
    </div>
    <h2 class="h">Tu resultado por tema</h2>
    ${topics}
    ${errs}
  </section>`;
  document.getElementById("again").onclick=isRev&&pend?review:choose;
  const rvw=document.getElementById("rvw"); if(rvw) rvw.onclick=review;
  document.getElementById("copy").onclick=async e=>{
    const txt="Práctica B1: "+score+"/"+n+" en "+fmt(run.secs)+". Resultado orientativo; no equivale a un examen oficial.";
    try{await navigator.clipboard.writeText(txt);e.target.textContent="Copiado";}catch(err){e.target.textContent="No se pudo copiar";}
  };
  topScroll();
}

/* ---------- escoger ronda ---------- */
function choose(){
  setNav("home");
  if(store.seen.length>=Q.length){store.seen=[];save();}
  const total=store.settings.rounds===3?3:2;
  const mixes=shuffle(MIXES.slice(1));
  const first=buildAdaptive();
  const rs=[{name:"Repaso recomendado", badge:"Según tus respuestas", desc:"Incluye más preguntas de los temas que conviene reforzar.", ids:first}];
  let used=first.slice();
  for(let k=1;k<total;k++){
    const mx=mixes[k-1], ids=build(mx.m, used);
    rs.push({name:mx.name, desc:mx.desc, ids}); used=used.concat(ids);
  }
  rounds=rs; updatePool();
  const lim=store.settings.limit, pend=wrongIds().length;
  app.innerHTML=`
  <section class="sheet choose">
    <h2>Escoge la siguiente ronda</h2>
    <p class="lead">${total===3?"Tres hojas distintas":"Dos hojas distintas"} de 15 preguntas, sin repetir.${lim?" Cada pregunta tiene "+lim+" segundos.":""}</p>
    <div class="picks">
    ${rounds.map((r,i)=>{
      const counts={}; r.ids.forEach(id=>{const c=Q[id].c;counts[c]=(counts[c]||0)+1;});
      const inc=Object.keys(counts).map(c=>CAT[c].toLowerCase()+" "+counts[c]).join(", ");
      const nn=newCount(r.ids);
      return `<article class="pick"><div class="hd"><div class="ltr">${"ABC"[i]}</div><h3>${esc(r.name)}${r.badge?`<span class="badge">${esc(r.badge)}</span>`:""}</h3></div>
        <p>${esc(r.desc)}</p>
        <div class="inc">Temas: ${inc}.</div>
        <div class="nw">${nn} preguntas nuevas de 15.</div>
        <button class="btn" data-i="${i}">Empezar práctica ${"ABC"[i]}</button></article>`;}).join("")}
    </div>
    ${pend?`<p class="fine">O <button class="lnk" id="rvl" type="button">repasa tus ${pend} errores pendientes</button>.</p>`:""}
  </section>`;
  app.querySelectorAll(".pick .btn").forEach(b=>b.onclick=()=>{const i=+b.dataset.i,r=rounds[i];start(r.ids,"Ronda "+"ABC"[i]+", "+r.name.toLowerCase());});
  const rvl=document.getElementById("rvl"); if(rvl) rvl.onclick=review;
  topScroll();
}

/* ---------- mi progreso ---------- */
function chartSVG(h){
  const W=620,H=220,L=34,R=12,T=14,B=28,n=h.length;
  const x=i=>(n===1?L+(W-L-R)/2:L+i*(W-L-R)/(n-1)).toFixed(1), y=v=>(T+(H-T-B)*(1-v/15)).toFixed(1);
  const g=[0,5,10,15].map(v=>`<line x1="${L}" x2="${W-R}" y1="${y(v)}" y2="${y(v)}" stroke="var(--rule)" ${v?'stroke-dasharray="4 4"':""}/><text x="${L-8}" y="${(+y(v)+4)}" text-anchor="end" font-size="12" fill="var(--muted)">${v}</text>`).join("");
  const pts=h.map((e,i)=>x(i)+","+y(e.score)).join(" ");
  const dots=h.map((e,i)=>`<circle cx="${x(i)}" cy="${y(e.score)}" r="${i===n-1?5.5:3.5}" fill="${i===n-1?"var(--red)":"var(--ink)"}"/>`).join("");
  const first=store.attempts-n+1;
  const lab=h.map((e,i)=>(n<=12||i%Math.ceil(n/12)===0||i===n-1)?`<text x="${x(i)}" y="${H-8}" text-anchor="middle" font-size="12" fill="var(--muted)">${first+i}</text>`:"").join("");
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Nota de cada intento, de 0 a 15">${g}<polyline points="${pts}" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-linejoin="round"/>${dots}${lab}</svg>`;
}
function progress(){
  if(!leave()) return;
  setNav("prog"); updatePool();
  const h=store.history.slice(-30), n=h.length;
  let trend="";
  if(n>=4){const a=h.slice(-2).reduce((s,e)=>s+e.score,0)/2, b=h.slice(-4,-2).reduce((s,e)=>s+e.score,0)/2;
    trend=a>b+.5?"Tus dos últimos intentos superan a los dos anteriores.":a<b-.5?"Tus dos últimos intentos quedaron por debajo de los dos anteriores.":"Tus últimos intentos van parejos.";}
  const chart=n>=2?`<div class="chart">${chartSVG(h)}</div>${trend?`<p class="fine">${trend}</p>`:""}`:`<p class="lead">Completa más de una práctica para comparar tus resultados.</p>`;
  const sn=new Set(store.seen);
  const seenRows=CATS.map(c=>{const t=byCat[c].length,v=byCat[c].filter(q=>sn.has(q.id)).length;return `<div class="topic"><span>${CAT[c]}</span><div class="tbar"><i style="width:${Math.round(v/t*100)}%"></i></div><span class="n">${v}/${t}</span></div>`;}).join("");
  const pend=wrongIds().length;
  app.innerHTML=`
  <section class="sheet">
    <h2 class="ptitle">Mi progreso</h2>
    <h2 class="h">Nota de cada intento</h2>
    ${chart}
    <h2 class="h">Preguntas practicadas por tema</h2>
    ${seenRows}
    <div class="actions">
      <button class="btn" id="pg-go">${store.attempts?"Escoger una ronda":"Empezar la evaluación"}</button>
      ${pend?`<button class="btn line" id="pg-rv">Repasar mis errores (${pend})</button>`:""}
    </div>
    <h2 class="h">Reiniciar tu avance</h2>
    <p class="fine" style="margin:0 0 10px">Esta opción borra las prácticas y respuestas pendientes de repaso.</p>
    <button class="danger" id="pg-reset">Borrar mi progreso</button>
  </section>`;
  document.getElementById("pg-go").onclick=()=>store.attempts?choose():start(build(MIXES[0].m),"Primer intento");
  const r=document.getElementById("pg-rv"); if(r) r.onclick=review;
  document.getElementById("pg-reset").onclick=()=>{
    if(!confirm("Se borrarán tus prácticas, resultados y preguntas pendientes de repaso. ¿Quieres continuar?")) return;
    store.seen=[];store.history=[];store.best=0;store.attempts=0;store.log=[];store.net1=null;
    profile=newProfile();store.profile=profile;resetNet1();save();home();
  };
  topScroll();
}

document.querySelectorAll("#tabs button").forEach(b=>b.onclick=()=>{
  if(b.dataset.t==="study"){go(study);return;}
  if(screen==="study"&&b.dataset.t==="main"){go(home);return;}
  setTab(b.dataset.t);
});

document.addEventListener("keydown",e=>{
  if(!run||run.paused||!app.querySelector(".opts")) return;
  if(run.picked===null && /^[1-4]$/.test(e.key)){const p=+e.key-1; if(p<run.order.length) pick(p);}
});

window.addEventListener&&window.addEventListener("beforeunload",e=>{if(inExam){e.preventDefault();e.returnValue="";}});

/* ---------- portada ---------- */
function coverStats(){
  const el=document.getElementById("cvStat"); if(!el) return;
  el.textContent=store.attempts?("Prácticas completadas: "+store.attempts+" · Mejor nota: "+store.best+"/15"):"Tus resultados se guardan para que puedas consultar tu avance.";
}
function enterApp(){
  document.body.dataset.view="app"; home(); setTab("main"); topScroll();
  const g=document.getElementById("go"); if(g) g.focus({preventScroll:true});
}
function showCover(){
  if(screen==="study") recordStudyTime();
  setNav("home");
  document.body.dataset.view="cover"; coverStats();
  const c=document.getElementById("cover"); if(c) c.scrollTop=0;
  const e=document.getElementById("enter"); if(e) e.focus({preventScroll:true});
}
document.getElementById("enter").onclick=enterApp;
document.getElementById("study-cover").onclick=openStudy;
document.querySelectorAll(".theme-toggle").forEach(button=>button.onclick=toggleTheme);
document.getElementById("study-open").onclick=()=>document.body.dataset.view==="cover"?openStudy():go(study);
document.getElementById("tocover").onclick=()=>{ if(leave()) showCover(); };
coverStats();

trackPanelScroll();
home();
window.setInterval(recordStudyTime,15000);
document.addEventListener("visibilitychange",()=>{
  if(document.hidden) recordStudyTime(true);
  else if(screen==="study") studyClockStartedAt=Date.now();
});
