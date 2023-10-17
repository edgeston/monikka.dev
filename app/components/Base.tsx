import Header from "./Header";
import Links from "./Link";
import Paragraph from "./Paragraph";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center mx-48 my-24">
      <div className="mb-8 font-bold">
        <Header title={"Monikka Edgeston"} />
      </div>
      <div className="flex mb-4 space-x-36">
        <div className="w-1/2">
          <div className="mb-8 font-bold">
            <Paragraph size={"large"}>
              Front-End Engineer at{" "}
              <i>
                <strong>Vail Systems</strong>
              </i>
            </Paragraph>
          </div>
          <div className="mb-16">
            <Paragraph italics={true}>
              {" "}
              I enjoy thinking, code, creating solutions, and helping others.
              Passionate about tech and people.
            </Paragraph>
          </div>
          <div className="mb-4 items-center">
            <Links linkName={"About"} href={"/"}></Links>
            <Links
              linkName={"Experience"}
              href={"https://www.google.com"}
            ></Links>
            <Links
              linkName={"Projects"}
              href={"https://www.wikipedia.com"}
            ></Links>
          </div>
        </div>
        <div className="w-1/2">
          <div className="mb-4">
            <Paragraph>
              {" "}
              I&rsquo;ve been IT for the past 5 years. I&rsquo;ve worked in
              support, networking, and am now a Software Engineer. I love
              learning, code, and helping others.
            </Paragraph>
          </div>
        </div>
      </div>
    </main>
  );
}
