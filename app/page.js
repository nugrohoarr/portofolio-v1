import { projects } from '@/lib/projects'
import Hero from './_components/Hero'
import Project from './_components/Project'
import ProjectsSnip from './_components/ProjectsSnip'
import Skills from './_components/Skills'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Contact from './_components/Contact'
import { Certification } from './_components/Certification'

export default function Home() {
  return (
    <main className='mb-20'>
      <Hero />
      
      <div className="text-center mb-0 mt-7">
        <h1 className="text-xl font-bold">Skills<span className="text-primary">.</span></h1>
        <p className='text-xs'>Some of my skills i learnt in my journey of <br /> self though coding<span className="text-primary">.</span></p>
      </div>
      
      <Skills />
      
      <div className="text-center mb-5">
        <h1 className="text-xl font-bold">Projects<span className="text-primary">.</span></h1>
        <p className='text-xs'>Some of my projects i built, click view all <br /> for all projects<span className="text-primary">.</span></p>
      </div>
      
      <div className='flex gap-2 flex-wrap items-center justify-center md:px-20 lg:px-32 px-5'>
        <Project {...projects[0]} />
        <Project {...projects[1]} />
        <Project {...projects[2]} />
        {/* <Project {...projects[3]} /> */}
      </div>

      <div className='grid place-content-center mt-10 mb-15'>
        <Button asChild variant="secondary"><Link href="/projects">View All Projects</Link></Button>
      </div>

      <div className="text-center -mb-5 mt-20">
        <h1 className="text-xl font-bold">Certifications<span className="text-primary">.</span></h1>
        <p className='text-xs'>Have a look at the certifications that empower<br /> my professional journey.<span className="text-primary">.</span></p>
      </div>

      <Certification />

      <div className="text-center mt-10">
        <h1 className="text-xl font-bold">Contact Me<span className="text-primary">.</span></h1>
        <p className='text-xs'>Feel free to reach out to me with any <br /> questions about the project<span className="text-primary">.</span></p>
      </div>

      <Contact />

      
    </main>
  )
}
