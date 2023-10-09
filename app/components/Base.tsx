import Header from "./Header";
import Paragraph from "./Paragraph";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-4 font-bold">
        <Header title={"Monikka Edgeston"} />
      </div>
      <div className="flex mb-4">
        <div className="w-1/2">
          <div className="mb-3 font-bold">
            <Paragraph size={"large"}>
              Front-End Engineer at Vail Systems
            </Paragraph>
          </div>
          <div className="mb-4">
            <Paragraph italics={true}>
              {" "}
              I enjoy thinking, code, creating solutions, and helping others.
              Passionate about tech and people.
            </Paragraph>
          </div>
        </div>
        <div className="w-1/2">
          <div className="mb-4">
            <Paragraph>
              {" "}
              I've been IT for the past 5 years. I've worked in support,
              networking, and am now a Software Engineer. I love learning, code,
              and helping others.
            </Paragraph>
          </div>
        </div>
      </div>
    </main>
  );
}
