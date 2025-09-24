import { HashLink } from "react-router-hash-link"
import { Helmet } from "react-helmet-async"
import { useEffect } from "react"

function NotFoundPage() {
  useEffect(() => {
    console.error("Page not Found")
  }, [])

  return <>
    <Helmet>
      <title>404 - Page Not Found | Brimedge</title>
      <meta name="description" content="The page you are looking for does not exist. Return to the homepage or explore our projects." />
      <meta name="robots" content="noindex" /> 
    </Helmet>
    <main>
      <div className="max-w-[1600px] mx-auto min-h-[90vh] pb-20 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center text-center px-4 space-y-[38px]">
          <h1 className="mx-auto font-semibold text-brim-blue text-[182px] md:text-[200px]">
            404</h1>
          <h2 className="font-semibold text-[40px] mb-[18px] max-w-[740px]" style={{marginTop: "-4px"}}>
            Oops! something went wrong here.</h2>
          <p className="max-w-[700px]">
            It seems like you are trying to access a page that has either been removed or never existed. You've run into an Error 404.</p>
          <div className="grid xl:flex w-full max-w-[700px] justify-center items-center gap-6">
            <div className="flex items-center justify-center">
              <HashLink to="/#page-top">
              <span className="border-b-[3px] border-black font-semibold hover:text-accent-blue hover:border-accent-blue">
                Do you want to go back home and try again?</span></HashLink>
            </div>
            <div className="mt-4 xl:mt-0 flex items-center justify-center">
              <HashLink to="/projects#projects-page" className="px-6 py-3 rounded-[4px] bg-brim-blue hover:bg-accent-blue xl:ml-auto text-white flex items-center gap-1 whitespace-nowrap">
                Explore our portfolio
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
}

export default NotFoundPage
