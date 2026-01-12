import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen, Video, Code, Users } from "lucide-react";

const resources = [
  {
    category: "Official Documentation",
    icon: BookOpen,
    items: [
      { name: "FTC Game Manual", url: "https://www.firstinspires.org/resource-library/ftc/game-and-season-info", description: "Official rules and regulations" },
      { name: "REV Robotics Documentation", url: "https://docs.revrobotics.com/", description: "Control Hub, motors, and sensors" },
      { name: "goBILDA Knowledge Base", url: "https://www.gobilda.com/knowledge-base/", description: "Build system guides and specs" },
      { name: "FRC WPILib", url: "https://docs.wpilib.org/", description: "FRC programming documentation" },
    ],
  },
  {
    category: "Control Theory Resources",
    icon: Code,
    items: [
      { name: "CTRL ALT FTC", url: "https://www.ctrlaltftc.com/", description: "Control theory for FTC robots" },
      { name: "Controls Engineering in FRC", url: "https://file.tavsys.net/control/controls-engineering-in-frc.pdf", description: "Comprehensive control theory guide" },
      { name: "PID Without a PhD", url: "https://www.wescottdesign.com/articles/pid/pidWithoutAPhd.pdf", description: "Practical PID explanation" },
      { name: "Roadrunner Documentation", url: "https://learnroadrunner.com/", description: "Motion profiling library for FTC" },
    ],
  },
  {
    category: "Video Tutorials",
    icon: Video,
    items: [
      { name: "FTC Tutorials", url: "https://www.youtube.com/@FIRSTTechChallenge", description: "Official FTC YouTube channel" },
      { name: "REV Robotics", url: "https://www.youtube.com/@REVRobotics", description: "Build and programming tutorials" },
      { name: "Game Manual 0", url: "https://gm0.org/", description: "Community-driven FTC guide" },
    ],
  },
  {
    category: "Community Forums",
    icon: Users,
    items: [
      { name: "FTC Discord", url: "https://discord.gg/first-tech-challenge", description: "Active FTC community" },
      { name: "Chief Delphi", url: "https://www.chiefdelphi.com/", description: "FRC/FTC discussion forum" },
      { name: "r/FTC Reddit", url: "https://www.reddit.com/r/FTC/", description: "FTC subreddit community" },
    ],
  },
  {
    category: "Supplier Links",
    icon: ExternalLink,
    items: [
      { name: "REV Robotics", url: "https://www.revrobotics.com/", description: "FTC motors, electronics, structure" },
      { name: "goBILDA", url: "https://www.gobilda.com/", description: "Build system and components" },
      { name: "AndyMark", url: "https://www.andymark.com/", description: "FTC/FRC parts and kits" },
      { name: "West Coast Products", url: "https://www.wcproducts.com/", description: "FRC drivetrain components" },
      { name: "McMaster-Carr", url: "https://www.mcmaster.com/", description: "General hardware and materials" },
    ],
  },
];

const credits = [
  {
    title: "Practical Guide to Robotics",
    authors: "Phoebe Xu & Grace Yu (Entradox Robotics)",
    year: "2021",
    description: "Comprehensive robotics glossary, build kit comparisons, and technical specifications",
  },
  {
    title: "CTRL ALT FTC",
    authors: "FTC Control Theory Community",
    year: "2023",
    description: "Control theory tutorials, PID tuning guides, and advanced control algorithms",
  },
  {
    title: "Game Manual 0",
    authors: "FTC Community Contributors",
    year: "2024",
    description: "Community-driven guide covering all aspects of FTC competition",
  },
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Resources & Credits</h1>
        <p className="text-lg text-muted-foreground">
          Additional learning materials and acknowledgments
        </p>
      </div>

      <div className="space-y-8">
        {resources.map((section) => (
          <div key={section.category}>
            <div className="mb-4 flex items-center space-x-2">
              <section.icon className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">{section.category}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {section.items.map((item) => (
                <Card key={item.name} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between text-base">
                      {item.name}
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline break-all"
                    >
                      {item.url}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Credits & Acknowledgments</h2>
        <div className="space-y-4">
          {credits.map((credit) => (
            <Card key={credit.title}>
              <CardHeader>
                <CardTitle>{credit.title}</CardTitle>
                <CardDescription>
                  {credit.authors} ({credit.year})
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{credit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="mt-12 border-primary/50 bg-primary/5">
        <CardHeader>
          <CardTitle>About This Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This comprehensive drivetrain guide was created to help FTC, FRC, and FLL teams master robot drivetrain design, optimization, and control systems.
          </p>
          <p>
            All content is provided for educational purposes. We've carefully cited our sources and built upon the excellent work of the robotics community.
          </p>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Built with:</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
              <li>Next.js 14 (React framework)</li>
              <li>TypeScript (type-safe development)</li>
              <li>Tailwind CSS (styling)</li>
              <li>shadcn/ui (component library)</li>
              <li>Deployed on Vercel</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
