import { FaPhone, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa'
import { IoMailSharp } from 'react-icons/io5'

function ContactItem({ text, link, children }: { text: string, link: string, children: React.ReactNode }) {
  return (
    <li>
      <Link link={link}>
        <div className="flex gap-2 items-center">
          <div className="grow text-right">{text}</div>
          <div>
            {children}
          </div>
        </div>
      </Link>
    </li>
  )
}

function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-6">
      {children}
    </ul>
  )
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="">
      {children}
    </li>
  )
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="pt-2">
      {children}
    </section>
  )
}

function Article({ noLine = false, children }: { noLine?: boolean, children: React.ReactNode }) {
  return (
    <article className={`py-2 ${noLine ? "" : "border-t-[1px] border-black"}`}>
      {children}
    </article>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl text-gray-700 uppercase font-bold">
      {children}
    </h2>
  )
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl text-gray-700 font-bold">
      {children}
    </h3>
  )
}

function Link({ link, children }: { link: string, children: React.ReactNode }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-700">
      {children}
    </a>
  )
}

function Strong({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-bold text-gray-700 inline">
      {children}
    </div>
  )
}

function App() {
  return (
    <main className="h-[1123px] w-[794px] outline outline-current outline-0 p-10 font-anuphan">
      <div className="flex w-full pb-4">

        <div className="grow">
          <h1 className="text-3xl text-gray-700 uppercase font-bold">Péter Szarvas</h1>
          <p className="text-2xl">frontend developer</p>
        </div>

        <ul>
          <ContactItem text="+36 20 2746444" link="tel:+36202746444">
            <FaPhone />
          </ContactItem>
          <ContactItem text="contact@peterszarvas.hu" link="mailto:contact@peterszarvas.hu">
            <IoMailSharp />
          </ContactItem>
          <ContactItem text="linkedin.com/in/peterszarvas94" link="https://www.linkedin.com/in/peterszarvas94/">
            <FaLinkedin />
          </ContactItem>
          <ContactItem text="github.com/peterszarvas94" link="https://github.com/peterszarvas94">
            <FaGithub />
          </ContactItem>
          <ContactItem text="peterszarvas.hu" link="https://peterszarvas.hu">
            <FaGlobe />
          </ContactItem>
        </ul>

      </div>

      <Article noLine>
        <H2>Skills</H2>

        <ul className="flex justify-between">
          <li>React</li>
          <li>Next.js</li>
          <li>Astro.js</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Tailwind</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>REST</li>
          <li>Git</li>
          <li>Node.js</li>
        </ul>
      </Article>

      <Article>
        <H2>Some personal projects</H2>

        <List>
          <ListItem>
            <Link link="https://peterszarvas.hu">peterszarvas.hu</Link> - my personal portfolio, written in React
          </ListItem>
          <ListItem>
            <Link link="https://adri-es-peti.hu">adri-es-peti.hu</Link> - online wedding invitation, React
          </ListItem>
          <ListItem>
            <Link link="https://szeremletanc.hu">szeremletanc.hu</Link> - dancegroup's website, Astro.js, with Wordpress CMS
          </ListItem>
        </List>
      </Article>

      <Article>
        <H2>Experience</H2>

        <Section>
          <H3>Frontend Developer @ Kyndryl</H3>
          <p>October 2022 - present</p>
          <List>
            <ListItem>Developing with <Strong>React</Strong>, <Strong>TypeScript</Strong>, JavaScript ES6+, HTML, CSS</ListItem>
            <ListItem>Understanding Java backend</ListItem>
            <ListItem>Working with <Strong>REST API</Strong></ListItem>
            <ListItem>Using <Strong>Git</Strong> for version control</ListItem>
          </List>
        </Section>

        <Section>
          <H3>Microsoft 365 Administrator 3<sup>rd</sup> level @ Kyndryl</H3>
          <p>2021 - 2022</p>
          <List>
            <ListItem>Managing hybrid Exchange environment, with Azure cloud</ListItem>
            <ListItem>Administrating users and mailboxes</ListItem>
            <ListItem>Supporting Microsoft 365 products (Exchange, Teams, Office...)</ListItem>
            <ListItem>PowerShell scripting for automatization</ListItem>
          </List>
        </Section>

        <Section>
          <H3>Microsoft System Administrator 2<sup>nd</sup> level @ IBM</H3>
          <p>2020 - 2021</p>
          <List>
            <ListItem>Administrating Windows servers</ListItem>
            <ListItem>Managing data security, user access, backup, file recovery</ListItem>
            <ListItem>Overseeing alerts, solving software issues, arranging hardware repairs</ListItem>
            <ListItem>Handling phone calls and emails from the customers (in English)</ListItem>
          </List>
        </Section>
      </Article>

      <Article>
        <H2>Education</H2>
        <Section>
          <H3>Computer Science @ University of Szeged</H3>
          <p>3 semesters</p>
        </Section>
      </Article>

      <Article>
        <H2>Other skills and certifications</H2>
        <List>
          <ListItem><Strong>Azure</Strong> AZ-900 and AZ-104 certifications</ListItem>
          <ListItem>Upper-intermediate <Strong>English</Strong> knowledge</ListItem>
        </List>
      </Article>
    </main>
  )
}

export default App
