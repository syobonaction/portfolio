export default function CV() {
  return (
    <div className="p-8">
      <section className="flex flex-col gap-4">
        <div>
          <h1 className="underline">Selected Work Experience</h1>
          <ul className="flex flex-col gap-4">
            <li>
              <h2>Sr. Technical Project Manager | Luxsan Precision Technology</h2>
              <p>Suzhou, China</p>
              <p>2024-Present</p>
            </li>
            <li>
              <h2>Full Stack Software Engineering SME | CompTIA [Contract]</h2>
              <p>Remote</p>
              <p>2023-2024</p>
            </li>
            <li>
              <h2>Intern, Economic Affairs I | United Nations Economic Commission for Europe (UNECE)</h2>
              <p>Geneva, Switzerland</p>
              <p>2023</p>
            </li>
            <li>
              <h2>Auxiliaire de recherche et d&apos;enseignement (ARE) | Université de Genève</h2>
              <p>Geneva, Switzerland</p>
              <p>2022-2023</p>
            </li>
            <li>
              <h2>Software Engineer II | W. W. Grainger</h2>
              <p>Chicago, USA</p>
              <p>2018-2021</p>
            </li>
            <li>
              <h2>Software Engineer | AT&T</h2>
              <p>Arlington Heights, USA</p>
              <p>2015-2018</p>
            </li>
            <li>
              <h2>IT Systems Integrator</h2>
              <p>Peoria, USA</p>
              <p>2013-2015</p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="underline">Education</h1>
          <ul className="flex flex-col gap-4">
            <li>
              <h2>Univeristé de Genève</h2>
              <p>MA, Political Economy of Capitalism</p>
              <p>Cum laude</p>
              <p>2024</p>
            </li>
            <li>
              <h2>Columbia College Chicago</h2>
              <p>BA, Interative Arts and Media</p>
              <p>Summa cum laude</p>
              <p>2011</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-8">
        <h1 className="underline">Links</h1>
        <ul>
          <li>
            <a className="hover:text-gray-400" target="blank" href="https://github.com/syobonaction">github</a>
          </li>
          <li>
            <a className="hover:text-gray-400" target="blank" href="https://www.linkedin.com/in/charles-eugene">linkedin</a>
          </li>
        </ul>
      </section>
    </div>
  )
}