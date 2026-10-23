(() => {
  const phases = [
    {
      title: "1 · Fundamentos profesionales",
      focus: "Preséntate, entiende una organización y comunica tareas y planes.",
      modules: [
        {
          id: "introductions", title: "Presentarte y crear contactos",
          goal: "Presentarte brevemente, explicar a qué te dedicas y mantener una conversación profesional inicial.",
          intro: "Usa una presentación breve: nombre, puesto o área, empresa y una frase sobre tu trabajo. Después pregunta por la otra persona. Adapta el tono a la situación; no hace falta sonar excesivamente formal.",
          phrases: [
            ["I work as a project coordinator.", "Trabajo como coordinador/a de proyectos.", "Presentar tu puesto."],
            ["I work in the finance department.", "Trabajo en el departamento de finanzas.", "Presentar tu área."],
            ["I’m responsible for customer accounts.", "Soy responsable de las cuentas de clientes.", "Explicar responsabilidad."],
            ["I’ve been with the company for two years.", "Llevo dos años en la empresa.", "Antigüedad con Present Perfect."],
            ["What kind of work do you do?", "¿A qué tipo de trabajo te dedicas?", "Pregunta abierta para iniciar conversación."],
            ["It’s great to meet you in person.", "Me alegra conocerte en persona.", "Saludo profesional cordial."]
          ],
          points: [
            "I'm based in + ciudad/país: I'm based in Mexico City.",
            "I specialize in + área: I specialize in digital marketing.",
            "I work closely with + equipo/persona: I work closely with the sales team.",
            "Para cerrar una conversación: It was nice speaking with you. / Let's keep in touch."
          ],
          model: "Hi, I’m Daniela. I work as a purchasing assistant at Northstar. I’m based in Guadalajara, and I work closely with our suppliers. What do you do?",
          task: "Prepara una presentación oral de 30 segundos con tu puesto o área, dos responsabilidades y una pregunta para continuar la conversación."
        },
        {
          id: "company-roles", title: "Empresas, puestos y responsabilidades",
          goal: "Describir una empresa, sus equipos y quién hace qué.",
          intro: "Aprende los nombres de los equipos y distingue puesto, departamento y responsabilidad. Para describir estructuras, usa expresiones claras; evita traducir literalmente cargos que quizá no tengan equivalente exacto.",
          phrases: [
            ["head office / branch", "oficina central / sucursal", "The head office is in London."],
            ["department / team", "departamento / equipo", "She works in the HR department."],
            ["colleague / manager / client", "colega / gerente / cliente", "I’ll check with my manager."],
            ["supplier / customer", "proveedor / cliente o comprador", "We contacted a new supplier."],
            ["report to", "depender de / reportar a", "I report to the operations director."],
            ["be in charge of", "estar a cargo de", "He’s in charge of the sales team."]
          ],
          points: [
            "The company is based in + lugar.",
            "We have offices in + lugares.",
            "Our team deals with + tema o clientes.",
            "I’m responsible for + sustantivo o verbo en -ing: responsible for preparing invoices."
          ],
          model: "We’re a small logistics company based in Monterrey. I work in operations and report to the regional manager. Our team coordinates deliveries and deals with customer queries.",
          task: "Describe una empresa real o imaginaria en cuatro frases: sector, tamaño o ubicación, equipo y una responsabilidad."
        },
        {
          id: "tasks-priorities", title: "Tareas, plazos y prioridades",
          goal: "Explicar en qué trabajas, cuándo vence una tarea y qué necesita atención primero.",
          intro: "Los plazos se comunican con fechas explícitas. Usa by para la fecha límite, until para la duración de una situación y before para indicar que algo debe ocurrir previamente.",
          phrases: [
            ["meet a deadline", "cumplir un plazo", "We need to meet Friday’s deadline."],
            ["set a priority", "establecer una prioridad", "Let’s set our priorities for today."],
            ["make progress on", "avanzar en", "I’ve made progress on the report."],
            ["be behind schedule", "ir retrasado", "The project is two days behind schedule."],
            ["be due on Friday", "vencer el viernes", "The proposal is due on Friday."],
            ["get something done", "terminar o lograr algo", "I’ll get the draft done this afternoon."]
          ],
          points: [
            "I’m working on + tarea.",
            "I’m aiming to finish by + fecha/hora.",
            "The most urgent task is + tarea.",
            "I can finish X today, but I may need until Thursday for Y."
          ],
          model: "I’m working on the client report now. It’s due by 3 p.m. tomorrow. I can send you a draft this afternoon, but I may need until tomorrow morning to check the figures.",
          task: "Explica dos prioridades de tu semana e incluye una fecha límite y un riesgo o dependencia."
        }
      ]
    },
    {
      title: "2 · Comunicación diaria",
      focus: "Escribe mensajes eficaces y participa en conversaciones de trabajo.",
      modules: [
        {
          id: "emails", title: "Correos profesionales",
          goal: "Redactar correos claros, corteses y fáciles de responder.",
          intro: "Un buen correo tiene un asunto concreto, el motivo al principio, la información necesaria y una acción solicitada. Usa un saludo acorde a la relación. Best regards y Kind regards son cierres profesionales habituales.",
          phrases: [
            ["I’m writing to ask about…", "Escribo para preguntar sobre…", "Indicar el motivo."],
            ["Could you please send me…?", "¿Podrías enviarme…?", "Pedir una acción concreta."],
            ["Please find attached…", "Adjunto…", "Avisar que incluyes un archivo."],
            ["I’ve attached the updated schedule.", "Adjunto el calendario actualizado.", "Alternativa directa."],
            ["Would you be available on Tuesday?", "¿Estarías disponible el martes?", "Consultar disponibilidad."],
            ["I look forward to hearing from you.", "Quedo a la espera de tu respuesta.", "Cierre cortés."]
          ],
          points: [
            "Asunto: Updated budget for Q3, no solo Question.",
            "Primer párrafo: I’m writing to… / Further to our call…",
            "Acción y fecha: Could you review the draft by Thursday?",
            "Cierre: Thank you for your help. / Please let me know if you have any questions."
          ],
          model: "Subject: Updated project schedule\n\nHi Alex,\n\nI’m writing to share the revised schedule. The delivery date has moved to 18 June. Could you please review the dates for your team by Thursday?\n\nThanks for your help.\n\nBest regards,\nMaya",
          task: "Escribe un correo breve para pedir a un colega que revise un documento antes de una fecha. Incluye asunto, motivo, petición y cierre."
        },
        {
          id: "meetings", title: "Reuniones: participar y acordar",
          goal: "Abrir una reunión, intervenir, pedir aclaraciones, resumir y confirmar acuerdos.",
          intro: "En reuniones, señala si vas a añadir una idea, hacer una pregunta o comprobar que entendiste. Al cerrar, resume responsable y fecha; decir solo We’ll follow up no deja claro quién hará qué.",
          phrases: [
            ["Shall we get started?", "¿Empezamos?", "Abrir la reunión."],
            ["Could I add something here?", "¿Puedo añadir algo?", "Pedir la palabra."],
            ["From my point of view,…", "Desde mi punto de vista,…", "Expresar una opinión."],
            ["Could you clarify what you mean by…?", "¿Podrías aclarar qué quieres decir con…?", "Pedir precisión."],
            ["So, the next step is…", "Entonces, el siguiente paso es…", "Resumir."],
            ["Who’s responsible for this, and by when?", "¿Quién se encarga y para cuándo?", "Aclarar responsable y plazo."]
          ],
          points: [
            "I agree with the proposal because…",
            "I see your point, but I’m concerned about…",
            "Could we come back to that after we review the figures?",
            "Let me check that I understood: we’ll…, and Sam will… by…"
          ],
          model: "Before we finish, let’s confirm the actions. I’ll update the budget by Wednesday. Omar will check the supplier dates by Thursday. We’ll review both items in Friday’s call.",
          task: "Simula una reunión: expresa una opinión, discrepa con cortesía y termina con dos acciones que tengan responsable y fecha."
        },
        {
          id: "calls", title: "Llamadas y videollamadas",
          goal: "Iniciar o transferir una llamada, resolver problemas de conexión y dejar un mensaje.",
          intro: "Habla con frases cortas y confirma nombres, cifras y direcciones de correo. Si hay mala conexión, dilo directamente y pide repetir la parte que no escuchaste.",
          phrases: [
            ["This is Ana from Brightline.", "Soy Ana, de Brightline.", "Identificarse al llamar."],
            ["Could I speak to Mr. Lee, please?", "¿Podría hablar con el Sr. Lee, por favor?", "Pedir comunicarte."],
            ["I’ll put you through.", "Le comunico.", "Transferir la llamada."],
            ["Would you like to leave a message?", "¿Quiere dejar un mensaje?", "Tomar recado."],
            ["You’re breaking up.", "Se corta tu voz.", "Avisar de mala conexión."],
            ["Could you say that again more slowly?", "¿Podrías repetirlo más despacio?", "Pedir repetición."]
          ],
          points: [
            "May I ask who’s calling? / May I take your number?",
            "Let me read that back to make sure I got it right.",
            "I’m afraid she’s not available at the moment.",
            "Can we reconnect in five minutes? The connection is unstable."
          ],
          model: "Good morning, Delta Services. This is Luis speaking. How can I help? — Could I speak to Nina Patel, please? — I’m afraid she’s in a meeting. Would you like to leave a message?",
          task: "Practica un diálogo de llamada en el que te identificas, solicitas hablar con alguien y dejas un mensaje con número y hora."
        }
      ]
    },
    {
      title: "3 · Presentar y resolver",
      focus: "Explica ideas y datos, atiende clientes y busca acuerdos.",
      modules: [
        {
          id: "presentations", title: "Presentaciones de trabajo",
          goal: "Organizar una presentación breve, guiar a la audiencia y responder preguntas.",
          intro: "La estructura puede ser simple: objetivo, dos o tres ideas, evidencia y conclusión. Señala cuándo cambias de sección. En cifras y porcentajes, pronuncia con calma y explica por qué importan.",
          phrases: [
            ["Today I’d like to talk about…", "Hoy me gustaría hablar de…", "Presentar el tema."],
            ["I’ll start with…", "Empezaré con…", "Presentar estructura."],
            ["Let’s move on to…", "Pasemos a…", "Cambiar de sección."],
            ["As you can see on this chart,…", "Como pueden ver en este gráfico,…", "Guiar la atención."],
            ["The main takeaway is…", "La conclusión principal es…", "Resumir."],
            ["I’d be happy to answer any questions.", "Con gusto responderé sus preguntas.", "Invitar preguntas."]
          ],
          points: [
            "Aumentos y caídas: rose by 10%; fell from 50 to 40.",
            "Comparaciones: sales were higher than last quarter.",
            "Si no sabes una respuesta: I don’t have that figure with me, but I can confirm it after the meeting.",
            "Cierra con una conclusión y un siguiente paso."
          ],
          model: "Today I’ll present the results of our customer survey. First, I’ll summarize the main findings. Then I’ll explain two improvements. The key takeaway is that response times matter most. I’ll finish with the next steps.",
          task: "Prepara una mini presentación de un minuto sobre un resultado, un problema o una propuesta y termina con una recomendación."
        },
        {
          id: "customer-service", title: "Atención a clientes",
          goal: "Entender una consulta, mostrar empatía y proponer un siguiente paso sin prometer lo que no puedes garantizar.",
          intro: "Primero confirma el problema y escucha los detalles. Discúlpate por el inconveniente cuando corresponda, explica qué puedes hacer y acuerda cuándo darás seguimiento. No inventes políticas ni garantías.",
          phrases: [
            ["How can I help you today?", "¿Cómo puedo ayudarle hoy?", "Abrir la conversación."],
            ["I understand how frustrating that must be.", "Entiendo lo frustrante que debe ser.", "Reconocer el impacto."],
            ["I’m sorry for the inconvenience.", "Lamento el inconveniente.", "Disculpa profesional."],
            ["Let me check that for you.", "Permítame revisarlo.", "Pedir tiempo para verificar."],
            ["I’ll update you by 2 p.m.", "Le informaré antes de las 2 p. m.", "Prometer un seguimiento concreto."],
            ["Is there anything else I can help with?", "¿Puedo ayudarle con algo más?", "Cerrar la consulta."]
          ],
          points: [
            "Could you tell me when the issue started?",
            "Just to confirm, the order number is…",
            "I can arrange X. I can’t confirm Y until I check with the team.",
            "Thank you for your patience while I look into this."
          ],
          model: "I’m sorry for the inconvenience. Just to confirm, your order arrived incomplete. I’ll check with our warehouse team and update you by 2 p.m. today.",
          task: "Responde a un cliente cuyo pedido llegó incompleto. Confirma el problema, muestra empatía y acuerda una hora de seguimiento."
        },
        {
          id: "negotiation", title: "Negociación y propuestas",
          goal: "Proponer opciones, explicar condiciones, negociar cambios y confirmar un acuerdo.",
          intro: "Una negociación útil separa lo que necesitas de la primera solución que propones. Pregunta por prioridades, presenta alternativas y deja claros precio, alcance, condiciones y fechas.",
          phrases: [
            ["Would you consider…?", "¿Consideraría…?", "Proponer con cortesía."],
            ["We could offer X if you can…", "Podríamos ofrecer X si ustedes pueden…", "Condicionar una propuesta."],
            ["Is there any flexibility on the delivery date?", "¿Hay flexibilidad en la fecha de entrega?", "Preguntar por margen."],
            ["That works for us, provided that…", "Nos funciona, siempre que…", "Aceptar con condición."],
            ["Could we meet halfway?", "¿Podríamos llegar a un punto medio?", "Buscar compromiso."],
            ["Let me summarize what we’ve agreed.", "Permíteme resumir lo acordado.", "Confirmar acuerdo."]
          ],
          points: [
            "Clarifica alcance: What exactly is included in the price?",
            "Ofrece alternativas: We can deliver sooner at an additional cost, or keep the current price for June.",
            "Discrepa sobre la propuesta, no sobre la persona: That timeline may be difficult for our team.",
            "Después, confirma los acuerdos por escrito."
          ],
          model: "We can reduce the setup fee if you sign a six-month agreement. Would that work for you? — It could, provided that support is included. — Let me confirm that in the revised proposal.",
          task: "Propón dos opciones para mover una fecha de entrega. Incluye una condición y una pregunta para conocer la prioridad de la otra parte."
        }
      ]
    },
    {
      title: "4 · Buscar trabajo y crecer",
      focus: "Habla de experiencia, desarrolla comunicación intercultural y fija metas propias.",
      modules: [
        {
          id: "job-search", title: "CV y búsqueda de empleo",
          goal: "Describir experiencia y logros con verbos de acción y lenguaje preciso.",
          intro: "Presenta responsabilidades y resultados con honestidad. Usa pasado para empleos anteriores y presente para el actual. No atribuyas al inglés frases o títulos que no puedas explicar en una entrevista.",
          phrases: [
            ["I have experience in…", "Tengo experiencia en…", "Experiencia general."],
            ["I was responsible for…", "Era responsable de…", "Responsabilidad anterior."],
            ["I managed a team of five.", "Gestioné un equipo de cinco personas.", "Verbo de acción y alcance."],
            ["I helped reduce processing time by 15%.", "Ayudé a reducir el tiempo de procesamiento un 15%.", "Logro medible si es verdadero."],
            ["I’m looking for a role in…", "Busco un puesto en…", "Área o tipo de trabajo."],
            ["My main strengths are…", "Mis principales fortalezas son…", "Habilidades relevantes."]
          ],
          points: [
            "CV: usa frases breves, verbos de acción y resultados verificables.",
            "I have worked in sales for three years: periodo que llega hasta ahora.",
            "I worked in sales for three years: periodo pasado terminado.",
            "Adapta el CV a la vacante sin inventar certificaciones o niveles de idioma."
          ],
          model: "Operations assistant, 2023–present. Coordinate weekly deliveries with three suppliers. Helped reduce late shipments by 12% by improving the tracking process.",
          task: "Escribe tres viñetas para un CV: una responsabilidad, una herramienta que manejas y un logro real con resultado."
        },
        {
          id: "interviews", title: "Entrevistas de trabajo",
          goal: "Responder preguntas frecuentes con ejemplos concretos y explicar tus fortalezas y áreas de desarrollo.",
          intro: "Para una pregunta conductual, organiza la respuesta así: situación, tarea, acción y resultado. Mantén el ejemplo relevante y tuyo. Si no entiendes, pide que repitan la pregunta.",
          phrases: [
            ["Could you tell me about yourself?", "¿Podrías hablarme de ti?", "Resumen profesional breve."],
            ["One of my strengths is…", "Una de mis fortalezas es…", "Fortaleza con ejemplo."],
            ["A recent example is…", "Un ejemplo reciente es…", "Introducir evidencia."],
            ["The challenge was…, so I…", "El reto era…, así que yo…", "Describir acción."],
            ["The result was…", "El resultado fue…", "Cerrar el ejemplo."],
            ["Could you repeat the last part of the question?", "¿Podrías repetir la última parte de la pregunta?", "Pedir aclaración."]
          ],
          points: [
            "Tell me about yourself: presente profesional + experiencia pertinente + qué buscas.",
            "Why do you want this role? Conecta tu experiencia con las tareas de la vacante.",
            "What would you like to improve? Menciona un área real y cómo trabajas en ella.",
            "Prepara preguntas sobre tareas, equipo, prioridades y siguientes pasos del proceso."
          ],
          model: "In my last role, our team had a high number of late orders. I was responsible for updating customers. I created a shared tracking sheet, and late deliveries fell by 10% over three months.",
          task: "Contesta en voz alta: Tell me about a time you solved a problem at work. Incluye contexto, acción propia y resultado."
        },
        {
          id: "cross-cultural", title: "Comunicación intercultural y cortesía",
          goal: "Ajustar claridad, formalidad y tono a la audiencia sin confundir cortesía con vaguedad.",
          intro: "El inglés se usa entre personas de muchas culturas y países. No hay una única forma universal de sonar profesional; observa cómo se comunica tu equipo y pregunta si tienes dudas sobre el tono esperado.",
          phrases: [
            ["Could you send me the file by noon, please?", "¿Podrías enviarme el archivo antes del mediodía, por favor?", "Petición directa con cortesía."],
            ["Would it be possible to move the meeting?", "¿Sería posible cambiar la reunión?", "Petición más indirecta."],
            ["I’m not sure I follow. Could you explain that another way?", "No estoy seguro/a de entender. ¿Podrías explicarlo de otra manera?", "Aclarar sin culpar."],
            ["Thanks for flagging this.", "Gracias por señalarlo.", "Reconocer una observación."],
            ["I may have misunderstood. Do you mean…?", "Quizá lo entendí mal. ¿Quieres decir…?", "Comprobar interpretación."],
            ["Let’s agree on the next step.", "Acordemos el siguiente paso.", "Cerrar con claridad."]
          ],
          points: [
            "Evita sarcasmo, modismos y abreviaturas con personas que no conoces bien.",
            "Usa fechas y zonas horarias explícitas al coordinar trabajo internacional.",
            "Si una expresión suena demasiado indirecta, formula la acción y el plazo con respeto.",
            "No infieras falta de interés solo por una diferencia de estilo comunicativo."
          ],
          model: "Thanks for sharing the proposal. I may have misunderstood the timeline. Could you confirm whether the launch date is 12 or 21 September? We’re in different time zones, so I’ve included mine below.",
          task: "Reescribe una petición brusca para que sea cortés y clara. Añade una fecha concreta y verifica que la persona sepa qué hacer."
        }
      ]
    }
  ];

  const phaseCopy = [
    { title: "Career foundations", focus: "Introduce yourself, describe your role, and manage everyday priorities." },
    { title: "Everyday communication", focus: "Write clear messages and take part in meetings and calls." },
    { title: "Present and solve", focus: "Present ideas, support customers, and negotiate practical solutions." },
    { title: "Career growth", focus: "Present your experience and communicate across cultures." }
  ];
  const moduleCopy = {
    introductions: {
      title: "Introductions & networking",
      outcome: "Introduce your role, describe one responsibility, and keep a professional conversation going.",
      overview: "A strong introduction is brief: name, role, one responsibility, and a question for the other person.",
      challenge: "Say your name, role, company, and one responsibility. Ask a natural follow-up question.",
      scenario: "You meet a new contact at an industry event. Introduce yourself and start a short conversation.",
      task: "Record or write a 30-second introduction. Include your role, two responsibilities, and one question.",
      checklist: ["I used a natural greeting and role phrase.", "I mentioned two relevant responsibilities.", "I asked a question to continue the conversation."]
    },
    "company-roles": {
      title: "Companies, teams & roles",
      outcome: "Describe a company, its teams, and who is responsible for key tasks.",
      overview: "Describe the organisation first, then explain teams, reporting lines, and responsibilities.",
      challenge: "Build three sentences using work in, report to, and be responsible for.",
      scenario: "A new colleague needs to know who handles invoices, orders, and technical problems.",
      task: "Describe a real or imaginary company in four sentences: industry, location, team, and responsibility.",
      checklist: ["I described the company or team clearly.", "I used work in / work as accurately.", "I explained who handles a task."]
    },
    "tasks-priorities": {
      title: "Tasks, deadlines & priorities",
      outcome: "Give a useful status update with a task, deadline, risk, and next step.",
      overview: "A clear update says what you are doing, when it is due, and what could affect delivery.",
      challenge: "Practise a short update with a task, a deadline using by, and one dependency.",
      scenario: "Two tasks are due tomorrow, but a supplier has not sent the figures you need.",
      task: "Give a weekly update with two priorities, one deadline, and one risk or dependency.",
      checklist: ["I named the highest priority.", "I used by for the deadline.", "I explained a dependency and next step."]
    },
    emails: {
      title: "Professional emails",
      outcome: "Write a concise email with a clear purpose, request, and deadline.",
      overview: "Help the reader act: use a specific subject, state the purpose first, and make one clear request.",
      challenge: "Improve an email subject and make its requested action easy to identify.",
      scenario: "A client has an old schedule. Send the revised version and confirm two dates by Thursday.",
      task: "Write a short email asking a colleague to review a document before a specific deadline.",
      checklist: ["My subject describes the topic.", "I made a clear request and deadline.", "My tone and closing fit the reader."]
    },
    meetings: {
      title: "Meetings & decisions",
      outcome: "Contribute an idea, clarify a point, and confirm actions after a meeting.",
      overview: "Signal your intention, explain your point, and close with an owner and a due date.",
      challenge: "Practise adding a point, politely disagreeing, and checking an action item.",
      scenario: "Your team disagrees about an earlier delivery. Suggest an alternative and confirm who checks the cost.",
      task: "Role-play a short meeting: share an opinion, disagree politely, and confirm two actions and owners.",
      checklist: ["I used a polite phrase to take a turn.", "I explained my concern or suggestion.", "I confirmed an owner and deadline."]
    },
    calls: {
      title: "Calls & video meetings",
      outcome: "Handle a call, ask for clarification, and pass on an accurate message.",
      overview: "Identify yourself, explain the call, and repeat important names, numbers, and dates to confirm them.",
      challenge: "Practise asking someone to repeat a detail and reading it back for confirmation.",
      scenario: "A supplier is unavailable. Leave an order number, promised date, and your contact details.",
      task: "Role-play a call: introduce yourself, ask for a contact, and leave a clear message with a time and number.",
      checklist: ["I opened the call politely.", "I stated the purpose and key details.", "I confirmed the next step."]
    },
    presentations: {
      title: "Work presentations",
      outcome: "Structure a short update, explain a result, and end with a recommendation.",
      overview: "Guide your audience: introduce the topic, highlight the main point, and connect evidence to a next step.",
      challenge: "Describe one trend and distinguish an increase by an amount from an increase to a final value.",
      scenario: "Customer satisfaction improved, but response times got worse. Your audience must decide on a pilot.",
      task: "Give a one-minute update about a result or proposal and finish with a specific recommendation.",
      checklist: ["I stated the main point first.", "I explained one result or problem.", "I ended with a clear recommendation."]
    },
    "customer-service": {
      title: "Customer service",
      outcome: "Understand a customer’s issue, show empathy, and offer a responsible next step.",
      overview: "Check the facts and impact before promising a solution. Promise an update you can control.",
      challenge: "Acknowledge a problem without blaming the customer, then ask one useful question.",
      scenario: "A customer received two of three boxes for an installation on Friday. You have not checked stock.",
      task: "Reply to the customer: confirm the issue, show empathy, and agree on an update time.",
      checklist: ["I acknowledged the customer’s concern.", "I confirmed facts before promising a result.", "I offered a clear follow-up time."]
    },
    negotiation: {
      title: "Negotiations & proposals",
      outcome: "Offer options, state conditions, and confirm the terms of an agreement.",
      overview: "Make a proposal easy to compare: describe options, conditions, dates, and what still needs approval.",
      challenge: "Make a conditional proposal using if or provided that, then check the other person’s priority.",
      scenario: "A supplier cannot deliver the full order on time. You need half now and can accept the rest later.",
      task: "Offer two delivery options, include one condition, and ask which option best meets the other person’s needs.",
      checklist: ["I offered clear options.", "I stated a condition or approval limit.", "I checked the other person’s priority."]
    },
    "job-search": {
      title: "CVs & job applications",
      outcome: "Describe relevant experience accurately and show results with clear action verbs.",
      overview: "Choose truthful details that match the vacancy. Use action verbs and evidence you can explain.",
      challenge: "Turn a general responsibility into a concise CV bullet with a clear action and result.",
      scenario: "A vacancy asks for supplier coordination, delivery records, and customer communication.",
      task: "Write three CV bullets: one responsibility, one tool, and one result you can verify.",
      checklist: ["I used an action verb.", "I matched a real experience to the role.", "I included a result I can support."]
    },
    interviews: {
      title: "Job interviews",
      outcome: "Answer interview questions with a focused example and explain your contribution.",
      overview: "Use Situation, Task, Action, Result. Keep the focus on what you did and what you learned.",
      challenge: "Plan a short STAR answer before speaking. Include one action and one result.",
      scenario: "The interviewer asks how you handled a customer problem and what you would do differently.",
      task: "Answer: “Tell me about a time you solved a problem at work.” Use context, action, and result.",
      checklist: ["I gave enough context.", "I explained my own actions.", "I stated the result or lesson."]
    },
    "cross-cultural": {
      title: "Cross-cultural communication",
      outcome: "Adapt your tone and make requests clear across teams and time zones.",
      overview: "Be courteous and specific. Confirm dates, time zones, ownership, and the action you need.",
      challenge: "Rewrite a vague or abrupt request with a clear action, deadline, and polite tone.",
      scenario: "Your team spans Mexico City, London, and Singapore. You need a review and a final approver.",
      task: "Rewrite a blunt request politely. Add an explicit deadline and confirm who approves the final version.",
      checklist: ["I used a respectful tone.", "I included an unambiguous date or time zone.", "I named the action and owner."]
    }
  };
  const courseUi = {
    home: "Course roadmap",
    homeDescription: "Build practical workplace English one step at a time. Learn a model, notice useful language, practise, then check what you remember.",
    start: "Start learning",
    resume: "Continue learning",
    phases: "Learning path",
    modules: "lessons",
    lesson: "Lesson",
    of: "of",
    learn: "Learn",
    language: "Language",
    listen: "Listen",
    apply: "Apply",
    check: "Check",
    review: "Course review",
    next: "Next step",
    previous: "Previous",
    spanishHelp: "Spanish support",
    showModel: "Show model answer",
    hideModel: "Hide model answer",
    markDone: "Mark lesson complete",
    unmarkDone: "Mark lesson incomplete"
  };

  const moduleDetails = {
    introductions: {
      explanation: "Una presentación útil no es una biografía: selecciona los datos relevantes para la conversación. Empieza con nombre y función, concreta el área o el tipo de trabajo y termina con una pregunta relacionada con la otra persona. Si estás en una feria o reunión, menciona por qué estás allí.",
      notes: ["Role: I work as a buyer. / Department: I work in procurement. / Industry: I work in the automotive industry.", "I work for + empresa; I work with + equipo/persona; I work on + proyecto o tarea.", "Para hablar de duración que continúa: I've worked here for three years. Con fecha inicial: I've worked here since 2023.", "Networking no significa vender de inmediato: escucha la respuesta y haz una pregunta de seguimiento."],
      errors: [["I am working here since 2023.", "I've worked here since 2023."], ["I am responsible of purchasing.", "I'm responsible for purchasing."], ["I work in a manager.", "I work as a manager."]],
      scenario: "Conoces en un evento a una persona de otra empresa. Tienes 30 segundos para presentarte, describir tu área sin revelar información confidencial y abrir una conversación.",
      modelNotes: ["Hi, I’m Daniela. → saludo y nombre.", "I work as a purchasing assistant at Northstar. → puesto y empresa.", "I’m based in Guadalajara, and I work closely with our suppliers. → ubicación y colaboración.", "What do you do? → pregunta abierta para ceder el turno."],
      criteria: ["Digo mi puesto o área con work as / work in.", "Explico una responsabilidad concreta, no una lista extensa.", "Termino con una pregunta natural y escucho la respuesta."]
    },
    "company-roles": {
      explanation: "Al describir una organización, presenta primero la actividad y el lugar; después explica equipos y responsabilidades. Usa report to para la línea de supervisión, in charge of para responsabilidad y deal with para el tipo de asunto o cliente que atiende un equipo.",
      notes: ["The company is based in Monterrey. → ubicación de la empresa.", "I work in Operations. I report to the regional manager. → área y supervisión.", "Our team deals with customer queries. → función habitual del equipo.", "Job title es el nombre del puesto; department es el área; responsibilities son las tareas."],
      errors: [["I work like an analyst.", "I work as an analyst. Like compara: It works like a filter."], ["I am in charge for the team.", "I'm in charge of the team."], ["I report my manager.", "I report to my manager."]],
      scenario: "Un colega nuevo pregunta cómo funciona tu empresa y a quién debe consultar sobre una factura, un pedido y un problema técnico. Explica la estructura sin asumir que conoce las siglas internas.",
      modelNotes: ["We’re a small logistics company based in Monterrey. → sector y ubicación.", "I work in operations and report to the regional manager. → función y responsable.", "Our team coordinates deliveries and deals with customer queries. → tareas con verbos concretos."],
      criteria: ["Distingo empresa, departamento, puesto y tarea.", "Uso las preposiciones correctas con responsible, in charge y report.", "Explico una ruta de contacto comprensible para una persona nueva."]
    },
    "tasks-priorities": {
      explanation: "Para coordinar trabajo, comunica cuatro datos: tarea, estado, fecha límite y dependencia o riesgo. By Friday significa que debe estar terminado a más tardar el viernes; until Friday indica que algo continúa hasta el viernes. Si un plazo es incierto, ofrece una estimación y di qué falta confirmar.",
      notes: ["I’m working on the draft. → tarea en curso; I’ve finished the draft. → resultado terminado.", "The report is due by noon on Friday. → fecha límite máxima.", "I’ll need until Monday to verify the figures. → necesito tiempo hasta el lunes.", "I can finish A today, provided that I receive the data by 2 p.m. → dependencia explícita."],
      errors: [["I will finish until Friday.", "I will finish by Friday. / I will work on it until Friday."], ["The task is delayed of two days.", "The task is two days behind schedule."], ["I have a pending with the supplier.", "I'm waiting for information from the supplier."]],
      scenario: "Tienes tres tareas, dos vencen mañana y un proveedor aún no envía datos. Tu gerente pregunta qué estará listo y qué riesgo tiene el plan.",
      modelNotes: ["The client report is due by 3 p.m. tomorrow. → obligación y plazo.", "I can send you a draft this afternoon. → entrega parcial concreta.", "I may need until tomorrow morning to check the figures. → dependencia y estimación, sin prometer de más."],
      criteria: ["Indico qué tarea está primero y por qué.", "Uso by para el vencimiento y until para duración.", "Explico la dependencia y un siguiente paso si el riesgo ocurre."]
    },
    emails: {
      explanation: "Antes de escribir, decide quién leerá el mensaje y qué acción necesitas. Pon el tema en el asunto, indica el propósito en la primera línea, separa contexto y petición, y añade fecha o archivo si hacen falta. Un mensaje puede ser cordial y breve sin sonar frío.",
      notes: ["Asunto específico: Approval needed: Q3 travel budget by 18 June.", "Petición clara: Could you review sections 2 and 3 by Thursday? No: Please look at it soon.", "Adjunto real: I've attached the revised file. Verifica que el archivo está adjunto antes de enviar.", "Follow-up: I'm following up on my message below. Evita reenviar el mismo mensaje sin indicar qué necesitas."],
      errors: [["I am agree with your email.", "I agree with your email. Agree es verbo, no requiere be."], ["Please revert back to me.", "Please get back to me. Revert significa volver a un estado; su uso con sentido de responder es regional."], ["I send you yesterday the file.", "I sent you the file yesterday."]],
      scenario: "El cliente recibió una versión anterior del calendario. Debes enviar la versión nueva, explicar qué cambió y pedir confirmación de dos fechas antes del jueves.",
      modelNotes: ["Subject: Updated delivery schedule — action needed by Thursday → tema y acción.", "I'm writing to share the revised schedule. → propósito al inicio.", "The delivery date has moved to 18 June. → cambio concreto.", "Could you confirm the two dates for your team by Thursday? → petición verificable.", "Best regards, Maya → cierre profesional neutral."],
      criteria: ["El asunto anticipa el tema y la acción.", "El correo responde quién, qué, para cuándo y por qué.", "El tono y el cierre son apropiados para esa relación."]
    },
    meetings: {
      explanation: "Una reunión eficaz tiene objetivo, turnos y acuerdos. Intervén con una frase que indique tu intención; distingue decisión de propuesta y pregunta quién será responsable. Al final, repite tarea, persona y fecha límite para que nadie salga con interpretaciones distintas.",
      notes: ["To add: Could I add one point? / To clarify: What do you mean by…? / To disagree: I see your point, but…", "I suggest + sustantivo/-ing; I suggest that we review the budget. Evita I suggest you to…", "Let's park that topic and return to it later. Indica que se retomará; anota cuándo.", "Minutes = acta/notas de reunión; action item = tarea acordada; owner = persona responsable."],
      errors: [["I have a question about of the budget.", "I have a question about the budget."], ["We discussed about the launch.", "We discussed the launch. Discuss no lleva about."], ["He will do it sometime.", "Omar will send the draft by Thursday at 3 p.m."]],
      scenario: "El equipo no está de acuerdo sobre adelantar una entrega. Aporta una preocupación, propone una alternativa y confirma quién revisará el impacto en costes.",
      modelNotes: ["I see why an earlier launch would help. → reconoce la otra perspectiva.", "I'm concerned about testing time. Could we move it forward by one week instead? → preocupación y alternativa concreta.", "Let me summarize: Priya will check the costs by Tuesday. → acuerdo con responsable y fecha."],
      criteria: ["Pido turno y aclaro sin interrumpir de forma brusca.", "Expreso desacuerdo sobre la idea, no sobre la persona.", "Cierro con responsables, acciones y fechas."]
    },
    calls: {
      explanation: "En una llamada profesional, identifica empresa y nombre, confirma el propósito y toma datos clave. En una videollamada, comprueba audio, cámara y canal alternativo. Repite en voz alta nombres, correos y cifras para verificar; la pronunciación de letras y números puede cambiar según el acento.",
      notes: ["This is Ana from Brightline. → la persona que llama se identifica; This is Ana speaking. → identifica quién atiende.", "May I ask who’s calling? es una pregunta cortés para identificar al interlocutor.", "Could you spell your surname, please? / Let me read that back to you. → confirmar datos.", "I’ll put you through = transfiero; I’ll call you back = devolveré la llamada; hold the line = no cuelgue."],
      errors: [["I want talk with Mr Lee.", "Could I speak to Mr Lee, please?"], ["I will transfer you to him? (afirmación)", "I'll put you through to him."], ["Your voice is bad.", "I'm afraid the line is breaking up. Could you repeat that?"]],
      scenario: "Llamas a un proveedor por un pedido atrasado. La persona de contacto no está disponible; debes dejar número de orden, fecha comprometida y una forma de localizarte.",
      modelNotes: ["This is Luis from Acme, calling about order 4816. → identidad y motivo.", "Could you confirm the revised delivery date? → petición concreta.", "Let me read that back: 24 June, before 5 p.m. Is that correct? → confirma cifra y plazo."],
      criteria: ["Abro la llamada con identidad y propósito.", "Pido repetición o deletreo sin fingir que entendí.", "Confirmo nombre, cifra, fecha y acción de seguimiento."]
    },
    presentations: {
      explanation: "Adapta el contenido a la audiencia: qué necesita decidir o entender. Una presentación breve puede seguir objetivo → evidencia → implicación → recomendación. No leas todas las cifras de una diapositiva; explica la tendencia, el periodo comparado y qué significa para el equipo.",
      notes: ["Sales rose by 12% from April to June. → by expresa cuánto cambió; from…to… el rango.", "Sales rose to $1.2 million. → to expresa el valor final.", "Compared with the previous quarter, costs fell by 5%. → indica base de comparación.", "Una cifra sin periodo, unidad o comparación puede ser ambigua. Di si es porcentaje, moneda, promedio o total."],
      errors: [["The sales increased of 10%.", "Sales increased by 10%."], ["The costs decreased to 5%. (si bajaron cinco puntos)", "Costs decreased by 5 percentage points. Aclara porcentaje o puntos porcentuales."], ["I will explain about the chart.", "I'll explain the chart / I'll talk about the chart."]],
      scenario: "En una actualización de tres minutos, la satisfacción mejoró, pero los tiempos de respuesta empeoraron. La audiencia debe decidir si aprueba una prueba piloto de soporte.",
      modelNotes: ["The main result is… → declara el dato importante primero.", "Response time increased from 4 to 6 hours, while satisfaction rose by 8%. → compara tendencias y periodos.", "I recommend a four-week pilot because… → conecta evidencia con decisión.", "We’ll measure response time and customer ratings. → define cómo evaluar."],
      criteria: ["Doy propósito y orden al inicio.", "Explico la tendencia con periodo, cifra y significado.", "Termino con una recomendación y un siguiente paso medible."]
    },
    "customer-service": {
      explanation: "Gestiona una consulta en este orden: escuchar → confirmar hechos → reconocer impacto → comprobar opciones autorizadas → acordar seguimiento → registrar. La empatía no implica admitir una causa que aún no conoces ni prometer una compensación sin autorización.",
      notes: ["I understand how frustrating that must be. → empatía; evita That’s not a big deal.", "Just to confirm, the box arrived open and two items are missing. → resumen comprobable.", "I can arrange a replacement once I confirm stock. → límite y condición explícitos.", "I’ll update you by 2 p.m. today. → seguimiento con hora; cumple la promesa."],
      errors: [["We guarantee it will arrive tomorrow.", "I can't confirm the delivery date until I've checked with the courier."], ["You didn't explain the issue.", "Could you tell me when the issue started?"], ["Calm down.", "I understand this has caused a problem. Let me check what I can do."]],
      scenario: "Una clienta recibió solo dos de las tres cajas y necesita las piezas para una instalación el viernes. No conoces todavía el inventario ni puedes asegurar una entrega.",
      modelNotes: ["I'm sorry the order arrived incomplete. → disculpa por el inconveniente.", "Just to confirm, one box is missing and you need it by Friday. → confirma cantidad y fecha.", "I'll check our stock and the courier options, then update you by 11 a.m. → plan verificable sin inventar solución."],
      criteria: ["Confirmo el problema, pedido y plazo que necesita el cliente.", "Reconozco el impacto y no culpo al cliente.", "Prometo una actualización que sí puedo cumplir, no un resultado no verificado."]
    },
    negotiation: {
      explanation: "Prepara intereses, límites y alternativas antes de negociar. Haz preguntas para entender qué es prioritario; después intercambia propuestas de forma condicional. Antes de cerrar, confirma alcance, precio, moneda, impuestos, fechas, soporte y qué pasa si cambia una condición.",
      notes: ["Would you consider a later delivery in exchange for a lower setup fee? → propuesta condicional.", "That could work, provided that installation is included. → aceptación condicionada.", "We can’t meet that date, but we could deliver the first batch on 10 July. → límite más alternativa.", "Let me confirm this in writing. No trates una conversación exploratoria como contrato aprobado."],
      errors: [["We can give you a discount if you will order today.", "We can give you a discount if you order today."], ["I agree your conditions.", "I agree to your conditions. / I agree with your point."], ["The price is 10,000. (sin moneda o alcance)", "The total is USD 10,000, including installation but excluding tax."]],
      scenario: "Un proveedor no puede entregar todo antes de la fecha requerida. Necesitas al menos la mitad del pedido; puedes aceptar una segunda entrega posterior si se mantiene el coste acordado.",
      modelNotes: ["Which items do you need first? → descubre la prioridad.", "Could you deliver half by 10 July and the rest by 17 July at the agreed price? → alternativa específica.", "Let's confirm quantity, dates and shipping costs in the revised quote. → verifica condiciones antes de cerrar."],
      criteria: ["Aclaro qué es imprescindible y qué se puede negociar.", "Propongo un intercambio concreto con una condición comprensible.", "Resumo el alcance, precio, responsables y fechas sin afirmar que hay aprobación formal."]
    },
    "job-search": {
      explanation: "Adapta tu CV a la vacante usando palabras que describan tareas reales. Para una viñeta, usa acción + alcance + resultado cuando tengas evidencia. No conviertas colaboración en autoría individual ni inventes porcentajes; puedes explicar contribuciones cualitativas con precisión.",
      notes: ["Coordinated weekly deliveries with three suppliers. → acción + alcance.", "Helped reduce late deliveries by 12% by updating the tracking process. → contribución y resultado comprobable.", "Currently responsible for… → puesto actual; Managed… → responsabilidad pasada.", "Skills: comfortable using Excel; experienced in customer support; fluent in… solo si puedes sostener ese nivel."],
      errors: [["I have 5 years working in sales.", "I have five years of experience in sales. / I've worked in sales for five years."], ["I am agree with customers.", "I work with customers / I agree with customers. Elige el verbo según el sentido."], ["Responsible of reports.", "Responsible for reports / responsible for preparing reports."]],
      scenario: "La vacante pide coordinar proveedores, mantener registros de entregas y responder a clientes. Elige dos experiencias verdaderas y reformúlalas para que la relación con el puesto sea evidente.",
      modelNotes: ["Coordinated weekly deliveries with three suppliers. → tarea relacionada con la vacante.", "Maintained an order-tracking sheet for 40+ shipments per month. → alcance concreto.", "Helped reduce late shipments by 12% over three months. → resultado, solo si se puede verificar."],
      criteria: ["Cada viñeta empieza con una acción específica.", "Incluyo alcance o resultado cuando es verdadero y puedo explicarlo.", "Elijo experiencias relacionadas con la vacante, no una lista genérica."]
    },
    interviews: {
      explanation: "Responde primero la pregunta, luego demuestra la respuesta con un ejemplo y termina con el resultado o aprendizaje. Para preguntas conductuales puedes usar situación → tarea → acción propia → resultado. Mantén el foco en lo que hiciste y distingue claramente el trabajo individual del trabajo del equipo.",
      notes: ["Tell me about yourself no pide toda tu historia: ofrece un resumen profesional de 45–60 segundos.", "Why this role? Relaciona dos requisitos del puesto con evidencia de tu experiencia.", "A strength without evidence is vague: I’m organized because… (ejemplo breve).",       "Para un área de mejora, describe qué haces para mejorarla; evita la falsa debilidad de decir que eres perfeccionista sin reflexión."],
      errors: [["I am working there since two years.", "I have worked there for two years."], ["My team did everything. (no explica tu aporte)", "I coordinated the schedule, while the team handled customer updates."], ["I am agree to work here.", "I’d be happy to work here. / I agree with the proposed schedule."]],
      scenario: "Te preguntan cómo gestionaste un problema con un cliente y qué harías distinto ahora. Responde con un caso real o claramente hipotético; no compartas datos privados del cliente.",
      modelNotes: ["The issue was that an order was delayed. → situación.", "I was responsible for updating the customer. → tarea.", "I checked with the carrier and sent a clear update every morning. → acciones propias.", "The customer received the order the next day, and we added an alert for future delays. → resultado y aprendizaje."],
      criteria: ["Respondo a la pregunta en la primera frase.", "Mi ejemplo tiene acción propia y resultado.", "Protejo información confidencial y no exagero mi contribución."]
    },
    "cross-cultural": {
      explanation: "La comunicación profesional cambia según país, industria y equipo. La estrategia más segura es ser respetuoso, específico y fácil de entender; confirmar supuestos y explicar siglas o referencias locales. Un pedido indirecto puede sonar cortés, pero debe dejar clara la acción y el plazo.",
      notes: ["Could you send it when you can? es cortés, pero no define un plazo. Mejor: Could you send it by 2 p.m. UTC on Tuesday?", "Use local date formats carefully: 04/05 puede ser 4 de mayo o 5 de abril. Escribe el mes con letras.", "Hi suele ser apropiado en muchos equipos; Dear puede ser más formal, no necesariamente mejor.", "Evita humor, sarcasmo y expresiones idiomáticas cuando el tema es delicado o el equipo es internacional."],
      errors: [["As you should know,… (puede sonar acusatorio)", "For context, the deadline is Friday. Please let me know if you need the background."], ["We need it ASAP. (prioridad ambigua)", "Could you send it by 3 p.m. Singapore time today? It's needed for the client review."], ["I don't understand your English.", "I may have missed that. Could you say the last point another way?"]],
      scenario: "Un equipo está repartido entre Ciudad de México, Londres y Singapur. Debes pedir una revisión, fijar un plazo inequívoco y confirmar quién aprueba la versión final.",
      modelNotes: ["Could you review the attached draft by 3 p.m. Singapore time on Tuesday, 14 July? → acción, zona horaria y fecha sin ambigüedad.", "Please flag any legal changes in the comments. → especifica qué tipo de revisión necesitas.", "I’ll consolidate the feedback and send the final version to Mei for approval. → aclara el siguiente paso."],
      criteria: ["Especifico fecha, hora y zona horaria.", "Explico siglas, contexto y quién decide.", "Pido aclaración sin juzgar el acento, idioma o cultura de la otra persona."]
    }
  };

  const coreLanguageFormulas = [
    ["Word order", "Subject + verb + object + place + time", "We sent the report to the client yesterday.", "Build clear statements. Place and time can move to the beginning for emphasis."],
    ["Be: statements, negatives, questions", "S + am/is/are (+ not) + complement; Am/Is/Are + S ...?", "The figures are ready. / The figures aren’t ready. / Are the figures ready?", "Use be for identity, role, state, location, and continuous verb forms."],
    ["Present simple", "S + base verb (+ -s for he/she/it); do/does + not; Do/Does + S + base verb?", "She checks every invoice. / She doesn’t check orders. / Does she check invoices?", "Use for routines, responsibilities, facts, and timetables."],
    ["Present continuous", "S + am/is/are (+ not) + verb-ing; Am/Is/Are + S + verb-ing?", "I’m reviewing the proposal. / I’m not working on that file. / Are you joining the call?", "Use for actions happening now, temporary situations, and arranged future plans."],
    ["Past simple", "S + past verb; S + did not + base verb; Did + S + base verb?", "We met the supplier. / We didn’t sign the contract. / Did you send the invoice?", "Use for completed actions at a finished past time. After did/didn’t, use the base verb."],
    ["Past continuous", "S + was/were (+ not) + verb-ing; Was/Were + S + verb-ing?", "I was speaking to a client when you called. / Were they waiting?", "Use for an action in progress at a past moment or as background to another event."],
    ["Present perfect", "S + have/has (+ not) + past participle; Have/Has + S + past participle?", "I’ve sent the update. / She hasn’t replied yet. / Have they approved the budget?", "Use for experience, recent results, and situations connected to now. Use for + duration; since + starting point."],
    ["Present perfect or past simple", "have/has + past participle (no finished time); past verb + finished time", "I’ve worked here for three years. / I started in 2023.", "Use present perfect when the period continues or the time is not stated; use past simple with yesterday, last year, or a finished date."],
    ["Future: will", "S + will (+ not) + base verb; Will + S + base verb?", "I’ll call the supplier. / We won’t change the price. / Will you send the draft?", "Use for decisions made now, offers, promises, and predictions."],
    ["Future: going to", "S + am/is/are going to (+ not) + base verb", "We’re going to review the contract next week.", "Use for intentions and plans already decided, or predictions based on present evidence."],
    ["Arranged future", "S + am/is/are + verb-ing + future time", "I’m meeting the client at 10 tomorrow.", "Use the present continuous for a fixed arrangement, especially when time and place are agreed."],
    ["Ability and possibility", "can/could/may/might + base verb", "I can prepare the summary. / Could we move the meeting? / It might take two days.", "A modal is followed by the base verb without to. Could and may can make requests more polite."],
    ["Advice and obligation", "should + base verb; must / have to + base verb", "You should save a copy. / We have to meet the deadline.", "Should gives advice. Must and have to express obligation; have to changes form: she has to, we had to."],
    ["No obligation or prohibition", "don’t/doesn’t have to + base verb; mustn’t + base verb", "You don’t have to attend both sessions. / You mustn’t share client data.", "Don’t have to means not necessary. Mustn’t means prohibited; they are not interchangeable."],
    ["Polite requests", "Could/Would you + base verb ...?; Would you mind + verb-ing ...?", "Could you check the figures? / Would you mind sending the revised file?", "Use could or would for courteous requests. After would you mind, use the -ing form."],
    ["Wh- questions", "Wh-word + auxiliary + subject + base verb?; Wh-word + be + subject ...?", "When did the order arrive? / Where is the signed copy?", "Use do/does/did with most main verbs; move be before the subject. Keep the main verb in base form after did."],
    ["Indirect questions", "Could you tell me / Do you know + question word + subject + verb?", "Could you tell me when the report is due? / Do you know where the client works?", "Use statement word order after the opening phrase: not “Could you tell me when is it due?”"],
    ["Comparatives and superlatives", "short adj + -er than; more + long adj + than; the + -est / most + adj", "This option is cheaper than express delivery. / It’s the most reliable supplier.", "Use than to compare two things. Use the before a superlative; irregular forms include better/best and worse/worst."],
    ["Zero and first conditionals", "if + present, present (general result); if + present, will + base verb (real future)", "If a customer calls, we record the request. / If the data arrives today, we’ll finish by Friday.", "Do not normally use will in the if-clause for a real future condition."],
    ["Second conditional", "if + past simple, would/could + base verb", "If we had more time, we could test another option.", "Use for hypothetical or unlikely situations. The past form does not necessarily refer to past time."],
    ["Passive voice", "subject + be (right tense) + past participle", "The order was delivered on Monday. / The report is checked every week.", "Use when the action or result matters more than who did it. Add by + agent only when useful."],
    ["Verb patterns: -ing or to", "enjoy/avoid/finish + verb-ing; need/plan/agree + to + base verb", "We avoid sharing private data. / They plan to expand the team.", "Learn the pattern with each verb. After a preposition, use a noun or verb-ing: interested in learning."],
    ["Relative clauses", "person + who/that + verb; thing + which/that + verb", "The colleague who manages payroll is away. / The form that you requested is ready.", "Use a relative clause to identify or add information about a person or thing."],
    ["Reported speech", "said (that) + clause; told + person + (that) + clause", "She said (that) the meeting was postponed. / He told me (that) the client had replied.", "Use said without an object; use told + person. Tense often moves back when reporting past speech."],
    ["Countable and uncountable nouns", "many/few + plural countable; much/little + uncountable; some/any + both", "We have a few options and little time. / Do you have any information?", "Use many with countable plural nouns and much with uncountable nouns. Information, advice, and equipment are usually uncountable."],
    ["Time and deadline prepositions", "at + clock time; on + day/date; in + month/year; by + deadline; for + duration; since + start", "at 9 a.m.; on Tuesday; in June; by Friday; for two weeks; since Monday", "By gives the latest finishing time; until says an action or state continues to a time."],
    ["Adverbs of frequency", "subject + usually/often/sometimes + main verb; be + usually/often/sometimes", "We usually meet on Mondays. / The manager is often available.", "Put the adverb before most main verbs, but after be."],
    ["There is / there are", "there is + singular/uncountable; there are + plural", "There is a delay in the schedule. / There are two items to confirm.", "Use to say that something exists. In the past: there was / there were."],
    ["Common workplace verb patterns", "work on; work with; deal with; depend on; follow up on; be responsible for + noun/-ing", "I’m working on the budget, dealing with a request, and following up on the invoice.", "Learn the verb together with its preposition. After a preposition, use a noun or verb-ing."]
  ];

  const languageToolkits = {
    introductions: {
      formulas: [
        ["Puesto", "I work as + puesto", "I work as a project coordinator."],
        ["Área o sector", "I work in + departamento / sector", "I work in the finance department."],
        ["Responsabilidad", "I’m responsible for + sustantivo / verbo-ing", "I’m responsible for checking supplier invoices."],
        ["Experiencia que continúa", "I’ve worked + for + duración / since + inicio", "I’ve worked here for three years. / since 2023."],
        ["Pregunta para conocer a alguien", "What kind of + sustantivo + do you + verbo?", "What kind of projects do you work on?"]
      ],
      vocabulary: [
        ["role", "puesto o función", "My role involves coordinating deliveries."],
        ["department", "departamento", "The finance department checks the budget."],
        ["colleague", "colega", "I’ll introduce you to my colleague."],
        ["client", "cliente", "I work with clients in Europe."],
        ["supplier", "proveedor", "We have a new supplier this year."],
        ["based in", "con sede en / ubicado en", "Our team is based in Guadalajara."],
        ["specialize in", "especializarse en", "I specialize in customer support."],
        ["work closely with", "colaborar estrechamente con", "I work closely with the sales team."],
        ["job title", "nombre del puesto", "My job title is assistant accountant."],
        ["coworker", "compañero/a de trabajo", "A coworker showed me how to use the system."],
        ["team member", "integrante del equipo", "Each team member has a different responsibility."],
        ["supervisor", "supervisor/a", "Please ask your supervisor before changing the schedule."],
        ["department head", "jefe/a de departamento", "The department head will join our meeting."],
        ["work experience", "experiencia laboral", "I have work experience in retail and logistics."],
        ["take responsibility for", "hacerse cargo de", "I take responsibility for preparing the weekly figures."],
        ["deal with clients", "atender / tratar con clientes", "I deal with clients by email and phone."],
        ["be part of a team", "formar parte de un equipo", "I’m part of a team that supports new customers."],
        ["work environment", "entorno laboral", "A friendly work environment helps people share ideas."],
        ["full-time", "de tiempo completo", "She has a full-time position in the finance team."],
        ["part-time", "de medio tiempo", "He works part-time while studying."]
      ],
      linkers: [
        ["and", "añadir información", "I work in logistics, and I coordinate deliveries."],
        ["also", "añadir otra responsabilidad", "I also support the purchasing team."],
        ["because", "explicar por qué", "I enjoy my role because I meet different clients."],
        ["for example", "dar un ejemplo", "I work with suppliers, for example, local transport companies."],
        ["but", "contrastar dos ideas", "I’m based in Mexico, but I work with teams abroad."],
        ["so", "mostrar resultado", "I speak with clients every day, so clear communication is important."]
      ]
    },
    "company-roles": {
      formulas: [
        ["Actividad de la empresa", "We are a + tamaño / tipo + company that + verbo", "We are a small company that makes office furniture."],
        ["Ubicación", "The company is based in + lugar", "The company is based in Monterrey."],
        ["Jerarquía", "I report to + persona / cargo", "I report to the operations manager."],
        ["Responsabilidad", "Our team is in charge of + sustantivo / verbo-ing", "Our team is in charge of processing orders."],
        ["Función del equipo", "Our team deals with + tema / cliente", "Our team deals with delivery problems."]
      ],
      vocabulary: [
        ["head office", "oficina central", "The head office is in London."],
        ["branch", "sucursal", "We opened a branch near the airport."],
        ["staff", "personal / empleados", "The company has 80 members of staff."],
        ["manager", "gerente / responsable", "Ask your manager to approve the request."],
        ["operations", "operaciones", "She works in operations."],
        ["in charge of", "a cargo de", "Luis is in charge of the support team."],
        ["report to", "reportar a / depender de", "I report to the regional director."],
        ["deal with", "encargarse de / tratar", "The help desk deals with technical questions."],
        ["human resources (HR)", "recursos humanos", "HR organizes recruitment and staff training."],
        ["accounting", "contabilidad", "Accounting prepares the monthly financial report."],
        ["sales department", "departamento de ventas", "The sales department contacts potential clients."],
        ["customer service", "atención al cliente", "Customer service handles questions about orders."],
        ["warehouse", "almacén", "The warehouse stores products before delivery."],
        ["supervisor", "supervisor/a", "Ask your supervisor to approve the change."],
        ["director", "director/a", "The director will explain the new company goals."],
        ["team leader", "líder de equipo", "Our team leader assigns tasks every Monday."],
        ["division", "división / área grande", "The company has a division for international sales."],
        ["workforce", "plantilla / fuerza laboral", "The company is expanding its workforce."],
        ["be responsible for", "ser responsable de", "Our team is responsible for checking each order."],
        ["coordinate with", "coordinarse con", "We coordinate with the delivery team every morning."]
      ],
      linkers: [
        ["first", "ordenar una explicación", "First, contact the reception team."],
        ["while", "contrastar funciones simultáneas", "Sales finds new clients, while operations manages orders."],
        ["because", "explicar una función", "Contact HR because they handle recruitment."],
        ["for example", "dar un ejemplo concreto", "Several teams support clients, for example, sales and service."],
        ["however", "contrastar información", "The branch is small; however, it serves three regions."],
        ["therefore", "mostrar consecuencia", "The manager is away; therefore, contact the deputy."]
      ]
    },
    "tasks-priorities": {
      formulas: [
        ["Tarea actual", "I’m working on + tarea", "I’m working on the monthly report."],
        ["Plazo máximo", "be due by + fecha / hora", "The report is due by 3 p.m. on Friday."],
        ["Duración hasta un momento", "work / wait + until + fecha / hora", "I’ll work on the figures until noon."],
        ["Predicción o compromiso", "I’ll + verbo base + by + plazo", "I’ll send you the draft by Thursday."],
        ["Dependencia", "I can + acción + if / provided that + condición", "I can finish today if I receive the data by 2 p.m."]
      ],
      vocabulary: [
        ["deadline", "fecha límite", "The deadline for the proposal is Tuesday."],
        ["priority", "prioridad", "The customer update is my top priority."],
        ["on schedule", "según lo previsto", "The project is still on schedule."],
        ["behind schedule", "retrasado", "The order is two days behind schedule."],
        ["progress", "avance", "We’ve made good progress this week."],
        ["pending", "pendiente", "One approval is still pending."],
        ["dependency", "dependencia", "The delivery depends on the supplier’s figures."],
        ["estimate", "estimación", "My estimate is two working days."],
        ["workload", "carga de trabajo", "My workload is higher at the end of the month."],
        ["task", "tarea", "I have one more task to finish today."],
        ["to-do list", "lista de tareas pendientes", "I update my to-do list before each meeting."],
        ["milestone", "hito / etapa importante", "The first project milestone is due next week."],
        ["deliverable", "entregable / resultado acordado", "The final report is the main deliverable."],
        ["to be on track", "ir según lo previsto", "We are on track to finish by Friday."],
        ["to fall behind", "quedarse retrasado", "We may fall behind if the data arrives late."],
        ["to reschedule", "reprogramar", "We need to reschedule the review for Thursday."],
        ["to postpone", "posponer", "They postponed the launch until next month."],
        ["available", "disponible", "I’m available to review the draft this afternoon."],
        ["to allocate time", "asignar / reservar tiempo", "We need to allocate time for quality checks."],
        ["to meet a deadline", "cumplir una fecha límite", "The team worked together to meet the deadline."]
      ],
      linkers: [
        ["first", "indicar prioridad", "First, I’ll finish the client report."],
        ["then", "señalar el siguiente paso", "Then I’ll check the figures with Finance."],
        ["because", "explicar una prioridad", "This task comes first because the client needs an update."],
        ["if", "introducir una condición", "If the data arrives today, we can meet the deadline."],
        ["so", "explicar el resultado", "The supplier is late, so the delivery may move to Friday."],
        ["although", "reconocer un contraste", "Although we have limited time, I can send a draft today."]
      ]
    },
    emails: {
      formulas: [
        ["Motivo", "I’m writing to + verbo base", "I’m writing to confirm the delivery date."],
        ["Petición cortés", "Could you please + verbo base + ...?", "Could you please review the attached schedule?"],
        ["Petición indirecta", "Would you be able to + verbo base + ...?", "Would you be able to reply by Thursday?"],
        ["Adjunto enviado", "I’ve attached + documento", "I’ve attached the revised budget."],
        ["Seguimiento", "I’m following up on + sustantivo", "I’m following up on my message about the invoice."]
      ],
      vocabulary: [
        ["subject line", "asunto del correo", "Use a clear subject line: Delivery dates for June."],
        ["attachment", "archivo adjunto", "Please see the attachment for the updated prices."],
        ["draft", "borrador", "I’ll send you a draft this afternoon."],
        ["request", "solicitud / petición", "We received your request for a new account."],
        ["confirm", "confirmar", "Could you confirm the meeting time?"],
        ["reply", "responder", "Please reply by the end of the day."],
        ["forward", "reenviar", "I’ll forward the invoice to the finance team."],
        ["as soon as possible", "lo antes posible", "Please send the signed form as soon as possible."],
        ["recipient", "destinatario/a", "Check the recipient’s name before you send the email."],
        ["sender", "remitente", "The sender included a phone number in the message."],
        ["greeting", "saludo inicial", "Use a suitable greeting for the person you are writing to."],
        ["sign-off", "despedida / cierre del correo", "Best regards is a common professional sign-off."],
        ["to attach", "adjuntar", "Please attach the signed form to your reply."],
        ["to clarify", "aclarar", "I’m writing to clarify the payment date."],
        ["to acknowledge", "confirmar recepción / reconocer", "Please acknowledge receipt of the updated order."],
        ["to approve", "aprobar", "The manager needs to approve the final budget."],
        ["to request", "solicitar", "We’d like to request a copy of the invoice."],
        ["to remind", "recordar", "This is a reminder to submit your expenses by Friday."],
        ["to be available", "estar disponible", "Would you be available for a short call tomorrow?"],
        ["in response to", "en respuesta a", "In response to your question, the price includes delivery."]
      ],
      linkers: [
        ["first", "organizar la información", "First, I’m writing to confirm the new delivery date."],
        ["also", "añadir una petición", "I’ve also attached the revised order."],
        ["because", "dar contexto", "I’m following up because we need approval before Friday."],
        ["however", "presentar un cambio", "The price is unchanged; however, the delivery date is different."],
        ["therefore", "explicar una acción", "The form is incomplete; therefore, we can’t process it yet."],
        ["once", "indicar cuándo ocurrirá algo", "Once you approve the draft, I’ll send it to the client."]
      ]
    },
    meetings: {
      formulas: [
        ["Pedir la palabra", "Could I + verbo base + ...?", "Could I add one point before we decide?"],
        ["Expresar opinión", "In my view, + oración", "In my view, we need more time to test the update."],
        ["Proponer una acción", "I suggest + verbo-ing / that + sujeto + verbo", "I suggest checking the figures. / I suggest that we check them."],
        ["Expresar inquietud", "I’m concerned about + sustantivo / verbo-ing", "I’m concerned about changing the date."],
        ["Confirmar acuerdo", "So, + persona + will + acción + by + plazo", "So, Priya will send the revised plan by Thursday."]
      ],
      vocabulary: [
        ["agenda", "orden del día", "The first item on the agenda is the launch date."],
        ["minutes", "acta / notas de la reunión", "I’ll share the minutes after the meeting."],
        ["action item", "tarea acordada", "The first action item is to check the costs."],
        ["owner", "responsable de una tarea", "Who is the owner of this action item?"],
        ["deadline", "fecha límite", "Let’s agree on a deadline before we finish."],
        ["attendee", "asistente", "All attendees will receive the notes."],
        ["raise a point", "plantear un punto", "I’d like to raise a point about the budget."],
        ["follow up", "dar seguimiento", "I’ll follow up with the supplier tomorrow."],
        ["chairperson", "moderador/a o presidente/a de la reunión", "The chairperson opened the meeting at 10 a.m."],
        ["to take notes", "tomar notas", "Could you take notes during the client meeting?"],
        ["to make a decision", "tomar una decisión", "We need to make a decision before the end of the week."],
        ["to reach an agreement", "llegar a un acuerdo", "The two teams reached an agreement on the launch date."],
        ["to bring up a topic", "mencionar / plantear un tema", "I’d like to bring up the training plan."],
        ["to interrupt", "interrumpir", "Sorry to interrupt, but we have a time-sensitive question."],
        ["to clarify a point", "aclarar un punto", "Could you clarify a point about the delivery cost?"],
        ["to disagree", "estar en desacuerdo", "I understand your view, although I disagree with the timeline."],
        ["to agree on", "ponerse de acuerdo sobre", "We agreed on a date for the next review."],
        ["to assign a task", "asignar una tarea", "The manager assigned each task to a team member."],
        ["to confirm an action", "confirmar una acción", "Let’s confirm who will contact the supplier."],
        ["to wrap up", "concluir / cerrar", "Let’s wrap up by reviewing the action items."]
      ],
      linkers: [
        ["to begin with", "abrir una explicación", "To begin with, let’s review the customer feedback."],
        ["in addition", "sumar un punto", "In addition, we need to confirm the delivery cost."],
        ["however", "introducir una objeción", "The idea could save time; however, it may increase costs."],
        ["for this reason", "explicar una recomendación", "For this reason, I suggest a short trial."],
        ["for example", "respaldar una idea", "For example, we could test it with one regional team."],
        ["to sum up", "cerrar y resumir", "To sum up, we’ll test the plan and review it next month."]
      ]
    },
    calls: {
      formulas: [
        ["Contestar", "Good morning, + empresa. This is + nombre + speaking.", "Good morning, Delta Services. This is Luis speaking."],
        ["Preguntar por alguien", "Could I speak to + nombre, please?", "Could I speak to Nina Patel, please?"],
        ["Ofrecer una alternativa", "Would you like to + verbo base + ...?", "Would you like to leave a message?"],
        ["Pedir que repitan", "Could you repeat / spell + ...?", "Could you spell your last name, please?"],
        ["Confirmar datos", "Let me read that back: + dato. Is that correct?", "Let me read that back: 24 June at 3 p.m. Is that correct?"]
      ],
      vocabulary: [
        ["caller", "persona que llama", "The caller asked for the sales manager."],
        ["extension", "extensión telefónica", "You can reach me on extension 204."],
        ["voicemail", "buzón de voz", "Please leave a message on my voicemail."],
        ["hold", "esperar en la línea", "Could you hold for a moment, please?"],
        ["transfer", "transferir una llamada", "I’ll transfer you to customer support."],
        ["signal", "señal", "The signal is weak in this room."],
        ["get back to someone", "devolver la llamada / responder", "I’ll get back to you after the meeting."],
        ["take a message", "tomar un recado", "Can I take a message for her?"],
        ["dial", "marcar un número", "Please dial 0 to speak to reception."],
        ["landline", "teléfono fijo", "The office landline is busy at the moment."],
        ["mobile number", "número de celular", "Could I have your mobile number, please?"],
        ["to put someone through", "comunicar / transferir la llamada", "I’ll put you through to the sales department."],
        ["to call back", "volver a llamar", "The manager is unavailable but can call you back at 4."],
        ["to speak up", "hablar más fuerte", "Could you speak up? The connection is not very clear."],
        ["to cut off", "cortarse la llamada", "We were cut off before I could confirm the address."],
        ["to be available", "estar disponible", "Is Ms. Lee available to take a call?" ],
        ["to leave a voicemail", "dejar un mensaje de voz", "Please leave a voicemail after the tone."],
        ["busy line", "línea ocupada", "I’m sorry, but the line is busy right now."],
        ["wrong number", "número equivocado", "I think you have the wrong number."],
        ["to confirm the spelling", "confirmar cómo se escribe", "Could you confirm the spelling of your company name?"]
      ],
      linkers: [
        ["just a moment", "pedir que espere", "Just a moment while I check whether she’s available."],
        ["unfortunately", "comunicar una dificultad", "Unfortunately, the line is busy at the moment."],
        ["so", "confirmar el siguiente paso", "So, I’ll ask him to call you this afternoon."],
        ["if", "ofrecer una opción", "If you prefer, I can transfer you to the service desk."],
        ["because", "explicar un problema", "I’m calling because we haven’t received the order number."],
        ["then", "continuar la secuencia", "I’ll check the account, then I’ll call you back."]
      ]
    },
    presentations: {
      formulas: [
        ["Presentar el tema", "Today I’d like to + verbo base + ...", "Today I’d like to present our customer survey results."],
        ["Guiar la estructura", "First, ... Then, ... Finally, ...", "First, I’ll explain the results. Then, I’ll suggest two changes."],
        ["Describir un cambio", "increased / fell by + cantidad; from + valor to + valor", "Sales rose by 8%, from 100 to 108 units."],
        ["Interpretar una gráfica", "The chart shows + sustantivo / how + oración", "The chart shows how response times changed."],
        ["Recomendar", "We should + verbo base + because + razón", "We should add staff because response times are increasing."]
      ],
      vocabulary: [
        ["audience", "público / audiencia", "Our audience includes clients and suppliers."],
        ["slide", "diapositiva", "This slide shows the main results."],
        ["chart", "gráfica", "The chart compares sales in two regions."],
        ["figure", "cifra", "The latest figure is 2,400 orders."],
        ["increase", "aumento / aumentar", "We saw an increase in online requests."],
        ["fall", "caída / caer", "Costs fell by 5% last quarter."],
        ["takeaway", "idea principal / conclusión clave", "The main takeaway is that clients want faster updates."],
        ["recommendation", "recomendación", "My recommendation is to run a short trial."],
        ["opening", "introducción / apertura", "The opening explains why this topic matters."],
        ["overview", "resumen general", "I’ll begin with a brief overview of the project."],
        ["key point", "punto clave", "The key point is that customers want faster delivery."],
        ["data", "datos", "The data comes from last quarter’s customer survey."],
        ["percentage", "porcentaje", "The percentage of online orders increased this year."],
        ["to rise", "subir / aumentar", "Sales rose by 12% in the north region."],
        ["to drop", "bajar / disminuir", "The number of complaints dropped in May."],
        ["to compare", "comparar", "This chart compares results from two different periods."],
        ["to represent", "representar", "The blue line represents monthly sales."],
        ["trend", "tendencia", "The trend shows a steady increase in demand."],
        ["average", "promedio", "The average delivery time is three days."],
        ["to highlight", "destacar", "I’d like to highlight one important result."]
      ],
      linkers: [
        ["first", "organizar la presentación", "First, I’ll explain the purpose of the survey."],
        ["next", "pasar al siguiente punto", "Next, let’s look at the results by region."],
        ["whereas", "comparar dos datos", "Online sales increased, whereas store sales stayed stable."],
        ["because", "explicar una cifra", "Response times improved because we changed the booking system."],
        ["as a result", "mostrar consecuencia", "As a result, fewer customers had to call twice."],
        ["in conclusion", "cerrar la exposición", "In conclusion, a short trial could improve response times."]
      ]
    },
    "customer-service": {
      formulas: [
        ["Mostrar empatía", "I understand + how / that + oración", "I understand how frustrating the delay is."],
        ["Confirmar el problema", "Just to confirm, + dato del problema, is that right?", "Just to confirm, the package arrived without the charger, is that right?"],
        ["Preguntar por detalles", "Could you tell me + wh-question?", "Could you tell me when the issue started?"],
        ["Explicar lo que sí puedes hacer", "I can + acción; I’ll + acción + by + hora", "I can check the order, and I’ll update you by 2 p.m."],
        ["Expresar una condición", "I can confirm + dato + once / after + oración", "I can confirm the replacement once I speak to our warehouse team."]
      ],
      vocabulary: [
        ["issue", "problema / asunto", "I’m sorry you’re having an issue with the order."],
        ["inconvenience", "inconveniente", "We apologize for the inconvenience."],
        ["refund", "reembolso", "I’ll check whether the order qualifies for a refund."],
        ["replacement", "reemplazo", "We can arrange a replacement for the damaged item."],
        ["order number", "número de pedido", "Could you give me your order number?"],
        ["resolve", "resolver", "I’ll do my best to resolve this today."],
        ["update", "actualización / informar", "I’ll send you an update this afternoon."],
        ["patience", "paciencia", "Thank you for your patience while I check."],
        ["complaint", "queja / reclamación", "We received a complaint about a late delivery."],
        ["damaged", "dañado/a", "I’m sorry the item arrived damaged."],
        ["missing item", "artículo faltante", "The customer reported a missing item in the package."],
        ["delivery", "entrega", "Your delivery is scheduled for Thursday."],
        ["tracking number", "número de seguimiento", "I can check the package with its tracking number."],
        ["available", "disponible", "The replacement part is available in our warehouse."],
        ["to investigate", "investigar / revisar a fondo", "We’re investigating what happened to the order."],
        ["to apologize", "disculparse", "We apologize for the delay in responding."],
        ["to arrange", "organizar / gestionar", "I can arrange a collection for the damaged item."],
        ["to replace", "reemplazar", "We can replace the item once we verify the order."],
        ["policy", "política / norma", "I’ll check our returns policy before I confirm."],
        ["to escalate", "escalar un caso a un nivel superior", "I’ll escalate this issue to the service manager."]
      ],
      linkers: [
        ["first", "indicar la primera acción", "First, I’ll check the order details."],
        ["because", "explicar la causa", "I’m checking the tracking because the package is late."],
        ["so", "explicar una consecuencia", "The item is unavailable, so I’ll check another option."],
        ["although", "reconocer un límite", "Although I can’t confirm a refund yet, I can check the policy."],
        ["once", "indicar cuándo sigue la acción", "Once I speak to the warehouse, I’ll call you back."],
        ["in the meantime", "proponer algo mientras tanto", "In the meantime, please keep the damaged item and its packaging."]
      ]
    },
    negotiation: {
      formulas: [
        ["Proponer con cortesía", "Would you consider + sustantivo / verbo-ing?", "Would you consider extending the delivery date?"],
        ["Oferta condicionada", "We could + acción + if / provided that + condición", "We could lower the price if you order 500 units."],
        ["Comparar opciones", "Option A is + comparativo + than option B", "The express option is faster than standard delivery."],
        ["Preguntar por flexibilidad", "Is there any flexibility on + sustantivo?", "Is there any flexibility on the payment date?"],
        ["Confirmar el acuerdo", "We’ve agreed to + verbo base + by / on + fecha", "We’ve agreed to deliver the first order by 18 June."]
      ],
      vocabulary: [
        ["offer", "oferta", "We can make an offer for the full order."],
        ["terms", "condiciones", "Could you explain the payment terms?"],
        ["scope", "alcance", "Let’s confirm the scope before we discuss the price."],
        ["quantity", "cantidad", "The price depends on the quantity."],
        ["delivery date", "fecha de entrega", "Can we confirm the delivery date today?"],
        ["flexibility", "flexibilidad / margen", "Is there flexibility on the contract length?"],
        ["compromise", "acuerdo intermedio", "We may be able to find a compromise."],
        ["in exchange for", "a cambio de", "We can offer a discount in exchange for a longer contract."],
        ["price", "precio", "Could you confirm whether the price includes delivery?"],
        ["discount", "descuento", "We can offer a 5% discount on larger orders."],
        ["cost", "costo", "The total cost depends on the delivery option."],
        ["payment terms", "condiciones de pago", "Our standard payment terms are 30 days."],
        ["contract", "contrato", "We’ll send the contract after both sides approve the terms."],
        ["agreement", "acuerdo", "Let’s put the agreement in writing."],
        ["delivery charge", "cargo de envío", "The delivery charge is not included in the quote."],
        ["bulk order", "pedido al por mayor", "The price is lower for a bulk order."],
        ["to negotiate", "negociar", "We can negotiate the delivery schedule."],
        ["to propose", "proponer", "I’d like to propose a different payment date."],
        ["to accept an offer", "aceptar una oferta", "They accepted our offer with one change."],
        ["to reject an offer", "rechazar una oferta", "We had to reject the offer because the cost was too high."]
      ],
      linkers: [
        ["if", "introducir una condición", "We can reduce the fee if you sign a six-month contract."],
        ["provided that", "aceptar con una condición", "That works for us, provided that support is included."],
        ["however", "marcar un límite", "We can shorten the delivery time; however, the price will increase."],
        ["instead", "proponer otra opción", "We can’t deliver on Monday; instead, we can deliver on Wednesday."],
        ["on the other hand", "comparar alternativas", "The first option is faster; on the other hand, it costs more."],
        ["therefore", "concluir una propuesta", "The dates are confirmed; therefore, we can prepare the contract."]
      ]
    },
    "job-search": {
      formulas: [
        ["Experiencia que continúa", "I’ve worked in / as + área / puesto + for / since ...", "I’ve worked in customer service for four years."],
        ["Experiencia terminada", "I worked as + puesto + from ... to ...", "I worked as an assistant from 2021 to 2024."],
        ["Responsabilidad", "I was responsible for + sustantivo / verbo-ing", "I was responsible for preparing weekly reports."],
        ["Logro", "I + verbo de acción + resultado + by + cantidad", "I reduced delivery errors by 10%."],
        ["Objetivo profesional", "I’m interested in + sustantivo / verbo-ing", "I’m interested in developing my project skills."]
      ],
      vocabulary: [
        ["vacancy", "vacante", "I’m applying for the sales assistant vacancy."],
        ["apply for", "postularse a", "She plans to apply for a role in logistics."],
        ["skills", "habilidades", "The role requires strong communication skills."],
        ["experience", "experiencia", "I have experience with inventory systems."],
        ["achievement", "logro", "Describe one achievement from your last role."],
        ["responsibilities", "responsabilidades", "My responsibilities included training new staff."],
        ["qualification", "título / cualificación", "The job requires a business qualification."],
        ["strength", "fortaleza", "Attention to detail is one of my strengths."],
        ["cover letter", "carta de presentación", "I included a short cover letter with my application."],
        ["CV / résumé", "currículum", "Please attach your CV to the application form."],
        ["job advert", "anuncio de empleo", "The job advert lists the required experience."],
        ["employer", "empleador", "My previous employer can provide a reference."],
        ["candidate", "candidato/a", "The employer interviewed four candidates."],
        ["application form", "formulario de solicitud", "Complete the application form before Friday."],
        ["reference", "referencia laboral", "They asked for a reference from my last manager."],
        ["to hire", "contratar", "The company plans to hire two technicians."],
        ["to manage", "gestionar / dirigir", "I managed the weekly stock report."],
        ["to improve", "mejorar", "I improved the way we recorded customer requests."],
        ["to achieve", "lograr", "We achieved our monthly target in June."],
        ["to train", "capacitar", "I helped train three new team members."]
      ],
      linkers: [
        ["currently", "describir el trabajo actual", "I currently coordinate a team of four."],
        ["previously", "describir experiencia anterior", "Previously, I worked in a hotel."],
        ["for example", "aportar evidencia", "I’m organized; for example, I manage weekly schedules."],
        ["as a result", "mostrar el impacto", "I updated the checklist; as a result, we made fewer errors."],
        ["in addition", "añadir una habilidad", "In addition, I can use Excel and stock-control software."],
        ["because", "relacionar experiencia y puesto", "I’m interested in this role because it includes client contact."]
      ]
    },
    interviews: {
      formulas: [
        ["Presentación breve", "I’m a + puesto + with + duración / tipo de experiencia", "I’m a purchasing assistant with three years of experience."],
        ["Situación y tarea", "In my last role, + situación. I was responsible for + tarea.", "In my last role, orders were often late. I was responsible for customer updates."],
        ["Acción propia", "I + verbo en pasado + ...", "I contacted the carrier and updated our tracking sheet."],
        ["Resultado", "As a result, + resultado", "As a result, late deliveries fell by 10%."],
        ["Pedir aclaración", "Could you repeat / explain + ...?", "Could you explain what the first month in this role involves?"]
      ],
      vocabulary: [
        ["strength", "fortaleza", "Problem-solving is one of my strengths."],
        ["challenge", "reto", "A recent challenge was a delayed order."],
        ["responsibility", "responsabilidad", "My main responsibility was checking invoices."],
        ["achievement", "logro", "One achievement was reducing processing time."],
        ["feedback", "comentarios / retroalimentación", "I used the feedback to improve my reports."],
        ["improve", "mejorar", "I’m working to improve my presentation skills."],
        ["teamwork", "trabajo en equipo", "The project required close teamwork."],
        ["role", "puesto / función", "What would be my main role in the project?"],
        ["interviewer", "entrevistador/a", "The interviewer asked about my previous role."],
        ["to apply for", "postularse a", "I’m applying for a position in customer service."],
        ["to hire", "contratar", "The company hopes to hire someone next month."],
        ["to manage a team", "dirigir un equipo", "I managed a team of five sales assistants."],
        ["to solve a problem", "resolver un problema", "I helped solve a problem with delayed orders."],
        ["to meet a target", "cumplir una meta", "We met our monthly target two weeks early."],
        ["to learn quickly", "aprender rápido", "I learn quickly when I can practise a new task."],
        ["to work under pressure", "trabajar bajo presión", "I can work under pressure during busy periods."],
        ["weakness", "área de mejora / debilidad", "I’m improving my confidence when speaking to large groups."],
        ["to contribute", "contribuir / aportar", "I contributed to a project that reduced waiting times."],
        ["reliable", "confiable", "My manager says I’m reliable and well organized."],
        ["to be familiar with", "estar familiarizado/a con", "I’m familiar with basic stock-control software."]
      ],
      linkers: [
        ["at the time", "dar contexto temporal", "At the time, our team was handling more orders than usual."],
        ["so", "explicar qué hiciste", "The report was late, so I contacted the supplier."],
        ["because", "explicar la razón", "I checked the figures because accuracy was important."],
        ["as a result", "mostrar el resultado", "As a result, we sent the report on time."],
        ["although", "reconocer una dificultad", "Although the deadline was short, we completed the review."],
        ["since then", "explicar un cambio posterior", "Since then, we’ve used a shared tracking sheet."]
      ]
    },
    "cross-cultural": {
      formulas: [
        ["Petición cortés y concreta", "Could you + verbo + ... by + fecha / hora?", "Could you send the revised file by 3 p.m. on Tuesday?"],
        ["Comprobar lo entendido", "I may have misunderstood. Do you mean + ...?", "I may have misunderstood. Do you mean 12 September?"],
        ["Pedir que aclaren", "Could you clarify whether / what + ...?", "Could you clarify whether the meeting is online or in person?"],
        ["Reconocer y responder", "Thanks for + verbo-ing. I’ll + siguiente paso.", "Thanks for flagging this. I’ll check the figures today."],
        ["Explicar una condición", "If + presente, I’ll / we’ll + verbo base", "If the time changes, I’ll send an updated invitation."]
      ],
      vocabulary: [
        ["tone", "tono", "Check that the tone is clear and respectful."],
        ["clarify", "aclarar", "Could you clarify the last point?" ],
        ["confirm", "confirmar", "Please confirm the date and time zone."],
        ["time zone", "zona horaria", "The time zone is UTC+1."],
        ["assumption", "suposición", "Let’s check that assumption before we decide."],
        ["misunderstanding", "malentendido", "A quick question can prevent a misunderstanding."],
        ["specific", "específico / concreto", "Give a specific deadline rather than saying soon."],
        ["courteous", "cortés", "A courteous request can still be direct."],
        ["polite", "educado/a", "A polite request includes a clear action and deadline."],
        ["direct", "directo/a", "A direct message can still sound respectful."],
        ["formal", "formal", "Use a more formal greeting with a new client."],
        ["informal", "informal", "The team uses an informal tone in its daily chat."],
        ["audience", "público / interlocutor", "Adapt the explanation to your audience."],
        ["background", "contexto / antecedentes", "I’ll give some background before we discuss the change."],
        ["to assume", "suponer", "Don’t assume everyone knows this abbreviation."],
        ["to interpret", "interpretar", "People may interpret a short message in different ways."],
        ["to avoid confusion", "evitar confusiones", "Write the month in full to avoid confusion."],
        ["to make a request", "hacer una petición", "I’d like to make a request about the meeting time."],
        ["to share feedback", "compartir comentarios", "The team shared feedback after the presentation."],
        ["to reach out", "ponerse en contacto", "Please reach out if you need more information."]
      ],
      linkers: [
        ["to make sure", "comprobar que hay claridad", "To make sure we agree, the deadline is 14 July."],
        ["however", "añadir un contraste", "The file is ready; however, it still needs approval."],
        ["for example", "aclarar con un ejemplo", "Please include the final figures, for example, the unit cost."],
        ["if", "introducir una condición", "If the date changes, please update the whole team."],
        ["so that", "explicar el propósito", "I’ve written the month in full so that the date is clear."],
        ["in the meantime", "indicar qué ocurre mientras tanto", "In the meantime, I’ll prepare the meeting notes."]
      ]
    }
  };

  const formulaExtensions = {
    introductions: [
      ["Describir tareas habituales", "One of my main responsibilities is + verb-ing", "One of my main responsibilities is coordinating weekly deliveries."],
      ["Explicar una tarea actual", "I’m currently working on + noun", "I’m currently working on a supplier review."],
      ["Explicar experiencia", "I have experience in + noun / verb-ing", "I have experience in customer service and handling returns."],
      ["Preguntar por responsabilidades", "What does your role involve?", "What does your role involve on a typical day?"]
    ],
    "company-roles": [
      ["Describir el servicio", "We specialize in + noun / verb-ing", "We specialize in providing IT support to small businesses."],
      ["Explicar la estructura", "The team consists of + people / roles", "The project team consists of a designer, two developers, and a coordinator."],
      ["Explicar colaboración entre áreas", "We work closely with + team / department", "We work closely with the finance team to approve supplier payments."],
      ["Describir a quién reporta un equipo", "The role reports to + person / position", "The warehouse supervisor reports to the operations manager."]
    ],
    "tasks-priorities": [
      ["Informar de una tarea terminada", "I’ve completed + task", "I’ve completed the first draft of the monthly report."],
      ["Informar lo que falta", "The main item still outstanding is + task", "The main item still outstanding is approval from the client."],
      ["Dar una fecha prevista", "I expect to finish + task + by + deadline", "I expect to finish the stock check by 4 p.m."],
      ["Explicar una condición", "If + present simple, I can + base verb", "If I receive the figures by noon, I can send the report today."]
    ],
    emails: [
      ["Retomar una conversación", "Further to + noun, + clause", "Further to our call, I’ve attached the revised quotation."],
      ["Pedir confirmación", "Could you confirm whether + clause?", "Could you confirm whether the revised date works for your team?"],
      ["Solicitar una acción cortésmente", "I would appreciate it if you could + base verb", "I would appreciate it if you could review the attached draft."],
      ["Indicar un plazo y el siguiente paso", "Please + base verb + by + deadline; once + clause, I’ll + base verb", "Please confirm the quantity by Thursday; once I have it, I’ll update the order."]
    ],
    meetings: [
      ["Proponer una opción", "Would it make sense to + base verb?", "Would it make sense to test the change with one team first?"],
      ["Mostrar acuerdo parcial", "I agree up to a point, but + clause", "I agree up to a point, but we still need to check the delivery risk."],
      ["Comprobar que entendiste", "What I’m hearing is + clause. Is that right?", "What I’m hearing is that the launch can move, but the budget cannot. Is that right?"],
      ["Cerrar con un acuerdo", "Shall we agree that + person + will + base verb + by + deadline?", "Shall we agree that Priya will share the cost estimate by Wednesday?"]
    ],
    calls: [
      ["Explicar el motivo de la llamada", "I’m calling regarding + noun", "I’m calling regarding your order reference 4821."],
      ["Pedir que comuniquen la llamada", "Could you put me through to + person / department?", "Could you put me through to the accounts department, please?"],
      ["Pedir que esperen", "Would you mind holding while I + base verb?", "Would you mind holding while I check whether the manager is available?"],
      ["Comprometerse con seguimiento", "I’ll make sure that + clause", "I’ll make sure that Nina receives your message before the end of the day."]
    ],
    presentations: [
      ["Iniciar la presentación", "Let me start by + verb-ing", "Let me start by summarising the customer feedback."],
      ["Llamar la atención sobre datos", "As you can see, + clause", "As you can see, response times increased in the second quarter."],
      ["Comparar resultados", "Compared with + noun, + clause", "Compared with May, we handled 18% more support requests in June."],
      ["Interpretar un resultado", "This suggests that + clause", "This suggests that the new tracking process is reducing delays."]
    ],
    "customer-service": [
      ["Reconocer una dificultad", "I’m sorry to hear that + clause", "I’m sorry to hear that the replacement has not arrived."],
      ["Confirmar que entendiste", "To make sure I’ve understood, + clause", "To make sure I’ve understood, one item was missing from the delivery."],
      ["Describir una comprobación", "I’ll look into + noun and get back to you by + time", "I’ll look into the dispatch record and get back to you by 2 p.m."],
      ["Explicar una condición para ayudar", "If you could + base verb, I can + base verb", "If you could send me a photo of the label, I can check the batch number."]
    ],
    negotiation: [
      ["Intercambiar una condición", "We could offer + option in exchange for + noun", "We could offer a lower unit price in exchange for a larger order."],
      ["Preguntar por flexibilidad", "Would you be open to + verb-ing?", "Would you be open to splitting the delivery into two shipments?"],
      ["Aceptar con una condición", "That would work, provided that + clause", "That would work, provided that the revised price includes delivery."],
      ["Resumir los términos", "To summarise, we’ve agreed to + action, subject to + noun", "To summarise, we’ve agreed to reserve the stock, subject to written approval."]
    ],
    "job-search": [
      ["Vincular experiencia con una vacante", "My experience in + field has prepared me to + verb", "My experience in logistics has prepared me to coordinate time-sensitive orders."],
      ["Describir una contribución", "In my previous role, I + past-tense action", "In my previous role, I reorganised the weekly stock report."],
      ["Expresar interés profesional", "I’m particularly interested in + noun / verb-ing because + clause", "I’m particularly interested in this role because it combines customer contact and problem-solving."],
      ["Presentar una habilidad relevante", "I can bring + skill / experience to + team / role", "I can bring careful record-keeping and clear communication to the support team."]
    ],
    interviews: [
      ["Introducir un ejemplo", "One example that comes to mind is + noun / situation", "One example that comes to mind is a delayed order I handled last year."],
      ["Explicar una responsabilidad pasada", "My task was to + base verb", "My task was to update the customer and find a reliable delivery date."],
      ["Describir una decisión", "I decided to + base verb because + clause", "I decided to contact the carrier because the tracking information was unclear."],
      ["Cerrar un ejemplo con un resultado", "The outcome was + result; I learned that + clause", "The outcome was a confirmed delivery date, and I learned to escalate risks earlier."]
    ],
    "cross-cultural": [
      ["Confirmar un detalle", "Just to confirm, + clause", "Just to confirm, the review is on Tuesday 12 May at 9 a.m. Mexico City time."],
      ["Evitar una confusión", "To avoid any confusion, + clause", "To avoid any confusion, I’ve written the date as 12 May."],
      ["Consultar disponibilidad", "Would + option + work for you?", "Would 3 p.m. London time work for you?"],
      ["Explicar el propósito de una acción", "I’ll + base verb + so that + clause", "I’ll send a written summary so that everyone has the same action list."]
    ]
  };

  const vocabularyExtensions = {
    introductions: [
      ["professional network", "red de contactos profesionales", "Building a professional network can help you learn about new roles."],
      ["key responsibility", "responsabilidad principal", "One of my key responsibilities is checking supplier records."],
      ["industry event", "evento del sector", "I met two potential clients at an industry event."],
      ["make a good first impression", "causar una buena primera impresión", "A clear introduction helps you make a good first impression."],
      ["introduce yourself", "presentarte", "Take a moment to introduce yourself and explain your role."]
    ],
    "company-roles": [
      ["organisational chart", "organigrama", "The organisational chart shows how the departments work together."],
      ["cross-functional team", "equipo interdisciplinario", "A cross-functional team is reviewing the new customer portal."],
      ["line manager", "jefe directo", "Please discuss your schedule with your line manager."],
      ["reporting line", "línea de dependencia", "The new reporting line starts at the beginning of July."],
      ["regional office", "oficina regional", "Our regional office coordinates deliveries across the north."]
    ],
    "tasks-priorities": [
      ["high-priority task", "tarea de alta prioridad", "The safety check is a high-priority task today."],
      ["meet a deadline", "cumplir una fecha límite", "We need two approvals to meet the deadline."],
      ["ahead of schedule", "antes de lo previsto", "The team completed the first stage ahead of schedule."],
      ["outstanding task", "tarea pendiente", "The only outstanding task is the client review."],
      ["available capacity", "capacidad disponible", "We have enough available capacity to help with the audit."]
    ],
    emails: [
      ["subject line", "línea de asunto", "Use a specific subject line so the reader can find the email later."],
      ["action required", "acción requerida", "Add action required to the subject when the reader needs to respond."],
      ["attachment", "archivo adjunto", "The revised quotation is included as an attachment."],
      ["email thread", "hilo de correo", "I replied to the original email thread to keep the details together."],
      ["follow-up email", "correo de seguimiento", "I sent a follow-up email after the supplier call."]
    ],
    meetings: [
      ["action point", "punto de acción", "Each action point should have an owner and a due date."],
      ["meeting outcome", "resultado de la reunión", "The meeting outcome was a two-week trial."],
      ["take the lead", "tomar la iniciativa", "Marta will take the lead on the customer survey."],
      ["reach a consensus", "llegar a un consenso", "The group reached a consensus after comparing the costs."],
      ["parking lot", "temas para tratar después", "Let’s put that question in the parking lot and finish the agenda."]
    ],
    calls: [
      ["call back", "devolver la llamada", "I’ll call you back as soon as I have the delivery update."],
      ["missed call", "llamada perdida", "I saw your missed call and wanted to check what you needed."],
      ["phone line", "línea telefónica", "The phone line is clearer if I move closer to the window."],
      ["call transfer", "transferencia de llamada", "I’ll explain the call transfer before I connect you."],
      ["contact details", "datos de contacto", "Could I confirm your contact details before we finish?"]
    ],
    presentations: [
      ["key takeaway", "idea principal", "The key takeaway is that response times improved after the trial."],
      ["quarterly results", "resultados trimestrales", "I’ll compare the quarterly results with our target."],
      ["upward trend", "tendencia al alza", "The chart shows an upward trend in repeat orders."],
      ["supporting evidence", "evidencia de respaldo", "Use supporting evidence to explain the recommendation."],
      ["next steps", "siguientes pasos", "I’ll finish with the next steps and the person responsible for each one."]
    ],
    "customer-service": [
      ["order reference", "referencia del pedido", "Could you share the order reference so I can check the dispatch record?"],
      ["delivery update", "actualización de entrega", "I’ll send you a delivery update by 3 p.m."],
      ["replacement item", "artículo de reemplazo", "We are checking when the replacement item can be shipped."],
      ["resolve an issue", "resolver un problema", "Our support team is working to resolve the issue."],
      ["service expectation", "expectativa de servicio", "Let’s agree on a realistic service expectation for the next update."]
    ],
    negotiation: [
      ["opening offer", "oferta inicial", "Our opening offer includes delivery and installation."],
      ["counteroffer", "contraoferta", "The supplier made a counteroffer with a longer payment period."],
      ["mutually beneficial", "beneficioso para ambas partes", "We are looking for a mutually beneficial agreement."],
      ["subject to approval", "sujeto a aprobación", "The discount is subject to approval by the finance manager."],
      ["meet halfway", "llegar a un punto intermedio", "Could we meet halfway on the delivery schedule?"]
    ],
    "job-search": [
      ["transferable skills", "habilidades transferibles", "Customer service builds transferable skills such as listening and problem-solving."],
      ["relevant experience", "experiencia pertinente", "Highlight relevant experience near the top of your CV."],
      ["job requirement", "requisito del puesto", "Give an example that matches each important job requirement."],
      ["career objective", "objetivo profesional", "Keep your career objective specific to the role."],
      ["employment history", "historial laboral", "Check the dates in your employment history before submitting the form."]
    ],
    interviews: [
      ["behavioral question", "pregunta sobre experiencias conductuales", "A behavioral question asks for a real example from your experience."],
      ["specific example", "ejemplo específico", "Choose a specific example that shows your own contribution."],
      ["follow-up question", "pregunta de seguimiento", "The interviewer asked a follow-up question about the result."],
      ["role expectations", "expectativas del puesto", "Ask about the role expectations for the first three months."],
      ["learning opportunity", "oportunidad de aprendizaje", "I see feedback as a learning opportunity."]
    ],
    "cross-cultural": [
      ["time-zone difference", "diferencia horaria", "Please consider the time-zone difference when scheduling the call."],
      ["written confirmation", "confirmación por escrito", "I’ll send written confirmation of the revised date."],
      ["shared understanding", "entendimiento común", "Let’s check that we have a shared understanding of the deadline."],
      ["communication preference", "preferencia de comunicación", "Ask the team about its communication preference for urgent updates."],
      ["plain language", "lenguaje claro", "Use plain language when an abbreviation may be unfamiliar."]
    ]
  };

  const lessonChecks = {
    introductions: [
      { q: "Which phrase introduces your job?", o: ["I work as a project coordinator.", "I work like a project coordinator.", "I am work a project coordinator."], a: 0, w: "Use work as + job title. Work in is for a department or field." },
      { q: "Complete: I'm responsible ___ supplier accounts.", o: ["of", "for", "to"], a: 1, w: "Responsible for is followed by a noun or an -ing form." },
      { q: "Which question helps continue a networking conversation?", o: ["What kind of work do you do?", "Why are you here exactly?", "You work what?"], a: 0, w: "An open question invites the other person to share relevant details." }
    ],
    "company-roles": [
      { q: "Complete: I report ___ the operations director.", o: ["at", "to", "for"], a: 1, w: "The structure is report to someone." },
      { q: "Which phrase describes your department?", o: ["I work as finance.", "I work in the finance department.", "I work on a finance department."], a: 1, w: "Use work in + department; work as + role; work on + project/task." },
      { q: "What does 'in charge of' mean?", o: ["Responsible for managing something", "Located inside an office", "Waiting for a decision"], a: 0, w: "In charge of means responsible for a team, activity, or area." }
    ],
    "tasks-priorities": [
      { q: "The report must be finished no later than Friday. Choose the right word.", o: ["until", "by", "since"], a: 1, w: "By Friday sets a deadline; until Friday describes something continuing to that time." },
      { q: "Which update includes a useful dependency?", o: ["I'll finish when I can.", "I can send the draft today if I receive the figures by 2 p.m.", "The supplier is pending."], a: 1, w: "A useful status update names the work and the condition that affects delivery." },
      { q: "The task is two days late. Choose the natural expression.", o: ["The task is behind schedule by two days.", "The task is delayed of two days.", "The task has two days late."], a: 0, w: "Behind schedule by two days is a natural way to report a delay." }
    ],
    emails: [
      { q: "Which subject line helps the reader act?", o: ["Hello", "Updated June delivery schedule — confirm by Thursday", "Important"], a: 1, w: "A useful subject names the topic and, when needed, the requested action or deadline." },
      { q: "You are sending a file now. What should you write?", o: ["I attached the file tomorrow.", "I've attached the revised schedule.", "I am attach the revised schedule."], a: 1, w: "I've attached confirms that the file is included with this message." },
      { q: "Complete: I look forward to ___ from you.", o: ["hear", "hearing", "heard"], a: 1, w: "In look forward to, to is a preposition and is followed by a noun or -ing form." }
    ],
    meetings: [
      { q: "You want to contribute an idea. Choose a polite opening.", o: ["Could I add one point?", "I talk now.", "Give me the meeting."], a: 0, w: "Could I add one point? signals your intention and asks for a turn." },
      { q: "Which is correct?", o: ["We discussed about the budget.", "We discussed the budget.", "We discussed on the budget."], a: 1, w: "Discuss takes a direct object; it is not followed by about." },
      { q: "What should an action item include?", o: ["A person responsible and a clear deadline", "Only a general topic", "An informal promise to do it later"], a: 0, w: "Confirm owner, action, and due date so the agreement is verifiable." }
    ],
    calls: [
      { q: "A caller wants a colleague who is unavailable. What can you say?", o: ["She no here.", "I'm afraid she's in a meeting. Would you like to leave a message?", "Wait."], a: 1, w: "State the situation politely and offer a next step." },
      { q: "The connection is unclear. Choose a useful phrase.", o: ["You're breaking up. Could you repeat that?", "You are breaking.", "I break you."], a: 0, w: "You're breaking up describes an interrupted or unstable phone connection." },
      { q: "How do you verify a date you heard on a call?", o: ["Let me read that back: 24 June, before 5 p.m. Is that correct?", "Yes, I know.", "I write something."], a: 0, w: "Read important names, numbers, and dates back to the caller to confirm accuracy." }
    ],
    presentations: [
      { q: "Sales rose from $1 million to $1.2 million. Which preposition describes the amount of change?", o: ["by", "at", "of"], a: 0, w: "Rose by 20% describes the amount of change; rose to $1.2 million gives the final value." },
      { q: "You do not know a figure during a presentation. What is the best response?", o: ["Make up an estimate.", "I don't have that figure with me, but I can confirm it after the meeting.", "No idea. Next."], a: 1, w: "Be transparent and offer a specific, realistic follow-up." },
      { q: "Which ending gives the audience a clear next step?", o: ["That's all.", "I recommend a four-week pilot; we'll review response times every Friday.", "The chart is finished."], a: 1, w: "Connect the recommendation to an action and a measurable review." }
    ],
    "customer-service": [
      { q: "A customer reports a missing item. What should you do first?", o: ["Promise a refund immediately.", "Confirm the order details and understand the issue.", "Tell the customer to calm down."], a: 1, w: "Confirm facts and impact before deciding or promising a solution." },
      { q: "You have not checked stock yet. Which promise is responsible?", o: ["It will definitely arrive tomorrow.", "I'll check with our warehouse and update you by 2 p.m.", "We always replace everything."], a: 1, w: "Promise an update you can control, not an outcome you have not verified." },
      { q: "Which phrase shows empathy without blaming the customer?", o: ["You didn't explain that.", "I understand how frustrating this must be.", "Calm down."], a: 1, w: "Acknowledge the impact in a respectful, non-judgmental way." }
    ],
    negotiation: [
      { q: "Complete: We could offer a discount if you ___ a six-month agreement.", o: ["sign", "will sign", "signed"], a: 0, w: "For a real condition, use present simple after if: if you sign." },
      { q: "Which response accepts a proposal with a clear condition?", o: ["That works for us, provided that installation is included.", "We agree always.", "You include installation."], a: 0, w: "Provided that introduces a condition attached to the agreement." },
      { q: "Before confirming a commercial agreement, what should you clarify?", o: ["Only the total number", "Scope, currency, dates, delivery, and conditions", "Nothing; the details are obvious"], a: 1, w: "Make scope and terms explicit, and confirm the appropriate approval before treating it as final." }
    ],
    "job-search": [
      { q: "Which CV bullet focuses on a specific result?", o: ["Did many things at work.", "Helped reduce late deliveries by 12%.", "Was a good worker."], a: 1, w: "A concrete, verifiable result is stronger; only use a figure you can support." },
      { q: "Complete: I've worked in sales ___ five years.", o: ["since", "for", "during"], a: 1, w: "Use for + a duration; use since + a starting point." },
      { q: "Which CV practice is appropriate?", o: ["Invent a certification to match the vacancy.", "Adapt truthful experience to the role and explain your contribution.", "Copy every duty from the job advert."], a: 1, w: "Tailor relevant, accurate experience; be prepared to explain every claim." }
    ],
    interviews: [
      { q: "What is a useful structure for a behavioral interview answer?", o: ["Situation, task, action, result", "Name, age, hobbies, goodbye", "Question, translation, apology"], a: 0, w: "Situation, task, action, result keeps the example focused and shows your contribution." },
      { q: "You did not understand part of a question. What can you say?", o: ["Your English is unclear.", "Could you repeat the last part of the question?", "I don't answer."], a: 1, w: "A specific clarification request is professional and keeps the conversation moving." },
      { q: "Which answer shows your contribution clearly?", o: ["My team did everything.", "I coordinated the schedule while the team handled customer updates.", "We did some work."], a: 1, w: "Distinguish your own actions from the team's work and then give the result." }
    ],
    "cross-cultural": [
      { q: "Which meeting request is clearest for an international team?", o: ["Let's meet early tomorrow.", "Let's meet at 9 a.m. Mexico City time on Tuesday 12 May.", "Let's talk sometime."], a: 1, w: "State date, time, and time zone explicitly." },
      { q: "How can you check an interpretation without blaming the other person?", o: ["That makes no sense.", "I may have misunderstood. Do you mean the launch is on 12 September?", "You explained it badly."], a: 1, w: "Frame the check around your understanding and confirm the specific detail." },
      { q: "Why can 'ASAP' cause problems?", o: ["It always means within one hour.", "It does not give a precise deadline or time zone.", "It is only used in spoken English."], a: 1, w: "Replace ambiguous urgency with a specific date, time, and time zone." }
    ]
  };

  const guidedChallenges = {
    introductions: ["Introduce your role and company, then add one responsibility.", "Say how long you have worked in your current role using for or since.", "Ask an open question that invites a new contact to describe their work."],
    "company-roles": ["Describe your company’s sector and location in one sentence.", "Explain which team handles a customer query and which handles an invoice.", "Tell a new colleague who you report to and what your team is responsible for."],
    "tasks-priorities": ["Give a status update with one task, its due date, and its current status.", "Contrast a task that must be done by Friday with work that continues until Friday.", "Explain one dependency and what you will do if the information arrives late."],
    emails: ["Write a specific subject line and a first sentence that states the purpose.", "Ask a colleague to review two named sections by a precise day and time.", "Write a polite follow-up that says what you need without sounding accusatory."],
    meetings: ["Ask to add a point, then explain one concern about a proposed plan.", "Disagree with an idea respectfully and suggest a concrete alternative.", "Close a discussion by stating the action, its owner, and the deadline."],
    calls: ["Open a call by identifying yourself, your organization, and the reason for calling.", "Ask someone to spell a name, then repeat a date or order number to confirm it.", "Leave a message with the key facts and a clear way to contact you."],
    presentations: ["Give a one-sentence takeaway before describing supporting details.", "Describe a change using a comparison period and distinguish rose by from rose to.", "Recommend one next step and say how the team will measure whether it worked."],
    "customer-service": ["Acknowledge a customer’s frustration and confirm the facts you need.", "Explain what you can check without promising an unverified delivery or refund.", "Give a specific time for your next update and state who you will contact."],
    negotiation: ["Ask a question to find out which delivery or contract term matters most.", "Make a conditional offer using if or provided that and state both sides’ responsibilities.", "Summarize quantity, price, delivery dates, and any condition before ending the discussion."],
    "job-search": ["Turn one real responsibility into a CV bullet that begins with an action verb.", "Describe a result with a truthful measure of scope, time, or impact.", "Explain in two sentences how one experience matches a requirement in a vacancy."],
    interviews: ["Give a 45-second professional introduction connected to a role you want.", "Answer a behavioral question with situation, task, your action, and result.", "Ask for clarification politely, then prepare one question about the role or team."],
    "cross-cultural": ["Write a request with a calendar date, exact time, and time zone.", "Check an unclear detail by saying what you may have misunderstood and asking a specific question.", "Rewrite an overly blunt or vague request so it is respectful and still gives a clear action and deadline."]
  };

  const questions = [
    {q:"Which sentence is a clear professional introduction?",o:["I am working in the company since 2020.","I work as a purchasing assistant.","I am the purchasing since three years."],a:1,w:"Use work as + job title for your current role. For duration up to now: I've worked here for three years."},
    {q:"Complete: I’m responsible ___ preparing the weekly report.",o:["to","for","at"],a:1,w:"Responsible for is followed by a noun or an -ing form."},
    {q:"Which phrase asks politely for a document?",o:["Send me the file now.","Could you please send me the file?","You send the file?"],a:1,w:"Could you please…? is a polite, clear request."},
    {q:"You include a document with an email. What can you write?",o:["I attach the updated schedule.","I’ve attached the updated schedule.","I’m attach the updated schedule."],a:1,w:"I've attached… tells the reader that the file is included with the email."},
    {q:"Which subject line is most informative?",o:["Hello","Question","Updated delivery schedule for June"],a:2,w:"A useful subject line names the specific topic."},
    {q:"You want to add an idea in a meeting. What can you say?",o:["Could I add something here?","Give me the meeting.","I talk now."],a:0,w:"Could I add something here? is a polite way to take a turn."},
    {q:"Complete: The proposal is due ___ Thursday.",o:["until","by","since"],a:1,w:"By Thursday sets a deadline. Until describes something that continues to that time."},
    {q:"How can you check who will do a task and the deadline?",o:["Who’s responsible for this, and by when?","Who is this and why?","What responsible by when?"],a:0,w:"Confirm the owner and deadline directly."},
    {q:"The call is difficult to hear. What is a useful phrase?",o:["You are breaking.","You’re breaking up.","You break me."],a:1,w:"You're breaking up means the connection is cutting out."},
    {q:"A caller asks for a colleague who is unavailable. What can you say?",o:["I’m afraid she’s in a meeting. Would you like to leave a message?","She no here.","Wait."],a:0,w:"Explain the situation politely and offer a next step."},
    {q:"Which phrase introduces the main conclusion of a presentation?",o:["The main takeaway is…","The takeaway main…","I am concluding now because…"],a:0,w:"The main takeaway is… introduces the key idea for the audience to remember."},
    {q:"You don’t know an answer during a presentation. What is the best response?",o:["Make up a number.","I don’t have that figure with me, but I can confirm it after the meeting.","No idea. Next."],a:1,w:"Say you do not have the figure and offer a realistic follow-up."},
    {q:"A customer reports a problem. What should you do first?",o:["Promise a full refund immediately, whatever the policy.","Confirm the issue and ask for the details you need.","Tell them it is not my problem."],a:1,w:"Understand and confirm the issue before deciding or promising a solution."},
    {q:"Which phrase shows empathy?",o:["I understand how frustrating that must be.","You should not be upset.","Calm down now."],a:0,w:"Acknowledge the impact without dismissing how the customer feels."},
    {q:"Complete: We could offer a discount if you ___ a six-month agreement.",o:["sign","will sign","signed"],a:0,w:"Use the present simple after if for a real condition; the other clause can use would or could."},
    {q:"Which phrase proposes a condition politely?",o:["That works for us, provided that delivery is included.","We agree always.","You include delivery."],a:0,w:"Provided that introduces a condition."},
    {q:"Which CV statement focuses on a measurable result?",o:["I did many things at work.","Helped reduce late deliveries by 12%.","I was a good worker."],a:1,w:"A specific, verifiable result communicates impact. Use it only if it is accurate."},
    {q:"Which structure is useful for a behavioral interview example?",o:["Situation, task, action, result.","Name, age, favorite food, result.","Question, translation, answer, goodbye."],a:0,w:"Situation, task, action, and result keep a professional example focused."},
    {q:"You did not understand a question in an interview. What can you say?",o:["Your English is unclear.","Could you repeat the last part of the question?","I don't answer."],a:1,w:"Asking someone to repeat a specific part is appropriate and keeps the conversation moving."},
    {q:"Which message is clearest for an international meeting?",o:["Let's talk tomorrow morning.","Let's meet at 9:00 a.m. Mexico City time on Tuesday 12 May.","See you early."],a:1,w:"An explicit time, time zone, and date avoid ambiguity."},
    {q:"Complete: I look forward to ___ from you.",o:["hear","hearing","heard"],a:1,w:"In look forward to, to is a preposition followed by a noun or an -ing form."},
    {q:"What is a good way to confirm an agreement?",o:["We’ll sort it out sometime.","Let me summarize: I’ll send the revised quote by Friday, and you’ll confirm the quantity.","Everyone knows the plan."],a:1,w:"Summarize the action, owner, and date so the agreement is clear."},
    {q:"Which phrase checks that you understood correctly?",o:["I may have misunderstood. Do you mean the launch is on 12 September?","That makes no sense.","I understand everything."],a:0,w:"Checking your interpretation prevents misunderstandings without blaming anyone."},
    {q:"Which is a professional way to disagree?",o:["That’s a stupid idea.","I see your point, but I’m concerned about the delivery date.","You are wrong."],a:1,w:"Acknowledge the other perspective and explain your specific concern."}
  ];

  const appHost = document.getElementById("biz-app");
  const leftHost = document.getElementById("biz-left");
  const rightHost = document.getElementById("biz-right");
  const centerHost = document.getElementById("biz-center");
  const layout = document.getElementById("biz-layout");
  const progressKey = "businessEnglishLessonsV1";
  const draftKey = "businessEnglishDraftsV1";
  const masteryKey = "businessEnglishMasteryV1";
  const capstoneKey = "businessEnglishCapstoneV1";
  let activeModule = null;
  let activeSection = 0;
  let completed = new Set();
  let drafts = {};
  let mastery = {};
  let capstone = { drafts: {}, checks: [], completed: false };
  let capstoneOpen = false;
  let quizIndex = 0;
  let quizScore = 0;
  let selectedAnswer = null;
  let quizComplete = false;
  let lessonCheckIndex = 0;
  let lessonCheckScore = 0;
  let lessonCheckAnswer = null;
  let lessonCheckComplete = false;
  let reviewMode = false;

  try {
    const saved = JSON.parse(localStorage.getItem(progressKey) || "[]");
    if (Array.isArray(saved)) completed = new Set(saved.filter(id => phases.some(phase => phase.modules.some(module => module.id === id))));
  } catch (error) {
    console.error("Could not read Business English progress.", error);
  }
  try {
    const savedDrafts = JSON.parse(localStorage.getItem(draftKey) || "{}");
    if (savedDrafts && typeof savedDrafts === "object" && !Array.isArray(savedDrafts)) drafts = savedDrafts;
  } catch (error) {
    console.error("Could not read Business English practice drafts.", error);
  }
  try {
    const savedMastery = JSON.parse(localStorage.getItem(masteryKey) || "{}");
    if (savedMastery && typeof savedMastery === "object" && !Array.isArray(savedMastery)) {
      const knownIds = new Set(phases.flatMap(phase => phase.modules.map(module => module.id)));
      mastery = Object.fromEntries(Object.entries(savedMastery)
        .filter(([id, record]) => knownIds.has(id) && record && typeof record === "object" && !Array.isArray(record))
        .map(([id, record]) => [id, {
          bestScore: Number.isInteger(record.bestScore) ? Math.max(0, Math.min(3, record.bestScore)) : 0,
          attempts: Number.isInteger(record.attempts) ? Math.max(0, record.attempts) : 0,
          passed: record.passed === true,
          stage: Number.isInteger(record.stage) ? Math.max(0, Math.min(3, record.stage)) : 0,
          nextReviewAt: Number.isFinite(record.nextReviewAt) ? record.nextReviewAt : (record.passed ? Date.now() : null)
        }]));
    }
  } catch (error) {
    console.error("Could not read Business English mastery records.", error);
  }
  try {
    const savedCapstone = JSON.parse(localStorage.getItem(capstoneKey) || "{}");
    if (savedCapstone && typeof savedCapstone === "object" && !Array.isArray(savedCapstone)) {
      capstone = {
        drafts: savedCapstone.drafts && typeof savedCapstone.drafts === "object" && !Array.isArray(savedCapstone.drafts) ? savedCapstone.drafts : {},
        checks: Array.isArray(savedCapstone.checks) ? [...new Set(savedCapstone.checks.filter(index => Number.isInteger(index) && index >= 0 && index < 6))] : [],
        completed: savedCapstone.completed === true && Array.isArray(savedCapstone.checks) && new Set(savedCapstone.checks).size === 6
      };
    }
  } catch (error) {
    console.error("Could not read Business English capstone progress.", error);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function formulaInEnglish(value) {
    const terms = [
      ["verbo en -ing", "verb-ing"],
      ["sustantivo", "noun"],
      ["verbo base", "base verb"],
      ["verbo-ing", "verb-ing"],
      ["verbo", "verb"],
      ["sujeto", "subject"],
      ["puesto", "job title"],
      ["departamento", "department"],
      ["sector", "industry"],
      ["duración", "duration"],
      ["inicio", "starting point"],
      ["duración", "duration"],
      ["tamaño", "size"],
      ["equipo", "team"],
      ["persona", "person"],
      ["cargo", "job title"],
      ["tarea", "task"],
      ["fecha", "date"],
      ["hora", "time"],
      ["plazo", "deadline"],
      ["acción", "action"],
      ["condición", "condition"],
      ["razón", "reason"],
      ["cantidad", "amount"],
      ["valor", "value"],
      ["lugar", "place"],
      ["presente", "present"],
      ["oración", "clause"],
      ["área", "field"],
      ["proyecto", "project"],
      ["cliente", "client"]
    ];
    return terms.reduce((formula, [source, translation]) =>
      formula.replace(new RegExp(source, "gi"), translation), String(value));
  }

  function allModules() {
    return phases.flatMap(phase => phase.modules);
  }

  function copyFor(module) {
    return moduleCopy[module.id];
  }

  function phaseIndexFor(module) {
    return phases.findIndex(phase => phase.modules.some(item => item.id === module.id));
  }

  function getModule(id = activeModule) {
    return allModules().find(module => module.id === id) || null;
  }

  function isReviewDue(id) {
    const dueAt = mastery[id] && mastery[id].nextReviewAt;
    return typeof dueAt === "number" && dueAt <= Date.now();
  }

  function formatReviewDate(timestamp) {
    return new Date(timestamp).toLocaleDateString("en-US", { day: "numeric", month: "short" });
  }

  function saveMasteryRecord(id, score) {
    const previous = mastery[id] || { stage: 0, attempts: 0, passed: false };
    const passed = score >= 2;
    const reviewWasDue = reviewMode && isReviewDue(id);
    let stage = Number.isInteger(previous.stage) ? previous.stage : 0;
    let nextReviewAt = previous.nextReviewAt || null;
    if (passed && !previous.passed) {
      stage = 0;
      nextReviewAt = Date.now() + 24 * 60 * 60 * 1000;
    } else if (reviewWasDue) {
      if (passed) stage = Math.min(stage + 1, 3);
      nextReviewAt = Date.now() + (passed ? [1, 3, 7, 14][stage] : 1) * 24 * 60 * 60 * 1000;
    }
    mastery[id] = {
      bestScore: Math.max(previous.bestScore || 0, score),
      attempts: (previous.attempts || 0) + 1,
      passed: previous.passed || passed,
      stage,
      nextReviewAt
    };
    try {
      localStorage.setItem(masteryKey, JSON.stringify(mastery));
    } catch (error) {
      console.error("Could not save Business English mastery records.", error);
    }
    reviewMode = false;
  }

  function startLessonCheck(module, isReview = false) {
    activeModule = module.id;
    activeSection = 4;
    reviewMode = isReview;
    lessonCheckIndex = 0;
    lessonCheckScore = 0;
    lessonCheckAnswer = null;
    lessonCheckComplete = false;
    switchPanel("main");
    renderAll();
    centerHost.scrollTop = 0;
  }

  function showCapstone() {
    activeModule = null;
    activeSection = 0;
    reviewMode = false;
    capstoneOpen = true;
    switchPanel("main");
    renderAll();
    centerHost.scrollTop = 0;
  }

  function switchPanel(panel) {
    layout.dataset.tab = panel;
    document.querySelectorAll("#biz-panel-tabs button").forEach(button => {
      const selected = button.dataset.panel === panel;
      button.classList.toggle("on", selected);
      button.setAttribute("aria-selected", String(selected));
    });
  }

  function showModule(id, section = 0) {
    activeModule = id;
    activeSection = section;
    reviewMode = false;
    capstoneOpen = false;
    lessonCheckIndex = 0;
    lessonCheckScore = 0;
    lessonCheckAnswer = null;
    lessonCheckComplete = false;
    switchPanel("main");
    renderAll();
    centerHost.scrollTop = 0;
  }

  function renderLeft() {
    const menu = phases.map(phase => `
      <section class="pc biz-side-phase">
        <h4>${escapeHtml(phaseCopy[phases.indexOf(phase)].title)}</h4>
        ${phase.modules.map(module => `<button type="button" class="biz-side-link" data-module="${escapeHtml(module.id)}" aria-current="${module.id === activeModule}">${escapeHtml(copyFor(module).title)}${completed.has(module.id) ? '<span class="biz-done-mark" aria-label="lesson complete">✓</span>' : ""}${mastery[module.id] && mastery[module.id].passed ? '<span class="biz-mastery-mark">Reviewed</span>' : ""}</button>`).join("")}
      </section>`).join("");
    leftHost.innerHTML = `
      <section class="pc">
        <h3>Workplace English</h3>
        <div class="menu"><button type="button" data-course-home>Learning path</button><button type="button" data-course-quiz>Course review</button><button type="button" data-course-capstone>Final project</button></div>
      </section>
      ${menu}`;
    leftHost.querySelectorAll("[data-module]").forEach(button => button.addEventListener("click", () => showModule(button.dataset.module)));
    leftHost.querySelector("[data-course-home]").addEventListener("click", () => showModule(null));
    leftHost.querySelector("[data-course-capstone]").addEventListener("click", showCapstone);
    leftHost.querySelector("[data-course-quiz]").addEventListener("click", () => {
      activeModule = activeModule || allModules()[0].id;
      activeSection = 5;
      reviewMode = false;
      switchPanel("main");
      renderAll();
      centerHost.scrollTop = 0;
    });
  }

  function renderRight() {
    const module = getModule();
    const detail = module ? moduleDetails[module.id] : null;
    const progress = Math.round(completed.size / allModules().length * 100);
    const masteredCount = allModules().filter(item => mastery[item.id] && mastery[item.id].passed).length;
    const dueReviews = allModules().filter(item => isReviewDue(item.id));
    const quizProgress = quizComplete ? questions.length : quizIndex + (selectedAnswer !== null ? 1 : 0);
    rightHost.innerHTML = `
      <section class="pc">
        <h3>Your progress</h3>
        <div class="mini"><div><b>${masteredCount}/${allModules().length}</b><span>Skills checked</span></div><div><b>${progress}%</b><span>Lessons complete</span></div></div>
        <div class="pbar" role="progressbar" aria-label="Lessons complete" aria-valuemin="0" aria-valuemax="${allModules().length}" aria-valuenow="${completed.size}"><i style="width:${progress}%"></i></div>
        <p class="tiny">Pass a lesson check by answering at least 2 of 3 questions correctly.</p>
      </section>
      ${dueReviews.length ? `<section class="pc"><h3>Review due · ${dueReviews.length}</h3><p class="tiny">Try to recall the phrases before reopening your notes.</p><div class="biz-review-list">${dueReviews.map(item => `<button type="button" class="biz-review-link" data-review="${escapeHtml(item.id)}">${escapeHtml(copyFor(item).title)}<span>Due ${formatReviewDate(mastery[item.id].nextReviewAt)}</span></button>`).join("")}</div></section>` : `<section class="pc"><h3>Spaced review</h3><p class="biz-side-copy">Review tomorrow, then after 3, 7, and 14 days. Recall first; check your notes afterwards.</p></section>`}
      ${module && detail ? `<section class="pc"><h3>Lesson goal</h3><p class="biz-side-title">${escapeHtml(copyFor(module).title)}</p><p class="biz-side-copy">${escapeHtml(copyFor(module).outcome)}</p><p class="tiny">${mastery[module.id] && mastery[module.id].passed ? `Best check: ${mastery[module.id].bestScore}/3` : "Complete the 3-question check to confirm this skill."}</p></section>` : `<section class="pc"><h3>Final project</h3><p class="biz-side-copy">${capstone.completed ? "Project complete. Revisit your drafts to improve them." : "Write an email, prepare a meeting update, and agree on a customer solution."}</p><button class="lnk" type="button" data-course-capstone>Open final project</button></section>`}
      <section class="pc"><h3>Course review</h3><div class="mini"><div><b>${quizScore}</b><span>Correct</span></div><div><b>${quizProgress}/${questions.length}</b><span>Answered</span></div></div><div class="pbar" role="progressbar" aria-label="Review questions answered" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${quizProgress}"><i style="width:${Math.round(quizProgress/questions.length*100)}%"></i></div><button class="lnk" type="button" data-course-quiz>Practise ${questions.length} questions</button></section>`;
    rightHost.querySelector("[data-course-quiz]").addEventListener("click", () => {
      activeModule = activeModule || allModules()[0].id;
      activeSection = 5;
      reviewMode = false;
      capstoneOpen = false;
      switchPanel("main");
      renderAll();
      centerHost.scrollTop = 0;
    });
    const capstoneButton = rightHost.querySelector("[data-course-capstone]");
    if (capstoneButton) capstoneButton.addEventListener("click", showCapstone);
    rightHost.querySelectorAll("[data-review]").forEach(button => button.addEventListener("click", () => {
      const dueModule = getModule(button.dataset.review);
      if (dueModule) startLessonCheck(dueModule, true);
    }));
  }

  function renderHome() {
    const nextModule = allModules().find(module => !completed.has(module.id)) || allModules()[0];
    const completeCount = completed.size;
    const progress = Math.round(completeCount / allModules().length * 100);
    appHost.innerHTML = `
      <section class="sheet biz-home">
        <p class="biz-kicker">B1 · WORKPLACE ENGLISH</p>
        <h1>Workplace English</h1>
        <p>${courseUi.homeDescription}</p>
        <div class="biz-home-progress">
          <div><span>Learning path</span><strong>${completeCount} / ${allModules().length}</strong><span>lessons complete</span></div>
          <div class="pbar" role="progressbar" aria-label="Course progress" aria-valuemin="0" aria-valuemax="${allModules().length}" aria-valuenow="${completeCount}"><i style="width:${progress}%"></i></div>
          <button class="btn" type="button" data-start-course>${completeCount ? courseUi.resume : courseUi.start}: ${escapeHtml(copyFor(nextModule).title)}</button>
        </div>
        <h2>${courseUi.phases}</h2>
        <div class="biz-home-phases">${phases.map((phase, index) => `
          <article class="biz-home-phase">
            <div class="biz-phase-heading"><span class="biz-phase-number">0${index + 1}</span><div><h3>${escapeHtml(phaseCopy[index].title)}</h3><p>${escapeHtml(phaseCopy[index].focus)}</p></div></div>
            <div class="biz-phase-lessons">${phase.modules.map(module => {
              const globalIndex = allModules().indexOf(module) + 1;
              return `<button class="biz-roadmap-lesson" type="button" data-module="${escapeHtml(module.id)}"><span>${String(globalIndex).padStart(2, "0")}</span>${escapeHtml(copyFor(module).title)}${completed.has(module.id) ? '<b aria-label="Complete">✓</b>' : ""}</button>`;
            }).join("")}</div>
          </article>`).join("")}</div>
        <div class="biz-lesson-nav"><button class="btn line" type="button" data-open-quiz>Course review · ${questions.length} questions</button><button class="btn line" type="button" data-open-capstone>Final project</button></div>
      </section>`;
    appHost.querySelector("[data-start-course]").addEventListener("click", () => showModule(nextModule.id));
    appHost.querySelectorAll("[data-module]").forEach(button => button.addEventListener("click", () => showModule(button.dataset.module)));
    appHost.querySelector("[data-open-quiz]").addEventListener("click", () => {
      activeModule = allModules()[0].id;
      activeSection = 5;
      reviewMode = false;
      capstoneOpen = false;
      renderAll();
      centerHost.scrollTop = 0;
    });
    appHost.querySelector("[data-open-capstone]").addEventListener("click", showCapstone);
  }

  function renderCapstone() {
    const activities = [
      ["email", "1 · Customer email · 80–120 words", "Explain what is confirmed and what is still pending. Ask whether the customer prefers a partial shipment or one complete delivery. Include a date, time, and follow-up action."],
      ["meeting", "2 · Spoken update · 60–90 seconds", "Brief your team on the status, risk, decision needed, and recommendation. Practise aloud instead of reading a full paragraph."],
      ["negotiation", "3 · Negotiate an alternative", "Offer partial delivery and an urgent shipment subject to cost confirmation. Ask about the customer’s priority and summarise the terms without promising unapproved costs."],
      ["customer", "4 · Customer response", "Acknowledge the concern, confirm the impact, explain what you will check, and give a time for your next update."]
    ];
    const checks = [
      "Dates, quantities, and deadlines are consistent across all four responses.",
      "I distinguish confirmed facts from details that still need checking.",
      "Each message has a clear purpose, suitable tone, and specific action.",
      "My meeting update explains the risk and supports a recommendation.",
      "My proposal includes conditions and does not present a possibility as a final agreement.",
      "I name the owner and a realistic time for follow-up."
    ];
    appHost.innerHTML = `<section class="sheet biz-capstone">
      <p class="biz-kicker">FINAL PROJECT</p>
      <h1>Help a customer with a delayed order</h1>
      <p class="biz-lesson-intro">Use the language from your lessons to explain the issue and propose a solution. You can invent details; never include private information about real customers.</p>
      <div class="biz-callout"><strong>Scenario:</strong> Brightline Supplies must deliver ten components to an international customer by 12 June. The supplier confirmed seven for that date; the other three may arrive on 17 June, but this is not confirmed. The customer needs to decide whether to accept two shipments. An urgent option may add a cost that your manager must approve.</div>
      <h2>Complete all four tasks</h2>
      <p>Keep the dates and quantities consistent in every response.</p>
      <div class="biz-capstone-activities">${activities.map(([id, title, prompt]) => `<section class="biz-capstone-activity"><h3>${title}</h3><p>${prompt}</p><label class="biz-draft-label" for="capstone-${id}">Your response in English</label><textarea id="capstone-${id}" class="biz-draft" rows="${id === "email" ? 7 : 5}" data-capstone-draft="${id}" placeholder="Write your response here.">${escapeHtml(typeof capstone.drafts[id] === "string" ? capstone.drafts[id] : "")}</textarea><p class="biz-word-count" data-capstone-count="${id}" aria-live="polite"></p></section>`).join("")}</div>
      <details class="biz-answer-key"><summary>Optional language bank</summary><ul class="biz-points"><li>At present, we can confirm… / We are still checking whether…</li><li>Would you prefer a partial shipment or one complete delivery?</li><li>We could arrange an urgent shipment, subject to approval of the additional cost.</li><li>I understand the delay affects your installation. I’ll confirm the options and update you by…</li><li>To summarise, I will…, and you will… by…</li></ul></details>
      <h2>Before you finish</h2>
      <p>Check each point in your responses.</p>
      <ul class="biz-points biz-capstone-checks">${checks.map((criterion, index) => `<li><label><input type="checkbox" data-capstone-check="${index}" ${capstone.checks.includes(index) ? "checked" : ""}> ${escapeHtml(criterion)}</label></li>`).join("")}</ul>
      <button class="biz-quiz-next" type="button" data-capstone-complete ${checks.every((_, index) => capstone.checks.includes(index)) ? "" : "disabled"}>${capstone.completed ? "Project complete" : "Complete final project"}</button>
      <p class="fine">Check that your responses are clear, accurate, and consistent with the language from the course.</p>
    </section>`;
    bindCapstone();
  }

  function saveCapstone() {
    try {
      localStorage.setItem(capstoneKey, JSON.stringify(capstone));
    } catch (error) {
      console.error("Could not save Business English capstone progress.", error);
    }
  }

  function bindCapstone() {
    appHost.querySelectorAll("[data-capstone-draft]").forEach(textarea => {
      const id = textarea.dataset.capstoneDraft;
      const count = appHost.querySelector(`[data-capstone-count="${id}"]`);
      const updateCount = () => {
        const words = textarea.value.trim().match(/\S+/g) || [];
        count.textContent = `${words.length} words`;
      };
      textarea.addEventListener("input", () => {
        capstone.drafts[id] = textarea.value;
        capstone.completed = false;
        saveCapstone();
        updateCount();
      });
      updateCount();
    });
    appHost.querySelectorAll("[data-capstone-check]").forEach(input => {
      input.addEventListener("change", () => {
        capstone.checks = [...appHost.querySelectorAll("[data-capstone-check]")]
          .reduce((selected, checkbox) => {
            if (checkbox.checked) selected.push(Number(checkbox.dataset.capstoneCheck));
            return selected;
          }, []);
        capstone.completed = false;
        saveCapstone();
        appHost.querySelector("[data-capstone-complete]").disabled = capstone.checks.length !== 6;
      });
    });
    appHost.querySelector("[data-capstone-complete]").addEventListener("click", () => {
      if (capstone.checks.length !== 6) return;
      capstone.completed = true;
      saveCapstone();
      renderAll();
    });
  }

  function renderSection(module) {
    const detail = moduleDetails[module.id];
    const toolkit = languageToolkits[module.id];
    const sections = [courseUi.learn, courseUi.language, courseUi.listen, courseUi.apply, courseUi.check, courseUi.review];
    const tabs = sections.map((title, index) => `<button type="button" class="biz-subtab ${index === activeSection ? "on" : ""} ${index === 4 || index === 5 ? "quiz" : ""}" data-section="${index}" role="tab" aria-selected="${index === activeSection}">${escapeHtml(title)}</button>`).join("");
    let content = "";
    if (activeSection === 0) {
      content = `<h2>${escapeHtml(copyFor(module).title)}</h2><p>${escapeHtml(copyFor(module).overview)}</p><div class="biz-callout"><strong>By the end, you can:</strong> ${escapeHtml(copyFor(module).outcome)}</div><h3>Watch a model</h3><div class="biz-example"><p>${escapeHtml(module.model)}</p></div><details class="biz-answer-key"><summary>${courseUi.spanishHelp}</summary><p>${escapeHtml(detail.explanation)}</p><ul class="biz-points">${module.points.map(point => `<li>${escapeHtml(point)}</li>`).join("")}</ul></details>`;
    } else if (activeSection === 1) {
      const formulas = [...toolkit.formulas, ...formulaExtensions[module.id]];
      const vocabulary = [...toolkit.vocabulary, ...vocabularyExtensions[module.id]];
      content = `<h2>Useful language</h2><p>Study a phrase, notice its pattern, then change the details to fit your work.</p>
        <h3>Ready-to-use phrases</h3><div class="biz-phrase-list">${module.phrases.map(([phrase, translation, context]) => `<article class="biz-phrase"><p lang="en">${escapeHtml(phrase)}</p><details><summary>${courseUi.spanishHelp}</summary><p>${escapeHtml(translation)} ${escapeHtml(context)}</p></details></article>`).join("")}</div>
        <h3>Sentence patterns · ${formulas.length}</h3><div class="biz-formula-list">${formulas.map(([purpose, formula, example], index) => `<article class="biz-formula-card"><span class="biz-formula-label">Pattern ${String(index + 1).padStart(2, "0")}</span><code>${escapeHtml(formulaInEnglish(formula))}</code><p lang="en">${escapeHtml(example)}</p><details><summary>${courseUi.spanishHelp}</summary><p>${escapeHtml(purpose)}</p></details></article>`).join("")}</div>
        <details class="biz-answer-key biz-toolkit-section"><summary>Vocabulary & collocations · ${vocabulary.length} items</summary><label class="biz-vocab-search-label" for="biz-vocab-search">Find a word or phrase</label><input id="biz-vocab-search" class="biz-vocab-search" type="search" placeholder="Search in English or Spanish" autocomplete="off"><p class="biz-vocab-count" aria-live="polite"></p><div class="biz-vocab-list">${vocabulary.map(([word, meaning, example]) => `<article class="biz-vocab-card" data-vocab-card data-search="${escapeHtml(`${word} ${meaning} ${example}`).toLocaleLowerCase()}"><div><strong lang="en">${escapeHtml(word)}</strong><p lang="en">${escapeHtml(example)}</p></div><details><summary>${courseUi.spanishHelp}</summary><p>${escapeHtml(meaning)}</p></details></article>`).join("")}<p class="biz-vocab-empty" hidden>No matching words. Try another search.</p></div></details>
        <details class="biz-answer-key biz-toolkit-section"><summary>Linkers · ${toolkit.linkers.length}</summary><div class="biz-table-scroll"><table class="biz-language-table"><thead><tr><th>Linker</th><th>Purpose</th><th>Example</th></tr></thead><tbody>${toolkit.linkers.map(([linker, use, example]) => `<tr><td>${escapeHtml(linker)}</td><td>${escapeHtml(use)}</td><td>${escapeHtml(example)}</td></tr>`).join("")}</tbody></table></div></details>
        <details class="biz-answer-key biz-formula-reference biz-toolkit-section"><summary>Grammar reference · ${coreLanguageFormulas.length} patterns</summary><div class="biz-table-scroll biz-formula-table-scroll" tabindex="0" role="region" aria-label="Grammar reference; scroll horizontally and vertically"><table class="biz-language-table"><thead><tr><th>Pattern</th><th>Form</th><th>Examples</th><th>Use</th></tr></thead><tbody>${coreLanguageFormulas.map(([pattern, form, example, use]) => `<tr><td>${escapeHtml(pattern)}</td><td>${escapeHtml(form)}</td><td>${escapeHtml(example)}</td><td>${escapeHtml(use)}</td></tr>`).join("")}</tbody></table></div></details>
        <details class="biz-answer-key biz-toolkit-section"><summary>${courseUi.spanishHelp} · Extra notes</summary><ul class="biz-points">${detail.notes.map(note => `<li>${escapeHtml(note)}</li>`).join("")}</ul></details>`;
    } else if (activeSection === 2) {
      content = `<h2>Listen and repeat</h2><p>Listen first. Identify the main point and key details before opening the transcript.</p>
        <div class="biz-listening-actions"><button class="biz-audio-button" type="button" data-speak>Play model</button><button class="biz-audio-stop" type="button" data-stop-speech>Stop</button></div>
        <p class="biz-audio-status" role="status" aria-live="polite">First listen: What is the purpose and next action?</p>
        <div class="biz-listening-note"><strong>Listen again:</strong> note names, dates, and numbers. Then repeat the model clearly.</div>
        <details class="biz-answer-key"><summary>Show transcript</summary><div class="biz-example"><p>${escapeHtml(module.model)}</p></div></details>
        <details class="biz-answer-key"><summary>Why this works</summary><ol class="biz-points">${detail.modelNotes.map(note => `<li>${escapeHtml(note)}</li>`).join("")}</ol><p>${courseUi.spanishHelp}: explanation follows the original lesson.</p></details>`;
    } else if (activeSection === 3) {
      content = `<h2>Try it at work</h2><p>Plan your response, then write or say it in English.</p><div class="biz-callout"><strong>Scenario:</strong> ${escapeHtml(copyFor(module).scenario)}</div><p><strong>Your task:</strong> ${escapeHtml(copyFor(module).task)}</p>
        <h3>Check your response</h3><ul class="biz-points">${copyFor(module).checklist.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        <label class="biz-draft-label" for="biz-draft">Your response in English</label><textarea id="biz-draft" class="biz-draft" rows="7" data-draft="${escapeHtml(module.id)}" placeholder="Write your response here.">${escapeHtml(typeof drafts[module.id] === "string" ? drafts[module.id] : "")}</textarea><p class="biz-word-count" id="biz-word-count" aria-live="polite"></p>
        <details class="biz-answer-key"><summary>More practice and Spanish support</summary><ul class="biz-points">${guidedChallenges[module.id].map(challenge => `<li>${escapeHtml(challenge)}</li>`).join("")}</ul><div class="biz-error"><strong>Common errors</strong>${detail.errors.map(([wrong, right]) => `<p><del>${escapeHtml(wrong)}</del><br><span class="biz-key">${escapeHtml(right)}</span></p>`).join("")}</div></details>
        <details class="biz-answer-key"><summary>${courseUi.showModel}</summary><div class="biz-example"><p>${escapeHtml(module.model)}</p></div></details>`;
    } else if (activeSection === 4) {
      content = `<div id="biz-lesson-check"></div>`;
    } else {
      content = `<div class="biz-quiz-panel"><p class="biz-kicker">COURSE REVIEW</p><h2>Review what you have learned</h2><p class="biz-quiz-intro">Answer ${questions.length} questions. Get feedback after each answer.</p><div id="biz-quiz"></div></div>`;
    }
    const navigation = `<div class="biz-lesson-actions"><button type="button" data-previous-section ${activeSection === 0 ? "disabled" : ""}>${courseUi.previous}</button><span>Step ${activeSection + 1} ${courseUi.of} ${sections.length}</span><button type="button" data-next-section ${activeSection === sections.length - 1 ? "disabled" : ""}>${courseUi.next}</button></div>`;
    return `<div class="biz-subtabs" role="tablist" aria-label="Lesson steps">${tabs}</div><section class="biz-lesson-body">${content}${navigation}</section>`;
  }

  function renderLessonCheck(module) {
    const host = appHost.querySelector("#biz-lesson-check");
    const record = mastery[module.id];
    const reviewDueAt = record && record.nextReviewAt;
    if (lessonCheckComplete) {
      const passed = lessonCheckScore >= 2;
      host.innerHTML = `<div class="biz-check-result ${passed ? "is-pass" : "is-retry"}">
        <p class="biz-kicker">${reviewMode ? "SPACED REVIEW" : "CHECK RESULT"}</p>
          <h2>${passed ? "Nice work!" : "Review this lesson and try again"}</h2>
        <p class="biz-quiz-score">${lessonCheckScore} / 3</p>
        <p>${passed ? "You recalled the key ideas. Review them again in a few days." : "Review the examples, then try these questions again."}</p>
        ${passed && mastery[module.id] && mastery[module.id].nextReviewAt ? `<p class="biz-review-date">Next review: ${formatReviewDate(mastery[module.id].nextReviewAt)}.</p>` : ""}
        <button class="biz-quiz-reset" type="button">Try again</button>
      </div>`;
      host.querySelector(".biz-quiz-reset").addEventListener("click", () => startLessonCheck(module, false));
      return;
    }
    const check = lessonChecks[module.id][lessonCheckIndex];
    const answered = lessonCheckAnswer !== null;
    host.innerHTML = `<p class="biz-kicker">${reviewMode ? "SPACED REVIEW · " : ""}3-QUESTION CHECK</p>
      <h2>What do you remember?</h2>
      <p class="biz-quiz-intro">Answer from memory. Get at least 2 correct to confirm this skill.</p>
      ${record && record.passed ? `<p class="biz-review-date">${isReviewDue(module.id) ? "This review is due." : `Next review: ${formatReviewDate(reviewDueAt)}.`}</p>` : ""}
      <p class="biz-quiz-count">Question ${lessonCheckIndex + 1} of ${lessonChecks[module.id].length} · ${lessonCheckScore} correct</p>
      <p class="biz-quiz-question">${escapeHtml(check.q)}</p>
      <div class="biz-quiz-options">${check.o.map((option, index) => {
        const classes = ["biz-quiz-option"];
        if (answered && index === check.a) classes.push("is-correct");
        else if (answered && index === lessonCheckAnswer) classes.push("is-wrong");
        return `<button class="${classes.join(" ")}" type="button" data-lesson-answer="${index}" ${answered ? "disabled" : ""}>${String.fromCharCode(65 + index)}. ${escapeHtml(option)}</button>`;
      }).join("")}</div>
      ${answered ? `      <p class="biz-quiz-feedback ${lessonCheckAnswer === check.a ? "is-correct" : ""}" role="status"><strong>${lessonCheckAnswer === check.a ? "Correct!" : "Not quite. Remember:"}</strong> ${escapeHtml(check.w)}</p><button class="biz-quiz-next" type="button">${lessonCheckIndex === lessonChecks[module.id].length - 1 ? "See result" : "Next"}</button>` : ""}`;
    host.querySelectorAll("[data-lesson-answer]").forEach(button => button.addEventListener("click", () => {
      lessonCheckAnswer = Number(button.dataset.lessonAnswer);
      if (lessonCheckAnswer === check.a) lessonCheckScore++;
      renderLessonCheck(module);
      renderRight();
    }));
    const next = host.querySelector(".biz-quiz-next");
    if (next) next.addEventListener("click", () => {
      if (lessonCheckIndex === lessonChecks[module.id].length - 1) {
        lessonCheckComplete = true;
        saveMasteryRecord(module.id, lessonCheckScore);
        renderLessonCheck(module);
      } else {
        lessonCheckIndex++;
        lessonCheckAnswer = null;
        renderLessonCheck(module);
      }
      renderRight();
    });
  }

  function renderLesson() {
    if (capstoneOpen) return renderCapstone();
    const module = getModule();
    if (!module) return renderHome();
    const moduleIndex = allModules().indexOf(module);
    const phaseIndex = phaseIndexFor(module);
    const isComplete = completed.has(module.id);
    appHost.innerHTML = `
      <section class="sheet biz-lesson">
        <p class="biz-kicker">LESSON ${String(moduleIndex + 1).padStart(2, "0")} ${courseUi.of} ${allModules().length} · ${escapeHtml(phaseCopy[phaseIndex].title.toUpperCase())}</p>
        <div class="biz-lesson-head"><div><h1>${escapeHtml(copyFor(module).title)}</h1></div><button class="biz-mark" type="button" aria-pressed="${isComplete}">${isComplete ? courseUi.unmarkDone : courseUi.markDone}</button></div>
        <p class="biz-lesson-intro">${escapeHtml(copyFor(module).overview)}</p>
        <div class="biz-lesson-progress" aria-label="Lesson progress"><i style="width:${Math.round((activeSection + 1) / 6 * 100)}%"></i></div>
        <div id="biz-lesson-section"></div>
      </section>`;
    appHost.querySelector(".biz-mark").addEventListener("click", () => {
      if (completed.has(module.id)) completed.delete(module.id);
      else completed.add(module.id);
      try {
        localStorage.setItem(progressKey, JSON.stringify([...completed]));
      } catch (error) {
        console.error("Could not save Business English progress.", error);
      }
      renderAll();
    });
    appHost.querySelector("#biz-lesson-section").innerHTML = renderSection(module);
    appHost.querySelectorAll("[data-section]").forEach(button => button.addEventListener("click", () => {
      activeSection = Number(button.dataset.section);
      renderLesson();
      renderRight();
      centerHost.scrollTop = 0;
    }));
    const previous = appHost.querySelector("[data-previous-section]");
    const next = appHost.querySelector("[data-next-section]");
    previous.addEventListener("click", () => {
      if (activeSection > 0) {
        activeSection--;
        renderLesson();
        renderRight();
        centerHost.scrollTop = 0;
      }
    });
    next.addEventListener("click", () => {
      if (activeSection < 5) {
        activeSection++;
        renderLesson();
        renderRight();
        centerHost.scrollTop = 0;
      }
    });
    if (activeSection === 3) bindDraft(module);
    if (activeSection === 2) bindModelAudio(module);
    if (activeSection === 4) renderLessonCheck(module);
    if (activeSection === 5) renderQuiz();
    if (activeSection === 1) bindVocabularySearch();
  }

  function bindVocabularySearch() {
    const search = appHost.querySelector("#biz-vocab-search");
    const cards = [...appHost.querySelectorAll("[data-vocab-card]")];
    const count = appHost.querySelector(".biz-vocab-count");
    const empty = appHost.querySelector(".biz-vocab-empty");
    const filter = () => {
      const query = search.value.trim().toLocaleLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const matches = card.dataset.search.includes(query);
        card.hidden = !matches;
        if (matches) visible++;
      });
      count.textContent = `${visible} of ${cards.length} items`;
      empty.hidden = visible > 0;
    };
    search.addEventListener("input", filter);
    filter();
  }

  function bindDraft(module) {
    const textarea = appHost.querySelector("[data-draft]");
    const count = appHost.querySelector("#biz-word-count");
    const checkKey = `businessEnglishChecklist_${module.id}`;
    let checked = [];
    try {
      checked = JSON.parse(localStorage.getItem(checkKey) || "[]");
      if (!Array.isArray(checked)) checked = [];
    } catch (error) {
      console.error("Could not read Business English checklist.", error);
    }
    appHost.querySelectorAll("[data-check]").forEach((input, index) => {
      input.checked = checked.includes(index);
      input.addEventListener("change", () => {
        const next = [...appHost.querySelectorAll("[data-check]")].reduce((items, item, itemIndex) => {
          if (item.checked) items.push(itemIndex);
          return items;
        }, []);
        try {
          localStorage.setItem(checkKey, JSON.stringify(next));
        } catch (error) {
          console.error("Could not save Business English checklist.", error);
        }
      });
    });
    const updateCount = () => {
      const words = textarea.value.trim().match(/\S+/g) || [];
      count.textContent = `${words.length} words`;
    };
    textarea.addEventListener("input", () => {
      drafts[module.id] = textarea.value;
      try {
        localStorage.setItem(draftKey, JSON.stringify(drafts));
      } catch (error) {
        console.error("Could not save Business English draft.", error);
      }
      updateCount();
    });
    updateCount();
  }

  function bindModelAudio(module) {
    const playButton = appHost.querySelector("[data-speak]");
    const stopButton = appHost.querySelector("[data-stop-speech]");
    const status = appHost.querySelector(".biz-audio-status");
    playButton.addEventListener("click", () => {
      if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
        status.textContent = "Audio playback is unavailable. Open the transcript and read it aloud.";
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new window.SpeechSynthesisUtterance(module.model);
      utterance.lang = "en-US";
      utterance.rate = 0.88;
      utterance.onstart = () => { status.textContent = "Listen for the main point and key details."; };
      utterance.onend = () => { status.textContent = "Now summarise the message without looking at the transcript."; };
      utterance.onerror = event => {
        if (event.error !== "canceled" && event.error !== "interrupted") {
          console.error("Could not play the Business English model.", event.error);
          status.textContent = "Audio playback failed. Open the transcript and read it aloud.";
        }
      };
      window.speechSynthesis.speak(utterance);
    });
    stopButton.addEventListener("click", () => {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      status.textContent = "Playback stopped.";
    });
  }

  function renderQuiz() {
    const quizHost = appHost.querySelector("#biz-quiz");
    if (!quizHost) return;
    if (quizComplete) {
      const percentage = Math.round(quizScore / questions.length * 100);
      quizHost.innerHTML = `<div class="biz-quiz-result"><p class="biz-quiz-score">${quizScore} / ${questions.length} · ${percentage}%</p><p>${percentage >= 85 ? "Excellent work. Practise using these skills in your own workplace." : percentage >= 65 ? "You’re making progress. Review missed answers and try again." : "Keep practising. Review the lessons and return when you’re ready."}</p><button class="biz-quiz-reset" type="button">Try again</button></div>`;
      quizHost.querySelector(".biz-quiz-reset").addEventListener("click", () => {
        quizIndex = 0; quizScore = 0; selectedAnswer = null; quizComplete = false; renderQuiz();
        renderRight();
      });
      return;
    }
    const question = questions[quizIndex];
    const answered = selectedAnswer !== null;
    quizHost.innerHTML = `
      <p class="biz-quiz-count">Question ${quizIndex + 1} of ${questions.length}</p>
      <p class="biz-quiz-question">${escapeHtml(question.q)}</p>
      <div class="biz-quiz-options">${question.o.map((option, index) => {
        const classes = ["biz-quiz-option"];
        if (answered && index === question.a) classes.push("is-correct");
        else if (answered && index === selectedAnswer) classes.push("is-wrong");
        return `<button class="${classes.join(" ")}" type="button" data-answer="${index}" ${answered ? "disabled" : ""}>${String.fromCharCode(65 + index)}. ${escapeHtml(option)}</button>`;
      }).join("")}</div>
      ${answered ? `<p class="biz-quiz-feedback ${selectedAnswer === question.a ? "is-correct" : ""}" role="status"><strong>${selectedAnswer === question.a ? "Correct!" : "Not quite. Remember:"}</strong> ${escapeHtml(question.w)}</p><button class="biz-quiz-next" type="button">${quizIndex === questions.length - 1 ? "See result" : "Next"}</button>` : ""}`;
    quizHost.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => {
      selectedAnswer = Number(button.dataset.answer);
      if (selectedAnswer === question.a) quizScore++;
      renderQuiz();
      renderRight();
    }));
    const next = quizHost.querySelector(".biz-quiz-next");
    if (next) next.addEventListener("click", () => {
      if (quizIndex === questions.length - 1) quizComplete = true;
      else quizIndex++;
      selectedAnswer = null;
      renderQuiz();
      renderRight();
    });
  }

  function renderAll() {
    renderLeft();
    renderRight();
    renderLesson();
  }

  const themeButton = document.getElementById("biz-theme-toggle");
  const savedTheme = localStorage.getItem("b1exam_v2");
  try {
    const settings = savedTheme ? JSON.parse(savedTheme).settings : null;
    document.documentElement.dataset.theme = settings && settings.theme === "dark" ? "dark" : "light";
  } catch (error) {
    console.error("Could not read saved appearance settings.", error);
  }
  function syncThemeButton() {
    const dark = document.documentElement.dataset.theme === "dark";
    themeButton.setAttribute("aria-pressed", String(dark));
    themeButton.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
    themeButton.querySelector(".theme-toggle-label").textContent = dark ? "Dark theme" : "Light theme";
  }
  themeButton.addEventListener("click", () => {
    document.documentElement.dataset.theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    syncThemeButton();
  });
  document.querySelectorAll("#biz-panel-tabs button").forEach(button => button.addEventListener("click", () => switchPanel(button.dataset.panel)));
  syncThemeButton();
  renderAll();
})();
