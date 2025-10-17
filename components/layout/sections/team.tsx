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

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "https://www.pinterest.com/pin/426293921019889069/", // Add your image
      firstName: "Your",
      lastName: "Name",
      positions: ["Fullstack Developer", "Project Lead"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/yourprofile",
        },
        {
          name: "Github",
          url: "https://github.com/yourusername",
        },
        {
          name: "X",
          url: "https://x.com/yourhandle",
        },
      ],
    },
    {
      imageUrl: "https://www.pinterest.com/pin/426293921019889069/",
      firstName: "Frontend",
      lastName: "Developer 1",
      positions: ["Frontend Developer", "UI/UX"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/frontend1",
        },
        {
          name: "Github",
          url: "https://github.com/frontend1",
        },
      ],
    },
    {
      imageUrl: "https://www.pinterest.com/pin/426293921019889069/",
      firstName: "Frontend",
      lastName: "Developer 2",
      positions: ["Frontend Developer", "React Specialist"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/frontend2",
        },
        {
          name: "Github",
          url: "https://github.com/frontend2",
        },
      ],
    },
    {
      imageUrl: "https://www.pinterest.com/pin/426293921019889069/",
      firstName: "Backend",
      lastName: "Developer",
      positions: ["Backend Developer", "API Architecture"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/backend",
        },
        {
          name: "Github",
          url: "https://github.com/backend",
        },
      ],
    },
    {
      imageUrl: "https://www.pinterest.com/pin/426293921019889069/",
      firstName: "Product",
      lastName: "Manager",
      positions: ["Product Manager", "User Research"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/pm",
        },
        {
          name: "X",
          url: "https://x.com/pmhandle",
        },
      ],
    },
  ];

  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Our Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Building Veritas
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A dedicated team of students passionate about transparency, technology, and fighting misinformation
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
        {/* Your card - centered and slightly emphasized */}
        <Card className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg col-span-full sm:col-span-2 lg:col-span-3 xl:col-span-3 max-w-md">
          <CardHeader className="p-0 gap-0">
            <div className="h-full overflow-hidden">
              <Image
                src="/team/placeholder-male.jpg"
                alt="Your Name - Fullstack Developer"
                width={300}
                height={300}
                className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
              />
            </div>
            <CardTitle className="py-6 pb-4 px-6 text-center">
              Your Name
              <span className="block text-lg text-primary font-normal mt-1">Fullstack Developer & Project Lead</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground pb-6">
            Leading the development of Veritas with a focus on transparent, evidence-based claim verification
          </CardContent>
          <CardFooter className="space-x-4 mt-auto justify-center">
            {teamList[0].socialNetworks.map(({ name, url }, index) => (
              <Link
                key={index}
                href={url}
                target="_blank"
                className="hover:opacity-80 transition-all"
              >
                {socialIcon(name)}
              </Link>
            ))}
          </CardFooter>
        </Card>

        {/* Rest of the team in a grid below */}
        {teamList.slice(1).map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg w-full max-w-sm"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`${firstName} ${lastName}`}
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6 text-center">
                  {firstName} {lastName}
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`text-center text-muted-foreground ${
                    index === positions.length - 1 ? "pb-6" : "pb-0"
                  }`}
                >
                  {position}
                </CardContent>
              ))}
              <CardFooter className="space-x-4 mt-auto justify-center">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};