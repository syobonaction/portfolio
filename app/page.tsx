export default function Home() {
  return (
    <div>
      <main>
        <div className="p-8">
          <section>
            <p>Greetings,</p>
            <p>
              I am a software engineer and political economist who is interested in data-driven, automated, and transparent economic planning systems.
            </p>
            <p>
              I beleive that economic planning is not simply an academic practice, and requires deep, conncrete hands-on expertise across the multiplicitous spheres of production.
            </p>
            <p>
              To build a future that pushes human development to its maximum potential, it is critical to harness the manifold powers of technology in the service of man and nature.
              Let&apos;s create this future together.
            </p>
          </section>
          <section className="py-8">
            <h1 className="underline">Papers</h1>
            <ul>
              <li>
                <a className="hover:text-gray-400" target="blank" href="https://archive-ouverte.unige.ch/unige:180212">
                  <p>Theorizing the Modern Information Utility:</p>
                  <p>Analyzing Amazon&apos;s Cloud Computing Capabilities through the Lens of the Historical Tendency Towards the Socialization of Collaborative Networks</p>
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h1 className="underline">Affiliations</h1>
            <ul>
              <li>
                <a className="hover:text-gray-400" target="blank" href="https://www.indep.network/">International Network for Democratic Economic Planning (INDEP)</a>
              </li>
              <li>
                <a className="hover:text-gray-400" target="blank" href="https://urpe.org/">Union for Radical Political Economics (URPE)</a>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
