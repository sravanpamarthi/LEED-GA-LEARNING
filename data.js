window.STUDY_DATA = {
  title: "LEED GA Coach",
  source: "Structured from the extracted LeadingGreen LEED GA Study Guide and organized into a 14-day sprint.",
  days: [
    {
      id: "day-1",
      day: 1,
      title: "Green Building Foundations",
      theme: "Start with why green building matters, the triple bottom line, and the core vocabulary that keeps showing up on the exam.",
      focus: ["sustainability", "triple bottom line", "life cycle thinking"],
      lessons: [
        { heading: "What green building is trying to solve", body: "The guide frames green building as a response to energy use, water use, waste, emissions, and unhealthy indoor environments. LEED rewards better choices across design, construction, operations, and occupant experience." },
        { heading: "Triple bottom line", body: "Remember the three lenses: people, planet, and profit. Exam questions often ask you to connect a strategy to one or more social, environmental, or economic benefits." },
        { heading: "Life cycle mindset", body: "LEED thinking goes beyond first cost. Keep life cycle assessment, life cycle cost, embodied energy, hard costs, and soft costs in your study vocabulary." }
      ],
      flashcards: [["Triple bottom line", "People, planet, profit."], ["LCA", "Life cycle assessment of environmental impacts across a product or material life."], ["Embodied energy", "Energy used across extraction, manufacturing, transport, use, and disposal."]],
      action: "Make a one-page cheat sheet with the triple bottom line, LCA, LCC, OPR, and BOD.",
      quiz: [
        { prompt: "Which concept best captures the social, environmental, and economic value of green building?", choices: ["Triple bottom line", "ASHRAE baseline", "Brownfield reuse", "Owner's project requirements"], answer: 0, explanation: "The triple bottom line is the people-planet-profit framework used throughout sustainability discussions." },
        { prompt: "Life cycle assessment is primarily used to evaluate:", choices: ["A material's environmental impacts over its full life", "Only first-cost construction spending", "Only maintenance budgets", "Only code compliance risk"], answer: 0, explanation: "LCA looks at impacts over the full life of a product or material, not just first cost." },
        { prompt: "Which item is a soft cost rather than a hard cost?", choices: ["Roof membrane", "Concrete slab", "Permit fee", "Steel framing"], answer: 2, explanation: "Permit, legal, and design fees are soft costs; installed building components are hard costs." }
      ]
    },
    {
      id: "day-2",
      day: 2,
      title: "USGBC, GBCI, and LEED Basics",
      theme: "Learn who does what, how certification works, and how projects move from registration to review.",
      focus: ["USGBC", "GBCI", "certification levels"],
      lessons: [
        { heading: "Who runs what", body: "USGBC develops and supports LEED. GBCI administers credentialing and certification. Keep the distinction clean because exams love role-matching questions." },
        { heading: "LEED structure", body: "Projects earn points across categories, meet prerequisites, and then land at Certified, Silver, Gold, or Platinum depending on total points." },
        { heading: "Review flow", body: "Projects can use split review or combined review. Preliminary review may request clarification, and final review leads to the accepted rating." }
      ],
      flashcards: [["USGBC", "Develops LEED and advances green building leadership."], ["GBCI", "Administers professional credentials and project certification review."], ["Split review", "Design-phase and construction-phase submissions are reviewed separately."]],
      action: "Memorize the difference between USGBC, GBCI, LEED Online, and certification levels.",
      quiz: [
        { prompt: "Which organization primarily administers LEED credentialing and project certification review?", choices: ["EPA", "USGBC", "GBCI", "ASHRAE"], answer: 2, explanation: "GBCI handles credentialing and certification administration." },
        { prompt: "A project that submits some credits during design and the rest after construction is using:", choices: ["Split review", "Appeal review", "Portfolio review", "Reference review"], answer: 0, explanation: "Split review separates design and construction submissions." },
        { prompt: "Which item must a project satisfy before earning optional points?", choices: ["Pilot credits", "Prerequisites", "Innovation points", "Regional priority points"], answer: 1, explanation: "Prerequisites are mandatory before credits can count." }
      ]
    },
    {
      id: "day-3",
      day: 3,
      title: "Integrative Process and Project Teaming",
      theme: "This is the collaboration day: OPR, BOD, early analysis, and why LEED wants teams talking early.",
      focus: ["integrative process", "OPR", "BOD"],
      lessons: [
        { heading: "Integrative process mindset", body: "The guide emphasizes moving away from a linear handoff model. Owners, designers, facility managers, engineers, and contractors should align early around sustainability goals." },
        { heading: "OPR and BOD", body: "The owner's project requirements define the goals. The basis of design translates those goals into technical decisions and system descriptions." },
        { heading: "Synergies and tradeoffs", body: "One decision can affect multiple credits. Daylighting may help EQ but create an energy penalty if not handled well. This systems-thinking mindset shows up everywhere on the exam." }
      ],
      flashcards: [["OPR", "Owner's project requirements."], ["BOD", "Basis of design translating OPR into technical strategy."], ["Credit synergy", "A strategy that supports more than one credit or prerequisite."]],
      action: "Practice explaining OPR and BOD out loud until they feel automatic.",
      quiz: [
        { prompt: "What does the OPR capture?", choices: ["Only the HVAC schedule", "The owner's goals and project requirements", "The contractor's punch list", "The final commissioning report"], answer: 1, explanation: "OPR is the owner's statement of goals, needs, and expectations." },
        { prompt: "Which document translates owner goals into technical design assumptions and system descriptions?", choices: ["BOD", "ESC plan", "CIR", "MPR"], answer: 0, explanation: "The BOD converts the owner's goals into design logic." },
        { prompt: "Which scenario best represents integrative process thinking?", choices: ["Each discipline works separately until CDs are finished", "The team coordinates early to find synergies and reduce tradeoffs", "Only the architect sets sustainability goals", "Credits are selected after construction"], answer: 1, explanation: "Integrative process is early, coordinated, cross-disciplinary planning." }
      ]
    },
    {
      id: "day-4",
      day: 4,
      title: "Location and Transportation",
      theme: "Understand the boundary rules, smart location logic, density, transit access, and why LEED tries to reduce car dependency.",
      focus: ["LEED boundary", "smart location", "alternative transportation"],
      lessons: [
        { heading: "Why LT matters", body: "Transportation emissions are a major greenhouse gas source. LEED rewards locations that reduce vehicle trips and connect people to transit, services, and community assets." },
        { heading: "Boundaries and site terms", body: "Keep LEED project boundary, property boundary, building footprint, and development footprint separate in your mind. Also remember that gerrymandering the LEED boundary is prohibited." },
        { heading: "Smart growth pattern", body: "Previously developed sites, walkability, bicycle support, nearby services, transit access, and reduced parking dependence are classic LT ideas." }
      ],
      flashcards: [["LEED project boundary", "The portion of the site submitted for LEED certification and used consistently in calculations."], ["Development footprint", "All altered land area including building, paving, roads, and landscaping."], ["Gerrymandering", "Unreasonably drawing boundaries just to earn credits."]],
      action: "Review every site-related term until you can define it without looking.",
      quiz: [
        { prompt: "What is the main intent of the LT category?", choices: ["Increase irrigation", "Reduce transportation-related environmental impacts", "Focus only on indoor air quality", "Replace commissioning"], answer: 1, explanation: "LT aims to reduce transportation emissions and improve access to better mobility choices." },
        { prompt: "Which statement about the LEED project boundary is correct?", choices: ["It can exclude inconvenient areas if that helps credit compliance", "It only matters for energy credits", "It must remain consistent for required calculations", "It is the same as the property boundary in every case"], answer: 2, explanation: "The LEED project boundary must be applied consistently and cannot be manipulated for credit gain." },
        { prompt: "Which strategy best supports LT goals?", choices: ["Remote greenfield development with abundant parking", "Locating near transit and existing services", "Maximizing impervious area", "Using potable water for irrigation"], answer: 1, explanation: "Transit access and community connectivity are central LT strategies." }
      ]
    },
    {
      id: "day-5",
      day: 5,
      title: "Sustainable Sites",
      theme: "Focus on existing site conditions, pollution prevention, habitat, stormwater, and heat island thinking.",
      focus: ["construction pollution prevention", "site assessment", "habitat"],
      lessons: [
        { heading: "What SS covers", body: "SS is about what happens on the site itself: ecology, runoff, habitat, erosion control, outdoor impacts, and using site conditions intelligently instead of fighting them." },
        { heading: "Construction activity pollution prevention", body: "Know erosion and sedimentation control, topsoil protection, runoff control, and dust management. The guide points back to EPA construction permit expectations." },
        { heading: "Site assessment and restoration", body: "Teams evaluate topography, hydrology, climate, vegetation, soils, human use, and health effects, then protect or restore habitat where possible." }
      ],
      flashcards: [["ESC plan", "Erosion and sedimentation control plan used to reduce construction pollution."], ["Site assessment", "Evaluation of existing natural and human site conditions."], ["Heat island", "Temperature rise caused by dark, hard, heat-absorbing surfaces."]],
      action: "Draw a quick map of SS topics: erosion, habitat, stormwater, open space, heat island, light pollution.",
      quiz: [
        { prompt: "Which plan is required to reduce construction pollution on-site?", choices: ["Basis of design", "Erosion and sedimentation control plan", "Measurement and verification plan", "Green cleaning policy"], answer: 1, explanation: "Construction activity pollution prevention relies on an ESC plan." },
        { prompt: "Which item is part of a site assessment?", choices: ["Employee handbook", "Solar exposure and prevailing winds", "Furniture warranty data", "Commissioning authority resume"], answer: 1, explanation: "Climate conditions such as sun and wind are part of site assessment." },
        { prompt: "Which action best aligns with SS intent?", choices: ["Disturb every part of the site equally", "Ignore stormwater flow", "Protect and restore habitat where feasible", "Increase light trespass"], answer: 2, explanation: "Habitat protection and restoration are core SS ideas." }
      ]
    },
    {
      id: "day-6",
      day: 6,
      title: "Water Efficiency",
      theme: "Learn potable vs nonpotable logic, FTE math, indoor and outdoor water reduction, and metering.",
      focus: ["potable water", "graywater", "FTE"],
      lessons: [
        { heading: "The WE category lens", body: "WE focuses on reducing potable water demand first, then using smarter sources and better monitoring. Think indoor fixtures, outdoor water, process water, and metering." },
        { heading: "Water vocabulary", body: "Know potable water, graywater, blackwater, process water, and stormwater runoff. The exam often tests whether you can sort sources correctly." },
        { heading: "Occupancy math", body: "Full-time equivalent occupants support water baselines. One FTE equals a regular occupant based on a 40-hour week, and consistency matters across calculations." }
      ],
      flashcards: [["Potable water", "Water that meets drinking-water standards for human consumption."], ["Graywater", "Domestic wastewater from showers, tubs, bathroom sinks, and laundry, excluding toilet waste."], ["FTE", "Full-time equivalent occupant used in baseline calculations."]],
      action: "Memorize the difference between graywater, blackwater, process water, and stormwater.",
      quiz: [
        { prompt: "Which water source is typically considered graywater?", choices: ["Toilet discharge", "Bathroom sink wastewater", "Industrial boiler blowdown", "Kitchen grease waste"], answer: 1, explanation: "Bathroom sinks, showers, tubs, and laundry sources are common graywater sources." },
        { prompt: "Water efficiency in LEED emphasizes:", choices: ["Using more water with lower pressure", "Reducing potable water demand and tracking usage", "Ignoring occupant counts", "Replacing all fixtures with decorative ones"], answer: 1, explanation: "WE focuses on reducing potable demand and improving measurement and management." },
        { prompt: "Why does FTE matter in WE calculations?", choices: ["It defines the color of plumbing fixtures", "It helps establish water-use baselines", "It replaces the LEED boundary", "It is only used in MR credits"], answer: 1, explanation: "Occupant calculations support baseline and design-case water use comparisons." }
      ]
    },
    {
      id: "day-7",
      day: 7,
      title: "Energy and Atmosphere",
      theme: "This is the highest-value category. Know commissioning, energy performance, refrigerants, and renewables.",
      focus: ["commissioning", "energy performance", "refrigerants"],
      lessons: [
        { heading: "Why EA carries so much weight", body: "Buildings consume a major share of electricity and emissions. LEED therefore puts many points in EA and rewards performance, verification, and better energy sources." },
        { heading: "Commissioning essentials", body: "Fundamental commissioning is required. The commissioning authority verifies that energy-related systems are installed, calibrated, and performing according to OPR and BOD." },
        { heading: "Refrigerant and energy logic", body: "LEED cares about energy use and refrigerant impacts. Keep ozone depletion potential, global warming potential, and the difference between direct and indirect emissions in mind." }
      ],
      flashcards: [["CxA", "Commissioning authority."], ["Fundamental commissioning", "Required verification of key energy-related systems."], ["ODP vs GWP", "Ozone depletion potential versus global warming potential."]],
      action: "Pause here and take the Week 1 Checkpoint after the daily quiz.",
      quiz: [
        { prompt: "Which role leads and oversees the commissioning process?", choices: ["Landscape architect", "CxA", "Owner's attorney", "Civil reviewer"], answer: 1, explanation: "The commissioning authority leads and reviews the commissioning effort." },
        { prompt: "Commissioning is meant to verify that systems are:", choices: ["Only purchased cheaply", "Installed and performing according to project requirements", "Decorative and visible", "Hidden from occupants"], answer: 1, explanation: "Commissioning verifies installation, calibration, and performance against OPR and BOD." },
        { prompt: "Which pair relates specifically to refrigerant atmospheric impacts?", choices: ["FTE and MPR", "ODP and GWP", "SRI and FSC", "ESC and IAQ"], answer: 1, explanation: "ODP and GWP are the core refrigerant impact metrics to remember." }
      ]
    },
    {
      id: "day-8",
      day: 8,
      title: "Materials and Resources",
      theme: "Shift to life-cycle material thinking, waste reduction, recycling, transparency, and responsible sourcing.",
      focus: ["waste reduction", "life cycle impacts", "responsible sourcing"],
      lessons: [
        { heading: "MR big picture", body: "This category tries to reduce environmental harm from extraction, manufacturing, transport, installation, and end-of-life. Think cradle-to-cradle, not cradle-to-grave." },
        { heading: "Waste hierarchy", body: "Source reduction comes first, then reuse, recycling, and recovery. LEED rewards planning and infrastructure that keep material out of landfills." },
        { heading: "Transparency and sourcing", body: "Keep ideas like ingredient disclosure, corporate sustainability reporting, chain of custody, FSC, and responsible extraction in your study stack." }
      ],
      flashcards: [["Source reduction", "Reducing waste before it is created."], ["Chain of custody", "Tracking a product from extraction through end use."], ["Cradle to cradle", "Closed-loop material thinking that favors reuse or recycling over disposal."]],
      action: "Create a mini table for source reduction, reuse, recycling, recovery, and disposal.",
      quiz: [
        { prompt: "Which strategy sits highest in the EPA-style waste hierarchy?", choices: ["Landfilling", "Recovery", "Source reduction", "Incineration"], answer: 2, explanation: "Source reduction is preferred because it avoids waste creation in the first place." },
        { prompt: "Which term describes tracking a product from extraction through end use?", choices: ["Chain of custody", "Erosion control", "Thermal comfort", "Regional priority"], answer: 0, explanation: "Chain of custody is the traceability concept often associated with certified wood and sourcing claims." },
        { prompt: "MR most strongly encourages teams to think about:", choices: ["Only aesthetics", "Material life cycle impacts", "Only parking ratios", "Only transit schedules"], answer: 1, explanation: "MR is fundamentally about the full life-cycle impact of materials." }
      ]
    },
    {
      id: "day-9",
      day: 9,
      title: "Indoor Environmental Quality",
      theme: "Air quality, occupant health, low-emitting materials, comfort, daylight, and views all live here.",
      focus: ["IAQ", "thermal comfort", "low-emitting materials"],
      lessons: [
        { heading: "What EQ is protecting", body: "EQ is about the human experience inside the building: clean air, comfortable temperature and humidity, visual quality, acoustic quality, and healthier materials." },
        { heading: "Common test ideas", body: "Expect questions about ventilation, tobacco smoke control, low-emitting materials, construction IAQ management, daylight, views, and thermal comfort." },
        { heading: "Exam shortcut", body: "If an answer improves the health, comfort, or experience of occupants indoors, it often points toward EQ. Just be careful not to confuse it with SS or EA." }
      ],
      flashcards: [["IAQ", "Indoor air quality."], ["Low-emitting materials", "Products selected to reduce indoor contaminant exposure."], ["Thermal comfort", "Conditions under which occupants feel satisfied with the thermal environment."]],
      action: "Make a list of five EQ-friendly strategies and five pollutants or risks they help reduce.",
      quiz: [
        { prompt: "Which category most directly addresses occupant comfort and indoor air quality?", choices: ["MR", "EQ", "RP", "LT"], answer: 1, explanation: "EQ centers on indoor environmental quality and occupant experience." },
        { prompt: "Low-emitting materials are mainly selected to:", choices: ["Increase irrigation", "Reduce harmful indoor contaminant exposure", "Expand parking", "Boost site density"], answer: 1, explanation: "These products help limit indoor pollutant loads." },
        { prompt: "Which strategy best aligns with EQ intent?", choices: ["Provide daylight and good indoor air quality", "Increase runoff", "Use more virgin material", "Build farther from transit"], answer: 0, explanation: "Daylight and healthy indoor air are classic EQ outcomes." }
      ]
    },
    {
      id: "day-10",
      day: 10,
      title: "Innovation and Regional Priority",
      theme: "These categories are small but easy to score in your memory if you understand intent.",
      focus: ["innovation", "exemplary performance", "regional priority"],
      lessons: [
        { heading: "Innovation", body: "Innovation rewards new strategies, exemplary performance, or established innovation paths like using a LEED AP on the project team." },
        { heading: "Regional priority", body: "Regional priority points highlight geographically important environmental issues. Think water in dry places, habitat in sensitive places, and similar regional concerns." },
        { heading: "How to study these efficiently", body: "Keep the concepts simple: innovation means going beyond the standard path; regional priority means local environmental importance." }
      ],
      flashcards: [["Innovation credit", "Rewards novel strategies, exemplary performance, or selected innovation paths."], ["Exemplary performance", "Performance significantly above a standard credit threshold."], ["Regional priority", "Extra emphasis on issues important in a project's geographic area."]],
      action: "Add Innovation and Regional Priority to your final memory deck so they stay fresh.",
      quiz: [
        { prompt: "Regional Priority credits are intended to:", choices: ["Replace prerequisites", "Highlight locally important environmental concerns", "Track furniture warranties", "Define construction sequencing"], answer: 1, explanation: "RP points focus on issues that matter especially in that region." },
        { prompt: "Exemplary performance is most closely associated with:", choices: ["Innovation", "Minimum program requirements", "Appeals only", "Construction access roads"], answer: 0, explanation: "Exemplary performance is one way to earn an Innovation point." },
        { prompt: "Which statement best describes Innovation credit intent?", choices: ["Reward going beyond standard LEED expectations", "Reduce occupant density", "Create parking minimums", "Increase potable water use"], answer: 0, explanation: "Innovation rewards creative or exemplary sustainability achievement." }
      ]
    },
    {
      id: "day-11",
      day: 11,
      title: "Rating Systems, Homes, and Stakeholders",
      theme: "Strengthen the systems and process side of the exam: different rating families, homes, providers, raters, and documentation flow.",
      focus: ["LEED homes", "green raters", "providers"],
      lessons: [
        { heading: "Why this matters", body: "The exam is not only category knowledge. It also checks whether you understand who participates in LEED and how project types and verification paths differ." },
        { heading: "LEED for Homes basics", body: "The guide highlights provider organizations, Green Raters, and the fact that Homes uses a different process than mainstream LEED Online workflows." },
        { heading: "Study angle", body: "Focus on role clarity: provider oversight, Green Rater field verification, project team documentation, and how rating-system selection happens." }
      ],
      flashcards: [["Green Rater", "Field verifier working on LEED for Homes projects."], ["Homes Provider", "Organization that oversees Green Raters and quality assurance for Homes projects."], ["Rating system selection", "Choosing the correct LEED system based on project type and scope."]],
      action: "Review rating-system names and participant roles one more time before checkpoint two.",
      quiz: [
        { prompt: "Who provides in-the-field verification on LEED for Homes projects?", choices: ["Green Raters", "ASHRAE reviewers", "Only the owner", "The local zoning board"], answer: 0, explanation: "Green Raters perform the on-site verification work for Homes projects." },
        { prompt: "Homes Providers primarily offer:", choices: ["Furniture procurement", "Quality assurance oversight and program support", "Parking enforcement", "Acoustic testing only"], answer: 1, explanation: "Providers oversee Green Raters and support the certification pathway." },
        { prompt: "Day 11 is mostly helping you prepare for questions about:", choices: ["Project roles and rating system process", "Only irrigation calculations", "Only refrigerant chemistry", "Only excavation safety"], answer: 0, explanation: "This block reinforces process, project-type, and participant questions." }
      ]
    },
    {
      id: "day-12",
      day: 12,
      title: "Exam Strategy and Weak-Spot Review",
      theme: "Use this day to tie the whole book together: process, synergies, percentages, and question interpretation.",
      focus: ["exam tips", "question strategy", "integrated review"],
      lessons: [
        { heading: "How to approach the exam", body: "The guide recommends reading thoroughly, reviewing explanations, and aiming for consistent performance on mock exams. That pattern is built directly into this app." },
        { heading: "What to review today", body: "Hit your weak spots: boundary terms, water sources, commissioning sequence, site impacts, waste hierarchy, EQ strategies, and role definitions." },
        { heading: "Question-reading discipline", body: "Look for the category intent first, then the most directly aligned answer. LEED questions often include one answer that sounds good generally but one answer that matches the category precisely." }
      ],
      flashcards: [["Best study signal", "Consistently solid mock-exam scores with reviewed explanations."], ["Process question clue", "Look for the sequence or role being tested."], ["Category clue", "Ask which answer most directly supports the category intent."]],
      action: "Take the Week 2 Checkpoint after the daily quiz, then review every wrong answer.",
      quiz: [
        { prompt: "What is the smartest use of a wrong answer during prep?", choices: ["Ignore it and move on", "Review why the correct answer is better", "Assume it was a trick", "Memorize only the letter choice"], answer: 1, explanation: "Reviewing explanations is how you turn misses into score gains." },
        { prompt: "A strong LEED GA test strategy is to first identify:", choices: ["The longest answer choice", "The category intent or process being tested", "The most technical acronym", "The rarest standard name"], answer: 1, explanation: "Category intent and process logic help eliminate distractors quickly." },
        { prompt: "According to the guide's exam advice, consistent mock performance around what level signals readiness?", choices: ["50%", "65%", "80%+", "100% only"], answer: 2, explanation: "The study guide points to consistent 80%+ mock performance as a strong readiness sign." }
      ]
    },
    {
      id: "day-13",
      day: 13,
      title: "Mock Exam Day 1",
      theme: "Light review only. Save your energy for a timed-style mock and careful post-test review.",
      focus: ["mock exam", "review discipline", "timing"],
      lessons: [
        { heading: "How to use this day", body: "Do a short warm-up, then take Mock Exam A. Review explanations carefully, especially for categories where your accuracy slips." },
        { heading: "Track patterns", body: "If your misses cluster in one category, write the category name and the exact concept you missed, not just the question number." },
        { heading: "Stay practical", body: "You do not need perfection. You need confidence, pattern recognition, and a stable score." }
      ],
      flashcards: [["Mock goal", "Simulate exam thinking and reveal weak spots."], ["Post-mock review", "Learn the concept behind every miss."], ["Timing mindset", "Steady pacing beats rushing."]],
      action: "Take Mock Exam A from the Bigger Tests section.",
      quiz: [
        { prompt: "What is the main purpose of Mock Exam Day 1?", choices: ["Learn brand-new content", "Reveal weak spots and practice exam thinking", "Skip review and rest", "Focus only on memorizing acronyms"], answer: 1, explanation: "Mock days are for simulation, diagnosis, and review." },
        { prompt: "After a mock exam, the best next step is to:", choices: ["Only celebrate the score", "Review patterns behind wrong answers", "Delete the results", "Change study resources immediately"], answer: 1, explanation: "The highest value comes from analyzing misses and correcting them." },
        { prompt: "A strong pacing mindset is:", choices: ["Rush every easy question", "Steady, accurate progress", "Spend half the exam on one hard item", "Guess randomly to finish early"], answer: 1, explanation: "Steady pacing is more reliable than rushed or erratic timing." }
      ]
    },
    {
      id: "day-14",
      day: 14,
      title: "Final Confidence Day",
      theme: "Finish with Mock Exam B, then use your saved results to decide what gets one last review before test day.",
      focus: ["final mock", "confidence", "last review"],
      lessons: [
        { heading: "Last-day approach", body: "Keep the final day calm. Take Mock Exam B, scan your weakest category, and avoid cramming brand-new material." },
        { heading: "What matters most now", body: "Concept clarity beats volume. Make sure you can define the core terms, recognize category intent, and distinguish common look-alike answers." },
        { heading: "Your readiness signal", body: "If your mocks and checkpoints are trending solidly and your daily quizzes are mostly clean, you are in good shape for the real exam." }
      ],
      flashcards: [["Final review", "Tighten weak concepts; do not overload yourself."], ["Confidence source", "Patterns of solid practice scores."], ["Exam-day goal", "Clear thinking and accurate category recognition."]],
      action: "Take Mock Exam B and use your results dashboard to choose one final revision topic.",
      quiz: [
        { prompt: "What should you avoid on the final prep day?", choices: ["Short targeted review", "Reviewing weak concepts", "Cramming large amounts of brand-new content", "Taking one final mock"], answer: 2, explanation: "The last day should reinforce, not overwhelm." },
        { prompt: "Which result pattern is the best readiness signal?", choices: ["One lucky score", "Consistent performance across quizzes and mocks", "Only memorizing definitions", "Skipping full-length practice"], answer: 1, explanation: "Consistency across several practice sets is much more reliable than one isolated result." },
        { prompt: "The final study choice after Mock B should be:", choices: ["A focused review of the weakest concept area", "Starting a new textbook", "Ignoring the score", "Rewriting every note from scratch"], answer: 0, explanation: "Use the final mock as a guide for one last targeted revision block." }
      ]
    }
  ],
  assessments: [
    {
      id: "week-1-checkpoint",
      title: "Week 1 Checkpoint",
      type: "checkpoint",
      recommendedDay: 7,
      description: "Covers days 1-7: foundations, LEED process, IP, LT, SS, WE, and EA.",
      questions: [
        { prompt: "Which framework summarizes green building benefits as people, planet, and profit?", choices: ["ASHRAE 90.1", "Triple bottom line", "Integrated pest management", "Demand response"], answer: 1, explanation: "Triple bottom line is the social, environmental, and economic framework." },
        { prompt: "Which document defines owner goals before design solutions are translated technically?", choices: ["BOD", "OPR", "CIR", "ESC plan"], answer: 1, explanation: "The OPR comes first; the BOD then translates it into technical design terms." },
        { prompt: "Which term refers to unfairly drawing a project boundary only to help earn LEED points?", choices: ["Charrette", "Commissioning", "Gerrymandering", "Recertification"], answer: 2, explanation: "Boundary gerrymandering is prohibited in LEED." },
        { prompt: "An ESC plan is most closely associated with:", choices: ["Energy metering", "Construction pollution prevention", "Furniture sourcing", "Acoustic privacy"], answer: 1, explanation: "It reduces erosion, sedimentation, and other construction-phase pollution impacts." },
        { prompt: "Which water type excludes toilet waste and is often reused for nonpotable purposes?", choices: ["Blackwater", "Potable water", "Graywater", "Refrigerant condensate only"], answer: 2, explanation: "Graywater usually excludes toilet waste." },
        { prompt: "A full-time equivalent occupant is based on:", choices: ["20 hours per week", "30 hours per week", "40 hours per week", "50 hours per week"], answer: 2, explanation: "One FTE is based on a 40-hour week." },
        { prompt: "Which person leads commissioning oversight?", choices: ["CxA", "Provider", "Green Rater", "Civil surveyor"], answer: 0, explanation: "The commissioning authority leads the commissioning process." },
        { prompt: "ODP is most directly related to:", choices: ["Ozone depletion", "Indoor daylight", "Water runoff", "Material ingredient disclosure"], answer: 0, explanation: "ODP means ozone depletion potential." },
        { prompt: "Which site characteristic belongs in a site assessment?", choices: ["Employee payroll", "Topography and hydrology", "Printer toner inventory", "Furniture finish warranty"], answer: 1, explanation: "Site assessment includes natural and human site characteristics such as topography and hydrology." },
        { prompt: "Which LEED goal is most aligned with locating near transit and existing services?", choices: ["Reduce transportation impacts", "Increase potable water use", "Expand landfill waste", "Raise refrigerant leakage"], answer: 0, explanation: "That is classic LT intent." }
      ]
    },
    {
      id: "week-2-checkpoint",
      title: "Week 2 Checkpoint",
      type: "checkpoint",
      recommendedDay: 12,
      description: "Covers days 8-12: MR, EQ, Innovation, RP, Homes, roles, and exam strategy.",
      questions: [
        { prompt: "Which waste strategy is preferred before reuse, recycling, or recovery?", choices: ["Source reduction", "Incineration", "Composting", "Landfilling"], answer: 0, explanation: "Source reduction sits highest in the waste hierarchy." },
        { prompt: "Chain of custody is used to document:", choices: ["Transit frequency", "Product traceability from extraction to end use", "Thermal comfort complaints", "Lighting controls"], answer: 1, explanation: "It tracks materials through the supply chain." },
        { prompt: "Which category most directly addresses low-emitting materials?", choices: ["EQ", "LT", "RP", "SS"], answer: 0, explanation: "Low-emitting materials support indoor environmental quality." },
        { prompt: "Exemplary performance can help earn a point in:", choices: ["Innovation", "Minimum program requirements", "Appeals only", "Construction logistics"], answer: 0, explanation: "Exemplary performance is a standard Innovation path." },
        { prompt: "Regional Priority credits emphasize:", choices: ["International trade policy", "Issues especially important in a project's local region", "Only material budgets", "The largest building on a campus"], answer: 1, explanation: "RP highlights local environmental priorities." },
        { prompt: "Who performs field verification on LEED for Homes projects?", choices: ["Green Rater", "CxA", "LEED AP only", "Energy utility"], answer: 0, explanation: "Green Raters perform the field verification role." },
        { prompt: "Homes Providers mainly support:", choices: ["Quality assurance oversight", "Only plumbing design", "Code appeals", "Stormwater modeling only"], answer: 0, explanation: "Providers oversee and support the Homes verification process." },
        { prompt: "A good exam tactic is to first identify:", choices: ["The rarest acronym", "The category intent or process being tested", "The longest answer", "The fastest guess"], answer: 1, explanation: "That helps you eliminate distractors and focus on the best answer." },
        { prompt: "Which statement best matches EQ intent?", choices: ["Support healthier and more comfortable indoor spaces", "Increase parking capacity", "Protect greenfields from development pressure", "Reduce extraction impacts"], answer: 0, explanation: "EQ is centered on indoor health and comfort." },
        { prompt: "Which phrase best fits MR intent?", choices: ["Reduce material life-cycle impacts", "Maximize single-occupancy commuting", "Boost exterior lighting power", "Increase potable water use"], answer: 0, explanation: "MR is about material sourcing, transparency, waste, and life-cycle impact." }
      ]
    },
    {
      id: "mock-a",
      title: "Mock Exam A",
      type: "mock",
      recommendedDay: 13,
      description: "A mixed 15-question mock across process, categories, and strategy.",
      questions: [
        { prompt: "Which organization develops LEED and advances green building leadership?", choices: ["USGBC", "EPA", "DOE", "GBCI"], answer: 0, explanation: "USGBC is the green building organization behind LEED." },
        { prompt: "The BOD should be aligned with the:", choices: ["Transit map only", "OPR", "Regional priority map only", "Furniture plan only"], answer: 1, explanation: "The basis of design is built from the owner's project requirements." },
        { prompt: "A project near transit and daily services is primarily helping which category?", choices: ["EQ", "LT", "MR", "ID"], answer: 1, explanation: "That is directly aligned with Location and Transportation." },
        { prompt: "Which strategy directly reduces construction-related runoff pollution?", choices: ["ESC plan", "Green cleaning policy", "Thermal comfort survey", "Demand response contract"], answer: 0, explanation: "An ESC plan controls erosion and sedimentation impacts." },
        { prompt: "Which water type is wastewater from toilets and urinals?", choices: ["Graywater", "Condensate", "Blackwater", "Potable water"], answer: 2, explanation: "Blackwater includes toilet and urinal waste streams." },
        { prompt: "Fundamental commissioning is best described as:", choices: ["Optional enhanced review only", "Required verification of energy-related systems", "Furniture procurement review", "Transit planning"], answer: 1, explanation: "Fundamental commissioning is a required EA prerequisite concept." },
        { prompt: "Which metric describes a refrigerant's contribution to ozone depletion?", choices: ["GWP", "SRI", "ODP", "FTE"], answer: 2, explanation: "ODP is ozone depletion potential." },
        { prompt: "Which choice best reflects the highest-priority waste action?", choices: ["Dispose", "Recover", "Source reduce", "Incinerate"], answer: 2, explanation: "Preventing waste is better than handling it later." },
        { prompt: "Low-emitting materials most directly support:", choices: ["Indoor air quality", "Stormwater management", "Transit access", "Habitat restoration"], answer: 0, explanation: "They reduce indoor exposure to contaminants." },
        { prompt: "Which point category can reward exemplary performance?", choices: ["Innovation", "Prerequisites", "MPRs", "Appeals"], answer: 0, explanation: "Exemplary performance is commonly tied to Innovation." },
        { prompt: "Regional Priority points are based on:", choices: ["The project's zip code and relevant regional issues", "Building height only", "Furniture cost only", "Tenant count only"], answer: 0, explanation: "They reflect local environmental priorities." },
        { prompt: "A Green Rater is associated with:", choices: ["LEED for Homes", "Only LEED ND", "Only Existing Buildings", "Only commissioning"], answer: 0, explanation: "Green Raters are part of the Homes verification path." },
        { prompt: "The most reliable final prep signal is:", choices: ["One perfect quiz", "Consistent performance across several practice sets", "A long study session", "Memorizing every acronym alphabetically"], answer: 1, explanation: "Consistency predicts readiness better than isolated success." },
        { prompt: "Which category most directly addresses daylight and views?", choices: ["EQ", "MR", "RP", "LT"], answer: 0, explanation: "Daylight and views are classic indoor environmental quality topics." },
        { prompt: "Which phrase best summarizes LEED thinking overall?", choices: ["Single-discipline optimization", "Integrated, systems-based sustainability", "Lowest first cost only", "Code compliance only"], answer: 1, explanation: "LEED strongly favors integrated, systems-based decision making." }
      ]
    },
    {
      id: "mock-b",
      title: "Mock Exam B",
      type: "mock",
      recommendedDay: 14,
      description: "A second mixed mock to validate readiness and highlight any final weak spots.",
      questions: [
        { prompt: "Which group best describes the triple bottom line?", choices: ["Water, energy, waste", "People, planet, profit", "Design, bid, build", "Cost, schedule, safety"], answer: 1, explanation: "The triple bottom line is people, planet, and profit." },
        { prompt: "Which document states the owner's sustainability goals and functional needs?", choices: ["BOD", "OPR", "CIR", "LEED interpretation"], answer: 1, explanation: "Those goals live in the OPR." },
        { prompt: "Which LEED category most directly rewards reducing car dependence through transit access?", choices: ["LT", "EA", "MR", "EQ"], answer: 0, explanation: "Transit access is core LT territory." },
        { prompt: "Which Sustainable Sites topic is specifically concerned with minimizing damage during construction?", choices: ["Low-emitting materials", "Construction activity pollution prevention", "Innovation strategy", "Green cleaning"], answer: 1, explanation: "That prerequisite targets construction-phase pollution impacts." },
        { prompt: "Potable water is:", choices: ["Any stormwater on-site", "Water suitable for human consumption", "Only graywater", "Only cooling tower water"], answer: 1, explanation: "Potable water meets drinking-water standards." },
        { prompt: "Which role verifies that commissioned systems are installed and operating as intended?", choices: ["Green Rater", "CxA", "Transit planner", "Facility cleaner"], answer: 1, explanation: "The commissioning authority leads that verification process." },
        { prompt: "GWP is most directly associated with:", choices: ["Global warming potential", "Groundwater protection", "Green wall placement", "Geographic watershed planning"], answer: 0, explanation: "GWP means global warming potential." },
        { prompt: "Which MR concept tracks responsible product sourcing from forest to final use?", choices: ["Chain of custody", "MPR", "Thermal comfort", "SRI"], answer: 0, explanation: "Chain of custody supports responsible sourcing claims." },
        { prompt: "Which answer best represents an EQ-supporting design move?", choices: ["Use low-emitting materials", "Increase the parking footprint", "Develop a remote greenfield site", "Maximize site disturbance"], answer: 0, explanation: "Low-emitting materials reduce indoor exposure risk." },
        { prompt: "Innovation points may be earned for:", choices: ["Exemplary performance", "Skipping prerequisites", "Reducing documentation quality", "Removing the design team"], answer: 0, explanation: "Exemplary performance is a standard Innovation pathway." },
        { prompt: "Regional Priority credit intent is best described as:", choices: ["Rewarding issues that matter most locally", "Replacing every other category", "Reducing all project budgets", "Increasing construction waste"], answer: 0, explanation: "RP responds to local environmental priorities." },
        { prompt: "Who oversees Green Raters in the LEED for Homes pathway?", choices: ["Homes Providers", "Only local code officials", "The owner alone", "The CxA alone"], answer: 0, explanation: "Providers oversee quality assurance and Green Rater support." },
        { prompt: "When two answers seem good, the better LEED exam strategy is to choose the one that:", choices: ["Sounds most technical", "Most directly matches category intent", "Is the longest", "Uses the newest acronym"], answer: 1, explanation: "LEED questions reward precise alignment with category intent." },
        { prompt: "Which study behavior best supports final exam readiness?", choices: ["Ignoring wrong answers", "Reviewing explanations and patterns after practice tests", "Only rereading titles", "Changing resources daily"], answer: 1, explanation: "Reviewing misses is where much of the learning happens." },
        { prompt: "Which statement best captures the app's overall study flow?", choices: ["Daily learning, daily quiz, checkpoint reviews, then mocks", "Only final mocks matter", "Memorize standards without context", "Skip process topics and study only categories"], answer: 0, explanation: "That is the exact 14-day structure built here." }
      ]
    }
  ]
};
