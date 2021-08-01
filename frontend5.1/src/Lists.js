import * as React from "react";
import computerScience from "./Images/computer science.jpg";
import economicsLogistics from "./Images/Economics and logistics.jpeg";
import economicsCapitalMarket from "./Images/Economics and capital market.jpeg";
import economicsAccounting from "./Images/economics and accounting.jpg";
import chemistry from "./Images/chemistry.jpg";
import biology from "./Images/biology.jpg";
import criminology from "./Images/criminology.jpg";
import sociologyAnthropology from "./Images/sociology and anthropology.jpg";
import publicHealthCare from "./Images/public health care.png";
import nursing from "./Images/nursing.png";
import  geotechnicalEngineering from "./Images/geotechnical engineering.jpg";
import architecturalEngineering  from "./Images/architectural engineering.jpg";
import enviromantalEngineering from "./Images/enviromantal engineering.jpg";
import psychology from "./Images/psychology.jpg";
import nutritionScience from "./Images/nutrition science.jpg";




    export const faculties = [
                {facName:"Business Faculty",
                prof:"Professor Eric Sussman",
                r:"r2",
                classes:[{prof: "Professor Alison Fragale", class: "Economics and logistics",type:"A"},
                        {prof: "Professor Sharon Oster", class: "Economics and Capital market",type:"A"},
                        {prof: "Professor Shane Dikolli", class: "Economics and Accounting",type:"A"}]},
                {facName:"Science Faculty",
                prof:"Professor Galileo Galilei",
                r:"r3",
                classes:[{ prof: "Professor Galileo Galilei", class: "Chemistry",type:"sc" },
                        { prof: "Professor William Gilbert", class: "Computer Science",type:"sc" },
                        { prof: "Professor Hans Lippershey", class: "Biology",type:"sc" }]},
                {facName:"Social Faculty",
                 prof:"Professor Amedeo Avogadro",
                 r:"r1",
                 classes:[{ prof: "Professor Amedeo Avogadro", class: "Criminology",type:"A" },
                         { prof: "Professor Robert Boyle", class: "Sociology and Anthropology",type:"A" },
                         { prof: "Professor Rachel Carson", class: "psychology",type:"A" }]},
                {facName:"Health Faculty",
                 prof:"Professor Alison Fragale",
                 r:"r4",
                 classes:[{ prof: "Professor Alison Fragale", class: "Public Health Care",type:"P.H" },
                         { prof: "Professor Sharon Oster", class: "Nursing",type:"S.N" },
                         { prof: "Professor Shane Dikolli", class: "Nutrition Science",type:"sc" }]}]
    export const buisnessFaculty =  [
            {prof: "Professor Alison Fragale", class: "Economics and logistics"},
            {prof: "Professor Sharon Oster", class: "Economics and Capital market"},
            {prof: "Professor Shane Dikolli", class: "Economics and Accounting"}];
    export const scienceFaculty = [
            { prof: "Professor Galileo Galilei", class: "Chemistry" },
            { prof: "Professor William Gilbert", class: "Computer Science" },
            { prof: "Professor Hans Lippershey", class: "Biology" }];
    export const socialFaculty =  [
            { prof: "Professor Amedeo Avogadro", class: "Criminology" },
            { prof: "Professor Robert Boyle", class: "Sociology and Anthropology" },
            { prof: "Professor Rachel Carson", class: "psychology" }];
    export const healthFaculty = [
            { prof: "Professor Alison Fragale", class: "Public Health Care" },
            { prof: "Professor Sharon Oster", class: "Nursing" },
            { prof: "Professor Shane Dikolli", class: "Nutrition Science" }];
    export const engiFaculty =[
            {prof: "Professor Sunil Agrawal", class: "Geotechnical Engineering" ,r:"r1"},
            {prof: "Professor Mohamed Abdou", class: "Environmental Engineering" ,r:"r2"},
            {prof: "Professor J.Keith Nisbett", class: "Architectural Engineering" ,r:"r3"}];
    export const homeClasses = [
            {class:"Economics and logistics",image:economicsLogistics,description:"Logistics management is the part of supply chain management and supply chain engineering that plans, implements, and controls the efficient, effective forward, and reverse flow and storage of goods, services, and related information between the point of origin and point of consumption to meet customer's requirements"},
            {class:"Economics and Capital market",image:economicsCapitalMarket,description:"Finance is a term for matters regarding the management, creation, and study of money and investments. Specifically, it deals with the questions of how an individual, company or government acquires money – called capital in the context of a business – and how they spend or invest that money"},
            {class:"Economics and Accounting",image:economicsAccounting,description:"Accounting or accountancy is the measurement, processing, and communication of financial and non financial information about economic entities such as businesses and corporations"},
            {class:"Chemistry",image:chemistry,description:"Chemistry is the scientific study of the properties and behavior of matter. It is a natural science that covers the elements that make up matter to the compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances"},
            {class:"Computer Science",image:computerScience ,description:"Computer science is the study of algorithmic processes, computational machines and computation itself As a discipline, computer science spans a range of topics from theoretical studies of algorithms, computation and information to the practical issues of implementing computational systems in hardware and software"},
            {class:"Biology",image:biology,description:"Biology is the scientific study of life. It is a natural science with a broad scope but has several unifying themes that tie it together as a single, coherent field. For instance, all organisms are made up of cells that process hereditary information encoded in genes, which can be transmitted to future generations"},
            {class:"Criminology",image:criminology,description:"Criminology is an interdisciplinary field in both the behavioural and social sciences, which draws primarily upon the research of sociologists, political scientists, economists, psychologists, philosophers, psychiatrists, biologists, social anthropologists, as well as scholars of law"},
            {class:"Sociology and Anthropology",image:sociologyAnthropology,description:"Sociology is a social science that focuses on society, human social behaviour, patterns of social relationships, social interaction, and aspects of culture associated with everyday life. It uses various methods of empirical investigation and critical analysis to develop a body of knowledge about social order and social change"},
            {class:"Public Health Care",image:publicHealthCare,description:"Publicly funded healthcare is a form of health care financing designed to meet the cost of all or most healthcare needs from a publicly managed fund. Usually this is under some form of democratic accountability, the right of access to which are set down in rules applying to the whole population contributing to the fund or receiving benefits from it"},
            {class:"Nursing",image:nursing,description:"Nursing is a profession within the health care sector focused on the care of individuals, families, and communities so they may attain, maintain, or recover optimal health and quality of life. Nurses may be differentiated from other health care providers by their approach to patient care, training, and scope of practice. Nurses practice in many specialties with differing levels of prescription authority"},
            {class:"Geotechnical Engineering",image:geotechnicalEngineering,description:"Geotechnical engineering, also known as geotechnics, is the branch of civil engineering concerned with the engineering behavior of earth materials. It uses the principles of soil mechanics and rock mechanics for the solution of its respective engineering problems. It also relies on knowledge of geology, hydrology, geophysics, and other related sciences"},
            {class:"Environmental Engineering",image:enviromantalEngineering,description:"Environmental engineering is a job type that is a professional engineering discipline and takes from broad scientific topics like chemistry, biology, ecology, geology, hydraulics, hydrology, microbiology, and mathematics to create solutions that will protect and also improve the health of living organisms and improve the quality of the environment"},
            {class:"Architectural Engineering",image:architecturalEngineering,description:"Architectural engineering, also known as building engineering or architecture engineering, is an engineering discipline that deals with the technological aspects and multi-disciplinary approach to planning, design, construction and operation of buildings, such as analysis and integrated design of environmental systems (energy conservation, HVAC, plumbing, lighting, fire protection, acoustics, vertical and horizontal transportation, electrical power systems), structural systems, behavior and properties of building components and materials, and construction management"},
            {class:"psychology",image:psychology,description:"Psychology is the science of mind and behavior. Psychology includes the study of conscious and unconscious phenomena, as well as feelings and thought. It is an academic discipline of immense scope"},
            {class:"Nutrition Science",image:nutritionScience,description:"Nutrition is the biochemical and physiological process by which an organism uses food to support its life. It includes ingestion, absorption, assimilation, biosynthesis, catabolism and excretion"}];
    export const accountDescription = [
            {name:"firstName",placeholder:"Enter first name",type:"text",value:"firstName",hint:"Length: 2-20, Most include: a-z, A-Z"},
            {name:"lastName",placeholder:"Enter last name",type:"text",value:"lastName",hint:"Length: 2-20, Most include: a-z, A-Z"},
            {name:"username",placeholder:"Enter user name",type:"text",value:"usename",hint:"Length: 2-10, Most include: a-z, A-Z, 0-9"},
            {name:"password",placeholder:"Enter password",type:"password",value:"password",hint:"Length: 4-12 Most include: a-z, A-Z, 0-9"},
            {name:"email",placeholder:"Enter email",type:"text",value:"email",hint:"Most include: a-z, A-Z, 0-9 + @ + a-z, A-Z, 0-9 + . + a-z, A-Z"},
            {name:"emailVer",placeholder:"Enter email again",type:"text",value:"emailVer",hint:"Most include: a-z, A-Z, 0-9 + @ + a-z, A-Z, 0-9 + . + a-z, A-Z"},
            {name:"phone",placeholder:"Enter phone number",type:"text",value:"phone",hint:"Length: 10, Most include: 0-9"}
    ]
