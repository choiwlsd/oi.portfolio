import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";
import ProjectsPage from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import AboutPage from "@/pages/About";
import AwardsPage from "@/pages/Awards";


function ScrollToTop() {
  const [location] = useLocation();
  const pathname = location.split("?")[0];

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function Router() {
  return (
      <>
        <ScrollToTop />
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/about"} component={AboutPage} />
          <Route path={"/projects"} component={ProjectsPage} />
          <Route path={"/projects/:id"} component={ProjectDetail} />
          <Route path={"/awards"} component={AwardsPage} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
