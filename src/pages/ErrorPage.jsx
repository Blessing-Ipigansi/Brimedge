import { HashLink } from "react-router-hash-link"
import { Helmet } from "react-helmet-async"
import { useEffect } from "react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"


function ErrorPage() {
  const error = useRouteError()

  useEffect(() => {
    if (isRouteErrorResponse(error)) console.error(`${error.status} — ${error.statusText}.`)
    else if (error instanceof Error) console.error(`${error.name} — ${error.message}.`)
    else console.error("An unknown error has occurred.")
  }, [])

  return <>
    <Helmet>
      { (isRouteErrorResponse(error)) ?
        <>
        <title>{error.status} - {error.statusText} | Brimedge</title>
        <meta name="description" content={error.statusText} />
        <meta name="robots" content="noindex" />
        </>
        : (error instanceof Error) ?
        <>
        <title>{error.name} - {error.message} | Brimedge</title>
        <meta name="description" content={`An error has occurred with the following message — ${error.message}`} />
        <meta name="robots" content="noindex" />
        </>
        :
        <>
        <title>UnkownError - An unknown error has occurred | Brimedge</title>
        <meta name="description" content="An unknown error has occured" />
        <meta name="robots" content="noindex" />
        </>
      }
    </Helmet>
    <main>
      <div className="max-w-[1600px] mx-auto min-h-[90vh] pb-20 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center text-center px-4 space-y-[38px]">
          { (isRouteErrorResponse(error)) ?
            <h1 className="mx-auto font-semibold text-brim-blue text-[182px] md:text-[200px]">
              { error.status }</h1>
            : (error instanceof Error) ?
            <h1 className="mx-auto font-semibold text-brim-blue text-[40px] sm:text-[70px] md:text-[92px] lg:text-[120px] xl:text-[140px]">
              "{ error.name }"</h1>
            :<h1 className="mx-auto font-semibold text-brim-blue text-[100px] md:text-[140px]">
              "Unknown Error"</h1>
          }
          { (isRouteErrorResponse(error)) ?
            <h2 className="font-semibold text-[26px] sm:text-[40px] mb-[18px] max-w-[740px]" style={{marginTop: "-4px"}}>
              { error.statusText }.</h2>
            : (error instanceof Error) ?
            <h2 className="font-semibold text-[26px] sm:text-[40px] mb-[18px] max-w-[740px]" style={{marginTop: "-4px"}}>
              { error.message }.</h2>
            :<h2 className="font-semibold text-[26px] sm:text-[40px] mb-[18px] max-w-[740px]" style={{marginTop: "-4px"}}>
              Oops! something went wrong here.</h2>
          }
          <p className="max-w-[700px]">
            We’re sorry for the inconvenience — it looks like an unexpected error has occurred.
            If you know what may have caused this issue, please let us know so we can fix it quickly. You can reach us anytime through our <HashLink to="/contact#page-top" className="text-brim-blue hover:text-accent-blue font-semibold"><span >Contact Page</span> <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="inline h-[14px] w-[14px] stroke-current stroke-[1.5]"><path d="M14.3349 13.3301V6.60645L5.47065 15.4707C5.21095 15.7304 4.78895 15.7304 4.52925 15.4707C4.26955 15.211 4.26955 14.789 4.52925 14.5293L13.3935 5.66504H6.66011C6.29284 5.66504 5.99507 5.36727 5.99507 5C5.99507 4.63273 6.29284 4.33496 6.66011 4.33496H14.9999L15.1337 4.34863C15.4369 4.41057 15.665 4.67857 15.665 5V13.3301C15.6649 13.6973 15.3672 13.9951 14.9999 13.9951C14.6327 13.9951 14.335 13.6973 14.3349 13.3301Z"></path></svg></HashLink></p>
          <div className="grid xl:flex w-full max-w-[700px] justify-center items-center gap-6">
            <div className="flex items-center justify-center">
              <HashLink to="/#page-top">
                <span className="border-b-[3px] border-black font-semibold hover:text-accent-blue hover:border-accent-blue">
                  Do you want to go back home and try again?</span>
              </HashLink>
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

export default ErrorPage
