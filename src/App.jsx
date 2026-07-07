import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { HelmetProvider } from 'react-helmet-async'
import HomeProvider from './context/provider/HomeProvider.jsx'
import ProjectsProvider from "./context/provider/ProjectsProvider.jsx"
import GlobalProvider from "./context/provider/GlobalProvider.jsx"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Delete
import ReactStateTutorialPage from './pages/ReactStateTutorialPage.jsx'
import ReactContentfulTutorial from './pages/ReactContentfulTutorial.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(<>
    <Route path='/' element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path='/about-us' element={<AboutUsPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/projects/:projectId' element={<ProjectPage />} />
    </Route>
    <Route path='*' element={<NotFoundPage />} />
    {/* Delete */}
    <Route path='/react-state-tutorial' element={<ReactStateTutorialPage />} />
    <Route path='/contentful-tutorial' element={<ReactContentfulTutorial />} />
    </>
  )
);

function App() {
  return <>
  <GlobalProvider>
  <ProjectsProvider>
  <HomeProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </HomeProvider>
  </ProjectsProvider>
  </GlobalProvider>
</>
}
export default App
