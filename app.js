const learn = "https://learn.microsoft.com/fabric/";
const blueprints = [
  ["Lakehouse", "A team needs open-format files in OneLake plus a SQL analytics endpoint that business analysts can query without moving data. Which Fabric item fits best?", ["Lakehouse", "KQL database", "Eventstream", "Dashboard"], 0, "A lakehouse stores data in Delta tables and files and includes a SQL analytics endpoint.", "data-engineering/lakehouse-overview"],
  ["Lakehouse", "An ingestion process writes curated data to a Fabric lakehouse table. Which table format supports ACID transactions and is the native choice for lakehouse tables?", ["Delta Lake", "CSV", "JSON Lines", "Parquet without a transaction log"], 0, "Lakehouse tables are Delta tables; Delta adds a transaction log and ACID capabilities over Parquet files.", "data-engineering/lakehouse-overview"],
  ["Shortcuts", "Data already exists in an ADLS Gen2 account. The team wants Fabric to access it without copying it into OneLake. What should they create?", ["A OneLake shortcut", "A dataflow copy", "A second warehouse", "A Power BI dashboard"], 0, "A shortcut provides a pointer to data in another storage location, avoiding data duplication.", "onelake/onelake-shortcuts"],
  ["Warehouse", "A reporting workload needs T-SQL-first modeling, loading, and querying of relational tables in Fabric. Which item is the most direct fit?", ["Warehouse", "Notebook", "Eventstream", "Reflex item"], 0, "Fabric warehouses provide a T-SQL experience for relational data warehousing.", "data-warehouse/data-warehousing"],
  ["Pipelines", "A process must copy data, run a notebook, and then run a stored procedure on a schedule. Which Fabric feature orchestrates those activities?", ["Data pipeline", "Semantic model", "KQL queryset", "Lakehouse explorer"], 0, "Data pipelines orchestrate activities and can be scheduled or triggered.", "data-factory/data-factory-overview"],
  ["Pipelines", "A pipeline must use the same source folder in development and production. What should the author use instead of hard-coding the folder?", ["A pipeline parameter", "A dashboard tile", "A Delta transaction", "A KQL materialized view"], 0, "Parameters make pipeline values configurable across runs and environments.", "data-factory/parameters"],
  ["Notebooks", "An engineer needs to use Spark code to transform raw files into Delta tables and wants interactive development. What should they use?", ["A Fabric notebook", "A SQL dashboard", "A deployment pipeline stage", "A sensitivity label"], 0, "Fabric notebooks support Spark-based data engineering with Python, Scala, SQL, and R.", "data-engineering/how-to-use-notebook"],
  ["Spark", "A Spark transformation is slow because a small lookup table is repeatedly joined to a much larger fact table. Which approach commonly reduces shuffle for the small table?", ["Broadcast the small lookup table", "Convert the fact table to CSV", "Create an Eventstream", "Disable partitioning"], 0, "Broadcast joins can distribute a small table to executors instead of shuffling the larger data set.", "data-engineering/lakehouse-table-maintenance"],
  ["Medallion", "Raw source data must remain traceable before cleaning and business transformations. In a medallion design, where should it first land?", ["Bronze layer", "Gold layer", "Semantic model", "Warehouse endpoint only"], 0, "Bronze holds raw ingested data; Silver refines it and Gold provides business-ready data.", "onelake/onelake-medallion-lakehouse-architecture"],
  ["Medallion", "Data has been cleaned, standardized, and conformed across sources but is not yet an aggregated business-serving layer. Which medallion layer is appropriate?", ["Silver layer", "Bronze layer", "Gold layer", "Eventstream layer"], 0, "Silver contains validated and enriched data after the raw Bronze stage.", "onelake/onelake-medallion-lakehouse-architecture"],
  ["KQL Database", "Operations analysts need low-latency exploration of high-volume, time-series telemetry using KQL. What should receive the data?", ["KQL database", "Warehouse", "Dataflow Gen2", "Lakehouse shortcut"], 0, "KQL databases are designed for real-time analytics on structured, semi-structured, and time-series data.", "real-time-intelligence/database"],
  ["KQL", "A KQL query needs to filter rows before an expensive aggregation. Which operator should be used to reduce rows early?", ["where", "project-away", "render", "union"], 0, "Use where to filter records; filtering early is a common query-performance practice.", "data-explorer/kusto/query/tutorials/learn-common-operators"],
  ["Real-Time Intelligence", "Streaming device events must be ingested, transformed, and routed to multiple Fabric destinations with a no-code canvas. Which item should be used?", ["Eventstream", "Warehouse", "Dataflow Gen2", "Deployment pipeline"], 0, "Eventstreams ingest, transform, and route real-time events to Fabric destinations.", "real-time-intelligence/eventstreams/overview"],
  ["Real-Time Intelligence", "An eventstream should retain events for interactive KQL analysis after ingestion. Which destination is appropriate?", ["KQL database", "A static CSV export", "A semantic model only", "A deployment pipeline"], 0, "Eventstreams can route events to a KQL database for real-time analytics.", "real-time-intelligence/eventstreams/add-destination"],
  ["Dataflows", "A citizen developer needs a low-code, Power Query-based process to ingest and transform data before writing it to Fabric destinations. Which tool fits?", ["Dataflow Gen2", "KQL queryset", "Spark job definition", "Shortcut"], 0, "Dataflow Gen2 provides a Power Query-based low-code data preparation experience.", "data-factory/dataflows-gen2-overview"],
  ["Security", "A workspace should be available only to a group of engineers who need to create and manage Fabric items. Where should access be granted?", ["The workspace role", "A report visual", "A Delta table partition", "The browser cache"], 0, "Workspace roles control access to workspace content and management capabilities.", "fundamentals/roles-workspaces"],
  ["Security", "A shared lakehouse contains personally sensitive columns. The organization needs the classification to persist with supported Fabric items. What should be applied?", ["A sensitivity label", "A notebook parameter", "A KQL operator", "A pipeline retry policy"], 0, "Sensitivity labels help classify and protect sensitive organizational information.", "governance/service-security-sensitivity-label-overview"],
  ["Governance", "Data stewards need to discover Fabric data assets, understand lineage, and find ownership information across the organization. Which Microsoft service supports this governance work?", ["Microsoft Purview", "Eventstream", "Spark runtime", "SQL analytics endpoint"], 0, "Microsoft Purview provides governance capabilities including catalog and lineage experiences.", "governance/microsoft-purview-fabric"],
  ["Monitoring", "A scheduled pipeline failed overnight. What is the first Fabric location to inspect activity-level execution details and error messages?", ["The pipeline run history", "The lakehouse Files folder", "A deployment pipeline", "The workspace description"], 0, "Pipeline monitoring and run history show activity status, duration, and errors.", "data-factory/monitor-pipeline-runs"],
  ["Monitoring", "Engineers want a Fabric-wide view of capacity consumption, item activity, and operations telemetry. Which capability is intended for this?", ["Monitoring hub", "A shortcut", "A warehouse table only", "A sensitivity label"], 0, "The Monitoring hub centralizes monitoring information for Fabric activities.", "admin/monitoring-hub"],
  ["CI/CD", "A team wants to promote Fabric content from development to test to production using defined stages. Which Fabric feature is designed for this?", ["Deployment pipelines", "Eventstreams", "KQL dashboards", "OneLake shortcuts"], 0, "Deployment pipelines support staged promotion of Fabric content across environments.", "cicd/deployment-pipelines/intro-to-deployment-pipelines"],
  ["CI/CD", "Engineers want version control and automated deployment of supported Fabric workspace items. Which integration should they configure?", ["Git integration", "A sensitivity label", "A KQL function", "A dataflow refresh only"], 0, "Git integration connects a Fabric workspace to a repository for source control and collaboration.", "cicd/git-integration/intro-to-git-integration"],
  ["OneLake", "A data engineer wants a single logical data lake for the organization, with Fabric experiences using the same data rather than copying it between silos. What is the core Fabric storage foundation?", ["OneLake", "Power BI Report Server", "Azure DevOps Boards", "A local notebook cache"], 0, "OneLake is the unified logical data lake for the organization in Fabric.", "onelake/onelake-overview"],
  ["Data ingestion", "A copy activity must read a file-based source and load it into a lakehouse on a recurring schedule. What is a suitable orchestration pattern?", ["Copy activity in a scheduled data pipeline", "A manually refreshed report", "A KQL dashboard", "A sensitivity label"], 0, "A data pipeline can use Copy activity and a schedule to automate ingestion.", "data-factory/copy-data-activity"],
  ["Delta", "A Delta table receives many small writes. Analysts report degraded read performance. What maintenance action can consolidate small files?", ["Run OPTIMIZE on the Delta table", "Export every table to JSON", "Create a new Eventstream", "Remove the transaction log"], 0, "OPTIMIZE compacts small Delta files to improve read performance.", "data-engineering/lakehouse-table-maintenance"],
  ["Semantic models", "A curated Gold layer is ready. Report authors need consistent measures, relationships, and business-friendly fields. What should be built on top of the data?", ["A semantic model", "An Eventstream", "A KQL ingestion mapping", "A shortcut"], 0, "A semantic model provides the business layer of relationships, calculations, and metadata for reporting.", "fundamentals/semantic-models"],
  ["SQL analytics endpoint", "An analyst wants to query lakehouse Delta tables using T-SQL without copying them into a separate SQL database. Which lakehouse capability should they use?", ["SQL analytics endpoint", "Eventstream destination", "Dataflow Gen2", "Git integration"], 0, "Every lakehouse includes a SQL analytics endpoint for querying lakehouse tables with SQL.", "data-engineering/lakehouse-sql-analytics-endpoint"],
  ["Capacity", "A Fabric workload is throttled because the organization has insufficient available compute. What resource is being consumed and managed?", ["Fabric capacity", "A sensitivity label", "A OneLake shortcut", "A notebook cell"], 0, "Fabric capacity provides the compute resources used by Fabric workloads.", "enterprise/licenses"],
  ["Recovery", "Before a risky notebook change, a team wants a recoverable versioned history of its workspace content. What practice best supports this?", ["Commit the workspace items through Git integration", "Rename the workspace", "Clear the browser cache", "Copy screenshots into a report"], 0, "Git integration gives version history and supports collaborative source control for workspace items.", "cicd/git-integration/intro-to-git-integration"],
  ["Data quality", "A Silver-layer process must stop bad records from reaching trusted tables while retaining them for investigation. What is the best design?", ["Validate records and route failures to a quarantine location", "Delete every raw input file", "Load all records directly to Gold", "Disable schema checks"], 0, "Validating data before publishing trusted outputs and retaining rejected records supports reliable, traceable pipelines.", "onelake/onelake-medallion-lakehouse-architecture"]
];

const organizations = ["Northwind Health", "Contoso Retail", "Fabrikam Logistics", "Adventure Works", "Wingtip Toys", "Tailspin Energy", "Woodgrove Bank", "Lucerne Publishing", "Alpine Ski House", "Coho Winery"];
let questions = [], index = 0, score = 0, answered = false;
const $ = id => document.getElementById(id);

function shuffle(items) { return [...items].sort(() => Math.random() - .5); }
function buildBank() {
  return blueprints.flatMap((item, templateIndex) => Array.from({ length: 4 }, (_, variation) => {
    const [domain, prompt, options, correct, note, path] = item;
    const company = organizations[(templateIndex + variation * 3) % organizations.length];
    const optionsWithCorrectness = options.map((text, optionIndex) => ({ text, correct: optionIndex === correct }));
    return { domain, prompt: `${company}: ${prompt}`, options: shuffle(optionsWithCorrectness), note, source: `${learn}${path}` };
  }));
}

function renderQuestion() {
  answered = false;
  const current = questions[index];
  $("progress").textContent = `Question ${index + 1} of ${questions.length}`;
  $("score").textContent = `Score: ${score} / ${index}`;
  $("meter-fill").style.width = `${(index / questions.length) * 100}%`;
  $("domain").textContent = current.domain.toUpperCase();
  $("question-text").textContent = current.prompt;
  $("feedback").className = "feedback hidden";
  $("next").classList.add("hidden");
  const choices = $("choices"); choices.innerHTML = "";
  current.options.forEach(option => {
    const button = document.createElement("button"); button.className = "choice"; button.textContent = option.text;
    button.addEventListener("click", () => answer(option, button)); choices.append(button);
  });
}

function answer(selected, button) {
  if (answered) return; answered = true;
  const current = questions[index], correctOption = current.options.find(option => option.correct);
  document.querySelectorAll(".choice").forEach(choice => choice.disabled = true);
  if (selected.correct) { score++; button.classList.add("correct"); } else { button.classList.add("wrong"); [...document.querySelectorAll(".choice")].find(choice => choice.textContent === correctOption.text).classList.add("correct"); }
  $("score").textContent = `Score: ${score} / ${index + 1}`;
  const feedback = $("feedback"); feedback.className = `feedback ${selected.correct ? "good" : "bad"}`;
  feedback.innerHTML = `<strong>${selected.correct ? "Correct." : "Not quite."}</strong><p><b>Correct answer:</b> ${correctOption.text}</p><p><b>Study note:</b> ${current.note}</p><a href="${current.source}" target="_blank" rel="noopener">Read the Microsoft Learn documentation ↗</a>`;
  $("next").textContent = index + 1 === questions.length ? "See results" : "Next question";
  $("next").classList.remove("hidden");
}

function finishOrNext() { if (!answered) return; index++; if (index < questions.length) renderQuestion(); else finish(); }
function finish() { $("quiz").classList.add("hidden"); $("complete").classList.remove("hidden"); const percent = Math.round(score / questions.length * 100); $("complete").innerHTML = `<h2>Session complete</h2><p>You answered <strong>${score} of ${questions.length}</strong> correctly (${percent}%).</p><p>${percent >= 80 ? "Strong work—review any missed explanations and expand to a longer session." : "Review the linked notes for missed questions, then retry with a fresh random order."}</p><button class="primary" id="again">Start another session</button>`; $("again").addEventListener("click", start); }
function start() { const count = Number($("length").value); questions = shuffle(buildBank()).slice(0, count); index = 0; score = 0; $("empty").classList.add("hidden"); $("complete").classList.add("hidden"); $("quiz").classList.remove("hidden"); renderQuestion(); window.scrollTo({ top: 0, behavior: "smooth" }); }
$("start").addEventListener("click", start); $("restart").addEventListener("click", start); $("next").addEventListener("click", finishOrNext);
