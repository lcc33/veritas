// components/TeamSection.tsx
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface SocialNetwork {
  name: "LinkedIn" | "Github" | "X";
  url: string;
}

interface TeamMember {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetwork[];
  /** optional – used only for the lead card */
  description?: string;
}

export const TeamSection = () => {
  const teamList: TeamMember[] = [
    {
      imageUrl:
        "https://i.pinimg.com/736x/64/65/57/646557efd44fa2d99be6cf2af79be8e6.jpg",
      firstName: "Muhammad",
      lastName: "Is'haq",
      positions: ["Fullstack Developer", "Project Lead"],
      description:
        "Leading the development of Veritas with a focus on transparent, evidence-based claim verification",
      socialNetworks: [
        { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
        { name: "Github", url: "https://github.com/yourusername" },
        { name: "X", url: "https://x.com/yourhandle" },
      ],
    },
    {
      imageUrl: "https://i.pinimg.com/736x/68/80/07/688007906b540c10e6a168eea8d223ee.jpg", // replace with real image
      firstName: "Muhktar",
      lastName: "Yagboyaju",
      positions: ["Frontend Developer", "UI/UX"],
      socialNetworks: [
        { name: "LinkedIn", url: "https://linkedin.com/in/frontend1" },
        { name: "Github", url: "https://github.com/frontend1" },
      ],
    },
    {
      imageUrl: "https://i.pinimg.com/736x/68/80/07/688007906b540c10e6a168eea8d223ee.jpg",
      firstName: "Opulent",
      lastName: "",
      positions: ["Frontend Developer", "React Specialist"],
      socialNetworks: [
        { name: "LinkedIn", url: "https://linkedin.com/in/frontend2" },
        { name: "Github", url: "https://github.com/frontend2" },
      ],
    },
    {
      imageUrl: "https://i.pinimg.com/736x/68/80/07/688007906b540c10e6a168eea8d223ee.jpg",
      firstName: "AbdulMuiz",
      lastName: "",
      positions: ["Backend Developer", "API Architecture"],
      socialNetworks: [
        { name: "LinkedIn", url: "https://linkedin.com/in/backend" },
        { name: "Github", url: "https://github.com/backend" },
      ],
    },
    {
      imageUrl: "https://i.pinimg.com/736x/68/80/07/688007906b540c10e6a168eea8d223ee.jpg",
      firstName: "Ayodele",
      lastName: "Ogunyemi",
      positions: ["Product Manager", "User Research"],
      socialNetworks: [
        { name: "LinkedIn", url: "https://linkedin.com/in/pm" },
        { name: "X", url: "https://x.com/pmhandle" },
      ],
    },
  ];

  const socialIcon = (name: SocialNetwork["name"]) => {
    switch (name) {
      case "LinkedIn":
        return <LinkedInIcon className="h-5 w-5" />;
      case "Github":
        return <GithubIcon className="h-5 w-5" />;
      case "X":
        return <XIcon className="h-5 w-5" />;
    }
  };

  const lead = teamList[0];
  const others = teamList.slice(1);

  return (
    <section id="team" className="container mx-auto py-12 sm:py-20 lg:py-28">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium tracking-widest text-primary uppercase">
          Our Team
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
          Building Veritas
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A dedicated team of students passionate about transparency,
          technology, and fighting misinformation
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {/* ---------- Lead Card (always centered, spans appropriately) ---------- */}
        <Card
          className="col-span-full sm:col-span-2 lg:col-span-3 xl:col-span-2
                     bg-muted/60 dark:bg-card flex flex-col overflow-hidden
                     group/hoverimg w-full max-w-md mx-auto"
        >
          <CardHeader className="p-0">
            <div className="overflow-hidden">
              <Image
                src={lead.imageUrl}
                alt={`${lead.firstName} ${lead.lastName}`}
                width={600}
                height={600}
                className="aspect-square w-full object-cover saturate-0 transition-all duration-300
                           group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.02]"
              />
            </div>
            <CardTitle className="px-6 pt-6 pb-2 text-center">
              {lead.firstName} {lead.lastName}
              <span className="block mt-1 text-lg font-normal text-primary">
                {lead.positions.join(" & ")}
              </span>
            </CardTitle>
          </CardHeader>

          {lead.description && (
            <CardContent className="px-6 pb-4 text-center text-muted-foreground">
              {lead.description}
            </CardContent>
          )}

          <CardFooter className="mt-auto justify-center space-x-4 pb-6">
            {lead.socialNetworks.map((sn, i) => (
              <Link
                key={i}
                href={sn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                {socialIcon(sn.name)}
              </Link>
            ))}
          </CardFooter>
        </Card>

        {/* ---------- Other Team Members ---------- */}
        {others.map((member, idx) => (
          <Card
            key={idx}
            className="bg-muted/60 dark:bg-card flex flex-col overflow-hidden
                       group/hoverimg w-full max-w-sm"
          >
            <CardHeader className="p-0">
              <div className="overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={`${member.firstName} ${member.lastName}`}
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover saturate-0 transition-all duration-300
                             group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.02]"
                />
              </div>
              <CardTitle className="px-6 pt-6 pb-2 text-center">
                {member.firstName} {member.lastName}
              </CardTitle>
            </CardHeader>

            {member.positions.map((pos, i) => (
              <CardContent
                key={i}
                className={`px-6 text-center text-muted-foreground ${
                  i === member.positions.length - 1 ? "pb-4" : "pb-0"
                }`}
              >
                {pos}
              </CardContent>
            ))}

            <CardFooter className="mt-auto justify-center space-x-4 pb-6">
              {member.socialNetworks.map((sn, i) => (
                <Link
                  key={i}
                  href={sn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-all"
                >
                  {socialIcon(sn.name)}
                </Link>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
